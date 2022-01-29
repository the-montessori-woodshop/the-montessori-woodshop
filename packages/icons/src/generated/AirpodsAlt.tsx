import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAirpodsAlt = (
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
    <path d="M6 11c-1.995 0-3-2.01-3-4 0-1.99 1.005-4 3-4 3.184 0 5 3.464 5 6.489V19.5a1.5 1.5 0 0 1-3 0v-8.011c0-.381-.143-.738-.39-1.01-.427.343-.968.521-1.61.521Zm3 .489V19.5a.5.5 0 1 0 1 0V9.489C10 6.943 8.457 4 6 4 4.745 4 4 5.49 4 7s.745 3 2 3c.78 0 1.26-.359 1.526-1.158.209-.628 1.151-.321.95.31l-.187.59c.45.46.711 1.082.711 1.747ZM6 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm10 3.489V19.5a1.5 1.5 0 0 1-3 0V9.489C13 6.464 14.816 3 18 3c1.995 0 3 2.01 3 4 0 1.99-1.005 4-3 4-.642 0-1.183-.178-1.61-.521-.247.272-.39.629-.39 1.01Zm-.476-2.337c-.201-.631.741-.938.95-.31.267.8.745 1.158 1.526 1.158 1.255 0 2-1.49 2-3s-.745-3-2-3c-2.457 0-4 2.943-4 5.489V19.5a.5.5 0 1 0 1 0v-8.011c0-.665.261-1.287.711-1.747l-.187-.59ZM18 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgAirpodsAlt);
const Memo = memo(ForwardRef);
export default Memo;
