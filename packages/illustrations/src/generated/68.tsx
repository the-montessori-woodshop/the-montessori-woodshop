import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg68 = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 900 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="transparent" d="M0 0h900v600H0z" />
    <path
      d="M392.689 226.367c-4.518-18.288-47.216-44.997-70.034-28.894-7.003-34.84-13.554-56.567-36.436-73.73-22.882-17.163-61.062 5.271-67.194 52.26-6.132-19.316-37.308-45.35-62.353-23.398-23.172 20.313-25.496 54.349-23.075 73.73h259.092v.032zm-13.53 144.453c-4.037-16.34-42.185-40.202-62.571-25.816-6.257-31.127-12.111-50.539-32.554-65.873-20.444-15.334-54.555 4.709-60.034 46.691-5.478-17.258-33.333-40.517-55.708-20.905-20.703 18.149-22.78 48.558-20.617 65.874h231.484v.029zM759 227.367c-3.756-15.202-39.249-37.404-58.216-24.018-5.821-28.961-11.267-47.022-30.288-61.289-19.021-14.267-50.758 4.382-55.855 43.442-5.098-16.057-31.013-37.698-51.831-19.45-19.262 16.885-21.194 45.178-19.182 61.288H759v.027zm16.848 149c-4.519-18.288-47.216-44.997-70.034-28.894-7.003-34.84-13.555-56.567-36.437-73.73-22.882-17.163-61.061 5.271-67.193 52.26-6.132-19.316-37.309-45.35-62.353-23.398-23.172 20.313-25.496 54.349-23.075 73.73h259.092v.032z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M532.518 187.914c-2.918-11.798-30.49-29.03-45.224-18.641-4.522-22.478-8.753-36.495-23.529-47.568-14.775-11.073-39.429 3.401-43.389 33.716-3.96-12.462-24.092-29.258-40.264-15.095-14.963 13.105-16.463 35.064-14.9 47.567h167.306v.021z"
      fill="url(#a)"
    />
    <path
      d="M392.566 468.929c-2.918-11.799-30.489-29.03-45.223-18.642-4.523-22.477-8.753-36.494-23.529-47.567s-39.43 3.4-43.39 33.716c-3.959-12.462-24.091-29.258-40.263-15.096-14.964 13.105-16.464 35.064-14.901 47.568h167.306v.021zM516 459.25c2.139-8.649 22.35-21.28 33.151-13.665 3.315-16.477 6.416-26.752 17.247-34.869 10.832-8.117 28.904 2.493 31.807 24.715 2.902-9.135 17.66-21.447 29.514-11.065 10.969 9.606 12.069 25.703 10.923 34.869H516v.015z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m499.531 96.37 80.8-.312c7.225-.027 10.303-9.392 4.375-13.519l-.252-.172c-8.439-5.755-19.484-5.187-19.484-5.187S563.273 45.886 533.551 46c-26.871.103-37.485 26.517-41.294 41.061-1.237 4.725 2.389 9.328 7.274 9.308z"
      fill="#fff"
    />
    <path
      d="M448.458 403.177v33.098"
      stroke="#E1E4E5"
      strokeWidth={4.288}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m409.863 402.3 8.347 38.925-8.347-38.925z"
      fill="#fff"
    />
    <path
      d="m414.39 404.444 7.393 34.473"
      stroke="#E1E4E5"
      strokeWidth={4.288}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m489.024 402.3-9.453 38.925 9.453-38.925z"
      fill="#fff"
    />
    <path
      d="m484.497 404.444-8.372 34.473"
      stroke="#E1E4E5"
      strokeWidth={4.288}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m469.554 402.057-6.824 38.428 6.824-38.428z"
      fill="#fff"
    />
    <path
      d="m467.254 404.229-6.044 34.033"
      stroke="#E1E4E5"
      strokeWidth={4.288}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m427.693 402.057 6.823 38.428-6.823-38.428z"
      fill="#fff"
    />
    <path
      d="m430.181 404.229 6.042 34.033"
      stroke="#E1E4E5"
      strokeWidth={4.288}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M424.947 83.589c-15.796 6.401-30.101 18.881-41.652 35.984-17.275 25.58-28.09 61.145-28.09 100.626 0 15.748 4.189 34.842 10.64 54.819 6.433 19.923 15.029 40.469 23.656 59.043 8.622 18.565 17.248 35.104 23.72 47.003a762.542 762.542 0 0 0 7.813 14.025c.725 1.268 1.33 2.315 1.8 3.123h12.182l-.117-.638c-.656-3.568-1.593-8.739-2.716-15.164a2098.348 2098.348 0 0 1-8.238-50.775c-5.98-40.057-12.002-89.139-12.002-124.572 0-43.302 3.808-82.623 10.017-111.223a235.5 235.5 0 0 1 2.987-12.251zm31.568 314.623h-13.363c-.115-.617-.243-1.313-.385-2.085-.652-3.547-1.585-8.696-2.704-15.095a2085.405 2085.405 0 0 1-8.205-50.578c-5.978-40.038-11.915-88.605-11.915-123.391 0-42.907 3.779-81.632 9.835-109.526 1.358-6.254 2.821-11.92 4.366-16.94a63.716 63.716 0 0 1 15.306-1.87c5.484 0 10.877.71 16.138 2.082 1.521 4.967 2.962 10.562 4.301 16.728 6.056 27.894 9.835 66.619 9.835 109.526 0 34.786-5.937 83.353-11.915 123.391a2089.688 2089.688 0 0 1-8.206 50.578 1786.092 1786.092 0 0 1-2.96 16.491l-.128.689zm8.136 0h11.417c.469-.808 1.074-1.855 1.799-3.123a756.566 756.566 0 0 0 7.813-14.025c6.472-11.899 15.098-28.438 23.72-47.003 8.626-18.574 17.222-39.12 23.655-59.043 6.451-19.977 10.641-39.071 10.641-54.819 0-39.481-10.815-75.046-28.091-100.626-11.339-16.79-25.333-29.125-40.787-35.627a236.91 236.91 0 0 1 2.889 11.894c6.21 28.6 10.017 67.921 10.017 111.223 0 35.433-6.022 84.515-12.003 124.572a2094.064 2094.064 0 0 1-8.237 50.775 1761.715 1761.715 0 0 1-2.716 15.164l-.117.638zm-87.985-283.116c11.298-16.73 25.426-29.74 41.389-37.23C348.359 91.77 296.049 150.213 296.049 220.2c0 65.442 108.666 182.013 108.666 182.013h11.19a591.03 591.03 0 0 1-1.815-3.151 763.528 763.528 0 0 1-7.896-14.175c-6.529-12.003-15.237-28.697-23.949-47.455-8.708-18.749-17.445-39.615-24.013-59.955-6.55-20.285-11.027-40.303-11.027-57.277 0-40.861 11.178-78.033 29.461-105.103zm145.569 0c-11.492-17.017-25.911-30.184-42.212-37.61C550.702 90.672 604 149.555 604 220.2c0 65.442-108.667 182.013-108.667 182.013h-12.337c.477-.82 1.087-1.877 1.816-3.151a772.855 772.855 0 0 0 7.896-14.175c6.528-12.003 15.236-28.697 23.948-47.455 8.707-18.749 17.445-39.615 24.012-59.955 6.55-20.285 11.028-40.303 11.028-57.277 0-40.861-11.179-78.033-29.461-105.103z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M461.271 499.982h-25.883c-10.115 0-18.315-8.303-18.315-18.543v-27.174l-4.426-14.776c27.424.12 65.907.601 71.363 0l-4.424 14.776v27.174c0 10.24-8.201 18.543-18.315 18.543z"
      fill="#fff"
    />
    <path
      d="M418.284 455.806c0-.117-.017-.234-.051-.347l-3.957-13.211c6.41.031 13.361.079 20.316.128h.035c7.537.052 15.078.105 21.934.135 6.867.03 13.052.038 17.863 0 3.368-.026 6.102-.075 7.926-.156l-3.924 13.104c-.034.113-.051.23-.051.347v27.174c0 9.586-7.673 17.332-17.104 17.332h-25.883c-9.432 0-17.104-7.746-17.104-17.332v-27.174z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={2.421}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M416.824 454.643h62.699"
      stroke="#fff"
      strokeWidth={4.842}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={452.198}
        y1={227.112}
        x2={451.3}
        y2={41.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg68);
const Memo = memo(ForwardRef);
export default Memo;