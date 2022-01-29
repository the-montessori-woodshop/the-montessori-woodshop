import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLock = (
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
    <path d="M16.616 10.004a.501.501 0 0 1-.249-.004H7.5A1.5 1.5 0 0 0 6 11.5v7A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.384-1.496ZM8 9h8V8a4 4 0 1 0-8 0v1Zm9 .05a2.5 2.5 0 0 1 2 2.45v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5v-7a2.5 2.5 0 0 1 2-2.45V8a5 5 0 1 1 10 0v1.05ZM11 14v.382c0 .658.153 1.306.447 1.894l.277.553a.309.309 0 0 0 .552 0l.277-.553A4.236 4.236 0 0 0 13 14.382V14a1 1 0 0 0-2 0Zm-1 0a2 2 0 1 1 4 0v.382c0 .813-.19 1.615-.553 2.342l-.276.552a1.309 1.309 0 0 1-2.342 0l-.276-.552A5.236 5.236 0 0 1 10 14.382V14Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLock);
const Memo = memo(ForwardRef);
export default Memo;
