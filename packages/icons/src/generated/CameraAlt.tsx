import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCameraAlt = (
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
    <path d="M1 19.5v-12A2.5 2.5 0 0 1 3.5 5h1.93a1.5 1.5 0 0 0 1.248-.668l.812-1.219A2.5 2.5 0 0 1 9.57 2h4.86a2.5 2.5 0 0 1 2.08 1.113l.812 1.22A1.5 1.5 0 0 0 18.57 5h1.93A2.5 2.5 0 0 1 23 7.5v12a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 19.5Zm1 0A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 20.5 6h-1.93a2.5 2.5 0 0 1-2.08-1.113l-.812-1.22A1.5 1.5 0 0 0 14.43 3H9.57a1.5 1.5 0 0 0-1.248.668L7.51 4.887A2.5 2.5 0 0 1 5.43 6H3.5A1.5 1.5 0 0 0 2 7.5v12Zm10-.5a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm7-11h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm0 1v1h1V8h-1ZM2.5 4a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCameraAlt);
const Memo = memo(ForwardRef);
export default Memo;
