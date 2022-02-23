import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg230 = (
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
      d="M778.239 395.362h-63.422c-15.54 0-28.56-10.575-28.56-23.971 0-6.697 3.36-12.69 8.4-16.92 5.04-4.23 12.18-7.051 20.16-7.051h9.241c7.98 0 15.12-2.82 20.16-7.05 5.04-4.23 8.4-10.223 8.4-16.921 0-13.043-12.6-23.97-28.56-23.97H530.344c-5.06 0-8.312-6.221-8.312-11.281 0-12.69-12.18-22.913-27.301-22.913h-72.088a6.875 6.875 0 0 1 0-13.748h276.214c12.18 0 23.521-4.231 31.501-10.928 7.98-6.698 13.02-16.216 13.02-26.439 0-20.798-20.16-37.366-44.521-37.366H556.196c-22.384 0-44.541-17.274-66.925-17.274h-79.652c-11.681 0-21.151-9.469-21.151-21.15 0-11.682 9.47-21.151 21.151-21.151h178.355c8.4 0 16.38-2.82 21.84-7.403 5.461-4.583 8.821-10.928 8.821-18.33 0-14.101-13.861-25.734-30.661-25.734H176.782c-8.4 0-16.38 2.82-21.84 7.402-5.46 4.583-8.82 10.928-8.82 18.331 0 14.101 13.86 25.734 30.66 25.734h10.501c13.86 0 25.62 9.518 25.62 21.503 0 5.993-2.94 11.28-7.56 15.158-4.62 3.878-10.92 6.345-18.06 6.345h-50.822c-8.82 0-17.22 3.173-23.1 8.108-5.88 4.935-9.661 11.633-9.661 19.389 0 15.158 14.701 27.143 32.341 27.143h51.662c16.8 0 30.661 11.633 30.661 25.734 0 7.05-3.36 13.395-8.821 17.978-5.46 4.583-13.02 7.403-21.42 7.403h-46.202c-7.56 0-14.28 2.467-19.32 6.697-5.04 4.231-7.98 9.871-7.98 16.216 0 12.691 12.18 22.914 27.3 22.914h37.382c21.42 0 38.641 14.453 38.641 32.431 0 8.813-4.201 17.273-11.341 22.913-7.14 5.993-16.8 9.518-27.3 9.518h-52.082c-10.5 0-20.16 3.525-26.881 9.518C93.2 391.837 89 399.945 89 408.758c0 17.626 17.22 32.079 38.221 32.079H288.04c17.76 0 35.207 9.87 52.967 9.87h29.292c11.194 0 20.269 9.075 20.269 20.27 0 11.194-9.075 20.269-20.269 20.269h-71.293c-9.24 0-17.221 3.173-23.101 8.108-5.88 4.935-9.66 11.986-9.66 19.388 0 15.158 14.7 27.496 32.761 27.496h436.812c9.24 0 17.22-3.172 23.101-8.107 5.88-4.936 9.66-11.986 9.66-19.389 0-15.158-14.701-27.496-32.761-27.496h-13.02c-13.441 0-23.941-9.165-23.941-20.093 0-5.64 2.52-10.576 7.14-14.101 4.2-3.525 10.5-5.992 17.221-5.992h55.021c9.24 0 17.221-3.173 23.101-8.108 5.88-4.935 9.66-11.986 9.66-19.388 0-15.864-14.7-28.202-32.761-28.202z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M293.952 220.267c-67.054 8.861-118.877 63.921-118.877 131.248 0 73.475 61.555 133.058 137.462 133.058h302.418c60.731 0 109.97-47.661 109.97-106.446S675.686 271.68 614.955 271.68c0-88.191-73.845-159.669-164.955-159.669-72.498 0-133.916 45.319-156.048 108.256z"
      fill="#6f381e"
    />
    <path
      d="M411.5 281v19m77-19v19m28.5 71s-25.303 25-67.5 25-67.5-25-67.5-25"
      stroke="#fff"
      strokeWidth={33.453}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={465.394}
        y1={815.622}
        x2={455.534}
        y2={-457.012}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg230);
const Memo = memo(ForwardRef);
export default Memo;