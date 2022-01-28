import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgYenSign = (
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
    <path d="M12 12.633 11.638 12H9.5a.5.5 0 1 1 0-1h1.567L8.066 5.748a.5.5 0 1 1 .868-.496L12.22 11h.562l3.285-5.748a.5.5 0 0 1 .868.496L13.933 11H15.5a.5.5 0 1 1 0 1h-2.138l-.362.633V13h2.5a.5.5 0 1 1 0 1H13v4.5a.5.5 0 1 1-1 0V14H9.5a.5.5 0 1 1 0-1H12v-.367Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgYenSign);
const Memo = memo(ForwardRef);
export default Memo;
