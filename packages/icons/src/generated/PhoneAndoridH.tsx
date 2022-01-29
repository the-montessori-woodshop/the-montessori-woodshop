import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPhoneAndoridH = (
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
    <path d="M2 7.5A1.5 1.5 0 0 1 3.5 6h17A1.5 1.5 0 0 1 22 7.5v9.011a1.5 1.5 0 0 1-1.5 1.5h-17a1.5 1.5 0 0 1-1.5-1.5V7.5Zm1 0v9.011a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5Zm17 3v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPhoneAndoridH);
const Memo = memo(ForwardRef);
export default Memo;
