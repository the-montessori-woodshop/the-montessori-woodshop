import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBook = (
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
    <path d="M8 3v14h11V3.5a.5.5 0 0 0-.5-.5H8ZM7 3h-.5A1.5 1.5 0 0 0 5 4.5v13c.418-.314.937-.5 1.5-.5H7V3ZM4.151 20.358A.499.499 0 0 1 4 20V4.5A2.5 2.5 0 0 1 6.5 2h12A1.5 1.5 0 0 1 20 3.5v17a1.5 1.5 0 0 1-1.5 1.5h-12a2.501 2.501 0 0 1-2.349-1.642ZM19 18H6.5a1.5 1.5 0 0 0 0 3h12a.5.5 0 0 0 .5-.5V18Zm-8.5-8a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm0-2a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBook);
const Memo = memo(ForwardRef);
export default Memo;
