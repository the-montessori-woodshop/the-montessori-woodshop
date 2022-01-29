import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCallIn = (
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
    <path d="M3 4.5v2.007c0 8.008 6.492 14.5 14.5 14.5h2a1.5 1.5 0 0 0 1.5-1.5v-2.565a1.5 1.5 0 0 0-1.026-1.424l-3.183-1.06a1.5 1.5 0 0 0-1.722.59l-.73 1.094a1.5 1.5 0 0 1-1.722.59l-1.525-.508a4.932 4.932 0 0 1-3.198-3.38l-.627-2.3a1.5 1.5 0 0 1 .972-1.817l.603-.201a1.35 1.35 0 0 0 .905-1.503l-.462-2.77A1.5 1.5 0 0 0 7.805 3H4.5A1.5 1.5 0 0 0 3 4.5Zm12 3.793 5.146-5.147a.5.5 0 0 1 .708.708L15.707 9H18.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 1 1 1 0v2.793ZM2 4.5A2.5 2.5 0 0 1 4.5 2h3.306a2.5 2.5 0 0 1 2.466 2.089l.461 2.77a2.35 2.35 0 0 1-1.575 2.615l-.602.201a.5.5 0 0 0-.325.606l.627 2.3a3.932 3.932 0 0 0 2.55 2.695l1.526.508a.5.5 0 0 0 .574-.197l.729-1.093a2.5 2.5 0 0 1 2.87-.985l3.184 1.06A2.5 2.5 0 0 1 22 16.943v2.565a2.5 2.5 0 0 1-2.5 2.5h-2c-8.56 0-15.5-6.94-15.5-15.5V4.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCallIn);
const Memo = memo(ForwardRef);
export default Memo;
