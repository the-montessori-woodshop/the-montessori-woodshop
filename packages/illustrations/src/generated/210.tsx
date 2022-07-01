import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg210 = (
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
      d="M610.449 203.229c-9.692 17.296-30.916 19.672-64.92 16.385-25.572-2.476-48.893-4.392-74.468-18.336-17.9-9.753-32.07-22.948-42.412-35.764-11.207-13.883-26.85-29.728-19.181-45.47 10.538-21.624 71.48-39.837 130.656-10.054 65.006 32.727 79.805 76.335 70.325 93.239z"
      fill="url(#a)"
    />
    <path
      d="M743.499 300.415c-24.472 12.14-56.953-3.47-56.953-3.47s7.219-35.284 31.704-47.406c24.472-12.14 56.94 3.452 56.94 3.452s-7.219 35.285-31.691 47.424z"
      fill="url(#b)"
    />
    <path
      d="M207.395 207.515c14.168 8.491 34.495.642 34.495.642s-2.658-21.615-16.835-30.097c-14.168-8.491-34.487-.651-34.487-.651s2.658 21.614 16.827 30.106z"
      fill="url(#c)"
    />
    <circle
      cx={672.607}
      cy={362.106}
      r={13.362}
      transform="rotate(180 672.607 362.106)"
      fill="#6f381e"
    />
    <circle
      cx={225.027}
      cy={268.943}
      r={11}
      transform="rotate(180 225.027 268.943)"
      fill="#6f381e"
    />
    <circle
      r={12.527}
      transform="matrix(-1 0 0 1 226.554 413.018)"
      fill="#6f381e"
    />
    <circle
      r={5.846}
      transform="matrix(-1 0 0 1 641.657 257.931)"
      fill="#6f381e"
    />
    <circle
      r={7.516}
      transform="matrix(-1 0 0 1 448.056 526.146)"
      fill="#E1E4E5"
    />
    <circle
      r={10.857}
      transform="matrix(-1 0 0 1 123.558 419.459)"
      fill="#E1E4E5"
    />
    <circle
      r={8.263}
      transform="matrix(-1 0 0 1 548.897 488.876)"
      fill="#E1E4E5"
    />
    <circle
      r={9.187}
      transform="matrix(-1 0 0 1 647.927 174.376)"
      fill="#E1E4E5"
    />
    <circle
      r={8.249}
      transform="scale(1 -1) rotate(-75 -87.279 -220.643)"
      fill="#E1E4E5"
    />
    <circle
      r={10.974}
      transform="matrix(-1 0 0 1 311.897 149.802)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.442}
      ry={6.753}
      transform="matrix(-1 0 0 1 728.714 414.388)"
      fill="#E1E4E5"
    />
    <circle
      r={17.169}
      transform="scale(1 -1) rotate(-75 -165.785 -438.28)"
      fill="#E1E4E5"
    />
    <path
      d="M647.78 404.267h.221c1.308 18.529 15.088 18.814 15.088 18.814s-15.196.297-15.196 21.707c0-21.41-15.195-21.707-15.195-21.707s13.774-.285 15.082-18.814zm-474.337 50.826h.115c.684 10.06 7.888 10.215 7.888 10.215s-7.944.161-7.944 11.785c0-11.624-7.944-11.785-7.944-11.785s7.201-.155 7.885-10.215z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m530.305 138.186-35.414-35.257a25.11 25.11 0 0 0-17.707-7.306h-89.813c-13.838 0-25.046 11.158-25.046 24.934v174.54c0 13.776 11.208 24.934 25.046 24.934h125.227c13.838 0 25.046-11.158 25.046-24.934V155.814a24.887 24.887 0 0 0-7.339-17.628z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.374}
    />
    <rect
      x={382.196}
      y={148.219}
      width={130.904}
      height={130.904}
      rx={36.729}
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M426.586 187.5a3.64 3.64 0 1 1-5.119 0 3.652 3.652 0 0 1 5.145 0m86.487 12.428a69.482 69.482 0 0 0-79.995 69.196c.02 3.348.287 6.691.798 10.001"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m770.432 305.009-13.041-48.241a25.11 25.11 0 0 0-11.682-15.18l-77.781-44.907c-11.983-6.919-27.269-2.86-34.157 9.071l-87.269 151.155c-6.888 11.931-2.761 27.198 9.223 34.117l108.45 62.613c11.983 6.919 27.269 2.86 34.157-9.07l69.641-120.622a24.888 24.888 0 0 0 2.459-18.936z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.374}
    />
    <rect
      x={637.148}
      y={239.642}
      width={130.904}
      height={130.904}
      rx={36.729}
      transform="rotate(30 637.148 239.642)"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M655.951 295.855a3.64 3.64 0 1 1-7.117.476 3.64 3.64 0 0 1 2.684-3.035 3.653 3.653 0 0 1 4.455 2.572m68.687 54.007a69.485 69.485 0 0 0-103.876 19.928 68.216 68.216 0 0 0-4.309 9.06"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m268.756 224.688-48.298-12.826a25.113 25.113 0 0 0-18.988 2.526l-77.78 44.907c-11.984 6.919-16.111 22.186-9.223 34.116l87.27 151.156c6.888 11.93 22.173 15.989 34.157 9.07l108.45-62.613c11.984-6.919 16.111-22.186 9.223-34.117l-69.641-120.622a24.888 24.888 0 0 0-15.17-11.597z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.374}
    />
    <rect
      x={145.505}
      y={307.432}
      width={130.904}
      height={130.904}
      rx={36.729}
      transform="rotate(-30 145.505 307.432)"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M203.588 319.255a3.639 3.639 0 1 1-4.432 2.559 3.652 3.652 0 0 1 4.455-2.572m81.115-32.481a69.489 69.489 0 0 0-40.406 41.956 69.487 69.487 0 0 0 5.726 57.967 68.318 68.318 0 0 0 5.692 8.262"
      stroke="#fff"
      strokeWidth={18.364}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={449.884} cy={394.39} r={109.344} fill="#6f381e" />
    <rect
      x={440.944}
      y={348.314}
      width={17.88}
      height={92.152}
      rx={8.94}
      fill="#fff"
    />
    <rect
      x={495.959}
      y={385.45}
      width={17.88}
      height={92.152}
      rx={8.94}
      transform="rotate(90 495.959 385.45)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={545.162}
        y1={315.322}
        x2={458.783}
        y2={-72.831}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={649.524}
        y1={338.281}
        x2={851.37}
        y2={178.62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={262.222}
        y1={234.849}
        x2={148.219}
        y2={128.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg210);
const Memo = memo(ForwardRef);
export default Memo;
