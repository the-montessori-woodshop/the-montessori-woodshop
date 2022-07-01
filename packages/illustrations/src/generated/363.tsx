import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg363 = (
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
      d="M222.786 371.03c2.585 65.596 142.639 186.321 295.297 122.437 70.999-29.714 61.243-67.052 112.17-122.249 30.355-32.899 75.873-59.895 85.057-104.435 7.936-38.445-2.854-77.955-25.148-102.219-50.14-54.569-144.004-86.346-224.075 14.566-80.072 100.912-249.95 22.722-243.301 191.9z"
      fill="url(#a)"
    />
    <path
      d="M196.516 194.149c12.248 21.858 39.071 24.861 82.043 20.708 32.318-3.13 61.789-5.552 94.11-23.174 22.622-12.325 40.529-29 53.599-45.196 14.163-17.546 33.932-37.57 24.241-57.464-13.318-27.328-90.334-50.344-165.119-12.705-82.152 41.358-100.855 96.468-88.874 117.831z"
      fill="url(#b)"
    />
    <path
      d="M96.873 259.719c31.75 15.749 73.89-4.502 73.89-4.502s-9.365-45.777-41.132-61.505c-31.75-15.75-73.873 4.479-73.873 4.479s9.365 45.778 41.115 61.528z"
      fill="url(#c)"
    />
    <path
      d="M808.276 308.786c-17.25 10.339-41.999.781-41.999.781s3.236-26.316 20.497-36.643c17.25-10.338 41.988-.793 41.988-.793s-3.236 26.316-20.486 36.655z"
      fill="url(#d)"
    />
    <circle cx={175.603} cy={475.029} r={9.752} fill="#E1E4E5" />
    <circle cx={810.712} cy={402.763} r={14.086} fill="#E1E4E5" />
    <circle cx={125.944} cy={378.617} r={10.72} fill="#E1E4E5" />
    <circle cx={185.962} cy={94.584} r={11.919} fill="#E1E4E5" />
    <circle
      cx={849.297}
      cy={169.857}
      r={10.703}
      transform="rotate(90 849.297 169.857)"
      fill="#E1E4E5"
    />
    <circle cx={535.549} cy={66.791} r={14.238} fill="#E1E4E5" />
    <ellipse cx={164.963} cy={319.235} rx={10.953} ry={8.762} fill="#E1E4E5" />
    <path
      d="M729.682 106.332h-.156c-.924 13.091-10.659 13.292-10.659 13.292s10.735.21 10.735 15.336c0-15.126 10.735-15.336 10.735-15.336s-9.731-.201-10.655-13.292zm16.31 342.663h-.15c-.887 13.051-10.234 13.252-10.234 13.252s10.307.209 10.307 15.29c0-15.081 10.307-15.29 10.307-15.29s-9.343-.201-10.23-13.252z"
      fill="#E1E4E5"
    />
    <circle cx={449.454} cy={300.528} r={245.952} fill="#6f381e" />
    <mask
      id="e"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={203}
      y={54}
      width={493}
      height={493}
    >
      <circle cx={449.454} cy={300.528} r={245.952} fill="#6f381e" />
    </mask>
    <g mask="url(#e)">
      <rect x={279} y={190} width={342} height={362} rx={40} fill="#fff" />
      <path
        d="M368.528 380.511h162.839m-162.839 44.177h162.839M395 469h110"
        stroke="#E1E4E5"
        strokeWidth={14.431}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m507.107 258-72.066 71.934-43.24-43.16"
        stroke="#6f381e"
        strokeWidth={27.44}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={412.016}
        y1={747.91}
        x2={549.592}
        y2={-351.307}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={279.023}
        y1={335.808}
        x2={388.186}
        y2={-154.726}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={218.796}
        y1={308.846}
        x2={-43.078}
        y2={101.702}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={741.523}
        y1={342.066}
        x2={880.324}
        y2={213.101}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg363);
const Memo = memo(ForwardRef);
export default Memo;
