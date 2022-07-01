import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg481 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M206.664 47.1c-44.182 0-80 35.817-80 80v159.085c0 44.182 35.818 80 80 80h159.085c4.719 0 9.342-.409 13.836-1.192v-77.817c0-39.465 28.575-72.255 66.164-78.808V127.1c0-44.183-35.817-80-80-80H206.664z"
      fill="#6f381e"
    />
    <path
      d="M233.76 250.849s19.805 12.236 52.834 12.236c33.03 0 52.835-12.236 52.835-12.236"
      stroke="#fff"
      strokeWidth={22.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M246.389 175.964c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916zm132.242 0c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916z"
      fill="#fff"
      stroke="#fff"
    />
    <rect
      x={392.391}
      y={219.982}
      width={319.085}
      height={319.085}
      rx={80}
      fill="#6f381e"
    />
    <path
      d="M499.486 423.731s19.805 12.236 52.835 12.236c33.029 0 52.835-12.236 52.835-12.236"
      stroke="#fff"
      strokeWidth={22.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M512.115 348.846c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.915 26.53-25.915 26.53 11.613 26.53 25.915zm132.242 0c0 14.302-11.867 25.916-26.53 25.916s-26.53-11.614-26.53-25.916 11.867-25.915 26.53-25.915 26.53 11.613 26.53 25.915z"
      fill="#fff"
      stroke="#fff"
    />
    <path
      d="M490.885 95.174c15.829 7.852 36.839-2.244 36.839-2.244s-4.669-22.824-20.507-30.665c-15.83-7.852-36.831 2.233-36.831 2.233s4.669 22.824 20.499 30.676z"
      fill="url(#a)"
    />
    <circle
      r={10.75}
      transform="matrix(1 0 0 -1 247.333 472.98)"
      fill="#6f381e"
    />
    <circle
      r={20.218}
      transform="matrix(1 0 0 -1 512.923 161.229)"
      fill="#6f381e"
    />
    <circle cx={656.056} cy={192.308} r={10.745} fill="#6f381e" />
    <circle cx={760.813} cy={483.821} r={15.187} fill="#E1E4E5" />
    <circle cx={266.345} cy={410.887} r={19.09} fill="#E1E4E5" />
    <circle
      cx={617.993}
      cy={130.767}
      r={15.162}
      transform="rotate(105 617.993 130.767)"
      fill="#E1E4E5"
    />
    <ellipse cx={138.979} cy={379.664} rx={15.516} ry={12.413} fill="#E1E4E5" />
    <circle
      cx={339.252}
      cy={529.682}
      r={24.765}
      transform="rotate(90 339.252 529.682)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={551.672}
        y1={119.668}
        x2={421.109}
        y2={16.392}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg481);
const Memo = memo(ForwardRef);
export default Memo;
