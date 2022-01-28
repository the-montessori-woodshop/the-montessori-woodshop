import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileImage = (
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
    <path d="M20 6.529v12.972a2.5 2.5 0 0 1-2.5 2.5h-11a2.5 2.5 0 0 1-2.5-2.5v-15a2.5 2.5 0 0 1 2.5-2.5h8.972a.49.49 0 0 1 .382.146l4 4A.49.49 0 0 1 20 6.53Zm-5-3.528H6.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-12.5h-3.5a.5.5 0 0 1-.5-.5v-3.5Zm1 .707v2.293h2.293L16 3.708Zm1 12.782v.022A2.5 2.5 0 0 1 14.5 19h-5A2.5 2.5 0 0 1 7 16.5v-5A2.5 2.5 0 0 1 9.5 9h5a2.5 2.5 0 0 1 2.5 2.5v4.99Zm-1-.799V11.5a1.5 1.5 0 0 0-1.5-1.5h-5A1.5 1.5 0 0 0 8 11.5v2.793l1.146-1.147a.5.5 0 0 1 .708 0l2.745 2.746 1.677-.84a.5.5 0 0 1 .448 0l1.276.639Zm-.029 1.104-1.471-.736-1.776.888a.5.5 0 0 1-.578-.093L9.5 14.207l-1.5 1.5v.793A1.5 1.5 0 0 0 9.5 18h5a1.5 1.5 0 0 0 1.471-1.205ZM13 12v1h1v-1h-1Zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileImage);
const Memo = memo(ForwardRef);
export default Memo;
