import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg491 = (
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
    <path
      d="M196.46 465.494h166.755m18.79 58.717H548.76M249.305 136.68h81.029m31.707-60.158h207.765M126 381.529h152.663m339.306-244.744h119.183m-83.876 83.86h120.956m-598.91-.11h85.361m412.557 83.488h100.992m-584.415.262h70.866m310.39 161.209h126.828m-37.579-90.424H743.7"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={450.654} cy={288.707} r={160.247} fill="#6f381e" />
    <path
      d="M499.331 307.439 450.65 356.12l-48.681-48.681m48.681-83.731v128.519"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg491);
const Memo = memo(ForwardRef);
export default Memo;
