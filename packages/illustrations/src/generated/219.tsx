import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg219 = (
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
      d="M229.88 437.866c10.885 61.87 159.214 158.345 295.762 78.14 63.506-37.305 49.454-71.458 90.65-130.347 24.555-35.099 64.248-66.551 67.23-109.967 2.583-37.477-12.728-73.556-36.989-93.698-54.561-45.3-147.655-63.366-210.61 42.62C372.967 330.6 201.824 278.296 229.88 437.866z"
      fill="url(#a)"
    />
    <path
      d="M217.783 234.527c12.831 22.898 40.931 26.045 85.949 21.693 33.857-3.279 64.731-5.816 98.591-24.276 23.699-12.912 42.459-30.382 56.151-47.349 14.838-18.381 35.547-39.359 25.395-60.2-13.952-28.629-94.635-52.74-172.981-13.31-86.063 43.328-105.656 101.062-93.105 123.442z"
      fill="url(#b)"
    />
    <path
      d="M131.049 282.401c24.171 11.99 56.252-3.427 56.252-3.427s-7.129-34.851-31.313-46.824c-24.172-11.99-56.24 3.41-56.24 3.41s7.13 34.85 31.301 46.841z"
      fill="url(#c)"
    />
    <path
      d="M780.347 386.16c-17.646 10.576-42.964.8-42.964.8s3.311-26.921 20.968-37.485c17.646-10.576 42.953-.812 42.953-.812s-3.311 26.921-20.957 37.497z"
      fill="url(#d)"
    />
    <circle
      r={20.715}
      transform="matrix(1 0 0 -1 350.363 434.427)"
      fill="#6f381e"
    />
    <circle
      r={10.865}
      transform="matrix(1 0 0 -1 601.155 208.711)"
      fill="#6f381e"
    />
    <circle cx={723.45} cy={335.335} r={12.373} fill="#6f381e" />
    <circle cx={208.336} cy={487.665} r={7.424} fill="#E1E4E5" />
    <circle cx={751.783} cy={431.39} r={7.343} fill="#E1E4E5" />
    <circle cx={257.139} cy={161.967} r={9.074} fill="#E1E4E5" />
    <circle
      cx={752.815}
      cy={264.936}
      r={8.148}
      transform="rotate(105 752.815 264.936)"
      fill="#E1E4E5"
    />
    <circle cx={542.251} cy={105.462} r={10.839} fill="#E1E4E5" />
    <ellipse cx={200.235} cy={369.059} rx={8.338} ry={6.67} fill="#E1E4E5" />
    <circle
      cx={357.503}
      cy={91.484}
      r={16.957}
      transform="rotate(105 357.503 91.484)"
      fill="#E1E4E5"
    />
    <path
      d="M715.697 208.772h-.118c-.704 9.966-8.115 10.12-8.115 10.12s8.172.159 8.172 11.674c0-11.515 8.173-11.674 8.173-11.674s-7.408-.154-8.112-10.12zm12.417 260.869H728c-.675 9.936-7.791 10.089-7.791 10.089s7.846.159 7.846 11.64c0-11.481 7.847-11.64 7.847-11.64s-7.113-.153-7.788-10.089z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M613.887 480.618h-309.93c-42.796 0-77.483-34.686-77.483-77.482v-206.62c0-42.796 34.687-77.483 77.483-77.483h309.93c42.796 0 77.482 34.687 77.482 77.483v206.62c0 42.796-34.686 77.482-77.482 77.482z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M342.285 385.314h-66.376 66.376z"
      fill="#fff"
    />
    <path
      d="M342.285 385.314h-66.376"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M442.206 385.314H375.83h66.376z"
      fill="#fff"
    />
    <path
      d="M442.206 385.314H375.83"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M542.127 385.314H475.75h66.377z"
      fill="#fff"
    />
    <path
      d="M542.127 385.314H475.75"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M642.048 385.314h-66.377 66.377z"
      fill="#fff"
    />
    <path
      d="M642.048 385.314h-66.377"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={268.546}
      y={187.284}
      width={82.04}
      height={82.04}
      rx={20}
      fill="#E1E4E5"
    />
    <rect
      x={520.978}
      y={188.335}
      width={82.04}
      height={80.989}
      rx={40.494}
      fill="#E1E4E5"
    />
    <rect
      x={571.464}
      y={188.335}
      width={82.04}
      height={80.989}
      rx={40.494}
      fill="#6f381e"
    />
    <circle cx={632.829} cy={420.208} r={82.401} fill="#2D2019" />
    <rect
      x={626.092}
      y={385.486}
      width={13.474}
      height={69.445}
      rx={6.737}
      fill="#fff"
    />
    <rect
      x={667.551}
      y={413.471}
      width={13.474}
      height={69.445}
      rx={6.737}
      transform="rotate(90 667.551 413.471)"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M121.568 450.375h5.444a2.378 2.378 0 0 1 2.376 2.376v5.445a2.378 2.378 0 0 1-2.376 2.376h-5.444a2.386 2.386 0 0 1-2.377-2.376v-5.445c-.011-1.305 1.06-2.376 2.377-2.376zm18.875 0h5.445a2.385 2.385 0 0 1 2.376 2.376v5.445a2.378 2.378 0 0 1-2.376 2.376h-5.445a2.385 2.385 0 0 1-2.376-2.376v-5.445a2.385 2.385 0 0 1 2.376-2.376zm18.89 0h5.444a2.386 2.386 0 0 1 2.377 2.376v5.445a2.378 2.378 0 0 1-2.377 2.376h-5.444a2.386 2.386 0 0 1-2.377-2.376v-5.445c-.011-1.305 1.06-2.376 2.377-2.376zm18.876 0h5.444a2.385 2.385 0 0 1 2.376 2.376v5.445a2.378 2.378 0 0 1-2.376 2.376h-5.444a2.388 2.388 0 0 1-2.388-2.376v-5.445a2.402 2.402 0 0 1 2.388-2.376zm18.877 0h5.445a2.388 2.388 0 0 1 2.387 2.376v5.445a2.38 2.38 0 0 1-2.387 2.376h-5.445a2.385 2.385 0 0 1-2.376-2.376v-5.445a2.385 2.385 0 0 1 2.376-2.376zm-55.95 20.584h5.445a2.385 2.385 0 0 1 2.376 2.376v5.456a2.385 2.385 0 0 1-2.376 2.376h-5.445a2.378 2.378 0 0 1-2.376-2.376v-5.445a2.374 2.374 0 0 1 2.376-2.387zm18.876 0h5.445a2.385 2.385 0 0 1 2.376 2.376v5.456a2.385 2.385 0 0 1-2.376 2.376h-5.445a2.385 2.385 0 0 1-2.376-2.376v-5.445a2.374 2.374 0 0 1 2.376-2.387zm18.877 0h5.445a2.388 2.388 0 0 1 2.387 2.376v5.456a2.388 2.388 0 0 1-2.387 2.376h-5.445a2.385 2.385 0 0 1-2.376-2.376v-5.445a2.388 2.388 0 0 1 2.376-2.387zm-19.556-42.697h5.444a2.386 2.386 0 0 1 2.377 2.377v5.444a2.378 2.378 0 0 1-2.377 2.376h-5.444a2.386 2.386 0 0 1-2.377-2.376v-5.444c-.011-1.306 1.06-2.377 2.377-2.377zm18.876 0h5.444a2.386 2.386 0 0 1 2.376 2.377v5.444a2.378 2.378 0 0 1-2.376 2.376h-5.444a2.388 2.388 0 0 1-2.388-2.376v-5.444a2.402 2.402 0 0 1 2.388-2.377z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={457.775}
        y1={770.922}
        x2={446.913}
        y2={-289.118}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={304.218}
        y1={382.931}
        x2={418.579}
        y2={-130.959}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={223.869}
        y1={319.801}
        x2={24.505}
        y2={162.103}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={712.06}
        y1={420.205}
        x2={854.05}
        y2={288.277}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg219);
const Memo = memo(ForwardRef);
export default Memo;
