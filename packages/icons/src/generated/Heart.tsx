import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHeart = (
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
    <path d="M20 10c0-3.16-1.717-5-4.5-5-1.484 0-2.474.566-3.053 1.724a.5.5 0 0 1-.894 0C10.974 5.566 9.983 5 8.5 5 5.717 5 4 6.84 4 10c0 2.4 2.649 5.399 8 8.903C17.351 15.4 20 12.4 20 10Zm-4.5-6c3.35 0 5.5 2.303 5.5 6 0 2.894-2.928 6.167-8.728 9.92a.5.5 0 0 1-.544 0C5.928 16.167 3 12.894 3 10c0-3.697 2.15-6 5.5-6 1.528 0 2.71.523 3.5 1.556C12.79 4.523 13.972 4 15.5 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHeart);
const Memo = memo(ForwardRef);
export default Memo;
