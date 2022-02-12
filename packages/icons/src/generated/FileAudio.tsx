import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileAudio = (
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
    <path d="M20 6.528V19.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h8.972a.49.49 0 0 1 .382.146l4 4a.49.49 0 0 1 .146.382ZM15 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7h-3.5a.5.5 0 0 1-.5-.5V3Zm1 .707V6h2.293L16 3.707ZM7.5 16a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1.349l1.374-.916A.5.5 0 0 1 10.5 11h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.277-.084L8.849 16H7.5Zm.5-3v2h1a.5.5 0 0 1 .277.084l1.374.916H11v-4h-.349l-1.374.916A.5.5 0 0 1 9 13H8Zm5.854 3.854a.5.5 0 0 1-.708-.708c.572-.57.854-1.276.854-2.146 0-.87-.282-1.575-.854-2.146a.5.5 0 0 1 .708-.708C14.616 11.908 15 12.87 15 14c0 1.13-.384 2.092-1.146 2.854Zm.292-7a.5.5 0 0 1 .708-.708C16.278 10.571 17 12.196 17 14c0 1.804-.722 3.43-2.146 4.854a.5.5 0 0 1-.708-.708C15.39 16.904 16 15.53 16 14c0-1.53-.611-2.904-1.854-4.146Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileAudio);
const Memo = memo(ForwardRef);
export default Memo;
