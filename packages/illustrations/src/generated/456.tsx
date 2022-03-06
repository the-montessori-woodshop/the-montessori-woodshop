import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg456 = (
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
      d="M552.177 151.633H690.93M516.567 93.38h72.447m61.395 116.506h72.447"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M655.918 289.425c0 108.341-87.705 196.046-196.046 196.046s-196.046-87.705-196.046-196.046S351.531 93.379 459.872 93.379"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M578.485 330.904v-96.547c.004-16.616-10.44-31.45-26.109-37.082l-60.238-21.635a95.006 95.006 0 0 0-64.227 0l-60.316 21.674c-15.656 5.628-26.097 20.441-26.11 37.043v96.547c0 50.166 70.35 87.288 102.7 101.75a38.476 38.476 0 0 0 31.6 0c32.351-14.462 102.7-51.663 102.7-101.75z"
      fill="#6f381e"
    />
    <path
      d="m503.421 276.906-49.711 48.171-29.827-28.902"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m671.482 505.276-66.448-66.449"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M721.553 345.446c-14.632 7.258-34.051-2.075-34.051-2.075s4.316-21.095 18.955-28.343c14.631-7.258 34.043 2.064 34.043 2.064s-4.316 21.096-18.947 28.354z"
      fill="url(#a)"
    />
    <path
      d="M187.992 383.408c20.719 12.418 50.445.938 50.445.938s-3.886-31.609-24.619-44.013c-20.719-12.418-50.433-.952-50.433-.952s3.887 31.609 24.607 44.027z"
      fill="url(#b)"
    />
    <circle
      r={9.963}
      transform="matrix(-1 0 0 1 589.452 495.012)"
      fill="#E1E4E5"
    />
    <circle
      r={14.392}
      transform="matrix(-1 0 0 1 252.263 457.571)"
      fill="#E1E4E5"
    />
    <circle
      r={10.953}
      transform="matrix(-1 0 0 1 665.914 409.152)"
      fill="#E1E4E5"
    />
    <circle
      r={12.178}
      transform="matrix(-1 0 0 1 726.431 266.235)"
      fill="#E1E4E5"
    />
    <circle
      r={10.935}
      transform="scale(1 -1) rotate(-75 -61.048 -268.871)"
      fill="#E1E4E5"
    />
    <circle
      r={4.551}
      transform="matrix(-1 0 0 1 259.037 147.599)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.19}
      ry={8.952}
      transform="matrix(-1 0 0 1 341.677 514)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={665.367}
        y1={368.085}
        x2={786.047}
        y2={272.627}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={268.171}
        y1={423.381}
        x2={101.453}
        y2={268.478}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg456);
const Memo = memo(ForwardRef);
export default Memo;
