import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg139 = (
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
    <rect
      x={148}
      y={73}
      width={603}
      height={379}
      rx={28}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={190}
      y={207.807}
      width={33.514}
      height={162.193}
      rx={4}
      fill="#6f381e"
    />
    <rect
      x={242.003}
      y={155}
      width={34.669}
      height={215}
      rx={4}
      fill="#6f381e"
    />
    <rect
      x={294.007}
      y={207.807}
      width={33.514}
      height={162.193}
      rx={4}
      fill="#6f381e"
    />
    <rect
      x={400.326}
      y={207.807}
      width={33.514}
      height={162.193}
      rx={4}
      fill="#6f381e"
    />
    <rect
      x={347.167}
      y={155}
      width={33.514}
      height={215}
      rx={4}
      fill="#6f381e"
    />
    <rect
      x={453.486}
      y={155}
      width={33.514}
      height={215}
      rx={4}
      fill="#6f381e"
    />
    <path
      clipRule="evenodd"
      d="M723.726 257.863v0c0 57.367-46.496 103.863-103.863 103.863v0C562.496 361.726 516 315.23 516 257.863v0C516 200.496 562.496 154 619.863 154v0c57.367 0 103.863 46.496 103.863 103.863z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m693.306 331.306-70.062-70.061a11.534 11.534 0 0 1-3.381-8.16V154m.805 103.402 89.092-51.47"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m709.811 205.931-85.807 49.541a11.532 11.532 0 0 0-5.378 7.006l-25.645 95.709m27.541-99.669 72.734 72.774"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M682.995 536.466s-15.79-39.839-33.436-53.55c-17.461-13.564-69.232-39.37-97.255-76.52a1.869 1.869 0 0 1 .091-2.382c2.14-2.345 8.226-6.457 21.283 1.821 16.977 10.805 30.19 18.74 30.19 18.74s-22.964-83.754-27.499-106.911c-.897-4.571-1.107-8.349-.837-11.517.846-9.878 14.87-11.093 17.623-1.565l16.127 55.745s1.438-6.448 7.22-7.625c5.472-1.1 13.644 5.965 15.669 14.849 0 0 2.225-7.103 9.883-6.399 7.657.705 12.823 10.109 14.39 15.18 0 0 .653-7.235 6.313-8.317 5.66-1.082 13.838 7.878 15.417 11.349 1.578 3.47 19.725 29.954 27.473 79.284l43.717 47.226s-3.923 24.003-66.369 30.592zm-495.07 19.537s18.518-46.721 39.212-62.8c20.476-15.907 81.191-46.17 114.054-89.738a2.19 2.19 0 0 0-.107-2.793c-2.51-2.751-9.647-7.573-24.959 2.136-19.91 12.671-35.405 21.977-35.405 21.977s26.93-98.221 32.249-125.379c1.053-5.361 1.299-9.791.982-13.506-.992-11.585-17.439-13.009-20.668-1.836l-18.912 65.374s-1.686-7.561-8.467-8.942c-6.418-1.29-16.001 6.996-18.376 17.414 0 0-2.609-8.33-11.589-7.504-8.981.826-15.039 11.855-16.877 17.802 0 0-.765-8.485-7.403-9.754-6.637-1.268-16.229 9.24-18.08 13.309-1.851 4.07-23.132 35.129-32.219 92.98l-51.268 55.383s4.601 28.149 77.833 35.877z"
      fill="#F8AE9D"
    />
    <path
      d="M493.904 433.644c-18.643 4.417-38.361-11.394-38.361-11.394s10.522-22.963 29.172-27.366c18.643-4.416 38.355 11.381 38.355 11.381s-10.522 22.963-29.166 27.379z"
      fill="url(#a)"
    />
    <path
      d="M732.51 399.056c.565-7.754-7.042-14.633-7.042-14.633s-8.521 5.698-9.081 13.454c-.565 7.755 7.037 14.632 7.037 14.632s8.52-5.699 9.086-13.453z"
      fill="url(#b)"
    />
    <path
      d="M91.8 357.483c12.432 12.653 35.679 9.985 35.679 9.985s3.076-23.182-9.367-35.827c-12.431-12.652-35.666-9.992-35.666-9.992s-3.077 23.182 9.355 35.834z"
      fill="url(#c)"
    />
    <circle
      cx={604.19}
      cy={504.191}
      r={15.191}
      transform="rotate(180 604.19 504.191)"
      fill="#6f381e"
    />
    <circle
      cx={526.265}
      cy={368.265}
      r={7.265}
      transform="rotate(180 526.265 368.265)"
      fill="#6f381e"
    />
    <circle r={13} transform="matrix(-1 0 0 1 430 454)" fill="#6f381e" />
    <circle r={11} transform="matrix(-1 0 0 1 274 493)" fill="#6f381e" />
    <circle
      r={9.907}
      transform="matrix(-1 0 0 1 779.907 413.907)"
      fill="#E1E4E5"
    />
    <circle
      r={10.556}
      transform="matrix(-1 0 0 1 67.556 503.679)"
      fill="#fff"
    />
    <circle
      r={8.467}
      transform="matrix(-1 0 0 1 391.466 412.467)"
      fill="#E1E4E5"
    />
    <circle
      r={12.923}
      transform="matrix(-1 0 0 1 703.922 108.923)"
      fill="#E1E4E5"
    />
    <circle
      r={4.929}
      transform="scale(1 -1) rotate(-75 -231.429 -302.887)"
      fill="#E1E4E5"
    />
    <circle
      r={11.245}
      transform="matrix(-1 0 0 1 311.245 165.245)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.65}
      ry={6.92}
      transform="matrix(-1 0 0 1 691.419 389.89)"
      fill="#fff"
    />
    <ellipse
      rx={14.079}
      ry={11.115}
      transform="scale(-1 1) rotate(26.006 -1508.372 -1536.117)"
      fill="#fff"
    />
    <circle r={9.5} transform="matrix(0 1 1 0 524.5 146.5)" fill="#E1E4E5" />
    <path
      d="M205.453 147h.227c1.34 18.986 15.46 19.278 15.46 19.278s-15.57.304-15.57 22.242c0-21.938-15.571-22.242-15.571-22.242s14.114-.292 15.454-19.278zm356.001 109h.226c1.34 18.986 15.46 19.278 15.46 19.278s-15.57.304-15.57 22.242c0-21.938-15.57-22.242-15.57-22.242s14.114-.292 15.454-19.278zm-144.31-109h.163c.966 13.893 11.149 14.107 11.149 14.107s-11.229.222-11.229 16.275c0-16.053-11.228-16.275-11.228-16.275s10.178-.214 11.145-14.107z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={423.699}
        y1={444.626}
        x2={586.902}
        y2={367.523}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={732.376}
        y1={370.22}
        x2={712.024}
        y2={440.584}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={141.4}
        y1={400.702}
        x2={51.528}
        y2={259.819}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg139);
const Memo = memo(ForwardRef);
export default Memo;
