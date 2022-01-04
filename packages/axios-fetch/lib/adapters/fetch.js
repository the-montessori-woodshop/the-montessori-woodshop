"use strict";

var utils = require("./../utils");
var settle = require("./../core/settle");
var buildURL = require("./../helpers/buildURL");
var buildFullPath = require("../core/buildFullPath");
var isURLSameOrigin = require("./../helpers/isURLSameOrigin");
var createError = require("../core/createError");

module.exports = function fetchAdapter(config) {
  return new Promise(function dispatchFetchRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType || "json";

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }

    var init = {};

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      init.credentials = "include";
    }

    // prep abort controller
    var aborter = new AbortController();
    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        aborter.abort();
        reject(cancel);
      });
    }

    // setup timeout listener
    function listenForTimeout() {
      if (!!config.timeout) {
        setTimeout(function popTimeout() {
          aborter.abort();
          reject(
            createError(timeoutErrorMessage, config, "ECONNABORTED", config)
          );
        }, config.timeout);
      }
    }

    // copy headers in
    var headers = new Headers();
    for (var key in requestHeaders) {
      if (requestHeaders.hasOwnProperty(key)) {
        headers.append(key, requestHeaders[key]);
      }
    }

    // build the target URL
    var fullPath = buildFullPath(config.baseURL, config.url);

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require("./../helpers/cookies");

      // Add xsrf header
      var xsrfValue =
        (config.withCredentials || isURLSameOrigin(fullPath)) &&
        config.xsrfCookieName
          ? cookies.read(config.xsrfCookieName)
          : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // kick off the fetch
    var request = new Request(
      buildURL(fullPath, config.params, config.paramsSerializer)
    );
    var method = config.method.toUpperCase();
    var body = method !== "GET" ? requestData : null;
    const fetchRequest = fetch(request, {
      ...init,
      method,
      body,
      headers,
      ...(config.fetchOptions || {}),
    });

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
        if (utils.isFormData(requestData)) {
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
