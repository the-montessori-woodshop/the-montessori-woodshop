import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg211 = (
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
    <circle cx={450} cy={300} r={251} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M684.333 490.778H389.667c-40.689 0-73.667-32.978-73.667-73.667V220.667C316 179.978 348.978 147 389.667 147h294.666C725.022 147 758 179.978 758 220.667v196.444c0 40.689-32.978 73.667-73.667 73.667z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M426.108 400.167H363h63.108z"
      fill="#fff"
    />
    <path
      d="M426.108 400.167H363"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M521.108 400.167H458h63.108z"
      fill="#fff"
    />
    <path
      d="M521.108 400.167H458"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M616.108 400.167H553h63.108z"
      fill="#fff"
    />
    <path
      d="M616.108 400.167H553"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M711.108 400.167H648h63.108z"
      fill="#fff"
    />
    <path
      d="M711.108 400.167H648"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={356} y={211.889} width={78} height={78} rx={20} fill="#E1E4E5" />
    <rect x={596} y={212.889} width={78} height={77} rx={38.5} fill="#E1E4E5" />
    <rect x={644} y={212.889} width={78} height={77} rx={38.5} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M510.333 453.778H215.667c-40.689 0-73.667-32.978-73.667-73.667V183.667C142 142.978 174.978 110 215.667 110h294.666C551.022 110 584 142.978 584 183.667v196.444c0 40.689-32.978 73.667-73.667 73.667z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M252.108 363.167H189h63.108z"
      fill="#fff"
    />
    <path
      d="M252.108 363.167H189"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M347.108 363.167H284h63.108z"
      fill="#fff"
    />
    <path
      d="M347.108 363.167H284"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M442.108 363.167H379h63.108z"
      fill="#fff"
    />
    <path
      d="M442.108 363.167H379"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M537.108 363.167H474h63.108z"
      fill="#fff"
    />
    <path
      d="M537.108 363.167H474"
      stroke="#E1E4E5"
      strokeWidth={14}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={182} y={174.889} width={78} height={78} rx={20} fill="#E1E4E5" />
    <rect x={422} y={175.889} width={78} height={77} rx={38.5} fill="#E1E4E5" />
    <rect x={470} y={175.889} width={78} height={77} rx={38.5} fill="#6f381e" />
    <defs>
      <linearGradient
        id="a"
        x1={460.704}
        y1={832.45}
        x2={445.225}
        y2={-497.091}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg211);
const Memo = memo(ForwardRef);
export default Memo;
