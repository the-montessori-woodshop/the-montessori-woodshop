import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgParagraph = (
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
    <path d="M12 15h-1.5a5.5 5.5 0 0 1 0-11h8a.5.5 0 1 1 0 1H16v14.5a.5.5 0 1 1-1 0V5h-2v14.5a.5.5 0 1 1-1 0V15Zm0-1V5h-1.5a4.5 4.5 0 0 0 0 9H12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgParagraph);
const Memo = memo(ForwardRef);
export default Memo;
