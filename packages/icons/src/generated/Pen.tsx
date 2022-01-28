import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPen = (
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
    <path d="M5.5 20A1.5 1.5 0 0 0 7 18.5V17H5.5A1.5 1.5 0 0 0 4 18.5V20h1.5Zm.793-4-1.147-1.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1-.708.708L8 17.707v.793A2.5 2.5 0 0 1 5.5 21h-2a.5.5 0 0 1-.5-.5v-2A2.5 2.5 0 0 1 5.5 16h.793Zm-2.44 4.854a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .708.708l-2 2Zm3.071-5.089a.5.5 0 0 1-.848-.53l2.864-4.582a16.52 16.52 0 0 1 5.812-5.587l2.632-1.504A4.266 4.266 0 0 1 19.5 3 1.5 1.5 0 0 1 21 4.5c0 .742-.194 1.472-.562 2.116l-1.504 2.632a16.52 16.52 0 0 1-5.587 5.812l-4.582 2.864a.5.5 0 0 1-.53-.848l4.582-2.864a15.52 15.52 0 0 0 5.249-5.46L19.57 6.12c.282-.493.43-1.052.43-1.62a.5.5 0 0 0-.5-.5c-.568 0-1.127.148-1.62.43l-2.632 1.504a15.52 15.52 0 0 0-5.46 5.25l-2.864 4.581Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPen);
const Memo = memo(ForwardRef);
export default Memo;
