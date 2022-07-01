import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg400 = (
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
      d="M687.978 350.595c-24.306 12.057-56.566-3.446-56.566-3.446s7.17-35.045 31.489-47.085c24.306-12.057 56.553 3.429 56.553 3.429s-7.17 35.045-31.476 47.102z"
      fill="url(#a)"
    />
    <path
      d="M128.858 486.311c31.759 19.034 77.322 1.438 77.322 1.438s-5.957-48.448-37.735-67.461c-31.758-19.034-77.302-1.46-77.302-1.46s5.957 48.449 37.715 67.483z"
      fill="url(#b)"
    />
    <circle
      cx={345.738}
      cy={178.521}
      r={13.271}
      transform="rotate(180 345.738 178.521)"
      fill="#6f381e"
    />
    <circle
      cx={268.385}
      cy={265.082}
      r={14.931}
      transform="rotate(180 268.385 265.082)"
      fill="#6f381e"
    />
    <circle
      r={5.806}
      transform="matrix(-1 0 0 1 654.428 242.024)"
      fill="#6f381e"
    />
    <circle
      r={7.465}
      transform="matrix(-1 0 0 1 577.392 497.684)"
      fill="#E1E4E5"
    />
    <circle
      r={10.783}
      transform="matrix(-1 0 0 1 166.134 423.593)"
      fill="#E1E4E5"
    />
    <circle
      r={8.207}
      transform="matrix(-1 0 0 1 337.246 303.027)"
      fill="#E1E4E5"
    />
    <circle
      r={9.124}
      transform="matrix(-1 0 0 1 780.653 142.663)"
      fill="#E1E4E5"
    />
    <circle
      r={8.193}
      transform="scale(1 -1) rotate(-75 11.216 -333.866)"
      fill="#E1E4E5"
    />
    <circle r={10.9} transform="matrix(-1 0 0 1 421.18 84.9)" fill="#E1E4E5" />
    <ellipse
      rx={8.385}
      ry={6.708}
      transform="matrix(-1 0 0 1 746.5 357.841)"
      fill="#E1E4E5"
    />
    <circle
      r={17.052}
      transform="scale(1 -1) rotate(-75 146.31 -471.556)"
      fill="#E1E4E5"
    />
    <path
      d="M810.084 311.516h.22c1.299 18.403 14.985 18.686 14.985 18.686s-15.092.295-15.092 21.56c0-21.265-15.092-21.56-15.092-21.56s13.68-.283 14.979-18.686zm-487.397 167.33h.195c1.152 16.656 13.297 16.913 13.297 16.913s-13.392.266-13.392 19.512c0-19.246-13.392-19.512-13.392-19.512s12.14-.257 13.292-16.913z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M238.175 224.518H124.221C84.887 224.518 53 256.405 53 295.739v113.954c0 39.334 31.887 71.221 71.221 71.221h113.954c39.334 0 71.221-31.887 71.221-71.221V295.739c0-39.334-31.887-71.221-71.221-71.221z"
      fill="#6f381e"
    />
    <circle
      cx={138.465}
      cy={352.712}
      r={35.611}
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M174.074 352.712h78.343v32.049"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M661.825 224.518h113.954c39.334 0 71.221 31.887 71.221 71.221v113.954c0 39.334-31.887 71.221-71.221 71.221H661.825c-39.334 0-71.221-31.887-71.221-71.221V295.739c0-39.334 31.887-71.221 71.221-71.221z"
      fill="#6f381e"
    />
    <circle
      r={35.611}
      transform="matrix(-1 0 0 1 761.535 352.712)"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M725.926 352.712h-78.343v32.049"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path fill="#6f381e" d="M367.995 328.782h174.67v132.111h-174.67z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M455.773 332.402c-21.872 0-41.356.797-57.274 1.809-15.099.96-26.709 12.48-27.793 27.472-.771 10.665-1.307 21.903-1.307 32.415 0 10.513.536 21.75 1.307 32.416 1.084 14.992 12.694 26.512 27.793 27.472a907.346 907.346 0 0 0 57.274 1.808c21.872 0 41.355-.796 57.274-1.808 15.099-.96 26.709-12.48 27.792-27.473.771-10.665 1.308-21.902 1.308-32.415 0-10.512-.537-21.75-1.308-32.415-1.083-14.992-12.693-26.512-27.792-27.472a907.294 907.294 0 0 0-57.274-1.809zm-58.839-22.82c-27.366 1.74-48.865 22.973-50.842 50.322-.798 11.039-1.372 22.903-1.372 34.194 0 11.291.574 23.156 1.372 34.195 1.977 27.349 23.476 48.582 50.842 50.321a931.453 931.453 0 0 0 58.839 1.859c22.464 0 42.474-.818 58.839-1.859 27.365-1.739 48.865-22.972 50.842-50.321.797-11.039 1.371-22.904 1.371-34.195s-.574-23.155-1.371-34.194c-1.977-27.349-23.477-48.582-50.842-50.322a932.285 932.285 0 0 0-117.678 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M468.112 403.136c7.376-4.267 12.339-12.243 12.339-21.377 0-13.63-11.049-24.678-24.678-24.678-13.63 0-24.679 11.048-24.679 24.678 0 9.134 4.963 17.11 12.339 21.377v15.64c0 6.815 5.525 12.34 12.34 12.34 6.814 0 12.339-5.525 12.339-12.34v-15.64z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M394.077 270.706c0-34.074 27.622-61.696 61.696-61.696 34.073 0 61.695 27.622 61.695 61.696v49.357c0 6.815-5.524 12.339-12.339 12.339-6.814 0-12.339-5.524-12.339-12.339v-49.357c0-20.444-16.573-37.017-37.017-37.017-20.445 0-37.018 16.573-37.018 37.017v49.357c0 6.815-5.524 12.339-12.339 12.339s-12.339-5.524-12.339-12.339v-49.357z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M292.886 171.82H286.7a2.703 2.703 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.186a2.71 2.71 0 0 1 2.699 2.7v6.185c.013 1.483-1.204 2.7-2.699 2.7zm-21.522.486h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.71 2.71 0 0 1-2.7 2.7zm-21.382-.486h-6.186a2.71 2.71 0 0 1-2.699-2.7v-6.185c0-1.496 1.216-2.7 2.699-2.7h6.186a2.71 2.71 0 0 1 2.7 2.7v6.185c.012 1.483-1.205 2.7-2.7 2.7zm-21.447 0h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.713 2.713 0 0 1 2.713 2.7v6.185c-.013 1.483-1.23 2.7-2.713 2.7zm-21.446 0h-6.185a2.712 2.712 0 0 1-2.712-2.7v-6.185c0-1.496 1.216-2.7 2.712-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.71 2.71 0 0 1-2.7 2.7zm63.565-23.384h-6.185a2.71 2.71 0 0 1-2.7-2.699v-6.198a2.71 2.71 0 0 1 2.7-2.7h6.185c1.496 0 2.7 1.217 2.7 2.7v6.185a2.696 2.696 0 0 1-2.7 2.712zm-21.446 0h-6.185a2.71 2.71 0 0 1-2.7-2.699v-6.198a2.71 2.71 0 0 1 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.696 2.696 0 0 1-2.7 2.712zm-21.445 0h-6.186a2.712 2.712 0 0 1-2.712-2.699v-6.198c0-1.483 1.217-2.7 2.712-2.7h6.186a2.71 2.71 0 0 1 2.7 2.7v6.185a2.712 2.712 0 0 1-2.7 2.712zm22.219 48.508h-6.186a2.71 2.71 0 0 1-2.699-2.7v-6.185c0-1.496 1.216-2.7 2.699-2.7h6.186a2.71 2.71 0 0 1 2.7 2.7v6.185c.012 1.483-1.205 2.7-2.7 2.7zm21.058 0h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185c.013 1.483-1.204 2.7-2.7 2.7zm-42.505 0h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.713 2.713 0 0 1 2.713 2.7v6.185c-.013 1.483-1.23 2.7-2.713 2.7zm470.789-42.898h-6.185a2.702 2.702 0 0 1-2.7-2.699v-6.186c0-1.495 1.217-2.7 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.186c.012 1.482-1.204 2.699-2.7 2.699zm-21.522.486h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.71 2.71 0 0 1-2.7 2.7zm-21.382-.486h-6.186a2.71 2.71 0 0 1-2.699-2.699v-6.186c0-1.495 1.216-2.7 2.699-2.7h6.186a2.71 2.71 0 0 1 2.7 2.7v6.186c.012 1.482-1.205 2.699-2.7 2.699zm-21.446 0h-6.185a2.71 2.71 0 0 1-2.7-2.699v-6.186c0-1.495 1.217-2.7 2.7-2.7h6.185a2.712 2.712 0 0 1 2.712 2.7v6.186a2.728 2.728 0 0 1-2.712 2.699zm-21.446 0h-6.186a2.713 2.713 0 0 1-2.712-2.699v-6.186c0-1.495 1.217-2.7 2.712-2.7h6.186a2.71 2.71 0 0 1 2.699 2.7v6.186a2.71 2.71 0 0 1-2.699 2.699zm63.564-23.384h-6.186a2.709 2.709 0 0 1-2.699-2.699v-6.198a2.71 2.71 0 0 1 2.699-2.7h6.186a2.702 2.702 0 0 1 2.699 2.7v6.185a2.696 2.696 0 0 1-2.699 2.712zm-21.446 0h-6.185a2.71 2.71 0 0 1-2.7-2.699v-6.198a2.71 2.71 0 0 1 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.696 2.696 0 0 1-2.7 2.712zm-21.446 0h-6.185a2.712 2.712 0 0 1-2.712-2.699v-6.198c0-1.483 1.217-2.7 2.712-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185a2.712 2.712 0 0 1-2.7 2.712zm22.22 48.508h-6.186a2.71 2.71 0 0 1-2.699-2.7v-6.185c0-1.496 1.216-2.7 2.699-2.7h6.186a2.71 2.71 0 0 1 2.7 2.7v6.185c.012 1.483-1.205 2.7-2.7 2.7zm21.058 0h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.71 2.71 0 0 1 2.7 2.7v6.185c.013 1.483-1.204 2.7-2.7 2.7zm-42.504 0h-6.185a2.71 2.71 0 0 1-2.7-2.7v-6.185c0-1.496 1.217-2.7 2.7-2.7h6.185a2.712 2.712 0 0 1 2.712 2.7v6.185c-.012 1.483-1.229 2.7-2.712 2.7z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={594.641}
        y1={388.204}
        x2={795.117}
        y2={229.627}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={251.755}
        y1={547.581}
        x2={-3.784}
        y2={310.151}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg400);
const Memo = memo(ForwardRef);
export default Memo;
