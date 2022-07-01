import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg180 = (
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
      d="M618.346 199.01c-10.17 18.151-32.444 20.645-68.128 17.196-26.836-2.599-51.309-4.61-78.148-19.243-18.785-10.235-33.655-24.082-44.508-37.531-11.761-14.57-28.177-31.198-20.129-47.717 11.059-22.693 75.012-41.805 137.113-10.551 68.218 34.344 83.749 80.107 73.8 97.846z"
      fill="url(#a)"
    />
    <path
      d="M757.971 300.999c-25.682 12.74-59.767-3.641-59.767-3.641s7.575-37.027 33.27-49.749c25.682-12.739 59.754 3.623 59.754 3.623s-7.576 37.028-33.257 49.767z"
      fill="url(#b)"
    />
    <path
      d="M195.373 203.508c14.868 8.911 36.2.674 36.2.674s-2.789-22.683-17.667-31.584c-14.868-8.911-36.191-.684-36.191-.684s2.79 22.683 17.658 31.594z"
      fill="url(#c)"
    />
    <circle
      cx={683.575}
      cy={365.739}
      r={14.023}
      transform="rotate(180 683.575 365.739)"
      fill="#6f381e"
    />
    <circle
      cx={213.877}
      cy={267.972}
      r={11.543}
      transform="rotate(180 213.877 267.972)"
      fill="#6f381e"
    />
    <circle
      r={13.146}
      transform="matrix(-1 0 0 1 215.479 419.167)"
      fill="#6f381e"
    />
    <circle
      r={6.135}
      transform="matrix(-1 0 0 1 651.097 256.416)"
      fill="#6f381e"
    />
    <circle
      r={7.888}
      transform="matrix(-1 0 0 1 447.929 537.886)"
      fill="#E1E4E5"
    />
    <circle
      r={11.393}
      transform="matrix(-1 0 0 1 107.394 425.926)"
      fill="#E1E4E5"
    />
    <circle
      r={8.671}
      transform="matrix(-1 0 0 1 553.752 498.774)"
      fill="#E1E4E5"
    />
    <circle
      r={9.641}
      transform="matrix(-1 0 0 1 657.676 168.732)"
      fill="#E1E4E5"
    />
    <circle
      r={8.657}
      transform="scale(1 -1) rotate(-75 -93.434 -209.904)"
      fill="#E1E4E5"
    />
    <circle
      r={11.517}
      transform="matrix(-1 0 0 1 305.039 142.944)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.859}
      ry={7.087}
      transform="matrix(-1 0 0 1 742.455 420.605)"
      fill="#E1E4E5"
    />
    <circle
      r={18.017}
      transform="scale(1 -1) rotate(-75 -175.82 -438.297)"
      fill="#E1E4E5"
    />
    <path
      d="M657.522 409.983h.232c1.372 19.445 15.833 19.745 15.833 19.745s-15.946.311-15.946 22.779c0-22.468-15.946-22.779-15.946-22.779s14.455-.3 15.827-19.745zm-497.779 53.338h.122c.717 10.557 8.278 10.72 8.278 10.72s-8.337.169-8.337 12.367c0-12.198-8.337-12.367-8.337-12.367s7.557-.163 8.274-10.72z"
      fill="#E1E4E5"
    />
    <circle cx={448.238} cy={317.905} r={183.404} fill="#6f381e" />
    <path
      clipRule="evenodd"
      d="M448.237 351.975v0c-20.371 0-36.884-16.513-36.884-36.884v-73.769c0-20.371 16.513-36.885 36.884-36.885v0c20.371 0 36.885 16.514 36.885 36.885v73.769c0 20.371-16.514 36.884-36.885 36.884z"
      stroke="#fff"
      strokeWidth={14.572}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M522.009 302.797v12.295c0 40.741-33.027 73.769-73.769 73.769v0c-40.741 0-73.769-33.028-73.769-73.769v-12.295m73.765 86.064v36.885m-36.883-.001h73.769"
      stroke="#fff"
      strokeWidth={14.572}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={549.833}
        y1={316.643}
        x2={459.185}
        y2={-90.692}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={659.352}
        y1={340.737}
        x2={871.172}
        y2={173.186}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={252.91}
        y1={232.193}
        x2={133.273}
        y2={121.035}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg180);
const Memo = memo(ForwardRef);
export default Memo;
