import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg449 = (
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
      d="M391.464 534.244h140.248c116.874 0 163.624-46.749 163.624-163.623V230.373c0-116.874-46.75-163.624-163.624-163.624H391.464c-116.874 0-163.624 46.75-163.624 163.624v140.248c0 116.874 46.75 163.623 163.624 163.623zm0-467.494 115.705 467.494m-56.567-228.605L227.84 370.621m437.881-225.173-222.763 64.981M695.142 345.23 482.26 407.457"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M300.056 218.907c26.313-115.37 197.685-115.237 223.865.133 15.361 67.676-26.848 124.961-63.847 160.398-26.848 25.845-69.324 25.845-96.305 0-36.866-35.437-79.074-92.855-63.713-160.531z"
      fill="#6f381e"
    />
    <path
      d="m377.21 260.756 28.057 28.543 54.913-55.677"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M737.169 539.791c-14.156 7.022-32.944-2.007-32.944-2.007s4.176-20.41 18.339-27.422c14.155-7.022 32.936 1.997 32.936 1.997s-4.176 20.41-18.331 27.432z"
      fill="url(#a)"
    />
    <path
      d="M157.077 422.772c11.558 6.927 28.141.523 28.141.523s-2.169-17.632-13.734-24.552c-11.558-6.927-28.133-.531-28.133-.531s2.168 17.633 13.726 24.56z"
      fill="url(#b)"
    />
    <circle
      cx={564.069}
      cy={287.256}
      r={9.613}
      transform="rotate(180 564.069 287.256)"
      fill="#6f381e"
    />
    <circle
      cx={412.054}
      cy={463.845}
      r={18.08}
      transform="rotate(180 412.054 463.845)"
      fill="#6f381e"
    />
    <circle
      r={14.352}
      transform="matrix(-1 0 0 1 593.916 464.484)"
      fill="#6f381e"
    />
    <circle
      r={9.609}
      transform="matrix(-1 0 0 1 283.495 155.155)"
      fill="#6f381e"
    />
    <circle
      r={11.463}
      transform="matrix(-1 0 0 1 208.957 513.997)"
      fill="#E1E4E5"
    />
    <circle
      r={13.581}
      transform="matrix(-1 0 0 1 652.098 214.804)"
      fill="#E1E4E5"
    />
    <circle
      r={17.072}
      transform="matrix(-1 0 0 1 547.51 120.041)"
      fill="#E1E4E5"
    />
    <circle
      r={13.559}
      transform="scale(1 -1) rotate(-75 45.548 -176.503)"
      fill="#E1E4E5"
    />
    <circle
      r={9.28}
      transform="matrix(-1 0 0 1 751.535 328.407)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={13.875}
      ry={11.1}
      transform="matrix(-1 0 0 1 297.588 467.783)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={682.81}
        y1={561.694}
        x2={799.566}
        y2={469.34}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={201.804}
        y1={445.07}
        x2={108.803}
        y2={358.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg449);
const Memo = memo(ForwardRef);
export default Memo;
