import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg276 = (
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
    <path stroke="#E1E4E5" strokeWidth={3.68} d="M152 468.638h596" />
    <path stroke="#E1E4E5" strokeWidth={3.683} d="M190 499.637h217" />
    <path stroke="#E1E4E5" strokeWidth={3.618} d="M442 499.67h274" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M628.602 214.785v-51.153c0-28.251-22.903-51.153-51.154-51.153H321.681c-28.251 0-51.154 22.902-51.154 51.153v127.884"
      fill="#fff"
    />
    <path
      d="M628.602 214.785v-51.153c0-28.251-22.903-51.153-51.154-51.153H321.681c-28.251 0-51.154 22.902-51.154 51.153v127.884"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M270.528 188.73h165.354a25.577 25.577 0 0 0 21.28-11.381l35.884-53.942A25.577 25.577 0 0 1 514.402 112h114.2c28.252 0 51.154 22.902 51.154 51.154v255.767c0 28.251-22.902 51.153-51.154 51.153H270.528c-28.251 0-51.153-22.902-51.153-51.153V239.884c0-28.251 22.902-51.154 51.153-51.154z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <rect
      x={290}
      y={252}
      width={80.566}
      height={80.566}
      rx={40.283}
      fill="#6f381e"
    />
    <rect
      x={290}
      y={350}
      width={80.566}
      height={80.566}
      rx={40.283}
      fill="#6f381e"
    />
    <rect
      x={312.117}
      y={274.116}
      width={36.334}
      height={36.334}
      rx={18.167}
      fill="#fff"
    />
    <rect
      x={312.117}
      y={372.116}
      width={36.334}
      height={36.334}
      rx={18.167}
      fill="#fff"
    />
    <rect
      x={391.768}
      y={275.931}
      width={245.232}
      height={11.307}
      rx={5.654}
      fill="#E1E4E5"
    />
    <rect
      x={391.768}
      y={373.931}
      width={245.232}
      height={11.307}
      rx={5.654}
      fill="#E1E4E5"
    />
    <rect
      x={391.768}
      y={303.493}
      width={245.232}
      height={11.307}
      rx={5.654}
      fill="#E1E4E5"
    />
    <rect
      x={391.768}
      y={401.493}
      width={245.232}
      height={11.307}
      rx={5.654}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M545.667 99h67.366c8.656 0 15.667 7.011 15.667 15.667V240l-49.287-25.638L530 240V114.667C530 106.011 537.011 99 545.667 99z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={11.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M563.682 153.833h31.333m-15.666-15.666V169.5"
      stroke="#fff"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg276);
const Memo = memo(ForwardRef);
export default Memo;
