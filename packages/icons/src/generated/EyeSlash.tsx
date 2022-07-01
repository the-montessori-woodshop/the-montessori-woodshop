import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEyeSlash = (
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
    <path d="M5.567 15.562a.5.5 0 1 1-.663.748 10.687 10.687 0 0 1-2.87-4.13.5.5 0 0 1 0-.36C4.09 6.512 9.943 3.756 15.327 5.524a.5.5 0 0 1-.312.95C10.197 4.893 4.965 7.31 3.038 12a9.687 9.687 0 0 0 2.53 3.562Zm7.053-7.514a.5.5 0 0 1-.154.988 3 3 0 0 0-3.43 3.425.5.5 0 1 1-.99.152 4 4 0 0 1 4.573-4.565Zm-1.164 7.915a.5.5 0 0 1 .135-.99 3 3 0 0 0 3.388-3.334.5.5 0 1 1 .992-.12 4 4 0 0 1-4.516 4.443Zm-7.602 4.89a.5.5 0 0 1-.708-.707l17-17a.5.5 0 0 1 .708.708l-17 17ZM18.433 8.439a.5.5 0 0 1 .663-.748 10.687 10.687 0 0 1 2.87 4.13.5.5 0 0 1 0 .36c-2.057 5.307-7.909 8.063-13.293 6.295a.5.5 0 1 1 .312-.95c4.818 1.582 10.05-.834 11.977-5.525a9.687 9.687 0 0 0-2.53-3.562Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEyeSlash);
const Memo = memo(ForwardRef);
export default Memo;
