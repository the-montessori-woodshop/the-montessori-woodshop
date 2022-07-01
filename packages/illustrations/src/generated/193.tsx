import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg193 = (
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
      d="m658.709 189.441-67.403-67.462A47.66 47.66 0 0 0 557.605 108H386.668C360.331 108 339 129.35 339 155.71v333.971c0 26.36 21.331 47.71 47.668 47.71h238.339c26.337 0 47.668-21.35 47.668-47.71V223.172a47.75 47.75 0 0 0-13.966-33.731z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m571.709 144.441-67.403-67.462A47.662 47.662 0 0 0 470.605 63H299.668C273.331 63 252 84.35 252 110.71v333.971c0 26.36 21.331 47.71 47.668 47.71h238.339c26.337 0 47.668-21.35 47.668-47.71V178.172a47.75 47.75 0 0 0-13.966-33.731z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M506 226.556c0 52.072-39.199 100.762-91.882 112.584-52.683-11.822-91.882-60.512-91.882-112.584v-40.904a22.924 22.924 0 0 1 14.276-21.225l57.426-23.462a53.333 53.333 0 0 1 40.36 0l57.426 23.462c8.637 3.531 14.276 11.914 14.276 21.225v40.904z"
      fill="#fff"
    />
    <path
      d="M494.463 375H334.964c-4.996 0-9.058 4.063-9.058 9.058 0 4.996 4.062 9.059 9.058 9.059h159.499c4.995 0 9.058-4.063 9.058-9.059 0-4.995-4.063-9.058-9.058-9.058zm-36.43 39h-87.066c-6.048 0-10.967 4.037-10.967 9s4.919 9 10.967 9h87.066c6.048 0 10.967-4.037 10.967-9s-4.919-9-10.967-9z"
      fill="#fff"
    />
    <path
      d="M178.778 188.151c9.567 11.073 28.846 10.103 28.846 10.103s3.756-18.923-5.821-29.99c-9.567-11.073-28.836-10.109-28.836-10.109s-3.756 18.923 5.811 29.996z"
      fill="url(#a)"
    />
    <ellipse
      rx={11.796}
      ry={11.14}
      transform="matrix(-1 0 0 1 681.795 137.14)"
      fill="#E1E4E5"
    />
    <circle
      r={9.469}
      transform="matrix(-1 0 0 1 291.469 519.469)"
      fill="#E1E4E5"
    />
    <circle
      r={5.656}
      transform="matrix(-1 0 0 1 621.656 497.656)"
      fill="#E1E4E5"
    />
    <circle
      r={8.079}
      transform="matrix(-1 0 0 1 640.079 241.079)"
      fill="#E1E4E5"
    />
    <circle
      r={7.895}
      transform="scale(1 -1) rotate(-75 54.975 -676.99)"
      fill="#E1E4E5"
    />
    <circle
      r={10.503}
      transform="matrix(-1 0 0 1 216.959 332.955)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.079}
      ry={6.463}
      transform="matrix(-1 0 0 1 728.079 271.463)"
      fill="#E1E4E5"
    />
    <circle
      cx={627.029}
      cy={328.029}
      r={7.372}
      transform="rotate(75 627.029 328.029)"
      fill="#E1E4E5"
    />
    <path
      d="M693.452 169h.094c.559 7.926 6.454 8.048 6.454 8.048s-6.5.127-6.5 9.285c0-9.158-6.5-9.285-6.5-9.285s5.892-.122 6.452-8.048zm-52-70h.094c.559 8.256 6.454 8.383 6.454 8.383s-6.5.133-6.5 9.673c0-9.54-6.5-9.673-6.5-9.673s5.892-.127 6.452-8.383zM213.098 454h.206c1.223 18.041 14.103 18.319 14.103 18.319s-14.203.289-14.203 21.136c0-20.847-14.204-21.136-14.204-21.136s12.875-.278 14.098-18.319z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={217.332}
        y1={226.349}
        x2={150.775}
        y2={105.621}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg193);
const Memo = memo(ForwardRef);
export default Memo;
