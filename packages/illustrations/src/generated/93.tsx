import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg93 = (
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
      d="M640.748 351.203c3.11 57.312-108.939 173.848-247.048 130.715-64.233-20.064-58.792-53.364-107.634-97.251-29.113-26.157-70.943-45.936-82.577-83.958-10.05-32.818-3.887-68.092 13.537-91.036 39.187-51.6 118.298-86.933 196.246-5.634 77.949 81.299 219.437-.648 227.476 147.164z"
      fill="url(#a)"
    />
    <path
      d="M592.127 204.396c-10.268 18.325-32.756 20.843-68.783 17.36-27.095-2.624-51.803-4.654-78.9-19.428-18.966-10.333-33.979-24.313-44.936-37.892-11.874-14.709-28.448-31.497-20.323-48.176 11.165-22.91 75.734-42.207 138.432-10.652 68.874 34.674 84.554 80.877 74.51 98.788z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M343.418 433.407a20.706 20.706 0 0 1-30.199-21.744l14.979-86.681-63.436-61.417a20.71 20.71 0 0 1 11.527-35.256l87.699-12.649 39.173-78.932a20.88 20.88 0 0 1 37.344 0l39.173 78.932 87.699 12.649a20.708 20.708 0 0 1 11.528 35.256l-63.471 61.383 14.979 86.681a20.71 20.71 0 0 1-30.199 21.778l-78.415-40.882-78.381 40.882zm-204.438 1.269a10.244 10.244 0 0 1-14.942-10.757l7.411-42.885-31.387-30.385a10.245 10.245 0 0 1 5.704-17.443l43.392-6.258 19.382-39.051a10.332 10.332 0 0 1 18.477 0l19.382 39.051 43.393 6.258a10.245 10.245 0 0 1 5.703 17.443l-31.404 30.368 7.411 42.885a10.244 10.244 0 0 1-14.942 10.774l-38.798-20.225-38.782 20.225zm488.038 0a10.244 10.244 0 0 1-14.942-10.757l7.412-42.885-31.388-30.385a10.245 10.245 0 0 1 5.704-17.443l43.392-6.258 19.382-39.051a10.332 10.332 0 0 1 18.477 0l19.383 39.051 43.392 6.258a10.246 10.246 0 0 1 5.704 17.443l-31.405 30.368 7.412 42.885a10.246 10.246 0 0 1-14.943 10.774L665.8 414.451l-38.782 20.225z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={25.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m450.564 274.764-35.946 35.946-21.588-21.571"
      stroke="#fff"
      strokeWidth={25.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M691.438 270.113c-20.62 4.885-42.428-12.602-42.428-12.602s11.637-25.397 32.264-30.267c20.619-4.885 42.421 12.587 42.421 12.587s-11.638 25.397-32.257 30.282z"
      fill="url(#c)"
    />
    <path
      d="M764.041 416.592c12.197 8.401 30.831 2.529 30.831 2.529s-1.154-19.492-13.359-27.885c-12.197-8.401-30.823-2.537-30.823-2.537s1.154 19.492 13.351 27.893z"
      fill="url(#d)"
    />
    <path
      d="M262.328 479.038c9.411 9.578 27.01 7.559 27.01 7.559s2.328-17.55-7.091-27.122c-9.411-9.579-27.001-7.565-27.001-7.565s-2.329 17.55 7.082 27.128z"
      fill="url(#e)"
    />
    <ellipse
      cx={711.535}
      cy={349.702}
      rx={15.061}
      ry={14.406}
      transform="rotate(180 711.535 349.702)"
      fill="#6f381e"
    />
    <ellipse
      cx={422.464}
      cy={491.514}
      rx={20.3}
      ry={19.645}
      transform="rotate(180 422.464 491.514)"
      fill="#6f381e"
    />
    <circle
      r={14.783}
      transform="matrix(-1 0 0 1 192.482 206.455)"
      fill="#6f381e"
    />
    <circle
      r={13.752}
      transform="matrix(-1 0 0 1 515.6 154.94)"
      fill="#6f381e"
    />
    <circle
      r={12.368}
      transform="matrix(-1 0 0 1 681.357 479.584)"
      fill="#E1E4E5"
    />
    <circle
      r={7.991}
      transform="matrix(-1 0 0 1 135.009 423.009)"
      fill="#fff"
    />
    <circle
      r={6.41}
      transform="matrix(-1 0 0 1 350.233 502.961)"
      fill="#E1E4E5"
    />
    <circle
      r={9.783}
      transform="matrix(-1 0 0 1 616.447 159.079)"
      fill="#E1E4E5"
    />
    <circle
      r={6.399}
      transform="scale(1 -1) rotate(-75 -112.599 -285.532)"
      fill="#fff"
    />
    <circle
      r={8.513}
      transform="matrix(-1 0 0 1 326.533 171.852)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.548}
      ry={5.239}
      transform="matrix(-1 0 0 1 607.294 336.867)"
      fill="#fff"
    />
    <ellipse
      rx={10.658}
      ry={8.414}
      transform="scale(-1 1) rotate(26.006 -1274.126 -1323.622)"
      fill="#fff"
    />
    <circle
      r={12.393}
      transform="scale(1 -1) rotate(-75 175.055 -356.977)"
      fill="#E1E4E5"
    />
    <path
      d="M760.389 274.833h.172c1.014 14.373 11.703 14.594 11.703 14.594s-11.787.23-11.787 16.838c0-16.608-11.787-16.838-11.787-16.838s10.685-.221 11.699-14.594zM270.853 94.902h.295c1.747 25.153 20.156 25.54 20.156 25.54s-20.3.403-20.3 29.466c0-29.063-20.3-29.466-20.3-29.466s18.402-.387 20.149-25.54z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={506.825}
        y1={694.74}
        x2={297.231}
        y2={-250.878}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={522.955}
        y1={323.159}
        x2={431.435}
        y2={-88.093}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={613.79}
        y1={282.258}
        x2={794.293}
        y2={196.983}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={811.554}
        y1={444.158}
        x2={715.541}
        y2={342.915}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={299.876}
        y1={511.756}
        x2={231.84}
        y2={405.103}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg93);
const Memo = memo(ForwardRef);
export default Memo;