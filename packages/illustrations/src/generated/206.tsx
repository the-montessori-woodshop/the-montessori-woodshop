import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg206 = (
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
      d="M721.77 218.287C708.389 150.344 527.534 44.4 361.381 132.478c-77.276 40.967-60.093 78.472-110.152 143.142-29.838 38.544-78.121 73.083-81.667 120.762-3.071 41.156 15.65 80.776 45.239 102.896 66.546 49.746 179.969 69.585 256.436-46.805 76.468-116.39 285.023-58.951 250.533-234.186z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M629.602 207.307v-51.153c0-28.252-22.902-51.154-51.154-51.154H322.681c-28.251 0-51.154 22.902-51.154 51.154v127.883"
      fill="#fff"
    />
    <path
      d="M629.602 207.307v-51.153c0-28.252-22.902-51.154-51.154-51.154H322.681c-28.251 0-51.153 22.902-51.153 51.154v127.883"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M271.528 216.252h165.353a25.578 25.578 0 0 0 21.28-11.382l35.884-53.941a25.575 25.575 0 0 1 21.357-11.407h114.2c28.251 0 51.154 22.902 51.154 51.153v255.767c0 28.252-22.903 51.154-51.154 51.154H271.528c-28.251 0-51.154-22.902-51.154-51.154V267.405c0-28.251 22.903-51.153 51.154-51.153z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <ellipse
      rx={10}
      ry={9.5}
      transform="matrix(-1 0 0 1 707 484.5)"
      fill="#E1E4E5"
    />
    <circle
      r={4.639}
      transform="matrix(-1 0 0 1 647.639 114.639)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.5}
      ry={10}
      transform="matrix(-1 0 0 1 569.5 206)"
      fill="#E1E4E5"
    />
    <circle
      r={6.476}
      transform="scale(1 -1) rotate(-75 19.6 -242.672)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.627}
      ry={5.302}
      transform="matrix(-1 0 0 1 704.513 233.512)"
      fill="#E1E4E5"
    />
    <path
      d="M188.84 447h.173c1.027 14.546 11.844 14.77 11.844 14.77s-11.928.233-11.928 17.04c0-16.807-11.929-17.04-11.929-17.04s10.813-.224 11.84-14.77zm571.671-156.692h.18c1.067 15.36 12.309 15.596 12.309 15.596s-12.397.246-12.397 17.994c0-17.748-12.396-17.994-12.396-17.994s11.237-.236 12.304-15.596z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M483.698 430.997h-64.399c-26.675 0-48.299-21.625-48.299-48.299v-64.399C371 291.624 392.624 270 419.299 270h64.399c26.674 0 48.299 21.624 48.299 48.299v64.399c0 26.674-21.625 48.299-48.299 48.299z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={24.139}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M451.5 347.507v-29.542 29.542z"
      fill="#fff"
    />
    <path
      d="M451.5 347.507v-29.542"
      stroke="#fff"
      strokeWidth={24.139}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M451.499 380.105a1.449 1.449 0 0 0-1.449 1.465 1.466 1.466 0 1 0 1.449-1.465z"
      fill="#fff"
    />
    <path
      d="M451.499 380.105a1.449 1.449 0 0 0-1.449 1.465 1.466 1.466 0 1 0 1.449-1.465"
      stroke="#fff"
      strokeWidth={24.139}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M318.022 446.016v3.968h3.964A3.028 3.028 0 0 1 325 453a3.028 3.028 0 0 1-3.014 3.016h-3.964v3.968a3.028 3.028 0 0 1-3.014 3.016 3.029 3.029 0 0 1-3.014-3.016v-3.951h-3.98a3.029 3.029 0 0 1-3.014-3.017 3.029 3.029 0 0 1 3.014-3.016h3.964v-3.984a3.031 3.031 0 0 1 3.03-3.016 3.028 3.028 0 0 1 3.014 3.016zm-33.14-27.793v5.554h5.748c2.399 0 4.37 1.905 4.37 4.223 0 2.318-1.971 4.223-4.37 4.223h-5.748v5.554c0 2.318-1.971 4.223-4.37 4.223s-4.37-1.905-4.37-4.223v-5.531h-5.772c-2.399 0-4.37-1.905-4.37-4.223 0-2.318 1.971-4.223 4.37-4.223h5.748v-5.577c0-2.318 1.971-4.223 4.394-4.223 2.399 0 4.37 1.905 4.37 4.223z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={443.534}
        y1={-147.462}
        x2={454.289}
        y2={1016.68}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg206);
const Memo = memo(ForwardRef);
export default Memo;
