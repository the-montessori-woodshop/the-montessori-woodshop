import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPassword = (
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
    <path d="M16.95 19a2.5 2.5 0 0 1-2.45 2h-9A2.5 2.5 0 0 1 3 18.5v-7a2.5 2.5 0 0 1 2-2.45V8a5 5 0 1 1 10 0v1.05a2.5 2.5 0 0 1 2 2.45V13h1.5a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5h-1.55Zm-1.035 0H11.5A2.5 2.5 0 0 1 9 16.5v-1a2.5 2.5 0 0 1 2.5-2.5H16v-1.5a1.5 1.5 0 0 0-1.384-1.496.501.501 0 0 1-.249-.004H5.5A1.5 1.5 0 0 0 4 11.5v7A1.5 1.5 0 0 0 5.5 20h9a1.5 1.5 0 0 0 1.415-1ZM6 9h8V8a4 4 0 1 0-8 0v1Zm14 7.5v-1a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5ZM11.5 15h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPassword);
const Memo = memo(ForwardRef);
export default Memo;
