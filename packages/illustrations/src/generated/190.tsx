import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg190 = (
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
      d="M675.511 427.155c-9.984 56.749-146.036 145.238-271.282 71.672-58.25-34.218-45.361-65.543-83.147-119.558-22.523-32.195-58.931-61.043-61.666-100.866-2.369-34.375 11.674-67.467 33.927-85.943 50.046-41.55 135.434-58.121 193.179 39.093 57.745 97.214 214.723 49.238 188.989 195.602z"
      fill="url(#a)"
    />
    <path
      d="M686.607 240.645c-11.769 21.003-37.543 23.889-78.836 19.898-31.054-3.008-59.373-5.335-90.431-22.267-21.737-11.844-38.944-27.867-51.503-43.43-13.61-16.86-32.605-36.101-23.293-55.217 12.797-26.26 86.802-48.376 158.664-12.209 78.939 39.742 96.911 92.697 85.399 113.225z"
      fill="url(#b)"
    />
    <path
      d="M766.162 284.556c-22.171 10.998-51.596-3.143-51.596-3.143s6.539-31.966 28.722-42.948c22.17-10.998 51.584 3.128 51.584 3.128s-6.539 31.966-28.71 42.963z"
      fill="url(#c)"
    />
    <path
      d="M135.06 363.43c23.637 14.167 57.55 1.071 57.55 1.071s-4.435-36.06-28.087-50.211c-23.637-14.167-57.535-1.087-57.535-1.087s4.434 36.06 28.072 50.227z"
      fill="url(#d)"
    />
    <circle
      cx={722.538}
      cy={210.861}
      r={12.106}
      transform="rotate(180 722.538 210.861)"
      fill="#6f381e"
    />
    <circle
      cx={352.428}
      cy={246.987}
      r={9.965}
      transform="rotate(180 352.428 246.987)"
      fill="#6f381e"
    />
    <circle
      r={11.349}
      transform="matrix(-1 0 0 1 222.793 333.109)"
      fill="#6f381e"
    />
    <circle
      r={5.296}
      transform="matrix(-1 0 0 1 698.329 273.687)"
      fill="#6f381e"
    />
    <circle
      r={6.809}
      transform="matrix(-1 0 0 1 695.272 472.831)"
      fill="#E1E4E5"
    />
    <circle
      r={9.836}
      transform="matrix(-1 0 0 1 173.321 424.016)"
      fill="#E1E4E5"
    />
    <circle
      r={7.486}
      transform="matrix(-1 0 0 1 729.949 405.508)"
      fill="#E1E4E5"
    />
    <circle
      r={8.323}
      transform="matrix(-1 0 0 1 650.508 174.091)"
      fill="#E1E4E5"
    />
    <circle
      r={7.474}
      transform="scale(1 -1) rotate(-75 -77.053 -261.892)"
      fill="#E1E4E5"
    />
    <circle
      r={9.942}
      transform="matrix(-1 0 0 1 388.995 122.262)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.648}
      ry={6.118}
      transform="matrix(-1 0 0 1 702.702 364.042)"
      fill="#E1E4E5"
    />
    <circle
      r={15.554}
      transform="scale(1 -1) rotate(-75 207.912 -418.615)"
      fill="#E1E4E5"
    />
    <path
      d="M229.903 217.022h.109c.645 9.141 7.444 9.282 7.444 9.282s-7.497.146-7.497 10.708c0-10.562-7.496-10.708-7.496-10.708s6.795-.141 7.44-9.282zm-11.389 239.277h.105c.62 9.114 7.146 9.254 7.146 9.254s-7.197.146-7.197 10.677c0-10.531-7.197-10.677-7.197-10.677s6.524-.14 7.143-9.254z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M614.221 294.845H465.417c-24.657 0-44.642 19.984-44.642 44.641 0 24.657 19.985 44.641 44.642 44.641h148.804c24.656 0 44.641-19.984 44.641-44.641 0-24.657-19.985-44.641-44.641-44.641z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M539.818 339.486h74.402"
      stroke="#fff"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M465.941 338.96a.743.743 0 1 1-1.05 1.052.743.743 0 0 1 1.05-1.052m28.934 0a.743.743 0 1 1-1.05 1.052.743.743 0 0 1 1.05-1.052"
      stroke="#6f381e"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M614.221 184.62H465.417c-24.657 0-44.642 19.984-44.642 44.641 0 24.657 19.985 44.641 44.642 44.641h148.804c24.656 0 44.641-19.984 44.641-44.641 0-24.657-19.985-44.641-44.641-44.641z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M539.819 229.261h74.402"
      stroke="#fff"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M465.942 228.734a.744.744 0 1 1-1.052 1.053.744.744 0 0 1 1.052-1.053m28.934 0a.744.744 0 1 1-1.052 1.053.744.744 0 0 1 1.052-1.053"
      stroke="#6f381e"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M614.22 405.07H465.416c-24.657 0-44.641 19.984-44.641 44.641 0 24.657 19.984 44.641 44.641 44.641H614.22c24.657 0 44.641-19.984 44.641-44.641 0-24.657-19.984-44.641-44.641-44.641z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M539.819 449.711h74.402"
      stroke="#fff"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M465.942 449.185a.743.743 0 1 1-1.05 1.052.743.743 0 0 1 1.05-1.052m28.934 0a.743.743 0 1 1-1.05 1.052.743.743 0 0 1 1.05-1.052"
      stroke="#6f381e"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M272.522 371.635v-33.619 0c0-24.755 20.071-44.825 44.825-44.825v0c24.755 0 44.825 20.07 44.825 44.825v33.619"
      stroke="#2D2019"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M373.378 494.903H261.316c-12.383 0-22.413-10.029-22.413-22.412v-78.444c0-12.383 10.03-22.412 22.413-22.412h112.062c12.383 0 22.412 10.029 22.412 22.412v78.444c0 12.383-10.029 22.412-22.412 22.412z"
      fill="#2D2019"
      stroke="#2D2019"
      strokeWidth={11.023}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M316.611 460.156v-28.107m-.032-16.741c-4.563 0-8.267 3.703-8.234 8.266a8.27 8.27 0 0 0 8.267 8.267 8.27 8.27 0 0 0 8.267-8.267c0-4.563-3.704-8.266-8.3-8.266"
      stroke="#fff"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={466.479}
        y1={732.644}
        x2={476.442}
        y2={-239.659}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={607.326}
        y1={376.766}
        x2={502.43}
        y2={-94.591}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={681.025}
        y1={318.862}
        x2={863.888}
        y2={174.216}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={226.531}
        y1={409.033}
        x2={36.334}
        y2={232.316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg190);
const Memo = memo(ForwardRef);
export default Memo;
