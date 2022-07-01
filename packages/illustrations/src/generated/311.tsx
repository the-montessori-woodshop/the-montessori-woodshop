import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg311 = (
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
      d="M595.966 258.166c52.098.943 99.105 3.301 104.786 7.101 15.37 10.282 11.527 209.087 0 215.941-11.527 6.854-53.672 9.821-53.672 9.821s2.175 50.202-1.668 60.484c-3.842 10.282-96.501-60.484-96.501-60.484s-149.547-2.69-161.073-9.544c-6.695-3.981-13.859-66.27-12.777-125.21"
      stroke="#E1E4E5"
      strokeWidth={5.81}
      strokeLinecap="round"
    />
    <path
      d="M585.271 57.25c-13.928-13.014-359.532-13.363-378.105-.35-18.572 13.013-13.928 264.625 0 273.299 13.928 8.675 64.854 12.431 64.854 12.431s-2.628 63.537 2.015 76.55c4.643 13.013 116.605-76.55 116.605-76.55s180.703-3.405 194.631-12.08c13.928-8.675 13.928-260.285 0-273.3z"
      fill="#6f381e"
    />
    <path
      d="M304.756 227.725c35.652 52.748 137.513 61.139 184.276 0"
      stroke="#fff"
      strokeWidth={29.048}
      strokeLinejoin="round"
    />
    <path
      d="M349.776 134.781v34.847m95.849-34.847v34.847"
      stroke="#fff"
      strokeWidth={29.048}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={18.591}
      transform="matrix(-1 0 0 1 701.408 258.803)"
      fill="#E1E4E5"
    />
    <circle
      r={12.884}
      transform="matrix(-1 0 0 1 669.933 153.724)"
      fill="#E1E4E5"
    />
    <circle
      r={23.765}
      transform="matrix(0 1 1 0 223.717 408.456)"
      fill="#E1E4E5"
    />
    <circle
      r={16.247}
      transform="scale(1 -1) rotate(-75 -7.352 -629.533)"
      fill="#E1E4E5"
    />
    <path
      d="M445.342 402.54h.187c1.104 16.242 12.736 16.492 12.736 16.492s-12.827.26-12.827 19.028c0-18.768-12.827-19.028-12.827-19.028s11.627-.25 12.731-16.492zm211.149-65.908h.187c1.104 16.243 12.736 16.493 12.736 16.493s-12.827.26-12.827 19.028c0-18.768-12.827-19.028-12.827-19.028s11.627-.25 12.731-16.493zM283.03 444.072h.186c1.104 16.243 12.736 16.493 12.736 16.493s-12.827.26-12.827 19.028c0-18.768-12.826-19.028-12.826-19.028s11.627-.25 12.731-16.493zM162.251 104.863h.186c1.104 16.243 12.736 16.493 12.736 16.493s-12.826.26-12.826 19.028c0-18.768-12.827-19.028-12.827-19.028s11.627-.25 12.731-16.493z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg311);
const Memo = memo(ForwardRef);
export default Memo;
