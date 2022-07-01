import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg386 = (
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
      d="M789.29 307.949c-11.119 5.516-25.877-1.576-25.877-1.576s3.28-16.032 14.405-21.54c11.119-5.515 25.871 1.569 25.871 1.569s-3.28 16.032-14.399 21.547z"
      fill="url(#a)"
    />
    <path
      d="M119.421 316.363c16.237 9.731 39.531.736 39.531.736s-3.046-24.769-19.292-34.489c-16.237-9.732-39.521-.747-39.521-.747s3.046 24.769 19.282 34.5z"
      fill="url(#b)"
    />
    <circle
      cx={726.737}
      cy={497.745}
      r={14.201}
      transform="rotate(180 726.737 497.745)"
      fill="#6f381e"
    />
    <circle
      r={11.273}
      transform="matrix(-1 0 0 1 178.479 459.46)"
      fill="#6f381e"
    />
    <circle
      r={7.547}
      transform="matrix(-1 0 0 1 249.283 161.577)"
      fill="#6f381e"
    />
    <circle
      r={14.017}
      transform="matrix(-1 0 0 1 110.317 459.04)"
      fill="#E1E4E5"
    />
    <circle
      r={10.668}
      transform="matrix(-1 0 0 1 749.293 432.37)"
      fill="#E1E4E5"
    />
    <circle
      r={13.409}
      transform="matrix(-1 0 0 1 738.506 106.576)"
      fill="#E1E4E5"
    />
    <circle
      r={10.65}
      transform="scale(1 -1) rotate(-75 -58.362 -210.91)"
      fill="#E1E4E5"
    />
    <circle
      r={14.169}
      transform="matrix(-1 0 0 1 281.462 79.916)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.899}
      ry={8.719}
      transform="matrix(-1 0 0 1 735.996 331.312)"
      fill="#E1E4E5"
    />
    <circle
      r={17.395}
      transform="matrix(0 1 1 0 756.02 225.549)"
      fill="#E1E4E5"
    />
    <path
      d="M179.045 93.315h.156c.919 13.026 10.607 13.227 10.607 13.227s-10.683.209-10.683 15.26c0-15.051-10.683-15.26-10.683-15.26s9.684-.201 10.603-13.227zm9.469 417.932h.149c.883 12.988 10.184 13.188 10.184 13.188s-10.257.208-10.257 15.215c0-15.007-10.256-15.215-10.256-15.215s9.297-.2 10.18-13.188z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M264.327 538.673h372.019c29.363 0 53.146-23.782 53.146-53.145V210.509h-478.31v275.019c0 29.363 23.782 53.145 53.145 53.145zm-53.145-362.727v-62.437c0-29.363 23.782-53.146 53.145-53.146h372.019c29.363 0 53.146 23.783 53.146 53.146v62.437h-478.31z"
      fill="#6f381e"
    />
    <path
      d="M569.914 432.383v-39.328m-79.718 39.328V306.162m-79.718 126.226v-55.006m-79.719 54.995V320.771m67.373-194.108c-.08 0-.133.053-.133.133 0 .079.053.133.133.133.079 0 .132-.054.132-.133 0-.08-.053-.133-.132-.133m-67.469 0c-.08 0-.133.053-.133.133 0 .079.053.133.133.133.08 0 .133-.054.133-.133 0-.08-.053-.133-.133-.133m-67.707-.13c-.08 0-.133.053-.133.133 0 .08.053.133.133.133.079 0 .132-.053.132-.133 0-.08-.053-.133-.132-.133"
      stroke="#fff"
      strokeWidth={34.563}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={746.592}
        y1={325.154}
        x2={838.302}
        y2={252.611}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={182.252}
        y1={347.687}
        x2={51.608}
        y2={226.302}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg386);
const Memo = memo(ForwardRef);
export default Memo;
