import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg393 = (
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
      d="M795.105 293.616c-27.019 13.403-62.88-3.83-62.88-3.83s7.97-38.957 35.003-52.341c27.019-13.403 62.865 3.812 62.865 3.812s-7.969 38.956-34.988 52.359z"
      fill="url(#a)"
    />
    <path
      d="M137.76 510.763c21.644 12.972 52.698.98 52.698.98s-4.061-33.02-25.718-45.977c-21.645-12.973-52.685-.996-52.685-.996s4.06 33.02 25.705 45.993z"
      fill="url(#b)"
    />
    <circle
      cx={741.942}
      cy={203.805}
      r={14.753}
      transform="rotate(180 741.942 203.805)"
      fill="#6f381e"
    />
    <circle
      r={13.831}
      transform="matrix(-1 0 0 1 70.83 204.863)"
      fill="#6f381e"
    />
    <circle
      r={6.454}
      transform="matrix(-1 0 0 1 590.455 354.454)"
      fill="#6f381e"
    />
    <circle
      r={8.299}
      transform="matrix(-1 0 0 1 548.03 528.723)"
      fill="#E1E4E5"
    />
    <circle
      r={11.987}
      transform="matrix(-1 0 0 1 96.247 413.149)"
      fill="#E1E4E5"
    />
    <circle
      r={9.123}
      transform="matrix(-1 0 0 1 226.123 106.123)"
      fill="#E1E4E5"
    />
    <circle
      r={9.108}
      transform="scale(1 -1) rotate(-75 -93.01 -196.02)"
      fill="#E1E4E5"
    />
    <circle
      r={12.117}
      transform="matrix(-1 0 0 1 331.366 80.766)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.32}
      ry={7.456}
      transform="matrix(-1 0 0 1 717.767 390.484)"
      fill="#E1E4E5"
    />
    <circle
      r={18.955}
      transform="matrix(0 1 1 0 534.955 124.955)"
      fill="#E1E4E5"
    />
    <path
      d="M788.449 338.987h.243c1.444 20.458 16.658 20.773 16.658 20.773s-16.776.327-16.776 23.966c0-23.639-16.777-23.966-16.777-23.966s15.208-.315 16.652-20.773zM255.781 507.931h.217c1.281 18.516 14.781 18.801 14.781 18.801s-14.887.296-14.887 21.69c0-21.394-14.886-21.69-14.886-21.69s13.494-.285 14.775-18.801z"
      fill="#E1E4E5"
    />
    <path
      d="M678.711 181.516c2.755 2.756 2.755 11.023 0 13.778-2.756 2.756-11.022 2.756-13.778 0-2.755-2.755-2.755-11.022 0-13.778 2.756-2.755 8.267-2.755 13.778 0m-90.933-88.183C546.444 65.778 496.844 52 450 52v0c-137.778 0-248 110.222-248 248m35.822 101.961c2.755 2.755 2.755 11.022 0 13.777-2.756 2.756-11.022 2.756-13.778 0-2.755-2.755-2.755-11.022 0-13.777 2.756-2.756 8.267-2.756 13.778 0m74.4 104.706C353.556 534.222 403.156 548 450 548v0c137.778 0 248-110.222 248-248"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m405.911 300-33.067 46.844c-5.511 5.512-5.511 11.023-5.511 16.534v33.067c0 8.266 5.511 13.777 13.778 13.777h140.533c8.267 0 13.778-5.511 13.778-13.777v-33.067c0-5.511-2.755-11.022-5.511-16.534L491.333 300l35.822-46.844c5.512-5.512 5.512-11.023 5.512-16.534v-33.066c0-8.267-5.512-13.778-13.778-13.778H381.111c-8.267 0-13.778 5.511-13.778 13.778v33.066c0 5.511 2.756 11.022 5.511 16.534L405.911 300z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m711.855 91.952-42.87 42.871M326.019 277.575l-42.871 42.87m186.871-205.87-42.871 42.87m-257.46 112.031-42.871 42.871m161.054 117.86L245 473.078m403.019-233.504-42.871 42.871M478.871 443 436 485.871M668.985 83.378l-17.149 17.148M283.148 269 266 286.148M427.148 106 410 123.148M126.817 260.902l-17.148 17.148M605.148 231 588 248.148m54.596 120.707-17.148 17.148M782.148 148 765 165.148m-44.57-30.326-17.148 17.148m-505.828-2.755-17.148 17.149m-2.043 145.982-17.149 17.148m135.331 143.583-17.148 17.148m377.297-207.78-17.149 17.148m-152 186.276-17.148 17.148"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={691.349}
        y1={335.423}
        x2={914.202}
        y2={159.146}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={221.519}
        y1={552.521}
        x2={47.358}
        y2={390.702}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg393);
const Memo = memo(ForwardRef);
export default Memo;
