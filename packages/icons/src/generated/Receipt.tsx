import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgReceipt = (
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
    <path d="M21.5 18a.5.5 0 0 1 .5.5v1a2.5 2.5 0 0 1-2.5 2.5h-12c-.089 0-.177-.005-.264-.014A2.035 2.035 0 0 1 7 22a.497.497 0 0 1-.358-.151A2.501 2.501 0 0 1 5 19.5V6H2.5a.5.5 0 0 1-.5-.5V4a2 2 0 0 1 2-2h12.534a2.5 2.5 0 0 1 2.5 2.5V18H21.5Zm-.5 1.5V19H9v1c0 .364-.098.706-.268 1H19.5a1.5 1.5 0 0 0 1.5-1.5Zm-13-1a.5.5 0 0 1 .5-.5h9.534V4.5a1.5 1.5 0 0 0-1.5-1.5H5.723c.172.295.277.634.277 1v15.5a1.5 1.5 0 0 0 1.225 1.475c.443-.102.775-.5.775-.975v-1.5ZM5 5V4a1 1 0 0 0-2 0v1h2Zm4.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H14v.5a.5.5 0 0 1-1 0V14h-2v.5a.5.5 0 0 1-1 0V14h-.5A1.5 1.5 0 0 1 8 12.5a.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5A1.5 1.5 0 0 1 8 9.5v-1A1.5 1.5 0 0 1 9.5 7h.5v-.5a.5.5 0 0 1 1 0V7h2v-.5a.5.5 0 0 1 1 0V7h.5A1.5 1.5 0 0 1 16 8.5a.5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgReceipt);
const Memo = memo(ForwardRef);
export default Memo;
