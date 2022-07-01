import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg215 = (
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
      d="M606.693 205.487c-9.464 16.891-30.193 19.212-63.401 16.002-24.975-2.418-47.751-4.29-72.728-17.908-17.482-9.524-31.32-22.411-41.421-34.927-10.945-13.559-26.222-29.034-18.733-44.408 10.292-21.118 69.81-38.905 127.603-9.818 63.486 31.961 77.939 74.55 68.68 91.059z"
      fill="url(#a)"
    />
    <path
      d="M736.634 300.401c-23.901 11.856-55.622-3.388-55.622-3.388s7.05-34.459 30.963-46.299c23.9-11.855 55.608 3.372 55.608 3.372s-7.049 34.46-30.949 46.315z"
      fill="url(#b)"
    />
    <path
      d="M213.061 209.673c13.837 8.293 33.688.626 33.688.626s-2.595-21.109-16.441-29.392c-13.837-8.293-33.68-.637-33.68-.637s2.596 21.11 16.433 29.403z"
      fill="url(#c)"
    />
    <circle
      cx={667.398}
      cy={360.65}
      r={13.05}
      transform="rotate(180 667.398 360.65)"
      fill="#6f381e"
    />
    <circle
      cx={199.743}
      cy={275.743}
      r={10.743}
      transform="rotate(180 199.743 275.743)"
      fill="#6f381e"
    />
    <circle
      r={12.234}
      transform="matrix(-1 0 0 1 231.772 410.372)"
      fill="#6f381e"
    />
    <circle
      r={5.709}
      transform="matrix(-1 0 0 1 637.173 258.91)"
      fill="#6f381e"
    />
    <circle
      r={7.341}
      transform="matrix(-1 0 0 1 254.341 145.341)"
      fill="#E1E4E5"
    />
    <circle
      r={10.603}
      transform="matrix(-1 0 0 1 131.184 416.663)"
      fill="#E1E4E5"
    />
    <circle
      r={8.07}
      transform="matrix(-1 0 0 1 546.58 484.457)"
      fill="#E1E4E5"
    />
    <circle
      r={8.972}
      transform="matrix(-1 0 0 1 651.972 175.972)"
      fill="#E1E4E5"
    />
    <circle
      r={8.057}
      transform="scale(1 -1) rotate(-75 -84.549 -225.84)"
      fill="#E1E4E5"
    />
    <circle
      r={10.718}
      transform="matrix(-1 0 0 1 315.12 153.309)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.245}
      ry={6.596}
      transform="matrix(-1 0 0 1 722.194 411.711)"
      fill="#E1E4E5"
    />
    <circle
      r={16.767}
      transform="scale(1 -1) rotate(-75 -161.22 -438.39)"
      fill="#E1E4E5"
    />
    <path
      d="M643.152 401.826h.216c1.277 18.096 14.735 18.374 14.735 18.374s-14.84.29-14.84 21.2c0-20.91-14.84-21.2-14.84-21.2s13.452-.278 14.729-18.374zm-463.25 49.638h.113c.668 9.824 7.704 9.976 7.704 9.976s-7.759.157-7.759 11.509c0-11.352-7.758-11.509-7.758-11.509s7.033-.152 7.7-9.976z"
      fill="#E1E4E5"
    />
    <circle cx={449.705} cy={286.363} r={208.295} fill="url(#d)" />
    <rect
      x={305.49}
      y={142.313}
      width={287.039}
      height={287.039}
      rx={143.519}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M514.239 346.038v9.597c0 5.297-4.243 9.597-9.471 9.597H391.123c-5.228 0-9.47-4.3-9.47-9.597v-9.75c0-29.04 32.748-47.907 66.293-47.907 33.544 0 66.293 18.877 66.293 47.907m-42.524-132.214c13.132 13.132 13.132 34.423 0 47.555-13.132 13.132-34.424 13.132-47.556 0-13.132-13.132-13.132-34.423 0-47.555 13.132-13.133 34.424-13.133 47.556 0z"
      fill="#fff"
    />
    <circle cx={449.202} cy={457.27} r={64.538} fill="#2D2019" />
    <rect
      x={443.926}
      y={430.074}
      width={10.553}
      height={54.39}
      rx={5.277}
      fill="#fff"
    />
    <rect
      x={476.397}
      y={451.993}
      width={10.553}
      height={54.39}
      rx={5.277}
      transform="rotate(90 476.397 451.993)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={542.933}
        y1={314.96}
        x2={458.573}
        y2={-64.121}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={644.855}
        y1={337.382}
        x2={841.983}
        y2={181.454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={266.606}
        y1={236.368}
        x2={155.268}
        y2={132.92}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={458.588}
        y1={728.222}
        x2={445.742}
        y2={-375.11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg215);
const Memo = memo(ForwardRef);
export default Memo;
