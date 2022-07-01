import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDesktop3 = (
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
    <path
      d="M20 6v-.5A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5V6h16Zm0 1H4v11.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V7ZM3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm11 5A1.5 1.5 0 0 1 15.5 9h1a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-6Zm1 0v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM6.5 10a.5.5 0 0 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Zm0 2a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Zm1 1h3a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3Zm0 1a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDesktop3);
const Memo = memo(ForwardRef);
export default Memo;
