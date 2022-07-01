import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg318 = (
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
    <circle
      cx={451.285}
      cy={300.313}
      r={262.763}
      stroke="url(#a)"
      strokeWidth={3}
    />
    <path
      d="M439.972 372.042c-16.96-3.713-24.359-20.889-30.269-50.214-4.44-22.056-8.777-42.081-3.611-67.061 3.61-17.481 11.054-32.714 19.156-44.644 8.776-12.927 18.066-30.069 33.208-27.655 20.801 3.319 51.586 49.735 41.712 106.901-10.855 62.799-43.619 86.308-60.196 82.673z"
      fill="url(#b)"
    />
    <path
      d="M740.259 346.066c-23.982 11.897-55.812-3.4-55.812-3.4s7.074-34.577 31.069-46.457c23.982-11.896 55.799 3.383 55.799 3.383s-7.074 34.578-31.056 46.474z"
      fill="url(#c)"
    />
    <path
      d="M162.431 425.406c31.335 18.78 76.291 1.419 76.291 1.419s-5.878-47.803-37.232-66.562c-31.335-18.781-76.272-1.441-76.272-1.441s5.878 47.803 37.213 66.584z"
      fill="url(#d)"
    />
    <circle
      cx={728.095}
      cy={167.095}
      r={13.095}
      transform="rotate(180 728.095 167.095)"
      fill="#6f381e"
    />
    <circle
      cx={256.104}
      cy={281.982}
      r={14.732}
      transform="rotate(180 256.104 281.982)"
      fill="#6f381e"
    />
    <circle
      r={12.276}
      transform="matrix(-1 0 0 1 157.411 195.395)"
      fill="#6f381e"
    />
    <circle
      r={5.729}
      transform="matrix(-1 0 0 1 637.003 259.231)"
      fill="#6f381e"
    />
    <circle
      r={7.366}
      transform="matrix(-1 0 0 1 500.371 492.366)"
      fill="#E1E4E5"
    />
    <circle
      r={10.639}
      transform="matrix(-1 0 0 1 155.216 438.379)"
      fill="#E1E4E5"
    />
    <circle
      r={8.098}
      transform="matrix(-1 0 0 1 278.256 166.532)"
      fill="#E1E4E5"
    />
    <circle
      r={9.003}
      transform="matrix(-1 0 0 1 361.556 370.821)"
      fill="#E1E4E5"
    />
    <circle
      r={8.084}
      transform="scale(1 -1) rotate(-75 -86.267 -252.124)"
      fill="#E1E4E5"
    />
    <circle
      r={10.755}
      transform="matrix(-1 0 0 1 384.88 98.6)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.273}
      ry={6.618}
      transform="matrix(-1 0 0 1 568.277 409.618)"
      fill="#E1E4E5"
    />
    <circle
      r={16.825}
      transform="scale(1 -1) rotate(-75 240.167 -403.481)"
      fill="#E1E4E5"
    />
    <path
      d="M681.785 408h.216c1.282 18.158 14.786 18.438 14.786 18.438s-14.891.29-14.891 21.272c0-20.982-14.891-21.272-14.891-21.272s13.498-.28 14.78-18.438zm-435.134 96.324h.192c1.137 16.434 13.119 16.687 13.119 16.687s-13.213.263-13.213 19.253c0-18.99-13.213-19.253-13.213-19.253s11.977-.253 13.115-16.687z"
      fill="#E1E4E5"
    />
    <path
      d="m596.842 123.383 49.759 185.705L418.413 432.43l-7.277-259.288 185.706-49.759zm49.752 185.708L411.127 173.144m7.28 259.287 178.429-309.048"
      stroke="#6f381e"
      strokeWidth={27.563}
      strokeLinejoin="round"
    />
    <path
      d="M227.861 423.882c25.72-83.87 111.045-63.182 76.602 22.925-34.443 86.108 97.886 132.766 116.815-17.347"
      stroke="#6f381e"
      strokeWidth={27.563}
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={462.554}
        y1={860.899}
        x2={446.257}
        y2={-538.898}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={329.427}
        y1={345.906}
        x2={632.609}
        y2={174.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={648.166}
        y1={383.174}
        x2={845.97}
        y2={226.711}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={283.69}
        y1={485.859}
        x2={31.556}
        y2={251.593}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg318);
const Memo = memo(ForwardRef);
export default Memo;
