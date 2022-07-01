import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg303 = (
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
    <rect
      x={316.777}
      y={120}
      width={264.476}
      height={264.476}
      rx={61.151}
      fill="#6f381e"
    />
    <path
      fill="#6f381e"
      d="m449.642 317.997 53.318 53.318-53.318 53.318-53.318-53.318z"
    />
    <rect
      x={419.998}
      y={183.472}
      width={59.981}
      height={107.109}
      rx={29.978}
      fill="#fff"
      stroke="#fff"
      strokeWidth={12.848}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M514.247 256.306c0 35.493-28.772 64.266-64.265 64.266v0c-35.493 0-64.266-28.773-64.266-64.266m64.266 89.972v-25.706"
      stroke="#fff"
      strokeWidth={12.848}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={41}
      y={236.289}
      width={216.845}
      height={216.845}
      rx={61.151}
      transform="rotate(-15 41 236.289)"
      fill="#6f381e"
    />
    <path
      fill="#6f381e"
      d="m196.762 396.704 26.093 15.065-15.065 26.093-26.093-15.065z"
    />
    <circle
      cx={114.359}
      cy={299.621}
      r={27.748}
      transform="rotate(-15 114.359 299.621)"
      fill="#fff"
    />
    <rect
      x={149.882}
      y={277.335}
      width={93.521}
      height={8.222}
      rx={4.111}
      transform="rotate(-15 149.882 277.335)"
      fill="#fff"
    />
    <rect
      x={98.995}
      y={349.488}
      width={161.349}
      height={8.222}
      rx={4.111}
      transform="rotate(-15 98.995 349.488)"
      fill="#fff"
    />
    <rect
      x={155.734}
      y={299.174}
      width={93.521}
      height={8.222}
      rx={4.111}
      transform="rotate(-15 155.734 299.174)"
      fill="#fff"
    />
    <rect
      x={104.846}
      y={371.327}
      width={161.349}
      height={8.222}
      rx={4.111}
      transform="rotate(-15 104.846 371.327)"
      fill="#fff"
    />
    <rect
      x={650.32}
      y={180.165}
      width={216.845}
      height={216.845}
      rx={61.151}
      transform="rotate(15 650.32 180.165)"
      fill="#6f381e"
    />
    <path
      fill="#6f381e"
      d="m705.007 396.97 15.065 26.093-26.093 15.065-15.065-26.093z"
    />
    <circle
      cx={682.185}
      cy={271.692}
      r={27.748}
      transform="rotate(15 682.185 271.692)"
      fill="#fff"
    />
    <rect
      x={724.092}
      y={270.153}
      width={93.521}
      height={8.222}
      rx={4.111}
      transform="rotate(15 724.092 270.153)"
      fill="#fff"
    />
    <rect
      x={643.945}
      y={307.196}
      width={161.349}
      height={8.222}
      rx={4.111}
      transform="rotate(15 643.945 307.196)"
      fill="#fff"
    />
    <rect
      x={718.24}
      y={291.992}
      width={93.521}
      height={8.222}
      rx={4.111}
      transform="rotate(15 718.24 291.992)"
      fill="#fff"
    />
    <rect
      x={638.094}
      y={329.035}
      width={161.349}
      height={8.222}
      rx={4.111}
      transform="rotate(15 638.094 329.035)"
      fill="#fff"
    />
    <circle
      r={14.469}
      transform="matrix(-1 0 0 1 284.469 209.469)"
      fill="#E1E4E5"
    />
    <circle
      r={10.027}
      transform="matrix(-1 0 0 1 617.028 180.028)"
      fill="#E1E4E5"
    />
    <circle
      r={18.496}
      transform="scale(1 -1) rotate(-75 -165.234 -400.777)"
      fill="#E1E4E5"
    />
    <circle
      r={12.644}
      transform="scale(1 -1) rotate(-75 -2.116 -576.705)"
      fill="#E1E4E5"
    />
    <path
      d="M492.909 425h.145c.859 12.641 9.912 12.836 9.912 12.836s-9.983.202-9.983 14.809c0-14.607-9.983-14.809-9.983-14.809s9.049-.195 9.909-12.836zm-177-19h.145c.859 12.641 9.912 12.836 9.912 12.836s-9.983.202-9.983 14.809c0-14.607-9.983-14.809-9.983-14.809s9.049-.195 9.909-12.836zm-94-264h.145c.859 12.641 9.912 12.836 9.912 12.836s-9.983.202-9.983 14.809c0-14.607-9.983-14.809-9.983-14.809s9.049-.195 9.909-12.836z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg303);
const Memo = memo(ForwardRef);
export default Memo;
