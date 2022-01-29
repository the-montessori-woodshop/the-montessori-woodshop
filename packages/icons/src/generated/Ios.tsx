import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIos = (
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
    <path d="M5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Zm0 1A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4h-13ZM8 14.5a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0v3ZM7 9h1v1H7V9Zm2 4.5v-3A1.5 1.5 0 0 1 10.5 9h1a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 13.5Zm1 0a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3Zm8-3a.5.5 0 1 1-1 0 .5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.28a.5.5 0 0 0 .342.474l1.632.544A1.5 1.5 0 0 1 18 13.22v.279a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5.5.5 0 1 1 1 0 .5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-.28a.5.5 0 0 0-.342-.474l-1.632-.544A1.5 1.5 0 0 1 14 10.78V10.5A1.5 1.5 0 0 1 15.5 9h1a1.5 1.5 0 0 1 1.5 1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgIos);
const Memo = memo(ForwardRef);
export default Memo;
