import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLanError = (
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
    <path d="M12 16v-1.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1h-1a1.5 1.5 0 0 1-1.5-1.5V17h-1.5a.5.5 0 1 1 0-1H12Zm-5-5H5.5a.5.5 0 1 1 0-1h-1A1.5 1.5 0 0 1 3 8.5v-4A1.5 1.5 0 0 1 4.5 3h6A1.5 1.5 0 0 1 12 4.5v4a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 1 1 0 1H8v2.5a.5.5 0 1 1-1 0V11Zm.5 4.793 1.646-1.647a.5.5 0 0 1 .708.708L8.207 16.5l1.647 1.646a.5.5 0 0 1-.708.708L7.5 17.207l-1.646 1.647a.5.5 0 0 1-.708-.708L6.793 16.5l-1.647-1.646a.5.5 0 0 1 .708-.708L7.5 15.793ZM4 4.5v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Zm9 10v4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLanError);
const Memo = memo(ForwardRef);
export default Memo;
