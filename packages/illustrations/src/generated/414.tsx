import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg414 = (
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
      d="M216.64 196.728c32.516 16.13 75.673-4.61 75.673-4.61s-9.591-46.882-42.125-62.989c-32.516-16.13-75.656 4.587-75.656 4.587s9.592 46.882 42.108 63.012z"
      fill="url(#a)"
    />
    <path
      d="M772.06 341.159c-17.666 10.588-43.012.8-43.012.8s3.314-26.951 20.991-37.527c17.667-10.588 43.002-.812 43.002-.812s-3.314 26.951-20.981 37.539z"
      fill="url(#b)"
    />
    <circle cx={221.987} cy={485.58} r={9.987} fill="#E1E4E5" />
    <circle cx={724.426} cy={475.426} r={14.425} fill="#E1E4E5" />
    <circle cx={353.979} cy={458.572} r={10.979} fill="#E1E4E5" />
    <circle cx={123.697} cy={118.045} r={12.206} fill="#E1E4E5" />
    <circle
      cx={803.039}
      cy={195.135}
      r={10.961}
      transform="rotate(90 803.039 195.135)"
      fill="#E1E4E5"
    />
    <circle cx={481.72} cy={89.582} r={14.582} fill="#E1E4E5" />
    <ellipse cx={102.192} cy={348.118} rx={11.217} ry={8.973} fill="#E1E4E5" />
    <path
      d="M680.537 130.077h-.159c-.947 13.406-10.917 13.613-10.917 13.613s10.995.214 10.995 15.705c0-15.491 10.994-15.705 10.994-15.705s-9.966-.207-10.913-13.613z"
      fill="#E1E4E5"
    />
    <path
      d="M378.421 316.631v30.082c0 55.739 31.85 79.627 79.626 79.627H617.3c47.776 0 79.627-23.888 79.627-79.627v-95.552c0-55.738-31.851-79.626-79.627-79.626h-47.776c2.301 6.724 3.539 14.156 3.539 22.118v69.01c0 17.164-5.662 31.674-15.748 41.76-10.086 10.086-24.596 15.748-41.76 15.748v24.596c0 9.025-10.263 14.508-17.872 9.554l-51.137-34.15h-46.007c-7.962 0-15.394-1.24-22.118-3.54z"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M343.031 193.653v69.01c0 26.365 13.448 46.182 35.39 53.968 6.724 2.3 14.155 3.54 22.118 3.54h46.006l51.138 34.15c7.609 4.954 17.872-.529 17.872-9.554v-24.596c17.164 0 31.674-5.662 41.76-15.748 10.086-10.086 15.748-24.596 15.748-41.76v-69.01c0-7.962-1.239-15.394-3.539-22.118-7.786-21.942-27.604-35.39-53.969-35.39H400.539c-34.505 0-57.508 23.003-57.508 57.508z"
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M601.376 490.041H473.974m63.7-63.701v63.701"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M405.043 229.043h-.16m49.701 0h-.159m49.71 0h-.159"
      stroke="#fff"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M303.032 304.144v69.01c0 26.365-13.448 46.182-35.39 53.968-6.724 2.3-14.155 3.54-22.118 3.54h-46.006l-51.138 34.15c-7.609 4.954-17.872-.529-17.872-9.554v-24.596c-17.164 0-31.674-5.662-41.76-15.748C78.662 404.828 73 390.318 73 373.154v-69.01c0-7.962 1.239-15.394 3.539-22.118 7.786-21.942 27.604-35.39 53.969-35.39h115.016c34.505 0 57.508 23.003 57.508 57.508z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={32}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M241.021 339.534h.159m-49.701 0h.159m-49.71 0h.159"
      stroke="#fff"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={88.485}
      transform="matrix(-1 0 0 1 725.515 357.515)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M756.028 388.473v4.354a4.358 4.358 0 0 1-4.359 4.354h-52.306a4.358 4.358 0 0 1-4.359-4.354v-4.424c0-13.175 15.073-21.734 30.512-21.734s30.512 8.564 30.512 21.734m-19.724-59.983c5.957 5.958 5.957 15.617 0 21.575-5.958 5.958-15.618 5.958-21.576 0-5.957-5.958-5.957-15.617 0-21.575 5.958-5.958 15.618-5.958 21.576 0z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={341.505}
        y1={247.041}
        x2={73.311}
        y2={34.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={703.696}
        y1={375.242}
        x2={845.847}
        y2={243.165}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg414);
const Memo = memo(ForwardRef);
export default Memo;
