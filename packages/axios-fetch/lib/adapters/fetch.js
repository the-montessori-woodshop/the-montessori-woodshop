"use strict";

var utils = require("./../utils");
var settle = require("./../core/settle");
var buildURL = require("./../helpers/buildURL");
var buildFullPath = require("../core/buildFullPath");
var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
var createError = require("../core/createError");
const cookies = require("./../helpers/cookies");

const createRequestHeaders = (config) => {
  const requestHeaders = new Headers();

  if (config.auth) {
    var username = config.auth.username || "";
    var password = config.auth.password || "";
    config.headers.Authorization =
      "Basic " + buf.toString("base64")(username + ":" + password);
  }

  for (var key in config.headers) {
    if (config.headers.hasOwnProperty(key)) {
      requestHeaders.append(key, config.headers[key]);
    }
  }
  requestHeaders.append(
    "Access-Control-Allow-Credentials",
    config.withCredentials
  );

  return requestHeaders;
};

const createRequestMethod = (config) => config.method.toUpperCase();

const createRequestBody = (config) => {
  const method = createRequestMethod(config);
  if (method !== "GET") {
    return config.data;
  }
  return null;
};

const createRequestCredentials = (config) => {
  const baseValue = config.withCredentials ? "include" : "same-origin";
  const credentials =
    process.env.NODE_ENV === "production" ? undefined : baseValue;
  return credentials;
};

const createRequestUrl = (config) => {
  var fullPath = buildFullPath(config.baseURL, config.url);
  const requestUrl = buildURL(fullPath, config.params, config.paramsSerializer);
  return requestUrl;
};

const createRequestAborter = (config, reject) => {
  // prep abort controller
  var aborter = new AbortController();
  if (config.cancelToken) {
    // Handle cancellation
    config.cancelToken.promise.then(function onCanceled(cancel) {
      aborter.abort();
      reject(cancel);
    });
  }
};

module.exports = function fetchAdapter(config) {
  return new Promise(function fetchAdapterPromise(resolve, reject) {
    var responseType = config.responseType || "json";

    const requestBody = createRequestBody(config);
    const requestHeaders = createRequestHeaders(config);
    const requestMethod = createRequestMethod(config);
    // const requestCredentials = createRequestCredentials(config);
    const requestUrl = createRequestUrl(config);
    const requestAborter = createRequestAborter(config, reject);

    // setup timeout listener
    function listenForTimeout() {
      if (!!config.timeout) {
        setTimeout(function popTimeout() {
          requestAborter.abort();
          reject(
            createError(timeoutErrorMessage, config, "ECONNABORTED", config)
          );
        }, config.timeout);
      }
    }

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue =
        (config.withCredentials || isURLSameOrigin(requestUrl)) &&
        config.xsrfCookieName
          ? cookies.read(config.xsrfCookieName)
          : undefined;

      if (xsrfValue) {
        requestHeaders.append(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Create the request
    const request = new Request(requestUrl, {
      body: requestBody,
      method: requestMethod,
      // credentials: undefined,
      headers: requestHeaders,
    });

    const fetchRequest = fetch(request);

    listenForTimeout();

    const processJsonResponse = (jsonPromise, axiosResponse) => {
      jsonPromise.then((data) => {
        settle(resolve, reject, {
          ...axiosResponse,
          data: JSON.stringify(data),
        });
      });
    };

    const processBlobResponse = (blobPromise, axiosResponse) => {
      blobPromise.then((blob) => {
        let objectURL = URL.createObjectURL(blob);
        settle(resolve, reject, {
          ...axiosResponse,
          data: objectURL,
        });
      });
    };

    const processTextResponse = (textPromise, axiosResponse) => {
      textPromise.then((data) => {
        settle(resolve, reject, {
          ...axiosResponse,
          data,
        });
      });
    };

    fetchRequest.then((response) => {
      if (response.ok) {
        if (utils.isFormData(requestBody)) {
          delete requestHeaders["Content-Type"];
        }

        const baseResponse = {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          config,
          request,
        };

        if (responseType === "json") {
          return processJsonResponse(response.json(), baseResponse);
        }

        if (responseType === "blob") {
          return processBlobResponse(response.blob(), baseResponse);
        }

        if (responseType === "text") {
          return processTextResponse(response.text(), baseResponse);
        }
      }

      if (response.status >= 500) {
        reject(
          createError(
            "Server-side error: " +
              response.status +
              " / " +
              response.statusText,
            config,
            response.statusText,
            request,
            response
          )
        );
      } else if (response.status >= 400) {
        reject(
          createError(
            "Client-side error: " +
              response.status +
              " / " +
              response.statusText,
            config,
            response.statusText,
            request,
            response
          )
        );
      } else {
        reject(
          createError(
            "Unknown error",
            config,
            response.statusText,
            request,
            response
          )
        );
      }
    }),
      (error) => {
        reject(createError(`Network Error: ${error}`, config, null, request));
      };
  });
};
