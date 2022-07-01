import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUserJourney = (
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
    <path d="M13.034 17.911A2.5 2.5 0 0 0 15.5 20h1a3.5 3.5 0 0 0 3.5-3.5V5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v11.5a4.5 4.5 0 0 1-4.5 4.5h-1a3.5 3.5 0 0 1-3.465-3H12a6 6 0 0 1-1.024-11.913A3.5 3.5 0 0 0 4 6.5V18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1V6.5a4.5 4.5 0 0 1 8.973-.5H12a6 6 0 0 1 1.034 11.911Zm2.875-2.793a1.5 1.5 0 0 0-.637-.772l-1.52-.911A2.986 2.986 0 0 1 12 14c-.654 0-1.26-.21-1.753-.565l-1.519.911a1.5 1.5 0 0 0-.637.772A4.99 4.99 0 0 0 12 17a4.99 4.99 0 0 0 3.909-1.882Zm.606-.966a5 5 0 1 0-9.029 0 2.5 2.5 0 0 1 .728-.663l1.314-.789a3 3 0 1 1 4.944 0l1.314.789a2.5 2.5 0 0 1 .729.663ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-9 6v1h1v-1H3ZM20 3v1h1V3h-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserJourney);
const Memo = memo(ForwardRef);
export default Memo;
