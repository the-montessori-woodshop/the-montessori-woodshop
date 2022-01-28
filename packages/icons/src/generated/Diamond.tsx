import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDiamond = (
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
    <path d="m17.09 9 .695-4.17L20.565 9H17.09Zm-.254 1h3.57l-6.785 7.858L16.836 10Zm-9.672 0 3.215 7.858L3.592 10h3.572ZM6.91 9H3.434l2.78-4.17L6.91 9Zm.89-.735L7.09 4H11L7.8 8.265ZM13 4h3.91l-.711 4.265L12.999 4ZM8.5 9 12 4.333 15.5 9h-7Zm7.255 1L12 19.18 8.245 10h7.51Zm6.16-.777-4-6c0-.002-.003-.003-.004-.005a.483.483 0 0 0-.163-.148c-.02-.011-.04-.014-.06-.023-.035-.014-.067-.034-.106-.04-.016-.003-.032.003-.05 0-.01 0-.02-.007-.032-.007h-11c-.012 0-.022.008-.034.008-.016.002-.031-.004-.048-.001-.04.006-.071.026-.106.04-.02.009-.041.012-.06.023a.474.474 0 0 0-.162.148l-.006.005-4 6a.5.5 0 0 0 .038.604l9.5 11c.02.025.05.036.075.056.022.017.04.036.066.049a.487.487 0 0 0 .474 0c.025-.013.044-.032.066-.05.025-.02.054-.03.076-.055l9.5-11a.499.499 0 0 0 .037-.604Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDiamond);
const Memo = memo(ForwardRef);
export default Memo;
