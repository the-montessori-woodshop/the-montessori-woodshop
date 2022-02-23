import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg357 = (
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
      d="m715.273 549.364-99.783-99.783"
      stroke="#6f381e"
      strokeWidth={29.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={446.36} cy={283.027} r={184.561} fill="#6f381e" />
    <path
      d="m327.421 325.798 98.433-64.449 49.216 48.875m0 .341 98.432-65.622"
      stroke="#fff"
      strokeWidth={29.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M217.138 268.725c6.352-97.535 72.791-180.79 166.486-208.623 93.696-27.834 194.812 5.645 253.383 83.894m46.305 155.909c-6.352 97.536-72.79 180.79-166.486 208.624-93.695 27.834-194.811-5.646-253.383-83.895"
      stroke="#6f381e"
      strokeWidth={29.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M166.132 393.833c12.122 0 6.45-19.222-8.907-14.631-.85-26.689-44.353-46.217-62.342-10.219-5.086-4.025-16.507 3.577-13.977 10.219-5.65.482-10.094 1.135-13.552 2.001-7.985 1.998-6.404 12.54 1.826 12.466l96.952.164zm.472-104.39c12.122 0 6.45-19.221-8.907-14.63-.85-26.69-44.353-46.218-62.342-10.22-5.086-4.024-16.507 3.577-13.978 10.22-5.649.481-10.093 1.135-13.551 2-7.985 1.999-6.404 12.54 1.826 12.466l96.952.164zm664.838 55.591c12.121 0 6.45-19.222-8.907-14.631-.85-26.689-44.353-46.217-62.342-10.219-5.086-4.025-16.507 3.577-13.978 10.219-5.649.482-10.094 1.135-13.551 2.001-7.985 1.998-6.404 12.54 1.826 12.466l96.952.164zM698.413 227.337c-12.121 0-6.45-19.221 8.907-14.63.85-26.69 44.353-46.218 62.342-10.22 5.086-4.024 16.507 3.577 13.978 10.22 5.649.481 10.094 1.135 13.552 2 7.984 1.999 6.403 12.54-1.826 12.466l-96.953.164zM165.899 490.883h65.239c5.833 0 8.346-7.61 3.573-10.985a14.647 14.647 0 0 0-.202-.143c-6.796-4.706-15.715-4.279-15.715-4.279s-1.274-25.466-25.271-25.466c-21.695 0-30.347 21.457-33.468 33.278-1.013 3.841 1.9 7.595 5.844 7.595zm574.608-48.701h65.239c5.833 0 8.346-7.61 3.573-10.985a10.355 10.355 0 0 0-.202-.143c-6.796-4.706-15.715-4.279-15.715-4.279s-1.273-25.465-25.27-25.465c-21.696 0-30.348 21.456-33.469 33.277-1.013 3.841 1.9 7.595 5.844 7.595z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg357);
const Memo = memo(ForwardRef);
export default Memo;