import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg388 = (
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
      d="M834.942 275.22c-26.633 13.211-61.981-3.776-61.981-3.776s7.856-38.399 34.503-51.592c26.632-13.211 61.966 3.758 61.966 3.758s-7.856 38.399-34.488 51.61z"
      fill="url(#a)"
    />
    <path
      d="M78.447 371.774c34.798 20.856 84.722 1.576 84.722 1.576s-6.527-53.087-41.347-73.919c-34.798-20.856-84.702-1.6-84.702-1.6s6.528 53.086 41.327 73.943z"
      fill="url(#b)"
    />
    <circle
      cx={782.54}
      cy={186.693}
      r={14.542}
      transform="rotate(180 782.54 186.693)"
      fill="#6f381e"
    />
    <circle
      cx={719.314}
      cy={318.594}
      r={16.36}
      transform="rotate(180 719.314 318.594)"
      fill="#6f381e"
    />
    <circle
      r={13.633}
      transform="matrix(-1 0 0 1 125.231 172.907)"
      fill="#6f381e"
    />
    <circle
      r={6.362}
      transform="matrix(-1 0 0 1 583.514 534.362)"
      fill="#6f381e"
    />
    <circle
      r={8.18}
      transform="matrix(-1 0 0 1 694.542 527.68)"
      fill="#E1E4E5"
    />
    <circle
      r={11.815}
      transform="matrix(-1 0 0 1 122.793 442.745)"
      fill="#E1E4E5"
    />
    <circle
      r={8.992}
      transform="matrix(-1 0 0 1 259.429 140.855)"
      fill="#E1E4E5"
    />
    <circle
      r={9.998}
      transform="matrix(-1 0 0 1 696.013 142.523)"
      fill="#E1E4E5"
    />
    <circle
      r={8.978}
      transform="scale(1 -1) rotate(-75 -91.866 -225.643)"
      fill="#E1E4E5"
    />
    <circle
      r={11.943}
      transform="matrix(-1 0 0 1 333.095 55.943)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.187}
      ry={7.35}
      transform="matrix(-1 0 0 1 758.711 370.702)"
      fill="#E1E4E5"
    />
    <circle
      r={18.684}
      transform="scale(1 -1) rotate(-75 285.67 -462.671)"
      fill="#E1E4E5"
    />
    <path
      d="M828.381 319.941h.241c1.423 20.165 16.42 20.476 16.42 20.476s-16.537.323-16.537 23.623c0-23.3-16.537-23.623-16.537-23.623s14.99-.311 16.413-20.476zM224.332 515.979h.214c1.263 18.25 14.569 18.531 14.569 18.531s-14.673.292-14.673 21.38c0-21.088-14.674-21.38-14.674-21.38s13.302-.281 14.564-18.531z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M658.11 348.38V178.421c.006-29.251-18.336-55.363-45.855-65.279L506.463 75.058a166.491 166.491 0 0 0-112.798 0l-105.93 38.154c-27.495 9.907-45.832 35.984-45.855 65.209V348.38c0 88.31 123.551 153.658 180.366 179.118a67.436 67.436 0 0 0 55.498 0c56.815-25.459 180.366-90.946 180.366-179.118z"
      fill="#6f381e"
    />
    <path
      d="M387.852 329.656c21.081 21.08 52.784 27.386 80.326 15.978 27.543-11.409 45.501-38.285 45.501-68.097 0-29.812-17.958-56.689-45.501-68.098-27.542-11.408-59.245-5.102-80.326 15.978-28.784 28.785-28.784 75.454 0 104.239"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M533.569 371.129 492.09 329.65l41.479 41.479z"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={732.67}
        y1={316.429}
        x2={952.335}
        y2={142.673}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={213.107}
        y1={438.908}
        x2={-66.893}
        y2={178.751}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg388);
const Memo = memo(ForwardRef);
export default Memo;
