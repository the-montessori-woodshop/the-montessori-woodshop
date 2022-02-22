import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg424 = (
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
      d="M587.515 431.383c72.788 0 131.794-59.006 131.794-131.794 0-72.788-59.006-131.795-131.794-131.795-72.788 0-131.795 59.007-131.795 131.795 0 72.788 59.007 131.794 131.795 131.794z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M455.72 563.178c72.789 0 131.795-59.007 131.795-131.795 0-72.788-59.006-131.794-131.795-131.794-72.788 0-131.794 59.006-131.794 131.794 0 72.788 59.006 131.795 131.794 131.795zm0-263.589c72.789 0 131.795-59.007 131.795-131.795C587.515 95.006 528.509 36 455.72 36c-72.788 0-131.794 59.006-131.794 131.794 0 72.788 59.006 131.795 131.794 131.795z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M323.926 431.383c72.788 0 131.794-59.006 131.794-131.794 0-72.788-59.006-131.795-131.794-131.795-72.788 0-131.794 59.007-131.794 131.795 0 72.788 59.006 131.794 131.794 131.794zm109.563 52.773H477.2c16.506 0 27.408-11.819 24.148-26.185l-7.031-31.382h-77.843l-7.031 31.382c-3.158 13.551 8.457 26.185 24.046 26.185z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m494.213 431.244 29.956-26.593c16.71-14.876 17.423-25.268 4.177-42.08l-52.88-67.043c-11.106-14.061-29.242-14.061-40.45 0l-52.779 67.043c-13.246 16.812-13.246 27.714 4.177 42.08l29.956 26.593"
      fill="#6f381e"
    />
    <path
      d="M455.293 319.702v43.813"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M242.804 128.112c16.575 8.222 38.574-2.35 38.574-2.35s-4.889-23.898-21.473-32.109c-16.575-8.222-38.566 2.338-38.566 2.338s4.89 23.899 21.465 32.121z"
      fill="url(#a)"
    />
    <circle
      r={11.256}
      transform="matrix(1 0 0 -1 165.877 146.609)"
      fill="#6f381e"
    />
    <circle
      r={21.17}
      transform="matrix(1 0 0 -1 640.113 106.847)"
      fill="#6f381e"
    />
    <circle cx={763.002} cy={207.432} r={11.251} fill="#6f381e" />
    <circle cx={124.903} cy={262.774} r={15.903} fill="#E1E4E5" />
    <circle cx={638.932} cy={481.787} r={19.989} fill="#E1E4E5" />
    <circle
      cx={771.195}
      cy={377.834}
      r={15.877}
      transform="rotate(105 771.195 377.834)"
      fill="#E1E4E5"
    />
    <ellipse cx={149.578} cy={418.022} rx={16.247} ry={12.998} fill="#E1E4E5" />
    <circle
      cx={253.546}
      cy={481.646}
      r={25.931}
      transform="rotate(90 253.546 481.646)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={306.454}
        y1={153.759}
        x2={169.742}
        y2={45.62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg424);
const Memo = memo(ForwardRef);
export default Memo;
