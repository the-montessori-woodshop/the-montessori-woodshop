import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateShape = (
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
    <path d="M14.707 4H17.5A2.5 2.5 0 0 1 20 6.5v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L19 9.293V6.5A1.5 1.5 0 0 0 17.5 5h-2.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L14.707 4ZM4.5 2h5A2.5 2.5 0 0 1 12 4.5v11A2.5 2.5 0 0 1 9.5 18h-5A2.5 2.5 0 0 1 2 15.5v-11A2.5 2.5 0 0 1 4.5 2Zm0 1A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 9.5 3h-5Zm12 10a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm3 9a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-3 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm9-9a.5.5 0 1 1 0-1 2.5 2.5 0 0 1 2.5 2.5.5.5 0 1 1-1 0 1.5 1.5 0 0 0-1.5-1.5Zm1.5 3.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm0 3a.5.5 0 1 1 1 0 2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5ZM8.5 21a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 6 19.5a.5.5 0 1 1 1 0A1.5 1.5 0 0 0 8.5 21Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateShape);
const Memo = memo(ForwardRef);
export default Memo;
