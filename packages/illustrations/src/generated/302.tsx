import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg302 = (
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
      d="M90.992 367.057c19.571 11.73 47.649.887 47.649.887s-3.671-29.857-23.254-41.573c-19.57-11.73-47.637-.9-47.637-.9s3.672 29.856 23.242 41.586z"
      fill="url(#a)"
    />
    <circle
      cx={594.022}
      cy={505.827}
      r={16.791}
      transform="rotate(180 594.022 505.827)"
      fill="#6f381e"
    />
    <circle
      r={15.742}
      transform="matrix(-1 0 0 1 336.546 506.897)"
      fill="#6f381e"
    />
    <circle
      r={7.346}
      transform="matrix(-1 0 0 1 786.195 350.568)"
      fill="#6f381e"
    />
    <circle
      r={9.445}
      transform="scale(1 -1) rotate(60 498.934 151.59)"
      fill="#E1E4E5"
    />
    <circle
      r={13.643}
      transform="matrix(-1 0 0 1 272.061 460.297)"
      fill="#E1E4E5"
    />
    <circle
      r={11.544}
      transform="matrix(-1 0 0 1 738.132 190.362)"
      fill="#E1E4E5"
    />
    <circle
      r={10.366}
      transform="scale(1 -1) rotate(-75 42.924 -551.638)"
      fill="#E1E4E5"
    />
    <circle
      r={13.79}
      transform="matrix(-1 0 0 1 211.238 105.508)"
      fill="#E1E4E5"
    />
    <circle
      r={14.756}
      transform="scale(1 -1) rotate(-75 283.503 -497.03)"
      fill="#E1E4E5"
    />
    <path
      d="M216.707 179.014h.151c.895 12.679 10.324 12.874 10.324 12.874s-10.398.203-10.398 14.853c0-14.65-10.397-14.853-10.397-14.853s9.425-.195 10.32-12.874zm38.646 164.188h.145c.859 12.641 9.912 12.836 9.912 12.836s-9.983.202-9.983 14.809c0-14.607-9.983-14.809-9.983-14.809s9.05-.195 9.909-12.836zm388.598 81.677h.145c.859 12.642 9.912 12.836 9.912 12.836s-9.983.203-9.983 14.809c0-14.606-9.982-14.809-9.982-14.809s9.049-.194 9.908-12.836z"
      fill="#E1E4E5"
    />
    <rect
      x={266.978}
      y={118.953}
      width={376.713}
      height={280.902}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={266.978}
      y={118.953}
      width={376.713}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={280.043}
      y={129.84}
      width={10.888}
      height={10.888}
      rx={5.444}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={299.641}
      y={129.84}
      width={10.888}
      height={10.888}
      rx={5.444}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={319.239}
      y={129.84}
      width={10.888}
      height={10.888}
      rx={5.444}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={295.286}
      y={170.125}
      width={81.657}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={399.807}
      y={170.125}
      width={211.221}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={295.286}
      y={331.262}
      width={81.657}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={399.807}
      y={331.262}
      width={28.308}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={445.535}
      y={331.262}
      width={28.308}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={491.263}
      y={331.262}
      width={28.308}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={536.992}
      y={331.262}
      width={28.308}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={582.72}
      y={331.262}
      width={28.308}
      height={32.663}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={295.286}
      y={221.297}
      width={81.657}
      height={91.456}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={399.807}
      y={221.297}
      width={211.221}
      height={91.456}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M192.942 325.996h76.213m450.749 0H643.69M145.036 269.38h124.119m498.655 0H643.691m-541.117-48.261h166.581m541.116 0H643.69M195.297 406.387v-82.746m522.252 82.746v-82.746M103.84 140.728v82.746m705.165-82.746v82.746"
    />
    <circle cx={102.574} cy={126.574} r={31.574} fill="#6f381e" />
    <path
      d="M88.42 127.663c7.817-10.162 20.491-10.162 28.308 0"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M107.193 121.955a6.532 6.532 0 1 1-9.238 9.238 6.532 6.532 0 0 1 9.238-9.238"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={31.574}
      transform="matrix(-1 0 0 1 810.272 126.574)"
      fill="#6f381e"
    />
    <circle cx={134.148} cy={271.38} r={31.574} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m134.145 279.078 5.75 3.012c1.118.586 2.428-.36 2.213-1.603l-1.098-6.382 4.652-4.516c.906-.88.407-2.415-.846-2.595l-6.426-.931-2.875-5.811c-.558-1.131-2.175-1.131-2.737 0l-2.872 5.811-6.426.931c-1.252.18-1.751 1.715-.845 2.595l4.652 4.516-1.098 6.382c-.215 1.243 1.095 2.189 2.213 1.603l5.749-3.012h-.006z"
      fill="#fff"
    />
    <circle
      r={31.574}
      transform="matrix(-1 0 0 1 778.697 271.38)"
      fill="#6f381e"
    />
    <path
      d="M779.242 272.469v-13.065m-.003 22.591a.817.817 0 1 0 .007 1.633.817.817 0 0 0-.007-1.633"
      stroke="#fff"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={192.942} cy={399.854} r={31.574} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M208.647 398.699c0 4.151-2.014 7.846-5.18 10.36-.517.411-.848 1.021-.848 1.681l-.001 1.127c-.001 1.484-1.561 2.452-2.891 1.791l-2.42-1.202a2.14 2.14 0 0 0-1.271-.186 16.38 16.38 0 0 1-2.465.187c-8.295 0-15.076-6.126-15.076-13.758 0-7.632 6.781-13.758 15.076-13.758 8.295 0 15.076 6.126 15.076 13.758z"
      fill="#fff"
    />
    <circle
      r={31.574}
      transform="matrix(-1 0 0 1 719.904 399.854)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M730.792 410.901v1.554c0 .857-.697 1.553-1.555 1.553h-18.665a1.554 1.554 0 0 1-1.555-1.553v-1.579c0-4.701 5.378-7.755 10.887-7.755s10.888 3.056 10.888 7.755m-7.038-21.404a5.444 5.444 0 1 1-7.7 7.699 5.444 5.444 0 0 1 7.7-7.699zm82.562-253.512v-2.18h2.719l2.309-2.314 3.187 1.357a3.07 3.07 0 0 0 3.378-.658l4.527-4.537a3.092 3.092 0 0 0 .657-3.386l-2.311-5.451a3.075 3.075 0 0 0-1.629-1.632l-5.439-2.316a3.07 3.07 0 0 0-3.378.659l-4.526 4.537a3.089 3.089 0 0 0-.656 3.385l1.319 3.112-9.266 9.287v4.905h4.894l2.04-2.044v-2.726h2.175v.002z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M814.074 121.495a2.36 2.36 0 0 0-2.352 2.363 2.354 2.354 0 0 0 2.363 2.351 2.358 2.358 0 0 0 0-4.714"
      fill="#6f381e"
    />
    <circle cx={456.397} cy={387.682} r={103.253} fill="#6f381e" />
    <rect
      x={447.955}
      y={344.174}
      width={16.884}
      height={87.019}
      rx={8.442}
      fill="#fff"
    />
    <rect
      x={499.906}
      y={379.24}
      width={16.884}
      height={87.019}
      rx={8.442}
      transform="rotate(90 499.906 379.24)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={166.726}
        y1={404.814}
        x2={9.252}
        y2={258.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg302);
const Memo = memo(ForwardRef);
export default Memo;
