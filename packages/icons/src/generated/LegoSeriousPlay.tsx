import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLegoSeriousPlay = (
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
    <path d="M6 19.744A4.502 4.502 0 0 1 3 15.5v-7A4.5 4.5 0 0 1 7.5 4H8v-.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5V4h.5A4.5 4.5 0 0 1 21 8.5v7a4.502 4.502 0 0 1-3 4.244v.756a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5v-.756Zm1 .229v.527a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-.527a4.55 4.55 0 0 1-.5.027h-9a4.55 4.55 0 0 1-.5-.027ZM9 4h6v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V4ZM7.5 5A3.5 3.5 0 0 0 4 8.5v7A3.5 3.5 0 0 0 7.5 19h9a3.5 3.5 0 0 0 3.5-3.5v-7A3.5 3.5 0 0 0 16.5 5h-9Zm7 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-6 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm.646 4.854a.5.5 0 0 1 .708-.708c.57.572 1.276.854 2.146.854.87 0 1.575-.282 2.146-.854a.5.5 0 0 1 .708.708C14.092 15.616 13.13 16 12 16c-1.13 0-2.092-.384-2.854-1.146Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLegoSeriousPlay);
const Memo = memo(ForwardRef);
export default Memo;
