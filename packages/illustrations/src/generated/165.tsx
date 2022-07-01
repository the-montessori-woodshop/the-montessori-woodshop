import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg165 = (
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
      d="M542.409 429.187h-73.461c-73.027 0-132.228-59.201-132.228-132.228 0-73.028 59.201-132.229 132.228-132.229 73.028 0 132.229 59.201 132.229 132.229v22.038c0 20.285-16.445 36.73-36.73 36.73-20.286 0-36.73-16.445-36.73-36.73v-22.038c0-32.457-26.312-58.768-58.769-58.768v0c-32.456 0-58.768 26.311-58.768 58.768 0 32.456 26.312 58.768 58.768 58.768 32.457 0 58.769-26.312 58.769-58.768"
      stroke="#6f381e"
      strokeWidth={30}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M708.894 416.669c-27.448 6.502-56.477-16.775-56.477-16.775s15.491-33.808 42.947-40.29c27.448-6.502 56.469 16.755 56.469 16.755s-15.492 33.807-42.939 40.31z"
      fill="url(#a)"
    />
    <path
      d="M203.913 416.669c-27.447 6.502-56.477-16.775-56.477-16.775s15.492-33.808 42.948-40.29c27.447-6.502 56.468 16.755 56.468 16.755s-15.492 33.807-42.939 40.31z"
      fill="url(#b)"
    />
    <path
      d="M365.233 133.495c20.459-4.136 32.754-28.774 32.754-28.774S377.1 86.803 356.641 90.955c-20.46 4.136-32.755 28.758-32.755 28.758s20.887 17.918 41.347 13.782z"
      fill="url(#c)"
    />
    <ellipse
      cx={702.239}
      cy={274.353}
      rx={23.281}
      ry={22.268}
      transform="rotate(180 702.239 274.353)"
      fill="#6f381e"
    />
    <circle
      cx={412.707}
      cy={489.617}
      r={13.761}
      transform="rotate(180 412.707 489.617)"
      fill="#6f381e"
    />
    <circle
      r={11.134}
      transform="matrix(-1 0 0 1 255.453 199.809)"
      fill="#6f381e"
    />
    <ellipse
      rx={18.041}
      ry={17.347}
      transform="matrix(-1 0 0 1 560.583 501.58)"
      fill="#E1E4E5"
    />
    <circle
      r={11.863}
      transform="matrix(-1 0 0 1 268.409 311.814)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.408}
      ry={11.102}
      transform="matrix(-1 0 0 1 643.67 453.608)"
      fill="#E1E4E5"
    />
    <circle
      r={10.122}
      transform="matrix(-1 0 0 1 497.652 91.514)"
      fill="#E1E4E5"
    />
    <circle
      r={9.891}
      transform="scale(1 -1) rotate(-75 -167.047 -426.138)"
      fill="#E1E4E5"
    />
    <circle
      r={20.586}
      transform="scale(1 -1) rotate(-75 231.188 -457.461)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={605.534}
        y1={432.836}
        x2={845.808}
        y2={319.322}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={100.554}
        y1={432.836}
        x2={340.827}
        y2={319.322}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={439.7}
        y1={112.33}
        x2={243.06}
        y2={110.506}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg165);
const Memo = memo(ForwardRef);
export default Memo;
