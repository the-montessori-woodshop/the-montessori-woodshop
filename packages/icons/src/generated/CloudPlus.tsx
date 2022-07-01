import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCloudPlus = (
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
    <path d="M12 12h1.5a.5.5 0 1 1 0 1H12v1.5a.5.5 0 1 1-1 0V13H9.5a.5.5 0 1 1 0-1H11v-1.5a.5.5 0 1 1 1 0V12Zm3.744-3h.756a4.5 4.5 0 1 1 0 9h-10a3.5 3.5 0 0 1-.5-6.965C6 8.24 8.239 6 11 6h.5a4.502 4.502 0 0 1 4.244 3Zm.229 1c.018.164.027.331.027.5a.5.5 0 1 1-1 0A3.5 3.5 0 0 0 11.5 7H11a4 4 0 0 0-4 4v.5a.5.5 0 0 1-.5.5 2.5 2.5 0 1 0 0 5h10a3.5 3.5 0 0 0 0-7h-.527Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCloudPlus);
const Memo = memo(ForwardRef);
export default Memo;
