import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg208 = (
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
      d="M704.17 357.993c2.23 65.74-142.318 202.652-314.985 156.891-80.306-21.286-72.474-59.681-132.696-108.75-35.895-29.246-87.994-50.819-101.528-94.17-11.691-37.417-2.891-78.1 19.729-104.928 50.872-60.337 151.546-103.083 247.324-11.841 95.778 91.242 276.383-6.749 282.156 162.798z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M629.602 207.307v-51.154c0-28.251-22.902-51.153-51.153-51.153H322.681c-28.251 0-51.153 22.902-51.153 51.153v127.884"
      fill="#fff"
    />
    <path
      d="M629.602 207.307v-51.154c0-28.251-22.902-51.153-51.153-51.153H322.681c-28.251 0-51.153 22.902-51.153 51.153v127.884"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M271.528 216.252h165.354a25.58 25.58 0 0 0 21.28-11.382l35.884-53.941a25.572 25.572 0 0 1 21.356-11.407h114.2c28.252 0 51.154 22.902 51.154 51.153v255.767c0 28.252-22.902 51.154-51.154 51.154H271.528c-28.251 0-51.153-22.902-51.153-51.154V267.405c0-28.251 22.902-51.153 51.153-51.153z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <circle cx={451.101} cy={358.294} r={98.899} fill="#6f381e" />
    <path
      d="m486 339.161-43.861 44.668-26.332-26.797"
      stroke="#fff"
      strokeWidth={18.095}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      rx={13.917}
      ry={13.254}
      transform="matrix(-1 0 0 1 710.917 484.254)"
      fill="#E1E4E5"
    />
    <circle
      r={4.639}
      transform="matrix(-1 0 0 1 292.466 519.783)"
      fill="#E1E4E5"
    />
    <circle
      r={6.627}
      transform="matrix(-1 0 0 1 566.399 205.929)"
      fill="#E1E4E5"
    />
    <circle
      r={6.476}
      transform="scale(1 -1) rotate(-75 -180.786 -314.12)"
      fill="#E1E4E5"
    />
    <circle
      r={8.615}
      transform="matrix(-1 0 0 1 219.615 171.615)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.627}
      ry={5.302}
      transform="matrix(-1 0 0 1 704.513 233.511)"
      fill="#E1E4E5"
    />
    <path
      d="M186.177 456.259h.174c1.026 14.545 11.844 14.769 11.844 14.769s-11.929.233-11.929 17.04c0-16.807-11.929-17.04-11.929-17.04s10.814-.224 11.84-14.769zM748.304 300h.18c1.067 15.36 12.309 15.597 12.309 15.597s-12.396.245-12.396 17.994c0-17.749-12.397-17.994-12.397-17.994s11.237-.237 12.304-15.597z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M602.022 283.016v3.968h3.964A3.028 3.028 0 0 1 609 290a3.028 3.028 0 0 1-3.014 3.016h-3.964v3.968a3.028 3.028 0 0 1-3.014 3.016 3.029 3.029 0 0 1-3.014-3.016v-3.951h-3.98a3.029 3.029 0 0 1-3.014-3.017 3.029 3.029 0 0 1 3.014-3.016h3.964v-3.984a3.031 3.031 0 0 1 3.03-3.016 3.028 3.028 0 0 1 3.014 3.016zm-33.14-27.793v5.554h5.748c2.399 0 4.37 1.905 4.37 4.223 0 2.318-1.971 4.223-4.37 4.223h-5.748v5.554c0 2.318-1.971 4.223-4.37 4.223s-4.37-1.905-4.37-4.223v-5.531h-5.772c-2.399 0-4.37-1.905-4.37-4.223 0-2.318 1.971-4.223 4.37-4.223h5.748v-5.577c0-2.318 1.971-4.223 4.394-4.223 2.399 0 4.37 1.905 4.37 4.223z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={525.393}
        y1={756.222}
        x2={285.006}
        y2={-323.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg208);
const Memo = memo(ForwardRef);
export default Memo;
