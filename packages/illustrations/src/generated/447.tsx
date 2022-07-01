import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg447 = (
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
    <circle cx={453.921} cy={299.921} r={255.921} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M581 330.136V227.419c.004-17.679-11.189-33.46-27.982-39.453l-64.559-23.017a102.532 102.532 0 0 0-68.834 0l-64.643 23.059c-16.778 5.988-27.968 21.748-27.982 39.411v102.717c0 53.372 75.396 92.866 110.067 108.253a41.505 41.505 0 0 0 33.866 0C505.604 423.003 581 383.425 581 330.136z"
      fill="#fff"
    />
    <path
      d="M460.678 373 497 300.5h-87l36.323-72.5"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M289 287.821V168.545c0-5.658-1.876-11.092-5.2-15.085l-25.147-30.204c-3.333-4.003-7.857-6.256-12.569-6.256h-99.306c-9.822 0-17.778 9.555-17.778 21.353v149.468c0 11.798 7.956 21.353 17.778 21.353h124.444c9.822 0 17.778-9.555 17.778-21.353z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={15.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M236.634 261.904c0-8.84 7.271-16.014 16.23-16.014s16.23 7.174 16.23 16.014c0 8.839-7.271 16.013-16.23 16.013s-16.23-7.174-16.23-16.013z"
      fill="#fff"
    />
    <path
      d="M159.161 186.784h99.979m-99.979 37.492h99.979m-99.979 37.411h57.564m-57.564-106.471h47.176"
      stroke="#fff"
      strokeWidth={18.746}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M772 508.821V389.545c0-5.658-1.876-11.092-5.2-15.085l-25.147-30.204c-3.333-4.003-7.857-6.256-12.569-6.256h-99.306c-9.822 0-17.778 9.555-17.778 21.353v149.468c0 11.798 7.956 21.353 17.778 21.353h124.444c9.822 0 17.778-9.555 17.778-21.353z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={15.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M719.634 482.904c0-8.84 7.271-16.014 16.23-16.014s16.23 7.174 16.23 16.014c0 8.839-7.271 16.013-16.23 16.013s-16.23-7.174-16.23-16.013z"
      fill="#fff"
    />
    <path
      d="M642.161 407.784h99.979m-99.979 37.492h99.979m-99.979 37.411h57.564m-57.564-106.471h47.176"
      stroke="#fff"
      strokeWidth={18.746}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg447);
const Memo = memo(ForwardRef);
export default Memo;
