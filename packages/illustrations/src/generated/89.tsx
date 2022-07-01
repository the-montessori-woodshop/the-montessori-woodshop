import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg89 = (
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
      d="M624.628 411.154c2.836 52.253-99.324 158.505-225.243 119.178-58.563-18.293-53.603-48.654-98.134-88.667-26.544-23.849-64.682-41.882-75.289-76.548-9.163-29.922-3.544-62.083 12.342-83.002 35.729-47.045 107.857-79.26 178.926-5.136 71.069 74.124 200.07-.591 207.398 134.175z"
      fill="url(#a)"
    />
    <path
      d="M583.126 188.456c-8.397 14.986-26.787 17.045-56.248 14.197-22.158-2.145-42.363-3.806-64.522-15.887-15.51-8.45-27.787-19.883-36.748-30.987-9.71-12.029-23.263-25.758-16.619-39.397 9.13-18.736 61.933-34.516 113.205-8.711 56.324 28.355 69.146 66.139 60.932 80.785z"
      fill="url(#b)"
    />
    <path
      d="M534.451 88.559a25.953 25.953 0 0 0-1.656-.533c-.185-.053-.367-.11-.552-.157a46.972 46.972 0 0 0-1.193-.286 19.482 19.482 0 0 0-.575-.115 32.561 32.561 0 0 0-1.204-.202 29.66 29.66 0 0 0-.707-.09c-.172-.019-.343-.039-.517-.055a25.307 25.307 0 0 0-.814-.062c-.143-.008-.286-.023-.429-.028a26.42 26.42 0 0 0-1.263-.031H331.449a26.153 26.153 0 0 0-5.273.533c-11.077 2.268-19.602 11.553-20.764 23.018-.09.883-.135 1.777-.135 2.683v397.653c0 11.355 7.196 21.022 17.267 24.675.045.017.09.031.135.045.5.177 1.007.339 1.518.485.185.053.368.109.556.157.196.05.393.098.589.146.199.047.401.095.603.14.191.042.382.078.576.115a35.249 35.249 0 0 0 1.201.202c.233.033.469.061.707.089a24.344 24.344 0 0 0 1.33.118c.143.009.286.023.43.028.418.02.839.031 1.262.031h194.096c.903 0 1.796-.045 2.677-.135 12.317-1.253 22.111-11.071 23.362-23.418.09-.883.135-1.778.135-2.683V113.234c-.006-11.355-7.201-21.022-17.27-24.675z"
      fill="#6f381e"
    />
    <path
      d="M428.496 518.169c8.333 0 15.088-6.755 15.088-15.088 0-8.333-6.755-15.088-15.088-15.088-8.333 0-15.088 6.755-15.088 15.088 0 8.333 6.755 15.088 15.088 15.088z"
      fill="#fff"
    />
    <rect
      x={403.35}
      y={109.535}
      width={51.551}
      height={5.029}
      rx={2.515}
      fill="#fff"
    />
    <path
      d="M729 256.643c-2.602-10.397-27.188-25.582-40.326-16.427-4.033-19.807-7.805-32.16-20.981-41.917-13.175-9.758-35.16 2.996-38.691 29.711-3.53-10.982-21.482-25.783-35.903-13.303-13.343 11.549-14.681 30.899-13.287 41.918H729v.018z"
      fill="url(#c)"
    />
    <path
      d="M172 164.858c1.749-7.002 18.277-17.229 27.11-11.063 2.711-13.34 5.247-21.659 14.105-28.23 8.857-6.572 23.637 2.018 26.01 20.009 2.374-7.396 14.442-17.364 24.137-8.959 8.97 7.778 9.869 20.81 8.932 28.231H172v.012z"
      fill="url(#d)"
    />
    <circle cx={412.853} cy={219.138} r={6.16} fill="#fff" />
    <path
      d="M475.223 230.439a44.73 44.73 0 0 0-6.403-.52c-12.924-.093-25.238 5.573-33.687 15.502-8.449 9.928-12.183 23.119-10.216 36.087"
      stroke="#fff"
      strokeWidth={10.395}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M477.533 233.383v0a49.666 49.666 0 0 1-49.665 49.664v0a49.665 49.665 0 0 1-49.665-49.664v0a49.665 49.665 0 0 1 49.665-49.665v0a49.665 49.665 0 0 1 49.665 49.665z"
      stroke="#fff"
      strokeWidth={10.395}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={361.857}
      y={381.12}
      width={139.564}
      height={10.059}
      rx={5.029}
      fill="#fff"
    />
    <rect
      x={371.916}
      y={350.944}
      width={129.506}
      height={10.059}
      rx={5.029}
      fill="#fff"
    />
    <rect
      x={355.571}
      y={320.768}
      width={145.851}
      height={10.059}
      rx={5.029}
      fill="#fff"
    />
    <circle
      r={7.544}
      transform="matrix(1 0 0 -1 265.043 355.973)"
      fill="#E1E4E5"
    />
    <circle
      cx={595.093}
      cy={380.491}
      r={4.401}
      transform="rotate(-180 595.093 380.491)"
      fill="#6f381e"
    />
    <circle
      cx={204.658}
      cy={250.658}
      r={5.658}
      transform="rotate(-180 204.658 250.658)"
      fill="#6f381e"
    />
    <circle
      cx={278.658}
      cy={218.658}
      r={5.658}
      transform="rotate(-180 278.658 218.658)"
      fill="#E1E4E5"
    />
    <circle
      r={5.658}
      transform="matrix(1 0 0 -1 591.321 450.902)"
      fill="#E1E4E5"
    />
    <circle
      r={5.658}
      transform="matrix(1 0 0 -1 273.658 475.658)"
      fill="#E1E4E5"
    />
    <circle
      r={5.658}
      transform="matrix(1 0 0 -1 578.748 156.685)"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="m599.494 315.738-8.801-8.801 8.801-8.801 8.802 8.801-8.802 8.801z"
      stroke="#E1E4E5"
      strokeWidth={5.029}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M660.03 291.914c-9.355 2.216-19.249-5.718-19.249-5.718s5.28-11.522 14.638-13.731c9.355-2.216 19.246 5.71 19.246 5.71s-5.28 11.523-14.635 13.739z"
      fill="url(#e)"
    />
    <path
      d="M643.147 364.776c8.291 5.711 20.959 1.719 20.959 1.719s-.785-13.25-9.082-18.956c-8.291-5.711-20.953-1.724-20.953-1.724s.784 13.25 9.076 18.961z"
      fill="url(#f)"
    />
    <path
      d="M151.275 309.601c18.324 18.65 52.59 14.718 52.59 14.718s4.534-34.17-13.807-52.809c-18.324-18.65-52.572-14.729-52.572-14.729s-4.535 34.17 13.789 52.82z"
      fill="url(#g)"
    />
    <ellipse
      cx={692.618}
      cy={331.026}
      rx={13.618}
      ry={13.026}
      transform="rotate(180 692.618 331.026)"
      fill="#6f381e"
    />
    <ellipse
      cx={253.608}
      cy={440.282}
      rx={18.354}
      ry={17.762}
      transform="rotate(180 253.608 440.282)"
      fill="#6f381e"
    />
    <circle
      r={13.366}
      transform="matrix(-1 0 0 1 242.907 199.689)"
      fill="#6f381e"
    />
    <circle
      r={12.434}
      transform="matrix(-1 0 0 1 608.433 233.434)"
      fill="#6f381e"
    />
    <circle
      r={11.182}
      transform="matrix(-1 0 0 1 640.182 441.182)"
      fill="#E1E4E5"
    />
    <circle
      r={11.762}
      transform="matrix(-1 0 0 1 197.762 368.762)"
      fill="#E1E4E5"
    />
    <circle
      r={5.795}
      transform="matrix(-1 0 0 1 659.795 224.795)"
      fill="#E1E4E5"
    />
    <circle
      r={8.845}
      transform="matrix(-1 0 0 1 626.237 156.854)"
      fill="#E1E4E5"
    />
    <circle
      r={5.786}
      transform="scale(1 -1) rotate(-75 -64.293 -307.301)"
      fill="#E1E4E5"
    />
    <circle r={5.5} transform="matrix(-1 0 0 1 171.5 199.5)" fill="#E1E4E5" />
    <ellipse
      rx={5.921}
      ry={4.737}
      transform="matrix(-1 0 0 1 684.921 402.737)"
      fill="#E1E4E5"
    />
    <circle
      r={12.041}
      transform="scale(1 -1) rotate(-75 186.74 -400.907)"
      fill="#E1E4E5"
    />
    <path
      d="M695.578 175h.155c.917 12.995 10.582 13.195 10.582 13.195s-10.657.209-10.657 15.225c0-15.016-10.658-15.225-10.658-15.225s9.661-.2 10.578-13.195zM291.407 70h.181C292.664 85.547 304 85.787 304 85.787s-12.5.248-12.5 18.213c0-17.965-12.5-18.213-12.5-18.213s11.331-.24 12.407-15.787z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={502.526}
        y1={724.37}
        x2={311.43}
        y2={-137.787}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={526.56}
        y1={285.578}
        x2={451.717}
        y2={-50.733}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={657.379}
        y1={291.185}
        x2={656.596}
        y2={127.995}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={220.149}
        y1={188.121}
        x2={220.677}
        y2={78.217}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={624.803}
        y1={297.424}
        x2={706.693}
        y2={258.736}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={675.446}
        y1={383.515}
        x2={610.177}
        y2={314.691}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={224.384}
        y1={373.305}
        x2={91.913}
        y2={165.645}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg89);
const Memo = memo(ForwardRef);
export default Memo;
