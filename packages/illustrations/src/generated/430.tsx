import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg430 = (
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
      d="M124.463 502.655h184.633"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m133.235 502.656.461-111.057c0-5.632 2.678-10.986 7.109-14.494l64.621-50.312c6.647-5.17 15.971-5.17 22.71 0l64.622 50.22c4.523 3.508 7.108 8.862 7.108 14.586v111.057"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M226.109 428.997h-18.658c-7.743 0-13.993 9.844-13.993 22.039v51.425h46.644v-51.425c0-12.195-6.25-22.039-13.993-22.039z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="m281.404 364.181-.277-27.695h-40.619m117.176 166.169h184.632m-64.529-.092-110.78.185-.092-137.921c0-6.185 3.139-11.909 8.216-15.325l36.927-24.648a18.405 18.405 0 0 1 20.494 0l36.926 24.648c5.17 3.416 8.217 9.14 8.217 15.325l.092 137.736zm45.886.185v-37.019m.18-55.39c-10.155 0-18.463 8.308-18.463 18.463v18.464c0 10.154 8.308 18.463 18.463 18.463 10.155 0 18.463-8.309 18.463-18.463v-18.464c0-10.155-8.308-18.463-18.463-18.463zm-156.938 18.463h110.78m-55.39 73.853v-34.618"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M422.305 396.492c7.648 0 13.848-6.2 13.848-13.848 0-7.648-6.2-13.847-13.848-13.847-7.647 0-13.847 6.199-13.847 13.847s6.2 13.848 13.847 13.848zm159.368 106.163h203.096m-29.724.093v-41.173m.179-61.483a20.251 20.251 0 0 0-20.31 20.31v20.955a20.251 20.251 0 0 0 20.31 20.31 20.251 20.251 0 0 0 20.309-20.31v-20.955a20.251 20.251 0 0 0-20.309-20.31zM591.823 502.655V355.226c0-18.555 9.232-27.879 27.603-27.879h57.513c18.371 0 27.51 9.324 27.51 27.879v147.429M625.982 375.72h45.697m-45.697 34.619h45.697m-23.077 92.316v-34.618M115.231 281.096h203.097m-29.724.093v-41.173m.178-61.483a20.25 20.25 0 0 0-20.309 20.309v20.956a20.252 20.252 0 0 0 20.309 20.31 20.252 20.252 0 0 0 20.31-20.31v-20.956a20.251 20.251 0 0 0-20.31-20.309zM125.383 281.096V133.667c0-18.556 9.232-27.88 27.603-27.88h57.513c18.371 0 27.51 9.324 27.51 27.88v147.429m-78.467-126.935h45.696m-45.696 34.619h45.696m-23.077 92.316v-34.619m175.523 34.619h184.632"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m366.455 281.096.462-111.057c0-5.631 2.677-10.985 7.108-14.493l64.621-50.312c6.647-5.17 15.971-5.17 22.71 0l64.622 50.22c4.523 3.508 7.108 8.862 7.108 14.585v111.057"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M459.329 207.437h-18.658c-7.743 0-13.993 9.844-13.993 22.04v51.425h46.644v-51.425c0-12.196-6.251-22.04-13.993-22.04z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="m514.625 142.621-.277-27.694h-40.619m117.174 166.169h184.633m-64.528-.093-110.78.185-.092-137.92c0-6.186 3.139-11.91 8.216-15.325l36.927-24.649a18.41 18.41 0 0 1 20.494 0l36.926 24.649c5.17 3.415 8.216 9.139 8.216 15.325l.093 137.735zm45.886.185v-37.019m.18-55.389c-10.155 0-18.464 8.308-18.464 18.463v18.463c0 10.155 8.309 18.463 18.464 18.463 10.154 0 18.463-8.308 18.463-18.463v-18.463c0-10.155-8.309-18.463-18.463-18.463zm-156.938 18.463h110.779m-55.39 73.853v-34.619"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M655.525 174.932c7.648 0 13.848-6.199 13.848-13.847s-6.2-13.848-13.848-13.848c-7.648 0-13.847 6.2-13.847 13.848 0 7.648 6.199 13.847 13.847 13.847z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M810.098 328.612c-15.011 7.446-34.934-2.128-34.934-2.128s4.428-21.643 19.447-29.079c15.011-7.446 34.926 2.118 34.926 2.118s-4.428 21.643-19.439 29.089z"
      fill="url(#a)"
    />
    <path
      d="M119.189 342.562c12.774 7.656 31.101.578 31.101.578s-2.396-19.487-15.178-27.134c-12.774-7.656-31.093-.588-31.093-.588s2.396 19.488 15.17 27.144z"
      fill="url(#b)"
    />
    <circle
      cx={751.231}
      cy={130.23}
      r={17.23}
      transform="rotate(180 751.231 130.23)"
      fill="#6f381e"
    />
    <circle
      cx={282.378}
      cy={110.378}
      r={7.378}
      transform="rotate(180 282.378 110.378)"
      fill="#6f381e"
    />
    <circle
      cx={529.184}
      cy={331.184}
      r={14.184}
      transform="rotate(180 529.184 331.184)"
      fill="#6f381e"
    />
    <circle
      r={7.538}
      transform="matrix(-1 0 0 1 746.538 342.538)"
      fill="#6f381e"
    />
    <circle
      r={9.692}
      transform="matrix(-1 0 0 1 327.692 156.692)"
      fill="#E1E4E5"
    />
    <circle
      r={9.964}
      transform="matrix(-1 0 0 1 127.995 500.061)"
      fill="#E1E4E5"
    />
    <circle
      r={5.244}
      transform="matrix(-1 0 0 1 567.244 387.244)"
      fill="#E1E4E5"
    />
    <circle
      r={11.846}
      transform="matrix(-1 0 0 1 565.845 118.846)"
      fill="#E1E4E5"
    />
    <circle
      r={10.637}
      transform="scale(1 -1) rotate(-75 115.676 -376.106)"
      fill="#E1E4E5"
    />
    <circle
      r={14.151}
      transform="matrix(-1 0 0 1 381.812 81.556)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.886}
      ry={8.709}
      transform="matrix(-1 0 0 1 335.886 453.709)"
      fill="#E1E4E5"
    />
    <circle
      r={9.646}
      transform="scale(1 -1) rotate(-75 -50.549 -375.059)"
      fill="#E1E4E5"
    />
    <path
      d="M178.766 118.896h.155c.919 13.01 10.595 13.211 10.595 13.211s-10.67.208-10.67 15.242c0-15.034-10.67-15.242-10.67-15.242s9.672-.201 10.59-13.211z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={752.455}
        y1={351.839}
        x2={876.265}
        y2={253.904}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={168.621}
        y1={367.206}
        x2={65.837}
        y2={271.706}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg430);
const Memo = memo(ForwardRef);
export default Memo;
