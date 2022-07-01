import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg7 = (
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
    <g clipPath="url(#a)">
      <path fill="transparent" d="M0 0h900v600H0z" />
      <path
        d="M625.227 199.556c-7.207-59.747-144.1-159.716-278.873-90.066-62.681 32.396-51.008 65.793-93.466 119.992-25.307 32.303-64.906 60.333-70.007 101.71-4.412 35.716 8.365 71.021 30.529 91.546 49.847 46.159 137.962 68.262 203.674-29.861 65.712-98.123 226.715-39.225 208.143-193.321z"
        fill="url(#b)"
      />
      <path
        d="M429.414 464.414c79.138-62.749 161.065-130.069 248.627-149.661 90.325-20.23 97.167 10.2 90.559 53.554-6.607 43.353-59.151 135.473-181.881 161.211-122.762 25.747-231.36-6.373-157.305-65.104z"
        fill="url(#c)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M597.829 292.355c0 81.284-65.891 147.174-147.174 147.174-81.284 0-147.175-65.89-147.175-147.174s65.891-147.174 147.175-147.174c81.283 0 147.174 65.89 147.174 147.174z"
        fill="#6f381e"
        stroke="#6f381e"
        strokeWidth={29.565}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m618.839 460.54-64.057-64.057"
        stroke="#6f381e"
        strokeWidth={29.565}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M343.282 293.81h49.255l25.484-38.012 33.968 76.024 25.484-38.012h76.002"
        stroke="#fff"
        strokeWidth={22.007}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        r={15.688}
        transform="matrix(1 0 0 -1 353.761 498.351)"
        fill="#6f381e"
      />
      <circle
        r={18.782}
        transform="scale(-1 1) rotate(30 -518.683 -1104.96)"
        fill="#6f381e"
      />
      <circle
        r={13.877}
        transform="matrix(1 0 0 -1 173.354 266.055)"
        fill="#6f381e"
      />
      <circle
        r={8.447}
        transform="scale(-1 1) rotate(30 -834.583 -1137.286)"
        fill="#6f381e"
      />
      <circle
        cx={249.982}
        cy={189.428}
        r={7.24}
        transform="rotate(-180 249.982 189.428)"
        fill="#E1E4E5"
      />
      <circle
        cx={728.712}
        cy={358.194}
        r={10.861}
        transform="rotate(-30 728.712 358.194)"
        fill="#E1E4E5"
      />
      <circle
        r={13.877}
        transform="matrix(1 0 0 -1 201.109 453.099)"
        fill="#E1E4E5"
      />
      <circle
        r={11.675}
        transform="scale(-1 1) rotate(30 -316.465 -755.99)"
        fill="#E1E4E5"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={424.479}
        y1={-130.843}
        x2={379.961}
        y2={883.735}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={417.953}
        y1={741.762}
        x2={849.247}
        y2={-61.471}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h900v600H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg7);
const Memo = memo(ForwardRef);
export default Memo;
