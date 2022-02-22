import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg380 = (
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
      d="M373.367 500.232c29.312 17.568 71.366 1.328 71.366 1.328s-5.499-44.717-34.829-62.266c-29.312-17.568-71.348-1.347-71.348-1.347s5.499 44.717 34.811 62.285z"
      fill="url(#a)"
    />
    <circle
      cx={710.26}
      cy={454.451}
      r={15.74}
      transform="rotate(180 710.26 454.451)"
      fill="#6f381e"
    />
    <circle
      cx={191.381}
      cy={96.519}
      r={17.707}
      transform="rotate(180 191.381 96.52)"
      fill="#6f381e"
    />
    <circle
      r={14.756}
      transform="matrix(-1 0 0 1 223.833 483.188)"
      fill="#6f381e"
    />
    <circle
      r={8.854}
      transform="matrix(-1 0 0 1 545.301 523.686)"
      fill="#E1E4E5"
    />
    <circle
      r={12.789}
      transform="matrix(-1 0 0 1 615.966 558.363)"
      fill="#E1E4E5"
    />
    <circle
      r={9.733}
      transform="matrix(-1 0 0 1 664.025 119.554)"
      fill="#E1E4E5"
    />
    <circle
      r={9.717}
      transform="scale(1 -1) rotate(-75 143.216 -241.59)"
      fill="#E1E4E5"
    />
    <circle
      r={12.927}
      transform="matrix(-1 0 0 1 433.352 66.136)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.944}
      ry={7.955}
      transform="matrix(-1 0 0 1 294.562 558.12)"
      fill="#E1E4E5"
    />
    <circle
      r={20.223}
      transform="scale(1 -1) rotate(-75 290.327 -459.465)"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M694.521 157.923v123.348c0 120.675-74.847 228.694-187.835 271.072l-33.543 12.57a29.63 29.63 0 0 1-20.385 0l-33.607-12.57C306.188 509.944 231.367 401.929 231.38 281.271V157.923c-.008-25.296 16.389-47.677 40.511-55.295l173.702-54.254a57.446 57.446 0 0 1 34.715 0l173.702 54.254c24.123 7.617 40.52 29.999 40.511 55.295z"
      fill="#6f381e"
    />
    <path
      d="M462.953 376.642a6.754 6.754 0 1 1-7.002 6.749 6.891 6.891 0 0 1 7.002-6.749m111.911-130.156c-65.914-50.941-157.913-50.941-223.827 0m46.648 68.001c38.456-29.682 92.097-29.682 130.554 0"
      stroke="#fff"
      strokeWidth={38.39}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={486.798}
        y1={556.783}
        x2={250.94}
        y2={337.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg380);
const Memo = memo(ForwardRef);
export default Memo;
