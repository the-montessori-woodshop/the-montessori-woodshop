import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUnlink = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.853 8.842a.5.5 0 1 1-.706-.709l2.175-2.162a3.334 3.334 0 0 1 4.704.003 3.309 3.309 0 0 1 .008 4.679l-2.216 2.203a.5.5 0 0 1-.705-.709l2.205-2.193a2.31 2.31 0 0 0 .002-3.272 2.334 2.334 0 0 0-3.293-.002l-2.174 2.162Zm.294 6.304a.5.5 0 1 1 .706.708l-2.174 2.171a3.327 3.327 0 1 1-4.707-4.708l2.175-2.17a.5.5 0 0 1 .706.707L6.68 14.025a2.327 2.327 0 0 0-.002 3.29 2.33 2.33 0 0 0 3.296.003l2.174-2.172ZM10 6.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm5 13a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0v2ZM7.854 7.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 1 1 .708-.708l2 2Zm11 11a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 .708-.708l2 2ZM6.5 9a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Zm13 5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUnlink);
const Memo = memo(ForwardRef);
export default Memo;
