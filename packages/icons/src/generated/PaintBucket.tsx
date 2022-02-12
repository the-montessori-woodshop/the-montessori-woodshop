import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPaintBucket = (
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
    <path d="M9.901 5.212a2.9 2.9 0 0 1 3.155.632l4.106 4.105a2.9 2.9 0 0 1 .306 3.743.502.502 0 0 1-.17.214c-.044.05-.089.098-.136.145l-5.106 5.105a2.9 2.9 0 0 1-4.1 0l-4.107-4.105a2.887 2.887 0 0 1-.733-1.238.498.498 0 0 1-.093-.445c-.11-.86.166-1.758.826-2.419l.157-.156V6A3 3 0 0 1 9.9 5.212Zm-.905.591A2 2 0 0 0 5.006 6v3.793l3.95-3.95.04-.04Zm1.01.475V10.5a.5.5 0 0 1-1 0V7.207l-4.45 4.45A1.894 1.894 0 0 0 4 13h12.728a1.9 1.9 0 0 0-.273-2.344L12.35 6.551a1.9 1.9 0 0 0-2.343-.273ZM15.799 14H4.284c.076.122.167.238.272.344l4.106 4.105a1.9 1.9 0 0 0 2.687 0L15.8 14Zm.933 2.617 1.414-1.464a.5.5 0 0 1 .72 0l1.414 1.464a2.623 2.623 0 0 1 0 3.624 2.452 2.452 0 0 1-3.548 0 2.623 2.623 0 0 1 0-3.624Zm.72.695a1.624 1.624 0 0 0 0 2.234 1.452 1.452 0 0 0 2.108 0 1.624 1.624 0 0 0 0-2.234l-1.054-1.092-1.055 1.092Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPaintBucket);
const Memo = memo(ForwardRef);
export default Memo;
