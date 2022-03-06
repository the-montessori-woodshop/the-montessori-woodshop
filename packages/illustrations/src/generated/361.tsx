import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg361 = (
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
      d="M734.755 234.332c-13.936 24.871-44.457 28.288-93.353 23.562-36.773-3.561-70.307-6.317-107.083-26.368-25.741-14.024-46.116-32.998-60.988-51.427-16.115-19.964-38.609-42.749-27.582-65.385 15.154-31.095 102.786-57.284 187.881-14.457 93.476 47.06 114.757 109.767 101.125 134.075z"
      fill="url(#a)"
    />
    <path
      d="M829.31 286.834c-26.253 13.023-61.098-3.722-61.098-3.722s7.744-37.853 34.011-50.858c26.254-13.023 61.084 3.704 61.084 3.704s-7.744 37.853-33.997 50.876z"
      fill="url(#b)"
    />
    <path
      d="M83.586 382.013c34.303 20.559 83.517 1.553 83.517 1.553s-6.435-52.33-40.759-72.866c-34.303-20.559-83.496-1.577-83.496-1.577s6.435 52.331 40.738 72.89z"
      fill="url(#c)"
    />
    <circle
      cx={777.335}
      cy={199.335}
      r={14.335}
      transform="rotate(180 777.335 199.335)"
      fill="#6f381e"
    />
    <circle
      cx={704.861}
      cy={440.542}
      r={16.127}
      transform="rotate(180 704.861 440.542)"
      fill="#6f381e"
    />
    <circle
      r={13.439}
      transform="matrix(-1 0 0 1 129.705 185.978)"
      fill="#6f381e"
    />
    <circle
      r={6.271}
      transform="matrix(-1 0 0 1 686.201 315.115)"
      fill="#6f381e"
    />
    <circle
      r={8.063}
      transform="matrix(-1 0 0 1 690.91 535.7)"
      fill="#E1E4E5"
    />
    <circle
      r={11.647}
      transform="matrix(-1 0 0 1 127.3 451.975)"
      fill="#E1E4E5"
    />
    <circle
      r={8.864}
      transform="matrix(-1 0 0 1 261.992 154.382)"
      fill="#E1E4E5"
    />
    <circle
      r={9.855}
      transform="matrix(-1 0 0 1 692.36 156.027)"
      fill="#E1E4E5"
    />
    <circle
      r={8.85}
      transform="scale(1 -1) rotate(-75 -97.55 -234.273)"
      fill="#E1E4E5"
    />
    <circle
      r={11.773}
      transform="matrix(-1 0 0 1 378.714 80.016)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.056}
      ry={7.245}
      transform="matrix(-1 0 0 1 754.165 380.956)"
      fill="#E1E4E5"
    />
    <circle
      r={18.418}
      transform="scale(1 -1) rotate(-75 239.89 -419.855)"
      fill="#E1E4E5"
    />
    <path
      d="M822.843 330.919h.237c1.403 19.878 16.186 20.184 16.186 20.184s-16.302.318-16.302 23.286c0-22.968-16.301-23.286-16.301-23.286s14.777-.306 16.18-20.184zM227.395 524.165h.211c1.245 17.991 14.362 18.268 14.362 18.268s-14.465.288-14.465 21.076c0-20.788-14.464-21.076-14.464-21.076s13.112-.277 14.356-18.268z"
      fill="#E1E4E5"
    />
    <path
      d="m576.296 426.317.021-.021c69.835-69.847 69.828-183.081-.016-252.919-69.844-69.838-183.078-69.836-252.919.005-69.841 69.841-69.843 183.075-.005 252.919 69.838 69.844 183.072 69.851 252.919.016"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={59.615}
      transform="matrix(-1 0 0 1 449.83 299.844)"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M390.215 299.844v168.508m119.23-168.511V131.239m-89.452 116.93-145.931 84.254m205.542 19.004 146.014-84.301m-145.981-19.002L333.705 163.87m86.314 187.511 146.013 84.301"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={640.875}
        y1={395.519}
        x2={516.663}
        y2={-162.636}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={728.495}
        y1={327.456}
        x2={945.032}
        y2={156.174}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={216.329}
        y1={448.191}
        x2={-59.684}
        y2={191.739}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg361);
const Memo = memo(ForwardRef);
export default Memo;
