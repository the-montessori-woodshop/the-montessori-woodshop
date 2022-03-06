import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg191 = (
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
      d="M664.349 249.148c-10.015 4.968-23.308-1.42-23.308-1.42s2.954-14.44 12.975-19.401c10.015-4.968 23.302 1.413 23.302 1.413s-2.954 14.44-12.969 19.408z"
      fill="url(#a)"
    />
    <path
      d="M212.814 241.124c16.388 9.822 39.901.742 39.901.742s-3.075-25.001-19.473-34.812c-16.388-9.823-39.891-.754-39.891-.754s3.075 25.001 19.463 34.824z"
      fill="url(#b)"
    />
    <circle r={6} transform="matrix(-1 0 0 1 217 499)" fill="#E1E4E5" />
    <circle
      r={9.558}
      transform="matrix(-1 0 0 1 659.046 504.701)"
      fill="#E1E4E5"
    />
    <circle
      r={10.626}
      transform="matrix(-1 0 0 1 610.514 179.51)"
      fill="#E1E4E5"
    />
    <circle
      r={9.542}
      transform="scale(1 -1) rotate(-75 -108.901 -219.185)"
      fill="#E1E4E5"
    />
    <circle
      r={12.694}
      transform="matrix(-1 0 0 1 305.059 172.76)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.765}
      ry={7.812}
      transform="matrix(-1 0 0 1 771.235 436.29)"
      fill="#E1E4E5"
    />
    <path
      d="M128.952 483.374h.133c.791 11.636 9.124 11.815 9.124 11.815s-9.189.186-9.189 13.632c0-13.446-9.189-13.632-9.189-13.632s8.33-.179 9.121-11.815z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M286.854 284.117v185.174c0 31.966 72.543 57.867 162.028 57.867 89.486 0 162.028-25.901 162.028-57.867V284.117c0-31.966-72.542-57.867-162.028-57.867-89.485 0-162.028 25.901-162.028 57.867z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M610.91 284.116c0 31.966-72.542 57.867-162.028 57.867-89.485 0-162.028-25.901-162.028-57.867"
      fill="#fff"
    />
    <path
      d="M610.91 284.116c0 31.966-72.542 57.867-162.028 57.867-89.485 0-162.028-25.901-162.028-57.867"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M610.91 376.704c0 31.965-72.542 57.867-162.028 57.867-89.485 0-162.028-25.902-162.028-57.867"
      fill="#fff"
    />
    <path
      d="M610.91 376.704c0 31.965-72.542 57.867-162.028 57.867-89.485 0-162.028-25.902-162.028-57.867"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M553.594 173.948c0 59.344-44.673 114.832-104.712 128.306-60.039-13.474-104.712-68.962-104.712-128.306v-46.615a26.126 26.126 0 0 1 16.27-24.189l65.445-26.738a60.783 60.783 0 0 1 45.994 0l65.445 26.738c9.843 4.025 16.27 13.578 16.27 24.189v46.615z"
      fill="#6f381e"
    />
    <path
      d="m488.585 162.097-45.811 45.811-27.487-27.487"
      stroke="#fff"
      strokeWidth={16.625}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={331.494} cy={368.939} r={13.778} fill="#6f381e" />
    <circle cx={331.494} cy={459.321} r={13.778} fill="#6f381e" />
    <path
      d="M744.82 361.99h-62.265m62.264 36.938h-62.264m0-68.069h41.51m-41.51 99.2h41.509m-41.509-130.333h10.378m-10.378 161.466h10.377m-539.448-99.201h62.264m-62.264 36.937h62.264m0-68.069h-41.51m41.51 99.201h-41.51m41.51-130.333h-10.377m10.377 161.465h-10.377"
      stroke="#E1E4E5"
      strokeWidth={12.945}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={625.89}
        y1={264.644}
        x2={708.494}
        y2={199.304}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={276.233}
        y1={272.741}
        x2={144.366}
        y2={150.219}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg191);
const Memo = memo(ForwardRef);
export default Memo;
