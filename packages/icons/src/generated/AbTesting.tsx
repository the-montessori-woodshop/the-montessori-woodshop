import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAbTesting = (
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
    <path d="M14.5 16a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H16a2 2 0 0 1 1.662 3.112A2 2 0 0 1 17 16h-2.5Zm.5-1h2a1 1 0 0 0 0-2h-2v2Zm0-3h1a1 1 0 0 0 0-2h-1v2Zm-2.05-8h6.55A2.5 2.5 0 0 1 22 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-6a2.5 2.5 0 0 1-2.461-2.058A2.51 2.51 0 0 1 10.5 20h-6A2.5 2.5 0 0 1 2 17.5v-13A2.5 2.5 0 0 1 4.5 2h6a2.5 2.5 0 0 1 2.45 2ZM13 5v12.5c0 .818-.393 1.544-1 2a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 19.5 5H13Zm-4.44 6.496a.505.505 0 0 1-.06.004h-2a.505.505 0 0 1-.06-.004l-.476 1.19a.5.5 0 0 1-.928-.372l2-5a.5.5 0 0 1 .928 0l2 5a.5.5 0 0 1-.928.372l-.476-1.19Zm-.399-.996L7.5 8.846 6.839 10.5H8.16ZM10.5 3h-6A1.5 1.5 0 0 0 3 4.5v13A1.5 1.5 0 0 0 4.5 19h6a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 10.5 3Zm-4 15a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm9 2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAbTesting);
const Memo = memo(ForwardRef);
export default Memo;
