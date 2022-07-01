import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg213 = (
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
    <circle cx={483.097} cy={300.368} r={243.798} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M447.437 144.9 368.74 99.418a45.431 45.431 0 0 0-34.477-4.557L176.886 137.03c-24.247 6.497-38.619 31.416-32.116 55.685l82.388 307.477c6.503 24.269 31.409 38.663 55.656 32.166l219.433-58.796c24.247-6.497 38.619-31.416 32.116-55.685L468.617 172.51a45.51 45.51 0 0 0-21.18-27.61z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={3.68}
    />
    <rect
      x={265.589}
      y={404.245}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 265.589 404.245)"
      fill="#E1E4E5"
    />
    <rect
      x={253.777}
      y={360.16}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 253.777 360.16)"
      fill="#E1E4E5"
    />
    <rect
      x={241.936}
      y={315.968}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 241.936 315.968)"
      fill="#E1E4E5"
    />
    <rect
      x={230.094}
      y={271.776}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 230.094 271.776)"
      fill="#E1E4E5"
    />
    <rect
      x={218.254}
      y={227.583}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 218.254 227.583)"
      fill="#E1E4E5"
    />
    <rect
      x={277.489}
      y={448.653}
      width={195.396}
      height={22.988}
      rx={11.494}
      transform="rotate(-15 277.489 448.653)"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m699.52 162.49-64.245-64.301a45.429 45.429 0 0 0-32.122-13.324H440.225c-25.103 0-45.435 20.349-45.435 45.474v318.324c0 25.125 20.332 45.475 45.435 45.475h227.173c25.102 0 45.434-20.35 45.434-45.475V194.641a45.51 45.51 0 0 0-13.312-32.151z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={3.68}
    />
    <rect
      x={456.745}
      y={365.932}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <rect
      x={456.745}
      y={320.292}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <rect
      x={456.745}
      y={274.541}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <rect
      x={456.745}
      y={228.79}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <rect
      x={456.745}
      y={183.039}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <rect
      x={456.745}
      y={411.907}
      width={195.396}
      height={22.988}
      rx={11.494}
      fill="#E1E4E5"
    />
    <path
      d="m766.279 536.355-66.748-70.12"
      stroke="#6f381e"
      strokeWidth={25.954}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={643.686}
      cy={396.504}
      r={122.328}
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={23.807}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={493.493}
        y1={817.542}
        x2={478.459}
        y2={-473.852}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg213);
const Memo = memo(ForwardRef);
export default Memo;
