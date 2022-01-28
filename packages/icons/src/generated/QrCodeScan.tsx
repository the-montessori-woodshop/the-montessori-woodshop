import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgQrCodeScan = (
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
    <path d="M16.167 6a.167.167 0 0 0-.167.167v1.666c0 .092.075.167.167.167h1.666A.167.167 0 0 0 18 7.833V6.167A.167.167 0 0 0 17.833 6h-1.666ZM16 18v-.5a.5.5 0 1 1 1 0v.5h1v-.5a.5.5 0 1 1 1 0v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1a.5.5 0 1 1 1 0v.5h1Zm-3-7h.5a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1h.5v-1h-1.5a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1H13v1Zm5 1h-.5a.5.5 0 1 1 0-1h.5v-.5a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0V12Zm-5 2h-.5a.5.5 0 1 1 0-1h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 1 1 0-1H13v-1Zm3.167-9h1.666C18.478 5 19 5.522 19 6.167v1.666C19 8.478 18.478 9 17.833 9h-1.666A1.167 1.167 0 0 1 15 7.833V6.167C15 5.522 15.522 5 16.167 5Zm-10 0h1.666C8.478 5 9 5.522 9 6.167v1.666C9 8.478 8.478 9 7.833 9H6.167A1.167 1.167 0 0 1 5 7.833V6.167C5 5.522 5.522 5 6.167 5Zm0 1A.167.167 0 0 0 6 6.167v1.666c0 .092.075.167.167.167h1.666A.167.167 0 0 0 8 7.833V6.167A.167.167 0 0 0 7.833 6H6.167Zm0 9h1.666C8.478 15 9 15.522 9 16.167v1.666C9 18.478 8.478 19 7.833 19H6.167A1.167 1.167 0 0 1 5 17.833v-1.666C5 15.522 5.522 15 6.167 15Zm0 1a.167.167 0 0 0-.167.167v1.666c0 .092.075.167.167.167h1.666A.167.167 0 0 0 8 17.833v-1.666A.167.167 0 0 0 7.833 16H6.167ZM13 6h-2.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0V6Zm-2.5 2a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm-5 6a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1h-2Zm4 0a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1h-1Zm1.5 4v.5a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H11Zm-2-7h.5a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 1 1 0-1h1a.5.5 0 0 1 .5.5v.5Zm-4-.5a.5.5 0 1 1 1 0v1a.5.5 0 1 1-1 0v-1Zm10 0a.5.5 0 1 1 1 0v2a.5.5 0 1 1-1 0v-2Zm2 4.5v-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1H18v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 1 1 1 0v.5h1ZM3 6.5a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 0 3 4.5v2ZM17.5 3a.5.5 0 1 1 0-1h2A2.5 2.5 0 0 1 22 4.5v2a.5.5 0 1 1-1 0v-2A1.5 1.5 0 0 0 19.5 3h-2Zm-11 18a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 2 19.5v-2a.5.5 0 1 1 1 0v2A1.5 1.5 0 0 0 4.5 21h2ZM21 17.5a.5.5 0 1 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 1 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5v-2Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgQrCodeScan);
const Memo = memo(ForwardRef);
export default Memo;
