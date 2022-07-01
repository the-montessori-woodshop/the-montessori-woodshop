import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFolderOpen = (
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
    <path d="M21 10.5v-1A1.5 1.5 0 0 0 19.5 8H14a2 2 0 0 1-2-2 1 1 0 0 0-1-1H4.5A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19h1A1.5 1.5 0 0 0 7 17.5v-5A2.5 2.5 0 0 1 9.5 10h10c.563 0 1.082.186 1.5.5Zm0 2a1.5 1.5 0 0 0-1.5-1.5h-10A1.5 1.5 0 0 0 8 12.5v5c0 .563-.186 1.082-.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-5ZM4.5 4H11a2 2 0 0 1 2 2 1 1 0 0 0 1 1h5.5A2.5 2.5 0 0 1 22 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFolderOpen);
const Memo = memo(ForwardRef);
export default Memo;
