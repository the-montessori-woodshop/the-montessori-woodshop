import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMail = (
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
    <path d="M3.847 17.86c.197.096.419.15.653.15h15c.234 0 .456-.054.653-.15l-5.908-5.56-1.927 1.586a.5.5 0 0 1-.636 0l-1.927-1.587-5.908 5.561Zm-.704-.71a.509.509 0 0 1 .014-.014l5.82-5.478-5.795-4.772a.506.506 0 0 1-.036-.033A1.494 1.494 0 0 0 3 7.5v9.01c0 .229.051.446.143.64Zm17.714 0c.092-.194.143-.411.143-.64V7.5c0-.232-.052-.45-.146-.647a.506.506 0 0 1-.036.033l-5.795 4.772 5.82 5.478.014.014Zm-.713-11.005A1.494 1.494 0 0 0 19.5 6h-15c-.23 0-.45.052-.644.145L12 12.852l8.144-6.707ZM4.5 5h15A2.5 2.5 0 0 1 22 7.5v9.01a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5V7.5A2.5 2.5 0 0 1 4.5 5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMail);
const Memo = memo(ForwardRef);
export default Memo;
