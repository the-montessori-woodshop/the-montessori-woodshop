import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg389 = (
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
      d="M672.83 357.083c-23.576 11.695-54.867-3.342-54.867-3.342s6.955-33.992 30.543-45.67c23.575-11.695 54.853 3.326 54.853 3.326s-6.954 33.991-30.529 45.686z"
      fill="url(#a)"
    />
    <path
      d="M130.509 488.722c30.804 18.463 74.998 1.396 74.998 1.396s-5.779-46.994-36.601-65.435c-30.805-18.462-74.98-1.416-74.98-1.416s5.778 46.993 36.583 65.455z"
      fill="url(#b)"
    />
    <circle
      cx={340.873}
      cy={190.18}
      r={12.873}
      transform="rotate(180 340.873 190.18)"
      fill="#6f381e"
    />
    <circle
      cx={265.843}
      cy={274.14}
      r={14.482}
      transform="rotate(180 265.843 274.14)"
      fill="#6f381e"
    />
    <circle
      r={5.632}
      transform="matrix(-1 0 0 1 640.288 251.775)"
      fill="#6f381e"
    />
    <circle
      r={7.241}
      transform="matrix(-1 0 0 1 672.79 503.073)"
      fill="#E1E4E5"
    />
    <circle
      r={10.459}
      transform="matrix(-1 0 0 1 166.665 427.888)"
      fill="#E1E4E5"
    />
    <circle
      r={7.96}
      transform="matrix(-1 0 0 1 335.762 324.859)"
      fill="#E1E4E5"
    />
    <circle
      r={8.85}
      transform="matrix(-1 0 0 1 643.668 130.081)"
      fill="#E1E4E5"
    />
    <circle
      r={7.947}
      transform="scale(1 -1) rotate(-75 -11.818 -284.175)"
      fill="#E1E4E5"
    />
    <circle
      r={10.572}
      transform="matrix(-1 0 0 1 414.047 99.372)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.133}
      ry={6.506}
      transform="matrix(-1 0 0 1 729.593 364.113)"
      fill="#E1E4E5"
    />
    <circle
      r={16.54}
      transform="scale(1 -1) rotate(-75 168.92 -448.959)"
      fill="#E1E4E5"
    />
    <path
      d="M791.267 319.178h.213c1.26 17.851 14.535 18.125 14.535 18.125s-14.639.286-14.639 20.912c0-20.626-14.639-20.912-14.639-20.912s13.27-.274 14.53-18.125zM256.55 492.715h.189c1.118 16.156 12.897 16.405 12.897 16.405s-12.989.258-12.989 18.926c0-18.668-12.989-18.926-12.989-18.926s11.774-.249 12.892-16.405z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M403.147 306.826c.285-37.42 30.8-67.552 68.221-67.363 37.421.19 67.63 30.628 67.536 68.049-.094 37.421-30.456 67.709-67.877 67.709a68.045 68.045 0 0 1-67.88-68.395z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M633.954 238.949a6.786 6.786 0 0 0-4.849 11.574 6.787 6.787 0 0 0 11.6-4.787 6.732 6.732 0 0 0-6.751-6.787m84.468 0a6.788 6.788 0 1 0 6.752 6.787 6.736 6.736 0 0 0-6.752-6.787"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M335.269 527.439v-16.97c.11-37.443 30.436-67.769 67.879-67.879h135.758c37.443.11 67.769 30.436 67.879 67.879v16.97c-.027 9.361-7.609 16.942-16.97 16.97H352.239c-9.361-.028-16.943-7.609-16.97-16.97z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M478.544 137.128c47.687-68.256 134.287-97.471 213.576-72.05 79.289 25.42 132.759 99.542 131.869 182.802-.891 83.26-55.933 156.222-135.748 179.941M132.586 131.307 103 160.893l29.586 29.586m88.758-59.172 29.586 29.586-29.586 29.586M89.299 274.384h173.77m-173.77 78.319h173.77m-173.77 78.319h173.77"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={582.297}
        y1={393.562}
        x2={776.749}
        y2={239.75}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={249.713}
        y1={548.151}
        x2={1.851}
        y2={317.855}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg389);
const Memo = memo(ForwardRef);
export default Memo;
