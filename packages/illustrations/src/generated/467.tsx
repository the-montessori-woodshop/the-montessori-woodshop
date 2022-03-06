import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg467 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M355.735 275.012c0 79.37-64.329 143.698-143.698 143.698-79.37 0-143.699-64.328-143.699-143.698 0-79.369 64.329-143.698 143.699-143.698 79.369 0 143.698 64.329 143.698 143.698z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={6.085}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m313.647 376.623-96.932-96.933a15.95 15.95 0 0 1-4.678-11.288V131.313"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m336.484 203.163-118.717 68.541a15.952 15.952 0 0 0-7.441 9.693l-35.481 132.417"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M212.949 275.918 313.58 376.605"
      stroke="#fff"
      strokeWidth={6.085}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M421.294 347.578h102.634m128.332.075h116.009M652.26 423.148h116.009m-346.976-42.581h170.446m60.48 0h169.867m-169.867 75.497h169.867m-400.793-31.512h102.634m-102.634 32.99h170.446"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={501.934}
      y={131.313}
      width={60.481}
      height={179.609}
      rx={15.212}
      fill="#6f381e"
    />
    <rect
      x={681.542}
      y={131.313}
      width={60.481}
      height={179.609}
      rx={15.212}
      fill="#6f381e"
    />
    <rect
      x={412.129}
      y={204.623}
      width={60.481}
      height={106.299}
      rx={15.212}
      fill="#E1E4E5"
    />
    <rect
      x={591.738}
      y={204.623}
      width={60.481}
      height={106.299}
      rx={15.212}
      fill="#E1E4E5"
    />
    <rect
      x={771.347}
      y={204.623}
      width={60.481}
      height={106.299}
      rx={15.212}
      fill="#E1E4E5"
    />
    <path
      d="M626.695 169.488c-16.233 8.052-37.778-2.302-37.778-2.302s4.789-23.405 21.03-31.446c16.233-8.052 37.769 2.29 37.769 2.29s-4.788 23.405-21.021 31.458z"
      fill="url(#a)"
    />
    <path
      d="M133.606 463.227c15.706 9.414 38.24.712 38.24.712s-2.947-23.961-18.663-33.364c-15.706-9.413-38.23-.722-38.23-.722s2.947 23.961 18.653 33.374z"
      fill="url(#b)"
    />
    <circle
      r={11.054}
      transform="matrix(-1 0 0 1 617.741 404.198)"
      fill="#E1E4E5"
    />
    <circle
      r={15.967}
      transform="matrix(-1 0 0 1 315.335 443.504)"
      fill="#E1E4E5"
    />
    <circle
      r={12.152}
      transform="matrix(-1 0 0 1 814.104 415.282)"
      fill="#E1E4E5"
    />
    <circle
      r={13.51}
      transform="matrix(-1 0 0 1 766.646 131.51)"
      fill="#E1E4E5"
    />
    <circle
      r={12.132}
      transform="scale(1 -1) rotate(-75 127.105 -359.868)"
      fill="#E1E4E5"
    />
    <circle
      r={5.049}
      transform="matrix(-1 0 0 1 368.766 157.443)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.415}
      ry={9.932}
      transform="matrix(-1 0 0 1 368.366 343.167)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={564.359}
        y1={194.605}
        x2={698.248}
        y2={88.698}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={194.385}
        y1={493.529}
        x2={68.007}
        y2={376.106}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg467);
const Memo = memo(ForwardRef);
export default Memo;
