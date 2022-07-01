import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg398 = (
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
      d="M835.265 305.351c-26.689 13.239-62.112-3.784-62.112-3.784s7.872-38.481 34.576-51.702c26.689-13.239 62.098 3.766 62.098 3.766s-7.873 38.481-34.562 51.72z"
      fill="url(#a)"
    />
    <path
      d="M78.575 378.482c34.873 20.901 84.904 1.58 84.904 1.58s-6.542-53.2-41.436-74.076c-34.872-20.901-84.882-1.604-84.882-1.604s6.542 53.2 41.414 74.1z"
      fill="url(#b)"
    />
    <circle
      cx={784.168}
      cy={193.009}
      r={14.573}
      transform="rotate(180 784.168 193.009)"
      fill="#6f381e"
    />
    <circle
      cx={482.97}
      cy={66.171}
      r={16.394}
      transform="rotate(180 482.97 66.171)"
      fill="#6f381e"
    />
    <circle
      r={13.662}
      transform="matrix(-1 0 0 1 125.46 179.193)"
      fill="#6f381e"
    />
    <circle
      r={6.376}
      transform="matrix(-1 0 0 1 659.188 250.235)"
      fill="#6f381e"
    />
    <circle
      r={8.197}
      transform="matrix(-1 0 0 1 695.983 534.721)"
      fill="#E1E4E5"
    />
    <circle
      r={11.84}
      transform="matrix(-1 0 0 1 123.016 449.605)"
      fill="#E1E4E5"
    />
    <circle
      r={9.012}
      transform="matrix(-1 0 0 1 306.285 167.363)"
      fill="#E1E4E5"
    />
    <circle
      r={10.019}
      transform="matrix(-1 0 0 1 741.487 124.951)"
      fill="#E1E4E5"
    />
    <circle
      r={8.997}
      transform="scale(1 -1) rotate(-75 13.813 -171.41)"
      fill="#E1E4E5"
    />
    <circle
      r={11.969}
      transform="matrix(-1 0 0 1 417.544 70.745)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.207}
      ry={7.365}
      transform="matrix(-1 0 0 1 760.288 377.408)"
      fill="#E1E4E5"
    />
    <circle
      r={18.724}
      transform="scale(1 -1) rotate(-75 300.295 -472.212)"
      fill="#E1E4E5"
    />
    <path
      d="M747.917 457.834h.24c1.427 20.208 16.455 20.519 16.455 20.519s-16.572.324-16.572 23.674c0-23.35-16.572-23.674-16.572-23.674s15.022-.311 16.449-20.519zm-523.145 65.161h.214c1.265 18.289 14.6 18.571 14.6 18.571s-14.705.292-14.705 21.425c0-21.133-14.704-21.425-14.704-21.425s13.329-.282 14.595-18.571z"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="M557.441 521.992c27.916-9.838 53.391-24.817 75.344-43.789 12.021-10.377 9.603-29.771-4.132-37.73l-66.704-38.506c-15.661-9.039-35.242 2.254-35.242 20.356v77.246c0 15.943 15.684 27.729 30.734 22.423zM343.086 78.475c-27.94 9.814-53.414 24.817-75.367 43.788-12.022 10.378-9.603 29.771 4.155 37.707l66.704 38.506c15.637 9.063 35.219-2.254 35.219-20.333v-77.246c0-15.942-15.684-27.729-30.711-22.422zm367.531 265.336c5.447-29.091 5.189-58.651-.258-87.154-2.982-15.614-20.99-23.221-34.749-15.262l-66.704 38.506c-15.66 9.039-15.66 31.65 0 40.689l66.892 38.623c13.829 7.959 31.884.258 34.819-15.402zm-520.734-87.146c-5.447 29.091-5.189 58.651.258 87.154 2.982 15.614 20.991 23.221 34.749 15.262l66.704-38.506c15.661-9.039 15.661-31.65 0-40.689l-66.915-38.623c-13.806-7.96-31.861-.258-34.796 15.402zm443.019-134.633C610.433 102.755 584.7 88.198 557.3 78.666c-15.003-5.212-30.593 6.574-30.593 22.446v77.011c0 18.079 19.581 29.396 35.242 20.356l66.892-38.623c13.805-7.959 16.153-27.447 4.061-37.824v0zM267.601 478.445c22.469 19.276 48.202 33.833 75.602 43.366 15.003 5.212 30.593-6.574 30.593-22.446v-77.011c0-18.079-19.581-29.396-35.242-20.357l-66.891 38.623c-13.806 7.96-16.154 27.447-4.062 37.825v0z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M580.645 169.35c72.164 72.164 72.164 189.166 0 261.329-72.164 72.165-189.165 72.165-261.329 0-72.164-72.164-72.164-189.165 0-261.329 72.164-72.164 189.165-72.164 261.329 0z"
      fill="#6f381e"
    />
    <path
      d="M580.645 169.35c72.164 72.164 72.164 189.166 0 261.329-72.164 72.165-189.165 72.165-261.329 0-72.164-72.164-72.164-189.165 0-261.329 72.164-72.164 189.165-72.164 261.329 0"
      stroke="#6f381e"
      strokeWidth={28.833}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M491 338.5h-82"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M405.613 335.358c-22.798-16.162-36.455-44.391-31.655-75.467 5.214-33.594 33.095-60.4 66.736-64.342C487.381 190.052 527 226.538 527 272.286c0 26.083-12.915 49.1-32.637 63.094-3.535 2.518-5.869 6.394-5.869 10.752v35.653c0 17.783-14.355 32.215-32.092 32.215h-12.828c-17.715 0-32.092-14.41-32.092-32.215v-35.587c.022-4.402-2.313-8.3-5.869-10.84z"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={732.776}
        y1={346.648}
        x2={952.909}
        y2={172.522}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={213.522}
        y1={445.76}
        x2={-67.074}
        y2={185.049}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg398);
const Memo = memo(ForwardRef);
export default Memo;
