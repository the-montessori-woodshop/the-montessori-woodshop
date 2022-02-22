import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg476 = (
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
      d="M482.663 62.51a22.918 22.918 0 0 0-28.216 0c-43.945 33.537-173.698 142.936-173.004 270.375 0 103.154 83.958 187.343 187.343 187.343 103.386 0 187.343-83.957 187.343-187.112.231-125.589-129.752-236.838-173.466-270.606z"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
    />
    <path
      d="M468.559 57.652v462.575m0-70.307 178.092-86.501m-178.092-29.151 170.459-82.801m-170.459-32.845 116.338-56.665"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M399.035 133.282c39.487 39.487 39.487 103.508 0 142.995-39.487 39.487-103.508 39.487-142.994 0-39.487-39.487-39.487-103.508 0-142.995 39.487-39.487 103.508-39.487 142.994 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m338.017 183.991 34.931 13.862-62.87 69.289 6.982-48.501-34.932-13.862 62.87-62.363-6.981 41.575z"
      fill="#fff"
    />
    <path
      d="M755.69 307.197c-17.718 8.789-41.234-2.512-41.234-2.512s5.227-25.545 22.954-34.322c17.717-8.789 41.223 2.5 41.223 2.5s-5.226 25.545-22.943 34.334z"
      fill="url(#a)"
    />
    <path
      d="M156.583 348.598c25.09 15.037 61.086 1.136 61.086 1.136s-4.707-38.276-29.812-53.296c-25.09-15.038-61.071-1.154-61.071-1.154s4.707 38.276 29.797 53.314z"
      fill="url(#b)"
    />
    <circle
      r={12.065}
      transform="matrix(-1 0 0 1 644.153 506.863)"
      fill="#E1E4E5"
    />
    <circle
      r={17.427}
      transform="matrix(-1 0 0 1 201.316 439.786)"
      fill="#E1E4E5"
    />
    <circle
      r={13.264}
      transform="matrix(-1 0 0 1 733.75 388.18)"
      fill="#E1E4E5"
    />
    <circle
      r={14.746}
      transform="matrix(-1 0 0 1 674.686 147.476)"
      fill="#E1E4E5"
    />
    <circle
      r={13.242}
      transform="scale(1 -1) rotate(-75 -51.523 -200.564)"
      fill="#E1E4E5"
    />
    <circle
      r={5.511}
      transform="matrix(-1 0 0 1 209.518 64.432)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={13.551}
      ry={10.841}
      transform="matrix(-1 0 0 1 315.055 531.068)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={687.652}
        y1={334.612}
        x2={833.787}
        y2={219.018}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={253.675}
        y1={397.003}
        x2={51.791}
        y2={209.426}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg476);
const Memo = memo(ForwardRef);
export default Memo;
