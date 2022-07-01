import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg401 = (
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
      d="M792.262 319.121c-18.963 9.407-44.131-2.688-44.131-2.688s5.593-27.341 24.566-36.734c18.963-9.407 44.121 2.675 44.121 2.675s-5.593 27.341-24.556 36.747z"
      fill="url(#a)"
    />
    <path
      d="M161.306 352.212c18.681 11.196 45.483.846 45.483.846s-3.505-28.499-22.197-39.683c-18.681-11.196-45.472-.859-45.472-.859s3.505 28.499 22.186 39.696z"
      fill="url(#b)"
    />
    <circle
      cx={677.444}
      cy={266.034}
      r={12.144}
      transform="rotate(180 677.444 266.034)"
      fill="#6f381e"
    />
    <circle
      cx={715.84}
      cy={452.107}
      r={17.03}
      transform="rotate(180 715.84 452.107)"
      fill="#6f381e"
    />
    <circle
      r={14.191}
      transform="matrix(-1 0 0 1 112.423 230.24)"
      fill="#6f381e"
    />
    <circle
      r={6.623}
      transform="matrix(-1 0 0 1 696.135 319.658)"
      fill="#6f381e"
    />
    <circle
      r={8.515}
      transform="matrix(-1 0 0 1 516.472 544.529)"
      fill="#E1E4E5"
    />
    <circle
      r={12.299}
      transform="matrix(-1 0 0 1 434.721 524.025)"
      fill="#E1E4E5"
    />
    <circle
      r={9.361}
      transform="matrix(-1 0 0 1 182.568 152.546)"
      fill="#E1E4E5"
    />
    <circle
      r={10.407}
      transform="matrix(-1 0 0 1 314.557 492.565)"
      fill="#E1E4E5"
    />
    <circle
      r={9.345}
      transform="scale(1 -1) rotate(-75 -171.76 -221.292)"
      fill="#E1E4E5"
    />
    <circle
      r={14.544}
      transform="matrix(-1 0 0 1 234.215 92.258)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.563}
      ry={7.651}
      transform="matrix(-1 0 0 1 767.905 389.185)"
      fill="#E1E4E5"
    />
    <circle
      r={19.45}
      transform="scale(1 -1) rotate(-75 247.615 -418.25)"
      fill="#E1E4E5"
    />
    <path
      d="M737.03 223h.25c1.482 20.991 17.092 21.314 17.092 21.314s-17.214.336-17.214 24.59c0-24.254-17.214-24.59-17.214-24.59s15.604-.323 17.086-21.314zM257.007 503.278h.222c1.315 18.998 15.167 19.291 15.167 19.291s-15.275.304-15.275 22.256c0-21.952-15.274-22.256-15.274-22.256s13.846-.293 15.16-19.291z"
      fill="#E1E4E5"
    />
    <path
      d="M181.749 449.29h-29.662a17.786 17.786 0 0 0-17.794 17.794v0a17.783 17.783 0 0 0 5.21 12.584 17.783 17.783 0 0 0 12.584 5.21h12.715c9.36 0 16.947-7.588 16.947-16.948v-33.895c0-9.36-7.587-16.947-16.947-16.947h-11.189a16.97 16.97 0 0 0-11.982 4.957l-2.258 2.243"
      stroke="#E1E4E5"
      strokeWidth={9.208}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M193.61 512h-54.237c-22.465 0-40.676-18.211-40.676-40.676v-40.683c0-22.464 18.211-40.675 40.676-40.675h40.683c22.465 0 40.676 18.211 40.676 40.675v33.903a20.336 20.336 0 0 1-20.342 20.334v0c-10.295 0-18.641-8.346-18.641-18.641v-18.641"
      stroke="#E1E4E5"
      strokeWidth={9.208}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M754.25 141.257h-28.681a17.201 17.201 0 0 0-17.206 17.205v0a17.2 17.2 0 0 0 17.206 17.206h12.294c9.051 0 16.387-7.336 16.387-16.387v-32.774c0-9.051-7.336-16.388-16.387-16.388h-10.819a16.411 16.411 0 0 0-11.586 4.794l-2.183 2.168"
      stroke="#E1E4E5"
      strokeWidth={8.903}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M765.719 201.894h-52.444c-21.722 0-39.331-17.609-39.331-39.331v-39.338c0-21.722 17.609-39.331 39.331-39.331h39.338c21.722 0 39.331 17.609 39.331 39.331v32.782a19.66 19.66 0 0 1-19.669 19.661v0c-9.955 0-18.025-8.07-18.025-18.024v-18.025"
      stroke="#E1E4E5"
      strokeWidth={8.903}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M616.883 329.902c30.213-85.957-3.066-181.381-80.178-229.91-77.113-48.528-177.542-37.248-241.968 27.178-64.426 64.426-75.706 164.855-27.178 241.968 48.529 77.113 143.953 110.391 229.91 80.178"
      fill="#6f381e"
    />
    <path
      d="M616.883 329.902c30.213-85.957-3.066-181.381-80.178-229.91-77.113-48.528-177.542-37.248-241.968 27.178-64.426 64.426-75.706 164.855-27.178 241.968 48.529 77.113 143.953 110.391 229.91 80.178"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M433.379 185.699v80.113l40.468 40.468"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={565.216}
      cy={414.593}
      r={91.558}
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M541.715 458.134a7.72 7.72 0 0 1-8.072-.607 7.544 7.544 0 0 1-3.011-7.439l4.13-23.437-17.389-16.498a7.531 7.531 0 0 1-2.005-7.808c.899-2.768 3.319-4.783 6.227-5.187l24.143-3.416 10.9-21.527A7.667 7.667 0 0 1 563.5 368a7.667 7.667 0 0 1 6.862 4.215l10.9 21.527 24.143 3.416c2.908.404 5.328 2.419 6.227 5.187a7.531 7.531 0 0 1-2.005 7.808l-17.389 16.498 4.13 23.442a7.544 7.544 0 0 1-3.011 7.439 7.72 7.72 0 0 1-8.072.607L563.5 446.995l-21.785 11.139z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={719.443}
        y1={348.463}
        x2={875.848}
        y2={224.746}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={233.597}
        y1={388.252}
        x2={83.282}
        y2={248.589}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg401);
const Memo = memo(ForwardRef);
export default Memo;
