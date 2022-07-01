import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFaceId = (
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
    <path d="M7.5 3a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 4 5.5v2.031a.5.5 0 1 1-1 0V5.5A2.5 2.5 0 0 1 5.5 3h2Zm9 1a.5.5 0 1 1 0-1h2A2.5 2.5 0 0 1 21 5.5v2a.5.5 0 1 1-1 0v-2A1.5 1.5 0 0 0 18.5 4h-2ZM20 16.5a.5.5 0 1 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 1 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5v-2Zm-17 0a.5.5 0 1 1 1 0v2A1.5 1.5 0 0 0 5.5 20h2a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 3 18.5v-2Zm5-8a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm8 0a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm-4 0a.5.5 0 1 1 1 0v4a1.5 1.5 0 0 1-1.5 1.5.5.5 0 1 1 0-1 .5.5 0 0 0 .5-.5v-4Zm-3.9 7.3a.5.5 0 0 1 .8-.6c.911 1.215 1.935 1.8 3.1 1.8s2.189-.585 3.1-1.8a.5.5 0 0 1 .8.6C14.811 17.252 13.502 18 12 18c-1.502 0-2.811-.748-3.9-2.2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceId);
const Memo = memo(ForwardRef);
export default Memo;
