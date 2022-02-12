import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTextField = (
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
    <path d="M18 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h12Zm0 1H6a1 1 0 0 1-1 1v12a1 1 0 0 1 1 1h12a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1Zm-8 3v3.5a.5.5 0 1 1-1 0V8H7.5a.5.5 0 0 1 0-1h4a.5.5 0 1 1 0 1H10ZM4 4v1h1V4H4Zm15 0v1h1V4h-1Zm0 15v1h1v-1h-1ZM4 19v1h1v-1H4Zm9.5-11a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm0 3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm-6 3a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9Zm0 3a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1h-9Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgTextField);
const Memo = memo(ForwardRef);
export default Memo;
