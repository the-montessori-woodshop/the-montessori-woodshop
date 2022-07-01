import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg351 = (
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
      d="M607.932 435.664c-8.411 4.173-19.574-1.192-19.574-1.192s2.481-12.127 10.896-16.293c8.411-4.172 19.57 1.186 19.57 1.186s-2.481 12.127-10.892 16.299z"
      fill="url(#a)"
    />
    <path
      d="M196.334 362.192c12.282 7.361 29.902.556 29.902.556s-2.304-18.736-14.593-26.089c-12.282-7.36-29.895-.564-29.895-.564s2.304 18.736 14.586 26.097z"
      fill="url(#b)"
    />
    <circle
      cx={535.358}
      cy={499.297}
      r={5.712}
      transform="rotate(180 535.358 499.297)"
      fill="#6f381e"
    />
    <circle
      r={8.527}
      transform="matrix(-1 0 0 1 233.008 418.639)"
      fill="#6f381e"
    />
    <circle
      r={5.709}
      transform="matrix(-1 0 0 1 194.449 256.087)"
      fill="#6f381e"
    />
    <circle
      r={8.07}
      transform="matrix(-1 0 0 1 596.912 467.662)"
      fill="#E1E4E5"
    />
    <circle
      r={8.056}
      transform="scale(1 -1) rotate(-75 -17.601 -258.45)"
      fill="#E1E4E5"
    />
    <circle
      r={10.717}
      transform="matrix(-1 0 0 1 331.912 134.064)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.244}
      ry={6.595}
      transform="matrix(-1 0 0 1 680.709 348.432)"
      fill="#E1E4E5"
    />
    <circle
      r={6.697}
      transform="matrix(0 1 1 0 577.495 155.885)"
      fill="#E1E4E5"
    />
    <path
      d="M328.895 483.208h.112c.668 9.825 7.704 9.976 7.704 9.976s-7.758.157-7.758 11.509c0-11.352-7.759-11.509-7.759-11.509s7.033-.151 7.701-9.976z"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="m466.507 503.674 188.886-188.928c8.208-8.208 8.208-21.517 0-29.745L466.507 96.073c-8.166-8.187-21.559-8.187-29.725 0L247.897 285c-8.208 8.207-8.208 21.516 0 29.745l188.885 188.928c8.166 8.166 21.559 8.166 29.725 0z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="m456.452 501.008 79.161-182.966L456.599 94.75c-1.659-4.66-8.25-4.66-9.887 0l-79.035 223.292 79.161 182.987c1.805 4.198 7.809 4.198 9.614-.021v0z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m241.83 299.314 137.056 22.42h145.517l137.056-22.42"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96.772 109.878c-8.158 0-14.772 6.614-14.772 14.773 0 8.158 6.614 14.772 14.772 14.772h147.724c8.158 0 14.772-6.614 14.772-14.772 0-8.159-6.614-14.773-14.772-14.773H96.772zm0 59.09c-8.158 0-14.772 6.613-14.772 14.772 0 8.159 6.614 14.772 14.772 14.772h59.09c8.158 0 14.772-6.613 14.772-14.772 0-8.159-6.614-14.772-14.772-14.772h-59.09zm0 342.569c-8.158 0-14.772-6.614-14.772-14.773 0-8.158 6.614-14.772 14.772-14.772h147.724c8.158 0 14.772 6.614 14.772 14.772 0 8.159-6.614 14.773-14.772 14.773H96.772zm0-59.09c-8.158 0-14.772-6.614-14.772-14.772 0-8.159 6.614-14.773 14.772-14.773h59.09c8.158 0 14.772 6.614 14.772 14.773 0 8.158-6.614 14.772-14.772 14.772h-59.09zm558.732-342.569c-8.159 0-14.772 6.614-14.772 14.773 0 8.158 6.613 14.772 14.772 14.772h147.724c8.158 0 14.772-6.614 14.772-14.772 0-8.159-6.614-14.773-14.772-14.773H655.504zm0 59.09c-8.159 0-14.772 6.613-14.772 14.772 0 8.159 6.614 14.772 14.772 14.772h59.089c8.159 0 14.773-6.613 14.773-14.772 0-8.159-6.614-14.772-14.773-14.772h-59.089zm136.504 342.569c8.159 0 14.773-6.614 14.773-14.773 0-8.158-6.614-14.772-14.773-14.772H644.285c-8.159 0-14.773 6.614-14.773 14.772 0 8.159 6.614 14.773 14.773 14.773h147.723zm0-59.09c8.159 0 14.773-6.614 14.773-14.772 0-8.159-6.614-14.773-14.773-14.773h-59.089c-8.159 0-14.773 6.614-14.773 14.773 0 8.158 6.614 14.772 14.773 14.772h59.089z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={575.634}
        y1={448.679}
        x2={645.006}
        y2={393.805}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={243.86}
        y1={385.886}
        x2={145.038}
        y2={294.067}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg351);
const Memo = memo(ForwardRef);
export default Memo;
