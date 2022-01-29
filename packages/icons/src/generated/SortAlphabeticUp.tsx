import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSortAlphabeticUp = (
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
    <path d="M8 5.707v13.801a.5.5 0 1 1-1 0v-13.8L4.854 7.853a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707ZM18.323 16.5A2 2 0 0 1 17 20h-3.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17a2 2 0 0 1 1.323 3.5Zm-.99-7.5h-2.666l-.705 1.692a.5.5 0 0 1-.924-.384l2.5-6a.5.5 0 0 1 .924 0l2.5 6a.5.5 0 0 1-.924.384L17.333 9Zm-.416-1L16 5.8 15.083 8h1.834ZM14 17v2h3a1 1 0 0 0 0-2h-3Zm0-1h3a1 1 0 0 0 0-2h-3v2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSortAlphabeticUp);
const Memo = memo(ForwardRef);
export default Memo;
