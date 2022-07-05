import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImageAdd = (
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
      d="M645.348 432.088c-10.289 58.483-150.497 149.675-279.569 73.861-60.029-35.262-46.747-67.545-85.687-123.21-23.211-33.178-60.731-62.907-63.549-103.947-2.442-35.425 12.031-69.528 34.963-88.568 51.575-42.819 139.571-59.896 199.08 40.287 59.509 100.184 221.282 50.743 194.762 201.577z"
      fill="url(#a)"
    />
    <path
      d="M710.746 231.898c-14.611 26.076-46.611 29.659-97.878 24.704-38.556-3.734-73.715-6.623-112.274-27.646-26.989-14.704-48.352-34.598-63.945-53.92-16.896-20.932-40.48-44.821-28.919-68.555 15.888-32.602 107.769-60.06 196.989-15.157 98.008 49.341 120.32 115.088 106.027 140.574z"
      fill="url(#b)"
    />
    <path
      d="M772.206 310.955c-27.526 13.654-64.06-3.903-64.06-3.903s8.12-39.687 35.66-53.322c27.526-13.654 64.045 3.883 64.045 3.883s-8.119 39.688-35.645 53.342z"
      fill="url(#c)"
    />
    <path
      d="M105.407 338.377c29.347 17.589 71.451 1.33 71.451 1.33s-5.505-44.771-34.87-62.34c-29.347-17.589-71.433-1.349-71.433-1.349s5.505 44.77 34.852 62.359z"
      fill="url(#d)"
    />
    <circle
      cx={791.336}
      cy={181.263}
      r={15.03}
      transform="rotate(180 791.336 181.263)"
      fill="#6f381e"
    />
    <circle
      cx={331.827}
      cy={226.115}
      r={12.373}
      transform="rotate(180 331.827 226.115)"
      fill="#6f381e"
    />
    <circle
      r={14.09}
      transform="matrix(-1 0 0 1 214.332 300.732)"
      fill="#6f381e"
    />
    <circle
      r={6.575}
      transform="matrix(-1 0 0 1 687.988 297.461)"
      fill="#6f381e"
    />
    <circle
      r={8.454}
      transform="matrix(-1 0 0 1 681.175 500.399)"
      fill="#E1E4E5"
    />
    <circle
      r={12.212}
      transform="matrix(-1 0 0 1 152.911 413.598)"
      fill="#E1E4E5"
    />
    <circle
      r={9.294}
      transform="matrix(-1 0 0 1 724.228 416.813)"
      fill="#E1E4E5"
    />
    <circle
      r={10.333}
      transform="matrix(-1 0 0 1 701.908 135.611)"
      fill="#E1E4E5"
    />
    <circle
      r={9.279}
      transform="scale(1 -1) rotate(-75 -53.276 -228.153)"
      fill="#E1E4E5"
    />
    <circle
      r={12.344}
      transform="matrix(-1 0 0 1 377.226 71.263)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.495}
      ry={7.596}
      transform="matrix(-1 0 0 1 690.4 365.331)"
      fill="#E1E4E5"
    />
    <circle
      r={19.311}
      transform="scale(1 -1) rotate(-75 257.743 -410.57)"
      fill="#E1E4E5"
    />
    <path
      d="M223.161 156.604h.135c.801 11.349 9.241 11.524 9.241 11.524s-9.307.182-9.307 13.295c0-13.113-9.307-13.295-9.307-13.295s8.437-.175 9.238-11.524zm-14.14 297.075h.129c.77 11.315 8.873 11.489 8.873 11.489s-8.936.181-8.936 13.256c0-13.075-8.936-13.256-8.936-13.256s8.101-.174 8.87-11.489z"
      fill="#E1E4E5"
    />
    <rect
      x={295.298}
      y={137.632}
      width={319.069}
      height={319.069}
      rx={89.525}
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={44.762}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M403.496 233.376a8.87 8.87 0 1 1-14.442 9.678 8.87 8.87 0 0 1 1.966-9.678 8.903 8.903 0 0 1 12.54 0m210.809 30.293a169.367 169.367 0 0 0-136.425 39.321 169.367 169.367 0 0 0-58.559 129.339c.05 8.163.701 16.31 1.947 24.377"
      stroke="#fff"
      strokeWidth={40}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={452.842} cy={457.343} r={78.343} fill="#2D2019" />
    <rect
      x={446.436}
      y={424.33}
      width={12.811}
      height={66.025}
      rx={6.405}
      fill="#fff"
    />
    <rect
      x={485.854}
      y={450.938}
      width={12.811}
      height={66.025}
      rx={6.405}
      transform="rotate(90 485.854 450.938)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={429.931}
        y1={746.909}
        x2={440.198}
        y2={-255.094}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={612.315}
        y1={400.899}
        x2={482.082}
        y2={-184.314}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={666.504}
        y1={353.546}
        x2={893.538}
        y2={173.962}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={218.973}
        y1={394.995}
        x2={-17.165}
        y2={175.592}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(SvgImageAdd);
const Memo = memo(ForwardRef);
export default Memo;
