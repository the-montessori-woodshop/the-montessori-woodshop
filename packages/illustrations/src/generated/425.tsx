import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg425 = (
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
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeDasharray="11 42"
      d="M163.767 83h573v434h-573z"
    />
    <path
      d="M387.557 252.911v20.949m167.59 39.279v-31.423c0-52.372-20.948-73.321-73.321-73.321H418.98c-52.372 0-73.321 20.949-73.321 73.321v62.846c0 52.372 20.949 73.321 73.321 73.321h136.167M429.455 252.911v20.949m-41.898 81.177v20.949m41.898-20.949v20.949m41.748-21.697v20.949m41.149-20.949v20.949m-41-111.852h41.898m-167.591 49.753h209.488"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M99.175 282.913c-48.233 2.763-48.233 59.784 0 62.547h19.788M99.44 282.914c-33.821-74.769 108.841-104.66 125.173-26.123 45.622 4.605 64.062 52.916 29.502 76.946-10.536 7.619-24.128 11.806-38.352 11.722h-.949"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M219.667 324.377c0 7.751-1.676 15.083-4.818 21.577a42.952 42.952 0 0 1-2.828 5.342c-9.008 15.188-25.662 25.453-44.726 25.453-19.063 0-35.718-10.265-44.726-25.453a43.08 43.08 0 0 1-2.827-5.342c-3.143-6.494-4.819-13.826-4.819-21.577 0-28.909 23.463-52.372 52.372-52.372 28.91 0 52.372 23.463 52.372 52.372z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={9.545}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m150.954 324.377 10.37 10.37 22.31-20.635"
      stroke="#fff"
      strokeWidth={9.545}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M664.942 282.913c-48.233 2.763-48.233 59.784 0 62.547h19.789m-19.522-62.546c-33.822-74.769 108.84-104.66 125.172-26.123 45.622 4.605 64.062 52.916 29.502 76.946-10.536 7.619-24.128 11.806-38.353 11.722h-.948"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M785.435 324.377c0 7.751-1.676 15.083-4.819 21.577a43.08 43.08 0 0 1-2.827 5.342c-9.008 15.188-25.663 25.453-44.726 25.453-19.064 0-35.718-10.265-44.726-25.453a42.952 42.952 0 0 1-2.828-5.342c-3.142-6.494-4.818-13.826-4.818-21.577 0-28.909 23.462-52.372 52.372-52.372 28.909 0 52.372 23.463 52.372 52.372z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={9.545}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m716.722 324.377 10.37 10.37 22.31-20.635"
      stroke="#fff"
      strokeWidth={9.545}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M284.005 152.349a18.53 18.53 0 0 1 18.53 0l22.545 13.016a18.531 18.531 0 0 1 9.265 16.048v26.032a18.53 18.53 0 0 1-9.265 16.048l-22.545 13.016a18.525 18.525 0 0 1-18.53 0l-22.545-13.016a18.53 18.53 0 0 1-9.265-16.048v-26.032c0-6.62 3.532-12.737 9.265-16.048l22.545-13.016z"
      fill="#6f381e"
    />
    <path
      d="m307.94 185.569-17.313 17.174-10.387-10.304"
      stroke="#fff"
      strokeWidth={7.626}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M594.997 173.963a18.532 18.532 0 0 1 18.531 0l22.544 13.016a18.53 18.53 0 0 1 9.265 16.048v26.032c0 6.62-3.532 12.738-9.265 16.048l-22.544 13.016a18.532 18.532 0 0 1-18.531 0l-22.544-13.016a18.53 18.53 0 0 1-9.266-16.048v-26.032a18.529 18.529 0 0 1 9.266-16.048l22.544-13.016z"
      fill="#6f381e"
    />
    <path
      d="m618.932 207.182-17.312 17.174-10.388-10.304"
      stroke="#fff"
      strokeWidth={7.626}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M284.005 380.491a18.525 18.525 0 0 1 18.53 0l22.545 13.016a18.53 18.53 0 0 1 9.265 16.048v26.031a18.533 18.533 0 0 1-9.265 16.049l-22.545 13.016a18.53 18.53 0 0 1-18.53 0l-22.545-13.016a18.533 18.533 0 0 1-9.265-16.049v-26.031a18.53 18.53 0 0 1 9.265-16.048l22.545-13.016z"
      fill="#6f381e"
    />
    <path
      d="m307.94 413.71-17.313 17.174-10.387-10.304"
      stroke="#fff"
      strokeWidth={7.626}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M560.424 371.088a19.235 19.235 0 0 1 19.235 0l23.4 13.51a19.235 19.235 0 0 1 9.617 16.658v27.02a19.235 19.235 0 0 1-9.617 16.658l-23.4 13.51a19.235 19.235 0 0 1-19.235 0l-23.4-13.51a19.236 19.236 0 0 1-9.618-16.658v-27.02a19.236 19.236 0 0 1 9.618-16.658l23.4-13.51z"
      fill="#6f381e"
    />
    <path
      d="m585.269 405.569-17.971 17.826-10.782-10.696"
      stroke="#fff"
      strokeWidth={7.915}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg425);
const Memo = memo(ForwardRef);
export default Memo;
