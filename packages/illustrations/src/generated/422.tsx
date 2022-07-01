import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg422 = (
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
      d="M467.554 551.058v.121"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M506.868 229.964c5.563 20.397-3.708 38.939-18.542 48.211v37.085c0 12.979-11.126 22.251-22.251 22.251-12.98 0-22.251-11.126-22.251-22.251v-37.085c-12.98-7.417-20.397-22.251-20.397-37.085 0-27.814 25.959-50.065 55.627-42.648 11.126 5.563 24.106 16.688 27.814 31.522z"
      fill="#6f381e"
    />
    <path
      d="M671.671 200.478C643.54 113.919 561.308 49 463.93 49c-119.019 0-216.398 97.379-216.398 216.398 0 119.018 97.379 216.397 216.398 216.397 97.378 0 179.61-62.755 205.577-151.478"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m670.952 266.615-37.193-37.193-38.356 37.193 38.356 37.193 74.386-74.386 38.355 37.193-38.355 37.193-37.193-37.193z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M250.394 137v.12m0 54.088v.121m0 48.065v.12"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M250.394 287.579v.12"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M250.394 329.741v.121"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M250.394 365.88v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M148 191.208v.121m204.787-.121v.121"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M352.787 239.394v.12M148 239.394v.12"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M352.787 275.533v.12"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M352.787 311.672v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M148 275.533v.12"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M148 311.672v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M199.799 215.301v.121m-.602-50.715v.12m101.791 50.474v.121m.602-50.715v.12"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M199.799 263.486v.121"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M199.799 299.625v.121"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M199.799 335.764v.121"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M300.988 263.486v.121"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M300.988 299.625v.121"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M300.988 335.764v.121"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M467.554 391.976v.12m0 48.065v.121"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M467.554 488.346v.121"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M467.554 530.509v.12"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M365.161 391.976v.12m204.787-.12v.12"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M569.948 440.161v.121m-204.787-.121v.121"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M569.948 476.3v.121"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M569.948 512.439v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M365.161 476.3v.121"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M365.161 512.439v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M416.96 416.068v.121m-.602-50.715v.121m101.791 50.473v.121m.602-50.715v.121"
      stroke="#E1E4E5"
      strokeWidth={36.139}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M416.96 464.254v.12"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M416.96 500.393v.12"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M416.96 536.532v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M518.149 464.254v.12"
      stroke="#E1E4E5"
      strokeWidth={24.093}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M518.149 500.393v.12"
      stroke="#E1E4E5"
      strokeWidth={18.07}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M518.149 536.532v.12"
      stroke="#E1E4E5"
      strokeWidth={12.046}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={656.854} cy={460.854} r={14.854} fill="#E1E4E5" />
    <circle
      cx={710.449}
      cy={362.449}
      r={11.798}
      transform="rotate(105 710.449 362.449)"
      fill="#E1E4E5"
    />
    <ellipse cx={195.204} cy={400.786} rx={12.073} ry={9.658} fill="#E1E4E5" />
    <circle
      cx={262.269}
      cy={456.269}
      r={19.269}
      transform="rotate(90 262.269 456.269)"
      fill="#E1E4E5"
    />
    <path
      d="M653 77.97a38 38 0 0 1 38 0l32.148 18.56a38 38 0 0 1 19 32.909v37.122a38 38 0 0 1-19 32.909L691 218.03a38 38 0 0 1-38 0l-32.148-18.56a38 38 0 0 1-19-32.909v-37.122a38 38 0 0 1 19-32.909L653 77.97z"
      fill="#6f381e"
    />
    <path
      d="m697.053 132.868-29.566 29.33-17.74-17.598"
      stroke="#fff"
      strokeWidth={15.638}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg422);
const Memo = memo(ForwardRef);
export default Memo;
