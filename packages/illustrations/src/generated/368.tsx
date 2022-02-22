import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg368 = (
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
      d="M832.892 284.16c-26.575 13.183-61.847-3.768-61.847-3.768s7.839-38.316 34.428-51.48c26.575-13.183 61.833 3.749 61.833 3.749s-7.839 38.316-34.414 51.499z"
      fill="url(#a)"
    />
    <path
      d="M72.72 370.833c30.024 17.994 73.099 1.36 73.099 1.36s-5.632-45.804-35.675-63.778c-30.024-17.995-73.081-1.38-73.081-1.38s5.632 45.803 35.656 63.798z"
      fill="url(#b)"
    />
    <circle
      cx={779.634}
      cy={197.527}
      r={14.511}
      transform="rotate(180 779.634 197.527)"
      fill="#6f381e"
    />
    <circle
      cx={233.105}
      cy={279.72}
      r={16.324}
      transform="rotate(180 233.105 279.72)"
      fill="#6f381e"
    />
    <circle
      r={13.604}
      transform="matrix(-1 0 0 1 123.742 183.771)"
      fill="#6f381e"
    />
    <circle
      r={6.348}
      transform="matrix(-1 0 0 1 655.188 254.509)"
      fill="#6f381e"
    />
    <circle
      r={8.162}
      transform="matrix(-1 0 0 1 691.825 537.779)"
      fill="#E1E4E5"
    />
    <circle
      r={11.79}
      transform="matrix(-1 0 0 1 121.309 453.028)"
      fill="#E1E4E5"
    />
    <circle
      r={8.973}
      transform="matrix(-1 0 0 1 257.651 151.788)"
      fill="#E1E4E5"
    />
    <circle
      r={9.976}
      transform="matrix(-1 0 0 1 728.976 137.976)"
      fill="#E1E4E5"
    />
    <circle
      r={8.958}
      transform="scale(1 -1) rotate(-75 -81.255 -230.812)"
      fill="#E1E4E5"
    />
    <circle
      r={11.918}
      transform="matrix(-1 0 0 1 375.804 76.51)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.167}
      ry={7.334}
      transform="matrix(-1 0 0 1 755.856 381.139)"
      fill="#E1E4E5"
    />
    <circle
      r={18.644}
      transform="matrix(0 1 1 0 688.009 51.837)"
      fill="#E1E4E5"
    />
    <path
      d="M825.376 330.488h.239C827.036 350.61 842 350.919 842 350.919s-16.501.323-16.501 23.572c0-23.249-16.502-23.572-16.502-23.572s14.958-.309 16.379-20.431zM222.63 526.103h.213c1.26 18.211 14.538 18.491 14.538 18.491s-14.642.292-14.642 21.334c0-21.042-14.642-21.334-14.642-21.334s13.273-.28 14.533-18.491z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M777.109 231.264c37.128 40.736 37.128 96.766 0 137.503-58.986 64.719-167.83 151.782-326.531 151.782s-267.545-87.063-326.532-151.782c-37.128-40.737-37.128-96.767 0-137.503 58.987-64.72 167.831-151.782 326.532-151.782s267.545 87.062 326.531 151.782z"
      fill="#6f381e"
    />
    <path
      d="m615.555 464.544.028-.029c91.193-91.208 91.184-239.074-.021-330.271s-239.071-91.194-330.272.007c-91.201 91.201-91.204 239.066-.007 330.271 91.198 91.205 239.063 91.215 330.272.022"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={77.847}
      transform="matrix(-1 0 0 1 450.411 299.39)"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M372.564 299.39v220.044m155.694-220.048V79.218M411.449 231.91 220.886 341.932m268.405 24.817 190.671-110.083m-190.627-24.815L298.771 121.829m112.711 244.86 190.671 110.084"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={730.841}
        y1={325.28}
        x2={950.032}
        y2={151.899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={188.905}
        y1={428.757}
        x2={-52.681}
        y2={204.292}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg368);
const Memo = memo(ForwardRef);
export default Memo;
