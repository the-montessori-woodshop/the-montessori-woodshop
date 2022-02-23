import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg471 = (
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
      d="M625.858 189.836c-10.581 18.884-33.756 21.479-70.883 17.89-27.922-2.704-53.385-4.796-81.309-20.021-19.545-10.648-35.017-25.056-46.309-39.049-12.236-15.159-29.316-32.459-20.943-49.647 11.506-23.61 78.047-43.496 142.66-10.977 70.977 35.733 87.136 83.347 76.784 101.804z"
      fill="url(#a)"
    />
    <path
      d="M185.777 194.515c15.47 9.272 37.664.701 37.664.701s-2.902-23.6-18.381-32.861c-15.47-9.272-37.655-.712-37.655-.712s2.902 23.6 18.372 32.872z"
      fill="url(#b)"
    />
    <circle
      cx={693.726}
      cy={363.309}
      r={14.59}
      transform="rotate(180 693.726 363.309)"
      fill="#6f381e"
    />
    <circle
      cx={205.029}
      cy={261.587}
      r={12.01}
      transform="rotate(180 205.029 261.587)"
      fill="#6f381e"
    />
    <circle
      r={13.678}
      transform="matrix(-1 0 0 1 206.696 418.897)"
      fill="#6f381e"
    />
    <circle
      r={6.383}
      transform="matrix(-1 0 0 1 659.934 249.563)"
      fill="#6f381e"
    />
    <circle
      r={8.207}
      transform="matrix(-1 0 0 1 448.548 542.418)"
      fill="#E1E4E5"
    />
    <circle
      r={9.022}
      transform="matrix(-1 0 0 1 572.157 496.688)"
      fill="#E1E4E5"
    />
    <circle
      r={10.03}
      transform="matrix(-1 0 0 1 666.78 158.332)"
      fill="#E1E4E5"
    />
    <circle
      r={9.007}
      transform="scale(1 -1) rotate(-75 16.357 -677.952)"
      fill="#E1E4E5"
    />
    <circle
      r={11.983}
      transform="matrix(-1 0 0 1 299.879 131.501)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.217}
      ry={7.374}
      transform="matrix(-1 0 0 1 220.771 491.764)"
      fill="#E1E4E5"
    />
    <circle
      r={18.746}
      transform="scale(1 -1) rotate(-75 -173.683 -440.489)"
      fill="#E1E4E5"
    />
    <path
      d="M666.62 409.343h.241c1.428 20.231 16.474 20.543 16.474 20.543s-16.592.323-16.592 23.7c0-23.377-16.591-23.7-16.591-23.7s15.04-.312 16.468-20.543z"
      fill="#E1E4E5"
    />
    <path
      d="m168.112 116.757 126.202-33.815c8.693-2.33 16.513-3.995 23.761-4.431 38.438-4.063 55.06 18.15 73.232 85.968l32.258 120.388c18.172 67.818 14.883 95.366-20.437 111.067-6.495 3.245-14.1 5.713-22.793 8.043l-126.202 33.815c-8.694 2.33-16.514 3.995-23.761 4.431-38.438 4.063-55.061-18.149-73.233-85.968l-32.258-120.388c-18.171-67.818-14.882-95.366 20.438-111.067 6.494-3.245 14.099-5.713 22.793-8.043z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="m274.837 185.71 44.887-12.027m-114.503 85.663.257-.069 127.992-34.295m-115.168 83.181.257-.069 127.992-34.295M231.383 356.98l.256-.069 127.992-34.295M231.157 197.414l.115-.031m-38.59 10.34.115-.031"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m606.33 82.942 126.201 33.816c8.694 2.329 16.299 4.797 22.794 8.043 35.32 15.7 38.609 43.248 20.437 111.067l-32.258 120.388c-18.172 67.818-34.794 90.031-73.232 85.968-7.248-.437-15.068-2.102-23.762-4.432l-126.201-33.815c-8.694-2.33-16.299-4.797-22.793-8.043-35.32-15.701-38.61-43.248-20.438-111.067l32.258-120.388c18.172-67.819 34.795-90.031 73.233-85.968 7.247.437 15.067 2.102 23.761 4.431z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="m664.281 196.02 44.887 12.027m-141.995 16.935.257.069 127.992 34.295M554.093 273.8l.256.069 127.992 34.295m-141.328 14.452.256.069 127.992 34.295m-48.66-172.664.115.031m-38.59-10.341.115.031"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M374.553 48.735h151.128c10.411 0 19.647.48 27.875 2.162 44.163 6.968 56.085 36.763 56.085 117.977V313.04c0 81.214-11.922 111.008-56.085 117.976-8.228 1.682-17.464 2.163-27.875 2.163H374.553c-10.411 0-19.647-.481-27.875-2.163-44.163-6.968-56.085-36.762-56.085-117.976V168.874c0-81.214 11.922-111.009 56.085-117.977 8.228-1.682 17.464-2.162 27.875-2.162z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M473.154 157.727h53.753m-153.58 61.431h153.58m-153.58 58.459h153.58m-153.58 58.46h153.58m-106.06-178.351h.138m-46.213 0h.138"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={450.673} cy={463.644} r={97.176} fill="#6f381e" />
    <rect
      x={443.573}
      y={428.08}
      width={13.947}
      height={71.881}
      rx={6.974}
      fill="#fff"
    />
    <rect
      x={486.487}
      y={457.047}
      width={13.947}
      height={71.881}
      rx={6.974}
      transform="rotate(90 486.487 457.047)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={554.575}
        y1={312.226}
        x2={460.26}
        y2={-111.585}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={245.641}
        y1={224.36}
        x2={121.165}
        y2={108.706}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg471);
const Memo = memo(ForwardRef);
export default Memo;