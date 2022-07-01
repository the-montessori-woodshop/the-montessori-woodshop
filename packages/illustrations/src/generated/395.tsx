import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg395 = (
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
      r={17.424}
      transform="matrix(-1 0 0 1 182.494 151.185)"
      fill="#6f381e"
    />
    <circle
      r={8.131}
      transform="matrix(-1 0 0 1 747.949 263.853)"
      fill="#6f381e"
    />
    <circle
      r={10.454}
      transform="matrix(-1 0 0 1 188.958 452.234)"
      fill="#E1E4E5"
    />
    <circle
      r={11.493}
      transform="matrix(-1 0 0 1 245.013 87.632)"
      fill="#E1E4E5"
    />
    <circle
      r={12.777}
      transform="matrix(-1 0 0 1 726.714 168.608)"
      fill="#E1E4E5"
    />
    <circle
      r={11.474}
      transform="scale(1 -1) rotate(-75 -93.447 -234.298)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.742}
      ry={9.393}
      transform="matrix(-1 0 0 1 714.164 472.283)"
      fill="#E1E4E5"
    />
    <circle
      r={23.879}
      transform="scale(1 -1) rotate(-75 274.495 -465.996)"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M622.189 132.672c95.463 95.463 95.463 250.239 0 345.701-95.463 95.463-250.239 95.463-345.701 0-95.463-95.463-95.463-250.238 0-345.701 95.463-95.463 250.239-95.463 345.701 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m474.407 255.382 83.574 33.435-150.417 167.121 16.704-116.982-83.574-33.435 150.417-150.417-16.704 100.278z"
      fill="#fff"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg395);
const Memo = memo(ForwardRef);
export default Memo;
