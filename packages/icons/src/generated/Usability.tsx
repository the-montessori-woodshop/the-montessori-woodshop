import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUsability = (
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
    <path d="M16 10.027a4.5 4.5 0 0 1 4 4.473v9a.5.5 0 1 1-1 0v-9a3.5 3.5 0 0 0-3-3.465V17a2 2 0 0 1-2 2c-.893 0-1.682-.24-2.352-.72a1.5 1.5 0 0 0-.874-.28.55.55 0 0 0-.537.37c-.11.332-.044.657.162.889l3.475 3.909a.5.5 0 0 1-.748.664L10.6 20.99a.502.502 0 0 1-.1.01h-4A2.5 2.5 0 0 1 4 18.5v-16A2.5 2.5 0 0 1 6.5 0h7A2.5 2.5 0 0 1 16 2.5v7.527Zm-6.348 9.896a1.867 1.867 0 0 1-.376-1.831c.222-.668.81-1.092 1.474-1.092a2.52 2.52 0 0 1 1.48.468c.496.354 1.08.532 1.77.532a1 1 0 0 0 1-1V2.5A1.5 1.5 0 0 0 13.5 1h-7A1.5 1.5 0 0 0 5 2.5v16A1.5 1.5 0 0 0 6.5 20h3.22l-.068-.077ZM8.5 3a.5.5 0 0 1 0-1h3a.5.5 0 1 1 0 1h-3Zm3 4c1.458 0 2.5.868 2.5 2.5 0 1.56-1.279 3.02-3.752 4.434a.5.5 0 0 1-.496 0C7.279 12.521 6 11.06 6 9.5 6 7.868 7.042 7 8.5 7c.6 0 1.107.216 1.5.627.393-.41.9-.627 1.5-.627ZM13 9.5c0-1.035-.558-1.5-1.5-1.5-.47 0-.801.22-1.053.724a.5.5 0 0 1-.894 0C9.3 8.22 8.97 8 8.5 8 7.558 8 7 8.465 7 9.5c0 1.065.975 2.22 3 3.421 2.025-1.201 3-2.356 3-3.421Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgUsability);
const Memo = memo(ForwardRef);
export default Memo;
