import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStore = (
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
    <path d="M6 20v-5.5A1.5 1.5 0 0 1 7.5 13h3a1.5 1.5 0 0 1 1.5 1.5V20h6.5a1.5 1.5 0 0 0 1.5-1.5v-8h1v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-8h1v8A1.5 1.5 0 0 0 5.5 20H6Zm1 0h4v-5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V20Zm8-5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm-1 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-2ZM6 11H3.5A1.5 1.5 0 0 1 2 9.5v-.807c0-.191.036-.38.107-.558l1.929-4.82A.5.5 0 0 1 4.5 3h15a.5.5 0 0 1 .464.314l1.929 4.821a1.5 1.5 0 0 1 .107.558V9.5a1.5 1.5 0 0 1-1.5 1.5H18c-.384 0-.735-.144-1-.382A1.494 1.494 0 0 1 16 11h-3c-.384 0-.735-.144-1-.382A1.494 1.494 0 0 1 11 11H8c-.384 0-.735-.144-1-.382A1.494 1.494 0 0 1 6 11ZM4.839 4 3.036 8.507A.5.5 0 0 0 3 8.693V9.5a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 1 1 1 0v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 1 1 1 0v1a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-.807a.5.5 0 0 0-.036-.186L19.161 4H4.84Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgStore);
const Memo = memo(ForwardRef);
export default Memo;
