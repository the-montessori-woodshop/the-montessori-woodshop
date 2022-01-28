import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgMagicWand = (
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
    <path d="M15.515 6.357a.503.503 0 0 1-.058.07c-.59.59-.59 1.547.002 2.139.542.54 1.394.582 1.983.125l.713-.715a2.502 2.502 0 0 1-2.131-2.128l-.51.51Zm-1.477 1.478-9.581 9.592c-.59.59-.59 1.547.002 2.139.588.587 1.54.586 2.128-.003l9.57-9.585a2.509 2.509 0 0 1-2.118-2.143Zm4.325 1.349a.502.502 0 0 1-.069.086c-.059.059-.12.115-.184.167L7.294 20.27c-.977.979-2.562.98-3.542.003a2.513 2.513 0 0 1-.003-3.553L16.717 3.74a.503.503 0 0 1 .063-.055 2.5 2.5 0 0 1 3.543 3.525.503.503 0 0 1-.054.065l-1.906 1.909ZM17 16h.5a.5.5 0 1 1 0 1H17v.562a.5.5 0 1 1-1 0V17h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5ZM10 4v-.5a.5.5 0 1 1 1 0V4h.5a.5.5 0 1 1 0 1H11v.5a.5.5 0 1 1-1 0V5h-.5a.5.5 0 0 1 0-1h.5Zm12 8h.5a.5.5 0 1 1 0 1H22v.5a.5.5 0 1 1-1 0V13h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v.5Zm-3.5-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgMagicWand);
const Memo = memo(ForwardRef);
export default Memo;
