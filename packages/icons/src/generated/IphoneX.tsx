import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIphoneX = (
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
    <path d="M8.5 3A1.5 1.5 0 0 0 7 4.5v15A1.5 1.5 0 0 0 8.5 21h7.011a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5H15.5a.5.5 0 0 0-.5.5A1.5 1.5 0 0 1 13.5 5h-3A1.5 1.5 0 0 1 9 3.5a.5.5 0 0 0-.5-.5Zm1.415 0c.055.156.085.325.085.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5c0-.175.03-.344.085-.5h-4.17ZM6 4.5A2.5 2.5 0 0 1 8.5 2h7.011a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H8.5A2.5 2.5 0 0 1 6 19.5v-15Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIphoneX);
const Memo = memo(ForwardRef);
export default Memo;
