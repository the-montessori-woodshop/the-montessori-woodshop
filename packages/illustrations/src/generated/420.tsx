import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg420 = (
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
      d="m556.085 291.39-67.021 39.527c-26.526 15.645-47.69 15.645-74.216 0l-67.021-39.527c-26.385-15.561-26.385-28.043.141-43.687l67.021-39.527c26.385-15.561 47.549-15.561 73.934 0l67.021 39.527c26.526 15.644 26.526 28.126.141 43.687z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m556.085 338.463-67.021 39.527c-26.526 15.645-47.69 15.645-74.216 0l-67.021-39.527c-26.385-15.561-26.385-28.043.141-43.687l67.021-39.527c26.385-15.561 47.549-15.561 73.934 0l67.021 39.527c26.526 15.644 26.526 28.126.141 43.687z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m556.085 385.537-67.021 39.527c-26.526 15.644-47.69 15.644-74.216 0l-67.021-39.527c-26.385-15.561-26.385-28.043.141-43.688l67.021-39.527c26.385-15.561 47.549-15.561 73.934 0l67.021 39.527c26.526 15.645 26.526 28.127.141 43.688z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={234.703}
      y={90.262}
      width={434.018}
      height={434.018}
      rx={217.009}
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="10.6 26.51"
    />
    <ellipse
      cx={451.712}
      cy={86.825}
      rx={31.913}
      ry={31.422}
      transform="rotate(90 451.712 86.825)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <ellipse
      cx={451.712}
      cy={527.717}
      rx={31.913}
      ry={31.422}
      transform="rotate(90 451.712 527.717)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M653.249 271.66a30 30 0 0 1 30 0l13.482 7.784a30 30 0 0 1 15 25.981v15.568a30 30 0 0 1-15 25.981l-13.482 7.784a30 30 0 0 1-30 0l-13.482-7.784a30 30 0 0 1-15-25.981v-15.568a30 30 0 0 1 15-25.981l13.482-7.784z"
      fill="#6f381e"
    />
    <path
      d="m683.779 303.829-18.328 18.181-10.996-10.908"
      stroke="#fff"
      strokeWidth={8.45}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M216.209 271.66a30 30 0 0 1 30 0l13.482 7.784a30 30 0 0 1 15 25.981v15.568a30 30 0 0 1-15 25.981l-13.482 7.784a30 30 0 0 1-30 0l-13.482-7.784a30 30 0 0 1-15-25.981v-15.568a30 30 0 0 1 15-25.981l13.482-7.784z"
      fill="#6f381e"
    />
    <path
      d="m246.739 303.829-18.328 18.181-10.996-10.908"
      stroke="#fff"
      strokeWidth={8.45}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg420);
const Memo = memo(ForwardRef);
export default Memo;
