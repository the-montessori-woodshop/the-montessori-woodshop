import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgShapeOctagonal = (
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
    <path d="M19.99 18.546a.559.559 0 0 1-.031.133.58.58 0 0 1-.037.075c-.009.015-.012.032-.023.046-.018.024-.043.038-.065.057-.012.013-.02.032-.035.043l-4 3c-.008.006-.02.004-.03.01a.488.488 0 0 1-.27.09h-7a.487.487 0 0 1-.269-.09c-.008-.006-.021-.004-.03-.01l-4-3c-.014-.011-.022-.03-.035-.043-.021-.019-.046-.033-.064-.057-.011-.014-.014-.031-.022-.046a.58.58 0 0 1-.037-.075.559.559 0 0 1-.031-.133c-.002-.016-.012-.029-.012-.046v-13c0-.017.01-.03.012-.046a.559.559 0 0 1 .03-.133.58.58 0 0 1 .037-.075c.008-.015.011-.032.022-.046.019-.024.044-.038.065-.057.013-.013.02-.032.035-.043l4-3a.496.496 0 0 1 .3-.1h7c.108 0 .213.035.3.1l4 3c.014.011.021.03.035.043.021.019.046.033.064.057.011.014.014.031.023.046a.58.58 0 0 1 .037.075.559.559 0 0 1 .03.133c.002.016.01.029.01.046v13c0 .017-.008.03-.01.046ZM8.666 3 5.333 5.5 8.665 8h6.668l3.332-2.5L15.334 3H8.666Zm10 15.5-2.668-2v4l2.667-2Zm-2.668-3.25 3 2.25v-11l-3 2.25v6.5ZM9 15h6V9H9v6Zm0 6h6v-5H9v5Zm-1-4.5-2.665 2L8 20.5v-4Zm-3-10v11l3-2.25v-6.5L5 6.5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgShapeOctagonal);
const Memo = memo(ForwardRef);
export default Memo;
