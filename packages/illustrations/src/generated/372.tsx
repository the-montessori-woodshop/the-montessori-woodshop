import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg372 = (
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
      clipRule="evenodd"
      d="M470.076 90.074c-109.027 0-197.355 88.328-197.355 197.355-72.659 0-131.544 58.885-131.544 131.544 0 72.659 58.885 131.545 131.544 131.545h361.708c90.805 0 164.431-73.627 164.431-164.431 0-83.182-62.02-151.237-142.223-162.186-26.425-77.805-99.935-133.827-186.561-133.827z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m548.619 301.237-96.109 95.061-57.666-57.036"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={789.848}
      cy={168.102}
      r={8.341}
      transform="rotate(180 789.848 168.102)"
      fill="#6f381e"
    />
    <circle
      r={12.453}
      transform="matrix(-1 0 0 1 229.833 457.103)"
      fill="#6f381e"
    />
    <circle
      r={8.337}
      transform="matrix(-1 0 0 1 812.663 264.319)"
      fill="#6f381e"
    />
    <circle
      r={11.784}
      transform="matrix(-1 0 0 1 801.203 538.963)"
      fill="#E1E4E5"
    />
    <circle
      r={14.813}
      transform="matrix(-1 0 0 1 712.649 145.396)"
      fill="#E1E4E5"
    />
    <circle
      r={11.765}
      transform="scale(1 -1) rotate(-75 -45 -236.26)"
      fill="#E1E4E5"
    />
    <circle
      r={15.651}
      transform="matrix(-1 0 0 1 257.903 104.189)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.039}
      ry={9.632}
      transform="matrix(-1 0 0 1 668.484 444.9)"
      fill="#E1E4E5"
    />
    <circle
      r={19.216}
      transform="matrix(0 1 1 0 637.745 69.316)"
      fill="#E1E4E5"
    />
    <path
      d="M89.831 273.153h.172c1.015 14.39 11.717 14.612 11.717 14.612s-11.8.23-11.8 16.857c0-16.627-11.802-16.857-11.802-16.857s10.698-.222 11.713-14.612z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg372);
const Memo = memo(ForwardRef);
export default Memo;
