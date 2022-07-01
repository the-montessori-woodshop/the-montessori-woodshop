import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg451 = (
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
      d="M372.401 148.911H557.06c12.721 0 24.006.479 34.06 2.159 53.961 6.957 68.529 36.704 68.529 117.79V412.8c0 81.086-14.568 110.834-68.529 117.791-10.054 1.679-21.339 2.159-34.06 2.159H372.401c-12.721 0-24.006-.48-34.06-2.159-53.961-6.957-68.529-36.705-68.529-117.791V268.86c0-81.086 14.568-110.833 68.529-117.79 10.054-1.68 21.339-2.159 34.06-2.159z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M493.013 282.165h65.719m-187.768 75.107h187.768m-187.768 71.473h187.768m-129.67-146.58h.168m-56.499 0h.169"
      stroke="#fff"
      strokeWidth={36}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M371.749 207.03v-84.505c.003-14.543-9.152-27.526-22.887-32.457l-52.803-18.936a83.401 83.401 0 0 0-56.3 0l-52.872 18.97c-13.723 4.927-22.876 17.892-22.887 32.423v84.505c0 43.908 61.667 76.399 90.024 89.058a33.77 33.77 0 0 0 27.7 0c28.358-12.658 90.025-45.219 90.025-89.058z"
      fill="#6f381e"
    />
    <path
      d="M236.857 197.72c10.522 10.481 26.346 13.617 40.093 7.944 13.747-5.672 22.71-19.035 22.71-33.858 0-14.823-8.963-28.186-22.71-33.858-13.747-5.673-29.571-2.537-40.093 7.944-14.366 14.312-14.366 37.516 0 51.828"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="m309.588 218.341-20.703-20.623 20.703 20.623z"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M642.419 326.091a34.614 34.614 0 0 1 34.512 0l28.352 16.307a34.611 34.611 0 0 1 17.356 30.003v32.383a34.614 34.614 0 0 1-17.356 30.004l-28.352 16.306a34.61 34.61 0 0 1-34.512 0l-28.353-16.306a34.614 34.614 0 0 1-17.356-30.004v-32.383a34.611 34.611 0 0 1 17.356-30.003l28.353-16.307z"
      fill="#6f381e"
    />
    <path
      d="m682.162 375.063-26.538 26.225-15.924-15.735"
      stroke="#fff"
      strokeWidth={9.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M424.988 103.529c16.246 8.059 37.808-2.303 37.808-2.303s-4.792-23.424-21.046-31.472c-16.246-8.058-37.8 2.292-37.8 2.292s4.792 23.424 21.038 31.483z"
      fill="url(#a)"
    />
    <circle
      r={11.033}
      transform="matrix(1 0 0 -1 693.079 533.984)"
      fill="#6f381e"
    />
    <circle
      r={16.976}
      transform="matrix(1 0 0 -1 542.404 90.88)"
      fill="#6f381e"
    />
    <circle cx={724.835} cy={227.313} r={11.027} fill="#6f381e" />
    <circle cx={187.253} cy={307.443} r={15.587} fill="#E1E4E5" />
    <circle cx={668.363} cy={113.09} r={8.5} fill="#E1E4E5" />
    <ellipse cx={187.591} cy={409.738} rx={15.924} ry={12.739} fill="#E1E4E5" />
    <circle
      cx={213.279}
      cy={523.006}
      r={25.416}
      transform="rotate(90 213.279 523.006)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={487.374}
        y1={128.666}
        x2={353.378}
        y2={22.675}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg451);
const Memo = memo(ForwardRef);
export default Memo;
