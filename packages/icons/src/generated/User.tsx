import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUser = (
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
    <path d="m15.078 12.94 3.457 1.572A2.5 2.5 0 0 1 20 16.788v.712a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-.712a2.5 2.5 0 0 1 1.465-2.276l3.457-1.571a5 5 0 1 1 6.156 0Zm-5.117.627L5.88 15.422A1.5 1.5 0 0 0 5 16.788v.712A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5v-.712a1.5 1.5 0 0 0-.88-1.366l-4.081-1.855A4.982 4.982 0 0 1 12 14a4.982 4.982 0 0 1-2.039-.433ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUser);
const Memo = memo(ForwardRef);
export default Memo;
