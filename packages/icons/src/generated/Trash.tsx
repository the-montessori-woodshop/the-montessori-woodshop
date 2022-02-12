import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTrash = (
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
    <path d="M19 6v12.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5V6h-.5a.5.5 0 0 1 0-1H9v-.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V5h4.5a.5.5 0 1 1 0 1H19ZM6 6v12.5A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5V6H6Zm8-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V5h4Zm0 4.5a.5.5 0 1 1 1 0v7a.5.5 0 1 1-1 0v-7Zm-5 0a.5.5 0 0 1 1 0v7a.5.5 0 1 1-1 0v-7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTrash);
const Memo = memo(ForwardRef);
export default Memo;
