import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg484 = (
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
      d="M717.245 355.561c3.785 69.748-132.578 211.572-300.654 159.078-78.171-24.417-71.549-64.942-130.99-118.352-35.43-31.833-86.336-55.905-100.495-102.176-12.231-39.94-4.73-82.868 16.475-110.791 47.69-62.796 143.966-105.796 238.829-6.856 94.863 98.941 267.053-.788 276.835 179.097z"
      fill="url(#a)"
    />
    <path
      d="M679.865 201.816c-13.264 23.671-42.313 26.924-88.851 22.425-35-3.389-66.917-6.012-101.919-25.096-24.5-13.348-43.893-31.407-58.047-48.947-15.339-19.001-36.747-40.687-26.252-62.232 14.423-29.595 97.829-54.521 178.82-13.76 88.969 44.791 109.224 104.474 96.249 127.61z"
      fill="url(#b)"
    />
    <path
      d="M342.267 491.321c-30.9-43.228-62.545-89.173-103.976-111.803-42.734-23.353-50.615-8.96-53.573 13.922-2.959 22.882 10.226 77.098 68.546 107.946 58.336 30.856 117.916 30.393 89.003-10.065z"
      fill="url(#c)"
    />
    <path
      d="M711.026 247.201c-13.882 3.289-28.564-8.484-28.564-8.484s7.835-17.099 21.721-20.377c13.882-3.288 28.56 8.474 28.56 8.474s-7.835 17.099-21.717 20.387z"
      fill="url(#d)"
    />
    <path
      d="M335.011 102.414c14.615 10.066 36.942 3.03 36.942 3.03s-1.382-23.355-16.007-33.412c-14.614-10.066-36.932-3.04-36.932-3.04s1.383 23.355 15.997 33.422z"
      fill="url(#e)"
    />
    <path
      d="M584.039 160.166c15.844 16.125 45.471 12.726 45.471 12.726s3.921-29.546-11.938-45.661c-15.844-16.126-45.456-12.736-45.456-12.736s-3.921 29.545 11.923 45.671z"
      fill="url(#f)"
    />
    <ellipse
      cx={652.209}
      cy={379.707}
      rx={11.774}
      ry={11.263}
      transform="rotate(180 652.209 379.707)"
      fill="#6f381e"
    />
    <ellipse
      cx={532.928}
      cy={511.274}
      rx={13.31}
      ry={13.822}
      transform="rotate(180 532.928 511.274)"
      fill="#6f381e"
    />
    <ellipse
      cx={250.851}
      cy={436.02}
      rx={15.87}
      ry={15.358}
      transform="rotate(180 250.851 436.02)"
      fill="#6f381e"
    />
    <circle
      r={5.631}
      transform="matrix(-1 0 0 1 229.35 248.139)"
      fill="#6f381e"
    />
    <circle
      r={10.751}
      transform="matrix(-1 0 0 1 674.734 155.991)"
      fill="#6f381e"
    />
    <ellipse
      rx={10.751}
      ry={10.239}
      transform="matrix(-1 0 0 1 638.898 477.998)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.263}
      ry={10.239}
      transform="matrix(-1 0 0 1 185.835 343.871)"
      fill="#E1E4E5"
    />
    <circle
      r={3.584}
      transform="matrix(-1 0 0 1 299.997 487.725)"
      fill="#E1E4E5"
    />
    <circle
      r={5.119}
      transform="matrix(-1 0 0 1 573.883 125.787)"
      fill="#E1E4E5"
    />
    <circle
      r={5.003}
      transform="scale(1 -1) rotate(-75 -75.86 -313.944)"
      fill="#E1E4E5"
    />
    <circle
      r={6.655}
      transform="matrix(-1 0 0 1 252.899 192.85)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={5.119}
      ry={4.095}
      transform="matrix(-1 0 0 1 659.888 311.108)"
      fill="#E1E4E5"
    />
    <circle
      r={10.411}
      transform="scale(1 -1) rotate(-75 163.916 -334.471)"
      fill="#E1E4E5"
    />
    <path
      d="M733.538 309.06h.134c.793 11.237 9.149 11.41 9.149 11.41s-9.215.179-9.215 13.163c0-12.984-9.214-13.163-9.214-13.163s8.353-.173 9.146-11.41zM293.735 131.93h.231c1.366 19.664 15.758 19.967 15.758 19.967s-15.87.315-15.87 23.036c0-22.721-15.87-23.036-15.87-23.036s14.386-.303 15.751-19.967z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M609.383 300.301c0 89.174-72.275 161.45-161.449 161.45s-161.449-72.276-161.449-161.45c0-89.173 72.275-161.449 161.449-161.449s161.449 72.276 161.449 161.449z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={26.897}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M396.057 358.684s19.805 12.235 52.835 12.235c33.029 0 52.835-12.235 52.835-12.235"
      stroke="#fff"
      strokeWidth={22.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M408.686 284.268c0 14.302-11.867 25.915-26.53 25.915s-26.53-11.613-26.53-25.915 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916zm132.601 0c0 14.302-11.867 25.915-26.53 25.915s-26.53-11.613-26.53-25.915 11.867-25.916 26.53-25.916 26.53 11.614 26.53 25.916z"
      fill="#fff"
      stroke="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M392.455 191.337c0 33.408-27.078 60.485-60.485 60.485-33.408 0-60.485-27.077-60.485-60.485s27.077-60.485 60.485-60.485c33.407 0 60.485 27.077 60.485 60.485z"
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={13.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M346.974 161.852c12.877 0 21.511 11.92 21.511 23.02 0 22.532-35.847 40.98-36.5 40.98-.653 0-36.5-18.448-36.5-40.98 0-11.1 8.634-23.02 21.511-23.02 7.36 0 12.195 3.62 14.989 6.844 2.794-3.224 7.628-6.844 14.989-6.844z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={554.263}
        y1={773.641}
        x2={299.189}
        y2={-377.164}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={590.512}
        y1={355.23}
        x2={472.29}
        y2={-176.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={307.764}
        y1={633.231}
        x2={206.384}
        y2={164.399}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={658.75}
        y1={255.378}
        x2={780.272}
        y2={197.967}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={391.941}
        y1={135.443}
        x2={276.899}
        y2={14.134}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={647.253}
        y1={215.248}
        x2={532.711}
        y2={35.694}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg484);
const Memo = memo(ForwardRef);
export default Memo;
