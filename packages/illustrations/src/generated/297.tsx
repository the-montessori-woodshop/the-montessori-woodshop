import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg297 = (
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
      d="M413.961 218.376c-1.418-59.59 52.023-93.405 78.921-102.864-8.276 13.597-7.448 56.575 62.073 119.712 86.902 78.921 62.96 284.648-97.543 279.327-160.502-5.32-158.728-144.541-151.634-192.425 7.094-47.885 46.111-131.24 54.092-71.827 6.384 47.53 17.707 55.514 30.713 57.583 2.956-7.685 24.797-29.917 23.378-89.506z"
      fill="#6f381e"
    />
    <path
      d="M475.432 346.601c2.319-27.194-21.308-44.152-33.411-49.231 3.425 6.446 1.843 26.065-31.889 52.964-42.164 33.624-36.908 128.319 37.039 130.403 73.947 2.084 77.025-61.592 75.102-83.676-1.923-22.084-17.532-61.277-22.863-34.349-4.264 21.543-17.406 28.088-23.444 28.668-1.144-3.596-2.853-17.585-.534-44.779z"
      fill="#fff"
    />
    <circle cx={452.63} cy={428.028} r={25.947} fill="#6f381e" />
    <path
      d="M183.162 400.828c18.923 11.341 46.072.857 46.072.857s-3.55-28.868-22.484-40.197c-18.924-11.342-46.061-.87-46.061-.87s3.55 28.868 22.473 40.21z"
      fill="url(#a)"
    />
    <circle
      cx={315.294}
      cy={97.749}
      r={18.202}
      transform="rotate(180 315.294 97.75)"
      fill="#6f381e"
    />
    <circle
      cx={617.337}
      cy={197.889}
      r={14.666}
      transform="rotate(180 617.337 197.889)"
      fill="#6f381e"
    />
    <circle
      cx={370.464}
      cy={182.762}
      r={14.984}
      transform="rotate(180 370.464 182.762)"
      fill="#6f381e"
    />
    <circle
      r={10.153}
      transform="matrix(-1 0 0 1 268.745 291.524)"
      fill="#6f381e"
    />
    <circle
      r={7.963}
      transform="matrix(-1 0 0 1 687.348 293.847)"
      fill="#6f381e"
    />
    <circle
      r={10.239}
      transform="scale(1 -1) rotate(60 640.255 24.01)"
      fill="#E1E4E5"
    />
    <circle
      r={14.789}
      transform="matrix(-1 0 0 1 687.405 413.486)"
      fill="#E1E4E5"
    />
    <circle
      r={11.256}
      transform="scale(1 -1) rotate(60 724.767 151.924)"
      fill="#E1E4E5"
    />
    <circle
      r={12.514}
      transform="matrix(-1 0 0 1 736.486 185.482)"
      fill="#E1E4E5"
    />
    <circle
      r={11.237}
      transform="scale(1 -1) rotate(-75 -60.539 -238.552)"
      fill="#E1E4E5"
    />
    <circle
      r={14.949}
      transform="matrix(-1 0 0 1 463.067 48.131)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.499}
      ry={9.2}
      transform="scale(1 -1) rotate(60 765.969 290.354)"
      fill="#E1E4E5"
    />
    <circle
      r={23.387}
      transform="scale(1 -1) rotate(-75 237.456 -434.421)"
      fill="#E1E4E5"
    />
    <path
      d="M236.743 157.829h.164c.97 13.744 11.192 13.955 11.192 13.955s-11.272.221-11.272 16.102c0-15.881-11.271-16.102-11.271-16.102s10.217-.211 11.187-13.955zm22.437 297.274h.157c.931 13.703 10.745 13.914 10.745 13.914s-10.822.22-10.822 16.054c0-15.834-10.821-16.054-10.821-16.054s9.809-.211 10.741-13.914z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={256.39}
        y1={437.335}
        x2={104.126}
        y2={295.863}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg297);
const Memo = memo(ForwardRef);
export default Memo;
