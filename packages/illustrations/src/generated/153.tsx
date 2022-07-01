import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg153 = (
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
      d="M444.249 371.067c-27.902-39.034-56.477-80.52-93.887-100.954-38.587-21.087-45.704-8.091-48.375 12.571-2.671 20.662 9.234 69.617 61.895 97.471 52.675 27.862 106.474 27.444 80.367-9.088z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M563.424 389.602v91.291L454.02 426.118l-109.696 54.775V188.76c0-20.175 16.341-36.517 36.516-36.517h146.067c20.175 0 36.517 16.342 36.517 36.517v36.517"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M563.424 389.603c-45.372 0-82.162-36.791-82.162-82.163 0-44.441 37.795-82.199 82.217-82.162 45.354.036 82.108 36.808 82.108 82.162 0 45.372-36.772 82.163-82.163 82.163z"
      fill="#2D2019"
    />
    <path
      d="m592.923 293.67-36.708 36.834-22.026-22.115"
      stroke="#fff"
      strokeWidth={19.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M734.273 242.723c-19.746 4.678-40.63-12.068-40.63-12.068s11.144-24.321 30.897-28.984c19.745-4.678 40.623 12.054 40.623 12.054s-11.145 24.321-30.89 28.998z"
      fill="url(#b)"
    />
    <path
      d="M741.081 442.134c17.902 12.331 45.252 3.712 45.252 3.712s-1.694-28.609-19.608-40.927c-17.902-12.331-45.239-3.724-45.239-3.724s1.694 28.609 19.595 40.939z"
      fill="url(#c)"
    />
    <path
      d="M143.913 314.251c19.407 19.753 55.699 15.588 55.699 15.588s4.802-36.19-14.623-55.931c-19.408-19.753-55.681-15.6-55.681-15.6s-4.803 36.19 14.605 55.943z"
      fill="url(#d)"
    />
    <ellipse
      cx={699.174}
      cy={361.538}
      rx={14.423}
      ry={13.796}
      transform="rotate(180 699.174 361.538)"
      fill="#6f381e"
    />
    <ellipse
      cx={294.216}
      cy={452.94}
      rx={19.44}
      ry={18.813}
      transform="rotate(180 294.216 452.94)"
      fill="#6f381e"
    />
    <circle
      r={14.157}
      transform="matrix(-1 0 0 1 230.537 198.723)"
      fill="#6f381e"
    />
    <circle
      r={11.844}
      transform="matrix(-1 0 0 1 698.694 460.277)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7}
      ry={7.5}
      transform="matrix(-1 0 0 1 248 367.5)"
      fill="#E1E4E5"
    />
    <circle
      r={6.138}
      transform="matrix(-1 0 0 1 339.883 514.672)"
      fill="#E1E4E5"
    />
    <circle
      r={9.368}
      transform="matrix(-1 0 0 1 636.535 153.354)"
      fill="#E1E4E5"
    />
    <circle
      r={6.128}
      transform="scale(1 -1) rotate(-75 -18.159 -286.133)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.271}
      ry={5.017}
      transform="matrix(-1 0 0 1 620.373 423.124)"
      fill="#E1E4E5"
    />
    <path
      d="M774.377 264.202h.164c.972 13.764 11.208 13.976 11.208 13.976s-11.288.22-11.288 16.124c0-15.904-11.287-16.124-11.287-16.124s10.232-.212 11.203-13.976zM329.336 79h.283c1.673 24.087 19.302 24.458 19.302 24.458s-19.44.385-19.44 28.217c0-27.832-19.44-28.217-19.44-28.217s17.622-.371 19.295-24.458z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={413.094}
        y1={499.206}
        x2={321.551}
        y2={75.869}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={659.915}
        y1={254.354}
        x2={832.769}
        y2={172.692}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={810.817}
        y1={482.593}
        x2={669.898}
        y2={333.997}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={221.345}
        y1={381.723}
        x2={81.04}
        y2={161.782}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg153);
const Memo = memo(ForwardRef);
export default Memo;
