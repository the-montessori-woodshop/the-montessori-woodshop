import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPencilCircle = (
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
    <path d="M15 13.288a3.607 3.607 0 0 1-3-.205 3.607 3.607 0 0 1-3 .205v7.2A8.985 8.985 0 0 0 12 21c1.052 0 2.062-.18 3-.512v-7.2Zm-.202-.998L12 7.492 9.202 12.29c.817.37 1.77.294 2.52-.206a.5.5 0 0 1 .555 0c.75.5 1.704.576 2.521.206Zm1.202.22v7.554a9 9 0 1 0-8 0V12.51a.498.498 0 0 1 .07-.266l3.498-5.996a.5.5 0 0 1 .864 0l3.498 5.996a.507.507 0 0 1 .07.266ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPencilCircle);
const Memo = memo(ForwardRef);
export default Memo;
