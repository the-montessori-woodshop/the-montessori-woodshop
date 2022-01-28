import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVirtualReality = (
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
    <path d="M6 9.01v.025A3.53 3.53 0 0 1 6.5 9h11c.177 0 .35.013.52.038v-.02l-.31-.416A1.5 1.5 0 0 0 16.51 8H7.504a1.5 1.5 0 0 0-1.204.605L6 9.01Zm0-1.506A2.5 2.5 0 0 1 7.505 7H10V3.014a4.5 4.5 0 0 0-4 4.473v.017ZM11 7h2V2h-2v5Zm3 0h2.51a2.5 2.5 0 0 1 1.51.509A4.521 4.521 0 0 0 14 3.027V7Zm6.31 3.413c.434.583.69 1.305.69 2.087v2a3.5 3.5 0 0 1-3.02 3.467A5.5 5.5 0 0 1 12.5 23h-1a5.5 5.5 0 0 1-5.48-5.033A3.5 3.5 0 0 1 3 14.5v-2c0-.902.341-1.724.902-2.345L5 8.679V7.487a5.5 5.5 0 0 1 5-5.478V1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.522a5.521 5.521 0 0 1 5.02 5.499v1.164l1.268 1.696.022.032Zm-15.96.81c-.222.374-.35.81-.35 1.277v2A2.5 2.5 0 0 0 6.5 17h.864c1.076 0 2.04-.668 2.418-1.676l.399-1.063a1.943 1.943 0 0 1 3.638 0l.4 1.063A2.582 2.582 0 0 0 16.635 17h.864a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5h-11c-.72 0-1.37.305-1.827.793l-.29.39a.506.506 0 0 1-.033.04ZM16.973 18h-.337c-.955 0-1.846-.38-2.502-1.018A.5.5 0 0 1 14 17h-4a.5.5 0 0 1-.134-.018A3.581 3.581 0 0 1 7.364 18h-.337a4.5 4.5 0 0 0 4.473 4h1a4.5 4.5 0 0 0 4.473-4Zm-3.551-2a3.594 3.594 0 0 1-.14-.324l-.399-1.064a.943.943 0 0 0-1.766 0l-.399 1.064c-.042.11-.088.219-.14.324h2.844Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVirtualReality);
const Memo = memo(ForwardRef);
export default Memo;
