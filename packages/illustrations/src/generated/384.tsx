import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg384 = (
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
      d="M810.707 298.996c-24.986 12.395-58.15-3.542-58.15-3.542s7.371-36.026 32.37-48.404c24.987-12.395 58.137 3.525 58.137 3.525s-7.37 36.026-32.357 48.421z"
      fill="url(#a)"
    />
    <path
      d="M102.287 367.463c32.648 19.567 79.487 1.478 79.487 1.478s-6.124-49.805-38.792-69.35c-32.648-19.568-79.467-1.502-79.467-1.502s6.124 49.806 38.772 69.374z"
      fill="url(#b)"
    />
    <circle
      cx={762.87}
      cy={193.82}
      r={13.643}
      transform="rotate(180 762.87 193.82)"
      fill="#6f381e"
    />
    <circle
      cx={576.704}
      cy={152.75}
      r={15.349}
      transform="rotate(180 576.704 152.75)"
      fill="#6f381e"
    />
    <circle
      r={12.79}
      transform="matrix(-1 0 0 1 146.18 180.886)"
      fill="#6f381e"
    />
    <circle
      r={5.969}
      transform="matrix(-1 0 0 1 645.862 247.396)"
      fill="#6f381e"
    />
    <circle
      r={7.674}
      transform="matrix(-1 0 0 1 680.31 513.735)"
      fill="#E1E4E5"
    />
    <circle
      r={11.085}
      transform="matrix(-1 0 0 1 143.893 434.049)"
      fill="#E1E4E5"
    />
    <circle
      r={8.437}
      transform="matrix(-1 0 0 1 315.471 169.811)"
      fill="#E1E4E5"
    />
    <circle
      r={9.38}
      transform="matrix(-1 0 0 1 722.911 130.104)"
      fill="#E1E4E5"
    />
    <circle
      r={8.423}
      transform="scale(1 -1) rotate(-75 18.742 -185.755)"
      fill="#E1E4E5"
    />
    <circle
      r={11.205}
      transform="matrix(-1 0 0 1 413.089 92.322)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.619}
      ry={6.896}
      transform="matrix(-1 0 0 1 740.513 366.457)"
      fill="#E1E4E5"
    />
    <circle
      r={17.53}
      transform="scale(1 -1) rotate(-75 286.95 -467.368)"
      fill="#E1E4E5"
    />
    <path
      d="M728.931 441.753h.225c1.335 18.919 15.405 19.21 15.405 19.21s-15.515.303-15.515 22.163c0-21.86-15.515-22.163-15.515-22.163s14.064-.291 15.4-19.21zm-489.773 61.003h.2c1.184 17.123 13.669 17.387 13.669 17.387s-13.767.274-13.767 20.059c0-19.785-13.767-20.059-13.767-20.059s12.48-.264 13.665-17.387z"
      fill="#E1E4E5"
    />
    <circle
      cx={450.87}
      cy={299.998}
      r={258.488}
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m278.544 493.003 13.129-210.051c1.419-22.706 20.248-40.395 42.997-40.395h232.398c22.749 0 41.578 17.689 42.997 40.394l13.13 210.052m-97.653-250.455v-10.687c0-41.242-33.433-74.674-74.675-74.674v0c-41.241 0-74.674 33.432-74.674 74.674v10.687"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M401.669 430.353s18.558 11.465 49.509 11.465c30.95 0 49.509-11.465 49.509-11.465"
      fill="#6f381e"
    />
    <path
      d="M401.669 430.353s18.558 11.465 49.509 11.465c30.95 0 49.509-11.465 49.509-11.465"
      stroke="#6f381e"
      strokeWidth={22.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M413.472 360.181c0 13.384-11.106 24.253-24.829 24.253s-24.828-10.869-24.828-24.253 11.105-24.253 24.828-24.253c13.723 0 24.829 10.869 24.829 24.253zm123.918 0c0 13.384-11.106 24.253-24.829 24.253s-24.829-10.869-24.829-24.253 11.106-24.253 24.829-24.253 24.829 10.869 24.829 24.253z"
      fill="#6f381e"
      stroke="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={714.756}
        y1={337.659}
        x2={920.847}
        y2={174.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={228.626}
        y1={430.448}
        x2={-34.071}
        y2={186.369}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg384);
const Memo = memo(ForwardRef);
export default Memo;
