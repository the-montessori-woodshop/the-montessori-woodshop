import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg262 = (
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
      d="M248.546 282.591c19.627 11.764 47.786.889 47.786.889s-3.682-29.942-23.321-41.692c-19.627-11.763-47.774-.902-47.774-.902s3.682 29.942 23.309 41.705z"
      fill="url(#a)"
    />
    <circle
      cx={717.236}
      cy={406.016}
      r={18.511}
      transform="rotate(180 717.236 406.016)"
      fill="#6f381e"
    />
    <circle
      cx={328.915}
      cy={331.658}
      r={15.238}
      transform="rotate(180 328.915 331.658)"
      fill="#6f381e"
    />
    <circle
      r={17.354}
      transform="matrix(-1 0 0 1 270.311 467.059)"
      fill="#6f381e"
    />
    <circle
      r={8.098}
      transform="matrix(-1 0 0 1 691.246 210.086)"
      fill="#6f381e"
    />
    <circle
      r={10.412}
      transform="matrix(-1 0 0 1 384.808 126.903)"
      fill="#E1E4E5"
    />
    <circle
      r={11.447}
      transform="matrix(-1 0 0 1 542.824 495.214)"
      fill="#E1E4E5"
    />
    <circle
      r={12.726}
      transform="matrix(-1 0 0 1 677.774 109.998)"
      fill="#E1E4E5"
    />
    <circle
      r={11.428}
      transform="scale(1 -1) rotate(-75 -41.445 -183.983)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.694}
      ry={9.356}
      transform="matrix(-1 0 0 1 686.725 506.452)"
      fill="#E1E4E5"
    />
    <path
      d="M177.985 418.606h.16c.947 13.936 10.928 14.15 10.928 14.15s-11.006.223-11.006 16.326c0-16.103-11.005-16.326-11.005-16.326s9.976-.214 10.923-14.15z"
      fill="#E1E4E5"
    />
    <path
      d="M322.402 426.331h-10.046c-72.064 0-130.484-58.42-130.484-130.484v0c0-72.065 58.42-130.485 130.484-130.485h86.328c79.827 0 144.541 64.713 144.541 144.541v0c.057 50.198-25.934 96.832-68.657 123.186l-152.166 93.626V426.331"
      stroke="#E1E4E5"
      strokeWidth={5.924}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M627.092 333.969h10.046c72.065 0 130.485-58.42 130.485-130.484C767.623 131.42 709.203 73 637.138 73h-86.327c-79.828 0-144.542 64.713-144.542 144.541-.057 50.198 25.934 96.832 68.657 123.186l152.166 93.626V333.969z"
      fill="#6f381e"
    />
    <path
      d="M627.092 333.969h10.046c72.065 0 130.485-58.42 130.485-130.484v0C767.623 131.42 709.203 73 637.138 73h-86.327c-79.828 0-144.542 64.713-144.542 144.541v0c-.057 50.198 25.934 96.832 68.657 123.186l152.166 93.626V333.969"
      stroke="#6f381e"
      strokeWidth={33.863}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={324.497}
        y1={320.457}
        x2={166.57}
        y2={173.722}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg262);
const Memo = memo(ForwardRef);
export default Memo;
