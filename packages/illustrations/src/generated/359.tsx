import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg359 = (
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
      d="M750.415 288.225c-12.846 6.372-29.895-1.822-29.895-1.822s3.789-18.521 16.642-24.884c12.845-6.372 29.888 1.812 29.888 1.812s-3.789 18.521-16.635 24.894z"
      fill="url(#a)"
    />
    <path
      d="M123.67 352.828c16.142 9.675 39.301.731 39.301.731s-3.028-24.626-19.18-34.29c-16.143-9.674-39.292-.742-39.292-.742s3.028 24.626 19.171 34.301z"
      fill="url(#b)"
    />
    <circle
      cx={745.009}
      cy={199.582}
      r={13.725}
      transform="rotate(180 745.009 199.582)"
      fill="#6f381e"
    />
    <circle
      r={12.867}
      transform="matrix(-1 0 0 1 124.619 186.57)"
      fill="#6f381e"
    />
    <circle
      r={6.005}
      transform="matrix(-1 0 0 1 627.3 253.48)"
      fill="#6f381e"
    />
    <circle
      r={7.72}
      transform="matrix(-1 0 0 1 661.954 521.417)"
      fill="#E1E4E5"
    />
    <circle
      r={11.152}
      transform="matrix(-1 0 0 1 122.317 441.253)"
      fill="#E1E4E5"
    />
    <circle
      r={8.487}
      transform="matrix(-1 0 0 1 251.28 156.318)"
      fill="#E1E4E5"
    />
    <circle
      r={9.436}
      transform="matrix(-1 0 0 1 663.343 157.892)"
      fill="#E1E4E5"
    />
    <circle
      r={8.473}
      transform="scale(1 -1) rotate(-75 -98.726 -228.84)"
      fill="#E1E4E5"
    />
    <circle
      r={11.273}
      transform="matrix(-1 0 0 1 363.037 85.115)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.671}
      ry={6.937}
      transform="matrix(-1 0 0 1 722.518 373.255)"
      fill="#E1E4E5"
    />
    <circle
      r={17.635}
      transform="scale(1 -1) rotate(-75 242.821 -424.771)"
      fill="#E1E4E5"
    />
    <path
      d="M788.276 325.346h.226C789.846 344.378 804 344.671 804 344.671s-15.608.305-15.608 22.296c0-21.991-15.608-22.296-15.608-22.296s14.148-.293 15.492-19.325zM164.313 495.112h.201c1.192 17.225 13.751 17.49 13.751 17.49s-13.849.276-13.849 20.18c0-19.904-13.849-20.18-13.849-20.18s12.554-.265 13.746-17.49z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M224.921 266.118v231.837c0 27.555 22.318 49.874 49.873 49.874h349.09c27.555 0 49.874-22.319 49.874-49.874V266.118"
      fill="#6f381e"
    />
    <path
      d="M224.921 266.118v231.837c0 27.555 22.318 49.874 49.873 49.874h349.09c27.555 0 49.874-22.319 49.874-49.874V266.118"
      stroke="#6f381e"
      strokeWidth={21}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m247.017 224.746 174.408-117.327a50.045 50.045 0 0 1 55.833 0l174.408 117.327c29.375 19.775 29.375 62.991 0 82.765l-146.479 98.551c-33.764 22.717-77.902 22.717-111.667 0l-146.478-98.551c-29.401-19.774-29.401-63.015-.025-82.765z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={21}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M377.702 395.045 240.023 548.178m418.657 0L521.001 395.045"
      stroke="#fff"
      strokeWidth={21}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      cx={449.703}
      cy={176.881}
      rx={126.44}
      ry={125.738}
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={21}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m449.691 208.198 22.932 12.216c4.458 2.376 9.682-1.461 8.825-6.502l-4.378-25.881 18.553-18.312c3.613-3.57 1.624-9.793-3.372-10.524l-25.63-3.778-11.465-23.562c-2.23-4.59-8.677-4.59-10.918 0l-11.454 23.562-25.629 3.778c-4.996.731-6.985 6.954-3.373 10.524l18.554 18.312-4.379 25.881c-.857 5.041 4.367 8.878 8.826 6.502l22.931-12.216h-.023z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={701.086}
        y1={308.101}
        x2={807.038}
        y2={224.293}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={186.136}
        y1={383.971}
        x2={56.249}
        y2={263.288}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg359);
const Memo = memo(ForwardRef);
export default Memo;
