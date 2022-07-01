import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg235 = (
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
      d="M461.515 411.596c-50.958-38.982-127.955-45.861-188.1-20.637-16.554 6.921-35.947-2.525-35.947-18.134V134.829c0-12.77 6.846-25.014 18.82-32.798 61.962-40.328 149.29-35.532 205.227 14.39 55.937-49.922 143.266-54.718 205.227-14.368 11.974 7.783 18.82 20.027 18.82 32.776v237.974c0 15.61-19.392 25.077-35.947 18.135-60.144-25.203-137.141-18.324-188.1 20.658v0z"
      stroke="#E1E4E5"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M237.468 212.794V450.68c0 15.603 19.393 25.044 35.947 18.126 60.145-25.212 137.142-18.336 188.1 20.628 50.959-38.964 127.956-45.84 188.1-20.649 16.555 6.939 35.947-2.523 35.947-18.126V212.794M461.515 411.596V116.023"
      stroke="#E1E4E5"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m516.035 353.094 35.941-72.88-90.169-131.584-90.191 131.584 35.94 72.88"
      fill="#6f381e"
    />
    <path
      d="m516.035 353.094 35.941-72.88-90.169-131.584-90.191 131.584 35.94 72.88"
      stroke="#fff"
      strokeWidth={14.86}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M407.028 353.326h109.358v62.918H407.028v-62.918z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={14.86}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M461.779 278.579V148.63"
      stroke="#fff"
      strokeWidth={14.86}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M766.076 251.897c-27.583 13.683-64.193-3.91-64.193-3.91s8.137-39.77 35.734-53.434c27.583-13.683 64.179 3.892 64.179 3.892s-8.137 39.769-35.72 53.452z"
      fill="url(#a)"
    />
    <path
      d="M296.764 243.914c15.97 9.571 38.881.723 38.881.723s-2.996-24.362-18.975-33.922c-15.97-9.572-38.871-.735-38.871-.735s2.996 24.363 18.965 33.934z"
      fill="url(#b)"
    />
    <circle
      cx={723.764}
      cy={362.494}
      r={15.061}
      transform="rotate(180 723.764 362.494)"
      fill="#6f381e"
    />
    <circle
      cx={190.962}
      cy={266.215}
      r={12.398}
      transform="rotate(180 190.962 266.215)"
      fill="#6f381e"
    />
    <circle
      r={14.12}
      transform="matrix(-1 0 0 1 209.678 410.997)"
      fill="#6f381e"
    />
    <circle
      r={6.589}
      transform="matrix(-1 0 0 1 626.936 224.643)"
      fill="#6f381e"
    />
    <circle
      r={8.472}
      transform="matrix(-1 0 0 1 203.866 92.939)"
      fill="#E1E4E5"
    />
    <circle
      r={12.237}
      transform="matrix(-1 0 0 1 98.237 381.759)"
      fill="#E1E4E5"
    />
    <circle r={9.313} transform="matrix(-1 0 0 1 573 496.499)" fill="#E1E4E5" />
    <circle
      r={10.354}
      transform="matrix(-1 0 0 1 615.975 143.207)"
      fill="#E1E4E5"
    />
    <circle
      r={9.298}
      transform="scale(1 -1) rotate(-75 -79.806 -187.107)"
      fill="#E1E4E5"
    />
    <circle
      r={12.37}
      transform="matrix(-1 0 0 1 331.883 135.755)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.515}
      ry={7.612}
      transform="matrix(-1 0 0 1 784.486 444.453)"
      fill="#E1E4E5"
    />
    <circle
      r={19.351}
      transform="scale(1 -1) rotate(-75 -151.903 -477.325)"
      fill="#E1E4E5"
    />
    <path
      d="M651.021 287.477h.248c1.474 20.884 17.006 21.206 17.006 21.206s-17.127.334-17.127 24.466c0-24.132-17.127-24.466-17.127-24.466s15.525-.322 17-21.206zM149.815 458.421h.13c.771 11.338 8.891 11.513 8.891 11.513s-8.954.182-8.954 13.283c0-13.101-8.955-13.283-8.955-13.283s8.117-.175 8.888-11.513z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={660.154}
        y1={294.577}
        x2={887.66}
        y2={114.619}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={358.562}
        y1={274.723}
        x2={230.066}
        y2={155.333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg235);
const Memo = memo(ForwardRef);
export default Memo;
