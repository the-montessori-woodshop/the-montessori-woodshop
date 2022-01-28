import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCode = (
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
    <path d="M7.88 13.175a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 1 1 .76.65L5.159 10l2.72 3.175Zm1.073 6.536a.5.5 0 1 1-.906-.422l7-15a.5.5 0 0 1 .906.422l-7 15Zm7.167-8.886a.5.5 0 0 1 .76-.65l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.76-.65L18.841 14l-2.72-3.175Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCode);
const Memo = memo(ForwardRef);
export default Memo;
