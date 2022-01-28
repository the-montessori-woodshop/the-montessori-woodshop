import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEyeDropper = (
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
    <path d="M15.793 10.5 13.5 8.207 12.207 9.5l.647.646a.5.5 0 0 1-.708.708l-.646-.647-1.293 1.293.647.646a.5.5 0 0 1-.708.708l-.646-.647L8.207 13.5l.647.646a.5.5 0 0 1-.708.708l-.646-.647L6.207 15.5l.647.646a.5.5 0 0 1-.708.708l-.645-.646A1.914 1.914 0 0 0 5 17.5a.5.5 0 0 1-.146.354l-.293.292C4.2 18.506 4 18.992 4 19.5a.5.5 0 0 0 .5.5c.508 0 .995-.202 1.354-.56l.292-.294A.5.5 0 0 1 6.5 19c.508 0 .995-.202 1.354-.56l7.939-7.94Zm.754.66L8.56 19.146a2.914 2.914 0 0 1-1.846.846l-.154.154A2.914 2.914 0 0 1 4.5 21 1.5 1.5 0 0 1 3 19.5c0-.773.307-1.514.854-2.06l.154-.155c.051-.694.35-1.35.846-1.846l7.986-7.986a1.915 1.915 0 0 1 2.613-2.613l1.072-1.072a2.622 2.622 0 0 1 3.708 3.707L19.16 8.547a1.915 1.915 0 0 1-2.614 2.613ZM18.5 7.793l1.025-1.025a1.621 1.621 0 1 0-2.293-2.293L16.207 5.5 18.5 7.793Zm-4.646-1.94a.914.914 0 0 0 0 1.293l3 3a.914.914 0 1 0 1.292-1.292l-3-3a.914.914 0 0 0-1.292 0Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEyeDropper);
const Memo = memo(ForwardRef);
export default Memo;
