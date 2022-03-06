import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg396 = (
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
      d="M130.277 260.889c28.696 14.235 66.782-4.068 66.782-4.068s-8.464-41.375-37.175-55.59c-28.696-14.234-66.768 4.049-66.768 4.049s8.465 41.374 37.161 55.609z"
      fill="url(#a)"
    />
    <path
      d="M773.251 305.237c-15.59 9.344-37.959.706-37.959.706s2.925-23.785 18.526-33.118c15.59-9.344 37.949-.717 37.949-.717s-2.925 23.785-18.516 33.129z"
      fill="url(#b)"
    />
    <circle cx={199.814} cy={476.814} r={8.814} fill="#E1E4E5" />
    <circle cx={775.453} cy={390.175} r={12.731} fill="#E1E4E5" />
    <circle cx={135.689} cy={356.689} r={9.689} fill="#E1E4E5" />
    <circle cx={210.796} cy={111.639} r={10.772} fill="#E1E4E5" />
    <circle
      cx={810.327}
      cy={179.672}
      r={9.673}
      transform="rotate(90 810.327 179.672)"
      fill="#E1E4E5"
    />
    <circle cx={500.38} cy={80.338} r={8.628} fill="#E1E4E5" />
    <ellipse cx={191.817} cy={314.681} rx={9.899} ry={7.919} fill="#E1E4E5" />
    <path
      d="M685.794 101.293h-.141c-.835 11.832-9.634 12.014-9.634 12.014s9.702.189 9.702 13.86c0-13.671 9.703-13.86 9.703-13.86s-8.795-.182-9.63-12.014zM711.385 455h-.135c-.802 11.796-9.25 11.978-9.25 11.978s9.316.189 9.316 13.819c0-13.63 9.315-13.819 9.315-13.819s-8.444-.182-9.246-11.978z"
      fill="#E1E4E5"
    />
    <path
      d="M448.907 502.638c-8.014 0-14.517 6.503-14.459 14.517 0 8.013 6.503 14.517 14.517 14.517 8.013 0 14.517-6.504 14.517-14.517 0-8.014-6.504-14.517-14.575-14.517"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M568.395 514.589a3.63 3.63 0 1 1-5.133 5.132 3.63 3.63 0 0 1 5.133-5.132z"
      fill="#323232"
    />
    <path
      d="M568.395 514.589a3.63 3.63 0 1 1-5.133 5.132 3.63 3.63 0 0 1 5.133-5.132"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M336.12 514.589a3.63 3.63 0 1 1-5.133 5.132 3.63 3.63 0 0 1 5.133-5.132z"
      fill="#323232"
    />
    <path
      d="M336.12 514.589a3.63 3.63 0 1 1-5.133 5.132 3.63 3.63 0 0 1 5.133-5.132"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M650.551 445.851h-401.72c-33.389 0-60.449-27.06-60.449-60.449V128.854c0-33.39 27.06-60.45 60.449-60.45H650.58c33.36 0 60.42 27.06 60.42 60.45v256.577c0 33.36-27.06 60.42-60.449 60.42z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M527.225 188.33c42.62 42.62 42.62 111.72 0 154.34-42.62 42.62-111.72 42.62-154.34 0-42.62-42.62-42.62-111.721 0-154.34 42.62-42.62 111.721-42.62 154.34 0m-180.12 113.548h205.901"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={240.472}
        y1={305.291}
        x2={3.787}
        y2={118.072}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={712.919}
        y1={335.316}
        x2={838.369}
        y2={218.756}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg396);
const Memo = memo(ForwardRef);
export default Memo;
