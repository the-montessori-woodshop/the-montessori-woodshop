import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg468 = (
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
      d="M741.941 251.957c-16.381 8.125-38.122-2.323-38.122-2.323s4.832-23.618 21.221-31.732c16.381-8.126 38.113 2.311 38.113 2.311s-4.832 23.618-21.212 31.744z"
      fill="url(#a)"
    />
    <path
      d="M722.958 189.236c-8.343 5.347-18.261 1.401-32.481-8.049-10.693-7.109-20.525-13.441-28.521-25.607-5.598-8.512-8.742-17.664-10.287-25.748-1.675-8.759-4.844-19.426 2.241-24.563 9.735-7.055 40.891-.747 59.977 26.309 20.963 29.725 17.229 52.435 9.071 57.658z"
      fill="url(#b)"
    />
    <path
      d="M183.711 391.22c21.659 12.981 52.733.981 52.733.981s-4.063-33.042-25.735-46.009c-21.659-12.981-52.72-.995-52.72-.995s4.063 33.042 25.722 46.023z"
      fill="url(#c)"
    />
    <circle
      cx={742.859}
      cy={318.862}
      r={17.747}
      transform="rotate(-180 742.859 318.862)"
      fill="#6f381e"
    />
    <circle
      cx={216.713}
      cy={268.112}
      r={14.61}
      transform="rotate(-180 216.713 268.112)"
      fill="#6f381e"
    />
    <circle
      r={16.638}
      transform="matrix(-1 0 0 1 243.77 454.875)"
      fill="#6f381e"
    />
    <circle
      r={7.764}
      transform="matrix(-1 0 0 1 796.955 339.364)"
      fill="#6f381e"
    />
    <circle
      r={9.983}
      transform="matrix(-1 0 0 1 686.438 418.424)"
      fill="#E1E4E5"
    />
    <circle
      r={14.419}
      transform="matrix(-1 0 0 1 216.879 521.751)"
      fill="#E1E4E5"
    />
    <circle
      r={10.975}
      transform="matrix(-1 0 0 1 676.703 521.914)"
      fill="#E1E4E5"
    />
    <circle
      r={12.201}
      transform="matrix(-1 0 0 1 767.703 155.94)"
      fill="#E1E4E5"
    />
    <circle
      r={10.957}
      transform="scale(1 -1) rotate(-75 -139.827 -220.572)"
      fill="#E1E4E5"
    />
    <circle
      r={4.56}
      transform="matrix(-1 0 0 1 280.337 147.213)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.212}
      ry={8.97}
      transform="matrix(-1 0 0 1 755.602 426.946)"
      fill="#E1E4E5"
    />
    <circle
      r={7.932}
      transform="scale(1 -1) rotate(-75 227.713 -396.216)"
      fill="#E1E4E5"
    />
    <path
      d="M202.019 156.14h.159c.946 13.401 10.912 13.608 10.912 13.608s-10.989.214-10.989 15.698c0-15.484-10.99-15.698-10.99-15.698s9.962-.207 10.908-13.608z"
      fill="#E1E4E5"
    />
    <path
      d="m541.683 116.529 67.877 67.937a42.581 42.581 0 0 1 12.456 30.081v268.385c0 23.512-19.024 42.546-42.503 42.546H339.495c-23.48 0-42.503-19.034-42.503-42.546V146.61c0-23.513 19.023-42.546 42.503-42.546h172.141a42.494 42.494 0 0 1 30.047 12.465z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M369.205 274.474h83.185m-83.185-46h83.185M369.205 331.87h148.143M369 391.312h166.697m-166.697 59h166.697"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M735.222 241.631v-95.17c.003-16.379-10.307-31.001-25.776-36.553L649.98 88.582a93.926 93.926 0 0 0-63.405 0l-59.545 21.365c-15.455 5.547-25.762 20.149-25.775 36.514v95.17c0 49.449 69.449 86.041 101.385 100.298a38.04 38.04 0 0 0 31.196 0c31.937-14.256 101.386-50.926 101.386-100.298z"
      fill="#6f381e"
    />
    <path fill="#fff" d="M569.519 180.921h97.407v84.811h-97.407z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M618.642 187.399c-12.156 0-22.984.48-31.831 1.09-8.391.578-14.844 7.522-15.446 16.559-.429 6.428-.727 13.202-.727 19.538s.298 13.11.727 19.538c.602 9.037 7.055 15.98 15.446 16.559a465.09 465.09 0 0 0 63.661 0c8.392-.579 14.844-7.522 15.446-16.559.429-6.428.727-13.202.727-19.538s-.298-13.11-.727-19.538c-.602-9.037-7.054-15.981-15.446-16.559a465.059 465.059 0 0 0-31.83-1.09zm-32.701-13.755c-15.209 1.048-27.157 13.847-28.256 30.331-.443 6.654-.762 13.805-.762 20.611 0 6.805.319 13.957.762 20.61 1.099 16.485 13.048 29.283 28.256 30.332a477.802 477.802 0 0 0 65.401 0c15.209-1.049 27.158-13.847 28.256-30.332.443-6.653.762-13.805.762-20.61 0-6.806-.319-13.957-.762-20.611-1.098-16.484-13.047-29.283-28.256-30.331a477.794 477.794 0 0 0-65.401 0z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M584.187 167.405c0-18.97 15.378-34.348 34.347-34.348 18.97 0 34.348 15.378 34.348 34.348v27.478a6.87 6.87 0 1 1-13.739 0v-27.478c0-11.382-9.227-20.609-20.609-20.609-11.381 0-20.608 9.227-20.608 20.609v27.478a6.87 6.87 0 0 1-13.739 0v-27.478z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M625.404 233.18c4.107-2.376 6.87-6.816 6.87-11.901 0-7.588-6.151-13.739-13.739-13.739-7.588 0-13.74 6.151-13.74 13.739 0 5.085 2.763 9.525 6.87 11.901v8.708a6.87 6.87 0 0 0 13.739 0v-8.708z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={679.037}
        y1={277.303}
        x2={814.146}
        y2={170.432}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={667.797}
        y1={223.301}
        x2={721.036}
        y2={31.826}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={267.526}
        y1={433.005}
        x2={93.249}
        y2={271.079}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg468);
const Memo = memo(ForwardRef);
export default Memo;
