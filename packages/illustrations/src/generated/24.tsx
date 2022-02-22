import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg24 = (
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
      d="M742.705 207.994c-7.708 6.757-20.989 4.221-20.989 4.221s-.777-13.491 6.938-20.244c7.707-6.757 20.983-4.225 20.983-4.225s.776 13.491-6.932 20.248z"
      fill="url(#a)"
    />
    <path
      d="M723.667 444.936c10.506 7.237 26.557 2.178 26.557 2.178s-.994-16.79-11.507-24.019c-10.506-7.237-26.55-2.185-26.55-2.185s.994 16.789 11.5 24.026z"
      fill="url(#b)"
    />
    <circle
      r={13.154}
      transform="matrix(-1 0 0 1 576.876 160.673)"
      fill="#6f381e"
    />
    <circle r={5} transform="matrix(-1 0 0 1 728 357)" fill="#E1E4E5" />
    <circle r={6.5} transform="matrix(-1 0 0 1 702.5 160.5)" fill="#E1E4E5" />
    <circle
      r={6.131}
      transform="matrix(-1 0 0 1 230.131 185.131)"
      fill="#E1E4E5"
    />
    <circle
      r={6.121}
      transform="scale(1 -1) rotate(-75 -65.94 -302.639)"
      fill="#E1E4E5"
    />
    <circle
      r={8.143}
      transform="matrix(-1 0 0 1 336.654 179.393)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.264}
      ry={5.011}
      transform="matrix(-1 0 0 1 634.471 309.02)"
      fill="#E1E4E5"
    />
    <path
      d="M739.191 285h.164c.97 13.748 11.195 13.96 11.195 13.96s-11.275.22-11.275 16.106c0-15.886-11.275-16.106-11.275-16.106s10.22-.212 11.191-13.96zm-534.762-70h.138c.818 12.346 9.433 12.536 9.433 12.536s-9.5.198-9.5 14.464c0-14.266-9.5-14.464-9.5-14.464s8.612-.19 9.429-12.536z"
      fill="#E1E4E5"
    />
    <path
      d="M493.645 377.256v116.856H326.963v-17.534c0-16.314-15.505-22.189-52.154-19.723-29.319 1.972-38.528-9.51-39.468-15.497v-75.02l-26.429-8.806c1.996-50.248 21.073-158.282 81.402-188.431 75.412-37.686 144.23-20.605 189.588 46.844 33.457 49.752 21.731 123.86 13.743 161.311z"
      fill="#6f381e"
    />
    <path
      d="M581.645 377.256v116.856H414.963v-17.534c0-16.314-15.505-22.189-52.154-19.723-29.319 1.972-38.528-9.51-39.468-15.497v-75.02l-26.429-8.806c1.996-50.248 21.073-158.282 81.402-188.431 75.412-37.686 144.23-20.605 189.588 46.844 33.457 49.752 21.731 123.86 13.743 161.311z"
      fill="url(#c)"
    />
    <path
      d="M693.13 362.713v131.695H505.282v-19.76c0-18.387-17.474-25.007-58.777-22.229-33.042 2.223-43.42-10.717-44.479-17.465v-84.546l-29.786-9.924c2.25-56.629 23.749-178.381 91.74-212.358 84.988-42.472 162.544-23.223 213.662 52.792 37.705 56.069 24.49 139.587 15.488 181.795z"
      fill="#6f381e"
    />
    <circle cx={468.139} cy={269.587} r={15.746} fill="#fff" />
    <defs>
      <linearGradient
        id="a"
        x1={712.265}
        y1={230.768}
        x2={770.111}
        y2={153.444}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={764.593}
        y1={468.681}
        x2={681.89}
        y2={381.472}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={437.362}
        y1={687.34}
        x2={449.844}
        y2={-225.398}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg24);
const Memo = memo(ForwardRef);
export default Memo;
