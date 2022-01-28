import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShaka = (
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
    <path d="M16 10v1.5a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v2a.5.5 0 1 1-1 0v-2a.5.5 0 1 0-1 0v1.547a1.415 1.415 0 0 1-2.32 1.087l-.924-.77A1.572 1.572 0 0 0 5.75 11a.693.693 0 0 0-.625.393l-.035.074a.797.797 0 0 0 .104.854l4.414 5.32A3.758 3.758 0 0 0 12.5 19a4.5 4.5 0 0 0 4.5-4.5v-9a.5.5 0 1 0-1 0V10Zm-1-1.915V5.5a1.5 1.5 0 0 1 3 0v9a5.5 5.5 0 0 1-5.5 5.5 4.758 4.758 0 0 1-3.662-1.72l-4.413-5.32a1.797 1.797 0 0 1-.236-1.927l.035-.074A1.693 1.693 0 0 1 5.75 10c.602 0 1.184.21 1.646.596l.924.77a.415.415 0 0 0 .68-.319V9.5a1.5 1.5 0 0 1 2.5-1.118 1.494 1.494 0 0 1 1-.382c.384 0 .735.144 1 .382a1.494 1.494 0 0 1 1.5-.297Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShaka);
const Memo = memo(ForwardRef);
export default Memo;
