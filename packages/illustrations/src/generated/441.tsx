import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg441 = (
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
      x={143}
      y={71}
      width={613.382}
      height={457.377}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={143}
      y={71}
      width={613.382}
      height={53.183}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={164.273}
      y={88.728}
      width={17.728}
      height={17.728}
      rx={8.864}
      fill="#E1E4E5"
    />
    <rect
      x={196.183}
      y={88.728}
      width={17.728}
      height={17.728}
      rx={8.864}
      fill="#E1E4E5"
    />
    <rect
      x={228.093}
      y={88.728}
      width={17.728}
      height={17.728}
      rx={8.864}
      fill="#E1E4E5"
    />
    <path
      d="m500.456 359.831 91.987 28.548c21.84 6.76 22.152 37.544.468 44.772l-25.272 8.424a23.516 23.516 0 0 0-14.872 14.871l-8.424 25.272c-7.228 21.684-37.959 21.32-44.771-.468l-28.548-91.987c-5.616-18.096 11.336-35.048 29.432-29.432zM287.202 469.809l25.367 25.367c9.628 9.628 22.772 9.126 29.219-1.172l14.148-22.353-45.209-45.209-22.353 14.149c-9.628 6.111-10.214 20.176-1.172 29.218z"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m355.936 471.651 32.902 2.01c18.335 1.088 24.782-4.521 26.791-22.019l8.205-69.655c1.758-14.651-8.875-25.2-23.442-23.442l-69.655 8.205c-17.498 2.093-23.861 8.456-22.019 26.79l1.926 32.902M414.29 368.09l-25.368 25.451"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M414.746 353.314v-11.061c-21.932-13.255-39.954-39.097-39.954-66.559 0-47.202 43.387-84.2 92.4-73.52 21.551 4.768 40.432 19.071 50.253 38.81 19.93 40.05-1.049 82.579-31.849 101.173v11.062c0 2.765 1.049 9.154-9.154 9.154H423.9c-10.489.095-9.154-4.005-9.154-9.059z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m450.028 256.527-10.203 17.736c-2.289 3.91-.381 7.152 4.1 7.152h12.111c4.577 0 6.389 3.242 4.1 7.151l-10.108 17.737"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M562.508 266.938h26.937m-34.939 46.66 21.591 13.674M547.139 214.32l21.354-17.84m-63.419-14.484 9.464-22.299M337.55 266.938h-26.937m34.939 46.66-21.59 13.674m28.956-112.952-21.354-17.84m63.419-14.484-9.463-22.3"
    />
    <path
      d="M290 238.366c12.068 5.986 28.084-1.711 28.084-1.711s-3.559-17.399-15.633-23.377c-12.068-5.986-28.078 1.702-28.078 1.702s3.56 17.399 15.627 23.386z"
      fill="url(#a)"
    />
    <circle
      r={8.195}
      transform="matrix(1 0 0 -1 248.195 211.774)"
      fill="#6f381e"
    />
    <circle
      r={15.413}
      transform="matrix(1 0 0 -1 634.302 212.013)"
      fill="#6f381e"
    />
    <circle cx={626.383} cy={319.226} r={8.191} fill="#6f381e" />
    <circle cx={267.213} cy={303.36} r={7.675} fill="#6f381e" />
    <circle cx={450.134} cy={468.936} r={9.071} fill="#E1E4E5" />
    <circle
      cx={652.449}
      cy={415.069}
      r={6.321}
      transform="rotate(105 652.449 415.069)"
      fill="#E1E4E5"
    />
    <ellipse cx={259.61} cy={378.348} rx={11.829} ry={9.463} fill="#E1E4E5" />
    <circle
      cx={593.421}
      cy={478.151}
      r={13.607}
      transform="rotate(90 593.421 478.151)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={336.341}
        y1={257.038}
        x2={236.807}
        y2={178.307}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg441);
const Memo = memo(ForwardRef);
export default Memo;
