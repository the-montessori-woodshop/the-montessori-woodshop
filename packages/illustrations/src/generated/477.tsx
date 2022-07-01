import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg477 = (
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
      d="M368.925 74.138v67.707m180.553-67.707v67.707m-282.112 92.304h383.673m11.283-13.313v191.837c0 67.707-33.853 112.845-112.845 112.845H368.925c-78.991 0-112.845-45.138-112.845-112.845V220.836c0-67.707 33.854-112.845 112.845-112.845h180.552c78.992 0 112.845 45.138 112.845 112.845z"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M542.587 338.2h.203m-.203 67.707h.203M459.1 338.2h.203m-.203 67.707h.203M375.569 338.2h.202m-.202 67.707h.202"
      stroke="#E1E4E5"
      strokeWidth={48}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m239.015 144.656-57.1 21.473C168.756 171.066 158 186.682 158 200.805v85.314c0 13.55 8.926 31.347 19.796 39.5L227 362.477c16.135 12.172 42.682 12.172 58.816 0l49.204-36.858c10.871-8.153 19.796-25.95 19.796-39.5v-85.314c0-14.123-10.756-29.739-23.915-34.676l-57.1-21.473c-9.726-3.559-25.288-3.559-34.786 0z"
      fill="#6f381e"
    />
    <path
      d="M256.26 300.849c-27.781 0-50.301-22.521-50.301-50.301 0-27.781 22.52-50.301 50.301-50.301 27.78 0 50.301 22.52 50.301 50.301 0 27.78-22.521 50.301-50.301 50.301z"
      stroke="#fff"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M253.117 234.829v11.695c0 4.401 2.264 8.551 6.162 10.815l9.557 5.784"
      stroke="#fff"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M222.635 120.378c15.96 7.917 37.144-2.263 37.144-2.263s-4.708-23.011-20.677-30.917c-15.96-7.917-37.135 2.251-37.135 2.251s4.708 23.012 20.668 30.929z"
      fill="url(#a)"
    />
    <circle
      r={11.515}
      transform="matrix(1 0 0 -1 209.879 461.175)"
      fill="#6f381e"
    />
    <circle
      r={17.718}
      transform="matrix(1 0 0 -1 668.35 91.494)"
      fill="#6f381e"
    />
    <circle cx={718.423} cy={237.046} r={11.51} fill="#6f381e" />
    <circle cx={726.197} cy={349.344} r={16.268} fill="#E1E4E5" />
    <circle cx={695.878} cy={494.907} r={14.09} fill="#E1E4E5" />
    <ellipse cx={197.861} cy={387.348} rx={8.543} ry={7.035} fill="#E1E4E5" />
    <circle
      cx={246.606}
      cy={535.089}
      r={10.05}
      transform="rotate(90 246.606 535.089)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={283.924}
        y1={145.073}
        x2={152.284}
        y2={40.946}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg477);
const Memo = memo(ForwardRef);
export default Memo;
