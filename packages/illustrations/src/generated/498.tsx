import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg498 = (
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
      d="M731.008 132.447c-19.058 9.454-44.352-2.702-44.352-2.702s5.622-27.477 24.689-36.918c19.058-9.453 44.342 2.689 44.342 2.689s-5.622 27.477-24.679 36.931z"
      fill="url(#a)"
    />
    <path
      d="M410.616 138.108c18.872 11.312 45.949.855 45.949.855s-3.541-28.791-22.425-40.089c-18.872-11.311-45.937-.868-45.937-.868s3.54 28.791 22.413 40.102z"
      fill="url(#b)"
    />
    <circle
      r={12.977}
      transform="matrix(-1 0 0 1 580.824 514.153)"
      fill="#E1E4E5"
    />
    <circle r={12.5} transform="matrix(-1 0 0 1 388.64 493.5)" fill="#E1E4E5" />
    <circle
      r={14.267}
      transform="matrix(-1 0 0 1 706.886 505.761)"
      fill="#E1E4E5"
    />
    <circle
      r={14.243}
      transform="scale(1 -1) rotate(-75 9.993 -172.885)"
      fill="#E1E4E5"
    />
    <circle
      r={5.928}
      transform="matrix(-1 0 0 1 286.582 106.97)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={14.576}
      ry={11.661}
      transform="matrix(-1 0 0 1 188.743 512.836)"
      fill="#E1E4E5"
    />
    <path
      d="M744.089 238.138H500.041m244.048-75.173H501.548m242.541 222.966H500.041m244.048 75.792H500.041m244.048-150.965H501.548m-59.066 17.037v-61.496c0-76.871-30.748-107.619-107.619-107.619h-92.244C165.748 158.68 135 189.428 135 266.299v92.244c0 76.871 30.748 107.619 107.619 107.619h61.496"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m216.944 350.699 36.591-47.506c5.227-6.764 14.913-7.994 21.677-2.767l28.135 22.139c6.765 5.227 16.45 3.997 21.677-2.614l35.515-45.815"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m403.742 371.149 4.305 8.763c2.152 4.305 7.533 8.303 12.299 9.225l5.842.922c17.526 2.922 21.677 15.836 9.071 28.596l-5.381 5.381c-3.536 3.69-5.535 10.762-4.459 15.682l.769 3.228c4.766 21.217-6.457 29.365-24.906 18.295l-3.997-2.306c-4.766-2.767-12.453-2.767-17.219 0l-3.998 2.306c-18.602 11.223-29.825 2.922-24.906-18.295l.769-3.228c1.076-4.92-.922-11.992-4.458-15.682l-5.381-5.381c-12.607-12.76-8.456-25.674 9.07-28.596l5.843-.922c4.612-.769 10.146-4.92 12.299-9.225l4.304-8.763c8.302-16.757 21.832-16.757 30.134 0z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={657.825}
        y1={161.935}
        x2={815.012}
        y2={37.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={483.648}
        y1={174.518}
        x2={331.792}
        y2={33.425}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg498);
const Memo = memo(ForwardRef);
export default Memo;
