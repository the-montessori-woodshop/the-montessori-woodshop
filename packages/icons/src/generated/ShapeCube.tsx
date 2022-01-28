import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeCube = (
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
    <path d="M7 8H3v12.293l4-4V8Zm1-1h8.293l4-4H8v4Zm9 .707V16h4V3.707l-4 4ZM16 17H7.707l-4 4H16v-4Zm5.854-.146-5 5A.498.498 0 0 1 16.5 22h-14a.5.5 0 0 1-.5-.5v-14c0-.138.056-.263.146-.354l5-5A.498.498 0 0 1 7.5 2h14a.5.5 0 0 1 .5.5v14a.498.498 0 0 1-.146.354ZM20.293 17H17v3.293L20.293 17ZM7 3.707 3.707 7H7V3.707ZM8 8v8h8V8H8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeCube);
const Memo = memo(ForwardRef);
export default Memo;
