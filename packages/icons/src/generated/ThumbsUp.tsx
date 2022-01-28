import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgThumbsUp = (
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
    <path d="M5 11.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm3.5-1.118.882-1.764C9.788 7.805 10 6.908 10 6v-.25c0-.966.784-1.75 1.75-1.75s1.776.732 1.872 1.694L13.952 9h3.338a2.5 2.5 0 0 1 2.488 2.749l-.6 6A2.5 2.5 0 0 1 16.69 20H10.5a2.492 2.492 0 0 1-1.732-.698c-.266.42-.735.698-1.268.698h-2A1.5 1.5 0 0 1 4 18.5v-7A1.5 1.5 0 0 1 5.5 10h2c.384 0 .735.144 1 .382Zm.5 1.236V17.5a1.5 1.5 0 0 0 1.5 1.5h6.19a1.5 1.5 0 0 0 1.493-1.35l.6-6A1.5 1.5 0 0 0 17.29 10H13.5a.5.5 0 0 1-.498-.45l-.375-3.756A.881.881 0 0 0 11.75 5a.75.75 0 0 0-.75.75V6a6.854 6.854 0 0 1-.724 3.065L9 11.618Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgThumbsUp);
const Memo = memo(ForwardRef);
export default Memo;
