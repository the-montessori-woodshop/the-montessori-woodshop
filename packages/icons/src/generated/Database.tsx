import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDatabase = (
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
    <path d="M3 7.39V10c0 .344.854.875 2.41 1.284C7.135 11.738 9.487 12 12 12s4.865-.262 6.59-.716c1.556-.41 2.41-.94 2.41-1.284V7.39C19.386 8.404 15.983 9 12 9c-3.983 0-7.386-.597-9-1.61ZM2 6c0-1.833 4.434-3 10-3s10 1.167 10 3v12c0 1.833-4.434 3-10 3S2 19.833 2 18V6Zm19 5.39C19.386 12.404 15.983 13 12 13c-3.983 0-7.386-.597-9-1.61V14c0 .344.854.875 2.41 1.284C7.135 15.738 9.487 16 12 16s4.865-.262 6.59-.716c1.556-.41 2.41-.94 2.41-1.284v-2.61Zm0 4C19.386 16.404 15.983 17 12 17c-3.983 0-7.386-.597-9-1.61V18c0 .344.854.875 2.41 1.284C7.135 19.738 9.487 20 12 20s4.865-.262 6.59-.716c1.556-.41 2.41-.94 2.41-1.284v-2.61ZM12 8c2.513 0 4.865-.262 6.59-.716C20.146 6.874 21 6.344 21 6c0-.344-.854-.875-2.41-1.284C16.865 4.262 14.513 4 12 4s-4.865.262-6.59.716C3.854 5.126 3 5.656 3 6c0 .344.854.875 2.41 1.284C7.135 7.738 9.487 8 12 8Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDatabase);
const Memo = memo(ForwardRef);
export default Memo;
