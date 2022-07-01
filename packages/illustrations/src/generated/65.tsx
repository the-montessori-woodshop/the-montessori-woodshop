import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg65 = (
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
      d="M675.892 158.967C655.03 90.875 474.717 2.992 332.262 112.242c-66.253 50.814-45.688 87.28-83.835 159.271-22.739 42.908-63.016 83.82-60.325 133.082 2.314 42.523 24.564 80.981 54.663 100.264 67.693 43.367 174.944 50.728 231.014-77.279 56.069-128.007 255.898-92.994 202.113-268.613z"
      fill="url(#a)"
    />
    <path
      d="M743.758 318.289c-20.361-20.892-51.434-16.187-98.513 1.435-35.405 13.26-67.822 24.865-98.863 54.424-21.729 20.68-36.844 44.832-46.662 66.986-10.642 24.002-26.841 52.48-9.946 71.935 23.214 26.722 116.77 29.398 189.538-35.471 79.932-71.274 84.359-138.893 64.446-159.309z"
      fill="url(#b)"
    />
    <path
      d="M256.29 184.548c-20.062 53.492-40.141 110.014-76.871 145.044-37.882 36.145-50.072 23.39-59.511.45-9.44-22.941-10.834-82.914 41.149-131.179 51.996-48.278 114.001-64.377 95.233-14.315z"
      fill="url(#c)"
    />
    <path
      d="M683.249 476.015H214.736c-13.795 0-24.983-11.187-24.983-24.983V157.478c0-13.796 11.188-24.983 24.983-24.983h468.513c13.795 0 24.983 11.187 24.983 24.983v293.554c0 13.796-11.188 24.983-24.983 24.983z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M708.232 165.289H189.753v-7.811c0-13.796 11.188-24.983 24.983-24.983h468.513c13.795 0 24.983 11.187 24.983 24.983v7.811z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M214.787 155.87a5.795 5.795 0 1 0-.002-11.59 5.795 5.795 0 0 0 .002 11.59zm24.144 0a5.796 5.796 0 1 0-.001-11.591 5.796 5.796 0 0 0 .001 11.591zm23.179 0a5.796 5.796 0 1 0-.001-11.591 5.796 5.796 0 0 0 .001 11.591zm-44.248 41.989 11.463 4.043v5.631l-17.316-7.341v-4.746l17.316-7.341v5.631l-11.463 4.123zm18.08 14.943h-4.324l10.78-31.796h4.324l-10.78 31.796zm25.441-15.003-11.685-4.083v-5.591l17.517 7.341v4.726l-17.517 7.361v-5.611l11.685-4.143z"
      fill="#E1E4E5"
    />
    <rect
      x={281.425}
      y={192.569}
      width={137.141}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={281.425}
      y={276.592}
      width={137.141}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={137.141}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 646.49 360.615)"
      fill="#E1E4E5"
    />
    <rect
      width={137.141}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 646.49 220.577)"
      fill="#E1E4E5"
    />
    <rect
      width={137.141}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 646.49 304.6)"
      fill="#E1E4E5"
    />
    <rect
      x={281.425}
      y={388.623}
      width={137.141}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={137.141}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 646.49 248.585)"
      fill="#E1E4E5"
    />
    <rect
      width={137.141}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 646.49 332.607)"
      fill="#E1E4E5"
    />
    <rect
      x={281.425}
      y={416.63}
      width={137.141}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={435.95}
      y={192.569}
      width={55.05}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={435.95}
      y={276.592}
      width={55.05}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={55.05}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 491.965 360.615)"
      fill="#E1E4E5"
    />
    <rect
      width={55.05}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 491.965 220.577)"
      fill="#E1E4E5"
    />
    <rect
      width={55.05}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 491.965 304.6)"
      fill="#E1E4E5"
    />
    <rect
      x={435.95}
      y={388.623}
      width={55.05}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={144.867}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 491.965 248.585)"
      fill="#E1E4E5"
    />
    <rect
      width={144.867}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 491.965 332.607)"
      fill="#E1E4E5"
    />
    <rect
      x={435.95}
      y={416.63}
      width={144.867}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={508.384}
      y={192.569}
      width={72.433}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={508.384}
      y={276.592}
      width={72.433}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={72.433}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 419.532 360.615)"
      fill="#E1E4E5"
    />
    <rect
      width={72.433}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 419.532 220.577)"
      fill="#E1E4E5"
    />
    <rect
      width={72.433}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 419.532 304.6)"
      fill="#E1E4E5"
    />
    <rect
      x={508.384}
      y={388.623}
      width={72.433}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={598.201}
      y={192.569}
      width={48.289}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      x={598.201}
      y={276.592}
      width={48.289}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={48.289}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 329.714 360.615)"
      fill="#E1E4E5"
    />
    <rect
      width={48.289}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 329.714 220.577)"
      fill="#E1E4E5"
    />
    <rect
      width={48.289}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 329.714 304.6)"
      fill="#E1E4E5"
    />
    <rect
      x={598.201}
      y={388.623}
      width={48.289}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <rect
      width={48.289}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 329.714 248.585)"
      fill="#E1E4E5"
    />
    <rect
      width={48.289}
      height={9.658}
      rx={4.829}
      transform="matrix(-1 0 0 1 329.714 332.607)"
      fill="#E1E4E5"
    />
    <rect
      x={598.201}
      y={416.63}
      width={48.289}
      height={9.658}
      rx={4.829}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M665.648 506.983 633.59 404.606c-3.381-10.8 7.68-20.478 17.942-15.693l95.606 44.619c11.33 5.285 9.424 21.951-2.812 24.533l-39.36 8.326-14.602 41.051c-4.205 11.787-20.971 11.462-24.716-.459zm-416.686-205.94c0 34.33-25.803 66.431-60.481 74.225C153.803 367.474 128 335.373 128 301.043v-26.967a15.114 15.114 0 0 1 9.397-13.994l37.801-15.468a35.059 35.059 0 0 1 26.566 0l37.801 15.468a15.122 15.122 0 0 1 9.397 13.994v26.967z"
      fill="#6f381e"
    />
    <path
      d="m209 296-23.125 23L172 305.2"
      stroke="#fff"
      strokeWidth={13.957}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={18.911}
      transform="scale(-1 1) rotate(30 -659.133 -1237.052)"
      fill="#6f381e"
    />
    <circle
      r={8.505}
      transform="scale(-1 1) rotate(30 -746.39 -1161.241)"
      fill="#E1E4E5"
    />
    <circle
      cx={747}
      cy={329}
      transform="rotate(180 747 329)"
      fill="#6f381e"
      r={19}
    />
    <circle
      r={5.654}
      transform="scale(1 -1) rotate(-30 -215.164 -1427.189)"
      fill="#E1E4E5"
    />
    <circle
      cx={230.5}
      cy={388.5}
      r={4.5}
      transform="rotate(-180 230.5 388.5)"
      fill="#E1E4E5"
    />
    <circle r={11.5} transform="matrix(1 0 0 -1 176.5 482.5)" fill="#E1E4E5" />
    <circle r={7.5} transform="matrix(-1 0 0 1 230.5 433.5)" fill="#E1E4E5" />
    <ellipse cx={149} cy={212.5} rx={14} ry={13.5} fill="#E1E4E5" />
    <defs>
      <linearGradient
        id="a"
        x1={373.118}
        y1={-184.004}
        x2={532.954}
        y2={1007.09}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={608.273}
        y1={183.829}
        x2={633.325}
        y2={768.432}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={180.968}
        y1={46.773}
        x2={206.144}
        y2={561.877}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg65);
const Memo = memo(ForwardRef);
export default Memo;
