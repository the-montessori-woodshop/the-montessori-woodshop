import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEditSquareFeather = (
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
    <path d="M20.994 3.424a9.148 9.148 0 0 1-.687 5.282.5.5 0 0 1-.456.294h-1.144l.638.638a.5.5 0 0 1 .053.644 9.19 9.19 0 0 1-8.698 3.753c-.814.642-1.542.965-2.2.965a.5.5 0 1 1 0-1c.39 0 .884-.22 1.47-.664a9.19 9.19 0 0 1 10.606-10.33.498.498 0 0 1 .418.418Zm-.882 1.17-2.258 2.26a.5.5 0 0 1-.708-.708l2.258-2.257a8.19 8.19 0 0 0-8.51 8.634c.38-.375.788-.823 1.222-1.343a.5.5 0 1 1 .768.64c-.406.487-.795.92-1.167 1.296a8.19 8.19 0 0 0 6.613-3.079l-1.184-1.183A.5.5 0 0 1 17.5 8h2.022a8.13 8.13 0 0 0 .59-3.405ZM20 12.5a.5.5 0 1 1 1 0v6a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h6a.5.5 0 1 1 0 1h-6A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEditSquareFeather);
const Memo = memo(ForwardRef);
export default Memo;
