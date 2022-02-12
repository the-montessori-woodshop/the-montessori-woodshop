import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDuplicate = (
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
    <path d="M8 7V5.501a2.5 2.5 0 0 1 2.5-2.5h5.972a.49.49 0 0 1 .382.146l3 3A.49.49 0 0 1 20 6.53v7.972a2.5 2.5 0 0 1-2.5 2.5H16V18.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 18.5v-9A2.5 2.5 0 0 1 6.5 7H8Zm0 1H6.5A1.5 1.5 0 0 0 5 9.5v9A1.5 1.5 0 0 0 6.5 20h7a1.5 1.5 0 0 0 1.5-1.5v-1.499h-2.5a.5.5 0 1 1 0-1h5a1.5 1.5 0 0 0 1.5-1.5v-7.5h-2.5a.5.5 0 0 1-.5-.5v-2.5h-5.5a1.5 1.5 0 0 0-1.5 1.5V10.5a.5.5 0 0 1-1 0V8Zm9-1.999h1.293L17 4.708v1.293ZM13.293 10H11.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .5.5v3a.5.5 0 1 1-1 0v-1.793l-5.146 5.147a.5.5 0 0 1-.708-.708L13.293 10Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDuplicate);
const Memo = memo(ForwardRef);
export default Memo;
