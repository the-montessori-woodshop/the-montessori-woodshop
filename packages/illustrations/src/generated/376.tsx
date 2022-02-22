import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg376 = (
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
      r={121.77}
      transform="matrix(-1 0 0 1 430.321 256.487)"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m539.769 337.661 65.158 59.128a27.404 27.404 0 1 1-39.366 38.076l-55.775-65.899"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M85 88.772h272.925M85 439.872h296.24m152.235-351.1H816M85 160.089h176.921M85 511.189h433.388M85 368.554h187.893m325.041-208.465h101.49m-71.317 71.317H816m-661.054 0h72.688m432.017 71.317H816m-648.711 0h60.345m370.3 208.466H816m-128.919-71.317H816m-128.919-76.804H816"
      stroke="#E1E4E5"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg376);
const Memo = memo(ForwardRef);
export default Memo;
