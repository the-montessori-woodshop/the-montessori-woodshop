import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPhoneAndorid = (
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
    <path d="M7.5 2h9.011a1.5 1.5 0 0 1 1.5 1.5v17a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 20.5v-17A1.5 1.5 0 0 1 7.5 2Zm0 1a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h9.011a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H7.5Zm3 17a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPhoneAndorid);
const Memo = memo(ForwardRef);
export default Memo;
