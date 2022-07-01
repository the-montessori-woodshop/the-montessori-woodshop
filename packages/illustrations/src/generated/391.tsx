import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg391 = (
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
      d="M812.386 271.84c-25.082 12.442-58.372-3.556-58.372-3.556s7.399-36.164 32.494-48.588c25.082-12.443 58.359 3.538 58.359 3.538s-7.399 36.164-32.481 48.606z"
      fill="url(#a)"
    />
    <path
      d="M99.928 362.773c32.772 19.642 79.791 1.485 79.791 1.485s-6.148-49.996-38.941-69.616c-32.772-19.642-79.77-1.507-79.77-1.507s6.147 49.996 38.92 69.638z"
      fill="url(#b)"
    />
    <circle
      cx={763.035}
      cy={188.467}
      r={13.695}
      transform="rotate(180 763.035 188.467)"
      fill="#6f381e"
    />
    <circle
      cx={726.255}
      cy={275.466}
      r={15.407}
      transform="rotate(180 726.255 275.466)"
      fill="#6f381e"
    />
    <circle
      r={12.839}
      transform="matrix(-1 0 0 1 143.989 175.483)"
      fill="#6f381e"
    />
    <circle
      r={5.992}
      transform="matrix(-1 0 0 1 666.84 343.992)"
      fill="#6f381e"
    />
    <circle
      r={7.704}
      transform="matrix(-1 0 0 1 680.16 509.605)"
      fill="#E1E4E5"
    />
    <circle
      r={11.127}
      transform="matrix(-1 0 0 1 141.692 429.614)"
      fill="#E1E4E5"
    />
    <circle
      r={8.469}
      transform="matrix(-1 0 0 1 229.317 193.469)"
      fill="#E1E4E5"
    />
    <circle
      r={9.416}
      transform="matrix(-1 0 0 1 663.264 146.416)"
      fill="#E1E4E5"
    />
    <circle
      r={8.455}
      transform="scale(1 -1) rotate(-75 -81.731 -235.801)"
      fill="#E1E4E5"
    />
    <circle
      r={11.248}
      transform="matrix(-1 0 0 1 558.096 145.248)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.652}
      ry={6.922}
      transform="matrix(-1 0 0 1 740.593 361.764)"
      fill="#E1E4E5"
    />
    <circle
      r={17.597}
      transform="matrix(0 1 1 0 174.399 95.61)"
      fill="#E1E4E5"
    />
    <path
      d="M806.208 313.958h.226c1.34 18.992 15.464 19.284 15.464 19.284s-15.574.304-15.574 22.248c0-21.944-15.574-22.248-15.574-22.248s14.117-.292 15.458-19.284z"
      fill="#E1E4E5"
    />
    <path
      d="M579.848 545.001H247.626c-31.91 0-57.778-25.868-57.778-57.778v-28.889c0-15.955 12.934-28.889 28.889-28.889h288.889c15.955 0 28.889 12.934 28.889 28.889v43.333c0 23.933 19.401 43.334 43.333 43.334v0c23.932 0 43.333-19.401 43.333-43.334V126.112c0-23.933 19.401-43.334 43.334-43.334v0c23.932 0 43.333 19.401 43.333 43.334v72.222c0 15.955-12.934 28.889-28.889 28.889h-57.778m-346.666-33.897V429.44"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={285.348}
      cy={101.5}
      r={46.5}
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M666.521 82.778h-279.43m-8.347 242.324c24.31 24.309 60.87 31.581 92.632 18.425 31.763-13.156 52.472-44.149 52.472-78.527s-20.709-65.371-52.472-78.527c-31.762-13.156-68.322-5.884-92.632 18.425-33.194 33.193-33.194 87.011 0 120.204"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="m546.848 373-48-48 48 48z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={716.068}
        y1={310.65}
        x2={922.946}
        y2={147.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={226.749}
        y1={426}
        x2={-36.951}
        y2={180.987}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg391);
const Memo = memo(ForwardRef);
export default Memo;
