import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgContinue = (
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
    <path d="m19.293 7-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L19.293 8H5.5A1.5 1.5 0 0 0 4 9.5v6A1.5 1.5 0 0 0 5.5 17h5a.5.5 0 1 1 0 1h-5A2.5 2.5 0 0 1 3 15.5v-6A2.5 2.5 0 0 1 5.5 7h13.793Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgContinue);
const Memo = memo(ForwardRef);
export default Memo;
