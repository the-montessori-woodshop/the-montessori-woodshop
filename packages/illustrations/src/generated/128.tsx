import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg128 = (
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
      d="M312.421 318.054v-84.025c0-28.267 15.034-54.399 39.454-68.621l79.402-46.212a79.425 79.425 0 0 1 79.878 0l79.402 46.212c24.438 14.222 39.472 40.354 39.472 68.621v84.025c0 28.267-15.034 54.399-39.454 68.621l-79.402 46.212a79.425 79.425 0 0 1-79.878 0l-79.402-46.212c-24.438-14.222-39.472-40.354-39.472-68.621z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={21.417}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M471.225 276.042V196.64m-.017 141.159c-2.435 0-4.412 1.976-4.394 4.411a4.412 4.412 0 0 0 8.823 0 4.417 4.417 0 0 0-4.429-4.411"
      stroke="#fff"
      strokeWidth={30}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M212.107 413.851h5.176a2.261 2.261 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.007-2.259 2.259-2.259zm17.946 0h5.177a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.177a2.268 2.268 0 0 1 2.259-2.259zm17.959 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.007-2.259 2.259-2.259zm17.946 0h5.177a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.177a2.27 2.27 0 0 1-2.27-2.259v-5.177a2.284 2.284 0 0 1 2.27-2.259zm17.948 0h5.177a2.27 2.27 0 0 1 2.27 2.259v5.177a2.264 2.264 0 0 1-2.27 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.177a2.268 2.268 0 0 1 2.259-2.259zm-53.194 19.57h5.176a2.268 2.268 0 0 1 2.259 2.259v5.187a2.268 2.268 0 0 1-2.259 2.26h-5.176a2.262 2.262 0 0 1-2.26-2.26v-5.176a2.257 2.257 0 0 1 2.26-2.27zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.187a2.27 2.27 0 0 1-2.26 2.26h-5.176a2.268 2.268 0 0 1-2.259-2.26v-5.176a2.256 2.256 0 0 1 2.259-2.27zm17.948 0h5.176a2.27 2.27 0 0 1 2.27 2.259v5.187a2.27 2.27 0 0 1-2.27 2.26h-5.176a2.268 2.268 0 0 1-2.259-2.26v-5.176a2.27 2.27 0 0 1 2.259-2.27zm-18.594-40.594h5.176a2.27 2.27 0 0 1 2.26 2.26v5.176a2.261 2.261 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.176c-.011-1.241 1.007-2.26 2.259-2.26zm17.946 0h5.177a2.268 2.268 0 0 1 2.259 2.26v5.176a2.26 2.26 0 0 1-2.259 2.259h-5.177a2.27 2.27 0 0 1-2.27-2.259v-5.176a2.285 2.285 0 0 1 2.27-2.26zM654.533 120.96h5.176a2.261 2.261 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.007-2.259 2.259-2.259zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.261 2.261 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177a2.268 2.268 0 0 1 2.259-2.259zm17.959 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.007-2.259 2.259-2.259zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.261 2.261 0 0 1-2.26 2.259h-5.176a2.27 2.27 0 0 1-2.27-2.259v-5.177a2.284 2.284 0 0 1 2.27-2.259zm17.948 0h5.177a2.27 2.27 0 0 1 2.27 2.259v5.177a2.264 2.264 0 0 1-2.27 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.177a2.268 2.268 0 0 1 2.259-2.259zm-53.194 19.57h5.176a2.268 2.268 0 0 1 2.259 2.259v5.187a2.268 2.268 0 0 1-2.259 2.26h-5.176a2.262 2.262 0 0 1-2.26-2.26V142.8a2.257 2.257 0 0 1 2.26-2.27zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.187a2.27 2.27 0 0 1-2.26 2.26h-5.176a2.268 2.268 0 0 1-2.259-2.26V142.8a2.256 2.256 0 0 1 2.259-2.27zm17.948 0h5.176a2.27 2.27 0 0 1 2.27 2.259v5.187a2.27 2.27 0 0 1-2.27 2.26h-5.176a2.268 2.268 0 0 1-2.259-2.26V142.8a2.27 2.27 0 0 1 2.259-2.27zm-18.594-40.594h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.007-2.259 2.259-2.259zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.261 2.261 0 0 1-2.26 2.259h-5.176a2.27 2.27 0 0 1-2.27-2.259v-5.177a2.284 2.284 0 0 1 2.27-2.259zm-478.976 25.967h5.177a2.261 2.261 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.008-2.259 2.259-2.259zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.177a2.268 2.268 0 0 1 2.26-2.259zm17.958 0h5.177a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.177c-.011-1.241 1.008-2.259 2.259-2.259zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.176a2.27 2.27 0 0 1-2.27-2.259v-5.177a2.284 2.284 0 0 1 2.27-2.259zm17.948 0h5.176a2.27 2.27 0 0 1 2.27 2.259v5.177a2.263 2.263 0 0 1-2.27 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.177a2.268 2.268 0 0 1 2.26-2.259zm-53.195 19.57h5.177a2.268 2.268 0 0 1 2.259 2.26v5.187a2.268 2.268 0 0 1-2.259 2.259h-5.177a2.261 2.261 0 0 1-2.259-2.259v-5.177a2.257 2.257 0 0 1 2.259-2.27zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.26v5.187a2.268 2.268 0 0 1-2.259 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.177a2.258 2.258 0 0 1 2.26-2.27zm17.948 0h5.176a2.271 2.271 0 0 1 2.27 2.26v5.187a2.27 2.27 0 0 1-2.27 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.177a2.27 2.27 0 0 1 2.26-2.27zm-18.595-40.594h5.177a2.268 2.268 0 0 1 2.259 2.26v5.176a2.26 2.26 0 0 1-2.259 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.176c-.011-1.241 1.008-2.26 2.259-2.26zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.26v5.176a2.26 2.26 0 0 1-2.259 2.259h-5.176a2.27 2.27 0 0 1-2.27-2.259v-5.176a2.284 2.284 0 0 1 2.27-2.26zm376.999 310.145h5.177a2.261 2.261 0 0 1 2.259 2.259v5.176a2.261 2.261 0 0 1-2.259 2.26h-5.177a2.268 2.268 0 0 1-2.259-2.26v-5.176c-.011-1.241 1.008-2.259 2.259-2.259zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.259v5.176a2.261 2.261 0 0 1-2.259 2.26h-5.176a2.27 2.27 0 0 1-2.26-2.26v-5.176a2.268 2.268 0 0 1 2.26-2.259zm17.959 0h5.176a2.268 2.268 0 0 1 2.259 2.259v5.176a2.261 2.261 0 0 1-2.259 2.26h-5.176a2.27 2.27 0 0 1-2.26-2.26v-5.176c-.01-1.241 1.008-2.259 2.26-2.259zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.176a2.262 2.262 0 0 1-2.26 2.26h-5.176a2.27 2.27 0 0 1-2.27-2.26v-5.176a2.284 2.284 0 0 1 2.27-2.259zm17.948 0h5.176a2.27 2.27 0 0 1 2.27 2.259v5.176a2.264 2.264 0 0 1-2.27 2.26h-5.176a2.268 2.268 0 0 1-2.259-2.26v-5.176a2.268 2.268 0 0 1 2.259-2.259zm-53.195 19.57h5.177a2.268 2.268 0 0 1 2.259 2.259v5.187a2.268 2.268 0 0 1-2.259 2.259h-5.177a2.261 2.261 0 0 1-2.259-2.259v-5.176a2.256 2.256 0 0 1 2.259-2.27zm17.947 0h5.176a2.268 2.268 0 0 1 2.259 2.259v5.187a2.268 2.268 0 0 1-2.259 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.176a2.257 2.257 0 0 1 2.26-2.27zm17.947 0h5.177a2.27 2.27 0 0 1 2.27 2.259v5.187a2.27 2.27 0 0 1-2.27 2.259h-5.177a2.268 2.268 0 0 1-2.259-2.259v-5.176a2.27 2.27 0 0 1 2.259-2.27zM696.165 394h5.176a2.268 2.268 0 0 1 2.259 2.259v5.177a2.261 2.261 0 0 1-2.259 2.259h-5.176a2.268 2.268 0 0 1-2.26-2.259v-5.177c-.01-1.241 1.008-2.259 2.26-2.259zm17.946 0h5.176a2.268 2.268 0 0 1 2.26 2.259v5.177a2.262 2.262 0 0 1-2.26 2.259h-5.176a2.27 2.27 0 0 1-2.27-2.259v-5.177a2.284 2.284 0 0 1 2.27-2.259z"
      fill="#E1E4E5"
    />
    <path
      d="M735.925 307.966c-19.778 4.685-40.696-12.088-40.696-12.088s11.163-24.361 30.947-29.031c19.778-4.686 40.689 12.073 40.689 12.073s-11.163 24.36-30.94 29.046z"
      fill="url(#a)"
    />
    <path
      d="M134.823 316.782c-19.778 4.685-40.696-12.088-40.696-12.088s11.163-24.36 30.947-29.031c19.778-4.685 40.689 12.073 40.689 12.073s-11.163 24.361-30.94 29.046z"
      fill="url(#b)"
    />
    <path
      d="M385.449 98.727c24.781-5.01 39.673-34.853 39.673-34.853s-25.299-21.703-50.08-16.673c-24.782 5.01-39.674 34.833-39.674 34.833s25.299 21.703 50.081 16.693z"
      fill="url(#c)"
    />
    <path
      d="M588.985 513.473c31.39-7.212 49.351-45.717 49.351-45.717S605.39 440.968 574 448.206c-31.39 7.213-49.352 45.692-49.352 45.692s32.947 26.788 64.337 19.575z"
      fill="url(#d)"
    />
    <ellipse
      cx={782.745}
      cy={366.855}
      rx={16.775}
      ry={16.046}
      transform="rotate(180 782.745 366.855)"
      fill="#6f381e"
    />
    <circle
      cx={294.108}
      cy={495.693}
      r={14.604}
      transform="rotate(180 294.108 495.693)"
      fill="#6f381e"
    />
    <circle
      r={8.023}
      transform="matrix(-1 0 0 1 233.936 211.769)"
      fill="#6f381e"
    />
    <ellipse
      rx={13.481}
      ry={14.043}
      transform="matrix(-1 0 0 1 765.94 154.738)"
      fill="#6f381e"
    />
    <circle
      r={10.672}
      transform="matrix(-1 0 0 1 140.762 391.778)"
      fill="#6f381e"
    />
    <ellipse
      rx={13}
      ry={12.5}
      transform="matrix(-1 0 0 1 393 480.5)"
      fill="#E1E4E5"
    />
    <circle
      r={8.548}
      transform="matrix(-1 0 0 1 225.811 306.217)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.5}
      ry={8}
      transform="matrix(-1 0 0 1 470.5 517)"
      fill="#E1E4E5"
    />
    <circle
      r={7.294}
      transform="matrix(-1 0 0 1 524.96 69.35)"
      fill="#E1E4E5"
    />
    <circle
      r={7.127}
      transform="scale(1 -1) rotate(-75 -139.009 -303.881)"
      fill="#E1E4E5"
    />
    <circle
      r={9.482}
      transform="matrix(-1 0 0 1 249.19 52.977)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.294}
      ry={5.835}
      transform="matrix(-1 0 0 1 721.359 214.524)"
      fill="#E1E4E5"
    />
    <circle
      r={14.833}
      transform="scale(1 -1) rotate(-75 226.022 -443.109)"
      fill="#E1E4E5"
    />
    <path
      d="M798.774 202.51h.191c1.13 16.009 13.035 16.255 13.035 16.255s-13.128.256-13.128 18.754c0-18.498-13.129-18.754-13.129-18.754s11.901-.246 13.031-16.255zm-630.748-67.971h.329c1.946 28.016 22.45 28.447 22.45 28.447s-22.61.448-22.61 32.82c0-32.372-22.61-32.82-22.61-32.82s20.495-.431 22.441-28.447z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={661.447}
        y1={319.615}
        x2={834.581}
        y2={237.821}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={60.345}
        y1={328.431}
        x2={233.479}
        y2={246.637}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={475.647}
        y1={73.091}
        x2={237.467}
        y2={70.882}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={702.988}
        y1={477.795}
        x2={399.6}
        y2={482.987}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg128);
const Memo = memo(ForwardRef);
export default Memo;
