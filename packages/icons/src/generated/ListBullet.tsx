import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgListBullet = (
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
    <path d="M3 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Zm5.5 1a.5.5 0 0 1 0-1h12a.5.5 0 1 1 0 1h-12ZM3 11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1Zm5.5 1a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1h-12ZM3 16a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1ZM4 6v1h1V6H4Zm0 5v1h1v-1H4Zm0 5v1h1v-1H4Zm4.5 1a.5.5 0 1 1 0-1h12a.5.5 0 1 1 0 1h-12Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgListBullet);
const Memo = memo(ForwardRef);
export default Memo;
