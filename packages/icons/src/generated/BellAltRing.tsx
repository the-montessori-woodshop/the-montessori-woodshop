import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBellAltRing = (
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
    <path d="M8.22 18.487a1.899 1.899 0 0 1-2.647-.037 1.93 1.93 0 0 1-.058-2.668l-1.65-1.65a2.9 2.9 0 0 1 .675-4.604L7.2 8.095l2.947-2.948a6.159 6.159 0 0 1 7.057-1.18l.332-.331a2 2 0 1 1 2.828 2.828l-.33.331a6.17 6.17 0 0 1-1.173 7.065l-2.954 2.964-1.4 2.643a2.9 2.9 0 0 1-4.613.694L8.22 18.487Zm-.707-.707-1.29-1.29a.93.93 0 0 0 .058 1.253c.338.339.879.35 1.232.037Zm11.99-11.87.154-.153a1 1 0 0 0-1.414-1.414l-.154.153a6.2 6.2 0 0 1 1.415 1.415Zm-8.649-.056-2.999 3-.116.086-2.725 1.468a1.9 1.9 0 0 0-.442 3.016l6.029 6.03a1.9 1.9 0 0 0 3.023-.455l1.434-2.709.088-.119 3.007-3.017a5.167 5.167 0 0 0-.007-7.3 5.156 5.156 0 0 0-7.292 0ZM7.947 4.276a.5.5 0 0 1-.894.448l-1-2a.5.5 0 0 1 .894-.448l1 2ZM5.724 6.053a.5.5 0 0 1-.448.894l-2-1a.5.5 0 0 1 .448-.894l2 1Zm12.552 11.894a.5.5 0 0 1 .448-.894l2 1a.5.5 0 0 1-.448.894l-2-1Zm-2.223 1.777a.5.5 0 0 1 .894-.448l1 2a.5.5 0 0 1-.894.448l-1-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBellAltRing);
const Memo = memo(ForwardRef);
export default Memo;
