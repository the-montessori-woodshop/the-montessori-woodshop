import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFilmAlt = (
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
    <path d="M21 9h-2v2h2V9Zm0-1v-.5A1.5 1.5 0 0 0 19.5 6H19v2h2Zm0 6v-2h-2v2h2Zm0 1h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5V15ZM3 14h2v-2H3v2Zm0 1v.5A1.5 1.5 0 0 0 4.5 17H5v-2H3Zm0-6v2h2V9H3Zm0-1h2V6h-.5A1.5 1.5 0 0 0 3 7.5V8Zm3 3h12V6H6v5Zm0 1v5h12v-5H6ZM4.5 5h15A2.5 2.5 0 0 1 22 7.5v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 15.5v-8A2.5 2.5 0 0 1 4.5 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFilmAlt);
const Memo = memo(ForwardRef);
export default Memo;
