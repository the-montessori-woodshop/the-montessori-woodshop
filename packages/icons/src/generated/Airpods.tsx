import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAirpods = (
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
    <path d="M16 10.979V18.5a1.5 1.5 0 0 1-3 0v-11C13 5.224 14.224 4 16.5 4c1.48 0 2.934.727 4.354 2.146A.5.5 0 0 1 21 6.5v2a.5.5 0 0 1-.146.354C19.434 10.274 17.98 11 16.5 11c-.173 0-.34-.007-.5-.021Zm-2-.777V18.5a.5.5 0 1 0 1 0v-7.724a2.881 2.881 0 0 1-1-.574ZM11 7.5v11a1.5 1.5 0 0 1-3 0v-7.521c-.16.014-.327.021-.5.021-1.48 0-2.934-.727-4.354-2.146A.5.5 0 0 1 3 8.5v-2a.5.5 0 0 1 .146-.354C4.566 4.726 6.02 4 7.5 4 9.776 4 11 5.224 11 7.5Zm-2 3.276V18.5a.5.5 0 1 0 1 0v-8.298c-.278.248-.612.44-1 .574ZM4 8.29C5.195 9.44 6.36 10 7.5 10c1.724 0 2.5-.776 2.5-2.5S9.224 5 7.5 5C6.36 5 5.195 5.56 4 6.71v1.58ZM6.5 8a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm10-3c-1.724 0-2.5.776-2.5 2.5s.776 2.5 2.5 2.5c1.14 0 2.305-.56 3.5-1.71V6.71C18.805 5.56 17.64 5 16.5 5Zm-1 3a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAirpods);
const Memo = memo(ForwardRef);
export default Memo;
