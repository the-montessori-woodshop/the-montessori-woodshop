import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShoppingBagAlt = (
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
    <path d="M18.508 20a1.5 1.5 0 0 0 1.5-1.5V6.719A1.987 1.987 0 0 1 19 7H5c-.366 0-.705-.105-1-.277V18.5A1.5 1.5 0 0 0 5.5 20h13.008ZM5 4a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Zm15.99.912c.006.027.018.052.018.08V18.5a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 18.5V5a2 2 0 0 1 2-2h14c1.074 0 1.945.849 1.99 1.912ZM16.5 8a.5.5 0 0 1 0 1H16a4 4 0 0 1-8 0h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H9a3 3 0 1 0 6 0h-.5a.5.5 0 0 1 0-1h2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShoppingBagAlt);
const Memo = memo(ForwardRef);
export default Memo;
