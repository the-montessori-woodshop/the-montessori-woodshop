import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg125 = (
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
      d="M141 328.926C141 283.123 178.123 246 223.926 246c45.803 0 82.926 37.123 82.926 82.926m0 0c0 45.803-37.123 82.926-82.926 82.926-45.803 0-82.926-37.123-82.926-82.926"
      fill="#6f381e"
    />
    <path
      d="M196.078 305.41v17.328m55.698-17.328v17.328m.619 28.467s-10.679 9.901-28.467 9.901c-17.796 0-28.467-9.901-28.467-9.901"
      stroke="#fff"
      strokeWidth={11.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M594 413.926C594 368.123 631.123 331 676.926 331c45.803 0 82.926 37.123 82.926 82.926m0 0c0 45.803-37.123 82.926-82.926 82.926-45.803 0-82.926-37.123-82.926-82.926"
      fill="#6f381e"
    />
    <path
      d="M649.078 390.41v17.328m55.698-17.328v17.328m.619 28.467s-10.679 9.901-28.467 9.901c-17.796 0-28.467-9.901-28.467-9.901"
      stroke="#fff"
      strokeWidth={11.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M539 162.926C539 117.123 576.123 80 621.926 80c45.803 0 82.926 37.123 82.926 82.926m0 0c0 45.803-37.123 82.926-82.926 82.926-45.803 0-82.926-37.123-82.926-82.926"
      fill="#6f381e"
    />
    <path
      d="M594.078 139.41v17.328m55.698-17.328v17.328m.619 28.467s-10.679 9.901-28.467 9.901c-17.796 0-28.467-9.901-28.467-9.901"
      stroke="#fff"
      strokeWidth={11.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M320.624 356.081v21.716L301 401.162h82.429c24.915 0 45.125-20.19 45.125-45.081 0-24.891-20.21-45.081-45.125-45.081h-17.68c-24.931 0-45.125 20.19-45.125 45.081z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M387.637 334.44c9.795 0 16.363 9.128 16.363 17.629 0 17.255-27.268 31.383-27.765 31.383-.496 0-27.764-14.128-27.764-31.383 0-8.501 6.568-17.629 16.362-17.629 5.6 0 9.277 2.772 11.402 5.241 2.126-2.469 5.803-5.241 11.402-5.241z"
      fill="#fff"
    />
    <path
      d="M585.93 473.081v21.716l19.624 23.365h-82.429c-24.915 0-45.125-20.19-45.125-45.081C478 448.19 498.21 428 523.125 428h17.68c24.931 0 45.125 20.19 45.125 45.081z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M519.361 452.396c-9.413 0-15.725 8.772-15.725 16.941 0 16.582 26.205 30.159 26.682 30.159.477 0 26.682-13.577 26.682-30.159 0-8.169-6.312-16.941-15.724-16.941-5.381 0-8.915 2.664-10.958 5.036-2.042-2.372-5.576-5.036-10.957-5.036z"
      fill="#fff"
    />
    <path
      d="M521.93 218.081v21.716l19.624 23.365h-82.429c-24.915 0-45.125-20.19-45.125-45.081C414 193.19 434.21 173 459.125 173h17.68c24.931 0 45.125 20.19 45.125 45.081z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M454.95 196.513c-9.765 0-16.314 9.101-16.314 17.576 0 17.204 27.187 31.29 27.682 31.29.495 0 27.682-14.086 27.682-31.29 0-8.475-6.548-17.576-16.314-17.576-5.582 0-9.249 2.764-11.368 5.226-2.119-2.462-5.785-5.226-11.368-5.226z"
      fill="#fff"
    />
    <path
      d="M297.31 429.568c6.611-1.567 13.604 4.04 13.604 4.04s-3.732 8.143-10.345 9.705c-6.611 1.566-13.602-4.036-13.602-4.036s3.732-8.143 10.343-9.709z"
      fill="url(#a)"
    />
    <path
      d="M336.729 248.671c-11.445-7.883-28.929-2.373-28.929-2.373s1.082 18.289 12.535 26.165c11.444 7.883 28.921 2.38 28.921 2.38s-1.083-18.289-12.527-26.172z"
      fill="url(#b)"
    />
    <path
      d="M494.381 322.649c-9.807-9.982-28.147-7.877-28.147-7.877s-2.427 18.288 7.39 28.264c9.807 9.982 28.137 7.883 28.137 7.883s2.427-18.288-7.38-28.27z"
      fill="url(#c)"
    />
    <ellipse cx={370.685} cy={221.109} rx={12.685} ry={12.109} fill="#6f381e" />
    <circle cx={547.685} cy={318.685} r={12.685} fill="#6f381e" />
    <ellipse
      rx={11.532}
      ry={12.109}
      transform="matrix(1 0 0 -1 318.532 485.109)"
      fill="#6f381e"
    />
    <circle
      r={9.802}
      transform="matrix(1 0 0 -1 724.802 270.802)"
      fill="#6f381e"
    />
    <circle
      r={5.862}
      transform="matrix(1 0 0 -1 384.652 167.167)"
      fill="#fff"
    />
    <circle
      r={6.166}
      transform="matrix(1 0 0 -1 492.166 133.166)"
      fill="#E1E4E5"
    />
    <circle
      r={13.834}
      transform="matrix(1 0 0 -1 464.166 402.166)"
      fill="#E1E4E5"
    />
    <circle r={8} transform="matrix(1 0 0 -1 360 433)" fill="#E1E4E5" />
    <circle
      r={4.637}
      transform="matrix(1 0 0 -1 390.638 514.637)"
      fill="#fff"
    />
    <circle r={10} transform="matrix(0 -1 -1 0 588 271)" fill="#E1E4E5" />
    <circle
      r={11.343}
      transform="matrix(1 0 0 -1 656.343 306.343)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.5}
      ry={6.711}
      transform="matrix(1 0 0 -1 276.5 215.71)"
      fill="#E1E4E5"
    />
    <circle
      r={6.313}
      transform="scale(-1 1) rotate(-75 123.308 464.969)"
      fill="#fff"
    />
    <path
      d="M405.462 484.281h-.208C404.018 466.776 391 466.507 391 466.507s14.355-.281 14.355-20.507c0 20.226 14.356 20.507 14.356 20.507s-13.013.269-14.249 17.774zm157.575-76.682h-.217c-1.284-18.565-14.82-18.851-14.82-18.851s14.926-.297 14.926-21.748c0 21.451 14.926 21.748 14.926 21.748s-13.53.286-14.815 18.851z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={322.206}
        y1={425.673}
        x2={264.331}
        y2={453.015}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={292.147}
        y1={222.806}
        x2={382.237}
        y2={317.802}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={455.252}
        y1={288.553}
        x2={526.153}
        y2={399.697}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg125);
const Memo = memo(ForwardRef);
export default Memo;
