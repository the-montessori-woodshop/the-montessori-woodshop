import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg44 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M245.546 131.678c-45.912 0-83.47 37.509-83.47 83.361 0 45.852 37.558 83.361 83.47 83.361 9.21 0 16.754 7.534 16.754 16.732s-7.544 16.732-16.754 16.732h-43.677c-22.397 0-40.724 18.303-40.724 40.671s18.327 40.671 40.724 40.671c19.371 0 35.221 15.83 35.221 35.175 0 35.296 28.916 64.174 64.258 64.174h377.21c45.912 0 83.47-37.509 83.47-83.361 0-45.852-37.558-83.361-83.47-83.361h-8.074c-9.21 0-16.753-7.524-16.753-16.732 0-9.198 7.534-16.731 16.753-16.731h54.349c22.397 0 40.725-18.304 40.725-40.672 0-22.34-18.281-40.625-40.641-40.671h-43.732c-19.371 0-35.221-15.83-35.221-35.175 0-35.296-28.916-64.174-64.258-64.174h-336.16z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M560.867 265.841c54.194 54.193 54.194 142.058 0 196.252-54.193 54.193-142.058 54.193-196.252 0-54.193-54.194-54.193-142.059 0-196.252 54.194-54.194 142.059-54.194 196.252 0z"
      fill="#6f381e"
    />
    <path
      d="M560.867 265.841c54.194 54.193 54.194 142.058 0 196.252-54.193 54.193-142.058 54.193-196.252 0-54.193-54.194-54.193-142.059 0-196.252 54.194-54.194 142.059-54.194 196.252 0"
      stroke="#6f381e"
      strokeWidth={32.024}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M462.741 406.664v-54.441m-.063-32.43c-8.839 0-16.012 7.173-15.948 16.012 0 8.839 7.173 16.012 16.012 16.012 8.838 0 16.012-7.173 16.012-16.012s-7.174-16.012-16.076-16.012"
      stroke="#fff"
      strokeWidth={32.024}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M383.088 179.251c8.945-34.949 40.649-60.803 78.395-60.803 44.684 0 80.893 36.209 80.893 80.893v51.025"
      stroke="#6f381e"
      strokeWidth={32.024}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M721.374 238.195c0 24.583-18.477 47.569-43.309 53.151-24.832-5.582-43.309-28.568-43.309-53.151v-19.31c0-4.396 2.658-8.359 6.729-10.021l27.068-11.076a25.102 25.102 0 0 1 19.024 0l27.068 11.076a10.828 10.828 0 0 1 6.729 10.021v19.31z"
      fill="#6f381e"
    />
    <path
      d="m695.659 232.472-20.301 20.301-12.18-12.18"
      stroke="#fff"
      strokeWidth={9.994}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M276.087 302.331c0 37.048-27.845 71.689-65.269 80.1-37.423-8.411-65.268-43.052-65.268-80.1v-29.102a16.311 16.311 0 0 1 10.141-15.101l40.793-16.692a37.824 37.824 0 0 1 28.669 0l40.793 16.692a16.32 16.32 0 0 1 10.141 15.101v29.102z"
      fill="#6f381e"
    />
    <path
      d="m237.334 293.707-30.595 30.594-18.356-18.356"
      stroke="#fff"
      strokeWidth={15.062}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M330.985 154.076c0 23.198-17.436 44.889-40.869 50.156-23.433-5.267-40.869-26.958-40.869-50.156v-18.223c0-4.148 2.509-7.887 6.35-9.456l25.543-10.452a23.69 23.69 0 0 1 17.952 0l25.543 10.452a10.219 10.219 0 0 1 6.35 9.456v18.223z"
      fill="#6f381e"
    />
    <path
      d="m306.72 148.676-19.158 19.157-11.494-11.495"
      stroke="#fff"
      strokeWidth={9.431}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={714.747}
      y={376.025}
      width={52.539}
      height={6.121}
      rx={3.061}
      transform="rotate(-45 714.747 376.025)"
      fill="#E1E4E5"
    />
    <rect
      x={734.891}
      y={376.168}
      width={19.508}
      height={6.121}
      rx={3.061}
      transform="rotate(-45 734.891 376.168)"
      fill="#E1E4E5"
    />
    <rect
      x={228.508}
      y={171.109}
      width={52.539}
      height={6.121}
      rx={3.061}
      transform="rotate(135 228.508 171.109)"
      fill="#E1E4E5"
    />
    <rect
      x={208.364}
      y={170.965}
      width={19.508}
      height={6.121}
      rx={3.061}
      transform="rotate(135 208.364 170.965)"
      fill="#E1E4E5"
    />
    <rect
      x={305.366}
      y={483.42}
      width={52.539}
      height={6.121}
      rx={3.061}
      transform="rotate(135 305.366 483.42)"
      fill="#E1E4E5"
    />
    <rect
      x={285.222}
      y={483.277}
      width={19.508}
      height={6.121}
      rx={3.061}
      transform="rotate(135 285.222 483.277)"
      fill="#E1E4E5"
    />
    <rect
      x={645.736}
      y={110.111}
      width={52.539}
      height={6.121}
      rx={3.061}
      transform="rotate(135 645.736 110.111)"
      fill="#E1E4E5"
    />
    <rect
      x={625.592}
      y={109.967}
      width={19.508}
      height={6.121}
      rx={3.061}
      transform="rotate(135 625.592 109.967)"
      fill="#E1E4E5"
    />
    <circle
      cx={714.759}
      cy={444.274}
      r={11.233}
      transform="rotate(-150 714.759 444.274)"
      fill="#6f381e"
    />
    <circle
      r={8.685}
      transform="scale(1 -1) rotate(-30 -171.22 -1622.15)"
      fill="#E1E4E5"
    />
    <circle
      cx={674.433}
      cy={394.188}
      r={9.398}
      transform="rotate(-150 674.433 394.188)"
      fill="#fff"
    />
    <path
      d="M187.029 438.079c0 7.079-5.737 12.81-12.824 12.81s-12.795-5.759-12.795-12.81c0-7.079 5.737-12.809 12.823-12.809 7.087 0 12.796 5.73 12.796 12.809zm380.629-346.47c0 7.079-5.737 12.81-12.823 12.81-7.087 0-12.796-5.76-12.796-12.81 0-7.08 5.737-12.81 12.824-12.81s12.795 5.73 12.795 12.81z"
      stroke="#E1E4E5"
      strokeWidth={6.1}
      strokeMiterlimit={10}
    />
    <path
      d="M611.577 491.682s37.761-19.529 52.602-48.375c.905-1.758.313-3.975-1.418-4.943-1.128-.628-2.815-.804-5.327.244-6.701 2.801-27.128 35.324-45.857 53.074zm-362.33-87.063s11.256-18.82 26.58-25.543c.934-.41 2.057-.035 2.5.887.287.601.324 1.475-.295 2.735-1.656 3.361-19.05 12.843-28.785 21.921zm59.779-157.375s11.256-18.82 26.58-25.543c.933-.41 2.056-.035 2.499.887.288.601.325 1.475-.295 2.735-1.655 3.361-19.05 12.843-28.784 21.921z"
      fill="#E1E4E5"
    />
    <path
      d="M722.257 159.467c-20.429 17.701-55.415 10.809-55.415 10.809s-1.842-35.589 18.604-53.278c20.429-17.7 55.399-10.823 55.399-10.823s1.841 35.59-18.588 53.292z"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={476.239}
        y1={726.097}
        x2={468.837}
        y2={-282.735}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={641.636}
        y1={219.059}
        x2={795.361}
        y2={16.032}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg44);
const Memo = memo(ForwardRef);
export default Memo;
