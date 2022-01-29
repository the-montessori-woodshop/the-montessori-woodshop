import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgApple = (
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
    <path d="M15.5 21c.689 0 1.883-1.458 3.37-4.361C17.635 15.604 17 14.384 17 13c0-1.356.609-2.555 1.797-3.576C17.963 8.464 17.037 8 16 8c-1.094 0-1.941.149-2.541.437a2.5 2.5 0 0 1-2.034.058C10.629 8.167 9.654 8 8.5 8 6.434 8 5 10.086 5 13c0 2.711 2.833 8 4 8 .429 0 .918-.158 1.466-.486a3.601 3.601 0 0 1 3.828.081c.416.273.815.405 1.206.405Zm4.3-4.9a.5.5 0 0 1 .147.624C18.187 20.246 16.783 22 15.5 22c-.597 0-1.184-.193-1.756-.569a2.6 2.6 0 0 0-2.764-.06C10.287 21.786 9.627 22 9 22c-1.887 0-5-5.811-5-9 0-3.404 1.785-6 4.5-6 1.277 0 2.38.188 3.306.57a1.5 1.5 0 0 0 1.22-.034C13.778 7.175 14.769 7 16 7c1.502 0 2.811.748 3.9 2.2a.5.5 0 0 1-.1.7c-1.215.911-1.8 1.935-1.8 3.1s.585 2.189 1.8 3.1ZM12.5 6a.5.5 0 0 1-.5-.5A3.5 3.5 0 0 1 15.5 2a.5.5 0 0 1 .5.5A3.5 3.5 0 0 1 12.5 6Zm2.437-2.936a2.503 2.503 0 0 0-1.873 1.872 2.503 2.503 0 0 0 1.873-1.872Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgApple);
const Memo = memo(ForwardRef);
export default Memo;
