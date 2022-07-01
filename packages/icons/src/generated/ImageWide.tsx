import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgImageWide = (
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
    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm1 0v11A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 19.5 5h-15A1.5 1.5 0 0 0 3 6.5ZM16 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm0 1v2h2V8h-2ZM2.854 15.854a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0l5.646 5.647 2.646-2.647a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L16.5 14.207l-2.646 2.647a.5.5 0 0 1-.708 0L7.5 11.207l-4.646 4.647Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgImageWide);
const Memo = memo(ForwardRef);
export default Memo;
