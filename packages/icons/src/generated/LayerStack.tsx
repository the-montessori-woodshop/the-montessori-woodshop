import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLayerStack = (
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
    <path d="M12 13.935 20.426 9.5 12 5.065 3.574 9.5 12 13.935ZM2.267 9.058l9.5-5a.5.5 0 0 1 .466 0l9.5 5a.5.5 0 0 1 0 .884l-9.5 5a.5.5 0 0 1-.466 0l-9.5-5a.5.5 0 0 1 0-.884ZM12 16.935l9.267-4.877a.5.5 0 0 1 .466.884l-9.5 5a.5.5 0 0 1-.466 0l-9.5-5a.5.5 0 1 1 .466-.884L12 16.935Zm0 3 9.267-4.877a.5.5 0 0 1 .466.884l-9.5 5a.5.5 0 0 1-.466 0l-9.5-5a.5.5 0 1 1 .466-.884L12 19.935Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLayerStack);
const Memo = memo(ForwardRef);
export default Memo;
