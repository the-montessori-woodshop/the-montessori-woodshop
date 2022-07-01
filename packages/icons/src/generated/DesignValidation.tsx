import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDesignValidation = (
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
    <path d="M8.596 20.303 6.5 18.207l-2.096 2.096c.584.438 1.31.697 2.096.697s1.512-.26 2.096-.697Zm.707-.707c.438-.584.697-1.31.697-2.096s-.26-1.512-.697-2.096L7.207 17.5l2.096 2.096Zm-5.606-4.192A3.484 3.484 0 0 0 3 17.5c0 .786.26 1.512.697 2.096L5.793 17.5l-2.096-2.096Zm.707-.707L6.5 16.793l2.096-2.096A3.484 3.484 0 0 0 6.5 14c-.786 0-1.512.26-2.096.697ZM6.5 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.11-4.812a.5.5 0 1 1 .78.624l-2 2.5a.5.5 0 0 1-.744.042l-1-1a.5.5 0 1 1 .708-.708l.605.605 1.65-2.063ZM13.5 6a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Zm-7 14a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm7-5a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1h-8Zm0 2a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDesignValidation);
const Memo = memo(ForwardRef);
export default Memo;
