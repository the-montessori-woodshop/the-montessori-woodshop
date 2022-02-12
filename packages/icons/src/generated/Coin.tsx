import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCoin = (
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
    <path d="M14 8h.5A1.5 1.5 0 0 1 16 9.5a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1.133a.5.5 0 0 0 .43.495l5.282.754A1.5 1.5 0 0 1 16 13.367V14.5a1.5 1.5 0 0 1-1.5 1.5H14v1.5a.5.5 0 1 1-1 0V16h-2v1.5a.5.5 0 1 1-1 0V16h-.5A1.5 1.5 0 0 1 8 14.5a.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1.133a.5.5 0 0 0-.43-.495l-5.282-.754A1.5 1.5 0 0 1 8 10.633V9.5A1.5 1.5 0 0 1 9.5 8h.5V6.5a.5.5 0 1 1 1 0V8h2V6.5a.5.5 0 1 1 1 0V8Zm-2 14C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCoin);
const Memo = memo(ForwardRef);
export default Memo;
