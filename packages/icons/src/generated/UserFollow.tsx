import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserFollow = (
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
    <path d="m19.293 19-2.147-2.146a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L19.293 20H14.5a.5.5 0 1 1 0-1h4.793Zm-5.25-5.435A4.982 4.982 0 0 1 12 14a4.982 4.982 0 0 1-2.039-.433L5.88 15.422A1.5 1.5 0 0 0 5 16.788v.712A1.5 1.5 0 0 0 6.5 19h5a.5.5 0 1 1 0 1h-5A2.5 2.5 0 0 1 4 17.5v-.712a2.5 2.5 0 0 1 1.465-2.276l3.457-1.571a5 5 0 1 1 6.172-.013l2.603 1.112a.5.5 0 0 1-.394.92l-3.26-1.395ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserFollow);
const Memo = memo(ForwardRef);
export default Memo;
