import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStickyNotes = (
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
    <path d="M19.608 19.51c.244-.266.392-.62.392-1.01v-13A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5v13a1.5 1.5 0 0 0 3 0v-2a.5.5 0 0 1 .64-.48l11.968 3.49Zm-1.894.49L8 17.167V18.5c0 .563-.186 1.082-.5 1.5h10.214ZM18.5 3A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgStickyNotes);
const Memo = memo(ForwardRef);
export default Memo;
