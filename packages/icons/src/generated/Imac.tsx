import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImac = (
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
    <path d="M10.309 19h3.382l-.496-.992h-2.39l-.496.992Zm-.799 1H8.5a.5.5 0 1 1 0-1h.691l.496-.992H4.5a2.5 2.5 0 0 1-2.5-2.5V6.5C2.019 5.102 3.13 4 4.5 4l15-.008a2.5 2.5 0 0 1 2.5 2.5v9.016a2.5 2.5 0 0 1-2.5 2.5h-5.187l.496.992h.691a.5.5 0 1 1 0 1H9.51Zm4.081-2.992H19.5a1.5 1.5 0 0 0 1.5-1.5V6.492a1.5 1.5 0 0 0-1.5-1.5L4.5 5A1.5 1.5 0 0 0 3 6.5V13h18v1H3v1.508a1.5 1.5 0 0 0 1.5 1.5h5.909a.498.498 0 0 1 .183 0h2.816a.498.498 0 0 1 .183 0ZM11.5 16a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgImac);
const Memo = memo(ForwardRef);
export default Memo;
