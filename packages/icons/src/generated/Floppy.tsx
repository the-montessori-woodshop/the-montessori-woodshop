import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFloppy = (
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
    <path d="M7 20v-7.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V20h1.5a1.5 1.5 0 0 0 1.5-1.5V6.707L17.293 4H15v3.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V4h-.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H7Zm1 0h8v-7H8v7Zm4-16H7v3h5V4Zm1 0v3h1V4h-1ZM3 5.5A2.5 2.5 0 0 1 5.5 3h12a.5.5 0 0 1 .354.146l3 3A.5.5 0 0 1 21 6.5v12a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFloppy);
const Memo = memo(ForwardRef);
export default Memo;
