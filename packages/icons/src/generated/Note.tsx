import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgNote = (
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
    <path d="M19 14.5v-9A1.5 1.5 0 0 0 17.5 4h-11A1.5 1.5 0 0 0 5 5.5v13A1.5 1.5 0 0 0 6.5 20h7a1.5 1.5 0 0 0 1.5-1.5 2.5 2.5 0 0 1 2.5-2.5 1.5 1.5 0 0 0 1.5-1.5Zm-.499 2.291A2.492 2.492 0 0 1 17.5 17a1.5 1.5 0 0 0-1.5 1.5c0 .356-.074.695-.209 1.001a5.521 5.521 0 0 0 2.71-2.71ZM4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9a6.5 6.5 0 0 1-6.5 6.5h-7A2.5 2.5 0 0 1 4 18.5v-13ZM8.5 9a.5.5 0 0 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7Zm0 3a.5.5 0 1 1 0-1h5a.5.5 0 1 1 0 1h-5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgNote);
const Memo = memo(ForwardRef);
export default Memo;
