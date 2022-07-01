import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg495 = (
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
      d="m358.024 529.218 92.975-46.487V413m92.974 116.22-92.975-46.488"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M309.212 418.654h283.34c44.163 0 67.406-23.244 67.406-67.407V70H241.573v281.247c.233 44.163 23.477 67.407 67.639 67.407z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M218.563 70h464.871"
      stroke="#6f381e"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M356.546 364.608v-37.126m93.975 37.126v-75.412m93.975 75.412V250.91m0-111.379-8.443 9.902c-46.804 54.646-109.576 93.337-179.507 110.758"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
    />
    <path
      d="M491.128 139.531h53.368V192.9"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M748.757 317.135c-19.025 9.437-44.276-2.697-44.276-2.697s5.611-27.431 24.647-36.856c19.025-9.437 44.266 2.685 44.266 2.685s-5.612 27.43-24.637 36.868z"
      fill="url(#a)"
    />
    <path
      d="M149.661 328.773c17.774 10.653 43.274.805 43.274.805s-3.334-27.115-21.119-37.755c-17.774-10.653-43.263-.817-43.263-.817s3.334 27.115 21.108 37.767z"
      fill="url(#b)"
    />
    <circle
      r={12.955}
      transform="matrix(-1 0 0 1 603.939 484.381)"
      fill="#E1E4E5"
    />
    <circle
      r={18.713}
      transform="matrix(-1 0 0 1 190.869 455.333)"
      fill="#E1E4E5"
    />
    <circle
      r={14.242}
      transform="matrix(-1 0 0 1 723.565 419.537)"
      fill="#E1E4E5"
    />
    <circle
      r={15.834}
      transform="matrix(-1 0 0 1 725.156 124.121)"
      fill="#E1E4E5"
    />
    <circle
      r={14.219}
      transform="scale(1 -1) rotate(-75 -58.552 -184.085)"
      fill="#E1E4E5"
    />
    <circle
      r={5.918}
      transform="matrix(-1 0 0 1 196.636 124.646)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={14.551}
      ry={11.641}
      transform="matrix(-1 0 0 1 295.764 485.386)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={675.698}
        y1={346.573}
        x2={832.618}
        y2={222.449}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={218.441}
        y1={363.063}
        x2={75.426}
        y2={230.183}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg495);
const Memo = memo(ForwardRef);
export default Memo;
