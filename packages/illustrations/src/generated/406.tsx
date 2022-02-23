import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg406 = (
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
      d="M743.907 396.795h-53.433c-13.093 0-24.063-8.911-24.063-20.198 0-5.644 2.831-10.694 7.078-14.258 4.246-3.564 10.262-5.941 16.985-5.941h7.785c6.723 0 12.739-2.376 16.985-5.94 4.247-3.565 7.078-8.614 7.078-14.258 0-10.99-10.616-20.198-24.063-20.198H535.056c-4.264 0-7.004-5.241-7.004-9.505 0-10.693-10.262-19.307-23.001-19.307h-60.734a5.793 5.793 0 0 1 0-11.585h232.71c10.262 0 19.817-3.564 26.54-9.208 6.723-5.643 10.97-13.663 10.97-22.277 0-17.525-16.986-31.486-37.51-31.486H556.836c-18.859 0-37.527-14.555-56.385-14.555h-67.105c-9.843 0-17.822-7.979-17.822-17.822 0-9.842 7.979-17.822 17.822-17.822h150.262c7.077 0 13.801-2.376 18.401-6.237 4.6-3.862 7.431-9.208 7.431-15.446 0-11.881-11.678-21.684-25.832-21.684h-346.43c-7.078 0-13.801 2.377-18.401 6.238-4.6 3.862-7.431 9.208-7.431 15.446 0 11.881 11.677 21.683 25.832 21.683h8.846c11.678 0 21.586 8.02 21.586 18.119 0 5.05-2.477 9.506-6.37 12.773-3.892 3.267-9.2 5.346-15.216 5.346h-42.817c-7.431 0-14.508 2.674-19.462 6.832-4.954 4.159-8.139 9.802-8.139 16.337 0 12.773 12.385 22.872 27.247 22.872h43.525c14.155 0 25.832 9.802 25.832 21.683 0 5.941-2.831 11.287-7.431 15.149-4.6 3.861-10.97 6.238-18.047 6.238h-38.925c-6.369 0-12.031 2.079-16.277 5.643-4.247 3.565-6.724 8.317-6.724 13.664 0 10.693 10.262 19.307 23.001 19.307h31.494c18.047 0 32.555 12.178 32.555 27.327 0 7.426-3.538 14.555-9.554 19.307-6.016 5.05-14.155 8.02-23.001 8.02h-43.879c-8.846 0-16.985 2.971-22.647 8.02-6.016 4.753-9.554 11.584-9.554 19.01 0 14.852 14.508 27.03 32.201 27.03h135.49c14.963 0 29.662 8.317 44.625 8.317h24.677c9.432 0 17.079 7.647 17.079 17.08 0 9.432-7.647 17.079-17.079 17.079h-60.063c-7.785 0-14.508 2.673-19.462 6.832-4.954 4.158-8.139 10.099-8.139 16.337 0 12.772 12.385 23.168 27.601 23.168h368.016c7.785 0 14.508-2.673 19.462-6.831 4.954-4.159 8.139-10.1 8.139-16.337 0-12.773-12.385-23.169-27.601-23.169h-10.97c-11.323 0-20.17-7.723-20.17-16.931 0-4.752 2.123-8.911 6.016-11.881 3.539-2.97 8.846-5.05 14.508-5.05h46.356c7.785 0 14.508-2.673 19.462-6.831 4.955-4.159 8.139-10.1 8.139-16.337 0-13.367-12.385-23.763-27.601-23.763z"
      fill="url(#a)"
    />
    <path
      d="M785.365 491.127c-12.967 6.433-30.176-1.838-30.176-1.838s3.824-18.695 16.798-25.118c12.966-6.432 30.169 1.829 30.169 1.829s-3.825 18.695-16.791 25.127z"
      fill="url(#b)"
    />
    <path
      d="M81.89 371.665c18.934 11.348 46.098.858 46.098.858s-3.552-28.885-22.497-40.22c-18.934-11.348-46.087-.871-46.087-.871s3.552 28.885 22.486 40.233z"
      fill="url(#c)"
    />
    <circle
      cx={640.334}
      cy={168.791}
      r={8.806}
      transform="rotate(180 640.334 168.791)"
      fill="#6f381e"
    />
    <circle
      cx={623.324}
      cy={521.111}
      r={16.561}
      transform="rotate(180 623.324 521.111)"
      fill="#6f381e"
    />
    <circle
      r={13.146}
      transform="matrix(-1 0 0 1 211.816 491.854)"
      fill="#6f381e"
    />
    <circle
      r={8.802}
      transform="matrix(-1 0 0 1 841.771 270.3)"
      fill="#6f381e"
    />
    <circle
      r={16.346}
      transform="matrix(-1 0 0 1 110.57 478.902)"
      fill="#E1E4E5"
    />
    <circle
      r={12.441}
      transform="matrix(-1 0 0 1 749.492 372.704)"
      fill="#E1E4E5"
    />
    <circle
      r={15.637}
      transform="matrix(-1 0 0 1 688.083 79.79)"
      fill="#E1E4E5"
    />
    <circle
      r={12.42}
      transform="scale(1 -1) rotate(-75 -16.876 -185.327)"
      fill="#E1E4E5"
    />
    <circle
      r={16.523}
      transform="matrix(-1 0 0 1 295.95 78.523)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.71}
      ry={10.168}
      transform="matrix(-1 0 0 1 627.01 396.274)"
      fill="#E1E4E5"
    />
    <path
      d="M184.116 78.151h.181c1.072 15.191 12.37 15.425 12.37 15.425s-12.458.244-12.458 17.796c0-17.552-12.458-17.796-12.458-17.796s11.293-.234 12.365-15.424zM282.871 452h.174c1.03 15.146 11.876 15.379 11.876 15.379s-11.96.242-11.96 17.743c0-17.501-11.961-17.743-11.961-17.743s10.842-.233 11.871-15.379z"
      fill="#E1E4E5"
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      d="M153.562 321.384h589.834"
    />
    <rect
      x={347.438}
      y={109.378}
      width={205.488}
      height={205.488}
      rx={102.744}
      fill="#6f381e"
    />
    <mask
      id="d"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={345}
      y={109}
      width={206}
      height={206}
    >
      <rect
        x={345.11}
        y={109.378}
        width={205.488}
        height={205.488}
        rx={102.744}
        fill="#6f381e"
      />
    </mask>
    <g opacity={0.5} stroke="#fff" strokeWidth={1.149} mask="url(#d)">
      <path d="M244.206 158.847c-14.012 23.004-23.184 48.949-26.747 75.657-2.204 16.524-1.431 35.474 10.716 46.873 9.103 8.545 22.522 10.671 34.99 10.211 12.468-.459 24.867-3.083 37.322-2.35 12.454.734 25.643 5.657 31.962 16.431 5.98 10.195 4.491 22.895 3.758 34.696-.731 11.802.149 25.199 9.043 32.974 12.596 11.012 33.119 4.208 47.968 11.907 14.083 7.302 19.802 25.932 34.313 32.338 12.13 5.357 26.091.379 38.358-4.649a4109.274 4109.274 0 0 0 38.285-15.922" />
      <path d="M258.841 143.626c-13.715 22.467-22.694 47.806-26.181 73.892-2.157 16.138-1.401 34.646 10.489 45.78 8.91 8.345 22.045 10.422 34.249 9.972 12.204-.448 24.34-3.011 36.532-2.294 12.192.716 25.102 5.526 31.287 16.047 5.853 9.958 4.395 22.361 3.678 33.887-.717 11.526.144 24.61 8.851 32.205 12.33 10.756 32.419 4.11 46.953 11.629 13.785 7.132 19.383 25.327 33.588 31.585 11.871 5.23 25.537.37 37.546-4.542a4052.855 4052.855 0 0 0 37.474-15.549" />
      <path d="M272.715 128.404c-13.419 21.998-22.203 46.808-25.614 72.349-2.112 15.801-1.371 33.923 10.261 44.823 8.718 8.171 21.569 10.203 33.509 9.764 11.941-.44 23.814-2.948 35.742-2.247 11.929.702 24.558 5.41 30.61 15.712 5.728 9.749 4.3 21.894 3.599 33.179-.701 11.285.141 24.096 8.66 31.532 12.063 10.531 31.717 4.024 45.938 11.387 13.487 6.983 18.964 24.797 32.86 30.924 11.616 5.121 24.986.362 36.735-4.447a3956.85 3956.85 0 0 0 36.664-15.225" />
      <path d="M287.277 113.183c-13.087 21.461-21.651 45.666-24.979 70.584-2.059 15.415-1.336 33.095 10.007 43.73 8.501 7.971 21.032 9.955 32.675 9.526 11.644-.429 23.223-2.877 34.854-2.192 11.632.684 23.948 5.277 29.849 15.328 5.585 9.512 4.194 21.36 3.51 32.37-.684 11.011.138 23.508 8.443 30.763 11.764 10.273 30.931 3.926 44.797 11.108 13.152 6.813 18.491 24.193 32.043 30.171 11.327 4.996 24.366.353 35.821-4.338a3854.86 3854.86 0 0 0 35.753-14.855" />
      <path d="M301.151 97.2c-12.79 20.993-21.161 44.667-24.413 69.041-2.012 15.077-1.306 32.37 9.78 42.773 8.309 7.796 20.556 9.737 31.935 9.317 11.38-.419 22.697-2.813 34.064-2.144 11.368.67 23.405 5.163 29.172 14.993 5.459 9.304 4.1 20.893 3.43 31.662-.668 10.77.135 22.994 8.253 30.091 11.497 10.048 30.229 3.839 43.782 10.864 12.853 6.665 18.072 23.664 31.317 29.511 11.07 4.887 23.812.346 35.009-4.243a3779.283 3779.283 0 0 0 34.942-14.529" />
      <path d="M315.711 81.979c-12.455 20.455-20.608 43.526-23.776 67.275-1.959 14.694-1.271 31.544 9.525 41.68 8.093 7.598 20.02 9.488 31.102 9.08 11.085-.408 22.104-2.742 33.176-2.09 11.071.653 22.795 5.031 28.411 14.611 5.316 9.065 3.992 20.359 3.341 30.853-.651 10.493.13 22.405 8.037 29.321 11.196 9.791 29.439 3.741 42.638 10.587 12.519 6.494 17.602 23.058 30.502 28.756 10.781 4.762 23.19.337 34.095-4.135a3645.264 3645.264 0 0 0 34.031-14.158" />
      <path d="M330.347 66.757c-12.159 19.92-20.118 42.385-23.21 65.511-1.912 14.308-1.241 30.716 9.299 40.588 7.899 7.397 19.542 9.238 30.361 8.841 10.819-.399 21.577-2.67 32.385-2.035 10.807.636 22.252 4.899 27.735 14.227 5.189 8.828 3.897 19.824 3.261 30.043-.636 10.219.127 21.819 7.846 28.552 10.93 9.535 28.738 3.643 41.623 10.31 12.221 6.324 17.183 22.454 29.775 28.002 10.525 4.637 22.638.328 33.284-4.026a3612.117 3612.117 0 0 0 33.221-13.787" />
      <path d="M344.22 51.536a165.329 165.329 0 0 0-22.643 63.967c-1.866 13.97-1.211 29.992 9.071 39.63 7.707 7.224 19.066 9.022 29.621 8.633 10.555-.388 21.051-2.607 31.596-1.986 10.544.621 21.708 4.783 27.058 13.891 5.063 8.62 3.802 19.357 3.182 29.336-.62 9.977.125 21.304 7.655 27.879 10.663 9.31 28.037 3.557 40.607 10.067 11.923 6.173 16.764 21.924 29.048 27.341 10.268 4.528 22.088.321 32.474-3.931a3504.27 3504.27 0 0 0 32.41-13.462" />
      <path d="M358.782 36.315a160.802 160.802 0 0 0-22.006 62.202c-1.814 13.585-1.177 29.165 8.816 38.537 7.49 7.025 18.53 8.773 28.788 8.395 10.259-.378 20.459-2.535 30.706-1.932 10.248.604 21.099 4.651 26.298 13.509 4.921 8.381 3.695 18.823 3.092 28.525-.602 9.703.122 20.717 7.44 27.11 10.363 9.054 27.249 3.46 39.465 9.79 11.587 6.004 16.292 21.319 28.231 26.587 9.979 4.403 21.466.312 31.56-3.823a3390.703 3390.703 0 0 0 31.499-13.09" />
      <path d="M372.655 20.332c-11.232 18.444-18.584 39.246-21.439 60.659-1.768 13.247-1.147 28.441 8.589 37.58 7.297 6.85 18.052 8.555 28.047 8.187 9.995-.368 19.933-2.473 29.916-1.885 9.984.589 20.557 4.536 25.621 13.174 4.794 8.174 3.6 18.356 3.014 27.817-.588 9.463.116 20.203 7.247 26.437 10.097 8.829 26.548 3.373 38.45 9.546 11.29 5.856 15.873 20.791 27.506 25.928 9.722 4.294 20.913.304 30.746-3.728a3272.442 3272.442 0 0 0 30.69-12.765" />
      <path d="M387.216 5.111c-10.898 17.907-18.032 38.104-20.803 58.893-1.715 12.863-1.113 27.614 8.334 36.488 7.08 6.65 17.517 8.305 27.215 7.948 9.696-.358 19.34-2.401 29.028-1.829 9.687.572 19.946 4.404 24.86 12.79 4.651 7.937 3.492 17.822 2.923 27.009-.57 9.186.114 19.614 7.033 25.667 9.797 8.573 25.759 3.276 37.308 9.269 10.954 5.684 15.402 20.185 26.687 25.173 9.435 4.169 20.294.295 29.835-3.62a3208.395 3208.395 0 0 0 29.777-12.393" />
      <path d="M401.852-10.11a147.577 147.577 0 0 0-20.238 57.13c-1.667 12.475-1.081 26.785 8.108 35.393 6.888 6.451 17.04 8.057 26.474 7.71 9.434-.347 18.815-2.329 28.238-1.774 9.423.554 19.402 4.272 24.184 12.407 4.525 7.698 3.397 17.287 2.843 26.199-.554 8.911.112 19.026 6.842 24.898 9.53 8.315 25.058 3.178 36.293 8.992 10.655 5.514 14.982 19.58 25.961 24.418 9.178 4.044 19.741.287 29.022-3.511a3136.527 3136.527 0 0 0 28.968-12.022" />
      <path d="M415.725-25.332a143.712 143.712 0 0 0-19.671 55.585c-1.621 12.14-1.052 26.062 7.881 34.439 6.695 6.277 16.564 7.838 25.733 7.501 9.17-.338 18.288-2.266 27.449-1.727 9.16.54 18.859 4.156 23.507 12.071 4.398 7.49 3.302 16.821 2.764 25.492-.539 8.67.108 18.513 6.65 24.226 9.265 8.09 24.358 3.091 35.277 8.748 10.358 5.365 14.564 19.051 25.236 23.759 8.921 3.934 19.188.278 28.21-3.417a2995.173 2995.173 0 0 0 28.157-11.697" />
      <path d="M430.287-40.553a139.18 139.18 0 0 0-19.035 53.82c-1.569 11.755-1.018 25.236 7.625 33.345 6.48 6.078 16.028 7.59 24.902 7.263 8.872-.327 17.695-2.194 26.559-1.672 8.864.523 18.249 4.024 22.746 11.688 4.256 7.254 3.196 16.288 2.674 24.683-.521 8.395.105 17.925 6.435 23.456 8.965 7.834 23.569 2.994 34.136 8.471 10.022 5.195 14.092 18.447 24.419 23.004 8.631 3.81 18.567.27 27.297-3.307 9.1-3.73 18.182-7.505 27.245-11.327" />
    </g>
    <circle cx={449.018} cy={211.914} r={66.586} fill="#fff" />
    <path
      d="m472.293 198.312-29.242 29.781-17.556-17.866"
      stroke="#6f381e"
      strokeWidth={11.204}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M236.716 192.288H182.16c-18.832 0-34.098 15.266-34.098 34.098v54.556c0 18.831 15.266 34.097 34.098 34.097h54.556c18.832 0 34.098-15.266 34.098-34.097v-54.556c0-18.832-15.266-34.098-34.098-34.098z"
      fill="#6f381e"
    />
    <circle
      cx={188.979}
      cy={253.662}
      r={17.049}
      stroke="#fff"
      strokeWidth={13.783}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M206.027 253.662h37.508v15.344"
      stroke="#fff"
      strokeWidth={13.783}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M661.32 192.288h54.556c18.831 0 34.097 15.266 34.097 34.098v54.556c0 18.831-15.266 34.097-34.097 34.097H661.32c-18.832 0-34.098-15.266-34.098-34.097v-54.556c0-18.832 15.266-34.098 34.098-34.098z"
      fill="#6f381e"
    />
    <circle
      r={17.049}
      transform="matrix(-1 0 0 1 709.056 253.662)"
      stroke="#fff"
      strokeWidth={13.783}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M692.008 253.662h-37.507v15.344"
      stroke="#fff"
      strokeWidth={13.783}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M483.279 509.556s-5.172-44.56-19.3-63.203c-13.979-18.445-59.333-58.564-77.602-103.718a1.954 1.954 0 0 1 .738-2.383c2.799-1.792 10.066-4.301 21.025 7.607 14.239 15.524 25.448 27.127 25.448 27.127s-.528-90.904 1.16-115.548c.331-4.865 1.143-8.741 2.274-11.871 3.532-9.759 18.041-7.187 18.243 3.192l1.203 60.732s3.201-6.129 9.366-5.753c5.831.37 12.179 9.728 11.82 19.259 0 0 4.174-6.579 11.726-3.793 7.551 2.787 10.227 13.695 10.437 19.248 0 0 2.62-7.139 8.636-6.7 6.016.44 11.858 11.715 12.514 15.652.655 3.936 11.828 35.631 6.298 87.607l31.407 59.593s-10.469 23.207-75.393 12.952z"
      fill="#F8AE9D"
    />
    <defs>
      <linearGradient
        id="a"
        x1={480.334}
        y1={750.912}
        x2={472.025}
        y2={-321.428}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={735.572}
        y1={511.191}
        x2={842.52}
        y2={426.595}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={155.16}
        y1={408.194}
        x2={2.809}
        y2={266.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg406);
const Memo = memo(ForwardRef);
export default Memo;