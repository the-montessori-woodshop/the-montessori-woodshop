import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapePolygon = (
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
    <path d="M19 8a1 1 0 0 1-1-1v-.071L5.997 5.082A1 1 0 0 1 5 6v12a1 1 0 0 1 .997.918L18 17.07V17a1 1 0 0 1 1-1V8Zm1 0v8a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-.997-.918L6 19.93V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.071l12.003 1.847A1 1 0 0 1 19 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1ZM5 19.491V19H4v1h1v-.509Zm14-1.982V18h1v-1h-1v.509ZM5 4.492V4H4v1h1v-.491a.5.5 0 0 1 0-.017Zm14 2.016V7h1V6h-1v.491a.5.5 0 0 1 0 .017Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapePolygon);
const Memo = memo(ForwardRef);
export default Memo;
