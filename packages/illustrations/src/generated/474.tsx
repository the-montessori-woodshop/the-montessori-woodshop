import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg474 = (
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
      d="M645.806 238.607c-12.375 7.93-27.086 2.077-48.179-11.94-15.861-10.544-30.444-19.936-42.305-37.982-8.304-12.626-12.967-26.201-15.258-38.192-2.484-12.992-7.185-28.814 3.324-36.434 14.439-10.465 60.653-1.108 88.963 39.024 31.094 44.091 25.555 77.777 13.455 85.524z"
      fill="url(#a)"
    />
    <path
      d="M722.891 367.562c-15.957 7.916-37.135-2.262-37.135-2.262s4.707-23.007 20.672-30.911c15.957-7.916 37.127 2.251 37.127 2.251s-4.707 23.007-20.664 30.922z"
      fill="url(#b)"
    />
    <path
      d="M205.71 204.9c25.828 15.48 62.883 1.17 62.883 1.17s-4.845-39.401-30.688-54.864c-25.828-15.479-62.868-1.187-62.868-1.187s4.846 39.402 30.673 54.881z"
      fill="url(#c)"
    />
    <circle
      cx={728.192}
      cy={210.385}
      r={16.408}
      transform="rotate(180 728.192 210.385)"
      fill="#6f381e"
    />
    <circle
      cx={239.441}
      cy={269.515}
      r={13.508}
      transform="rotate(180 239.441 269.515)"
      fill="#6f381e"
    />
    <circle
      r={15.383}
      transform="matrix(-1 0 0 1 309.52 517.953)"
      fill="#6f381e"
    />
    <circle
      r={7.179}
      transform="matrix(-1 0 0 1 751.446 392.576)"
      fill="#6f381e"
    />
    <circle
      r={9.23}
      transform="matrix(-1 0 0 1 598.136 494.874)"
      fill="#E1E4E5"
    />
    <circle
      r={13.332}
      transform="matrix(-1 0 0 1 186.816 433.533)"
      fill="#E1E4E5"
    />
    <circle
      r={10.147}
      transform="matrix(-1 0 0 1 740.421 507.311)"
      fill="#E1E4E5"
    />
    <circle
      r={11.281}
      transform="matrix(-1 0 0 1 743.947 129.849)"
      fill="#E1E4E5"
    />
    <circle
      r={10.13}
      transform="scale(1 -1) rotate(-75 -115.987 -247.818)"
      fill="#E1E4E5"
    />
    <circle
      r={4.216}
      transform="matrix(-1 0 0 1 348.185 95.42)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.366}
      ry={8.293}
      transform="matrix(-1 0 0 1 722.15 433.135)"
      fill="#E1E4E5"
    />
    <path
      d="M689.741 299.549c0-118.473-96.151-214.624-214.624-214.624-118.472 0-214.624 96.151-214.624 214.624 0 118.472 96.152 214.623 214.624 214.623"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M389.27 106.387h21.462a610.047 610.047 0 0 0 0 386.323H389.27m150.234-386.323c20.819 62.67 31.336 127.916 31.336 193.162"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M281.956 385.398v-21.462c62.67 20.819 127.916 31.336 193.161 31.336M281.956 235.164a610.033 610.033 0 0 1 386.323 0m-60.095 266.131c37.931 0 68.68-30.749 68.68-68.68 0-37.93-30.749-68.679-68.68-68.679-37.931 0-68.68 30.749-68.68 68.679 0 37.931 30.749 68.68 68.68 68.68zm81.557 12.877-21.462-21.462"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={200.167}
      y={51.999}
      width={239.181}
      height={291.003}
      rx={20}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <mask
      id="d"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={194}
      y={46}
      width={251}
      height={316}
    >
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth={11}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M200.167 51.999h238.987v303.954H200.167z"
      />
    </mask>
    <g mask="url(#d)">
      <rect
        x={254.693}
        y={104.205}
        width={128.774}
        height={128.774}
        rx={46.813}
        fill="#6f381e"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M348.343 195.603v4.305c0 2.377-1.903 4.306-4.248 4.306H293.11c-2.345 0-4.249-1.929-4.249-4.306v-4.374c0-13.028 14.692-21.492 29.741-21.492s29.741 8.468 29.741 21.492m-19.078-59.316c5.892 5.891 5.892 15.443 0 21.335-5.891 5.891-15.443 5.891-21.334 0-5.892-5.892-5.892-15.444 0-21.335 5.891-5.892 15.443-5.892 21.334 0z"
        fill="#fff"
      />
      <rect
        x={243.091}
        y={275.904}
        width={154.297}
        height={15.082}
        rx={7.541}
        fill="#E1E4E5"
      />
      <rect
        x={243.091}
        y={245.741}
        width={154.297}
        height={17.402}
        rx={8.701}
        fill="#E1E4E5"
      />
      <rect
        x={243.091}
        y={303.747}
        width={154.297}
        height={17.402}
        rx={8.701}
        fill="#E1E4E5"
      />
      <rect
        x={224.529}
        y={69.401}
        width={16.242}
        height={16.242}
        rx={8.121}
        fill="#E1E4E5"
      />
      <rect
        x={247.732}
        y={69.401}
        width={16.242}
        height={16.242}
        rx={8.121}
        fill="#E1E4E5"
      />
      <rect
        x={270.934}
        y={69.401}
        width={16.242}
        height={16.242}
        rx={8.121}
        fill="#E1E4E5"
      />
    </g>
    <rect
      x={581.849}
      y={58.242}
      width={128.774}
      height={128.774}
      rx={46.813}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M675.499 149.639v4.306c0 2.376-1.903 4.305-4.248 4.305h-50.985c-2.345 0-4.249-1.929-4.249-4.305v-4.374c0-13.028 14.692-21.493 29.741-21.493s29.741 8.469 29.741 21.493m-19.077-59.317c5.891 5.892 5.891 15.444 0 21.335-5.892 5.892-15.444 5.892-21.335 0-5.892-5.891-5.892-15.443 0-21.335 5.891-5.89 15.443-5.89 21.335 0z"
      fill="#fff"
    />
    <rect
      x={487.878}
      y={212.539}
      width={128.774}
      height={128.774}
      rx={46.813}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M581.529 303.937v4.305c0 2.377-1.903 4.306-4.248 4.306h-50.985c-2.345 0-4.249-1.929-4.249-4.306v-4.374c0-13.028 14.692-21.493 29.741-21.493s29.741 8.469 29.741 21.493m-19.078-59.316c5.892 5.891 5.892 15.443 0 21.335-5.891 5.891-15.443 5.891-21.334 0-5.892-5.892-5.892-15.444 0-21.335 5.891-5.892 15.443-5.892 21.334 0z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={563.986}
        y1={289.136}
        x2={642.955}
        y2={5.123}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={661.616}
        y1={392.253}
        x2={793.228}
        y2={288.147}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={305.658}
        y1={254.729}
        x2={97.837}
        y2={61.636}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg474);
const Memo = memo(ForwardRef);
export default Memo;
