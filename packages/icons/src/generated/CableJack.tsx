import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCableJack = (
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
    <path d="M13 19h-2v2.5a.5.5 0 1 1-1 0v-2.585A1.5 1.5 0 0 1 9 17.5v-4a1.5 1.5 0 0 1 1-1.415V6a.5.5 0 0 1 .053-.224L10.44 5l-.388-.776a.5.5 0 0 1 .093-.578l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 .093.578L13.56 5l.388.776A.5.5 0 0 1 14 6v6.085a1.5 1.5 0 0 1 1 1.415v4a1.5 1.5 0 0 1-1 1.415V21.5a.5.5 0 1 1-1 0V19Zm-.059-13h-1.882L11 6.118V7h2v-.882L12.941 6ZM12.5 5a.5.5 0 0 1 .053-.224l.339-.677L12 3.207l-.892.892.34.677A.5.5 0 0 1 11.5 5h1ZM14 15h-4v1h4v-1Zm0-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.5h4Zm0 3h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V17Zm-1-9h-2v4h2V8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgCableJack);
const Memo = memo(ForwardRef);
export default Memo;
