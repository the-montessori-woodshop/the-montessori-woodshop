import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCellEmpty = (
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
    <path d="M13 12h.5a.5.5 0 1 1 0 1H13v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm6.5 10a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5Zm-14-1a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 19.5v-.062a.5.5 0 1 1 1 0v.062A1.5 1.5 0 0 0 5.5 21ZM4 5.5a.5.5 0 0 1-1 0A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5ZM19.5 4a.5.5 0 1 1 0-1A2.5 2.5 0 0 1 22 5.5a.5.5 0 1 1-1 0A1.5 1.5 0 0 0 19.5 4ZM3 7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm18-9a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM17.5 21a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm9-18a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1h1Zm-3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1ZM12 15.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0-7a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0-3a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 13a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1ZM5.5 13a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm7 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCellEmpty);
const Memo = memo(ForwardRef);
export default Memo;
