import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCommand = (
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
    <path d="M15 15H9V9.018l6-.01V15ZM9 6.5A1.5 1.5 0 0 0 7.5 5H6.492a1.5 1.5 0 0 0-1.5 1.5v1.022a1.5 1.5 0 0 0 1.5 1.5L9 9.018V6.5ZM6.492 15a1.5 1.5 0 0 0-1.5 1.5v1.026a1.5 1.5 0 0 0 1.5 1.5H7.5a1.5 1.5 0 0 0 1.5-1.5V15H6.492ZM15 17.508a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V16.5a1.5 1.5 0 0 0-1.5-1.5H15v2.508Zm2.503-8.505A1.5 1.5 0 0 0 19 7.503V6.5A1.5 1.5 0 0 0 17.5 5h-1A1.5 1.5 0 0 0 15 6.5v2.508l2.503-.005ZM10 10.016V14h4v-3.99l-4 .006ZM17.5 14a2.5 2.5 0 0 1 2.5 2.5v1.008a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5V14h3.5ZM10 17.526a2.5 2.5 0 0 1-2.5 2.5H6.492a2.5 2.5 0 0 1-2.5-2.5V16.5a2.5 2.5 0 0 1 2.5-2.5H10v3.526Zm0-7.51-3.504.006a2.5 2.5 0 0 1-2.504-2.5V6.5a2.5 2.5 0 0 1 2.5-2.5H7.5A2.5 2.5 0 0 1 10 6.5v3.516ZM14 6.5A2.5 2.5 0 0 1 16.5 4h1A2.5 2.5 0 0 1 20 6.5v1.003a2.5 2.5 0 0 1-2.496 2.5L14 10.01V6.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCommand);
const Memo = memo(ForwardRef);
export default Memo;
