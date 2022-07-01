import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgServerStack = (
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
    <path d="M18.5 9c.836 0 1.507-.672 1.507-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 0 4 6.5v1A1.5 1.5 0 0 0 5.5 9h13ZM3 16.5A2.5 2.5 0 0 1 5.5 14h13.007a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 17.5v-1Zm1-7a2.496 2.496 0 0 1-1-2v-1A2.5 2.5 0 0 1 5.5 4h13.007a2.5 2.5 0 0 1 2.5 2.5v1c0 .818-.392 1.544-1 2 .608.456 1 1.182 1 2v1a2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1-.007-1c.836 0 1.507-.672 1.507-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 0 4 11.5v1A1.5 1.5 0 0 0 5.5 14a.5.5 0 1 1 0 1A2.5 2.5 0 0 1 3 12.5v-1c0-.818.393-1.544 1-2Zm0 7v1A1.5 1.5 0 0 0 5.5 19h13.007a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5H5.5A1.5 1.5 0 0 0 4 16.5ZM5.5 8a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Zm0 5a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm0 5a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgServerStack);
const Memo = memo(ForwardRef);
export default Memo;
