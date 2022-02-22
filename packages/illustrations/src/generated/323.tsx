import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg323 = (
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
    <circle
      cx={451.235}
      cy={299.651}
      r={254.005}
      stroke="url(#a)"
      strokeWidth={1.294}
    />
    <path
      d="M663.122 221.538c4.515-8.052 3.316-22.668-7.073-39.369-10.368-16.668-29.841-35.313-61.63-51.316-28.896-14.544-58.22-17.366-81.596-13.917-11.689 1.724-21.879 5.015-29.78 9.182-7.911 4.173-13.479 9.199-15.997 14.366-3.654 7.503-1.782 15.056 2.446 22.501 3.321 5.848 8.049 11.551 12.595 17.034 1.257 1.516 2.5 3.016 3.695 4.496l-.39.309.39-.308c10.102 12.517 23.939 25.401 41.412 34.921 24.264 13.229 46.442 15.369 70.695 17.708l2.091.202c16.653 1.61 30.118 1.826 40.591-.455 10.447-2.276 17.885-7.028 22.551-15.354z"
      stroke="url(#b)"
      strokeWidth={1.002}
    />
    <path
      d="M783.883 287.329c-23.11 11.464-53.782-3.277-53.782-3.277s6.816-33.319 29.938-44.767c23.11-11.464 53.77 3.26 53.77 3.26s-6.817 33.32-29.926 44.784z"
      fill="url(#c)"
    />
    <path
      d="M127.451 371.111c30.195 18.097 73.516 1.368 73.516 1.368s-5.664-46.065-35.878-64.142c-30.195-18.097-73.498-1.388-73.498-1.388s5.665 46.065 35.86 64.162z"
      fill="url(#d)"
    />
    <circle
      cx={738.412}
      cy={210.512}
      r={12.618}
      transform="rotate(180 738.412 210.512)"
      fill="#6f381e"
    />
    <circle
      cx={263.15}
      cy={281.987}
      r={14.196}
      transform="rotate(180 263.15 281.987)"
      fill="#6f381e"
    />
    <circle
      r={11.83}
      transform="matrix(-1 0 0 1 168.047 198.549)"
      fill="#6f381e"
    />
    <circle
      r={5.521}
      transform="matrix(-1 0 0 1 630.194 260.064)"
      fill="#6f381e"
    />
    <circle
      r={7.098}
      transform="matrix(-1 0 0 1 662.054 506.396)"
      fill="#E1E4E5"
    />
    <circle
      r={10.252}
      transform="matrix(-1 0 0 1 165.931 432.696)"
      fill="#E1E4E5"
    />
    <circle
      r={7.803}
      transform="matrix(-1 0 0 1 284.495 170.737)"
      fill="#E1E4E5"
    />
    <circle
      r={8.675}
      transform="matrix(-1 0 0 1 663.33 172.184)"
      fill="#E1E4E5"
    />
    <circle
      r={7.79}
      transform="scale(1 -1) rotate(-75 -81.635 -258.746)"
      fill="#E1E4E5"
    />
    <circle
      r={10.364}
      transform="matrix(-1 0 0 1 387.241 105.275)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.972}
      ry={6.378}
      transform="matrix(-1 0 0 1 717.735 370.181)"
      fill="#E1E4E5"
    />
    <circle
      r={16.213}
      transform="scale(1 -1) rotate(-75 215.4 -422.106)"
      fill="#E1E4E5"
    />
    <path
      d="M778.19 326.135h.208c1.235 17.498 14.248 17.767 14.248 17.767s-14.349.28-14.349 20.498c0-20.218-14.35-20.498-14.35-20.498s13.008-.269 14.243-17.767zM254.04 496.242h.185c1.096 15.837 12.643 16.08 12.643 16.08s-12.733.254-12.733 18.553c0-18.299-12.732-18.553-12.732-18.553s11.542-.243 12.637-16.08z"
      fill="#E1E4E5"
    />
    <path
      d="M655.933 497.592c-102.875 14.696-308.625 14.696-411.499.34m88.178-50.224c58.785-14.696 176.357-14.696 235.142-.341m-191.053-40.116c0-44.089 66.134-103.294 66.134-141.085 0-25.194-53.472 7.348-66.134 7.348-12.661 0-16.731-2.099-29.393-14.696-29.75-29.599 51.499-104.421 102.875-117.571 16.811-4.303 6.811-51.438 14.697-51.438 25.323 0 80.83 51.438 80.83 110.223 0 102.875-22.045 148.434-22.045 207.219"
      stroke="#6f381e"
      strokeWidth={29.393}
    />
    <defs>
      <linearGradient
        id="a"
        x1={462.094}
        y1={839.847}
        x2={446.39}
        y2={-509.035}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={599.579}
        y1={331.641}
        x2={514.924}
        y2={-48.763}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={695.139}
        y1={323.087}
        x2={885.748}
        y2={172.315}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={244.299}
        y1={429.365}
        x2={1.336}
        y2={203.62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg323);
const Memo = memo(ForwardRef);
export default Memo;
