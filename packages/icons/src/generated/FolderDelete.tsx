import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFolderDelete = (
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
    <path d="m12.707 13 2.147 2.146a.5.5 0 0 1-.708.708L12 13.707l-2.146 2.147a.5.5 0 0 1-.708-.708L11.293 13l-2.147-2.146a.5.5 0 0 1 .708-.708L12 12.293l2.146-2.147a.5.5 0 0 1 .708.708L12.707 13ZM4.5 4H11a2 2 0 0 1 2 2 1 1 0 0 0 1 1h5.5A2.5 2.5 0 0 1 22 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4Zm0 1A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 19.5 8H14a2 2 0 0 1-2-2 1 1 0 0 0-1-1H4.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFolderDelete);
const Memo = memo(ForwardRef);
export default Memo;
