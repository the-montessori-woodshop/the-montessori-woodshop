import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg296 = (
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
      d="M587.726 156.949c57.763 57.764 75.043 144.636 43.782 220.108-31.262 75.472-104.908 124.68-186.598 124.68-81.691 0-155.337-49.208-186.598-124.68-31.262-75.472-13.982-162.344 43.782-220.108a201.964 201.964 0 0 1 285.632 0M444.909 97.8v33.662m0 370.278v-33.661m142.816-311.133-23.81 23.81M302.094 442.578l23.81-23.81m320.977-119.001h-33.662m-370.281 0H276.6m311.125 142.811-23.81-23.81M302.094 156.946l23.81 23.81"
      stroke="#E1E4E5"
      strokeWidth={4.389}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M443.372 159.992c.522-2.27 3.755-2.27 4.277 0l32.013 139.283c.074.323.074.66 0 .983l-32.013 139.283c-.522 2.27-3.755 2.27-4.277-.001l-32.013-139.282a2.204 2.204 0 0 1 0-.983l32.013-139.283z"
      stroke="#E1E4E5"
      strokeWidth={4.389}
    />
    <path
      d="M577.661 297.598c2.476.386 2.476 3.951 0 4.337l-132.414 20.622a2.183 2.183 0 0 1-.675 0l-132.415-20.622c-2.475-.386-2.475-3.951 0-4.337l132.415-20.622c.224-.034.451-.034.675 0l132.414 20.622z"
      stroke="#E1E4E5"
      strokeWidth={4.389}
    />
    <circle cx={444.909} cy={299.766} r={37.27} fill="#6f381e" />
    <circle cx={594.11} cy={168.843} r={80.429} fill="#6f381e" />
    <path
      d="m622.491 153.283-35.669 36.326-21.415-21.792"
      stroke="#fff"
      strokeWidth={13.43}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M152.214 312.613c22.875 13.71 55.694 1.036 55.694 1.036s-4.291-34.897-27.18-48.592c-22.876-13.71-55.681-1.052-55.681-1.052s4.291 34.898 27.167 48.608z"
      fill="url(#a)"
    />
    <circle
      cx={610.691}
      cy={548.539}
      r={19.626}
      transform="rotate(180 610.691 548.539)"
      fill="#6f381e"
    />
    <circle
      r={18.399}
      transform="matrix(-1 0 0 1 309.74 549.79)"
      fill="#6f381e"
    />
    <circle
      r={8.586}
      transform="matrix(-1 0 0 1 805.414 374.415)"
      fill="#6f381e"
    />
    <circle
      r={11.04}
      transform="scale(1 -1) rotate(60 504.386 126.108)"
      fill="#E1E4E5"
    />
    <circle
      r={15.946}
      transform="matrix(-1 0 0 1 101.69 445.777)"
      fill="#E1E4E5"
    />
    <circle
      r={13.493}
      transform="matrix(-1 0 0 1 739.729 263.968)"
      fill="#E1E4E5"
    />
    <circle
      r={12.117}
      transform="scale(1 -1) rotate(-75 36.178 -568.938)"
      fill="#E1E4E5"
    />
    <circle
      r={16.119}
      transform="matrix(-1 0 0 1 230.67 48.382)"
      fill="#E1E4E5"
    />
    <circle
      r={17.247}
      transform="scale(1 -1) rotate(-75 299.074 -470.447)"
      fill="#E1E4E5"
    />
    <path
      d="M169.666 166.544h.177c1.046 14.82 12.067 15.048 12.067 15.048s-12.153.237-12.153 17.361c0-17.124-12.154-17.361-12.154-17.361s11.017-.228 12.063-15.048zm45.172 191.911h.169c1.005 14.775 11.586 15.003 11.586 15.003s-11.668.236-11.668 17.309c0-17.073-11.669-17.309-11.669-17.309s10.577-.228 11.582-15.003zm499.276 24.312h.169c1.005 14.776 11.586 15.003 11.586 15.003s-11.668.237-11.668 17.31c0-17.073-11.669-17.31-11.669-17.31s10.578-.227 11.582-15.003z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={240.735}
        y1={356.745}
        x2={56.672}
        y2={185.726}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg296);
const Memo = memo(ForwardRef);
export default Memo;
