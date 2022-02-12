import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSaleBadge = (
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
    <path d="M9.544 21.934a.5.5 0 0 1-.691-.203l-1.316-2.526-2.819-.16a.5.5 0 0 1-.47-.542l.245-2.847-2.288-1.676a.5.5 0 0 1-.102-.707l1.73-2.262-1.03-2.662a.5.5 0 0 1 .298-.651l2.661-.956.559-2.8a.5.5 0 0 1 .605-.39l2.748.65 1.965-2.048a.5.5 0 0 1 .722 0L14.326 4.2l2.748-.648a.5.5 0 0 1 .605.388l.559 2.8 2.661.957a.5.5 0 0 1 .298.65l-1.03 2.663 1.73 2.262a.5.5 0 0 1-.102.707l-2.288 1.676.245 2.847a.5.5 0 0 1-.47.542l-2.819.16-1.316 2.526a.5.5 0 0 1-.691.203L12 20.529l-2.456 1.405ZM9.5 20.808l2.253-1.289a.5.5 0 0 1 .496 0l2.253 1.289 1.207-2.317a.5.5 0 0 1 .415-.268l2.588-.147-.225-2.614a.5.5 0 0 1 .203-.447l2.104-1.54-1.59-2.079a.5.5 0 0 1-.07-.484l.946-2.446-2.445-.879a.5.5 0 0 1-.322-.373l-.512-2.57-2.522.596a.5.5 0 0 1-.476-.14L12 3.222 10.198 5.1a.5.5 0 0 1-.476.14L7.2 4.645l-.512 2.57a.5.5 0 0 1-.322.372l-2.445.879.945 2.446a.5.5 0 0 1-.069.484l-1.59 2.079 2.104 1.54a.5.5 0 0 1 .203.447l-.225 2.614 2.588.147a.5.5 0 0 1 .415.268L9.5 20.808Zm4.594-12.599a.5.5 0 1 1 .814.582l-5 7a.5.5 0 0 1-.814-.582l5-7ZM9 9v1h1V9H9Zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm5 6v1h1v-1h-1Zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgSaleBadge);
const Memo = memo(ForwardRef);
export default Memo;
