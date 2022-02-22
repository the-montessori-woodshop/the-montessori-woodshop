import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg328 = (
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
    <circle cx={449.9} cy={300.131} r={275.131} fill="url(#a)" />
    <path
      d="M809.299 286.817c-24.968 12.386-58.107-3.54-58.107-3.54s7.365-35.999 32.347-48.368c24.968-12.385 58.094 3.523 58.094 3.523s-7.365 35.999-32.334 48.385z"
      fill="url(#b)"
    />
    <path
      d="M96 366.65c28.209 16.906 68.68 1.277 68.68 1.277s-5.292-43.034-33.518-59.921c-28.209-16.907-68.662-1.297-68.662-1.297s5.29 43.034 33.5 59.941z"
      fill="url(#c)"
    />
    <circle
      cx={760.172}
      cy={203.823}
      r={13.633}
      transform="rotate(180 760.172 203.823)"
      fill="#6f381e"
    />
    <circle
      cx={246.689}
      cy={281.046}
      r={15.337}
      transform="rotate(180 246.689 281.046)"
      fill="#6f381e"
    />
    <circle
      r={12.781}
      transform="matrix(-1 0 0 1 143.938 190.898)"
      fill="#6f381e"
    />
    <circle
      r={5.965}
      transform="matrix(-1 0 0 1 643.251 257.36)"
      fill="#6f381e"
    />
    <circle
      r={7.669}
      transform="matrix(-1 0 0 1 677.673 523.502)"
      fill="#E1E4E5"
    />
    <circle
      r={11.077}
      transform="matrix(-1 0 0 1 141.652 443.875)"
      fill="#E1E4E5"
    />
    <circle
      r={8.431}
      transform="matrix(-1 0 0 1 269.751 160.849)"
      fill="#E1E4E5"
    />
    <circle
      r={9.373}
      transform="matrix(-1 0 0 1 686.595 161.506)"
      fill="#E1E4E5"
    />
    <circle
      r={8.417}
      transform="scale(1 -1) rotate(-75 -74.388 -244.01)"
      fill="#E1E4E5"
    />
    <circle
      r={11.197}
      transform="matrix(-1 0 0 1 380.759 90.123)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.613}
      ry={6.89}
      transform="matrix(-1 0 0 1 737.832 376.332)"
      fill="#E1E4E5"
    />
    <circle
      r={17.517}
      transform="scale(1 -1) rotate(-75 258.787 -445.423)"
      fill="#E1E4E5"
    />
    <path
      d="M803.149 328.744h.225c1.334 18.905 15.394 19.196 15.394 19.196s-15.504.303-15.504 22.147c0-21.844-15.503-22.147-15.503-22.147s14.053-.291 15.388-19.196zM236.847 512.531h.2c1.184 17.111 13.659 17.374 13.659 17.374s-13.757.274-13.757 20.044c0-19.77-13.756-20.044-13.756-20.044s12.47-.263 13.654-17.374z"
      fill="#E1E4E5"
    />
    <circle cx={449.155} cy={299.832} r={233.316} fill="#6f381e" />
    <path
      d="m353.604 178.978-10.307 70.146c0 27.672 23.073 50.104 51.535 50.104 28.463 0 51.536-22.432 51.536-50.104l-10.307-70.146"
      stroke="#fff"
      strokeWidth={12.884}
    />
    <path
      d="M497.903 333.585c0 24.967 31.735 34.357 55.83 34.357V196.156c-60.125 0-55.83 112.462-55.83 137.429z"
      stroke="#fff"
      strokeWidth={12.884}
      strokeLinejoin="round"
    />
    <path
      d="M394.832 419.478v-120.25m0-51.536v-68.714m-51.536 68.714h103.071m107.366 171.786.001-51.536"
      stroke="#fff"
      strokeWidth={12.884}
    />
    <defs>
      <linearGradient
        id="a"
        x1={461.633}
        y1={883.77}
        x2={444.666}
        y2={-573.591}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={713.419}
        y1={325.451}
        x2={919.357}
        y2={162.553}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={205.161}
        y1={421.071}
        x2={-21.818}
        y2={210.178}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg328);
const Memo = memo(ForwardRef);
export default Memo;
