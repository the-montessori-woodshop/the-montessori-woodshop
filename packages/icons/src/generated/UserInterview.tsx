import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserInterview = (
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
    <path d="m13.078 12.94 3.457 1.572A2.5 2.5 0 0 1 18 16.788v.712a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 17.5v-.712a2.5 2.5 0 0 1 1.465-2.276l3.457-1.571a5 5 0 1 1 6.156 0Zm-5.117.627L3.88 15.422A1.5 1.5 0 0 0 3 16.788v.712A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5v-.712a1.5 1.5 0 0 0-.88-1.366l-4.081-1.855A4.982 4.982 0 0 1 10 14a4.982 4.982 0 0 1-2.039-.433ZM10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.143-6.15a.5.5 0 0 1 .714-.7 4.07 4.07 0 0 1 0 5.7.5.5 0 0 1-.714-.7 3.07 3.07 0 0 0 0-4.3Zm2.022-1.979a.5.5 0 1 1 .67-.742 6.558 6.558 0 0 1 0 9.742.5.5 0 1 1-.67-.742 5.558 5.558 0 0 0 0-8.258Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserInterview);
const Memo = memo(ForwardRef);
export default Memo;
