import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg487 = (
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
      x={723.819}
      y={87.5}
      width={416.104}
      height={549.973}
      rx={61.303}
      transform="rotate(90 723.819 87.5)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={75.039}
      y={482.731}
      width={749.182}
      height={28.842}
      rx={10.218}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle cx={449.64} cy={299.647} r={137.488} fill="#6f381e" />
    <path
      d="m361.037 335.784 73.327-48.012 36.664 36.409m-.001.255 73.327-48.885"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M221.813 147.196a9.057 9.057 0 0 0 0 18.113h90.567a9.057 9.057 0 1 0 0-18.113h-90.567zm0 36.227a9.057 9.057 0 1 0 0 18.113h36.226a9.057 9.057 0 0 0 0-18.113h-36.226zm455.022-36.227a9.057 9.057 0 0 1 0 18.113h-90.567a9.057 9.057 0 1 1 0-18.113h90.567zm0 36.227a9.057 9.057 0 1 1 0 18.113h-36.227a9.057 9.057 0 0 1 0-18.113h36.227z"
      fill="#6f381e"
    />
    <path
      d="M357.354 148.93c17.057 8.462 39.698-2.419 39.698-2.419s-5.032-24.594-22.099-33.044c-17.058-8.462-39.689 2.407-39.689 2.407s5.032 24.594 22.09 33.056z"
      fill="url(#a)"
    />
    <circle
      r={12.307}
      transform="matrix(1 0 0 -1 266.746 323.026)"
      fill="#6f381e"
    />
    <circle
      r={18.937}
      transform="matrix(1 0 0 -1 650.656 316.831)"
      fill="#6f381e"
    />
    <circle cx={507.216} cy={134.915} r={12.301} fill="#6f381e" />
    <circle cx={669.413} cy={410.403} r={17.387} fill="#E1E4E5" />
    <circle cx={327.212} cy={436.933} r={15.059} fill="#E1E4E5" />
    <ellipse cx={245.399} cy={282.969} rx={9.13} ry={7.519} fill="#E1E4E5" />
    <circle
      cx={235.254}
      cy={428.339}
      r={10.742}
      transform="rotate(90 235.254 428.339)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={422.858}
        y1={175.324}
        x2={282.164}
        y2={64.034}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg487);
const Memo = memo(ForwardRef);
export default Memo;
