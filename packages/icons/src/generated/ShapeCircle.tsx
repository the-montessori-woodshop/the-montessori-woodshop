import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeCircle = (
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
    <path d="M17.745 16A6.965 6.965 0 0 0 19 12a6.965 6.965 0 0 0-1.255-4H17a1 1 0 0 1-1-1v-.745A6.965 6.965 0 0 0 12 5c-1.45 0-2.832.44-3.995 1.251L8 6.255V7a1 1 0 0 1-1 1h-.745A6.965 6.965 0 0 0 5 12c0 1.452.443 2.837 1.255 4H7a1 1 0 0 1 1 1v.745A6.965 6.965 0 0 0 12 19a6.965 6.965 0 0 0 4-1.255V17a1 1 0 0 1 1-1h.745Zm.989.32A.996.996 0 0 1 19 17v1a1 1 0 0 1-1 1h-1c-.262 0-.5-.1-.68-.266A7.965 7.965 0 0 1 12 20a7.965 7.965 0 0 1-4.32-1.266A.996.996 0 0 1 7 19H6a1 1 0 0 1-1-1v-1c0-.262.1-.5.266-.68A7.965 7.965 0 0 1 4 12c0-1.555.445-3.044 1.266-4.32A.996.996 0 0 1 5 7V6a1 1 0 0 1 1-1h1c.262 0 .5.1.68.266A7.964 7.964 0 0 1 12 4c1.556 0 3.045.446 4.32 1.266A.996.996 0 0 1 17 5h1a1 1 0 0 1 1 1v1c0 .262-.1.5-.266.68A7.965 7.965 0 0 1 20 12a7.965 7.965 0 0 1-1.266 4.32ZM6 6v1h1V6H6Zm11 0v1h1V6h-1ZM6 17v1h1v-1H6Zm11 0v1h1v-1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeCircle);
const Memo = memo(ForwardRef);
export default Memo;
