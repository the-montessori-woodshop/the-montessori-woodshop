import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShoppingCart = (
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
    <path d="M5.508 12.591a.499.499 0 0 1-.003-.017l-1.22-7.32A1.5 1.5 0 0 0 2.805 4H2.5a.5.5 0 0 1 0-1h.306a2.5 2.5 0 0 1 2.45 2H21.5a.5.5 0 0 1 .48.637l-2 7a.5.5 0 0 1-.48.363H6.59l.125.747A1.5 1.5 0 0 0 8.195 15H19.5a.5.5 0 1 1 0 1H8.194a2.5 2.5 0 0 1-2.466-2.089l-.22-1.32ZM5.424 6l1 6h12.699l1.714-6H5.424ZM8 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShoppingCart);
const Memo = memo(ForwardRef);
export default Memo;
