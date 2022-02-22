import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg87 = (
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
      d="M654.431 305.795c-12.922 3.061-26.589-7.897-26.589-7.897s7.294-15.916 20.22-18.968c12.922-3.061 26.584 7.888 26.584 7.888s-7.293 15.916-20.215 18.977z"
      fill="url(#a)"
    />
    <path
      d="M643.418 162.218c-14.469 9.966-36.575 2.999-36.575 2.999s1.369-23.123 15.848-33.08c14.47-9.967 36.566-3.009 36.566-3.009s-1.369 23.123-15.839 33.09z"
      fill="url(#b)"
    />
    <path
      d="M242.559 298.061c-5.542 5.64-15.906 4.451-15.906 4.451s-1.371-10.335 4.176-15.972c5.542-5.641 15.901-4.455 15.901-4.455s1.371 10.335-4.171 15.976z"
      fill="url(#c)"
    />
    <circle
      cx={674.5}
      cy={385.5}
      r={10.5}
      transform="rotate(180 674.5 385.5)"
      fill="#6f381e"
    />
    <ellipse
      cx={288.773}
      cy={453.296}
      rx={14.773}
      ry={14.296}
      transform="rotate(180 288.773 453.296)"
      fill="#6f381e"
    />
    <circle
      r={5.242}
      transform="matrix(-1 0 0 1 268.242 244.242)"
      fill="#6f381e"
    />
    <circle
      r={10.007}
      transform="matrix(-1 0 0 1 587.007 128.007)"
      fill="#6f381e"
    />
    <circle r={9} transform="matrix(-1 0 0 1 660 461)" fill="#E1E4E5" />
    <circle
      r={3.336}
      transform="matrix(-1 0 0 1 325.337 476.336)"
      fill="#E1E4E5"
    />
    <circle
      r={4.765}
      transform="matrix(-1 0 0 1 567.765 104.765)"
      fill="#E1E4E5"
    />
    <circle
      r={4.657}
      transform="scale(1 -1) rotate(-75 -39.271 -338.338)"
      fill="#E1E4E5"
    />
    <circle
      r={6.195}
      transform="matrix(-1 0 0 1 290.76 201.531)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={4.765}
      ry={3.812}
      transform="matrix(-1 0 0 1 637.766 341.812)"
      fill="#E1E4E5"
    />
    <circle
      r={9.691}
      transform="scale(1 -1) rotate(-75 188.678 -364.443)"
      fill="#E1E4E5"
    />
    <path
      d="M680.514 317h.124c.739 10.459 8.517 10.62 8.517 10.62s-8.577.168-8.577 12.254c0-12.086-8.578-12.254-8.578-12.254s7.776-.161 8.514-10.62zM328.773 144.823h.215c1.271 18.304 14.668 18.586 14.668 18.586s-14.773.293-14.773 21.443c0-21.15-14.772-21.443-14.772-21.443s13.391-.282 14.662-18.586z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m592.396 178.879-57.006-57.056A40.31 40.31 0 0 0 506.887 110H362.315C340.041 110 322 128.057 322 150.351v282.458c0 22.294 18.041 40.352 40.315 40.352h201.578c22.274 0 40.315-18.058 40.315-40.352V207.408a40.385 40.385 0 0 0-11.812-28.529z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M387.263 250.972h124.418m-124.418 56.36h124.418M387 363.5h140"
      stroke="#E1E4E5"
      strokeWidth={25.125}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={443}
      y={408}
      width={232}
      height={82.76}
      rx={41.38}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={451.819}
      y={416.14}
      width={66.48}
      height={66.48}
      rx={33.24}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M500.164 463.324v2.223c0 1.226-.983 2.222-2.194 2.222h-26.321c-1.21 0-2.193-.996-2.193-2.222v-2.259c0-6.725 7.585-11.095 15.354-11.095 7.769 0 15.354 4.372 15.354 11.095m-9.847-30.621a7.789 7.789 0 1 1-11.014 11.012 7.789 7.789 0 0 1 11.014-11.012z"
      fill="#fff"
    />
    <rect
      x={525.761}
      y={426.994}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={525.76}
      y={445.31}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={525.76}
      y={463.625}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={217}
      y={130}
      width={232}
      height={82.76}
      rx={41.38}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={225.819}
      y={138.14}
      width={66.48}
      height={66.48}
      rx={33.24}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M274.164 185.324v2.223c0 1.226-.983 2.222-2.194 2.222h-26.321c-1.21 0-2.193-.996-2.193-2.222v-2.259c0-6.725 7.585-11.095 15.354-11.095 7.769 0 15.354 4.372 15.354 11.095m-9.847-30.621a7.789 7.789 0 1 1-11.014 11.012 7.789 7.789 0 0 1 11.014-11.012z"
      fill="#fff"
    />
    <rect
      x={299.761}
      y={148.994}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={299.76}
      y={167.31}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={299.76}
      y={185.625}
      width={123.462}
      height={7.462}
      rx={3.731}
      fill="#E1E4E5"
    />
    <rect
      x={475}
      y={181}
      width={208}
      height={83}
      rx={41.5}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={483.819}
      y={189.14}
      width={66.48}
      height={66.48}
      rx={33.24}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M532.164 236.324v2.223c0 1.226-.983 2.222-2.194 2.222h-26.321c-1.21 0-2.193-.996-2.193-2.222v-2.259c0-6.725 7.585-11.095 15.354-11.095 7.769 0 15.354 4.372 15.354 11.095m-9.847-30.621a7.789 7.789 0 1 1-11.014 11.012 7.789 7.789 0 0 1 11.014-11.012z"
      fill="#fff"
    />
    <rect x={558} y={200} width={92} height={7} rx={3.5} fill="#E1E4E5" />
    <rect x={558} y={218} width={92} height={8} rx={4} fill="#E1E4E5" />
    <rect x={558} y={237} width={92} height={7} rx={3.5} fill="#E1E4E5" />
    <rect
      x={218}
      y={338}
      width={208}
      height={83}
      rx={41.5}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={226.819}
      y={346.14}
      width={66.48}
      height={66.48}
      rx={33.24}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M275.164 393.324v2.223c0 1.226-.983 2.222-2.194 2.222h-26.321c-1.21 0-2.193-.996-2.193-2.222v-2.259c0-6.725 7.585-11.095 15.354-11.095 7.769 0 15.354 4.372 15.354 11.095m-9.847-30.621a7.789 7.789 0 1 1-11.014 11.012 7.789 7.789 0 0 1 11.014-11.012z"
      fill="#fff"
    />
    <rect x={301} y={357} width={92} height={7} rx={3.5} fill="#E1E4E5" />
    <rect x={301} y={375} width={92} height={8} rx={4} fill="#E1E4E5" />
    <rect x={301} y={394} width={92} height={7} rx={3.5} fill="#E1E4E5" />
    <defs>
      <linearGradient
        id="a"
        x1={605.771}
        y1={313.406}
        x2={718.888}
        y2={259.966}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={587.053}
        y1={194.919}
        x2={700.955}
        y2={74.813}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={220.447}
        y1={317.328}
        x2={260.514}
        y2={254.52}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg87);
const Memo = memo(ForwardRef);
export default Memo;
