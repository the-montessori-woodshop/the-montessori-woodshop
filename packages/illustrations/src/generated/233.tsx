import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg233 = (
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
      d="M743.764 391.307H687.01c-13.906 0-25.557-9.465-25.557-21.454 0-5.994 3.006-11.357 7.517-15.143 4.51-3.786 10.899-6.31 18.04-6.31h8.269c7.141 0 13.531-2.524 18.041-6.31 4.51-3.786 7.517-9.149 7.517-15.144 0-11.673-11.275-21.453-25.558-21.453H521.935c-4.529 0-7.44-5.567-7.44-10.096 0-11.357-10.9-20.507-24.43-20.507h-64.508a6.152 6.152 0 1 1 0-12.304h247.171c10.9 0 21.048-3.786 28.189-9.78 7.141-5.994 11.651-14.513 11.651-23.662 0-18.614-18.041-33.442-39.84-33.442h-127.66c-20.031 0-39.858-15.459-59.889-15.459h-71.275c-10.454 0-18.929-8.475-18.929-18.93 0-10.454 8.475-18.929 18.929-18.929h159.6c7.517 0 14.658-2.524 19.544-6.625 4.886-4.102 7.893-9.781 7.893-16.406 0-12.62-12.403-23.03-27.437-23.03H205.546c-7.517 0-14.658 2.523-19.544 6.624-4.886 4.102-7.893 9.781-7.893 16.406 0 12.62 12.403 23.031 27.437 23.031h9.396c12.403 0 22.927 8.518 22.927 19.245 0 5.363-2.631 10.096-6.765 13.566-4.134 3.47-9.772 5.679-16.162 5.679h-45.477c-7.893 0-15.41 2.839-20.672 7.256-5.262 4.417-8.645 10.411-8.645 17.352 0 13.566 13.155 24.293 28.941 24.293h46.229c15.034 0 27.437 10.411 27.437 23.031 0 6.31-3.006 11.989-7.893 16.09-4.886 4.101-11.651 6.625-19.168 6.625h-41.343c-6.766 0-12.779 2.209-17.29 5.995-4.51 3.786-7.141 8.833-7.141 14.512 0 11.358 10.9 20.507 24.431 20.507h33.45c19.169 0 34.578 12.935 34.578 29.025 0 7.888-3.758 15.46-10.147 20.507-6.39 5.364-15.034 8.519-24.431 8.519h-46.605c-9.396 0-18.041 3.155-24.055 8.518-6.389 5.048-10.148 12.304-10.148 20.191 0 15.775 15.41 28.71 34.203 28.71h143.909c15.893 0 31.506 8.834 47.399 8.834h26.209c10.019 0 18.141 8.122 18.141 18.141 0 10.019-8.122 18.14-18.141 18.14h-63.794c-8.269 0-15.41 2.84-20.672 7.257-5.262 4.417-8.645 10.726-8.645 17.352 0 13.566 13.155 24.608 29.317 24.608h390.884c8.269 0 15.41-2.839 20.672-7.256 5.262-4.417 8.644-10.727 8.644-17.352 0-13.566-13.154-24.609-29.316-24.609h-11.651c-12.028 0-21.424-8.202-21.424-17.983 0-5.047 2.255-9.464 6.39-12.619 3.758-3.155 9.396-5.364 15.41-5.364h49.236c8.269 0 15.41-2.839 20.672-7.256 5.262-4.417 8.644-10.727 8.644-17.352 0-14.197-13.155-25.239-29.316-25.239z"
      fill="url(#a)"
    />
    <path
      d="M788.218 355.356c-9.571 4.748-22.275-1.357-22.275-1.357s2.823-13.801 12.4-18.542c9.571-4.748 22.27 1.35 22.27 1.35s-2.823 13.801-12.395 18.549z"
      fill="url(#b)"
    />
    <path
      d="M118.278 350.447c13.977 8.376 34.029.633 34.029.633s-2.622-21.322-16.607-29.689c-13.977-8.377-34.02-.643-34.02-.643s2.622 21.322 16.598 29.699z"
      fill="url(#c)"
    />
    <circle
      cx={754.5}
      cy={214.499}
      r={6.5}
      transform="rotate(180 754.5 214.499)"
      fill="#6f381e"
    />
    <circle
      cx={330.157}
      cy={256.1}
      r={12.225}
      transform="rotate(180 330.157 256.1)"
      fill="#6f381e"
    />
    <circle
      r={9.704}
      transform="matrix(-1 0 0 1 216.53 467.919)"
      fill="#6f381e"
    />
    <circle
      r={6.497}
      transform="matrix(-1 0 0 1 726.361 282.701)"
      fill="#6f381e"
    />
    <circle
      r={12.066}
      transform="matrix(-1 0 0 1 110.441 473.267)"
      fill="#E1E4E5"
    />
    <circle
      r={9.183}
      transform="matrix(-1 0 0 1 764.181 478.183)"
      fill="#E1E4E5"
    />
    <circle
      r={11.543}
      transform="matrix(-1 0 0 1 663.286 146.183)"
      fill="#E1E4E5"
    />
    <circle
      r={9.168}
      transform="scale(1 -1) rotate(-75 -65.976 -258.74)"
      fill="#E1E4E5"
    />
    <circle
      r={12.197}
      transform="matrix(-1 0 0 1 375.014 103.095)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.382}
      ry={7.506}
      transform="matrix(-1 0 0 1 710.086 367.797)"
      fill="#E1E4E5"
    />
    <circle
      r={19.081}
      transform="scale(1 -1) rotate(-75 234.516 -423.504)"
      fill="#E1E4E5"
    />
    <path
      d="M217.018 152.734h.134c.791 11.214 9.13 11.387 9.13 11.387s-9.196.179-9.196 13.136c0-12.957-9.196-13.136-9.196-13.136s8.336-.173 9.128-11.387zm8.151 359.765h.128c.76 11.18 8.766 11.353 8.766 11.353s-8.829.179-8.829 13.097c0-12.918-8.829-13.097-8.829-13.097s8.004-.173 8.764-11.353z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M611.936 232.871v-46.473c0-25.666-20.807-46.473-46.474-46.473H333.097c-25.667 0-46.473 20.807-46.473 46.473v116.183"
      fill="#fff"
    />
    <path
      d="M611.936 232.871v-46.473c0-25.666-20.807-46.473-46.474-46.473H333.097c-25.667 0-46.473 20.807-46.473 46.473v116.183"
      stroke="#E1E4E5"
      strokeWidth={4.789}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M286.624 240.998h150.225a23.237 23.237 0 0 0 19.332-10.34l32.601-49.006a23.239 23.239 0 0 1 19.403-10.364h103.751c25.666 0 46.473 20.807 46.473 46.473v232.366c0 25.666-20.807 46.473-46.473 46.473H286.624c-25.666 0-46.473-20.807-46.473-46.473V287.471c0-25.666 20.807-46.473 46.473-46.473z"
      fill="#6f381e"
    />
    <path
      d="M413.303 311.49v18.306m73.231-18.306v18.306m27.462 67.514s-24.018 24.019-64.073 24.019c-40.054 0-64.072-24.019-64.072-24.019"
      stroke="#fff"
      strokeWidth={25.788}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={463.813}
        y1={767.428}
        x2={454.987}
        y2={-371.547}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={751.463}
        y1={370.166}
        x2={830.409}
        y2={307.719}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={172.364}
        y1={377.411}
        x2={59.903}
        y2={272.92}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg233);
const Memo = memo(ForwardRef);
export default Memo;
