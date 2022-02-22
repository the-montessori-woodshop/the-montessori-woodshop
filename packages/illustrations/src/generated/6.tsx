import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg6 = (
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
        d="M700.153 292.613c22.341-61.309-60.985-225.129-225.472-223.897-76.502.576-81.599 38.595-149.241 70.174-40.318 18.821-92.359 26.498-117.59 64.005-21.787 32.371-26.752 72.778-15.389 103.497 25.554 69.087 99.914 133.687 211.591 71.043 111.676-62.644 238.464 73.291 296.101-84.822z"
        fill="url(#b)"
      />
      <path
        d="M528.968 470.065c45.683-37.582 92.95-77.87 144.022-90.266 52.682-12.799 57.01 4.949 53.597 30.407-3.412 25.458-33.211 79.959-104.812 96.326-71.62 16.372-135.555-1.293-92.807-36.467z"
        fill="url(#c)"
      />
      <path
        d="M179.13 330.961c79.461 21.707 163.272 43.038 218.437 91.124 56.918 49.593 40.223 68.786 8.539 85.381-31.684 16.596-117.603 26.552-193.792-41.678-76.21-68.248-107.548-155.133-33.184-134.827z"
        fill="url(#d)"
      />
      <circle
        cx={651.885}
        cy={245.885}
        r={16.236}
        transform="rotate(75 651.885 245.885)"
        fill="#E1E4E5"
      />
      <rect
        x={144}
        y={194.955}
        width={262.01}
        height={288.211}
        rx={131.005}
        transform="rotate(-22.426 144 194.955)"
        fill="#6f381e"
      />
      <circle
        cx={291.951}
        cy={260.92}
        r={7.763}
        transform="rotate(-22.426 291.951 260.92)"
        fill="#fff"
      />
      <path
        d="M370.043 244.099a56.424 56.424 0 0 0-7.709 2.473c-15.1 6.105-26.721 18.626-31.791 34.255-5.069 15.628-3.078 32.791 5.449 46.951"
        stroke="#fff"
        strokeWidth={13.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M374.15 246.418v0a62.594 62.594 0 0 1-.06 47.906 62.594 62.594 0 0 1-33.92 33.83v0a62.587 62.587 0 0 1-81.735-33.98v0a62.59 62.59 0 0 1 33.979-81.735v0a62.59 62.59 0 0 1 81.736 33.979z"
        stroke="#fff"
        strokeWidth={13.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={482.154}
        y={271}
        width={202}
        height={216.963}
        rx={101}
        transform="rotate(15 482.154 271)"
        fill="#6f381e"
      />
      <circle
        cx={542.217}
        cy={379.264}
        r={5.985}
        transform="rotate(15 542.217 379.264)"
        fill="#fff"
      />
      <path
        d="M597.91 405.555a43.316 43.316 0 0 0-5.878-2.098c-12.106-3.338-25.087-1.116-35.514 6.077-10.426 7.193-17.248 18.634-18.663 31.299"
        stroke="#fff"
        strokeWidth={13.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M599.338 408.899v0a48.254 48.254 0 0 1-59.101 34.121v0a48.253 48.253 0 0 1-34.121-59.1v0a48.258 48.258 0 0 1 22.482-29.303 48.255 48.255 0 0 1 36.618-4.819v0a48.25 48.25 0 0 1 34.122 59.101z"
        stroke="#fff"
        strokeWidth={13.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={494.2}
        y={120}
        width={119.269}
        height={139.868}
        rx={59.634}
        transform="rotate(15 494.2 120)"
        fill="#6f381e"
      />
      <circle
        cx={529.663}
        cy={183.923}
        r={3.534}
        transform="rotate(15 529.663 183.923)"
        fill="#fff"
      />
      <path
        d="M562.547 199.446a25.728 25.728 0 0 0-3.471-1.238c-7.147-1.971-14.812-.659-20.968 3.588-6.157 4.247-10.185 11.002-11.02 18.48"
        stroke="#fff"
        strokeWidth={7.971}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M563.39 201.421v0a28.493 28.493 0 0 1-34.895 20.146v0a28.488 28.488 0 0 1-20.147-34.895v0a28.49 28.49 0 0 1 34.895-20.147v0a28.494 28.494 0 0 1 20.147 34.896z"
        stroke="#fff"
        strokeWidth={7.971}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={668.124}
        y1={-125.348}
        x2={127.355}
        y2={833.857}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={525.181}
        y1={632.605}
        x2={769.283}
        y2={157.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={-8.684}
        y1={457.376}
        x2={727.514}
        y2={352.906}
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

const ForwardRef = forwardRef(Svg6);
const Memo = memo(ForwardRef);
export default Memo;
