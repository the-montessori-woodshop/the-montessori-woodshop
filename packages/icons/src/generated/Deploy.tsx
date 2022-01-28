import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDeploy = (
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
    <path d="M8.953 17.985A2.5 2.5 0 0 1 6.5 20h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1 2.015-2.453l.012-.343c.02-.58.08-1.148.177-1.704H2.5a.5.5 0 0 1-.464-.686l2-5A.5.5 0 0 1 4.5 7H9c.025 0 .05.002.075.006A12.302 12.302 0 0 1 20.59 3.008a.5.5 0 0 1 .4.401 12.32 12.32 0 0 1-3.996 11.518A.504.504 0 0 1 17 15v4.5a.5.5 0 0 1-.314.464l-5 2A.5.5 0 0 1 11 21.5v-3.705c-.563.099-1.133.158-1.704.178l-.343.012Zm-.966-.29-1.682-1.682A1.5 1.5 0 0 0 5 17.5V19h1.5a1.5 1.5 0 0 0 1.487-1.305ZM12 17.577v3.184l4-1.6v-3.448a12.254 12.254 0 0 1-4 1.864ZM6.42 12A12.26 12.26 0 0 1 8.29 8h-3.45l-1.6 4H6.42Zm2.28 4.993.561-.02c.562-.019 1.12-.08 1.673-.182 6.036-1.118 10.062-6.831 9.132-12.857-.44-.068-.884-.11-1.33-.125-6.251-.216-11.494 4.678-11.71 10.93l-.019.561L8.7 16.993ZM14 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDeploy);
const Memo = memo(ForwardRef);
export default Memo;
