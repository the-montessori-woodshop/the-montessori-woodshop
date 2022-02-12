import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBarCode = (
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
    <path d="M5 6.5a.5.5 0 0 1 1 0v10a.5.5 0 1 1-1 0v-10ZM18.5 20a.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 18.5 5h-13A1.5 1.5 0 0 0 4 6.5v11A1.5 1.5 0 0 0 5.5 19a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 17.5v-11A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5ZM9 6.5a.5.5 0 0 1 1 0v13a.5.5 0 1 1-1 0v-13Zm2 0a.5.5 0 1 1 1 0v10a.5.5 0 1 1-1 0v-10Zm2 0a.5.5 0 1 1 1 0v13a.5.5 0 1 1-1 0v-13Zm3 0a.5.5 0 1 1 1 0v10a.5.5 0 1 1-1 0v-10Zm2 0a.5.5 0 1 1 1 0v10a.5.5 0 1 1-1 0v-10Zm-2 12a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-5 0a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-4 0a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBarCode);
const Memo = memo(ForwardRef);
export default Memo;
