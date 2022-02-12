import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHammer = (
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
    <path d="M12.5 12.207 10.207 14.5l.647.646a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0l.646.647 2.293-2.293-1.5-1.5H8.5a.5.5 0 0 1-.354-.146l-1-1a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0l1 1A.5.5 0 0 1 14 4.5v1.793L17.707 10H19.5a.5.5 0 0 1 .354.146l1 1a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-1-1A.5.5 0 0 1 14 15.5v-1.793l-1.5-1.5ZM8.207 8.5l.5.5H10.5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 15 13.5v1.793l.5.5 4.293-4.293-.5-.5H17.5a.5.5 0 0 1-.354-.146l-4-4A.5.5 0 0 1 13 6.5V4.707l-.5-.5L8.207 8.5Zm-4 10L5.5 19.793 9.793 15.5 8.5 14.207 4.207 18.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHammer);
const Memo = memo(ForwardRef);
export default Memo;
