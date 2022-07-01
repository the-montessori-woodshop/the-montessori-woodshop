import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg383 = (
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
    <circle cx={452} cy={305} r={246.5} stroke="url(#a)" strokeWidth={3} />
    <circle
      cx={732.863}
      cy={191.862}
      r={13.862}
      transform="rotate(180 732.863 191.862)"
      fill="#6f381e"
    />
    <circle
      cx={209.926}
      cy={365.925}
      r={12.925}
      transform="rotate(180 209.926 365.925)"
      fill="#6f381e"
    />
    <circle
      r={12.996}
      transform="matrix(-1 0 0 1 165.996 193.686)"
      fill="#6f381e"
    />
    <circle
      r={6.065}
      transform="matrix(-1 0 0 1 739.066 305.065)"
      fill="#6f381e"
    />
    <circle
      r={7.798}
      transform="matrix(-1 0 0 1 630.797 478.798)"
      fill="#E1E4E5"
    />
    <circle
      r={11.263}
      transform="matrix(-1 0 0 1 189.821 438.463)"
      fill="#E1E4E5"
    />
    <circle
      r={8.572}
      transform="matrix(-1 0 0 1 277.572 129.572)"
      fill="#E1E4E5"
    />
    <circle
      r={9.53}
      transform="matrix(-1 0 0 1 295.531 371.53)"
      fill="#E1E4E5"
    />
    <circle
      r={8.558}
      transform="scale(1 -1) rotate(-75 -152.188 -447.405)"
      fill="#E1E4E5"
    />
    <circle
      r={11.385}
      transform="matrix(-1 0 0 1 565.385 126.385)"
      fill="#E1E4E5"
    />
    <circle
      r={14.897}
      transform="scale(1 -1) rotate(-75 248.456 -413.172)"
      fill="#E1E4E5"
    />
    <path
      d="M692.874 416.43h.229c1.357 19.222 15.653 19.518 15.653 19.518s-15.764.308-15.764 22.519c0-22.211-15.764-22.519-15.764-22.519s14.29-.296 15.646-19.518z"
      fill="#E1E4E5"
    />
    <path
      d="M450 63v88m0 0v383m-44-238.5H254M646 340H494"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M402.106 285.15c4.209 7.76 5.948 16.776 4.249 25.42C399.359 346.146 367.822 373 330 373s-69.359-26.854-76.355-62.43c-1.699-8.644.04-17.66 4.249-25.42L329.98 152l72.126 133.15v0zm240.001 44.603c4.208 7.794 5.947 16.852 4.248 25.534C639.341 391.025 607.827 418 569.99 418c-37.836 0-69.35-26.975-76.345-62.713-1.699-8.682.04-17.74 4.248-25.534L569.99 196l72.117 133.753z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M330 151.66v0a340.299 340.299 0 0 1 226.787 37.009L570 196m53 341.5H277"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={462.576}
        y1={831.086}
        x2={447.282}
        y2={-482.564}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg383);
const Memo = memo(ForwardRef);
export default Memo;
