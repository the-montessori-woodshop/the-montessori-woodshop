import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBid = (
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
    <path d="M14 8h.5A1.5 1.5 0 0 1 16 9.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1.133a.5.5 0 0 0 .43.495l5.282.754A1.5 1.5 0 0 1 16 13.367V14.5a1.5 1.5 0 0 1-1.5 1.5H14v.5a.5.5 0 1 1-1 0V16h-2v.5a.5.5 0 1 1-1 0V16h-.5A1.5 1.5 0 0 1 8 14.5a.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1.133a.5.5 0 0 0-.43-.495l-5.282-.754A1.5 1.5 0 0 1 8 10.633V9.5A1.5 1.5 0 0 1 9.5 8h.5v-.5a.5.5 0 1 1 1 0V8h2v-.5a.5.5 0 1 1 1 0V8ZM3 12a9 9 0 1 1 4.39 7.73l-3.732 1.244a.5.5 0 0 1-.605-.698l1.564-3.128A8.96 8.96 0 0 1 3 12Zm4.294 6.708a.5.5 0 0 1 .426.052A8 8 0 1 0 5.6 16.8a.5.5 0 0 1 .047.524l-1.16 2.32 2.807-.936Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBid);
const Memo = memo(ForwardRef);
export default Memo;
