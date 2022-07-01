import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg385 = (
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
    <circle
      r={18.158}
      transform="matrix(-1 0 0 1 172.158 139.408)"
      fill="#6f381e"
    />
    <circle
      r={8.474}
      transform="matrix(-1 0 0 1 761.446 256.824)"
      fill="#6f381e"
    />
    <circle
      r={10.895}
      transform="matrix(-1 0 0 1 178.895 453.144)"
      fill="#E1E4E5"
    />
    <circle
      r={15.737}
      transform="matrix(-1 0 0 1 503.058 549.595)"
      fill="#E1E4E5"
    />
    <circle
      r={11.977}
      transform="matrix(-1 0 0 1 237.313 73.175)"
      fill="#E1E4E5"
    />
    <circle
      r={13.316}
      transform="matrix(-1 0 0 1 739.316 157.565)"
      fill="#E1E4E5"
    />
    <circle
      r={11.957}
      transform="scale(1 -1) rotate(-75 -94.573 -223.351)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.236}
      ry={9.789}
      transform="matrix(-1 0 0 1 726.236 474.039)"
      fill="#E1E4E5"
    />
    <circle
      r={24.886}
      transform="scale(1 -1) rotate(-75 288.877 -464.815)"
      fill="#E1E4E5"
    />
    <path
      d="M715.862 365.25h.32c1.895 26.857 21.87 27.271 21.87 27.271s-22.026.43-22.026 31.464c0-31.034-22.026-31.464-22.026-31.464s19.966-.414 21.862-27.271zM306.953 473.821h.284c1.682 24.308 19.406 24.682 19.406 24.682s-19.544.389-19.544 28.477c0-28.088-19.544-28.477-19.544-28.477s17.716-.374 19.398-24.682z"
      fill="#E1E4E5"
    />
    <path
      d="M550.088 335.75c-144.36-13.603-43.5 195.5-103 188.5l-78.5-14-88-17.5-45.5-64-4.5-275 50-55.5 88-27h115.5l129 16.5 51.5 76.5 22 135.5c5.5 21 28 51.5-136.5 36z"
      fill="#6f381e"
    />
    <path
      d="M664.181 292.258v-96.707c0-66.763-54.121-120.884-120.883-120.884H349.884C283.121 74.667 229 128.788 229 195.551v193.414c0 66.762 54.121 120.883 120.884 120.883h96.707"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m349.884 171.369-24.176 24.177 24.176 24.177m72.532-48.354 24.177 24.177-24.177 24.177m-96.708 157.15h96.707m89.173-169.623h77m0 85h-263"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M681 401.773v42.613c0 41.689-26.18 79.006-65.702 93.647l-11.733 4.342a10.484 10.484 0 0 1-7.13 0l-11.756-4.342c-39.512-14.648-65.684-51.964-65.679-93.647v-42.613c-.003-8.739 5.732-16.471 14.17-19.103l60.759-18.742a20.328 20.328 0 0 1 12.142 0l60.759 18.742c8.438 2.632 14.173 10.364 14.17 19.103z"
      fill="#6f381e"
    />
    <path
      d="m638 432-41.875 42L571 448.8"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg385);
const Memo = memo(ForwardRef);
export default Memo;
