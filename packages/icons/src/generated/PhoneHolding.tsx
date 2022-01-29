import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgPhoneHolding = (
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
    <path d="M16 10.027a4.5 4.5 0 0 1 4 4.473v9a.5.5 0 1 1-1 0v-9a3.5 3.5 0 0 0-3-3.465V17a2 2 0 0 1-2 2c-.893 0-1.682-.24-2.352-.72a1.5 1.5 0 0 0-.874-.28.55.55 0 0 0-.537.37c-.11.332-.044.657.162.889l3.475 3.909a.5.5 0 0 1-.748.664L10.6 20.99a.502.502 0 0 1-.1.01h-4A2.5 2.5 0 0 1 4 18.5v-16A2.5 2.5 0 0 1 6.5 0h7A2.5 2.5 0 0 1 16 2.5v7.527Zm-6.348 9.896a1.867 1.867 0 0 1-.376-1.831c.222-.668.81-1.092 1.474-1.092a2.52 2.52 0 0 1 1.48.468c.496.354 1.08.532 1.77.532a1 1 0 0 0 1-1V2.5A1.5 1.5 0 0 0 13.5 1h-7A1.5 1.5 0 0 0 5 2.5v16A1.5 1.5 0 0 0 6.5 20h3.22l-.068-.077ZM8.5 3a.5.5 0 0 1 0-1h3a.5.5 0 1 1 0 1h-3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgPhoneHolding);
const Memo = memo(ForwardRef);
export default Memo;
