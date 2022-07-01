import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg370 = (
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
      d="M812.538 276.782c-25.082 12.442-58.372-3.557-58.372-3.557s7.398-36.163 32.494-48.588c25.082-12.442 58.359 3.539 58.359 3.539s-7.399 36.163-32.481 48.606z"
      fill="url(#a)"
    />
    <path
      d="M100.08 367.715c32.772 19.642 79.791 1.484 79.791 1.484s-6.148-49.996-38.941-69.616c-32.772-19.642-79.77-1.507-79.77-1.507s6.147 49.997 38.92 69.639z"
      fill="url(#b)"
    />
    <circle
      cx={763.186}
      cy={193.409}
      r={13.695}
      transform="rotate(180 763.186 193.409)"
      fill="#6f381e"
    />
    <circle
      cx={703.641}
      cy={317.631}
      r={15.407}
      transform="rotate(180 703.641 317.631)"
      fill="#6f381e"
    />
    <circle
      r={12.839}
      transform="matrix(-1 0 0 1 144.141 180.425)"
      fill="#6f381e"
    />
    <circle
      r={5.992}
      transform="matrix(-1 0 0 1 645.732 247.189)"
      fill="#6f381e"
    />
    <circle
      r={7.704}
      transform="matrix(-1 0 0 1 680.311 514.546)"
      fill="#E1E4E5"
    />
    <circle
      r={11.127}
      transform="matrix(-1 0 0 1 141.844 434.555)"
      fill="#E1E4E5"
    />
    <circle
      r={8.469}
      transform="matrix(-1 0 0 1 270.527 150.238)"
      fill="#E1E4E5"
    />
    <circle
      r={9.416}
      transform="matrix(-1 0 0 1 681.697 151.809)"
      fill="#E1E4E5"
    />
    <circle
      r={8.455}
      transform="scale(1 -1) rotate(-75 -84.875 -238.371)"
      fill="#E1E4E5"
    />
    <circle
      r={11.248}
      transform="matrix(-1 0 0 1 382.042 79.19)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.652}
      ry={6.922}
      transform="matrix(-1 0 0 1 740.745 366.706)"
      fill="#E1E4E5"
    />
    <circle
      r={17.597}
      transform="scale(1 -1) rotate(-75 270.683 -461.601)"
      fill="#E1E4E5"
    />
    <path
      d="M806.36 318.9h.226c1.34 18.991 15.464 19.283 15.464 19.283s-15.574.304-15.574 22.248c0-21.944-15.575-22.248-15.575-22.248s14.118-.292 15.459-19.283zM237.473 503.525h.201c1.189 17.189 13.722 17.453 13.722 17.453s-13.82.275-13.82 20.136c0-19.861-13.819-20.136-13.819-20.136s12.527-.264 13.716-17.453z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M634.992 471.883V196.296c0-13.073-4.334-25.629-12.015-34.855l-58.101-69.785c-7.702-9.25-18.156-14.455-29.041-14.455H306.388c-22.694 0-41.076 22.078-41.076 49.335v345.347c0 27.257 18.382 49.335 41.076 49.335h287.528c22.694 0 41.076-22.078 41.076-49.335z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={36.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M530.983 231.438c44.92 44.919 44.92 117.747 0 162.666-44.919 44.919-117.747 44.919-162.666 0s-44.919-117.747 0-162.666 117.747-44.919 162.666 0"
      stroke="#fff"
      strokeWidth={36.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M530.365 393.639 450 312.69V204.781"
      stroke="#fff"
      strokeWidth={36.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={716.22}
        y1={315.592}
        x2={923.098}
        y2={151.951}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={226.901}
        y1={430.941}
        x2={-36.799}
        y2={185.929}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg370);
const Memo = memo(ForwardRef);
export default Memo;
