import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg290 = (
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
      d="M734.038 290.632c-24.94 12.372-58.042-3.536-58.042-3.536s7.357-35.959 32.31-48.314c24.941-12.372 58.029 3.519 58.029 3.519s-7.356 35.959-32.297 48.331z"
      fill="url(#a)"
    />
    <path
      d="M184.523 202.42c14.439 8.654 35.155.654 35.155.654s-2.708-22.028-17.157-30.672c-14.439-8.654-35.146-.664-35.146-.664s2.709 22.028 17.148 30.682z"
      fill="url(#b)"
    />
    <circle
      cx={665.499}
      cy={377.403}
      r={13.618}
      transform="rotate(180 665.499 377.403)"
      fill="#6f381e"
    />
    <circle
      cx={203.837}
      cy={302.839}
      r={11.21}
      transform="rotate(180 203.837 302.839)"
      fill="#6f381e"
    />
    <circle
      r={12.767}
      transform="matrix(-1 0 0 1 232.858 424.551)"
      fill="#6f381e"
    />
    <circle
      r={5.958}
      transform="matrix(-1 0 0 1 657.463 238.082)"
      fill="#6f381e"
    />
    <circle
      r={7.66}
      transform="matrix(-1 0 0 1 234.461 152.721)"
      fill="#E1E4E5"
    />
    <circle
      r={11.065}
      transform="matrix(-1 0 0 1 141.598 505.864)"
      fill="#E1E4E5"
    />
    <circle
      r={8.421}
      transform="matrix(-1 0 0 1 539.422 506.599)"
      fill="#E1E4E5"
    />
    <circle
      r={9.362}
      transform="matrix(-1 0 0 1 612.805 145.362)"
      fill="#E1E4E5"
    />
    <circle
      r={8.407}
      transform="scale(1 -1) rotate(-75 -104.39 -216.03)"
      fill="#E1E4E5"
    />
    <circle
      r={11.184}
      transform="matrix(-1 0 0 1 358.296 87.68)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.603}
      ry={6.883}
      transform="matrix(-1 0 0 1 712.748 486.183)"
      fill="#E1E4E5"
    />
    <circle
      r={10.441}
      transform="matrix(0 1 1 0 321.674 511.711)"
      fill="#E1E4E5"
    />
    <path
      d="M635.979 428.949h.225c1.333 18.884 15.377 19.175 15.377 19.175s-15.487.302-15.487 22.122c0-21.82-15.486-22.122-15.486-22.122s14.038-.291 15.371-19.175z"
      fill="#E1E4E5"
    />
    <circle
      cx={438.658}
      cy={299.64}
      r={193.392}
      stroke="#E1E4E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="10 25"
    />
    <circle
      cx={438.658}
      cy={299.64}
      r={274.64}
      stroke="#E1E4E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="10 25"
    />
    <circle
      cx={438.659}
      cy={299.64}
      r={173.939}
      stroke="#E1E4E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="10 25"
    />
    <path
      d="M523.216 283.936c-39.523 32.613-63.247 80.594-65.225 131.916"
      stroke="#2D2019"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M472.384 219.039c-43.269 24.981-58.116 80.272-33.161 123.495 24.955 43.224 80.262 58.012 123.531 33.03 63.824-36.849 34.291-124.177 58.818-166.156-48.385-20.835-103.845-17.254-149.188 9.631z"
      fill="#6f381e"
    />
    <path
      d="M355.713 329.932c26.167 21.593 41.874 53.36 43.184 87.339"
      stroke="#2D2019"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M389.368 286.964c28.647 16.539 38.477 53.147 21.955 81.764-16.523 28.618-53.14 38.409-81.788 21.869-42.257-24.397-22.704-82.216-38.943-110.01 32.035-13.794 68.754-11.423 98.776 6.377z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={638.265}
        y1={329.223}
        x2={843.973}
        y2={166.507}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={240.399}
        y1={230.277}
        x2={124.215}
        y2={122.327}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg290);
const Memo = memo(ForwardRef);
export default Memo;
