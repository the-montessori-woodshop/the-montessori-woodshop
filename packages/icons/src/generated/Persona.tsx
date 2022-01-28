import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPersona = (
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
    <path d="M15.5 12H17V3.5A1.5 1.5 0 0 0 15.5 2h-9A1.5 1.5 0 0 0 5 3.5V12h1.5v-.368A2.5 2.5 0 0 1 7.714 9.49l.97-.582a3 3 0 1 1 4.633 0l.97.582a2.5 2.5 0 0 1 1.213 2.143V12Zm-1 0v-.368a1.5 1.5 0 0 0-.728-1.286l-1.259-.755c-.444.26-.961.409-1.513.409a2.986 2.986 0 0 1-1.513-.409l-1.259.755a1.5 1.5 0 0 0-.728 1.286V12h7Zm2.5 1H5v5.5A1.5 1.5 0 0 0 6.5 20h9a1.5 1.5 0 0 0 1.5-1.5V13Zm.958-9.958A2.5 2.5 0 0 1 20 5.5v15a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.458-2.042A2.5 2.5 0 0 1 4 18.5v-15A2.5 2.5 0 0 1 6.5 1h9a2.5 2.5 0 0 1 2.458 2.042ZM7.085 21A1.5 1.5 0 0 0 8.5 22h9a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1-1.415V18.5a2.5 2.5 0 0 1-2.5 2.5H7.085ZM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.5 7a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPersona);
const Memo = memo(ForwardRef);
export default Memo;
