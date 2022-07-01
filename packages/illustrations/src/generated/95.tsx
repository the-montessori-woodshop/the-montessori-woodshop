import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg95 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M234.176 236h335.16c8.357 0 15.13 7.126 15.13 15.916v44.949c0 8.791 6.774 15.917 15.13 15.917h130.146c13.763 0 24.919 11.737 24.919 26.214v64.434c0 14.479 11.157 26.215 24.917 26.215h.503c13.763 0 24.919 11.735 24.919 26.213v54.929C805 525.264 793.844 537 780.081 537H438.989c-8.356 0-15.13-7.125-15.13-15.916V514.3c0-8.789 6.774-15.917 15.13-15.917h109.527c8.356 0 15.13-7.126 15.13-15.916v-.321c0-8.79-6.774-15.915-15.13-15.915H171.851c-17.038 0-30.851-14.532-30.851-32.456v-35.008c0-17.925 13.813-32.454 30.851-32.454h.623c17.038 0 30.851-14.531 30.851-32.454v-65.405c0-17.924 13.812-32.454 30.851-32.454z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M705.229 387H346.345c-8.948 0-16.201-7.268-16.201-16.234v-45.844c0-8.966-7.253-16.235-16.2-16.235h-139.36c-14.736 0-26.682-11.97-26.682-26.736v-65.718c0-14.768-11.946-26.738-26.681-26.738h-.538C105.946 189.495 94 177.526 94 162.76v-56.025C94 91.97 105.946 80 120.683 80h365.235c8.947 0 16.201 7.267 16.201 16.234v6.919c0 8.964-7.254 16.233-16.201 16.233h-117.28c-8.947 0-16.201 7.269-16.201 16.234v.328c0 8.965 7.254 16.232 16.201 16.232h403.328c18.244 0 33.034 14.822 33.034 33.103v35.705c0 18.283-14.79 33.101-33.034 33.101h-.668c-18.244 0-33.034 14.821-33.034 33.102v66.708c0 18.281-14.791 33.101-33.035 33.101z"
      fill="url(#b)"
    />
    <rect x={193} y={125} width={548} height={369} rx={36} fill="#6f381e" />
    <circle cx={237} cy={157} r={8} fill="#fff" />
    <circle cx={265} cy={157} r={8} fill="#fff" />
    <circle cx={293} cy={157} r={8} fill="#fff" />
    <circle cx={303} cy={294} r={8} fill="#fff" />
    <rect x={424} y={355} width={257} height={17} rx={8.5} fill="#fff" />
    <rect x={442} y={304} width={239} height={18} rx={9} fill="#fff" />
    <rect x={412} y={254} width={269} height={17} rx={8.5} fill="#fff" />
    <path
      d="M384 308.677a58.176 58.176 0 0 0-8.315-.676c-16.784-.12-32.776 7.239-43.75 20.133-10.973 12.894-15.822 30.025-13.267 46.866"
      stroke="#fff"
      strokeWidth={13.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M387 312.5v0a64.503 64.503 0 0 1-18.89 45.61A64.503 64.503 0 0 1 322.5 377v0a64.503 64.503 0 0 1-45.61-18.89A64.503 64.503 0 0 1 258 312.5v0a64.503 64.503 0 0 1 18.89-45.61A64.503 64.503 0 0 1 322.5 248v0a64.503 64.503 0 0 1 45.61 18.89A64.503 64.503 0 0 1 387 312.5z"
      stroke="#fff"
      strokeWidth={13.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={487.158}
        y1={705.758}
        x2={482.95}
        y2={-91.523}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={434.34}
        y1={-92.122}
        x2={438.428}
        y2={721.053}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg95);
const Memo = memo(ForwardRef);
export default Memo;
