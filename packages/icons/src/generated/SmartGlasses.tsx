import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSmartGlasses = (
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
    <path d="m19.991 11.488-.958-5.748-.887-.886a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 .14.272L21 11.5v1.807c.005.064.007.128.007.193v4.015a2.5 2.5 0 0 1-2.5 2.5h-3.563a2.5 2.5 0 0 1-2.373-1.713L12.139 17h-.278l-.432 1.302a2.5 2.5 0 0 1-2.373 1.713H5.5a2.5 2.5 0 0 1-2.5-2.5v-1.6a1.5 1.5 0 0 1 .001-2.83l.006-1.667 1-6a.5.5 0 0 1 .14-.272l1-1a.5.5 0 1 1 .707.708l-.887.886L4 11.5c.418-.314.937-.5 1.5-.5h13.007c.556 0 1.069.181 1.484.488Zm.016 2.098A.503.503 0 0 1 20 13.5v-.144A1.5 1.5 0 0 0 18.508 12H5.5a1.5 1.5 0 0 0-1.415 1H7.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H4v1.515a1.5 1.5 0 0 0 1.5 1.5h3.556a1.5 1.5 0 0 0 1.424-1.028l.545-1.644A.5.5 0 0 1 11.5 16h1a.5.5 0 0 1 .475.343l.545 1.644a1.5 1.5 0 0 0 1.424 1.028h3.563a1.5 1.5 0 0 0 1.5-1.5v-3.93ZM7 14H3.5a.5.5 0 1 0 0 1H7v-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSmartGlasses);
const Memo = memo(ForwardRef);
export default Memo;
