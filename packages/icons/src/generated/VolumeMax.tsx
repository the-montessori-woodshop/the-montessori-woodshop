import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVolumeMax = (
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
    <path d="M12 6h-1.191l-.52 1.04A5.354 5.354 0 0 1 5.5 10H5a2 2 0 1 0 0 4h.5a5.354 5.354 0 0 1 4.789 2.96l.52 1.04H12V6Zm1-.5v13a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.447-.276l-.659-1.317A4.354 4.354 0 0 0 5.5 15H5a3 3 0 0 1 0-6h.5c1.65 0 3.157-.932 3.894-2.407l.659-1.317A.5.5 0 0 1 10.5 5h2a.5.5 0 0 1 .5.5Zm1.143 4.35a.5.5 0 0 1 .714-.7 4.07 4.07 0 0 1 0 5.7.5.5 0 0 1-.714-.7 3.07 3.07 0 0 0 0-4.3Zm2.022-1.979a.5.5 0 1 1 .67-.742 6.558 6.558 0 0 1 0 9.742.5.5 0 1 1-.67-.742 5.558 5.558 0 0 0 0-8.258Zm2.01-1.99a.5.5 0 1 1 .65-.762 9.04 9.04 0 0 1 0 13.762.5.5 0 1 1-.65-.762 8.04 8.04 0 0 0 0-12.238Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVolumeMax);
const Memo = memo(ForwardRef);
export default Memo;
