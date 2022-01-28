import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEye = (
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
    <path d="M2.034 11.82c2.134-5.505 8.326-8.237 13.83-6.103a10.69 10.69 0 0 1 6.102 6.102.5.5 0 0 1 0 .362c-2.134 5.504-8.326 8.236-13.83 6.102a10.69 10.69 0 0 1-6.102-6.102.5.5 0 0 1 0-.362Zm6.463 5.53c4.929 1.911 10.466-.482 12.465-5.35a9.69 9.69 0 0 0-5.46-5.35C10.575 4.739 5.038 7.132 3.039 12a9.69 9.69 0 0 0 5.46 5.35ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgEye);
const Memo = memo(ForwardRef);
export default Memo;
