import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgThumbsDown = (
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
    <path d="M19 12.5v-7a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5Zm-3.5 1.118-.882 1.764A5.854 5.854 0 0 0 14 18v.25A1.75 1.75 0 0 1 12.25 20a1.881 1.881 0 0 1-1.872-1.694L10.048 15H6.71a2.5 2.5 0 0 1-2.488-2.749l.6-6A2.5 2.5 0 0 1 7.31 4h6.19c.673 0 1.283.266 1.732.698.266-.42.735-.698 1.268-.698h2A1.5 1.5 0 0 1 20 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-2c-.384 0-.735-.144-1-.382Zm-.5-1.236V6.5A1.5 1.5 0 0 0 13.5 5H7.31a1.5 1.5 0 0 0-1.493 1.35l-.6 6A1.5 1.5 0 0 0 6.71 14h3.79a.5.5 0 0 1 .498.45l.375 3.756c.045.45.424.794.877.794a.75.75 0 0 0 .75-.75V18c0-1.064.248-2.114.724-3.065L15 12.382Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgThumbsDown);
const Memo = memo(ForwardRef);
export default Memo;
