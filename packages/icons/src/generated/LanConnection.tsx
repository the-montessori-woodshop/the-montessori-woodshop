import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLanConnection = (
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
    <path d="M18.5 20a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h-1a1.5 1.5 0 0 1-1.5-1.5V17H9.5A2.5 2.5 0 0 1 7 14.5V11H5.5a.5.5 0 1 1 0-1h-1A1.5 1.5 0 0 1 3 8.5v-4A1.5 1.5 0 0 1 4.5 3h6A1.5 1.5 0 0 1 12 4.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0 1H8v3.5A1.5 1.5 0 0 0 9.5 16H12v-1.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1ZM4 4.5v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Zm9 10v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLanConnection);
const Memo = memo(ForwardRef);
export default Memo;
