import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShuffle = (
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
    <path d="M19.852 17.145a.498.498 0 0 1 0 .71l-2.998 2.999a.5.5 0 0 1-.708-.708L18.293 18H13.5a.5.5 0 1 1 0-1h4.793l-2.147-2.146a.5.5 0 0 1 .708-.708l2.998 2.999Zm-1.57-11.156-2.136-2.135a.5.5 0 0 1 .708-.708l2.93 2.931A.5.5 0 0 1 20 6.49v.006a.498.498 0 0 1-.146.359l-3 3a.5.5 0 0 1-.708-.708l2.158-2.157H13.5a1.5 1.5 0 0 0-1.5 1.5V15.5A2.5 2.5 0 0 1 9.5 18h-5a.5.5 0 1 1 0-1h5a1.5 1.5 0 0 0 1.5-1.5V8.489a2.5 2.5 0 0 1 2.5-2.5h4.782Zm-8.782 0a.5.5 0 1 1 0 1h-5a.5.5 0 0 1 0-1h5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShuffle);
const Memo = memo(ForwardRef);
export default Memo;
