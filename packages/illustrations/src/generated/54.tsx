import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg54 = (
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
      d="M274.866 167c-36.917 0-67.117 30.234-67.117 67.192 0 36.958 30.2 67.192 67.117 67.192 7.406 0 13.471 6.072 13.471 13.486 0 7.414-6.065 13.486-13.471 13.486h-35.12c-18.009 0-32.746 14.754-32.746 32.783 0 18.029 14.737 32.783 32.746 32.783 15.575 0 28.32 12.759 28.32 28.352 0 28.449 23.251 51.726 51.669 51.726h303.31c36.917 0 67.117-30.234 67.117-67.192 0-36.958-30.2-67.192-67.117-67.192h-6.492c-7.406 0-13.471-6.064-13.471-13.486 0-7.414 6.057-13.486 13.471-13.486h43.701c18.009 0 32.746-14.754 32.746-32.783 0-18.007-14.699-32.745-32.679-32.783h-35.164c-15.576 0-28.321-12.759-28.321-28.352 0-28.449-23.251-51.726-51.668-51.726H274.866z"
      fill="url(#a)"
    />
    <rect x={297} y={76} width={306} height={448} rx={40} fill="#6f381e" />
    <path
      d="M354 306h191m-191 48h191m-157 48h124"
      stroke="#fff"
      strokeWidth={22.017}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M412 252.87v5.565c0 3.072 2.464 5.565 5.5 5.565h66c3.036 0 5.5-2.493 5.5-5.565v-5.654c0-16.84-19.019-27.781-38.5-27.781S412 235.946 412 252.781m24.711-77.07c-7.615 7.616-7.615 19.962 0 27.578 7.616 7.615 19.962 7.615 27.578 0 7.615-7.616 7.615-19.962 0-27.578-7.616-7.615-19.962-7.615-27.578 0z"
      fill="#fff"
    />
    <rect
      x={263.437}
      y={476.527}
      width={29.686}
      height={3.459}
      rx={1.729}
      transform="rotate(135 263.437 476.527)"
      fill="#E1E4E5"
    />
    <rect
      x={252.055}
      y={476.446}
      width={11.022}
      height={3.459}
      rx={1.729}
      transform="rotate(135 252.055 476.446)"
      fill="#E1E4E5"
    />
    <rect
      x={276.904}
      y={120.008}
      width={35.344}
      height={4.118}
      rx={2.059}
      transform="rotate(135 276.904 120.008)"
      fill="#E1E4E5"
    />
    <rect
      x={263.353}
      y={119.912}
      width={13.123}
      height={4.118}
      rx={2.059}
      transform="rotate(135 263.353 119.912)"
      fill="#E1E4E5"
    />
    <rect
      x={622}
      y={430.426}
      width={48.685}
      height={5.672}
      rx={2.836}
      transform="rotate(-45 622 430.426)"
      fill="#E1E4E5"
    />
    <rect
      x={640.666}
      y={430.559}
      width={18.077}
      height={5.672}
      rx={2.836}
      transform="rotate(-45 640.666 430.559)"
      fill="#E1E4E5"
    />
    <path
      d="M680.043 188.958c-20.113 17.427-54.556 10.642-54.556 10.642s-1.813-35.037 18.315-52.451c20.113-17.427 54.54-10.655 54.54-10.655s1.813 35.038-18.299 52.464z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={460.362}
        y1={646.122}
        x2={454.382}
        y2={-167.03}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={600.672}
        y1={247.627}
        x2={752.013}
        y2={47.748}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg54);
const Memo = memo(ForwardRef);
export default Memo;
