import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg375 = (
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
      d="M100.08 367.715c32.773 19.642 79.791 1.484 79.791 1.484s-6.148-49.996-38.94-69.616c-32.773-19.642-79.772-1.507-79.772-1.507s6.148 49.997 38.921 69.639z"
      fill="url(#b)"
    />
    <circle
      cx={763.187}
      cy={193.409}
      r={13.695}
      transform="rotate(180 763.187 193.409)"
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
      transform="matrix(-1 0 0 1 680.312 514.546)"
      fill="#E1E4E5"
    />
    <circle
      r={11.127}
      transform="matrix(-1 0 0 1 141.845 434.555)"
      fill="#E1E4E5"
    />
    <circle
      r={8.469}
      transform="matrix(-1 0 0 1 270.527 150.239)"
      fill="#E1E4E5"
    />
    <circle
      r={9.416}
      transform="matrix(-1 0 0 1 681.697 151.81)"
      fill="#E1E4E5"
    />
    <circle
      r={8.455}
      transform="scale(1 -1) rotate(-75 -84.875 -238.371)"
      fill="#E1E4E5"
    />
    <circle
      r={11.248}
      transform="matrix(-1 0 0 1 382.043 79.19)"
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
      transform="scale(1 -1) rotate(-75 270.683 -461.602)"
      fill="#E1E4E5"
    />
    <path
      d="M806.36 318.9h.226c1.34 18.991 15.464 19.283 15.464 19.283s-15.574.304-15.574 22.248c0-21.944-15.575-22.248-15.575-22.248s14.118-.292 15.459-19.283zM237.474 503.525h.2c1.19 17.189 13.722 17.453 13.722 17.453s-13.819.275-13.819 20.136c0-19.861-13.82-20.136-13.82-20.136s12.527-.264 13.717-17.453z"
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M514 412c0-20.424 16.8-37 37.5-37s37.5 16.576 37.5 37-16.8 37-37.5 37-37.5-16.576-37.5-37z"
      fill="#fff"
    />
    <path
      d="M335 238.438h231m-231 86.624h231M335 411.5h133m-133-246h109"
      stroke="#fff"
      strokeWidth={43.313}
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

const ForwardRef = forwardRef(Svg375);
const Memo = memo(ForwardRef);
export default Memo;
