import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNextAlt = (
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
    <path d="m13 14.568-2.228 1.856A2.3 2.3 0 0 1 7 14.657V9.343a2.3 2.3 0 0 1 3.772-1.767L13 9.432V9a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0v-.432Zm0-1.302v-2.532l-2.868-2.39a1.3 1.3 0 0 0-2.132 1v5.313a1.3 1.3 0 0 0 2.132.999L13 13.266Zm1 .237V15a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0v4.503ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgNextAlt);
const Memo = memo(ForwardRef);
export default Memo;
