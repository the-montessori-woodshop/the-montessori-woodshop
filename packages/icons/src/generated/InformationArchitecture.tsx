import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInformationArchitecture = (
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
    <path d="M5.5 3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-9Zm0-1h9A1.5 1.5 0 0 1 16 3.5v3A1.5 1.5 0 0 1 14.5 8h-9A1.5 1.5 0 0 1 4 6.5v-3A1.5 1.5 0 0 1 5.5 2Zm1 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM17 16v-1h-2.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5H17v-.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v.5h2.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5v-1A1.5 1.5 0 0 1 3.5 11H6v-.5A1.5 1.5 0 0 1 7.5 9H10V7.5a.5.5 0 1 1 1 0V9h5.5a1.5 1.5 0 0 1 1.5 1.5v.5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H18v1.085a1.5 1.5 0 0 1 1 1.415v.5h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h.5v-.5a.5.5 0 0 0-.5-.5H12v1h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9 20.5v-1a1.5 1.5 0 0 1 1.5-1.5h.5v-1H5.5a.5.5 0 0 0-.5.5v.5h.5A1.5 1.5 0 0 1 7 19.5v1A1.5 1.5 0 0 1 5.5 22h-2A1.5 1.5 0 0 1 2 20.5v-1A1.5 1.5 0 0 1 3.5 18H4v-.5A1.5 1.5 0 0 1 5.5 16H17ZM12.5 4h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6Zm-11 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6Zm0 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Zm7 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Zm7 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgInformationArchitecture);
const Memo = memo(ForwardRef);
export default Memo;
