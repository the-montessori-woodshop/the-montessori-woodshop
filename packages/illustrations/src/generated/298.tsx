import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg298 = (
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
      d="M788.21 277.934c-30.087 14.924-70.018-4.266-70.018-4.266s8.874-43.378 38.976-58.282c30.087-14.924 70.002 4.245 70.002 4.245s-8.874 43.378-38.96 58.303z"
      fill="url(#a)"
    />
    <path
      d="M114.719 366.815c32.077 19.225 78.097 1.453 78.097 1.453s-6.017-48.934-38.114-68.138c-32.076-19.225-78.077-1.474-78.077-1.474s6.017 48.934 38.094 68.159z"
      fill="url(#b)"
    />
    <circle
      cx={681.569}
      cy={186.037}
      r={16.428}
      transform="rotate(180 681.569 186.037)"
      fill="#6f381e"
    />
    <circle
      cx={346.243}
      cy={153.196}
      r={7.035}
      transform="rotate(180 346.243 153.196)"
      fill="#6f381e"
    />
    <circle
      cx={645.463}
      cy={392.657}
      r={13.523}
      transform="rotate(180 645.463 392.657)"
      fill="#6f381e"
    />
    <circle
      r={10.735}
      transform="matrix(-1 0 0 1 463.946 518.087)"
      fill="#6f381e"
    />
    <circle
      r={7.187}
      transform="matrix(-1 0 0 1 726.26 321.005)"
      fill="#6f381e"
    />
    <circle
      r={9.241}
      transform="matrix(-1 0 0 1 690.796 497.748)"
      fill="#E1E4E5"
    />
    <circle
      r={13.348}
      transform="matrix(-1 0 0 1 166.641 449.033)"
      fill="#E1E4E5"
    />
    <circle
      r={10.159}
      transform="matrix(-1 0 0 1 798.324 452.197)"
      fill="#E1E4E5"
    />
    <circle
      r={11.294}
      transform="matrix(-1 0 0 1 647.957 98.402)"
      fill="#E1E4E5"
    />
    <circle
      r={10.142}
      transform="scale(1 -1) rotate(-75 -57.274 -197.899)"
      fill="#E1E4E5"
    />
    <circle
      r={13.492}
      transform="matrix(-1 0 0 1 376.317 64.413)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.379}
      ry={8.303}
      transform="matrix(-1 0 0 1 761.349 395.925)"
      fill="#E1E4E5"
    />
    <circle
      r={9.196}
      transform="scale(1 -1) rotate(-75 234.779 -390.238)"
      fill="#E1E4E5"
    />
    <path
      d="M194.905 132.092h.148c.876 12.405 10.101 12.596 10.101 12.596s-10.173.198-10.173 14.532c0-14.334-10.172-14.532-10.172-14.532s9.221-.191 10.096-12.596zm64.894 385.727h.142c.841 12.368 9.698 12.558 9.698 12.558s-9.767.198-9.767 14.489c0-14.291-9.767-14.489-9.767-14.489s8.853-.19 9.694-12.558z"
      fill="#E1E4E5"
    />
    <path
      d="M599.824 138.643c24.169 24.169 28.679 64.017 15.673 109.458-12.985 45.367-43.327 95.827-88.031 140.53-44.703 44.704-95.163 75.047-140.53 88.031-45.442 13.006-85.289 8.496-109.458-15.672-24.168-24.169-28.678-64.016-15.672-109.458 12.984-45.367 43.327-95.827 88.03-140.53 44.704-44.704 95.164-75.046 140.531-88.031 45.441-13.006 85.289-8.496 109.457 15.672z"
      stroke="url(#c)"
      strokeWidth={4}
    />
    <path
      d="M230.243 273.194c-9.379 35 7.608 73.95 43.588 108.73 35.924 34.725 90.454 64.926 155.097 82.247 64.644 17.321 126.969 18.432 175.443 6.321 48.549-12.131 82.735-37.369 92.113-72.369s-7.609-73.949-43.588-108.729c-35.924-34.726-90.455-64.926-155.098-82.248-64.643-17.321-126.968-18.431-175.442-6.32-48.549 12.13-82.735 37.368-92.113 72.368z"
      stroke="url(#d)"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m459.221 441.833 91.38 47.965c17.798 9.349 38.596-5.742 35.189-25.558l-17.442-101.67 73.938-71.946c14.391-14.023 6.458-38.463-13.425-41.359l-102.16-14.836-45.665-92.524c-8.899-18.038-34.578-18.038-43.477 0l-45.665 92.524-102.211 14.887c-19.883 2.896-27.816 27.335-13.425 41.359l73.938 71.946-17.442 101.67c-3.407 19.816 17.391 34.906 35.189 25.557l91.38-47.964h-.102v-.051z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={672.676}
        y1={324.487}
        x2={920.827}
        y2={128.198}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={238.848}
        y1={428.699}
        x2={-19.254}
        y2={188.889}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={636.989}
        y1={484.288}
        x2={155.915}
        y2={9.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={379.195}
        y1={609.686}
        x2={568.819}
        y2={-80.142}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg298);
const Memo = memo(ForwardRef);
export default Memo;
