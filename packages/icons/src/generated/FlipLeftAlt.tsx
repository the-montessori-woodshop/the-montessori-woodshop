import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFlipLeftAlt = (
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
    <path d="M3 9.5a.5.5 0 0 1 .834-.372l5 4.5a.5.5 0 0 1 0 .744l-5 4.5A.5.5 0 0 1 3 18.5v-9Zm1 1.123v6.754L7.753 14 4 10.623Zm17.166-1.495A.5.5 0 0 1 22 9.5v9a.5.5 0 0 1-.834.372l-5-4.5a.5.5 0 0 1 0-.744l5-4.5ZM17.247 14 21 17.377v-6.754L17.247 14Zm.669-7.777a.5.5 0 1 1-.832.554C15.839 4.91 14.323 4 12.5 4c-1.823 0-3.339.91-4.584 2.777a.5.5 0 0 1-.832-.554C8.505 4.09 10.323 3 12.5 3c2.177 0 3.995 1.09 5.416 3.223ZM12 8.5a.5.5 0 1 1 1 0v11a.5.5 0 1 1-1 0v-11ZM8 6h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0V6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlipLeftAlt);
const Memo = memo(ForwardRef);
export default Memo;
