import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSmartWatch = (
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
    <path d="M8 16.473A5.985 5.985 0 0 1 6 12c0-1.777.773-3.374 2-4.473a.502.502 0 0 1 .007-.11l1-6A.5.5 0 0 1 9.5 1h5a.5.5 0 0 1 .493.418l1 6a.502.502 0 0 1 .006.11A5.985 5.985 0 0 1 18 12a5.985 5.985 0 0 1-2 4.473.502.502 0 0 1-.007.11l-1 6A.5.5 0 0 1 14.5 23h-5a.5.5 0 0 1-.493-.418l-1-6a.502.502 0 0 1-.006-.11Zm1.136.8L9.924 22h4.152l.788-4.726A5.973 5.973 0 0 1 12 18a5.973 5.973 0 0 1-2.864-.726Zm0-10.547A5.973 5.973 0 0 1 12 6c1.037 0 2.013.263 2.864.726L14.076 2H9.924l-.788 4.726ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSmartWatch);
const Memo = memo(ForwardRef);
export default Memo;
