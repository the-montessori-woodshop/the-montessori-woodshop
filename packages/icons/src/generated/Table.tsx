import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTable = (
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
    <path d="M15 14v-4H9v4h6Zm0 1H9v4h6v-4ZM4 14h4v-4H4v4Zm0 1v2.5A1.5 1.5 0 0 0 5.5 19H8v-4H4Zm16-1v-4h-4v4h4Zm0 1h-4v4h2.5a1.5 1.5 0 0 0 1.5-1.5V15Zm-5-6V5H9v4h6ZM4 9h4V5H5.5A1.5 1.5 0 0 0 4 6.5V9Zm16 0V6.5A1.5 1.5 0 0 0 18.5 5H16v4h4ZM5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTable);
const Memo = memo(ForwardRef);
export default Memo;
