import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg96 = (
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
      d="M678.451 490.242H184.698c-14.598 0-26.436-11.838-26.436-26.437V154.437c0-14.598 11.838-26.437 26.436-26.437h493.753c14.598 0 26.436 11.839 26.436 26.437v309.368c0 14.599-11.838 26.437-26.436 26.437z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M201.262 281.5h459m-333-59h333m-459 88.5h270m-144-59h196m-322 89h459m-459 30h270m-270 30h459m-459 29.5h270m-270 29.5h459"
      stroke="#E1E4E5"
      strokeWidth={5.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M704.887 154.437a8.338 8.338 0 0 1-8.339 8.339H166.601a8.338 8.338 0 0 1-8.339-8.339c0-14.598 11.838-26.437 26.436-26.437h493.753c14.598 0 26.436 11.839 26.436 26.437z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M184.751 152.742a6.107 6.107 0 1 0 0-12.213 6.107 6.107 0 0 0 0 12.213zm25.446 0a6.107 6.107 0 1 0 0-12.215 6.107 6.107 0 0 0 0 12.215zm24.427 0a6.107 6.107 0 1 0 0-12.213 6.107 6.107 0 0 0 0 12.213z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M503.068 350.851c-43.891-15.975-66.523-64.502-50.55-108.388 15.974-43.886 64.503-66.513 108.394-50.538 43.891 15.975 66.523 64.502 50.55 108.389-15.973 43.886-64.503 66.512-108.394 50.537z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M509.958 331.483c-33.282-12.113-50.443-48.911-38.331-82.189 12.112-33.278 48.911-50.435 82.193-38.321 33.282 12.113 50.443 48.91 38.331 82.188-12.112 33.279-48.911 50.436-82.193 38.322z"
      fill="#fff"
    />
    <path
      d="M544.818 350.569c-2.248-6.918 1.538-14.349 8.456-16.597 6.918-2.247 14.349 1.539 16.597 8.457l10.28 31.641-25.053 8.14-10.28-31.641z"
      fill="#E1E4E5"
    />
    <rect
      x={545.062}
      y={375.996}
      width={40.206}
      height={137.897}
      rx={6}
      transform="rotate(-18 545.062 375.996)"
      fill="#2D2019"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m713.7 468.44-9.317-14.608a114.405 114.405 0 0 0-46.801-41.543l-38.21-18.407a45.503 45.503 0 0 0-19.746-4.508h-8.109l3.082 10.227-43.42-10.605c-5.052-1.234-10.025 2.293-10.531 7.469a8.545 8.545 0 0 0 3.579 7.814l12.003 8.465c-7.52 3.623-8.563 13.91-1.923 18.969l6.099 4.647c-5.79 3.579-6.125 11.877-.643 15.912l8.849 6.512a12.701 12.701 0 0 0 6.981 13.922l9.46 4.523c1.402.67 2.86 1.214 4.357 1.626l43.751 12.029 48.825 32.733L713.7 468.44z"
      fill="#F8AE9D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m794.588 531.314-105.833-101.34-72.859 73.458 29.234 27.882h149.458z"
      fill="#6f381e"
    />
    <circle
      cx={638.262}
      cy={189}
      r={5}
      transform="rotate(-180 638.262 189)"
      fill="#E1E4E5"
    />
    <circle
      cx={331.762}
      cy={196.5}
      r={4.5}
      transform="rotate(-180 331.762 196.5)"
      fill="#E1E4E5"
    />
    <path
      d="M257.4 194.76h-56.138M229.525 261v-66.24m44.16 66.24v-38.64m16.56 0h-33.12"
      stroke="#E1E4E5"
      strokeWidth={8.28}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M753.035 242.5c-6.875 7.73-20.493 6.849-20.493 6.849s-2.462-13.414 4.419-21.139c6.875-7.73 20.486-6.853 20.486-6.853s2.463 13.414-4.412 21.143z"
      fill="url(#a)"
    />
    <path
      d="M744.023 455.864c7.517 5.178 19.002 1.558 19.002 1.558s-.711-12.013-8.234-17.186c-7.517-5.178-18.997-1.564-18.997-1.564s.711 12.014 8.229 17.192z"
      fill="url(#b)"
    />
    <path
      d="M124.618 503.19c7.955 8.097 22.831 6.39 22.831 6.39s1.968-14.835-5.994-22.927c-7.955-8.096-22.824-6.394-22.824-6.394s-1.968 14.835 5.987 22.931z"
      fill="url(#c)"
    />
    <circle
      cx={741.262}
      cy={373}
      r={9}
      transform="rotate(180 741.262 373)"
      fill="#6f381e"
    />
    <circle
      cx={418.762}
      cy={515.5}
      r={12.5}
      transform="rotate(180 418.762 515.5)"
      fill="#6f381e"
    />
    <circle r={10} transform="matrix(-1 0 0 1 120.262 233)" fill="#6f381e" />
    <circle
      r={15.86}
      transform="matrix(-1 0 0 1 525.581 127.627)"
      fill="#6f381e"
    />
    <circle r={9.5} transform="matrix(-1 0 0 1 694.762 469.5)" fill="#fff" />
    <circle
      r={15.003}
      transform="matrix(-1 0 0 1 120.003 390.256)"
      fill="#fff"
    />
    <circle r={7} transform="matrix(-1 0 0 1 693.262 114)" fill="#E1E4E5" />
    <circle
      r={9.818}
      transform="matrix(-1 0 0 1 307.528 147.132)"
      fill="#E1E4E5"
    />
    <circle
      r={14.293}
      transform="scale(1 -1) rotate(-75 161.229 -316.036)"
      fill="#E1E4E5"
    />
    <path
      d="M765.691 307h.138c.818 11.889 9.433 12.072 9.433 12.072s-9.5.19-9.5 13.928c0-13.738-9.5-13.928-9.5-13.928s8.611-.183 9.429-12.072zM134.683 124h.153c.904 13.261 10.426 13.465 10.426 13.465s-10.5.212-10.5 15.535c0-15.323-10.5-15.535-10.5-15.535s9.518-.204 10.421-13.465z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={725.396}
        y1={269.11}
        x2={773.666}
        y2={184.448}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={773.307}
        y1={472.854}
        x2={714.13}
        y2={410.454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={156.357}
        y1={530.847}
        x2={98.846}
        y2={440.693}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg96);
const Memo = memo(ForwardRef);
export default Memo;
