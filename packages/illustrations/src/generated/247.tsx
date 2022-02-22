import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg247 = (
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
      d="M210.697 305.304s-31.977 4.26-28.768 17.174c3.207 12.911 61.569 17.219 61.569 17.219l-32.801-34.393zm50.592 53.274s-31.981 4.227-28.788 17.142c3.193 12.915 61.551 17.289 61.551 17.289l-32.763-34.431zm39.397 42.27s-31.897 4.818-28.466 17.671c3.431 12.854 61.86 16.148 61.86 16.148l-33.394-33.819z"
      fill="#F8AE9D"
    />
    <path
      d="M184.651 100.899c.812 5.473-3.469 9.62-11.538 14.698-6.07 3.818-11.546 7.375-19.573 8.661-5.617.901-10.998.406-15.469-.658-4.844-1.153-11.002-1.982-11.995-6.767-1.364-6.573 8.984-20.996 27.134-24.52 19.939-3.868 30.649 3.236 31.441 8.586z"
      fill="url(#a)"
    />
    <path
      d="M622.355 160.555c1.297 17.597-15.956 33.222-15.956 33.222s-19.347-12.917-20.631-30.518c-1.298-17.598 15.942-33.219 15.942-33.219s19.347 12.917 20.645 30.515z"
      fill="url(#b)"
    />
    <path
      d="M475.826 541.249c7.16-11.947.541-29.086.541-29.086s-18.224 2.241-25.376 14.195c-7.16 11.946-.549 29.078-.549 29.078s18.224-2.241 25.384-14.187z"
      fill="url(#c)"
    />
    <circle
      cx={429.466}
      cy={66.015}
      r={20.477}
      transform="rotate(124.114 429.466 66.015)"
      fill="#6f381e"
    />
    <circle
      cx={260.943}
      cy={501.966}
      r={16.857}
      transform="rotate(90 260.943 501.966)"
      fill="#6f381e"
    />
    <circle
      r={19.197}
      transform="matrix(0 1 1 0 544.523 502.568)"
      fill="#6f381e"
    />
    <circle
      r={8.959}
      transform="scale(-1 1) rotate(55.886 -388.94 -449.299)"
      fill="#6f381e"
    />
    <circle
      r={11.518}
      transform="matrix(0 1 1 0 613.313 394.65)"
      fill="#E1E4E5"
    />
    <circle
      r={10.362}
      transform="matrix(0 1 1 0 642.41 468.434)"
      fill="#E1E4E5"
    />
    <circle
      r={12.663}
      transform="scale(-1 1) rotate(55.886 -532.236 -540.25)"
      fill="#E1E4E5"
    />
    <circle
      r={6.977}
      transform="scale(1 -1) rotate(15 2120.42 1050.184)"
      fill="#E1E4E5"
    />
    <circle
      r={5.262}
      transform="matrix(0 1 1 0 133.839 405.585)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.937}
      ry={10.35}
      transform="scale(-1 1) rotate(55.886 -603.229 -579.323)"
      fill="#E1E4E5"
    />
    <circle
      r={9.152}
      transform="scale(1 -1) rotate(15 887.47 355.342)"
      fill="#E1E4E5"
    />
    <path
      d="M192.609 425.883v-.184c15.463-1.092 15.701-12.591 15.701-12.591s.247 12.68 18.114 12.68c-17.867 0-18.114 12.681-18.114 12.681s-.238-11.495-15.701-12.586zm475.904 84.778v-.097c8.475-.576 8.606-6.646 8.606-6.646s.135 6.693 9.929 6.693c-9.794 0-9.929 6.694-9.929 6.694s-.131-6.068-8.606-6.644z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m198.19 251.461 2.179-93.834c.577-24.865 21.181-44.534 46.025-43.957l93.833 2.179c11.94.277 23.257 5.293 31.514 13.92L547.525 313.91c17.161 17.977 16.499 46.458-1.477 63.619l-96.012 91.654c-17.976 17.161-46.458 16.499-63.618-1.477L210.633 283.565a45.01 45.01 0 0 1-12.443-32.104z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={32.644}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M279.354 198.774a6.055 6.055 0 1 1 8.564 8.563 6.055 6.055 0 0 1-8.564-8.563"
      stroke="url(#d)"
      strokeWidth={20.088}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M460.923 328.042a8.822 8.822 0 0 1 3.213 8.692 8.628 8.628 0 0 1-6.329 6.665l-35.703 8.983-12.563 34.94a8.605 8.605 0 0 1-7.214 5.603c-3.276.33-6.469-1.238-8.242-4.047l-19.916-31.688-36.903-1.672c-3.31-.162-6.259-2.191-7.619-5.241-1.359-3.051-.896-6.6 1.197-9.17l23.429-28.56-10.248-35.996c-.904-3.197.065-6.619 2.501-8.835a8.607 8.607 0 0 1 8.99-1.619l34.374 14.038 30.551-20.543a8.627 8.627 0 0 1 9.196-.263 8.822 8.822 0 0 1 4.321 8.207l-2.138 37.222 29.103 23.284z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={15.066}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m787.77 360.557-98.19 98.19-30.217-13.925c-10.703-4.931-22.892-5.314-33.881-1.202-10.349 3.873-25.8 7.564-45.556 6.361-38.45-2.342-69.91-14.64-69.91-14.64l60.551-61.153s-39.735-28.782-54.989-104.524c-1.634-8.107-6.005-15.424-12.346-20.757l-36.05-30.316s-43.669-2.564-59.737-43.85c0 0-4.744-28.859 6.19-27.493 0 0 123.713 50.87 140.008 60.534 16.295 9.663 28.877 13.4 65.246 58.614 9.631 11.97 18.213 21.396 25.634 28.788a137.302 137.302 0 0 0 50.321 31.874l92.926 33.499z"
      fill="#F8AE9D"
    />
    <defs>
      <linearGradient
        id="a"
        x1={189.366}
        y1={136.792}
        x2={104.046}
        y2={65.828}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={622.102}
        y1={225.998}
        x2={575.79}
        y2={66.345}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={498.874}
        y1={495.019}
        x2={409.561}
        y2={591.144}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={300.948}
        y1={202.708}
        x2={257.719}
        y2={203.211}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg247);
const Memo = memo(ForwardRef);
export default Memo;
