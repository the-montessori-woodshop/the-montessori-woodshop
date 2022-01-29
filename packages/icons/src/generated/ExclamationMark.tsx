import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgExclamationMark = (
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
    <path d="M13 13.5a.5.5 0 1 1-1 0v-4a.5.5 0 1 1 1 0v4ZM12 16h1v1h-1v-1Zm.058-12.734a.5.5 0 0 1 .884 0l9 17A.5.5 0 0 1 21.5 21h-18a.5.5 0 0 1-.442-.734l9-17ZM4.33 20h16.34L12.5 4.569 4.33 20Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgExclamationMark);
const Memo = memo(ForwardRef);
export default Memo;
