import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg410 = (
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
      clipRule="evenodd"
      d="M641.667 515.501H272.334c-25.507 0-46.167-20.659-46.167-46.167V146.168c0-25.507 20.66-46.167 46.167-46.167h369.333c25.507 0 46.167 20.66 46.167 46.167v323.166c0 25.508-20.66 46.167-46.167 46.167z"
      stroke="#E1E4E5"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M226.166 215.418h461.667m-323.167 0 23.083-115.417m138.5 115.417 23.083-115.417"
      stroke="#E1E4E5"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M728.669 262.751h-97.621c-21.476 0-39.048 17.572-39.048 39.048v97.621c0 21.476 17.572 39.048 39.048 39.048h97.621c21.476 0 39.048-17.572 39.048-39.048v-97.621c0-21.476-17.572-39.048-39.048-39.048z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={18.224}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m666.193 321.327 31.239 29.287-31.239 29.286"
      stroke="#fff"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={391.619}
      cy={387.926}
      r={8.175}
      transform="rotate(90 391.619 387.926)"
      fill="#E1E4E5"
    />
    <circle
      cx={391.62}
      cy={420.627}
      r={8.175}
      transform="rotate(90 391.62 420.627)"
      fill="#E1E4E5"
    />
    <circle
      cx={391.62}
      cy={453.327}
      r={8.175}
      transform="rotate(90 391.62 453.327)"
      fill="#E1E4E5"
    />
    <circle
      cx={364.759}
      cy={387.926}
      r={8.175}
      transform="rotate(90 364.759 387.926)"
      fill="#E1E4E5"
    />
    <circle
      cx={364.759}
      cy={420.627}
      r={8.175}
      transform="rotate(90 364.759 420.627)"
      fill="#E1E4E5"
    />
    <circle
      cx={364.759}
      cy={453.327}
      r={8.175}
      transform="rotate(90 364.759 453.327)"
      fill="#E1E4E5"
    />
    <circle
      cx={337.898}
      cy={387.926}
      r={8.175}
      transform="rotate(90 337.898 387.926)"
      fill="#E1E4E5"
    />
    <circle
      cx={337.898}
      cy={420.627}
      r={8.175}
      transform="rotate(90 337.898 420.627)"
      fill="#E1E4E5"
    />
    <circle
      cx={337.898}
      cy={453.327}
      r={8.175}
      transform="rotate(90 337.898 453.327)"
      fill="#E1E4E5"
    />
    <circle
      cx={311.036}
      cy={387.926}
      r={8.175}
      transform="rotate(90 311.036 387.926)"
      fill="#E1E4E5"
    />
    <circle
      cx={311.037}
      cy={420.627}
      r={8.175}
      transform="rotate(90 311.037 420.627)"
      fill="#E1E4E5"
    />
    <circle
      cx={311.037}
      cy={453.327}
      r={8.175}
      transform="rotate(90 311.037 453.327)"
      fill="#E1E4E5"
    />
    <circle
      cx={284.174}
      cy={387.926}
      r={8.175}
      transform="rotate(90 284.174 387.926)"
      fill="#E1E4E5"
    />
    <circle
      cx={284.175}
      cy={420.627}
      r={8.175}
      transform="rotate(90 284.175 420.627)"
      fill="#E1E4E5"
    />
    <circle
      cx={284.175}
      cy={453.327}
      r={8.175}
      transform="rotate(90 284.175 453.327)"
      fill="#E1E4E5"
    />
    <circle
      r={73.5}
      transform="matrix(-1 0 0 1 229.5 234.251)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M254.846 259.966v3.617a3.62 3.62 0 0 1-3.621 3.616h-43.448a3.62 3.62 0 0 1-3.621-3.616v-3.675c0-10.943 12.521-18.054 25.345-18.054 12.825 0 25.345 7.114 25.345 18.054m-16.385-49.825c4.949 4.949 4.949 12.973 0 17.921-4.949 4.949-12.972 4.949-17.921 0-4.949-4.948-4.949-12.972 0-17.921s12.972-4.949 17.921 0z"
      fill="#fff"
    />
    <path
      d="M499.592 378.37c-6.012-1.316-8.634-7.405-10.729-17.8-1.575-7.819-3.112-14.918-1.281-23.772 1.28-6.198 3.919-11.598 6.791-15.827 3.111-4.582 6.404-10.659 11.772-9.803 7.374 1.177 18.287 17.631 14.786 37.895-3.848 22.262-15.462 30.596-21.339 29.307z"
      fill="url(#a)"
    />
    <path
      d="M542.301 476.033c-19.005 9.428-44.23-2.694-44.23-2.694s5.606-27.403 24.622-36.817c19.005-9.428 44.22 2.681 44.22 2.681s-5.606 27.402-24.612 36.83z"
      fill="url(#b)"
    />
    <path
      d="M140.919 409.567c21.254 12.739 51.747.963 51.747.963s-3.987-32.424-25.254-45.148c-21.254-12.738-51.734-.977-51.734-.977s3.987 32.424 25.241 45.162z"
      fill="url(#c)"
    />
    <circle
      cx={782.781}
      cy={166.566}
      r={14.065}
      transform="rotate(180 782.781 166.566)"
      fill="#6f381e"
    />
    <circle
      cx={425.823}
      cy={327.574}
      r={15.823}
      transform="rotate(180 425.823 327.574)"
      fill="#6f381e"
    />
    <circle
      r={13.185}
      transform="matrix(-1 0 0 1 166.186 147.937)"
      fill="#6f381e"
    />
    <circle
      r={6.153}
      transform="matrix(-1 0 0 1 566.153 268.904)"
      fill="#6f381e"
    />
    <circle
      r={7.911}
      transform="matrix(-1 0 0 1 538.19 515.928)"
      fill="#E1E4E5"
    />
    <circle
      r={11.427}
      transform="matrix(-1 0 0 1 167.472 457.943)"
      fill="#E1E4E5"
    />
    <circle
      r={8.697}
      transform="matrix(-1 0 0 1 280.108 112.865)"
      fill="#E1E4E5"
    />
    <circle
      r={9.669}
      transform="matrix(-1 0 0 1 389.095 385.381)"
      fill="#E1E4E5"
    />
    <circle
      r={8.683}
      transform="scale(1 -1) rotate(-75 -131.963 -229.254)"
      fill="#E1E4E5"
    />
    <circle
      r={11.551}
      transform="matrix(-1 0 0 1 414.146 92.998)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.886}
      ry={7.108}
      transform="matrix(-1 0 0 1 610.886 408.86)"
      fill="#fff"
    />
    <circle
      r={18.071}
      transform="scale(1 -1) rotate(-75 266.744 -427.408)"
      fill="#E1E4E5"
    />
    <path
      d="M727.875 461.751h.232c1.377 19.503 15.881 19.803 15.881 19.803s-15.994.313-15.994 22.848c0-22.535-15.994-22.848-15.994-22.848s14.499-.3 15.875-19.803zm-534.789 62h.206c1.222 17.652 14.092 17.923 14.092 17.923s-14.192.283-14.192 20.679c0-20.396-14.192-20.679-14.192-20.679s12.865-.271 14.086-17.923z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={460.405}
        y1={369.105}
        x2={567.881}
        y2={308.394}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={469.318}
        y1={505.441}
        x2={626.076}
        y2={381.445}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={223.167}
        y1={450.571}
        x2={52.149}
        y2={291.674}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg410);
const Memo = memo(ForwardRef);
export default Memo;
