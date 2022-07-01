import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg281 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M684.111 166.5H467.893a33.43 33.43 0 0 1-27.826-14.907l-46.923-70.652a33.428 33.428 0 0 0-27.926-14.94H215.889C178.947 66 149 95.996 149 133v335c0 37.003 29.947 67 66.889 67h468.222C721.053 535 751 505.003 751 468V233.5c0-37.003-29.947-67-66.889-67z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect x={201} y={370} width={114} height={114} rx={57} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M284 450.58v3.71a3.713 3.713 0 0 1-3.714 3.71h-44.572a3.713 3.713 0 0 1-3.714-3.71v-3.769C232 439.294 244.844 432 258 432s26 7.298 26 18.521m-16.954-51.713c5.272 5.076 5.272 13.308 0 18.384-5.272 5.077-13.82 5.077-19.092 0-5.272-5.076-5.272-13.308 0-18.384 5.272-5.077 13.82-5.077 19.092 0z"
      fill="#fff"
    />
    <rect x={345} y={379} width={347} height={16} rx={8} fill="#E1E4E5" />
    <rect x={345} y={418} width={347} height={16} rx={8} fill="#E1E4E5" />
    <rect x={345} y={457} width={347} height={16} rx={8} fill="#E1E4E5" />
    <rect x={201} y={224} width={114} height={114} rx={57} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M284 304.58v3.71a3.713 3.713 0 0 1-3.714 3.71h-44.572a3.713 3.713 0 0 1-3.714-3.71v-3.769C232 293.294 244.844 286 258 286s26 7.298 26 18.521m-16.954-51.713c5.272 5.076 5.272 13.308 0 18.384-5.272 5.077-13.82 5.077-19.092 0-5.272-5.076-5.272-13.308 0-18.384 5.272-5.077 13.82-5.077 19.092 0z"
      fill="#fff"
    />
    <rect x={345} y={233} width={347} height={16} rx={8} fill="#E1E4E5" />
    <rect x={345} y={272} width={347} height={16} rx={8} fill="#E1E4E5" />
    <rect x={345} y={311} width={347} height={16} rx={8} fill="#E1E4E5" />
  </svg>
);

const ForwardRef = forwardRef(Svg281);
const Memo = memo(ForwardRef);
export default Memo;
