import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPaintRoller = (
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
    <path d="M12.028 15h.472a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9 20.5v-4a1.5 1.5 0 0 1 1.5-1.5h.517a2.5 2.5 0 0 1 2.207-2.195l5.442-.604A1.5 1.5 0 0 0 20 10.71V8.5A1.5 1.5 0 0 0 18.5 7a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 21 8.5v2.21a2.5 2.5 0 0 1-2.224 2.485l-5.442.604A1.5 1.5 0 0 0 12.028 15ZM10.5 16a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-2Zm-5-13h11A2.5 2.5 0 0 1 19 5.5v2a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 3 7.5v-2A2.5 2.5 0 0 1 5.5 3Zm0 1A1.5 1.5 0 0 0 4 5.5v2A1.5 1.5 0 0 0 5.5 9h11A1.5 1.5 0 0 0 18 7.5v-2A1.5 1.5 0 0 0 16.5 4h-11Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPaintRoller);
const Memo = memo(ForwardRef);
export default Memo;
