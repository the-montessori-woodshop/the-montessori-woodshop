import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg243 = (
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
      d="M686.499 394.519c-2.467 62.577-136.075 177.746-281.706 116.802-67.732-28.346-58.425-63.966-107.008-116.623-28.958-31.384-72.382-57.138-81.143-99.628-7.57-36.676 2.723-74.367 23.991-97.515 47.832-52.057 137.376-82.372 213.762 13.896 76.387 96.267 238.447 21.676 232.104 183.068z"
      fill="url(#a)"
    />
    <path
      d="M678.604 187.734c-10.574 18.871-33.733 21.464-70.835 17.878-27.903-2.702-53.348-4.793-81.254-20.007-19.531-10.642-34.992-25.039-46.277-39.023-12.228-15.149-29.296-32.437-20.929-49.613 11.499-23.595 77.994-43.467 142.563-10.97 70.928 35.708 87.076 83.29 76.732 101.735z"
      fill="url(#b)"
    />
    <circle cx={458.5} cy={284.317} r={199.5} fill="#6f381e" />
    <path
      d="M455.404 331.514a4.345 4.345 0 0 0 6.148-.008 4.372 4.372 0 0 0-.008-6.164 4.336 4.336 0 0 0-6.148.008 4.355 4.355 0 0 0 0 6.156"
      stroke="#fff"
      strokeWidth={17.412}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="m485.593 172.41.107 94.056c23.803 10.572 40.465 34.326 40.498 62.02.041 37.469-30.304 67.814-67.765 67.765-37.47-.041-67.881-30.452-67.93-67.93-.033-27.956 16.868-51.899 40.999-62.274l-.106-93.694 27.07-27.07 27.127 27.127z"
      stroke="#fff"
      strokeWidth={17.412}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M723.757 263.875c-19.881 9.863-46.268-2.818-46.268-2.818s5.864-28.665 25.756-38.513c19.881-9.862 46.257 2.805 46.257 2.805s-5.864 28.664-25.745 38.526z"
      fill="url(#c)"
    />
    <path
      d="M138.137 301.104c28.863 17.298 70.273 1.307 70.273 1.307s-5.415-44.032-34.295-61.312c-28.864-17.299-70.256-1.327-70.256-1.327s5.415 44.033 34.278 61.332z"
      fill="url(#d)"
    />
    <circle
      r={8.315}
      transform="matrix(-1 0 0 1 714.722 477.551)"
      fill="#E1E4E5"
    />
    <circle
      r={12.01}
      transform="matrix(-1 0 0 1 184.858 375.084)"
      fill="#E1E4E5"
    />
    <circle
      r={9.141}
      transform="matrix(-1 0 0 1 803.164 414.193)"
      fill="#E1E4E5"
    />
    <circle
      r={10.163}
      transform="matrix(-1 0 0 1 723.163 114.979)"
      fill="#E1E4E5"
    />
    <circle
      r={9.126}
      transform="matrix(0 1 1 0 131.212 183.94)"
      fill="#E1E4E5"
    />
    <circle
      r={12.14}
      transform="matrix(-1 0 0 1 287.598 112.574)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.339}
      ry={7.471}
      transform="matrix(-1 0 0 1 775.855 332.039)"
      fill="#E1E4E5"
    />
    <circle
      r={11.639}
      transform="scale(1 -1) rotate(-75 283.135 -448.689)"
      fill="#E1E4E5"
    />
    <path
      d="M296.769 461.086h.133c.787 11.162 9.088 11.334 9.088 11.334s-9.153.179-9.153 13.076c0-12.897-9.154-13.076-9.154-13.076s8.298-.172 9.086-11.334zm-56.727-46.582h.128c.756 11.129 8.726 11.3 8.726 11.3s-8.788.178-8.788 13.037c0-12.859-8.789-13.037-8.789-13.037s7.967-.171 8.723-11.3z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={505.977}
        y1={754.054}
        x2={374.734}
        y2={-294.573}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={607.369}
        y1={310.041}
        x2={513.118}
        y2={-113.482}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={647.412}
        y1={294.638}
        x2={811.39}
        y2={164.93}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={249.83}
        y1={356.788}
        x2={17.586}
        y2={141.002}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg243);
const Memo = memo(ForwardRef);
export default Memo;
