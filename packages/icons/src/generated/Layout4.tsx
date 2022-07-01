import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLayout4 = (
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
    <path d="M13 20h5.5a1.5 1.5 0 0 0 1.5-1.5V11h-7v9Zm-1 0v-6H4v4.5A1.5 1.5 0 0 0 5.5 20H12Zm0-7V4H5.5A1.5 1.5 0 0 0 4 5.5V13h8Zm1-9v6h7V5.5A1.5 1.5 0 0 0 18.5 4H13ZM3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLayout4);
const Memo = memo(ForwardRef);
export default Memo;
