import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg250 = (
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
      d="M205.409 410.525c2.414 61.261 133.211 174.007 275.779 114.346 66.307-27.75 57.196-62.621 104.757-114.17 28.349-30.724 70.859-55.936 79.436-97.532 7.411-35.905-2.666-72.803-23.487-95.463-46.826-50.963-134.486-80.64-209.265 13.603-74.779 94.242-233.43 21.22-227.22 179.216z"
      fill="url(#a)"
    />
    <path
      d="M170.667 209.348c13.019 23.234 41.532 26.427 87.21 22.012 34.354-3.327 65.682-5.902 100.038-24.633 24.047-13.102 43.082-30.827 56.975-48.044 15.055-18.65 36.069-39.936 25.767-61.083-14.156-29.049-96.023-53.514-175.518-13.505-87.326 43.963-107.207 102.544-94.472 125.253z"
      fill="url(#b)"
    />
    <path
      d="M90.98 281.595c26.502 13.147 61.678-3.758 61.678-3.758s-7.818-38.211-34.334-51.34c-26.503-13.146-61.664 3.739-61.664 3.739s7.817 38.212 34.32 51.359z"
      fill="url(#c)"
    />
    <path
      d="M807.159 372.043c-28.256 16.935-68.795 1.28-68.795 1.28s5.301-43.106 33.574-60.022c28.256-16.935 68.777-1.299 68.777-1.299s-5.3 43.106-33.556 60.041z"
      fill="url(#d)"
    />
    <circle cx={382.748} cy={540.948} r={8.14} fill="#E1E4E5" />
    <circle cx={761.422} cy={444.467} r={11.758} fill="#E1E4E5" />
    <circle cx={96.034} cy={422.342} r={8.949} fill="#E1E4E5" />
    <circle cx={190.997} cy={145.709} r={9.949} fill="#E1E4E5" />
    <circle
      cx={813.938}
      cy={257.344}
      r={8.934}
      transform="rotate(90 813.938 257.344)"
      fill="#E1E4E5"
    />
    <circle cx={503.608} cy={83.753} r={11.885} fill="#E1E4E5" />
    <ellipse cx={128.605} cy={372.774} rx={9.142} ry={7.314} fill="#E1E4E5" />
    <circle
      cx={301.041}
      cy={68.427}
      r={18.593}
      transform="rotate(105 301.041 68.427)"
      fill="#E1E4E5"
    />
    <path
      d="M693.783 197.028h-.13c-.771 10.927-8.898 11.095-8.898 11.095s8.961.175 8.961 12.801c0-12.626 8.961-12.801 8.961-12.801s-8.123-.168-8.894-11.095zm13.615 286.03h-.125c-.741 10.894-8.543 11.062-8.543 11.062s8.604.175 8.604 12.763c0-12.588 8.603-12.763 8.603-12.763s-7.799-.168-8.539-11.062z"
      fill="#E1E4E5"
    />
    <path
      d="m724.197 532.698-74.536-74.537"
      stroke="#6f381e"
      strokeWidth={40.114}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={494.269}
      cy={296.48}
      r={214.94}
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={36.795}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M604.317 185.899c60.88 60.865 60.88 159.672 0 220.64-60.88 60.864-159.711 60.864-220.695 0-60.879-60.864-60.879-159.671 0-220.64 60.984-60.968 159.763-60.968 220.695 0z"
      fill="url(#e)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M582.241 297.041a87.41 87.41 0 0 1-87.412 87.412 87.41 87.41 0 0 1-87.413-87.412 87.414 87.414 0 0 1 25.601-61.812 87.414 87.414 0 0 1 61.812-25.601 87.41 87.41 0 0 1 87.412 87.413z"
      fill="#6f381e"
    />
    <circle cx={476.691} cy={265.731} r={29.372} fill="#fff" />
    <path
      d="M191.64 345.432v-39.04 0c0-28.746 23.44-52.052 52.351-52.052v0c28.911 0 52.351 23.306 52.351 52.052v39.04"
      stroke="#2D2019"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M319.921 514.296h-151.4c-16.729 0-30.28-13.551-30.28-30.28v-105.98c0-16.73 13.551-30.28 30.28-30.28h151.4c16.73 0 30.28 13.55 30.28 30.28v105.98c0 16.729-13.55 30.28-30.28 30.28z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={13.552}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M243.226 467.352v-37.974m-.042-22.618c-6.165 0-11.169 5.003-11.124 11.168 0 6.165 5.003 11.169 11.169 11.169 6.165 0 11.168-5.004 11.168-11.169 0-6.165-5.003-11.168-11.213-11.168"
      stroke="#fff"
      strokeWidth={28.278}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={382.132}
        y1={762.497}
        x2={510.615}
        y2={-264.07}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={258.37}
        y1={359.929}
        x2={374.409}
        y2={-161.501}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={192.752}
        y1={322.603}
        x2={-25.841}
        y2={149.695}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={697.815}
        y1={426.556}
        x2={925.174}
        y2={215.31}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={500.622}
        y1={627.121}
        x2={491.001}
        y2={-199.245}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg250);
const Memo = memo(ForwardRef);
export default Memo;
