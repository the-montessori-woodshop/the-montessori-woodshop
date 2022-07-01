import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBolt = (
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
    <path d="M11.86 14H5.5a.5.5 0 0 1-.404-.794l8-11c.323-.445 1.022-.118.89.415L12.14 10h6.36a.5.5 0 0 1 .404.794l-8 11c-.323.445-1.022.118-.89-.415L11.86 14Zm.53-9.125L6.483 13H12.5a.5.5 0 0 1 .485.621l-1.376 5.504L17.52 11H11.5a.5.5 0 0 1-.485-.621l1.376-5.504Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBolt);
const Memo = memo(ForwardRef);
export default Memo;
