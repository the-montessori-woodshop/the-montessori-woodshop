import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPhoneHoldingDouble = (
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
    <path d="M18 11.035V17a2 2 0 0 1-2 2c-.893 0-1.682-.24-2.352-.72a1.5 1.5 0 0 0-.874-.28.55.55 0 0 0-.537.37c-.11.332-.044.657.162.889l3.475 3.909a.5.5 0 0 1-.748.664L12 20.315l-3.126 3.517a.5.5 0 1 1-.748-.664l3.249-3.655a1.867 1.867 0 0 1-.067-1.51.54.54 0 0 0-.058-.003h-.025a1.5 1.5 0 0 0-.873.28c-.67.48-1.46.72-2.352.72H6.5a.5.5 0 0 1-.5-.5v-7.465A3.5 3.5 0 0 0 3 14.5v9a.5.5 0 1 1-1 0v-9a4.5 4.5 0 0 1 4-4.473V2.5A2.5 2.5 0 0 1 8.5 0h7A2.5 2.5 0 0 1 18 2.5v7.527a4.5 4.5 0 0 1 4 4.473v9a.5.5 0 1 1-1 0v-9a3.5 3.5 0 0 0-3-3.465Zm-1-.54V2.5A1.5 1.5 0 0 0 15.5 1h-7A1.5 1.5 0 0 0 7 2.5V18h1c.69 0 1.274-.178 1.77-.532A2.5 2.5 0 0 1 11.224 17h.025c.266 0 .524.068.752.196.224-.127.48-.196.748-.196a2.52 2.52 0 0 1 1.48.468c.496.354 1.08.532 1.77.532a1 1 0 0 0 1-1v-6.506ZM10.5 3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPhoneHoldingDouble);
const Memo = memo(ForwardRef);
export default Memo;
