import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDuplicateAlt = (
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
    <path d="M14.293 12H6.5a.5.5 0 1 1 0-1h7.793l-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L14.293 12ZM10 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 11.5 3h8A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 9 18.5a.5.5 0 1 1 1 0 1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 4h-8A1.5 1.5 0 0 0 10 5.5ZM7.5 20a.5.5 0 1 1 0 1h-3A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 0 3 5.5v13A1.5 1.5 0 0 0 4.5 20h3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDuplicateAlt);
const Memo = memo(ForwardRef);
export default Memo;
