import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg402 = (
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
    <mask id="a" fill="#fff">
      <rect x={74} y={67} width={269} height={466} rx={10} />
    </mask>
    <rect
      x={74}
      y={67}
      width={269}
      height={466}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#a)"
    />
    <mask id="b" fill="#fff">
      <rect x={363} y={67} width={302} height={210} rx={10} />
    </mask>
    <rect
      x={363}
      y={67}
      width={302}
      height={210}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#b)"
    />
    <mask id="c" fill="#fff">
      <rect x={685} y={67} width={141} height={210} rx={10} />
    </mask>
    <rect
      x={685}
      y={67}
      width={141}
      height={210}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#c)"
    />
    <mask id="d" fill="#fff">
      <rect x={685} y={307} width={141} height={226} rx={10} />
    </mask>
    <rect
      x={685}
      y={307}
      width={141}
      height={226}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#d)"
    />
    <mask id="e" fill="#fff">
      <rect x={524} y={307} width={141} height={226} rx={10} />
    </mask>
    <rect
      x={524}
      y={307}
      width={141}
      height={226}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#e)"
    />
    <mask id="f" fill="#fff">
      <rect x={363} y={307} width={141} height={226} rx={10} />
    </mask>
    <rect
      x={363}
      y={307}
      width={141}
      height={226}
      rx={10}
      stroke="#E1E4E5"
      strokeWidth={22}
      mask="url(#f)"
    />
    <circle cx={237.5} cy={246.5} r={43.5} fill="#6f381e" />
    <path
      d="m82 389.783 55.122-64.202c3.915-4.559 10.937-4.661 14.982-.217l70.497 77.438a10 10 0 0 0 13.925.841L337 317m483.5 150-15.121 17.458c-3.611 4.168-9.914 4.627-14.09 1.026L691 399M529 513l132-114m-132 47 132-114M368 210.746c16.055-16.41 62.515-39.384 119.912 0 71.747 49.231 166.572 15.913 171.088-10.94m-291-55.06c16.055-16.41 62.515-39.384 119.912 0 71.747 49.231 166.572 15.913 171.088-10.94M413 313.5v215M735 70v204m-281 39.5v215M776 70v204"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
  </svg>
);

const ForwardRef = forwardRef(Svg402);
const Memo = memo(ForwardRef);
export default Memo;
