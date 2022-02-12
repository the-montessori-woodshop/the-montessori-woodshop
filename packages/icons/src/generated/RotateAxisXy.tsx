import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgRotateAxisXy = (
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
    <path d="m11.28 15.987-1.134-1.133a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708l1.158-1.158a19.387 19.387 0 0 1-2.692-.273C9.337 19.294 10.622 21 12 21c2.005 0 3.816-3.618 3.987-8.28l-1.133 1.134a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708l-1.158-1.158C16.817 17.866 14.741 22 12 22c-2.024 0-3.685-2.254-4.485-5.515C4.255 15.685 2 14.025 2 12c0-2.024 2.254-3.685 5.515-4.485C8.315 4.255 9.975 2 12 2c1.502 0 2.826 1.239 3.743 3.307a.5.5 0 0 1-.914.406C14.055 3.966 13.022 3 12 3c-1.377 0-2.663 1.706-3.388 4.285A19.726 19.726 0 0 1 12 7c5.49 0 10 2.137 10 5 0 1.502-1.239 2.826-3.307 3.743a.5.5 0 0 1-.406-.914C20.034 14.055 21 13.022 21 12c0-2.107-3.996-4-9-4-1.3 0-2.534.128-3.646.354A18.389 18.389 0 0 0 8 12c0 1.3.128 2.534.354 3.646.905.184 1.89.303 2.926.34ZM7.285 8.612C4.706 9.337 3 10.622 3 12c0 1.377 1.706 2.663 4.285 3.388A19.726 19.726 0 0 1 7 12c0-1.187.1-2.328.285-3.388Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgRotateAxisXy);
const Memo = memo(ForwardRef);
export default Memo;
