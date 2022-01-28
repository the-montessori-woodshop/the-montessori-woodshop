import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgChat = (
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
    <path d="M5.79 15.04a.5.5 0 0 1 .393.051 6.5 6.5 0 1 0-2.274-2.274.5.5 0 0 1 .051.393l-.732 2.562 2.562-.732Zm10.889-7.719a7.503 7.503 0 0 1 4.38 10.818l.922 3.224a.5.5 0 0 1-.618.618l-3.224-.921a7.503 7.503 0 0 1-10.817-4.381 7.453 7.453 0 0 1-1.46-.62l-3.225.922a.5.5 0 0 1-.618-.618l.921-3.224a7.5 7.5 0 1 1 13.738-5.817Zm.25 1.148a7.5 7.5 0 0 1-8.46 8.46 6.504 6.504 0 0 0 9.348 3.162.5.5 0 0 1 .393-.051l2.562.732-.732-2.562a.5.5 0 0 1 .051-.393A6.504 6.504 0 0 0 16.93 8.47Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgChat);
const Memo = memo(ForwardRef);
export default Memo;
