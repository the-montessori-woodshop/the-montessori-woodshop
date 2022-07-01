import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg459 = (
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
      d="M592.274 459.911h-17.992c-18.94 0-36.932 7.339-50.19 20.596l-40.483 40.011c-18.466 18.23-48.532 18.23-66.998 0l-40.483-40.011c-13.258-13.257-31.487-20.596-50.189-20.596h-17.756c-39.299 0-71.023-31.486-71.023-70.312V131.312C237.16 92.486 268.884 61 308.183 61h284.091c39.299 0 71.023 31.486 71.023 70.312v258.287c0 38.589-31.724 70.312-71.023 70.312z"
      fill="#6f381e"
    />
    <path
      d="m412.505 344.502 35.887 27.862c4.681 4.681 15.157 6.908 22.067 6.908h44.134c13.82 0 28.977-10.475 32.543-24.295l27.862-84.479c5.796-16.272-4.681-30.091-22.067-30.091h-46.363c-6.909 0-12.704-5.795-11.59-13.82l5.795-37.001c2.229-10.477-4.681-22.068-15.157-25.411-9.362-3.567-20.952 1.114-25.41 8.024l-47.478 70.66"
      stroke="#fff"
      strokeWidth={24}
      strokeMiterlimit={10}
    />
    <path
      d="M324.146 331.888v-88.362c0-12.672 10.975-17.186 36.82-17.186h18.41c25.845 0 36.82 4.514 36.82 17.186v88.362c0 12.672-10.975 17.185-36.82 17.185h-18.41c-25.845 0-36.82-4.513-36.82-17.185z"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M801.986 302.268c-17.204 8.534-40.038-2.44-40.038-2.44s5.075-24.804 22.288-33.327c17.204-8.534 40.029 2.427 40.029 2.427s-5.075 24.805-22.279 33.34z"
      fill="url(#a)"
    />
    <path
      d="M107.953 332.816c23.447 14.052 57.086 1.062 57.086 1.062s-4.399-35.769-27.86-49.806c-23.446-14.053-57.07-1.078-57.07-1.078s4.398 35.769 27.844 49.822z"
      fill="url(#b)"
    />
    <circle
      cx={560.836}
      cy={98.971}
      r={19.748}
      transform="rotate(180 560.836 98.971)"
      fill="#6f381e"
    />
    <circle
      cx={186.401}
      cy={262.962}
      r={8.456}
      transform="rotate(180 186.401 262.962)"
      fill="#6f381e"
    />
    <circle
      cx={713.214}
      cy={244.473}
      r={16.256}
      transform="rotate(180 713.214 244.473)"
      fill="#6f381e"
    />
    <circle
      r={8.64}
      transform="matrix(-1 0 0 1 756.024 353.758)"
      fill="#6f381e"
    />
    <circle
      r={11.108}
      transform="matrix(-1 0 0 1 585.432 526.995)"
      fill="#E1E4E5"
    />
    <circle
      r={11.42}
      transform="matrix(-1 0 0 1 300.366 528.452)"
      fill="#E1E4E5"
    />
    <circle
      r={6.011}
      transform="matrix(-1 0 0 1 702.087 476.229)"
      fill="#E1E4E5"
    />
    <circle
      r={13.577}
      transform="matrix(-1 0 0 1 207.397 349.526)"
      fill="#E1E4E5"
    />
    <circle
      r={12.192}
      transform="scale(1 -1) rotate(-75 -73.088 -152.692)"
      fill="#E1E4E5"
    />
    <circle
      r={16.219}
      transform="matrix(-1 0 0 1 177.595 117.8)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.476}
      ry={9.981}
      transform="matrix(-1 0 0 1 808.619 190.061)"
      fill="#E1E4E5"
    />
    <circle
      r={11.055}
      transform="scale(1 -1) rotate(-75 251.756 -513.846)"
      fill="#E1E4E5"
    />
    <path
      d="M185.853 183.66h.177c1.053 14.911 12.142 15.141 12.142 15.141s-12.228.238-12.228 17.468c0-17.23-12.229-17.468-12.229-17.468s11.085-.23 12.138-15.141z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={735.921}
        y1={328.888}
        x2={877.82}
        y2={216.645}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={198.686}
        y1={378.05}
        x2={10.025}
        y2={202.759}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg459);
const Memo = memo(ForwardRef);
export default Memo;
