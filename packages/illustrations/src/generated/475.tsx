import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg475 = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 900 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="transparent" d="M0 0h900v600H0z" />
    <rect
      x={760.823}
      y={242.292}
      width={251.83}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 760.823 242.292)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={797}
      y={276.949}
      width={323.872}
      height={207.463}
      rx={16}
      transform="rotate(-180 797 276.949)"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={760.823}
      y={190.388}
      width={78.817}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 760.823 190.388)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={664.705}
      y={190.388}
      width={155.712}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 664.705 190.388)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={543.8}
      y={138.426}
      width={34.362}
      height={34.362}
      rx={17.181}
      transform="rotate(-180 543.8 138.426)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={425.872}
      y={276.949}
      width={323.872}
      height={207.463}
      rx={16}
      transform="rotate(-180 425.872 276.949)"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={11}
    />
    <path
      d="m225.325 180.854 21.375 21.178 57-56.476"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={760.695}
      y={495.805}
      width={251.83}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 760.695 495.805)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={796.872}
      y={530.463}
      width={323.872}
      height={207.463}
      rx={16}
      transform="rotate(-180 796.872 530.463)"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={760.695}
      y={443.902}
      width={78.817}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 760.695 443.902)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={664.577}
      y={443.902}
      width={155.712}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 664.577 443.902)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={543.672}
      y={391.939}
      width={34.362}
      height={34.362}
      rx={17.181}
      transform="rotate(-180 543.672 391.939)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={390.848}
      y={495.857}
      width={251.83}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 390.848 495.857)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={427.025}
      y={530.515}
      width={323.872}
      height={207.463}
      rx={16}
      transform="rotate(-180 427.025 530.515)"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={390.848}
      y={443.954}
      width={78.817}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 390.848 443.954)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={294.73}
      y={443.954}
      width={155.712}
      height={34.603}
      rx={17.301}
      transform="rotate(-180 294.73 443.954)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={173.825}
      y={391.991}
      width={34.362}
      height={34.362}
      rx={17.181}
      transform="rotate(-180 173.825 391.991)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
  </svg>
);

const ForwardRef = forwardRef(Svg475);
const Memo = memo(ForwardRef);
export default Memo;
