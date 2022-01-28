import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPaperPrototype = (
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
    <path d="M20 12.293V9.707L18.707 11 20 12.293Zm-.707.707L18 11.707 16.707 13h2.586ZM16 9.707v2.586L17.293 11 16 9.707ZM16.707 9 18 10.293 19.293 9h-2.586Zm-8 0L10 10.293 11.293 9H8.707ZM8 9.707v2.586L9.293 11 8 9.707Zm4 2.586V9.707L10.707 11 12 12.293Zm-.707.707L10 11.707 8.707 13h2.586ZM1 18V6.5A4.5 4.5 0 0 1 5.5 2c.25 0 .5.167.5.5V6h16.5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H5a4 4 0 0 1-4-4Zm1-2.646A3.99 3.99 0 0 1 5 14V3.035A3.5 3.5 0 0 0 2 6.5v8.854ZM6 7v7.5a.5.5 0 0 1-.5.5H5a3 3 0 0 0 0 6h17V7H6Zm2.5 1h3A1.5 1.5 0 0 1 13 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7 12.5v-3A1.5 1.5 0 0 1 8.5 8Zm11 0A1.5 1.5 0 0 1 21 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 16.5 8h3Zm-12 9a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 2a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPaperPrototype);
const Memo = memo(ForwardRef);
export default Memo;
