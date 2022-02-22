import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg42 = (
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
      d="M424.902 252.112c5.154-20.815 53.868-51.215 79.901-32.887 7.99-39.656 15.464-64.385 41.57-83.92 26.106-19.535 69.665 5.999 76.661 59.483 6.996-21.986 42.565-51.618 71.138-26.632 26.437 23.12 29.088 61.861 26.327 83.92H424.902v.036z"
      fill="url(#a)"
    />
    <path
      d="M416.246 484.735c6.829-27.571 71.366-67.838 105.854-43.561 10.586-52.526 20.488-85.283 55.074-111.158 34.585-25.875 92.293 7.947 101.561 78.789 9.269-29.122 56.391-68.371 94.245-35.276 35.024 30.624 38.537 81.939 34.878 111.158H416.246v.048z"
      fill="url(#b)"
    />
    <path
      d="M149 282.407c3.876-15.703 40.5-38.636 60.072-24.81 6.007-29.915 11.626-48.571 31.253-63.308 19.627-14.737 52.376 4.526 57.636 44.873 5.26-16.586 32.001-38.939 53.483-20.09 19.876 17.441 21.869 46.667 19.793 63.308H149v.027z"
      fill="url(#c)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m593.945 179.764-61.679-61.733a43.615 43.615 0 0 0-30.839-12.792H345.005c-24.1 0-43.62 19.537-43.62 43.658v305.611c0 24.121 19.52 43.659 43.62 43.659h218.101c24.1 0 43.62-19.538 43.62-43.659V210.631a43.692 43.692 0 0 0-12.781-30.867z"
      fill="#6f381e"
    />
    <path
      d="M371.998 257.766h134.615m-134.615 60.979h134.615m-134.615 60.98h96.647"
      stroke="#fff"
      strokeWidth={27.184}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M408.672 499.883c-4.101-16.798-42.859-41.332-63.571-26.541-6.357-32.002-12.304-51.96-33.074-67.725-20.771-15.765-55.427 4.842-60.993 48.004-5.566-17.743-33.866-41.657-56.599-21.493-21.034 18.659-23.143 49.923-20.946 67.726h235.183v.029z"
      fill="url(#d)"
    />
    <path
      clipRule="evenodd"
      d="m242.049 400.342 8.656-8.115-8.656-8.114-8.656 8.114 8.656 8.115z"
      stroke="#E1E4E5"
      strokeWidth={4.328}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={226.932}
      y={315.429}
      width={42.142}
      height={4.91}
      rx={2.455}
      transform="rotate(135 226.932 315.429)"
      fill="#E1E4E5"
    />
    <rect
      x={210.774}
      y={315.313}
      width={15.647}
      height={4.91}
      rx={2.455}
      transform="rotate(135 210.774 315.313)"
      fill="#E1E4E5"
    />
    <rect
      x={627.406}
      y={135.038}
      width={42.142}
      height={4.91}
      rx={2.455}
      transform="rotate(-45 627.406 135.038)"
      fill="#E1E4E5"
    />
    <rect
      x={643.564}
      y={135.154}
      width={15.647}
      height={4.91}
      rx={2.455}
      transform="rotate(-45 643.564 135.154)"
      fill="#E1E4E5"
    />
    <path
      d="M657.525 293.227c0 5.382-4.119 9.738-9.207 9.738-5.088 0-9.187-4.378-9.187-9.738 0-5.381 4.119-9.737 9.207-9.737 5.088 0 9.187 4.356 9.187 9.737zM198.77 202.883c0 6.876-5.814 12.442-12.997 12.442s-12.97-5.593-12.97-12.442c0-6.876 5.815-12.443 12.998-12.443 7.183 0 12.969 5.567 12.969 12.443z"
      stroke="#E1E4E5"
      strokeWidth={5.41}
      strokeMiterlimit={10}
    />
    <rect
      x={671.016}
      y={194.043}
      width={25.546}
      height={25.546}
      rx={10.82}
      transform="rotate(45 671.016 194.043)"
      fill="#fff"
    />
    <path
      d="M260.229 132.942c-10.261 8.966-27.913 5.566-27.913 5.566s-1.003-17.938 9.267-26.898c10.261-8.967 27.905-5.573 27.905-5.573s1.003 17.938-9.259 26.905z"
      fill="url(#e)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M460.607 499.218s56.856-38.817 136.744-39.362c80.25-.548 144.096 38.033 149.977 40.027l-286.721-.665z"
      fill="url(#f)"
    />
    <path
      d="M729.533 327.015c-15.069 15.337-43.248 12.103-43.248 12.103s-3.729-28.1 11.354-43.428c15.069-15.337 43.234-12.113 43.234-12.113s3.729 28.101-11.34 43.438z"
      fill="url(#g)"
    />
    <path
      d="m621.013 104.289-16.792 6.565 1.064-17.998 16.788-6.56-1.06 17.993z"
      stroke="#E1E4E5"
      strokeWidth={4.551}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={566.81}
        y1={321.266}
        x2={568.393}
        y2={-5.446}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={604.249}
        y1={576.334}
        x2={606.344}
        y2={143.583}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={255.69}
        y1={334.576}
        x2={256.888}
        y2={88.109}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={295.767}
        y1={555.691}
        x2={294.471}
        y2={292.029}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={219.711}
        y1={163.153}
        x2={296.781}
        y2={60.479}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={610.081}
        y1={522.328}
        x2={609.908}
        y2={416.287}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={669.41}
        y1={379.403}
        x2={778.351}
        y2={208.629}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg42);
const Memo = memo(ForwardRef);
export default Memo;
