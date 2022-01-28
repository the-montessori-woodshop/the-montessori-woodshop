import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMemoryCard = (
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
    <path d="m5 10.707-.854-.853A.5.5 0 0 1 4 9.5v-7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 19 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 19.5v-6a.5.5 0 0 1 .146-.354L5 12.293v-1.586ZM5 3v6.293l.854.853A.5.5 0 0 1 6 10.5v2a.5.5 0 0 1-.146.354L5 13.707V19.5A1.5 1.5 0 0 0 6.5 21h10a1.5 1.5 0 0 0 1.5-1.5V6.707L14.293 3H5Zm4.5 16a.5.5 0 0 1-.416-.777l2-3a.5.5 0 0 1 .832 0l2 3A.5.5 0 0 1 13.5 19h-4Zm3.066-1L11.5 16.401 10.434 18h2.132ZM6 4.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Zm2 0a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Zm2 0a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3Zm2 0a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3Zm2 1a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMemoryCard);
const Memo = memo(ForwardRef);
export default Memo;
