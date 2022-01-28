import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortAlphabeticDown = (
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
    <path d="M7.904 19.803a.5.5 0 0 1-.808 0l-2.95-2.95a.5.5 0 0 1 .708-.707L7 18.293V4.5a.5.5 0 0 1 1 0v13.793l2.146-2.147a.5.5 0 0 1 .708.708l-2.95 2.95ZM18.323 16.5A2 2 0 0 1 17 20h-3.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17a2 2 0 0 1 1.323 3.5Zm-.99-7.5h-2.666l-.705 1.692a.5.5 0 0 1-.924-.384l2.5-6a.5.5 0 0 1 .924 0l2.5 6a.5.5 0 0 1-.924.384L17.333 9Zm-.416-1L16 5.8 15.083 8h1.834ZM14 17v2h3a1 1 0 0 0 0-2h-3Zm0-1h3a1 1 0 0 0 0-2h-3v2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortAlphabeticDown);
const Memo = memo(ForwardRef);
export default Memo;
