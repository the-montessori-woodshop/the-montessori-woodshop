import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPackage = (
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
    <path d="M20 9.596V19.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V9.596l-1.964-4.91A.5.5 0 0 1 2.5 4h10a.5.5 0 0 1 .464.314l1.536 3.84 1.536-3.84A.5.5 0 0 1 16.5 4h5a.5.5 0 0 1 .464.686L20 9.596ZM15 10v9h4v-9h-4Zm-1 0H5v9h9v-9ZM4.839 9h8.922l-1.6-4H3.24l1.6 4ZM19.16 9l1.6-4H16.84l-1.6 4h3.922ZM13 15.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm-1 .5h-2v1h2v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPackage);
const Memo = memo(ForwardRef);
export default Memo;
