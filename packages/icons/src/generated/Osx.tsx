import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOsx = (
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
    <path d="m17 11.028 1.071-1.785a.5.5 0 0 1 .858.514L17.583 12l1.346 2.243a.5.5 0 0 1-.858.514L17 12.972l-1.071 1.785a.5.5 0 0 1-.858-.514L16.417 12 15.07 9.757a.5.5 0 0 1 .858-.514L17 11.028ZM5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Zm0 1A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-13ZM5 13.5v-3A1.5 1.5 0 0 1 6.5 9h1A1.5 1.5 0 0 1 9 10.5v3A1.5 1.5 0 0 1 7.5 15h-1A1.5 1.5 0 0 1 5 13.5Zm1 0a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3Zm8-3a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.28a.5.5 0 0 0 .342.474l1.632.544A1.5 1.5 0 0 1 14 13.22v.279a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.28a.5.5 0 0 0-.342-.474l-1.632-.544A1.5 1.5 0 0 1 10 10.78V10.5A1.5 1.5 0 0 1 11.5 9h1a1.5 1.5 0 0 1 1.5 1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgOsx);
const Memo = memo(ForwardRef);
export default Memo;
