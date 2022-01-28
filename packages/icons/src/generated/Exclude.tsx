import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExclude = (
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
    <path d="M8 8v-.5a.5.5 0 0 1 1 0V8h4.516a2.5 2.5 0 0 1 2.5 2.5V15h.484a.5.5 0 1 1 0 1h-.484v.515a.5.5 0 0 1-1 0V16H10.5A2.5 2.5 0 0 1 8 13.5V9h-.5a.5.5 0 0 1 0-1H8Zm7.016 7v-4.5a1.5 1.5 0 0 0-1.5-1.5H9v4.5a1.5 1.5 0 0 0 1.5 1.5h4.516ZM9 4.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 10.5 2a.5.5 0 1 1 0 1A1.5 1.5 0 0 0 9 4.5ZM19.5 3a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 4.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 19.5 3ZM21 13.5a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5Zm-6 6a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5ZM4.5 21a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 2 19.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 4.5 21Zm0-13a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 3 10.5a.5.5 0 1 1-1 0A2.5 2.5 0 0 1 4.5 8ZM2 13.5a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3Zm19-6a.5.5 0 1 1 1 0v3a.5.5 0 1 1-1 0v-3ZM13.5 3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm-6 19a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExclude);
const Memo = memo(ForwardRef);
export default Memo;
