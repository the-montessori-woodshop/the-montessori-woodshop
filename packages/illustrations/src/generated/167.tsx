import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg167 = (
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
      d="m425.989 419.399-.62 79.413m-75.45-.305H501.89"
      stroke="#E1E4E5"
      strokeWidth={17.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M577.525 437.289H274.284c-33.489 0-60.634-27.145-60.634-60.634V167.749c0-33.489 27.145-60.634 60.634-60.634h303.217c33.513 0 60.658 27.145 60.658 60.634v208.882c0 33.513-27.145 60.658-60.634 60.658zm161.389 97.992c-34.101 0-62.002-27.901-62.002-62.002v-62.002c0-34.102 27.901-62.003 62.002-62.003s62.002 27.901 62.002 62.003v62.002c0 34.101-27.901 62.002-62.002 62.002z"
      fill="#6f381e"
    />
    <path
      d="M738.914 400.943v31.001"
      stroke="#fff"
      strokeWidth={13.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M734.676 173.775c25.368-6.009 52.199 15.505 52.199 15.505s-14.318 31.246-39.695 37.237c-25.368 6.01-52.191-15.485-52.191-15.485s14.319-31.247 39.687-37.257z"
      fill="url(#a)"
    />
    <circle cx={138.447} cy={214.409} r={13.706} fill="#6f381e" />
    <circle
      r={10.291}
      transform="matrix(1 0 0 -1 803.672 333.107)"
      fill="#6f381e"
    />
    <circle
      r={19.646}
      transform="matrix(1 0 0 -1 227.447 476.547)"
      fill="#6f381e"
    />
    <circle
      r={10.965}
      transform="matrix(1 0 0 -1 631.965 458.965)"
      fill="#E1E4E5"
    />
    <circle
      r={9.355}
      transform="matrix(1 0 0 -1 557.583 488.484)"
      fill="#E1E4E5"
    />
    <circle
      r={9.142}
      transform="scale(-1 1) rotate(-75 -163.11 632.376)"
      fill="#E1E4E5"
    />
    <circle
      r={12.162}
      transform="matrix(1 0 0 -1 675.036 119.277)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.355}
      ry={7.484}
      transform="matrix(1 0 0 -1 95.355 279.465)"
      fill="#E1E4E5"
    />
    <circle
      r={13.439}
      transform="scale(-1 1) rotate(-75 -65.484 195.246)"
      fill="#E1E4E5"
    />
    <path
      d="M174.462 367.273h-.245c-1.449-20.534-16.72-20.85-16.72-20.85s16.839-.328 16.839-24.055c0 23.727 16.84 24.055 16.84 24.055s-15.265.316-16.714 20.85zm4.709-243.081h-.178c-1.052-15.298-12.137-15.533-12.137-15.533s12.224-.245 12.224-17.922c0 17.677 12.224 17.922 12.224 17.922s-11.081.235-12.133 15.533z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M335.281 215.159v112.78c0 6.122 4.901 11.079 10.954 11.079h66.39l28.979-41.306c1.382-1.971 4.836-1.971 6.218 0l10.146 14.464.079.113.068-.1 21.76-31.594c1.505-2.187 5.275-2.187 6.78 0l28.817 41.847V215.159c0-6.122-4.915-11.079-10.955-11.079H346.235c-6.053 0-10.954 4.957-10.954 11.079z"
      fill="#fff"
    />
    <path
      d="M386.097 280.894c-10.571 0-19.14-8.57-19.14-19.14s8.569-19.139 19.14-19.139c10.57 0 19.139 8.569 19.139 19.139 0 10.57-8.569 19.14-19.139 19.14z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={830.206}
        y1={158.833}
        x2={608.133}
        y2={263.748}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg167);
const Memo = memo(ForwardRef);
export default Memo;
