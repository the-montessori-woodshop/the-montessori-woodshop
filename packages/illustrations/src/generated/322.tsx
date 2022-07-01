import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg322 = (
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
      d="M701.109 300.173c0 154.55-125.02 279.835-279.238 279.835-154.218 0-279.239-125.285-279.239-279.835 0-154.549 125.021-279.835 279.239-279.835 154.218 0 279.238 125.286 279.238 279.835z"
      stroke="url(#a)"
      strokeWidth={1.145}
    />
    <path
      d="M737.374 82.37c-3.75 6.693-11.964 7.613-25.124 6.34-9.897-.958-18.922-1.7-28.82-7.096-6.928-3.774-12.412-8.88-16.414-13.84-4.337-5.374-10.391-11.506-7.424-17.598 4.079-8.369 27.664-15.417 50.566-3.89 25.158 12.665 30.885 29.541 27.216 36.084z"
      fill="url(#b)"
    />
    <path
      d="M688.965 364.054c-28.384 14.08-66.057-4.024-66.057-4.024s8.373-40.925 36.772-54.985c28.384-14.08 66.042 4.004 66.042 4.004s-8.373 40.925-36.757 55.005z"
      fill="url(#c)"
    />
    <path
      d="M250.747 349.786c22.738 13.628 55.361 1.03 55.361 1.03s-4.266-34.688-27.018-48.3c-22.738-13.628-55.346-1.046-55.346-1.046s4.265 34.688 27.003 48.316z"
      fill="url(#d)"
    />
    <circle
      cx={774.502}
      cy={190.69}
      r={15.498}
      transform="rotate(180 774.502 190.69)"
      fill="#6f381e"
    />
    <circle
      cx={184.553}
      cy={386.816}
      r={17.436}
      transform="rotate(180 184.553 386.816)"
      fill="#6f381e"
    />
    <circle
      r={6.78}
      transform="matrix(-1 0 0 1 641.642 250.873)"
      fill="#6f381e"
    />
    <circle
      r={8.718}
      transform="matrix(-1 0 0 1 570.793 532.024)"
      fill="#E1E4E5"
    />
    <circle
      r={12.592}
      transform="matrix(-1 0 0 1 122.103 439.963)"
      fill="#E1E4E5"
    />
    <circle
      r={9.584}
      transform="matrix(-1 0 0 1 216.987 141.837)"
      fill="#E1E4E5"
    />
    <circle
      r={10.655}
      transform="matrix(-1 0 0 1 681.313 205.825)"
      fill="#E1E4E5"
    />
    <circle
      r={9.568}
      transform="scale(1 -1) rotate(-75 -84.916 -191.007)"
      fill="#E1E4E5"
    />
    <circle
      r={12.729}
      transform="matrix(-1 0 0 1 343.182 61.434)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.791}
      ry={7.833}
      transform="matrix(-1 0 0 1 749.106 386.8)"
      fill="#E1E4E5"
    />
    <circle
      r={19.913}
      transform="scale(1 -1) rotate(-75 242.564 -398.21)"
      fill="#E1E4E5"
    />
    <path
      d="M709.425 462.759h.256c1.517 21.491 17.5 21.821 17.5 21.821s-17.625.345-17.625 25.177c0-24.832-17.624-25.177-17.624-25.177s15.976-.33 17.493-21.821zm-445.646 47.422h.227c1.346 19.451 15.528 19.75 15.528 19.75s-15.639.312-15.639 22.787c0-22.475-15.638-22.787-15.638-22.787s14.176-.299 15.522-19.75z"
      fill="#E1E4E5"
    />
    <path
      d="M461.037 212.511 398.513 110.91H298.475l100.038 162.562h50.019"
      stroke="#6f381e"
      strokeWidth={27.094}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M650.692 110.91H542.318L433.943 273.472h108.375L650.692 110.91zM467.81 273.472v40.64"
      stroke="#6f381e"
      strokeWidth={27.094}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M462.091 317.31c2.553-4.264 8.885-4.264 11.438 0l27.047 45.176a6.607 6.607 0 0 0 4.318 3.052l52.521 11.065c4.957 1.044 6.914 6.903 3.534 10.583l-35.805 38.985a6.324 6.324 0 0 0-1.649 4.939l5.413 52.014c.511 4.909-4.612 8.53-9.254 6.54l-49.175-21.082a6.796 6.796 0 0 0-5.338 0l-49.175 21.082c-4.642 1.99-9.765-1.631-9.254-6.54l5.414-52.014a6.328 6.328 0 0 0-1.65-4.939l-35.805-38.985c-3.38-3.68-1.423-9.539 3.534-10.583l52.521-11.065a6.609 6.609 0 0 0 4.319-3.052l27.046-45.176z"
      stroke="#6f381e"
      strokeWidth={27.094}
    />
    <defs>
      <linearGradient
        id="a"
        x1={433.803}
        y1={895.006}
        x2={416.474}
        y2={-590.305}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={712.108}
        y1={125.751}
        x2={678.678}
        y2={-24.469}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={579.967}
        y1={407.973}
        x2={814.08}
        y2={222.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={338.738}
        y1={393.654}
        x2={155.778}
        y2={223.66}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg322);
const Memo = memo(ForwardRef);
export default Memo;
