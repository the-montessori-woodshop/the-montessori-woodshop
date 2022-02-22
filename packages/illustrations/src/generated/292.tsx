import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg292 = (
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
      d="m391.603 221.345 16.213-60.508v0c11.938-44.554 57.741-70.998 102.295-59.06v0c44.554 11.938 70.998 57.741 59.06 102.295v0l-16.213 60.508"
      stroke="#6f381e"
      strokeWidth={32.641}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m525.521 521.722-238.729-63.967c-26.38-7.068-42.021-34.16-34.953-60.539l44.777-167.11c7.069-26.38 34.16-42.021 60.54-34.953l238.729 63.968c26.379 7.068 42.02 34.159 34.952 60.539L586.06 486.77c-7.068 26.38-34.16 42.021-60.539 34.952z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={24.31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m424.422 415.298 16.044-59.877m9.489-35.683c-9.722-2.605-19.725 3.171-22.26 12.911-2.605 9.721 3.171 19.725 12.892 22.329 9.722 2.605 19.725-3.17 22.33-12.892 2.605-9.721-3.171-19.725-12.962-22.348"
      stroke="#fff"
      strokeWidth={50.726}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x={146} y={61} width={222} height={222} rx={111} fill="#2D2019" />
    <path
      d="M249.512 213.477h18.443l-1.783-26.533 22.214 14.878 9.188-16.181-23.86-11.655 23.86-11.656-9.188-16.181-22.214 14.878 1.783-26.533h-18.443l1.714 26.533-22.214-14.878-9.188 16.181 23.928 11.656-23.928 11.655 9.188 16.181 22.214-14.878-1.714 26.533z"
      fill="#fff"
    />
    <rect x={591} y={206} width={162} height={162} rx={81} fill="#2D2019" />
    <path
      d="M666.536 317.808h13.458l-1.301-19.363 16.211 10.857 6.704-11.807-17.411-8.506 17.411-8.505-6.704-11.808-16.211 10.857 1.301-19.362h-13.458l1.25 19.362-16.21-10.857-6.704 11.808 17.461 8.505-17.461 8.506 6.704 11.807 16.21-10.857-1.25 19.363z"
      fill="#fff"
    />
    <rect x={200} y={389} width={154} height={154} rx={77} fill="#2D2019" />
    <path
      d="M271.805 495.052h12.794l-1.236-18.406 15.41 10.32 6.373-11.224-16.551-8.086 16.551-8.085-6.373-11.224-15.41 10.32 1.236-18.406h-12.794l1.189 18.406-15.409-10.32-6.374 11.224 16.599 8.085-16.599 8.086 6.374 11.224 15.409-10.32-1.189 18.406z"
      fill="#fff"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg292);
const Memo = memo(ForwardRef);
export default Memo;
