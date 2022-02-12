import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMacbookPro = (
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
    <path d="M22 17h-7.085a1.5 1.5 0 0 1-1.415 1h-3a1.5 1.5 0 0 1-1.415-1H2v1.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V17ZM3 16V5.49a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5V16h1.5a.5.5 0 0 1 .5.5v2a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 18.5v-2a.5.5 0 0 1 .5-.5H3Zm1 0h5.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5H20V5.49a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5V16Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMacbookPro);
const Memo = memo(ForwardRef);
export default Memo;
