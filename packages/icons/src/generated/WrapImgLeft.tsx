import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWrapImgLeft = (
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
    <path d="M12 13.293V9.5A1.5 1.5 0 0 0 10.5 8h-5A1.5 1.5 0 0 0 4 9.5v2.793l1.146-1.147a.5.5 0 0 1 .708 0L8.5 13.793l1.646-1.647a.5.5 0 0 1 .708 0L12 13.293Zm-.013 1.402L10.5 13.207l-1.646 1.647a.5.5 0 0 1-.708 0L5.5 12.207l-1.5 1.5v.793A1.5 1.5 0 0 0 5.5 16h5a1.5 1.5 0 0 0 1.487-1.305ZM5.5 7h5A2.5 2.5 0 0 1 13 9.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 14.5v-5A2.5 2.5 0 0 1 5.5 7Zm4 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm6 6a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0-5a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm-12-5a.5.5 0 0 1 0-1h17a.5.5 0 1 1 0 1h-17Zm0 15a.5.5 0 1 1 0-1h17a.5.5 0 1 1 0 1h-17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWrapImgLeft);
const Memo = memo(ForwardRef);
export default Memo;
