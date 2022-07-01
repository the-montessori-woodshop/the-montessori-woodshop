import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg394 = (
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
      d="M836.571 317.915c-27.32 13.552-63.58-3.874-63.58-3.874s8.058-39.39 35.393-52.923c27.32-13.552 63.566 3.854 63.566 3.854s-8.059 39.39-35.379 52.943z"
      fill="url(#a)"
    />
    <path
      d="M77.06 394.133c35.697 21.394 86.911 1.617 86.911 1.617s-6.697-54.457-42.415-75.827c-35.697-21.395-86.888-1.641-86.888-1.641s6.696 54.456 42.393 75.851z"
      fill="url(#b)"
    />
    <circle
      cx={750.249}
      cy={136.416}
      r={14.917}
      transform="rotate(180 750.249 136.416)"
      fill="#6f381e"
    />
    <circle
      cx={734.472}
      cy={339.58}
      r={16.782}
      transform="rotate(180 734.472 339.58)"
      fill="#6f381e"
    />
    <circle
      r={13.985}
      transform="matrix(-1 0 0 1 109.208 167.284)"
      fill="#6f381e"
    />
    <circle
      r={6.526}
      transform="matrix(-1 0 0 1 240.234 536.299)"
      fill="#6f381e"
    />
    <circle
      r={8.391}
      transform="matrix(-1 0 0 1 647.296 515.596)"
      fill="#E1E4E5"
    />
    <circle
      r={12.12}
      transform="matrix(-1 0 0 1 122.551 466.937)"
      fill="#E1E4E5"
    />
    <circle
      r={9.225}
      transform="matrix(-1 0 0 1 388.598 190.22)"
      fill="#E1E4E5"
    />
    <circle
      r={10.256}
      transform="matrix(-1 0 0 1 469.643 329.737)"
      fill="#E1E4E5"
    />
    <circle
      r={9.209}
      transform="scale(1 -1) rotate(-75 155.247 -406.377)"
      fill="#E1E4E5"
    />
    <circle
      r={12.252}
      transform="matrix(-1 0 0 1 338.283 70.15)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.424}
      ry={7.539}
      transform="matrix(-1 0 0 1 625.761 414.215)"
      fill="#E1E4E5"
    />
    <circle
      r={19.167}
      transform="scale(1 -1) rotate(-75 283.022 -478.773)"
      fill="#E1E4E5"
    />
    <path
      d="M742.937 449.759h.246c1.46 20.686 16.844 21.004 16.844 21.004s-16.964.331-16.964 24.233c0-23.902-16.964-24.233-16.964-24.233s15.378-.318 16.838-21.004zm-310.668 45.136h.219c1.295 18.722 14.945 19.01 14.945 19.01s-15.052.3-15.052 21.932c0-21.632-15.052-21.932-15.052-21.932s13.645-.288 14.94-19.01z"
      fill="#E1E4E5"
    />
    <path
      d="M164.095 221.534v-37.708c0-20.834 16.874-37.708 37.708-37.708h207.392c20.834 0 37.708 16.874 37.708 37.708v94.269c0 20.834-16.874 37.708-37.708 37.708h-37.707m-58.656 96.362H166.187m146.645-58.654H166.187m146.645-58.655H166.187"
      stroke="#6f381e"
      strokeWidth={31.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M136.87 485.484h205.28c16.215 0 29.337-13.122 29.337-29.337V250.866c0-16.214-13.122-29.336-29.337-29.336H136.851c-16.196 0-29.318 13.122-29.318 29.336v205.3c0 16.196 13.122 29.318 29.337 29.318z"
      stroke="#6f381e"
      strokeWidth={31.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M621.141 272.386c-18.779 18.778-18.779 49.208 0 67.987 18.778 18.778 49.209 18.778 67.987 0 18.778-18.779 18.778-49.209 0-67.987-18.76-18.779-49.209-18.779-67.987 0"
      stroke="#6f381e"
      strokeWidth={31.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M534.943 306.376c0-5.298.472-10.577 1.113-15.705l-28.281-22.116c-6.26-4.921-7.975-13.688-3.997-20.588l25.151-43.496c3.978-6.882 12.406-9.785 19.796-6.844l25.265 10.143c5.015 2.018 10.614 1.169 15.139-1.81a121.936 121.936 0 0 1 12.142-7.051c4.827-2.413 8.352-6.825 9.125-12.161l3.847-26.923c1.112-7.862 7.862-13.707 15.818-13.707h50.151c7.938 0 14.687 5.845 15.819 13.707l3.884 26.961c.754 5.317 4.261 9.71 9.049 12.142a126.035 126.035 0 0 1 12.18 7.127c4.506 2.96 10.087 3.751 15.083 1.753l25.302-10.181c7.391-2.96 15.837-.057 19.797 6.844l25.151 43.496c3.997 6.9 2.281 15.686-3.979 20.588l-28.28 22.116c.641 5.128 1.131 10.407 1.131 15.705 0 5.279-.471 10.577-1.131 15.705l28.28 22.116c6.26 4.921 7.976 13.688 3.997 20.588l-25.151 43.496c-3.978 6.882-12.405 9.785-19.796 6.844l-25.321-10.162c-4.996-2.018-10.577-1.207-15.064 1.772a124.634 124.634 0 0 1-12.18 7.127c-4.807 2.432-8.295 6.806-9.068 12.142l-3.865 26.942c-1.132 7.843-7.881 13.688-15.819 13.688h-25.094m-72.758-75.413H469.255m113.124 47.134H469.255m113.124 47.133H469.255"
      stroke="#6f381e"
      strokeWidth={31.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={731.66}
        y1={360.188}
        x2={956.995}
        y2={181.946}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={215.197}
        y1={463}
        x2={-72.031}
        y2={196.128}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg394);
const Memo = memo(ForwardRef);
export default Memo;
