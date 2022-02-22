import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg369 = (
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
      d="M104.25 354.77c20.868 12.508 50.808.945 50.808.945s-3.915-31.835-24.796-44.328c-20.869-12.508-50.796-.96-50.796-.96s3.915 31.836 24.784 44.343z"
      fill="url(#a)"
    />
    <circle
      r={16.634}
      transform="matrix(-1 0 0 1 152.635 111.634)"
      fill="#6f381e"
    />
    <circle
      r={7.763}
      transform="matrix(-1 0 0 1 700.128 242.211)"
      fill="#6f381e"
    />
    <circle
      r={9.981}
      transform="matrix(-1 0 0 1 176.259 379.76)"
      fill="#E1E4E5"
    />
    <circle
      r={14.416}
      transform="matrix(-1 0 0 1 463.421 510.417)"
      fill="#E1E4E5"
    />
    <circle
      r={10.972}
      transform="matrix(-1 0 0 1 219.974 73.972)"
      fill="#E1E4E5"
    />
    <circle
      r={12.199}
      transform="matrix(-1 0 0 1 746.723 118.639)"
      fill="#E1E4E5"
    />
    <circle
      r={10.954}
      transform="scale(1 -1) rotate(-75 -102.224 -192.497)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.21}
      ry={8.968}
      transform="matrix(-1 0 0 1 768.21 417.968)"
      fill="#E1E4E5"
    />
    <circle
      r={22.798}
      transform="scale(1 -1) rotate(-75 261.404 -430.959)"
      fill="#E1E4E5"
    />
    <path
      d="M680.027 442h.293c1.737 24.604 20.035 24.983 20.035 24.983s-20.177.394-20.177 28.824c0-28.43-20.178-28.824-20.178-28.824s18.291-.379 20.027-24.983zm-396.257-1h.261c1.541 22.269 17.777 22.611 17.777 22.611s-17.904.357-17.904 26.088c0-25.731-17.904-26.088-17.904-26.088s16.23-.342 17.77-22.611z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M610.559 429.656h12.035c86.337 0 156.328-69.99 156.328-156.328C778.922 186.99 708.931 117 622.594 117H519.169C423.53 117 346 194.53 346 290.169c-.069 60.14 31.07 116.009 82.255 147.583l182.304 112.17V429.656z"
      fill="url(#b)"
    />
    <circle
      cx={813.743}
      cy={199.743}
      r={17.743}
      transform="rotate(180 813.743 199.743)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M354.363 396.656h-12.035C255.99 396.656 186 326.666 186 240.328 186 153.99 255.99 84 342.328 84h103.425c95.639 0 173.169 77.53 173.169 173.169.069 60.14-31.07 116.009-82.255 147.583l-182.304 112.17V396.656z"
      fill="#6f381e"
    />
    <path
      d="M354.363 396.656h-12.035C255.99 396.656 186 326.666 186 240.328v0C186 153.99 255.99 84 342.328 84h103.425c95.639 0 173.169 77.53 173.169 173.169v0c.069 60.14-31.07 116.009-82.255 147.583l-182.304 112.17V396.656"
      stroke="#6f381e"
      strokeWidth={33.863}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M350.086 319.11s21.332 13.179 56.908 13.179c35.575 0 56.908-13.179 56.908-13.179"
      stroke="#fff"
      strokeWidth={22.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse cx={335.114} cy={238.452} rx={29.114} ry={28.452} fill="#fff" />
    <ellipse cx={477.55} cy={238.452} rx={29.114} ry={28.452} fill="#fff" />
    <defs>
      <linearGradient
        id="a"
        x1={185.005}
        y1={395.031}
        x2={17.09}
        y2={239.016}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={553.23}
        y1={792.643}
        x2={566.579}
        y2={-353.945}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg369);
const Memo = memo(ForwardRef);
export default Memo;
