import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWonSign = (
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
    <path d="M11.306 10h1.388l-.27-1h-.849l-.269 1Zm-.269 1-2.054 7.63c-.136.503-.853.49-.97-.018L6.256 11H3.5a.5.5 0 1 1 0-1h2.525l-.23-1H3.5a.5.5 0 0 1 0-1h2.064l-.551-2.388a.5.5 0 1 1 .974-.224L6.59 8h4.22l.707-2.63c.133-.493.833-.493.966 0L13.19 8h4.219l.603-2.612a.5.5 0 0 1 .974.224L18.437 8H20.5a.5.5 0 1 1 0 1h-2.295l-.23 1H20.5a.5.5 0 1 1 0 1h-2.756l-1.757 7.612c-.117.508-.834.52-.97.018L12.963 11h-1.926Zm-3.985-1h3.219l.269-1H6.82l.232 1Zm.23 1 1.255 5.438L10.001 11H7.282Zm6.447-1h3.22l.23-1H13.46l.27 1Zm.27 1 1.464 5.438L16.718 11h-2.72Zm-2.154-3h.31L12 7.423 11.845 8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWonSign);
const Memo = memo(ForwardRef);
export default Memo;
