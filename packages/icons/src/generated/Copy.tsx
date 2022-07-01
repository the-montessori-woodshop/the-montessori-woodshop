import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCopy = (
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
    <path d="M8 7v1H6.5A1.5 1.5 0 0 0 5 9.5v9A1.5 1.5 0 0 0 6.5 20h7a1.5 1.5 0 0 0 1.5-1.5V17h1v1.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 18.5v-9A2.5 2.5 0 0 1 6.5 7H8Zm8-3h-5.5A1.5 1.5 0 0 0 9 5.5v9a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5V7h-2.5a.5.5 0 0 1-.5-.5V4Zm4 2.528V14.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 8 14.5v-9A2.5 2.5 0 0 1 10.5 3h5.972a.49.49 0 0 1 .382.146l3 3a.49.49 0 0 1 .146.382ZM17 6h1.293L17 4.707V6Zm-5.5 7a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm0-2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0-2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCopy);
const Memo = memo(ForwardRef);
export default Memo;
