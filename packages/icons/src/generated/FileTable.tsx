import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileTable = (
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
    <path d="M20 6.529v12.972a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-15a2.5 2.5 0 0 1 2.5-2.5h8.972a.49.49 0 0 1 .382.146l4 4A.49.49 0 0 1 20 6.53Zm-5-3.528H6.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-12.5h-3.5a.5.5 0 0 1-.5-.5v-3.5Zm1 .707v2.293h2.293L16 3.708ZM8 15h2v-1H8v1Zm0 1v.5a.5.5 0 0 0 .5.5H10v-1H8Zm8.014-1v-1H11v1h5.014Zm0 1H11v1h4.514a.5.5 0 0 0 .5-.5V16ZM8 13h2v-1H8.5a.5.5 0 0 0-.5.5v.5Zm8.014 0v-.5a.5.5 0 0 0-.5-.5H11v1h5.014ZM7 12.5A1.5 1.5 0 0 1 8.5 11h7.014a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H8.5A1.5 1.5 0 0 1 7 16.5v-4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileTable);
const Memo = memo(ForwardRef);
export default Memo;
