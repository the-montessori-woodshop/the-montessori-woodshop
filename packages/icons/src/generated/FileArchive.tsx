import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFileArchive = (
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
    <path d="M9 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V7h-3.5a.5.5 0 0 1-.5-.5V3h-5v1.5a.5.5 0 0 1-1 0V3Zm11 3.528V19.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h8.972a.49.49 0 0 1 .382.146l4 4a.49.49 0 0 1 .146.382Zm-4-2.82V6h2.293L16 3.707ZM9 15.292V14.5a.5.5 0 1 1 1 0v.793l.146.146c.547.547.854 1.288.854 2.061a1.5 1.5 0 0 1-3 0c0-.773.307-1.514.854-2.06L9 15.292ZM9 17.5a.5.5 0 1 0 1 0c0-.478-.179-.938-.5-1.29-.321.352-.5.812-.5 1.29Zm0-11a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileArchive);
const Memo = memo(ForwardRef);
export default Memo;
