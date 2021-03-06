import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLink = (
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
    <path d="M12.15 11.847a.5.5 0 0 1 .71-.705 3.34 3.34 0 0 1-.004 4.713l-2.168 2.173a3.33 3.33 0 0 1-4.694.02 3.312 3.312 0 0 1-.034-4.684l2.184-2.215a.5.5 0 1 1 .712.702l-2.183 2.215a2.312 2.312 0 0 0 .023 3.269c.913.9 2.38.893 3.284-.014l2.168-2.172a2.34 2.34 0 0 0 .003-3.302Zm-.462.306a.5.5 0 1 1-.71.705 3.343 3.343 0 0 1 .002-4.715l2.088-2.1a3.506 3.506 0 0 1 5.042.076 3.283 3.283 0 0 1-.166 4.64l-2.265 2.107a.5.5 0 1 1-.68-.732l2.263-2.107a2.283 2.283 0 0 0 .024-3.32 2.506 2.506 0 0 0-3.509.042l-2.089 2.099c-.91.914-.91 2.39 0 3.305Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgLink);
const Memo = memo(ForwardRef);
export default Memo;
