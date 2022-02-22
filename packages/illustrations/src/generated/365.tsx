import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg365 = (
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
      d="M792.357 328.579c-9.673 4.798-22.511-1.371-22.511-1.371s2.854-13.946 12.531-18.738c9.673-4.798 22.505 1.365 22.505 1.365s-2.853 13.946-12.525 18.744z"
      fill="url(#a)"
    />
    <circle
      cx={758.282}
      cy={186.236}
      r={6.569}
      transform="rotate(180 758.282 186.236)"
      fill="#6f381e"
    />
    <circle
      r={9.807}
      transform="matrix(-1 0 0 1 214.635 442.331)"
      fill="#6f381e"
    />
    <circle
      r={6.566}
      transform="matrix(-1 0 0 1 729.846 255.158)"
      fill="#6f381e"
    />
    <circle
      r={9.28}
      transform="matrix(-1 0 0 1 768.065 452.703)"
      fill="#E1E4E5"
    />
    <circle
      r={11.665}
      transform="matrix(-1 0 0 1 663.493 112.558)"
      fill="#E1E4E5"
    />
    <circle
      r={9.265}
      transform="scale(1 -1) rotate(-75 -15.142 -223.718)"
      fill="#E1E4E5"
    />
    <circle
      r={12.325}
      transform="matrix(-1 0 0 1 304.221 112.164)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.481}
      ry={7.585}
      transform="matrix(-1 0 0 1 713.4 341.151)"
      fill="#E1E4E5"
    />
    <circle
      r={15.132}
      transform="matrix(0 1 1 0 592.098 101.594)"
      fill="#E1E4E5"
    />
    <path
      d="M119.873 213.832h.135c.8 11.332 9.228 11.507 9.228 11.507s-9.293.181-9.293 13.275c0-13.094-9.293-13.275-9.293-13.275s8.424-.175 9.223-11.507zm103.492 273.549h.129c.768 11.299 8.86 11.472 8.86 11.472s-8.923.181-8.923 13.236c0-13.055-8.922-13.236-8.922-13.236s8.088-.173 8.856-11.472z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M136.881 284.698C94.644 290.303 62 325.129 62 367.714c0 46.473 38.774 84.161 86.588 84.161H339.08c38.255 0 69.27-30.147 69.27-67.329 0-37.182-31.015-67.328-69.27-67.328 0-55.782-46.515-100.993-103.905-100.993-45.666 0-84.353 28.665-98.294 68.473z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M566.531 367.997c-42.238 5.605-74.881 40.431-74.881 83.016 0 46.474 38.774 84.161 86.587 84.161H768.73c38.254 0 69.27-30.146 69.27-67.329 0-37.182-31.016-67.328-69.27-67.328 0-55.782-46.515-100.993-103.905-100.993-45.666 0-84.354 28.665-98.294 68.473z"
      fill="url(#c)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M333.815 43.843c-51.367 0-93.008 41.642-93.008 93.009v325.529c0 51.368 41.641 93.009 93.008 93.009h232.521c51.367 0 93.009-41.641 93.009-93.009V175.377a93.008 93.008 0 0 0-27.242-65.767l-38.525-38.525a93.01 93.01 0 0 0-65.767-27.241H333.815zm265.405 98.651a46.51 46.51 0 0 1 11.041 17.61h-43.925c-12.842 0-23.252-10.41-23.252-23.252V92.927a46.496 46.496 0 0 1 17.61 11.041l38.526 38.526z"
      fill="#6f381e"
    />
    <circle cx={449.452} cy={300.072} r={136.458} fill="#fff" />
    <path
      d="m408.35 286.177 41.455-41.455 41.454 41.455m-41.454 71.301v-109.44"
      stroke="#6f381e"
      strokeWidth={20}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={755.213}
        y1={343.546}
        x2={834.993}
        y2={280.44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={242.56}
        y1={583.993}
        x2={237.616}
        y2={-40.167}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={672.21}
        y1={667.293}
        x2={667.266}
        y2={43.132}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg365);
const Memo = memo(ForwardRef);
export default Memo;
