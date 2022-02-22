import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg450 = (
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
      d="m298.923 119.733 162.658-53.185c11.205-3.664 21.314-6.397 30.762-7.483 49.984-8.042 73.302 19.83 101.883 107.239l50.736 155.165c28.581 87.409 26.234 123.672-18.846 146.714-8.264 4.706-18.035 8.473-29.24 12.137l-162.658 53.186c-11.205 3.664-21.314 6.397-30.762 7.482-49.985 8.043-73.302-19.829-101.883-107.238l-50.736-155.165c-28.581-87.41-26.234-123.673 18.846-146.714 8.264-4.706 18.035-8.474 29.24-12.138z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M366.681 93.425h162.434c11.19 0 21.117.517 29.96 2.325 47.467 7.489 60.281 39.512 60.281 126.801v154.952c0 87.289-12.814 119.312-60.281 126.801-8.843 1.808-18.77 2.324-29.96 2.324H366.681c-11.189 0-21.116-.516-29.96-2.324-47.466-7.489-60.281-39.512-60.281-126.801V222.551c0-87.289 12.815-119.312 60.281-126.801 8.844-1.808 18.771-2.325 29.96-2.325z"
      fill="#6f381e"
    />
    <path
      d="M472.658 210.571h57.774m-165.068 66.027h165.068M365.364 339.43h165.068m-165.068 62.833h165.068M416.438 210.571h.148m-49.668 0h.148"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M698.192 468.954c-10.691 5.304-24.881-1.515-24.881-1.515s3.153-15.416 13.851-20.712c10.691-5.303 24.876 1.509 24.876 1.509s-3.154 15.415-13.846 20.718z"
      fill="url(#a)"
    />
    <path
      d="M234.201 375.135c12.309 7.377 29.968.557 29.968.557s-2.309-18.778-14.625-26.147c-12.309-7.377-29.961-.565-29.961-.565s2.309 18.777 14.618 26.155z"
      fill="url(#b)"
    />
    <circle
      cx={569.652}
      cy={272.628}
      r={10.238}
      transform="rotate(180 569.652 272.628)"
      fill="#6f381e"
    />
    <circle
      cx={407.763}
      cy={460.687}
      r={19.254}
      transform="rotate(180 407.763 460.687)"
      fill="#6f381e"
    />
    <circle
      r={15.284}
      transform="matrix(-1 0 0 1 640.24 517.67)"
      fill="#6f381e"
    />
    <circle
      r={10.233}
      transform="matrix(-1 0 0 1 193.233 185.677)"
      fill="#6f381e"
    />
    <circle
      r={12.207}
      transform="matrix(-1 0 0 1 220.766 461.345)"
      fill="#E1E4E5"
    />
    <circle
      r={14.463}
      transform="matrix(-1 0 0 1 663.4 195.47)"
      fill="#E1E4E5"
    />
    <circle
      r={18.18}
      transform="matrix(-1 0 0 1 612.253 75.415)"
      fill="#E1E4E5"
    />
    <circle
      r={14.44}
      transform="scale(1 -1) rotate(-75 60.559 -194.37)"
      fill="#E1E4E5"
    />
    <circle
      r={9.882}
      transform="matrix(-1 0 0 1 697.089 343.925)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={14.777}
      ry={11.821}
      transform="matrix(-1 0 0 1 286.169 533.376)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={657.136}
        y1={485.498}
        x2={745.32}
        y2={415.744}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={281.833}
        y1={398.881}
        x2={182.791}
        y2={306.859}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg450);
const Memo = memo(ForwardRef);
export default Memo;
