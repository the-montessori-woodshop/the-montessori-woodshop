import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg438 = (
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
      d="M758.249 344.993c-11.872 5.889-27.629-1.683-27.629-1.683s3.502-17.117 15.38-22.997c11.872-5.89 27.622 1.674 27.622 1.674s-3.502 17.117-15.373 23.006z"
      fill="url(#a)"
    />
    <path
      d="M165.682 199.946c17.871 10.711 43.511.81 43.511.81s-3.353-27.264-21.235-37.962c-17.871-10.711-43.5-.822-43.5-.822s3.353 27.263 21.224 37.974z"
      fill="url(#b)"
    />
    <circle
      cx={178.788}
      cy={264.615}
      r={13.875}
      transform="rotate(180 178.788 264.615)"
      fill="#6f381e"
    />
    <circle
      r={15.801}
      transform="matrix(-1 0 0 1 228.335 496.152)"
      fill="#6f381e"
    />
    <circle
      r={7.374}
      transform="matrix(-1 0 0 1 588.215 195.695)"
      fill="#6f381e"
    />
    <circle
      r={9.481}
      transform="matrix(-1 0 0 1 218.998 116.858)"
      fill="#E1E4E5"
    />
    <circle
      r={13.694}
      transform="matrix(-1 0 0 1 134.694 354.843)"
      fill="#E1E4E5"
    />
    <circle
      r={6.969}
      transform="matrix(-1 0 0 1 695.996 167.766)"
      fill="#E1E4E5"
    />
    <circle
      r={10.405}
      transform="matrix(0 1 1 0 706.051 250.619)"
      fill="#E1E4E5"
    />
    <circle
      r={6.969}
      transform="matrix(-1 0 0 1 320.958 109.97)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.648}
      ry={8.519}
      transform="matrix(-1 0 0 1 684.549 496.433)"
      fill="#E1E4E5"
    />
    <path
      d="M205.857 410.892h.145c.863 12.689 9.95 12.885 9.95 12.885s-10.021.203-10.021 14.865c0-14.662-10.02-14.865-10.02-14.865s9.083-.196 9.946-12.885z"
      fill="#E1E4E5"
    />
    <path
      d="M667.598 257.546v105.966c0 105.967-42.386 148.353-148.353 148.353H392.086c-105.967 0-148.353-42.386-148.353-148.353V236.353C243.733 130.387 286.119 88 392.086 88h105.966"
      fill="#6f381e"
    />
    <path
      d="M667.598 257.546v105.966c0 105.967-42.386 148.353-148.353 148.353H392.086c-105.967 0-148.353-42.386-148.353-148.353V236.353C243.733 130.387 286.119 88 392.086 88h105.966"
      stroke="#6f381e"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M392.893 296.316a17.225 17.225 0 0 0-3.131 0c-22.587-.76-40.524-19.287-40.524-42.089 0-23.277 18.791-42.184 42.137-42.184 23.251 0 42.137 18.907 42.137 42.184-.095 22.802-18.032 41.329-40.619 42.089zm-48.034 46.014c-23.121 15.343-23.121 40.348 0 55.597 26.275 17.427 69.364 17.427 95.638 0 23.121-15.344 23.121-40.348 0-55.597-26.178-17.333-69.268-17.333-95.638 0z"
      stroke="#fff"
      strokeWidth={25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M524.681 88.157h71.379c53.535 0 71.38 17.845 71.38 71.38v71.38L524.681 88.157z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m575.303 398.142 27.89-27.89-27.89-27.89 27.89 27.89h-83.671"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={712.66}
        y1={363.362}
        x2={810.578}
        y2={285.909}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={234.839}
        y1={234.425}
        x2={91.04}
        y2={100.816}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg438);
const Memo = memo(ForwardRef);
export default Memo;
