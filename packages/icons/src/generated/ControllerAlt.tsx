import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgControllerAlt = (
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
    <path d="M8 13h1.5a.5.5 0 1 1 0 1H8v1.5a.5.5 0 1 1-1 0V14H5.5a.5.5 0 1 1 0-1H7v-1.5a.5.5 0 1 1 1 0V13Zm2.612-4.012a.502.502 0 0 1-.224 0H4.5a1.5 1.5 0 0 0-1.5 1.5V16.5A1.5 1.5 0 0 0 4.5 18h15.007a1.5 1.5 0 0 0 1.5-1.5v-6.012a1.5 1.5 0 0 0-1.5-1.5h-8.895Zm-.612-1V7a2 2 0 0 1 2-2 1 1 0 0 0 1-1v-.5a.5.5 0 1 1 1 0V4a2 2 0 0 1-2 2 1 1 0 0 0-1 1v.988h8.507a2.5 2.5 0 0 1 2.5 2.5V16.5a2.5 2.5 0 0 1-2.5 2.5H4.5A2.5 2.5 0 0 1 2 16.5v-6.012a2.5 2.5 0 0 1 2.5-2.5H10ZM13.5 11h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm-3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgControllerAlt);
const Memo = memo(ForwardRef);
export default Memo;
