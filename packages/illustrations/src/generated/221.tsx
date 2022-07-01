import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg221 = (
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
    <circle cx={450.498} cy={300.498} r={222.498} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M415.577 447.016v5.926c0 20.538 16.658 37.195 37.212 37.195 20.553 0 37.211-16.657 37.211-37.211V447"
      fill="#fff"
    />
    <path
      d="M415.577 447.016v5.926c0 20.538 16.658 37.195 37.212 37.195v0c20.553 0 37.211-16.657 37.211-37.211V447"
      stroke="#E1E4E5"
      strokeWidth={4.967}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M486.015 149.818v-16.574c0-18.272-14.998-33.095-33.526-33.095-18.528 0-33.526 14.823-33.526 33.095v16.574"
      fill="#fff"
    />
    <path
      d="M486.015 149.818v-16.574c0-18.272-14.998-33.095-33.526-33.095v0c-18.528 0-33.526 14.823-33.526 33.095v16.574"
      stroke="#E1E4E5"
      strokeWidth={4.967}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M325.457 256.386c0-58.619 47.518-106.114 106.113-106.114h42.46c58.618 0 106.113 47.518 106.113 106.114v65.504a46.855 46.855 0 0 0 13.724 33.115l15.012 15.012a46.852 46.852 0 0 1 13.723 33.115c0 24.45-19.812 44.262-44.262 44.262H327.26c-24.45 0-44.262-19.812-44.262-44.262a46.852 46.852 0 0 1 13.723-33.115l15.012-15.012a46.855 46.855 0 0 0 13.724-33.115v-65.504z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.967}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={184.281}
      y={218.111}
      width={256.293}
      height={98.287}
      rx={24.834}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.967}
    />
    <rect
      x={270.23}
      y={248.703}
      width={144.22}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <rect
      x={270.23}
      y={273.469}
      width={93.233}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M224.899 292.031c-13.585 0-24.6-11.17-24.6-24.946 0-13.777 11.015-24.946 24.6-24.946s24.599 11.169 24.599 24.946c0 13.776-11.014 24.946-24.599 24.946z"
      fill="#6f381e"
    />
    <path
      d="m233.561 262.928-10.392 11.087-6.239-6.651"
      stroke="#fff"
      strokeWidth={4.431}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M521.403 206.936c-27.772 0-50.289-23.351-50.289-52.152 0-28.8 22.517-52.151 50.289-52.151 27.772 0 50.289 23.351 50.289 52.151 0 28.801-22.517 52.152-50.289 52.152z"
      fill="#6f381e"
    />
    <rect
      x={171}
      y={361}
      width={256.293}
      height={98.287}
      rx={24.834}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.967}
    />
    <rect
      x={256.949}
      y={391.592}
      width={144.22}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <rect
      x={256.949}
      y={416.357}
      width={93.233}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M211.618 434.919c-13.585 0-24.599-11.169-24.599-24.946 0-13.776 11.014-24.946 24.599-24.946s24.6 11.17 24.6 24.946c0 13.777-11.015 24.946-24.6 24.946z"
      fill="#6f381e"
    />
    <path
      d="m220.28 405.817-10.392 11.087-6.239-6.652"
      stroke="#fff"
      strokeWidth={4.431}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={494.707}
      y={262.813}
      width={256.293}
      height={98.287}
      rx={24.834}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.967}
    />
    <rect
      x={580.656}
      y={293.405}
      width={144.22}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <rect
      x={580.656}
      y={318.17}
      width={93.233}
      height={11.654}
      rx={5.827}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M535.325 336.732c-13.585 0-24.6-11.169-24.6-24.946 0-13.776 11.015-24.946 24.6-24.946s24.599 11.17 24.599 24.946c0 13.777-11.014 24.946-24.599 24.946z"
      fill="#6f381e"
    />
    <path
      d="m543.987 307.629-10.392 11.087-6.239-6.651"
      stroke="#fff"
      strokeWidth={4.431}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M529.033 134.573h-8.435l-10.507 6.653v7.958l9.719-6.093h.249v33.926h8.974v-42.444z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={459.986}
        y1={772.487}
        x2={446.265}
        y2={-406.081}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg221);
const Memo = memo(ForwardRef);
export default Memo;
