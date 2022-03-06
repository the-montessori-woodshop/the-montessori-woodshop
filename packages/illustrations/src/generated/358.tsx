import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg358 = (
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
    <circle cx={449.915} cy={300.477} r={264.515} fill="url(#a)" />
    <path
      d="M796.323 286.139c-24.005 11.908-55.866-3.403-55.866-3.403s7.081-34.611 31.099-46.502c24.005-11.908 55.852 3.387 55.852 3.387s-7.08 34.61-31.085 46.518z"
      fill="url(#b)"
    />
    <path
      d="M109.669 364.429c27.12 16.255 66.03 1.229 66.03 1.229s-5.088-41.374-32.225-57.61c-27.12-16.254-66.013-1.247-66.013-1.247s5.088 41.374 32.208 57.628z"
      fill="url(#c)"
    />
    <circle
      cx={748.215}
      cy={207.885}
      r={13.107}
      transform="rotate(180 748.215 207.885)"
      fill="#6f381e"
    />
    <circle
      cx={254.544}
      cy={282.128}
      r={14.745}
      transform="rotate(180 254.544 282.128)"
      fill="#6f381e"
    />
    <circle
      r={12.288}
      transform="matrix(-1 0 0 1 155.757 195.459)"
      fill="#6f381e"
    />
    <circle
      r={5.734}
      transform="matrix(-1 0 0 1 635.805 259.356)"
      fill="#6f381e"
    />
    <circle
      r={7.373}
      transform="matrix(-1 0 0 1 668.899 515.229)"
      fill="#E1E4E5"
    />
    <circle
      r={10.65}
      transform="matrix(-1 0 0 1 153.559 438.675)"
      fill="#E1E4E5"
    />
    <circle
      r={8.105}
      transform="matrix(-1 0 0 1 276.716 166.569)"
      fill="#E1E4E5"
    />
    <circle
      r={9.011}
      transform="matrix(-1 0 0 1 677.477 167.201)"
      fill="#E1E4E5"
    />
    <circle
      r={8.092}
      transform="scale(1 -1) rotate(-75 -70.603 -251.879)"
      fill="#E1E4E5"
    />
    <circle
      r={10.765}
      transform="matrix(-1 0 0 1 383.441 98.571)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.281}
      ry={6.625}
      transform="matrix(-1 0 0 1 726.737 373.738)"
      fill="#E1E4E5"
    />
    <circle
      r={16.841}
      transform="matrix(0 1 1 0 665.452 76.285)"
      fill="#E1E4E5"
    />
    <path
      d="M789.533 327.986h.217c1.283 18.176 14.8 18.456 14.8 18.456s-14.905.29-14.905 21.292c0-21.002-14.906-21.292-14.906-21.292s13.512-.28 14.794-18.456zM245.081 504.683h.193c1.138 16.45 13.132 16.703 13.132 16.703s-13.226.263-13.226 19.271c0-19.008-13.226-19.271-13.226-19.271s11.989-.253 13.127-16.703z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M450.581 541.826c-135.631 0-245.156-111.832-241.372-248.322 3.488-125.999 108.531-231.042 234.53-234.53 136.49-3.784 248.322 105.741 248.322 241.372v26.831c0 29.648-24.014 53.662-53.662 53.662h-55.353c-35.658 0-61.389 34.129-51.596 68.393l6.895 24.174c9.821 34.29-15.937 68.42-51.569 68.42h-36.195z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m439.331 338.535-15.161-48.776-48.776-15.161a11.149 11.149 0 0 1-3.127-19.75l41.703-29.492-.653-51.073a11.151 11.151 0 0 1 17.817-9.078l40.933 30.548 48.372-16.403a11.148 11.148 0 0 1 14.139 14.139l-16.403 48.373 30.548 40.935a11.15 11.15 0 0 1-9.077 17.817l-51.072-.654-29.493 41.701a11.15 11.15 0 0 1-19.75-3.126z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={39.285}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m328.251 385.675 39.301-39.302m-9.266 105.958 39.302-39.301"
      stroke="#fff"
      strokeWidth={39.285}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={461.195}
        y1={861.598}
        x2={444.883}
        y2={-539.534}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={704.142}
        y1={323.282}
        x2={902.134}
        y2={166.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={214.618}
        y1={416.751}
        x2={-3.603}
        y2={213.995}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg358);
const Memo = memo(ForwardRef);
export default Memo;
