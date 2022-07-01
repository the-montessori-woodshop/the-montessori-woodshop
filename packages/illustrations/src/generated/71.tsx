import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg71 = (
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
      d="M718.76 355.709c3.785 69.748-132.577 211.572-300.654 159.078-78.17-24.417-71.549-64.942-130.99-118.352-35.43-31.833-86.336-55.905-100.495-102.176-12.231-39.94-4.73-82.868 16.475-110.791 47.69-62.796 143.966-105.796 238.829-6.856 94.863 98.941 267.053-.788 276.835 179.097z"
      fill="url(#a)"
    />
    <path
      d="M681.38 201.964c-13.264 23.671-42.313 26.924-88.851 22.425-35-3.389-66.917-6.012-101.919-25.096-24.5-13.348-43.893-31.407-58.047-48.947-15.338-19.001-36.747-40.687-26.252-62.232 14.423-29.595 97.829-54.521 178.82-13.76 88.969 44.791 109.224 104.474 96.249 127.61z"
      fill="url(#b)"
    />
    <path
      d="M343.783 491.469c-30.901-43.228-62.546-89.173-103.977-111.803-42.734-23.353-50.615-8.96-53.573 13.922-2.959 22.882 10.226 77.098 68.546 107.946 58.336 30.856 117.916 30.393 89.004-10.065z"
      fill="url(#c)"
    />
    <path
      d="M712.541 247.349c-13.882 3.289-28.564-8.484-28.564-8.484s7.835-17.099 21.721-20.377c13.882-3.289 28.56 8.474 28.56 8.474s-7.835 17.098-21.717 20.387z"
      fill="url(#d)"
    />
    <path
      d="M336.527 102.562c14.614 10.066 36.941 3.03 36.941 3.03s-1.382-23.355-16.006-33.412c-14.615-10.067-36.932-3.04-36.932-3.04s1.382 23.356 15.997 33.422z"
      fill="url(#e)"
    />
    <path
      d="M585.554 160.314c15.844 16.125 45.471 12.725 45.471 12.725s3.921-29.545-11.938-45.661c-15.843-16.125-45.456-12.735-45.456-12.735s-3.921 29.545 11.923 45.671z"
      fill="url(#f)"
    />
    <ellipse
      cx={653.724}
      cy={379.855}
      rx={11.774}
      ry={11.263}
      transform="rotate(180 653.724 379.855)"
      fill="#6f381e"
    />
    <ellipse
      cx={534.443}
      cy={511.422}
      rx={13.31}
      ry={13.822}
      transform="rotate(180 534.443 511.422)"
      fill="#6f381e"
    />
    <ellipse
      cx={252.366}
      cy={436.168}
      rx={15.87}
      ry={15.358}
      transform="rotate(180 252.366 436.168)"
      fill="#6f381e"
    />
    <circle
      r={5.631}
      transform="matrix(-1 0 0 1 230.865 248.288)"
      fill="#6f381e"
    />
    <circle
      r={10.751}
      transform="matrix(-1 0 0 1 676.249 156.139)"
      fill="#6f381e"
    />
    <ellipse
      rx={10.751}
      ry={10.239}
      transform="matrix(-1 0 0 1 640.413 478.146)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.263}
      ry={10.239}
      transform="matrix(-1 0 0 1 187.351 344.019)"
      fill="#E1E4E5"
    />
    <circle
      r={3.584}
      transform="matrix(-1 0 0 1 301.512 487.873)"
      fill="#E1E4E5"
    />
    <circle
      r={5.119}
      transform="matrix(-1 0 0 1 575.398 125.935)"
      fill="#E1E4E5"
    />
    <circle
      r={5.003}
      transform="scale(1 -1) rotate(-75 -75.2 -315.006)"
      fill="#E1E4E5"
    />
    <circle
      r={6.655}
      transform="matrix(-1 0 0 1 254.414 192.998)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={5.119}
      ry={4.095}
      transform="matrix(-1 0 0 1 661.403 311.256)"
      fill="#E1E4E5"
    />
    <circle
      r={10.411}
      transform="scale(1 -1) rotate(-75 164.577 -335.532)"
      fill="#E1E4E5"
    />
    <path
      d="M735.053 309.208h.134c.793 11.236 9.149 11.409 9.149 11.409s-9.215.18-9.215 13.164c0-12.984-9.214-13.164-9.214-13.164s8.353-.173 9.146-11.409zm-439.802-177.13h.23c1.366 19.664 15.758 19.967 15.758 19.967s-15.87.315-15.87 23.036c0-22.721-15.87-23.036-15.87-23.036s14.386-.303 15.752-19.967z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M611.325 299.985c0 89.174-72.275 161.449-161.449 161.449s-161.449-72.275-161.449-161.449 72.275-161.449 161.449-161.449 161.449 72.275 161.449 161.449z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={26.897}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M458.279 317.292c12.449 12.45 12.449 32.649 0 45.098-12.45 12.45-32.649 12.45-45.098 0-12.45-12.449-12.45-32.648 0-45.098 12.449-12.449 32.63-12.449 45.098 0z"
      fill="#fff"
    />
    <path
      d="M458.279 317.292c12.449 12.45 12.449 32.649 0 45.098-12.45 12.45-32.649 12.45-45.098 0-12.45-12.449-12.45-32.648 0-45.098 12.449-12.449 32.63-12.449 45.098 0"
      stroke="#fff"
      strokeWidth={26.897}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m515.45 244.175-47.843-15.948v111.615"
      stroke="#fff"
      strokeWidth={26.897}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M394.209 191.32c0 33.408-27.077 60.485-60.485 60.485s-60.485-27.077-60.485-60.485 27.077-60.485 60.485-60.485 60.485 27.077 60.485 60.485z"
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={13.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m326.607 171.547 26.089 15.43c3.3 1.949 3.3 6.728 0 8.677l-26.089 15.43c-3.361 1.989-7.608-.437-7.608-4.341v-30.854c0-3.905 4.247-6.331 7.608-4.342z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={555.778}
        y1={773.789}
        x2={300.704}
        y2={-377.016}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={592.027}
        y1={355.378}
        x2={473.805}
        y2={-175.861}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={309.279}
        y1={633.379}
        x2={207.899}
        y2={164.547}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={660.266}
        y1={255.526}
        x2={781.787}
        y2={198.115}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={393.456}
        y1={135.591}
        x2={278.414}
        y2={14.282}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={648.768}
        y1={215.396}
        x2={534.227}
        y2={35.842}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg71);
const Memo = memo(ForwardRef);
export default Memo;
