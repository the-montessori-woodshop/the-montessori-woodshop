import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg497 = (
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
      x={754.5}
      y={54.5}
      width={491.041}
      height={608}
      rx={61.303}
      transform="rotate(90 754.5 54.5)"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M229.453 356.034h113.245m141.599.082h128.004m-128.004 83.3h128.004m-382.849-46.984h188.067m66.733.001h187.429m-187.429 83.302h187.429m-442.229-34.769h113.245m-113.245 36.4h188.067"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={318.43}
      y={117.41}
      width={66.734}
      height={198.178}
      rx={15.212}
      fill="#6f381e"
    />
    <rect
      x={516.607}
      y={117.41}
      width={66.734}
      height={198.178}
      rx={15.212}
      fill="#6f381e"
    />
    <rect
      x={219.34}
      y={198.299}
      width={66.734}
      height={117.289}
      rx={15.212}
      fill="#E1E4E5"
    />
    <rect
      x={417.519}
      y={198.299}
      width={66.734}
      height={117.289}
      rx={15.212}
      fill="#E1E4E5"
    />
    <rect
      x={615.696}
      y={198.299}
      width={66.734}
      height={117.289}
      rx={15.212}
      fill="#E1E4E5"
    />
    <circle
      r={12.197}
      transform="matrix(-1 0 0 1 410.286 435.245)"
      fill="#E1E4E5"
    />
    <circle
      r={13.409}
      transform="matrix(-1 0 0 1 662.874 430.737)"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg497);
const Memo = memo(ForwardRef);
export default Memo;
