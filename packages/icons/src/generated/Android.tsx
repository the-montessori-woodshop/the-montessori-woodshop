import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAndroid = (
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
    <path d="M15.323 3.384A4.501 4.501 0 0 1 18 7.5V8h.5A1.5 1.5 0 0 1 20 9.5v5a1.5 1.5 0 0 1-1.5 1.5H18v1.5a.5.5 0 0 1-.5.5H16v2.5a1.5 1.5 0 0 1-3 0V18h-2v2.5a1.5 1.5 0 0 1-3 0V18H6.5a.5.5 0 0 1-.5-.5V16h-.5A1.5 1.5 0 0 1 4 14.5v-5A1.5 1.5 0 0 1 5.5 8H6v-.5c0-1.836 1.1-3.416 2.677-4.116l-.53-.53a.5.5 0 1 1 .707-.708l.913.913C10.005 3.02 10.25 3 10.5 3h3c.25 0 .495.02.733.06l.913-.914a.5.5 0 0 1 .708.708l-.531.53ZM14 18v2.5a.5.5 0 1 0 1 0V18h-1Zm-4 0H9v2.5a.5.5 0 1 0 1 0V18ZM6 9h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H6V9Zm12 0v6h.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H18ZM7.035 7h9.93A3.5 3.5 0 0 0 13.5 4h-3a3.5 3.5 0 0 0-3.465 3ZM9 5h1v1H9V5Zm5 0h1v1h-1V5ZM7 8v9h10V8H7Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAndroid);
const Memo = memo(ForwardRef);
export default Memo;
