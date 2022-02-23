import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg25 = (
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
      d="M671.157 171.197c-17.945-58.572-173.048-134.168-295.585-40.192-56.99 43.709-39.301 75.077-72.114 137.002-19.559 36.909-54.205 72.101-51.89 114.475 1.99 36.578 21.129 69.659 47.02 86.246 58.228 37.303 150.484 43.636 198.714-66.474 48.23-110.11 220.12-79.992 173.855-231.057z"
      fill="url(#a)"
    />
    <path
      d="M740.703 350.515c-13.35-17.162-36.754-16.252-73.084-7.102-27.323 6.887-52.294 12.796-77.735 32.117-17.807 13.516-31.004 30.151-40.112 45.747-9.871 16.895-24.229 36.646-13.328 52.455 14.979 21.716 84.051 31.452 143.323-10.564 65.11-46.166 73.993-95.881 60.936-112.653z"
      fill="url(#b)"
    />
    <path
      d="M305.248 191.019c-20.154 53.739-40.326 110.522-77.226 145.714-38.057 36.312-50.303 23.498-59.786.452-9.483-23.047-10.884-83.298 41.339-131.785 52.237-48.501 114.528-64.675 95.673-14.381z"
      fill="url(#c)"
    />
    <path
      d="M343.026 241.614c0 28.425 10.109 54.491 26.931 74.845 14.554 17.596 22.635 39.622 22.635 62.413v32.874c0 20.901 17.161 38 38.138 38h61.033c20.977 0 38.138-17.099 38.138-38v-32.933c0-22.842 8.201-44.847 22.745-62.504 16.891-20.502 26.98-46.778 26.81-75.412-.389-64.961-53.021-117.074-118.21-117.074-7.242 0-14.334.657-21.226 1.901-1.529.279-3.037.577-4.545.916-52.902 11.704-92.449 58.731-92.449 114.974z"
      fill="#6f381e"
    />
    <path
      d="M483.572 219.841c-1.818 19.563-20.4 38.193-20.4 38.193s-18.368-22.075-16.55-41.638c1.831-19.567 11.568-34.655 21.775-33.698 10.203.943 16.993 17.58 15.175 37.143zm-38.532 37.937c12.814 11.525 16.19 34.359 16.19 34.359s-25.149 1.38-37.968-10.157c-12.818-11.536-18.331-26.293-12.309-32.976 6.011-6.679 21.272-2.751 34.087 8.774zm19.722 76.691c.701 2.61 1.045 4.451 1.134 4.918.008.054.022.094.02.118l.003.01s-.01.004-.013-.006l-.074.015c-.247.009-.983.047-2.098.074-5.966.114-22.712-.343-32.264-8.614-11.764-10.188-16.987-23.436-11.674-29.562 5.31-6.135 19.155-2.851 30.92 7.338 5.266 4.566 8.868 11.197 11.226 17.15a75.105 75.105 0 0 1 2.82 8.559zm33.697-49.921c-14.238 9.716-37.225 7.6-37.225 7.6s4.631-24.772 18.868-34.488c14.238-9.715 29.883-11.573 34.956-4.154 5.077 7.43-2.361 21.326-16.599 31.042z"
      fill="#fff"
    />
    <path
      d="M496.78 329.146c-11.869 10.064-32.707 10.319-32.707 10.319s1.831-22.68 13.699-32.744c11.868-10.063 25.75-13.209 31.001-7.013 5.251 6.196-.115 19.371-11.993 29.438z"
      fill="#fff"
    />
    <path
      d="M465.883 249.833c-.071.283-5.379 27.554 2.897 95.077a837.446 837.446 0 0 0 2.049 15.491l-.327.046-2.403.334-.004-.013-.013.005-.093.019c-.312.012-1.241.06-2.648.093a797.282 797.282 0 0 1-2.262-17.277c-8.1-67.114-2.827-93.727-2.595-94.914l5.399 1.139z"
      fill="#fff"
    />
    <path
      d="m483.764 452.942-.088.444-1.138 5.609-.297 1.478v.013l-.305 1.486-1.13 5.605-.298 1.477-.007.013-.298 1.491-.169.819c-.576 2.846-5.626 5.017-11.671 5.017H454.75c-1.442 0-2.816-.123-4.096-.349h-.007a18.189 18.189 0 0 1-3.168-.85l-.074-.026a11.049 11.049 0 0 1-2.058-1.011c-1.219-.776-2.024-1.704-2.254-2.729l-.481-2.174-.305-1.369v-.004l-.006-.031v-.004l-.298-1.338-1.158-5.199-.304-1.365-.007-.03-.298-1.347-1.252-5.631h44.78v.005z"
      fill="#2D2019"
    />
    <circle
      r={7.463}
      transform="matrix(1 0 0 -1 304.643 320.729)"
      fill="#6f381e"
    />
    <circle
      r={20.049}
      transform="scale(-1 1) rotate(30 -570.61 -1142.353)"
      fill="#6f381e"
    />
    <circle
      r={9.017}
      transform="scale(-1 1) rotate(30 -742.794 -1119.203)"
      fill="#F8AE9D"
    />
    <circle
      cx={265.604}
      cy={214.563}
      r={7.996}
      transform="rotate(-180 265.604 214.563)"
      fill="#E1E4E5"
    />
    <circle
      cx={734.163}
      cy={404.316}
      r={11.593}
      transform="rotate(-30 734.163 404.316)"
      fill="#E1E4E5"
    />
    <circle
      r={14.927}
      transform="matrix(1 0 0 -1 175.634 424.15)"
      fill="#E1E4E5"
    />
    <circle
      r={10.306}
      transform="scale(-1 1) rotate(30 -410.276 -890.017)"
      fill="#E1E4E5"
    />
    <circle cx={325.967} cy={140.056} r={7.463} fill="#6f381e" />
    <circle
      cx={638.448}
      cy={461.553}
      r={22.698}
      transform="rotate(-150 638.448 461.553)"
      fill="#6f381e"
    />
    <circle
      cx={213.835}
      cy={309.261}
      r={10.209}
      transform="rotate(-150 213.835 309.261)"
      fill="#F8AE9D"
    />
    <ellipse
      rx={9.063}
      ry={7.996}
      transform="matrix(-1 0 0 1 288.117 420.385)"
      fill="#E1E4E5"
    />
    <circle
      r={5.994}
      transform="scale(1 -1) rotate(-30 -215.174 -1438.182)"
      fill="#E1E4E5"
    />
    <ellipse cx={195.768} cy={209.266} rx={17.059} ry={16.526} fill="#E1E4E5" />
    <circle
      cx={620.32}
      cy={361.908}
      r={14.11}
      transform="rotate(-150 620.32 361.908)"
      fill="#E1E4E5"
    />
    <path
      d="M573.439 418.687c-1.062 60.401-50.12 109.016-110.471 109.016-60.341 0-109.399-48.615-110.461-109.016h220.932z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M350.527 533.034c.957-5.586 5.856-9.86 11.782-9.86h201.349c5.907 0 10.806 4.266 11.762 9.86H350.527z"
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path d="M577.589 416.687H346.225v20.257h231.364v-20.257z" fill="#E1E4E5" />
    <defs>
      <linearGradient
        id="a"
        x1={410.715}
        y1={-123.821}
        x2={548.204}
        y2={900.738}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={651.497}
        y1={239.697}
        x2={621.604}
        y2={674.767}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={229.578}
        y1={52.607}
        x2={254.871}
        y2={570.091}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg25);
const Memo = memo(ForwardRef);
export default Memo;