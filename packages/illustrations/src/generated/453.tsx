import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg453 = (
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
      d="M693.364 273.589v-22.934c0-114.669-45.868-160.537-160.537-160.537H395.224c-114.669 0-160.537 45.868-160.537 160.537v137.603c0 114.669 45.868 160.537 160.537 160.537h45.867"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M544.523 548.795c25.332 0 45.868-20.535 45.868-45.868 0-25.332-20.536-45.867-45.868-45.867s-45.867 20.535-45.867 45.867c0 25.333 20.535 45.868 45.867 45.868zm45.868-45.873V342.615m30.043-21.556 50.685 16.971c12.154 4.128 22.245 17.888 22.245 30.96v13.532c0 17.43-13.531 27.291-30.044 21.787l-50.684-16.971c-12.155-4.128-22.245-17.889-22.245-30.961v-13.53c0-17.659 13.531-27.292 30.043-21.788z"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={370.086}
      cy={246.509}
      r={194.021}
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={2.411}
    />
    <path
      d="M432.077 244.339c3.215 1.856 3.215 6.497 0 8.353l-88.987 51.376c-3.214 1.856-7.233-.464-7.233-4.176V197.139c0-3.712 4.019-6.032 7.233-4.176l88.987 51.376z"
      fill="#fff"
    />
    <path
      d="M763.869 250.782c-14.177 7.032-32.993-2.01-32.993-2.01s4.182-20.441 18.366-27.463c14.177-7.033 32.986 2 32.986 2s-4.182 20.44-18.359 27.473z"
      fill="url(#a)"
    />
    <path
      d="M146.756 397.369c20.077 12.033 48.879.909 48.879.909s-3.766-30.627-23.854-42.645c-20.076-12.033-48.867-.923-48.867-.923s3.766 30.627 23.842 42.659z"
      fill="url(#b)"
    />
    <circle
      cx={624.459}
      cy={211.191}
      r={17.163}
      transform="rotate(180 624.459 211.191)"
      fill="#6f381e"
    />
    <circle
      cx={209.154}
      cy={248.496}
      r={14.128}
      transform="rotate(180 209.154 248.496)"
      fill="#6f381e"
    />
    <circle
      r={16.09}
      transform="matrix(-1 0 0 1 417.664 486.164)"
      fill="#6f381e"
    />
    <circle
      r={7.509}
      transform="matrix(-1 0 0 1 741.807 318.044)"
      fill="#6f381e"
    />
    <circle
      r={9.654}
      transform="matrix(-1 0 0 1 584.336 484.213)"
      fill="#E1E4E5"
    />
    <circle
      r={13.945}
      transform="matrix(-1 0 0 1 137.373 459.878)"
      fill="#E1E4E5"
    />
    <circle
      r={10.613}
      transform="matrix(-1 0 0 1 642.05 459.696)"
      fill="#E1E4E5"
    />
    <circle
      r={11.799}
      transform="matrix(-1 0 0 1 731.992 113.172)"
      fill="#E1E4E5"
    />
    <circle
      r={10.596}
      transform="scale(1 -1) rotate(-75 -116.2 -219.905)"
      fill="#E1E4E5"
    />
    <circle
      r={4.41}
      transform="matrix(-1 0 0 1 219.154 67.239)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.843}
      ry={8.674}
      transform="matrix(-1 0 0 1 730.446 423.12)"
      fill="#E1E4E5"
    />
    <circle
      r={7.67}
      transform="scale(1 -1) rotate(-75 225.614 -377.308)"
      fill="#E1E4E5"
    />
    <path
      d="M133.977 130.003h.155c.914 12.96 10.552 13.159 10.552 13.159s-10.627.208-10.627 15.182c0-14.974-10.628-15.182-10.628-15.182s9.634-.199 10.548-13.159zm82.498 390.453h.149c.878 12.921 10.131 13.119 10.131 13.119s-10.204.207-10.204 15.137c0-14.93-10.203-15.137-10.203-15.137s9.249-.198 10.127-13.119z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={709.428}
        y1={272.718}
        x2={826.36}
        y2={180.225}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={224.446}
        y1={436.101}
        x2={62.906}
        y2={286.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg453);
const Memo = memo(ForwardRef);
export default Memo;
