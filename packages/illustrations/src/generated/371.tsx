import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg371 = (
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
      cx={449.973}
      cy={299.94}
      r={198.705}
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M494.129 211.627h133.893M271.923 388.254h133.893m184.661 52.19L309.466 159.433m330.663 198.193L392.287 109.784M259.833 242.271l247.804 247.804"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M722.093 292.911c-11.635 5.772-27.078-1.649-27.078-1.649s3.432-16.776 15.073-22.54c11.636-5.772 27.073 1.641 27.073 1.641s-3.432 16.776-15.068 22.548z"
      fill="url(#a)"
    />
    <path
      d="M154.398 351.428c14.622 8.764 35.599.663 35.599.663s-2.743-22.306-17.373-31.059c-14.622-8.764-35.59-.673-35.59-.673s2.743 22.306 17.364 31.069z"
      fill="url(#b)"
    />
    <circle
      cx={717.197}
      cy={212.62}
      r={12.432}
      transform="rotate(180 717.197 212.62)"
      fill="#6f381e"
    />
    <circle
      r={11.655}
      transform="matrix(-1 0 0 1 155.258 200.835)"
      fill="#6f381e"
    />
    <circle
      r={5.439}
      transform="matrix(-1 0 0 1 610.578 261.44)"
      fill="#6f381e"
    />
    <circle
      r={6.993}
      transform="matrix(-1 0 0 1 641.967 504.133)"
      fill="#E1E4E5"
    />
    <circle
      r={10.101}
      transform="matrix(-1 0 0 1 153.173 431.521)"
      fill="#E1E4E5"
    />
    <circle
      r={7.688}
      transform="matrix(-1 0 0 1 452.543 366.471)"
      fill="#6f381e"
    />
    <circle
      r={8.547}
      transform="matrix(-1 0 0 1 643.225 174.859)"
      fill="#E1E4E5"
    />
    <circle
      r={7.675}
      transform="scale(1 -1) rotate(-75 -88.983 -250.816)"
      fill="#E1E4E5"
    />
    <circle
      r={10.21}
      transform="matrix(-1 0 0 1 460.183 243.631)"
      fill="#6f381e"
    />
    <ellipse
      rx={7.854}
      ry={6.283}
      transform="matrix(-1 0 0 1 696.824 369.931)"
      fill="#E1E4E5"
    />
    <circle
      r={15.973}
      transform="scale(1 -1) rotate(-75 220.384 -428.287)"
      fill="#E1E4E5"
    />
    <path
      d="M756.387 326.535h.205c1.217 17.239 14.037 17.504 14.037 17.504s-14.137.276-14.137 20.196c0-19.92-14.138-20.196-14.138-20.196s12.816-.265 14.033-17.504zM191.212 480.306h.182c1.08 15.602 12.456 15.842 12.456 15.842s-12.544.25-12.544 18.279c0-18.029-12.545-18.279-12.545-18.279s11.372-.24 12.451-15.842z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={677.412}
        y1={310.915}
        x2={773.381}
        y2={235.003}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={210.98}
        y1={379.637}
        x2={93.33}
        y2={270.325}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg371);
const Memo = memo(ForwardRef);
export default Memo;
