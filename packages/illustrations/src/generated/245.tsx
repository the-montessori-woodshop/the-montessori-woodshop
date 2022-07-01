import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg245 = (
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
    <circle cx={464.718} cy={300.282} r={260.282} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m630.736 155-73.28-73.344a51.816 51.816 0 0 0-36.639-15.199H334.975c-28.633 0-51.825 23.212-51.825 51.871v363.091c0 28.658 23.192 51.87 51.825 51.87h259.121c28.633 0 51.824-23.212 51.824-51.87V191.672A51.91 51.91 0 0 0 630.736 155z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={353.818}
      y={387.392}
      width={222.875}
      height={26.221}
      rx={13.11}
      fill="#E1E4E5"
    />
    <rect
      x={353.818}
      y={282.44}
      width={222.875}
      height={26.221}
      rx={13.11}
      fill="#E1E4E5"
    />
    <rect
      x={353.469}
      y={177.488}
      width={147.983}
      height={26.238}
      rx={13.119}
      fill="#E1E4E5"
    />
    <rect
      x={353.818}
      y={439.868}
      width={222.875}
      height={26.221}
      rx={13.11}
      fill="#E1E4E5"
    />
    <rect
      x={353.818}
      y={334.916}
      width={222.875}
      height={26.221}
      rx={13.11}
      fill="#E1E4E5"
    />
    <rect
      x={353.818}
      y={229.964}
      width={222.875}
      height={26.221}
      rx={13.11}
      fill="#E1E4E5"
    />
    <path
      d="M217.38 321.738v-43.38 0c0-31.942 25.898-57.84 57.84-57.84v0c31.942 0 57.84 25.898 57.84 57.84v43.38"
      stroke="#6f381e"
      strokeWidth={13.552}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M347.52 480.798h-144.6c-15.978 0-28.92-12.942-28.92-28.92v-101.22c0-15.979 12.942-28.92 28.92-28.92h144.6c15.978 0 28.92 12.941 28.92 28.92v101.22c0 15.978-12.942 28.92-28.92 28.92z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={13.552}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M274.27 435.962v-36.268m-.041-21.602c-5.888 0-10.667 4.778-10.624 10.667 0 5.888 4.778 10.667 10.667 10.667 5.888 0 10.667-4.779 10.667-10.667 0-5.889-4.779-10.667-10.71-10.667"
      stroke="#fff"
      strokeWidth={28.278}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={475.818}
        y1={852.422}
        x2={459.766}
        y2={-526.285}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg245);
const Memo = memo(ForwardRef);
export default Memo;
