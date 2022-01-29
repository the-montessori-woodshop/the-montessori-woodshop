import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCompass = (
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
    <path d="M13.968 13.675a.498.498 0 0 1-.293.293l-4.99 1.996a.5.5 0 0 1-.65-.65l1.997-4.99a.498.498 0 0 1 .293-.292l4.99-1.996a.5.5 0 0 1 .65.65l-1.997 4.99Zm-2.578-2.992 1.927 1.927 1.285-3.212-3.212 1.285Zm1.22 2.634-1.927-1.927-1.285 3.212 3.212-1.285ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCompass);
const Memo = memo(ForwardRef);
export default Memo;
