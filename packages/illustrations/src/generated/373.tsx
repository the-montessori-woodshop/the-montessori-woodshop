import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg373 = (
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
    <circle
      cx={449.754}
      cy={299.754}
      r={271.254}
      stroke="url(#a)"
      strokeWidth={3}
    />
    <circle
      cx={730.863}
      cy={186.862}
      r={13.862}
      transform="rotate(180 730.863 186.862)"
      fill="#6f381e"
    />
    <circle
      cx={207.926}
      cy={360.925}
      r={12.925}
      transform="rotate(180 207.926 360.925)"
      fill="#6f381e"
    />
    <circle
      r={12.996}
      transform="matrix(-1 0 0 1 163.996 188.686)"
      fill="#6f381e"
    />
    <circle
      r={6.065}
      transform="matrix(-1 0 0 1 737.066 300.065)"
      fill="#6f381e"
    />
    <circle
      r={7.798}
      transform="matrix(-1 0 0 1 425.612 516.161)"
      fill="#E1E4E5"
    />
    <circle
      r={11.263}
      transform="matrix(-1 0 0 1 187.821 433.463)"
      fill="#E1E4E5"
    />
    <circle
      r={8.572}
      transform="matrix(-1 0 0 1 291.924 158.132)"
      fill="#E1E4E5"
    />
    <circle
      r={9.53}
      transform="matrix(-1 0 0 1 293.531 366.53)"
      fill="#E1E4E5"
    />
    <circle
      r={8.558}
      transform="scale(1 -1) rotate(-75 -149.93 -443.601)"
      fill="#E1E4E5"
    />
    <circle
      r={11.385}
      transform="matrix(-1 0 0 1 404.798 86.217)"
      fill="#E1E4E5"
    />
    <circle
      r={14.897}
      transform="scale(1 -1) rotate(-75 250.714 -409.37)"
      fill="#E1E4E5"
    />
    <path
      d="M690.874 411.43h.229c1.357 19.222 15.653 19.518 15.653 19.518s-15.764.308-15.764 22.519c0-22.211-15.764-22.519-15.764-22.519s14.29-.296 15.646-19.518z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M563.605 257.055c7.564-7.565 7.564-19.829 0-27.393-7.565-7.565-19.829-7.565-27.393 0l-64.708 64.708 27.393 27.393 64.708-64.708zM433.602 387.057l-27.393-27.393-98.272 98.273c-7.565 7.564-7.565 19.829 0 27.393 7.564 7.564 19.828 7.564 27.393 0l98.272-98.273z"
      fill="#6f381e"
    />
    <path
      stroke="#6f381e"
      strokeWidth={38.74}
      d="m377.942 451.839-27.393 27.393"
    />
    <path
      stroke="#6f381e"
      strokeWidth={38.74}
      strokeLinecap="round"
      d="m411.291 461.765-49.757 49.757"
    />
    <rect
      x={507.361}
      y={136.755}
      width={73.175}
      height={73.175}
      rx={12.913}
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <rect
      x={601.715}
      y={115.45}
      width={73.175}
      height={73.175}
      rx={12.913}
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <rect
      x={580.409}
      y={209.803}
      width={73.175}
      height={73.175}
      rx={12.913}
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <path
      stroke="#6f381e"
      strokeWidth={38.74}
      strokeLinecap="round"
      d="M355.095 243.347 583.37 471.622"
    />
    <path
      stroke="#6f381e"
      strokeWidth={38.74}
      d="m527.062 451.837 27.394 27.393"
    />
    <path
      stroke="#6f381e"
      strokeWidth={38.74}
      strokeLinecap="round"
      d="m493.713 461.765 49.757 49.757"
    />
    <rect
      width={73.175}
      height={73.175}
      rx={12.913}
      transform="matrix(-1 0 0 1 397.643 136.756)"
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <rect
      width={73.175}
      height={73.175}
      rx={12.913}
      transform="matrix(-1 0 0 1 303.289 115.45)"
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <rect
      width={73.175}
      height={73.175}
      rx={12.913}
      transform="matrix(-1 0 0 1 324.594 209.804)"
      stroke="#6f381e"
      strokeWidth={38.74}
    />
    <defs>
      <linearGradient
        id="a"
        x1={461.385}
        y1={878.352}
        x2={444.565}
        y2={-566.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg373);
const Memo = memo(ForwardRef);
export default Memo;
