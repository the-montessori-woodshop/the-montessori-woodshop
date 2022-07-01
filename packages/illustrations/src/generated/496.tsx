import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg496 = (
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
      d="M122.215 216.91c8.115 16.765 32.138 21.925 32.138 21.925s10.852-22.029 2.723-38.791c-8.115-16.766-32.124-21.929-32.124-21.929s-10.852 22.029-2.737 38.795z"
      fill="url(#a)"
    />
    <path
      d="M764.472 314.96c-12.98 7.779-31.603.587-31.603.587s2.435-19.802 15.423-27.573c12.981-7.779 31.596-.596 31.596-.596s-2.435 19.802-15.416 27.582z"
      fill="url(#b)"
    />
    <circle cx={196.73} cy={503.551} r={9.572} fill="#E1E4E5" />
    <circle cx={758.322} cy={405.07} r={13.826} fill="#E1E4E5" />
    <circle cx={149.895} cy={428.478} r={10.523} fill="#E1E4E5" />
    <circle cx={193.907} cy={106.954} r={11.699} fill="#E1E4E5" />
    <circle
      cx={755.001}
      cy={180.843}
      r={10.506}
      transform="rotate(90 755.001 180.843)"
      fill="#E1E4E5"
    />
    <circle cx={508.408} cy={72.961} r={9.371} fill="#E1E4E5" />
    <ellipse cx={156.638} cy={320.124} rx={10.751} ry={8.601} fill="#E1E4E5" />
    <path
      d="M727.275 79.753h-.153c-.907 12.85-10.463 13.047-10.463 13.047s10.538.206 10.538 15.053c0-14.847 10.537-15.053 10.537-15.053s-9.552-.198-10.459-13.047zM709.074 479.86h-.147c-.87 12.811-10.045 13.008-10.045 13.008s10.117.205 10.117 15.009c0-14.804 10.117-15.009 10.117-15.009s-9.171-.197-10.042-13.008z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M452.464 508.097c-8.703 0-15.766 7.063-15.703 15.766 0 8.703 7.063 15.766 15.766 15.766s15.767-7.063 15.767-15.766-7.064-15.766-15.83-15.766z"
      fill="#6f381e"
    />
    <path
      d="M452.464 508.097c-8.703 0-15.766 7.063-15.703 15.766 0 8.703 7.063 15.766 15.766 15.766s15.767-7.063 15.767-15.766-7.064-15.766-15.83-15.766"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M582.234 521.076a3.942 3.942 0 1 1-5.575 5.574 3.942 3.942 0 0 1 5.575-5.574z"
      fill="#323232"
    />
    <path
      d="M582.234 521.076a3.942 3.942 0 1 1-5.575 5.574 3.942 3.942 0 0 1 5.575-5.574"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M329.973 521.077a3.942 3.942 0 1 1-5.574 5.573 3.942 3.942 0 0 1 5.574-5.573z"
      fill="#323232"
    />
    <path
      d="M329.973 521.077a3.942 3.942 0 1 1-5.574 5.573 3.942 3.942 0 0 1 5.574-5.573"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M642.105 469.873H264.798c-31.36 0-56.776-29.385-56.776-65.643V125.643c0-36.258 25.416-65.643 56.776-65.643h377.335c31.333 0 56.749 29.385 56.749 65.643v278.618c0 36.227-25.416 65.612-56.777 65.612z"
      fill="#6f381e"
    />
    <path
      d="M453.5 432c90.299 0 163.5-72.978 163.5-163s-73.201-163-163.5-163S290 178.978 290 269s73.201 163 163.5 163z"
      fill="#fff"
    />
    <path
      d="m385.812 235.201-33.913 33.913 33.913 33.913m135.653-67.826 33.913 33.913-33.913 33.913m-50.87-73.423-33.913 79.018"
      stroke="#6f381e"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={157.033}
        y1={276.577}
        x2={114.974}
        y2={106.212}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={714.241}
        y1={340.002}
        x2={818.687}
        y2={242.958}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg496);
const Memo = memo(ForwardRef);
export default Memo;
