import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg427 = (
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
      d="M359.299 531.871H545.07c93.35 0 110.07-37.386 114.946-82.9l17.416-185.772c6.27-56.66-9.985-102.87-109.14-102.87H336.078c-99.156 0-115.411 46.21-109.141 102.87l17.416 185.772c4.877 45.514 21.596 82.9 114.946 82.9zm.004-371.543v-18.577c0-41.102 0-74.308 74.308-74.308h37.154c74.309 0 74.309 33.206 74.309 74.308v18.577"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M676.27 276.436a379.348 379.348 0 0 1-130.969 61.304m-310.926-55.034c38.78 26.472 81.043 45.281 124.931 55.963"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M452.188 443.629c51.3 0 92.886-41.587 92.886-92.886 0-51.299-41.586-92.886-92.886-92.886-51.299 0-92.885 41.587-92.885 92.886 0 51.299 41.586 92.886 92.885 92.886z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={11}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m419 355.176 17.404 17.362c5.087 5.075 13.387 5.075 18.474.267L502.535 329"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M776.853 272.241c-19 9.425-44.217-2.694-44.217-2.694s5.605-27.393 24.614-36.805c19-9.425 44.207 2.68 44.207 2.68s-5.605 27.394-24.604 36.819z"
      fill="url(#a)"
    />
    <path
      d="M129.932 345.705c22.989 13.778 55.969 1.041 55.969 1.041s-4.312-35.069-27.314-48.831c-22.988-13.778-55.955-1.057-55.955-1.057s4.312 35.069 27.3 48.847z"
      fill="url(#b)"
    />
    <circle
      cx={572.36}
      cy={231.362}
      r={19.361}
      transform="rotate(180 572.36 231.362)"
      fill="#6f381e"
    />
    <circle
      cx={290.475}
      cy={122.573}
      r={8.291}
      transform="rotate(180 290.475 122.573)"
      fill="#6f381e"
    />
    <circle
      cx={614.939}
      cy={388.939}
      r={15.938}
      transform="rotate(180 614.939 388.939)"
      fill="#6f381e"
    />
    <circle
      r={8.471}
      transform="matrix(-1 0 0 1 738.36 320.351)"
      fill="#6f381e"
    />
    <circle
      r={10.891}
      transform="matrix(-1 0 0 1 706.83 521.878)"
      fill="#E1E4E5"
    />
    <circle
      r={11.197}
      transform="matrix(-1 0 0 1 207.174 426.181)"
      fill="#E1E4E5"
    />
    <circle
      r={5.893}
      transform="matrix(-1 0 0 1 752.196 500.67)"
      fill="#E1E4E5"
    />
    <circle
      r={6.234}
      transform="matrix(-1 0 0 1 702.173 139.445)"
      fill="#E1E4E5"
    />
    <circle
      r={11.953}
      transform="scale(1 -1) rotate(-75 -28.645 -180.652)"
      fill="#E1E4E5"
    />
    <circle
      r={15.902}
      transform="matrix(-1 0 0 1 576.479 478.327)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.232}
      ry={9.786}
      transform="matrix(-1 0 0 1 714.406 414.796)"
      fill="#E1E4E5"
    />
    <circle
      r={10.838}
      transform="scale(1 -1) rotate(-75 -70.383 -220.3)"
      fill="#E1E4E5"
    />
    <path
      d="M206.631 129.47h.174c1.032 14.62 11.905 14.845 11.905 14.845s-11.99.234-11.99 17.128c0-16.894-11.989-17.128-11.989-17.128s10.868-.225 11.9-14.845zm-50.346 355.335h.167c.991 14.576 11.43 14.801 11.43 14.801s-11.511.233-11.511 17.076c0-16.843-11.512-17.076-11.512-17.076s10.435-.225 11.426-14.801z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={703.893}
        y1={301.64}
        x2={860.601}
        y2={177.682}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={218.891}
        y1={390.055}
        x2={33.919}
        y2={218.192}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg427);
const Memo = memo(ForwardRef);
export default Memo;
