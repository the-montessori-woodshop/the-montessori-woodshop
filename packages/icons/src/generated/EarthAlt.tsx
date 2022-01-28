import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEarthAlt = (
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
    <path d="M10.735 3.088A9.002 9.002 0 0 0 12 21a9 9 0 0 0 8.777-11H19v.5a.5.5 0 0 1-.5.5H17v.293l.854.853a.5.5 0 0 1 0 .708L16 14.707V16.5a.5.5 0 0 1-.053.224l-1 2-.093.13-1 1a.5.5 0 0 1-.708 0l-1-1A.5.5 0 0 1 12 18.5v-2.793l-.854-.853A.5.5 0 0 1 11 14.5v-.793l-.796-.796-1.928-.964-.13-.093-1-1a.5.5 0 0 1 0-.708L8 9.293V8.5a.5.5 0 0 1 .5-.5h1.793l.853-.854a.5.5 0 0 1 .708 0l.942.943L14.618 9h.675L16 8.293v-.586l-.854-.853A.5.5 0 0 1 15 6.5V6h-1v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146L11.293 6H10.5a.5.5 0 0 1-.354-.854L11 4.293v-.675l-.265-.53Zm1.075-.086.137.274A.5.5 0 0 1 12 3.5v1a.5.5 0 0 1-.146.354l-.179.178a.5.5 0 0 1 .179.114l.853.854H13v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.793l.854.853A.5.5 0 0 1 17 7.5v1a.5.5 0 0 1-.146.354l-1 1A.5.5 0 0 1 15.5 10h-1a.5.5 0 0 1-.224-.053l-2-1-.13-.093-.646-.647-.646.647A.5.5 0 0 1 10.5 9H9v.5a.5.5 0 0 1-.146.354l-.647.646.59.59 1.927.963.13.093 1 1A.5.5 0 0 1 12 13.5v.793l.854.853A.5.5 0 0 1 13 15.5v2.793l.5.5.59-.59.91-1.821V14.5a.5.5 0 0 1 .146-.354l1.647-1.646-.647-.646A.5.5 0 0 1 16 11.5v-1a.5.5 0 0 1 .5-.5H18v-.5a.5.5 0 0 1 .5-.5h1.988a9.004 9.004 0 0 0-8.678-5.998ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEarthAlt);
const Memo = memo(ForwardRef);
export default Memo;
