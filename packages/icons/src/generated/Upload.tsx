import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUpload = (
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
    <path d="M12 4.707 8.854 7.854a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 1 1-.708.708L13 4.707V15.5a.5.5 0 1 1-1 0V4.707ZM20 15.5a.5.5 0 1 1 1 0v3a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 4 18.5v-3a.5.5 0 1 1 1 0v3A1.5 1.5 0 0 0 6.5 20h12a1.5 1.5 0 0 0 1.5-1.5v-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUpload);
const Memo = memo(ForwardRef);
export default Memo;
