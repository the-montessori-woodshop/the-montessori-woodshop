import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLineChart = (
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
    <path d="M19.293 8H16.5a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V8.707l-5.146 5.147a.5.5 0 0 1-.708 0L11.5 11.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0l2.646 2.647L19.293 8ZM20.5 18a.5.5 0 1 1 0 1h-15A2.5 2.5 0 0 1 3 16.5v-9a.5.5 0 0 1 1 0v9A1.5 1.5 0 0 0 5.5 18h15Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLineChart);
const Memo = memo(ForwardRef);
export default Memo;
