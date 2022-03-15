import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImageGallery = (
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
      fill="currentColor"
      d="M17.553 16.445a.5.5 0 1 1 .962.274 2.5 2.5 0 0 1-1.8 1.742l-8.127 2.032c-1.373.318-2.721-.513-3.033-1.865l-2.1-9.102a2.5 2.5 0 0 1 1.83-2.987l1.888-.473a.5.5 0 0 1 .243.97l-1.89.473A1.5 1.5 0 0 0 4.43 9.3l2.1 9.102c.187.811.996 1.31 1.826 1.118l8.118-2.03a1.5 1.5 0 0 0 1.08-1.046ZM20 13.293V5.5A1.5 1.5 0 0 0 18.5 4h-9A1.5 1.5 0 0 0 8 5.5v5.793l2.146-2.147a.5.5 0 0 1 .708 0l3.71 3.71 2.659-1.772a.5.5 0 0 1 .63.062L20 13.293Zm-.013 1.402-2.55-2.552-2.66 1.773a.5.5 0 0 1-.63-.062L10.5 10.207l-2.5 2.5V14.5A1.5 1.5 0 0 0 9.5 16h9a1.5 1.5 0 0 0 1.487-1.305ZM9.5 3h9A2.5 2.5 0 0 1 21 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 7 14.5v-9A2.5 2.5 0 0 1 9.5 3ZM16 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1v2h2V6h-2Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgImageGallery);
const Memo = memo(ForwardRef);
export default Memo;
