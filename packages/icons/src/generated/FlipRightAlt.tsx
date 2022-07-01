import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlipRightAlt = (
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
    <path d="M22 9.5v9a.5.5 0 0 1-.834.372l-5-4.5a.5.5 0 0 1 0-.744l5-4.5A.5.5 0 0 1 22 9.5Zm-1 1.123L17.247 14 21 17.377v-6.754ZM3.834 9.128l5 4.5a.5.5 0 0 1 0 .744l-5 4.5A.5.5 0 0 1 3 18.5v-9a.5.5 0 0 1 .834-.372ZM7.753 14 4 10.623v6.754L7.753 14Zm-.669-7.777C8.505 4.09 10.323 3 12.5 3c2.177 0 3.995 1.09 5.416 3.223a.5.5 0 1 1-.832.554C15.839 4.91 14.323 4 12.5 4c-1.823 0-3.339.91-4.584 2.777a.5.5 0 0 1-.832-.554ZM13 8.5v11a.5.5 0 1 1-1 0v-11a.5.5 0 1 1 1 0ZM17 6V3.5a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1H17Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlipRightAlt);
const Memo = memo(ForwardRef);
export default Memo;
