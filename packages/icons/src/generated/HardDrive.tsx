import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgHardDrive = (
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
    <path d="M2 18.5v-13A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5Zm1-4c.418-.314.937-.5 1.5-.5h15c.563 0 1.082.186 1.5.5v-9A1.5 1.5 0 0 0 19.5 4h-15A1.5 1.5 0 0 0 3 5.5v9Zm0 4A1.5 1.5 0 0 0 4.5 20h15a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 16.5v2ZM17.5 16h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Zm.5 1v1h1v-1h-1ZM5.5 18a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgHardDrive);
const Memo = memo(ForwardRef);
export default Memo;
