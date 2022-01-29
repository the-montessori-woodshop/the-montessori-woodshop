import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgText = (
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
    <path d="M5.151 12H9.85L7.5 5.893 5.151 12Zm-.385 1-1.8 4.68a.5.5 0 0 1-.933-.36l5-13a.5.5 0 0 1 .934 0l5 13a.5.5 0 0 1-.934.36l-1.8-4.68H4.767Zm16.191-2.203c.028.062.043.13.043.203 0 .068-.002.135-.007.2.005.098.007.198.007.3v5a.5.5 0 0 0 .5.5.5.5 0 1 1 0 1 1.499 1.499 0 0 1-1.268-.698c-.449.432-1.06.698-1.732.698h-2c-1.921 0-3-.863-3-2.5 0-1.695.988-2.215 3.67-2.731l.207-.04c.445-.086.725-.145 1.002-.214 1.038-.26 1.537-.695 1.611-1.339C19.895 9.68 19.112 9 17.5 9c-1.756 0-2.5.496-2.5 1.5a.5.5 0 1 1-1 0C14 8.838 15.256 8 17.5 8c2.03 0 3.222.973 3.457 2.797ZM20 15.5v-2.603c-.366.253-.828.45-1.379.588-.298.075-.592.137-1.054.226l-.209.04c-2.21.425-2.858.766-2.858 1.749 0 1.03.588 1.5 2 1.5h2a1.5 1.5 0 0 0 1.5-1.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgText);
const Memo = memo(ForwardRef);
export default Memo;
