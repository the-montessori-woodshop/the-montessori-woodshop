import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTemperature = (
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
    <path d="M13 4a1 1 0 0 0-2 0v12.17a2.995 2.995 0 0 1 2 0V15h-.5a.5.5 0 1 1 0-1h.5v-1h-.5a.5.5 0 1 1 0-1h.5v-1h-.5a.5.5 0 1 1 0-1h.5V9h-.5a.5.5 0 1 1 0-1h.5V7h-.5a.5.5 0 1 1 0-1h.5V5h-.5a.5.5 0 1 1 0-1h.5Zm-3 12.764V4a2 2 0 1 1 4 0v12.764a3 3 0 1 1-4 0Zm.791.642a2 2 0 1 0 2.417 3.187 2 2 0 0 0-2.417-3.187ZM12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTemperature);
const Memo = memo(ForwardRef);
export default Memo;
