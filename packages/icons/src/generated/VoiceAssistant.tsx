import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgVoiceAssistant = (
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
    <path d="M3 10.511V15.5c0 1.815 4.003 3.5 9 3.5s9-1.685 9-3.5v-4.989C19.375 12.024 15.943 13 12 13c-3.943 0-7.375-.976-9-2.489ZM2 8.5C2 5.896 6.504 4 12 4s10 1.896 10 4.5v7c0 2.604-4.504 4.5-10 4.5S2 18.104 2 15.5v-7ZM12 12c4.997 0 9-1.685 9-3.5S16.997 5 12 5 3 6.685 3 8.5 7.003 12 12 12Zm-6.681 4.883a.5.5 0 0 1 .367-.93c.837.33 1.82.594 2.897.774a.5.5 0 0 1-.165.986c-1.144-.19-2.194-.472-3.1-.83ZM8 10c-1.072 0-2-.619-2-1.5S6.928 7 8 7s2 .619 2 1.5S9.072 10 8 10Zm0-1c.585 0 1-.277 1-.5 0-.223-.415-.5-1-.5s-1 .277-1 .5c0 .223.415.5 1 .5Zm8 1c-1.072 0-2-.619-2-1.5S14.928 7 16 7s2 .619 2 1.5-.928 1.5-2 1.5Zm0-1c.585 0 1-.277 1-.5 0-.223-.415-.5-1-.5s-1 .277-1 .5c0 .223.415.5 1 .5Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgVoiceAssistant);
const Memo = memo(ForwardRef);
export default Memo;
