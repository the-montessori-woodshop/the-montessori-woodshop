import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSend = (
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
    <path d="m15.379 19.14-3.271-6.54 7.359-7.359-4.088 13.9ZM4.86 8.621l13.9-4.087-7.359 7.358-6.541-3.27Zm-1.501-.6a.5.5 0 0 0-.083.927l7.852 3.925 3.925 7.851a.5.5 0 0 0 .927-.083l5-17a.5.5 0 0 0-.621-.62l-17 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSend);
const Memo = memo(ForwardRef);
export default Memo;
