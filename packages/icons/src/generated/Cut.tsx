import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCut = (
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
    <path d="M16 4.001h-5.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-7.5h-2.5a.5.5 0 0 1-.5-.5v-2.5Zm4 2.528v7.972a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5v-9a2.5 2.5 0 0 1 2.5-2.5h5.972a.49.49 0 0 1 .382.146l3 3A.49.49 0 0 1 20 6.53Zm-3-.528h1.293L17 4.708v1.293ZM11.5 9a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1h-4ZM4 12.5a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3ZM8.5 21a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm-2-14a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 5 9.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 6.5 7ZM4 18.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 6.5 20a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 4 18.5Zm9.5 2.5a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCut);
const Memo = memo(ForwardRef);
export default Memo;
