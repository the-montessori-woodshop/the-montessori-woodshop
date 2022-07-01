import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg392 = (
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
      d="M677.902 427.385v-52.77c0-29.77-24.133-53.903-53.902-53.903-29.769 0-53.902 24.133-53.902 53.903v52.77c0 29.77 24.133 53.903 53.902 53.903 29.769 0 53.902-24.133 53.902-53.903zm18.658 0v-52.77c0-40.074-32.486-72.56-72.56-72.56-40.073 0-72.56 32.486-72.56 72.56v52.77c0 40.074 32.487 72.56 72.56 72.56 40.074 0 72.56-32.486 72.56-72.56z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M624 338.901c5.152 0 9.329 4.176 9.329 9.328v26.386c0 5.152-4.177 9.328-9.329 9.328-5.152 0-9.329-4.176-9.329-9.328v-26.386c0-5.152 4.177-9.328 9.329-9.328z"
      fill="#E1E4E5"
    />
    <path
      d="M444.333 299.333H205.667c-17.858 0-32.334 14.476-32.334 32.334V451c0 17.857 14.476 32.333 32.334 32.333h238.666c17.858 0 32.334-14.476 32.334-32.333V331.667c0-17.858-14.476-32.334-32.334-32.334zM148.5 331.667c0-31.573 25.594-57.167 57.167-57.167h238.666c31.573 0 57.167 25.594 57.167 57.167V451c0 31.572-25.594 57.167-57.167 57.167H205.667c-31.573 0-57.167-25.595-57.167-57.167V331.667z"
      fill="#E1E4E5"
      stroke="#fff"
      strokeWidth={5}
    />
    <path
      d="M384.667 361.5c0-8.239 6.678-14.917 14.916-14.917h29.834c8.238 0 14.916 6.678 14.916 14.917 0 8.238-6.678 14.916-14.916 14.916h-29.834c-8.238 0-14.916-6.678-14.916-14.916zm-179 59.666c0-8.238 6.678-14.916 14.916-14.916 8.239 0 14.917 6.678 14.917 14.916 0 8.239-6.678 14.917-14.917 14.917-8.238 0-14.916-6.678-14.916-14.917zm59.666 0c0-8.238 6.679-14.916 14.917-14.916h89.5c8.238 0 14.917 6.678 14.917 14.916 0 8.239-6.679 14.917-14.917 14.917h-89.5c-8.238 0-14.917-6.678-14.917-14.917zm164.084-14.916c-8.239 0-14.917 6.678-14.917 14.916 0 8.239 6.678 14.917 14.917 14.917 8.238 0 14.916-6.678 14.916-14.917 0-8.238-6.678-14.916-14.916-14.916zm-89.5-59.667c-8.239 0-14.917 6.678-14.917 14.917 0 8.238 6.678 14.916 14.917 14.916 8.238 0 14.916-6.678 14.916-14.916 0-8.239-6.678-14.917-14.916-14.917zM265.333 361.5c0-8.239 6.679-14.917 14.917-14.917s14.917 6.678 14.917 14.917c0 8.238-6.679 14.916-14.917 14.916s-14.917-6.678-14.917-14.916zm-44.75-14.917c-8.238 0-14.916 6.678-14.916 14.917 0 8.238 6.678 14.916 14.916 14.916 8.239 0 14.917-6.678 14.917-14.916 0-8.239-6.678-14.917-14.917-14.917z"
      fill="#E1E4E5"
    />
    <path
      d="M300 91h392m-369 48.5h369m-351 48h351m-534 48h534"
      stroke="#E1E4E5"
      strokeWidth={21.43}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={211.846}
      cy={134.846}
      r={64.346}
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={3}
    />
    <path
      d="M231.523 130.592c4 2.309 4 8.083 0 10.392l-24.686 14.253c-4 2.309-9-.578-9-5.196v-28.506c0-4.618 5-7.505 9-5.196l24.686 14.253z"
      fill="#fff"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg392);
const Memo = memo(ForwardRef);
export default Memo;
