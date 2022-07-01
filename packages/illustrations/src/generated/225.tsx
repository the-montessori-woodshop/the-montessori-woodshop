import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg225 = (
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
      d="M607.786 182.51c-8.54 15.241-27.244 17.336-57.209 14.439-22.536-2.182-43.087-3.871-65.625-16.159-15.775-8.594-28.262-20.222-37.375-31.516-9.876-12.235-23.661-26.198-16.904-40.07 9.287-19.056 62.992-35.106 115.14-8.86 57.286 28.84 70.328 67.269 61.973 82.166z"
      fill="url(#a)"
    />
    <path
      d="M757.166 307.424c-31.716 15.733-73.811-4.497-73.811-4.497s9.356-45.728 41.088-61.439c31.716-15.733 73.795 4.475 73.795 4.475s-9.356 45.728-41.072 61.461z"
      fill="url(#b)"
    />
    <path
      d="M189.213 197.976c15.964 9.568 38.867.723 38.867.723s-2.995-24.353-18.969-33.91c-15.963-9.568-38.857-.734-38.857-.734s2.995 24.353 18.959 33.921z"
      fill="url(#c)"
    />
    <circle
      cx={702.385}
      cy={372.16}
      r={15.056}
      transform="rotate(180 702.385 372.16)"
      fill="#6f381e"
    />
    <circle
      cx={200.92}
      cy={255.742}
      r={12.394}
      transform="rotate(180 200.92 255.742)"
      fill="#6f381e"
    />
    <circle
      r={14.115}
      transform="matrix(-1 0 0 1 262.634 465.13)"
      fill="#6f381e"
    />
    <circle
      r={6.587}
      transform="matrix(-1 0 0 1 624.292 296.084)"
      fill="#6f381e"
    />
    <circle
      r={8.469}
      transform="matrix(-1 0 0 1 236.838 123.756)"
      fill="#E1E4E5"
    />
    <circle
      r={12.233}
      transform="matrix(-1 0 0 1 161.533 336.341)"
      fill="#E1E4E5"
    />
    <circle
      r={9.31}
      transform="matrix(-1 0 0 1 505.31 485.31)"
      fill="#E1E4E5"
    />
    <circle
      r={15.342}
      transform="matrix(-1 0 0 1 662.342 216.342)"
      fill="#E1E4E5"
    />
    <circle
      r={9.295}
      transform="scale(1 -1) rotate(-75 -102.72 -194.544)"
      fill="#E1E4E5"
    />
    <circle
      r={12.365}
      transform="matrix(-1 0 0 1 306.959 132.949)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.512}
      ry={7.609}
      transform="matrix(-1 0 0 1 765.603 431.069)"
      fill="#E1E4E5"
    />
    <circle
      r={19.345}
      transform="scale(1 -1) rotate(-75 -118.76 -519.413)"
      fill="#E1E4E5"
    />
    <path
      d="M275.896 316.032h.249c1.474 20.877 17 21.199 17 21.199s-17.121.334-17.121 24.458c0-24.124-17.121-24.458-17.121-24.458s15.52-.322 16.993-21.199zM225.1 386.408h.13c.77 11.335 8.888 11.509 8.888 11.509s-8.951.182-8.951 13.279c0-13.097-8.952-13.279-8.952-13.279s8.115-.174 8.885-11.509z"
      fill="#E1E4E5"
    />
    <path
      d="M387.466 259.994v-44.14 0c0-32.502 26.352-58.854 58.854-58.854v0c32.502 0 58.854 26.352 58.854 58.854v44.14"
      stroke="#6f381e"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M533.395 440.017H359.244c-19.244 0-34.83-15.587-34.83-34.831V283.28c0-19.243 15.586-34.83 34.83-34.83h174.151c19.244 0 34.831 15.587 34.831 34.83v121.906c0 19.244-15.587 34.831-34.831 34.831z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={17.13}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M445.176 386.018v-43.68m-.049-26.017c-7.092 0-12.847 5.755-12.796 12.847 0 7.091 5.755 12.847 12.847 12.847s12.847-5.756 12.847-12.847c0-7.092-5.755-12.847-12.898-12.847"
      stroke="#fff"
      strokeWidth={35.743}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={98}
      y={127.224}
      width={246.696}
      height={74.497}
      rx={37.249}
      fill="url(#d)"
    />
    <rect
      x={122.425}
      y={99.135}
      width={246.696}
      height={74.497}
      rx={37.249}
      fill="#2D2019"
    />
    <path
      d="M166.768 146.863h5.483l-.53-7.888 6.605 4.423 2.731-4.811-7.093-3.465 7.093-3.465-2.731-4.811-6.605 4.424.53-7.889h-5.483l.51 7.889-6.604-4.424-2.732 4.811 7.114 3.465-7.114 3.465 2.732 4.811 6.604-4.423-.51 7.888zm38.14 0h5.483l-.53-7.888 6.604 4.423 2.731-4.811-7.093-3.465 7.093-3.465-2.731-4.811-6.604 4.424.53-7.889h-5.483l.509 7.889-6.604-4.424-2.731 4.811 7.113 3.465-7.113 3.465 2.731 4.811 6.604-4.423-.509 7.888zm38.139 0h5.483l-.53-7.888 6.604 4.423 2.732-4.811-7.094-3.465 7.094-3.465-2.732-4.811L248 131.27l.53-7.889h-5.483l.509 7.889-6.604-4.424-2.731 4.811 7.114 3.465-7.114 3.465 2.731 4.811 6.604-4.423-.509 7.888zm38.139 0h5.483l-.53-7.888 6.605 4.423 2.731-4.811-7.094-3.465 7.094-3.465-2.731-4.811-6.605 4.424.53-7.889h-5.483l.51 7.889-6.604-4.424-2.732 4.811 7.114 3.465-7.114 3.465 2.732 4.811 6.604-4.423-.51 7.888zm38.139 0h5.484l-.53-7.888 6.604 4.423 2.731-4.811-7.093-3.465 7.093-3.465-2.731-4.811-6.604 4.424.53-7.889h-5.484l.51 7.889-6.604-4.424-2.732 4.811 7.114 3.465-7.114 3.465 2.732 4.811 6.604-4.423-.51 7.888z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M669.087 426.009c0 41.87-31.519 81.02-73.879 90.526-42.361-9.506-73.88-48.656-73.88-90.526V393.12a18.435 18.435 0 0 1 11.479-17.067l46.175-18.865a42.884 42.884 0 0 1 32.452 0l46.174 18.865a18.442 18.442 0 0 1 11.479 17.067v32.889z"
      fill="#2D2019"
    />
    <path
      d="m625.173 416.419-34.575 34.575-20.745-20.745"
      stroke="#fff"
      strokeWidth={12.547}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={550.253}
        y1={281.291}
        x2={474.132}
        y2={-60.766}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={635.374}
        y1={356.499}
        x2={896.968}
        y2={149.577}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={250.989}
        y1={228.775}
        x2={122.537}
        y2={109.426}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={226.608}
        y1={243.489}
        x2={225.914}
        y2={46.16}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg225);
const Memo = memo(ForwardRef);
export default Memo;
