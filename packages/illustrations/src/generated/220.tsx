import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg220 = (
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
      d="M676.711 404.143c-2.413 61.215-133.113 173.877-275.575 114.26-66.258-27.729-57.153-62.574-104.679-114.085-28.328-30.701-70.807-55.894-79.377-97.46-7.406-35.878 2.664-72.748 23.469-95.392 46.791-50.925 134.386-80.58 209.11 13.593 74.724 94.172 233.257 21.205 227.052 179.084z"
      fill="url(#a)"
    />
    <path
      d="M713.606 216.611c-13.009 23.218-41.5 26.408-87.145 21.996-34.328-3.325-65.632-5.897-99.963-24.615-24.03-13.091-43.05-30.804-56.933-48.007-15.044-18.637-36.042-39.907-25.748-61.038 14.146-29.028 95.952-53.475 175.388-13.495 87.261 43.93 107.127 102.468 94.401 125.159z"
      fill="url(#b)"
    />
    <path
      d="M791.055 275.308c-26.483 13.137-61.632-3.755-61.632-3.755s7.812-38.183 34.309-51.302c26.482-13.137 61.618 3.736 61.618 3.736s-7.812 38.184-34.295 51.321z"
      fill="url(#c)"
    />
    <path
      d="M123.143 359.672c14.388 8.624 35.031.652 35.031.652s-2.699-21.951-17.096-30.564c-14.389-8.624-35.023-.662-35.023-.662s2.699 21.95 17.088 30.574z"
      fill="url(#d)"
    />
    <circle
      r={8.134}
      transform="matrix(-1 0 0 1 744.583 496.369)"
      fill="#E1E4E5"
    />
    <circle
      r={11.749}
      transform="matrix(-1 0 0 1 121.111 438.059)"
      fill="#E1E4E5"
    />
    <circle
      r={8.942}
      transform="matrix(-1 0 0 1 786.004 415.951)"
      fill="#E1E4E5"
    />
    <circle
      r={9.941}
      transform="matrix(-1 0 0 1 691.112 139.522)"
      fill="#E1E4E5"
    />
    <circle
      r={8.927}
      transform="matrix(0 1 1 0 88.927 243.791)"
      fill="#E1E4E5"
    />
    <circle
      r={11.876}
      transform="matrix(-1 0 0 1 378.733 77.613)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.136}
      ry={7.308}
      transform="matrix(-1 0 0 1 753.458 366.42)"
      fill="#E1E4E5"
    />
    <path
      d="M188.699 190.804h.13c.771 10.919 8.891 11.087 8.891 11.087s-8.954.175-8.954 12.791c0-12.616-8.955-12.791-8.955-12.791s8.117-.168 8.888-11.087zm-13.604 285.817h.125c.739 10.887 8.536 11.054 8.536 11.054s-8.597.175-8.597 12.754c0-12.579-8.597-12.754-8.597-12.754s7.793-.167 8.533-11.054z"
      fill="#E1E4E5"
    />
    <path
      d="M588.147 405.191v160.246H359.575v-24.044c0-22.373-21.262-30.428-71.519-27.048-40.206 2.705-52.834-13.04-54.123-21.251V390.218l-36.243-12.074c2.739-68.906 28.898-217.054 111.628-258.397 103.414-51.68 197.784-28.257 259.983 64.237 45.88 68.225 29.8 169.85 18.846 221.207z"
      fill="#2D2019"
    />
    <circle cx={314.779} cy={291.875} r={19.16} fill="#fff" />
    <path fill="#2D2019" d="M381.839 507.957h204.373v45.771H381.839z" />
    <path
      d="m653.271 507.957-65.463 57.48-11.709-61.205 77.172 3.725z"
      fill="#2D2019"
    />
    <path
      d="M653.078 347.711v160.246H424.506v-24.044c0-22.373-21.263-30.428-71.519-27.047-40.206 2.704-52.835-13.041-54.123-21.252V332.739l-36.243-12.075c2.738-68.906 28.898-217.053 111.628-258.397 103.413-51.68 197.784-28.256 259.983 64.237 45.879 68.225 29.799 169.85 18.846 221.207z"
      fill="#6f381e"
    />
    <circle cx={379.71} cy={234.396} r={19.16} fill="#fff" />
    <defs>
      <linearGradient
        id="a"
        x1={500.118}
        y1={755.853}
        x2={371.731}
        y2={-269.953}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={625.968}
        y1={367.081}
        x2={510.016}
        y2={-153.962}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={689.358}
        y1={316.285}
        x2={907.789}
        y2={143.505}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={178.822}
        y1={387.431}
        x2={63.047}
        y2={279.861}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg220);
const Memo = memo(ForwardRef);
export default Memo;
