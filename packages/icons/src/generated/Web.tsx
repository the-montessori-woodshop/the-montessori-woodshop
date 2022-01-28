import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgWeb = (
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
    <path d="M3.512 15h4.66A25.567 25.567 0 0 1 8 12c0-1.044.06-2.052.172-3h-4.66A8.985 8.985 0 0 0 3 12c0 1.052.18 2.062.512 3Zm.424 1a9.017 9.017 0 0 0 6.092 4.783c-.78-1.06-1.376-2.746-1.714-4.783H3.936Zm16.552-1A8.985 8.985 0 0 0 21 12c0-1.052-.18-2.062-.512-3h-4.66c.113.948.172 1.956.172 3s-.06 2.052-.172 3h4.66Zm-.424 1h-4.378c-.338 2.037-.935 3.723-1.714 4.783A9.017 9.017 0 0 0 20.064 16Zm-10.88-1h5.632c.118-.938.184-1.947.184-3s-.066-2.062-.184-3H9.184A24.046 24.046 0 0 0 9 12c0 1.053.066 2.062.184 3Zm.151 1c.522 2.968 1.583 5 2.665 5s2.143-2.032 2.665-5h-5.33Zm-5.4-8h4.379c.338-2.037.935-3.723 1.714-4.783A9.017 9.017 0 0 0 3.936 8Zm16.13 0a9.017 9.017 0 0 0-6.093-4.783c.78 1.06 1.376 2.746 1.714 4.783h4.378ZM9.334 8h5.33C14.143 5.032 13.082 3 12 3S9.857 5.032 9.335 8ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgWeb);
const Memo = memo(ForwardRef);
export default Memo;
