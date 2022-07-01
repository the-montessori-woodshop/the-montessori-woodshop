import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg100 = (
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
      x={202.043}
      y={94.14}
      width={486.827}
      height={369.855}
      rx={184.928}
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M539.67 326.441c0-76.628-62.119-138.747-138.747-138.747H281.747C205.119 187.694 143 249.813 143 326.441c0 76.628 62.119 138.748 138.747 138.748h39.87l62.495 50.222c4.627 3.718 11.499.425 11.499-5.511v-44.711h5.312c76.628 0 138.747-62.12 138.747-138.748z"
      fill="#6f381e"
    />
    <rect
      x={245.821}
      y={267.208}
      width={160.401}
      height={13.71}
      rx={6.855}
      fill="#fff"
    />
    <rect
      x={245.821}
      y={302.854}
      width={84.999}
      height={13.71}
      rx={6.855}
      fill="#fff"
    />
    <rect
      x={245.821}
      y={338.499}
      width={130.24}
      height={13.71}
      rx={6.855}
      fill="#fff"
    />
    <rect
      x={245.821}
      y={374.144}
      width={178.224}
      height={13.71}
      rx={6.855}
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M558.531 386.151c0-38.222 30.986-69.207 69.208-69.207h59.445c38.222 0 69.207 30.985 69.207 69.207 0 38.223-30.985 69.208-69.207 69.208h-19.887l-31.173 25.051c-2.308 1.855-5.736.212-5.736-2.749v-22.302h-2.649c-38.222 0-69.208-30.985-69.208-69.208z"
      fill="#6f381e"
    />
    <rect
      x={616.205}
      y={367.075}
      width={80.009}
      height={6.838}
      rx={3.419}
      fill="#fff"
    />
    <rect
      x={616.205}
      y={384.854}
      width={42.398}
      height={6.838}
      rx={3.419}
      fill="#fff"
    />
    <rect
      x={616.205}
      y={402.634}
      width={64.964}
      height={6.838}
      rx={3.419}
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M748.93 169.081C748.93 121.54 710.39 83 662.849 83h-73.938c-47.542 0-86.081 38.54-86.081 86.081 0 47.541 38.539 86.081 86.081 86.081h24.735l38.773 31.159c2.871 2.307 7.134.263 7.134-3.419v-27.74h3.296c47.541 0 86.081-38.54 86.081-86.081z"
      fill="#6f381e"
    />
    <rect
      x={566.621}
      y={137.845}
      width={63.617}
      height={10.261}
      rx={5.13}
      fill="#fff"
    />
    <rect
      x={566.621}
      y={164.523}
      width={97.477}
      height={10.261}
      rx={5.13}
      fill="#fff"
    />
    <rect
      x={566.621}
      y={191.202}
      width={133.39}
      height={10.261}
      rx={5.13}
      fill="#fff"
    />
    <circle
      r={13.901}
      transform="scale(-1 1) rotate(-45 8.332 463.503)"
      fill="#E1E4E5"
    />
    <circle
      r={6.546}
      transform="scale(-1 1) rotate(-45 -33.821 617.239)"
      fill="#E1E4E5"
    />
    <path
      d="M691.013 287.017c5.788.387 12.092-4.154 12.092-4.154s-5.574-6.394-11.363-6.781c-5.788-.388-10.647 1.745-10.849 4.767-.201 3.021 4.327 5.782 10.12 6.168z"
      fill="#E1E4E5"
    />
    <circle
      cx={567.85}
      cy={287.273}
      r={9.142}
      transform="rotate(-178.879 567.85 287.273)"
      fill="#E1E4E5"
    />
    <circle
      cx={519.946}
      cy={461.06}
      r={9.142}
      transform="rotate(-178.879 519.946 461.06)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={455.837}
        y1={671.357}
        x2={447.173}
        y2={-308.255}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg100);
const Memo = memo(ForwardRef);
export default Memo;
