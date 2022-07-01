import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDraftingCompass = (
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
    <path d="M7.06 18.125a13.927 13.927 0 0 1-3.876-2.237.5.5 0 0 1-.127-.62l1.996-3.992a.5.5 0 0 1 .73-.188c.957.659 1.992 1.15 3.066 1.471l1.603-4.989a3 3 0 1 1 3.096 0l1.603 4.99a10.948 10.948 0 0 0 3.065-1.472.5.5 0 0 1 .731.188l1.996 3.992a.5.5 0 0 1-.135.626 13.927 13.927 0 0 1-3.868 2.23l1.036 3.223a.5.5 0 0 1-.952.306l-1.031-3.208a13.98 13.98 0 0 1-7.986 0l-1.031 3.208a.5.5 0 0 1-.952-.306l1.036-3.222Zm2.76-5.322a10.98 10.98 0 0 0 4.36 0l-1.565-4.866a3.013 3.013 0 0 1-1.23 0L9.82 12.803ZM4.13 15.36a12.948 12.948 0 0 0 15.742 0l-1.567-3.134a11.961 11.961 0 0 1-12.608 0L4.13 15.36ZM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDraftingCompass);
const Memo = memo(ForwardRef);
export default Memo;
