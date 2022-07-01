import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg288 = (
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
      d="M622.835 414.16c-9.517 54.097-139.211 138.451-258.603 68.322-55.527-32.618-43.241-62.479-79.261-113.97-21.47-30.689-56.177-58.189-58.784-96.151-2.258-32.769 11.129-64.314 32.342-81.926 47.707-39.609 129.104-55.405 184.15 37.265 55.046 92.671 204.687 46.937 180.156 186.46z"
      fill="url(#a)"
    />
    <path
      d="M711.959 256.621c-14.451 25.79-46.099 29.334-96.801 24.433-38.132-3.693-72.905-6.55-111.039-27.342-26.692-14.542-47.82-34.217-63.241-53.327-16.711-20.702-40.035-44.328-28.601-67.8 15.713-32.244 106.583-59.4 194.821-14.991 96.93 48.798 118.997 113.822 104.861 139.027z"
      fill="url(#b)"
    />
    <path
      d="M772.743 334.809c-27.223 13.504-63.355-3.86-63.355-3.86s8.03-39.25 35.268-52.735c27.223-13.505 63.34 3.84 63.34 3.84s-8.03 39.251-35.253 52.755z"
      fill="url(#c)"
    />
    <path
      d="M129.417 235.902c29.024 17.395 70.665 1.314 70.665 1.314s-5.445-44.277-34.487-61.653c-29.024-17.396-70.647-1.335-70.647-1.335s5.445 44.278 34.469 61.674z"
      fill="url(#d)"
    />
    <circle
      cx={813.802}
      cy={242.744}
      r={7.199}
      transform="rotate(180 813.802 242.744)"
      fill="#6f381e"
    />
    <circle
      cx={337.209}
      cy={250.902}
      r={12.236}
      transform="rotate(180 337.209 250.902)"
      fill="#6f381e"
    />
    <circle
      r={9.967}
      transform="matrix(-1 0 0 1 235.152 346.291)"
      fill="#6f381e"
    />
    <circle
      r={6.503}
      transform="matrix(-1 0 0 1 689.451 321.463)"
      fill="#6f381e"
    />
    <circle
      r={8.361}
      transform="matrix(-1 0 0 1 682.714 522.168)"
      fill="#E1E4E5"
    />
    <circle
      r={12.077}
      transform="matrix(-1 0 0 1 160.262 436.322)"
      fill="#E1E4E5"
    />
    <circle
      r={9.192}
      transform="matrix(-1 0 0 1 725.293 439.502)"
      fill="#E1E4E5"
    />
    <circle
      r={10.219}
      transform="matrix(-1 0 0 1 703.218 161.394)"
      fill="#E1E4E5"
    />
    <circle
      r={9.177}
      transform="scale(1 -1) rotate(-75 -65.947 -245.166)"
      fill="#E1E4E5"
    />
    <circle
      r={12.208}
      transform="matrix(-1 0 0 1 382.108 97.753)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.391}
      ry={7.513}
      transform="matrix(-1 0 0 1 691.837 388.587)"
      fill="#E1E4E5"
    />
    <circle
      r={15.912}
      transform="matrix(0 1 1 0 615.391 75.922)"
      fill="#E1E4E5"
    />
    <path
      d="M229.738 182.156h.134c.792 11.224 9.14 11.397 9.14 11.397s-9.205.18-9.205 13.149c0-12.969-9.205-13.149-9.205-13.149s8.344-.173 9.136-11.397zm-13.984 293.806h.128c.761 11.191 8.775 11.363 8.775 11.363s-8.837.179-8.837 13.11c0-12.931-8.838-13.11-8.838-13.11s8.011-.172 8.772-11.363z"
      fill="#E1E4E5"
    />
    <path
      d="M557.129 62.607a27.947 27.947 0 0 0-1.79-.576c-.2-.057-.398-.118-.598-.17-.212-.054-.425-.105-.637-.157a20.79 20.79 0 0 0-1.275-.276 37.687 37.687 0 0 0-1.301-.218 30.832 30.832 0 0 0-1.323-.158 28.144 28.144 0 0 0-.88-.066c-.155-.01-.31-.025-.464-.03a29.201 29.201 0 0 0-1.366-.034H337.629a27.558 27.558 0 0 0-4.309.327 29.56 29.56 0 0 0-1.392.249c-11.977 2.452-21.195 12.493-22.451 24.888a28.69 28.69 0 0 0-.146 2.901v429.97c0 12.278 7.78 22.73 18.67 26.68.049.018.097.034.146.049.54.191 1.089.367 1.641.524.201.058.398.118.601.17.213.054.425.106.637.158.216.051.434.103.653.151.206.046.413.085.622.124.234.046.467.088.701.125.2.033.397.063.598.094.251.036.506.066.764.097.185.021.37.042.559.06.291.028.585.049.879.067.155.009.31.024.465.03.452.022.907.034 1.365.034h209.869c.977 0 1.942-.049 2.895-.146 13.318-1.355 23.907-11.971 25.261-25.322.097-.955.145-1.922.145-2.901V89.287c-.006-12.277-7.786-22.73-18.673-26.68z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M442.563 524.514c9.011 0 16.315-7.304 16.315-16.315 0-9.01-7.304-16.314-16.315-16.314-9.01 0-16.314 7.304-16.314 16.314 0 9.011 7.304 16.315 16.314 16.315z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={415.373}
      y={82.671}
      width={55.74}
      height={5.438}
      rx={2.719}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M495.585 216.584a53.701 53.701 0 0 1-15.727 37.973 53.705 53.705 0 0 1-75.947 0 53.702 53.702 0 0 1 75.947-75.947 53.704 53.704 0 0 1 15.727 37.974z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M495.585 216.584a53.701 53.701 0 0 1-15.727 37.973 53.705 53.705 0 0 1-75.947 0 53.702 53.702 0 0 1 75.947-75.947 53.704 53.704 0 0 1 15.727 37.974z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={425.649}
      cy={201.181}
      r={6.661}
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={425.649}
      cy={201.181}
      r={6.661}
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M493.087 213.4a48.34 48.34 0 0 0-6.923-.562c-13.974-.101-27.288 6.026-36.424 16.762-9.136 10.735-13.174 24.998-11.046 39.019"
      fill="#fff"
    />
    <path
      d="M493.087 213.4a48.34 48.34 0 0 0-6.923-.562c-13.974-.101-27.288 6.026-36.424 16.762-9.136 10.735-13.174 24.998-11.046 39.019"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M493.087 213.4a48.34 48.34 0 0 0-6.923-.562c-13.974-.101-27.288 6.026-36.424 16.762-9.136 10.735-13.174 24.998-11.046 39.019"
      fill="#fff"
    />
    <path
      d="M493.087 213.4a48.34 48.34 0 0 0-6.923-.562c-13.974-.101-27.288 6.026-36.424 16.762-9.136 10.735-13.174 24.998-11.046 39.019"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={370.509}
      y={376.327}
      width={150.906}
      height={10.876}
      rx={5.438}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={381.385}
      y={343.698}
      width={140.03}
      height={10.876}
      rx={5.438}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={363.712}
      y={311.07}
      width={157.704}
      height={10.876}
      rx={5.438}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m778.582 359.959-36.553-36.39a25.915 25.915 0 0 0-18.276-7.541h-92.701c-14.282 0-25.85 11.517-25.85 25.736v180.151c0 14.219 11.568 25.735 25.85 25.735h129.254c14.282 0 25.85-11.516 25.85-25.735V378.154a25.688 25.688 0 0 0-7.574-18.195z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m731.329 451.317-47.13 26.672c-11.604 6.559-25.959-1.873-25.959-15.261v-53.332c0-13.401 14.332-21.82 25.959-15.261l47.13 26.672c11.839 6.676 11.839 23.81 0 30.51z"
      fill="#6f381e"
    />
    <circle cx={695.935} cy={195.05} r={90.734} fill="#6f381e" />
    <path
      clipRule="evenodd"
      d="M674.343 224.845h-8.068a4.513 4.513 0 0 1-4.512-4.513v-31.57a4.513 4.513 0 0 1 4.512-4.512h8.068a4.514 4.514 0 0 1 4.513 4.512v31.57a4.514 4.514 0 0 1-4.513 4.513v0z"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m678.855 188.831 15.593-20.301c2.901-3.782 8.568-3.876 11.597-.197v0a7.657 7.657 0 0 1 1.748 4.876v13.977h13.23a7.692 7.692 0 0 1 6.392 3.414l1.406 2.098a7.69 7.69 0 0 1 1 6.406l-5.807 20.178a7.69 7.69 0 0 1-7.388 5.563h-26.874a7.689 7.689 0 0 1-5.632-2.453l-5.265-5.666"
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M171.282 312.912v2.822c0 9.782 7.933 17.715 17.723 17.715 9.789 0 17.722-7.933 17.722-17.722v-2.823"
      fill="#fff"
    />
    <path
      d="M171.282 312.912v2.822c0 9.782 7.933 17.715 17.723 17.715v0c9.789 0 17.722-7.933 17.722-17.722v-2.823"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M204.829 171.366v-7.894c0-8.702-7.143-15.762-15.967-15.762-8.824 0-15.967 7.06-15.967 15.762v7.894"
      fill="#fff"
    />
    <path
      d="M204.829 171.366v-7.894c0-8.702-7.143-15.762-15.967-15.762v0c-8.824 0-15.967 7.06-15.967 15.762v7.894"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M128.361 222.121c0-27.918 22.631-50.538 50.538-50.538h20.222c27.918 0 50.538 22.631 50.538 50.538v31.197a22.318 22.318 0 0 0 6.536 15.772l7.15 7.149a22.316 22.316 0 0 1 6.536 15.772c0 11.645-9.436 21.081-21.081 21.081H129.22c-11.645 0-21.081-9.436-21.081-21.081a22.316 22.316 0 0 1 6.536-15.772l7.149-7.149a22.315 22.315 0 0 0 6.537-15.772v-31.197z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={189.668} cy={456.731} r={90.734} fill="#6f381e" />
    <rect
      x={183.093}
      y={425.171}
      width={13.15}
      height={63.119}
      rx={6.575}
      fill="#fff"
    />
    <rect
      x={221.227}
      y={450.156}
      width={13.15}
      height={63.119}
      rx={6.575}
      transform="rotate(90 221.227 450.156)"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={423.573}
        y1={705.372}
        x2={433.07}
        y2={-221.488}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={614.611}
        y1={423.763}
        x2={485.811}
        y2={-155.011}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={668.204}
        y1={376.932}
        x2={892.74}
        y2={199.323}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={241.733}
        y1={291.897}
        x2={8.193}
        y2={74.907}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg288);
const Memo = memo(ForwardRef);
export default Memo;
