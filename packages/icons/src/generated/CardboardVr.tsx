import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCardboardVr = (
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
    <path d="M9.264 18a2.5 2.5 0 0 1-2 1H4.5A2.5 2.5 0 0 1 2 16.5v-7a2.5 2.5 0 0 1 2.042-2.458A2.5 2.5 0 0 1 6.5 5h11a2.5 2.5 0 0 1 2.458 2.042A2.5 2.5 0 0 1 22 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-2.764a2.5 2.5 0 0 1-2-1H9.264Zm.562-1h4.348c-.405-.62-1.1-1-1.851-1h-.646c-.752 0-1.446.38-1.851 1ZM5.086 7h13.829A1.5 1.5 0 0 0 17.5 6h-11a1.5 1.5 0 0 0-1.415 1Zm3.717 9.776A3.214 3.214 0 0 1 11.677 15h.646c1.217 0 2.33.688 2.874 1.776l.197.395a1.5 1.5 0 0 0 1.342.829H19.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19.5 8h-15A1.5 1.5 0 0 0 3 9.5v7A1.5 1.5 0 0 0 4.5 18h2.764a1.5 1.5 0 0 0 1.342-.83l.197-.394ZM7.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCardboardVr);
const Memo = memo(ForwardRef);
export default Memo;
