import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg34 = (
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
      d="M220.392 325.67c-12.914 56.091 77.781 190.471 221.64 171.57 66.908-8.793 67.251-42.628 123.044-77.602 33.255-20.844 77.98-33.204 96.004-68.772 15.565-30.699 15.533-66.609 2.257-92.27-29.856-57.71-101.951-106.204-192.926-39.265-90.975 66.94-216.695-38.321-250.019 106.339z"
      fill="url(#a)"
    />
    <path
      d="M400.207 188.083c-3.598-14.447-37.594-35.547-55.762-22.826-5.576-27.525-10.792-44.689-29.011-58.248-18.219-13.559-48.618 4.164-53.501 41.286-4.882-15.26-29.705-35.827-49.646-18.485-18.45 16.048-20.3 42.937-18.373 58.248h206.293v.025z"
      fill="url(#b)"
    />
    <path
      d="M680.39 179.718c-3.022-12.131-31.581-29.847-46.843-19.166-4.685-23.11-9.067-37.522-24.372-48.906-15.304-11.385-40.841 3.496-44.943 34.665-4.101-12.813-24.954-30.082-41.705-15.521-15.499 13.474-17.054 36.051-15.435 48.907H680.39v.021z"
      fill="url(#c)"
    />
    <path
      d="M492.64 132.512c-2.257-9.053-23.589-22.274-34.988-14.303-3.499-17.246-6.772-28.001-18.203-36.497-11.431-8.496-30.505 2.61-33.569 25.869-3.063-9.561-18.638-22.448-31.15-11.582-11.577 10.055-12.738 26.904-11.528 36.497H492.64v.016z"
      fill="url(#d)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M564.903 205.461c61.355 61.355 61.355 160.831 0 222.185-61.355 61.355-160.83 61.355-222.185 0-61.354-61.355-61.354-160.83 0-222.185 61.355-61.355 160.831-61.355 222.185 0z"
      fill="#6f381e"
    />
    <path
      d="M453.811 381.213c2.933 0 5.324 2.305 5.324 5.133s-2.391 5.132-5.324 5.132-5.324-2.304-5.324-5.132 2.391-5.133 5.324-5.133m85.1-93.061c-49.628-38.736-120.572-38.736-170.201 0m35.472 49.558c28.943-22.571 70.315-22.571 99.275 0"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={677.411}
      y={268.7}
      width={67.133}
      height={7.821}
      rx={3.911}
      transform="rotate(-45 677.411 268.7)"
      fill="#E1E4E5"
    />
    <rect
      x={703.151}
      y={268.883}
      width={24.927}
      height={7.821}
      rx={3.911}
      transform="rotate(-45 703.151 268.883)"
      fill="#E1E4E5"
    />
    <rect
      x={640.929}
      y={366.882}
      width={46.21}
      height={5.384}
      rx={2.692}
      transform="rotate(-45 640.929 366.882)"
      fill="#E1E4E5"
    />
    <rect
      x={658.647}
      y={367.008}
      width={17.158}
      height={5.384}
      rx={2.692}
      transform="rotate(-45 658.647 367.008)"
      fill="#E1E4E5"
    />
    <rect
      x={231.927}
      y={328.197}
      width={49.307}
      height={5.744}
      rx={2.872}
      transform="rotate(135 231.927 328.197)"
      fill="#E1E4E5"
    />
    <rect
      x={213.023}
      y={328.062}
      width={18.308}
      height={5.744}
      rx={2.872}
      transform="rotate(135 213.023 328.062)"
      fill="#E1E4E5"
    />
    <rect
      x={571.495}
      y={487.933}
      width={49.307}
      height={5.744}
      rx={2.872}
      transform="rotate(-45 571.495 487.933)"
      fill="#E1E4E5"
    />
    <rect
      x={590.4}
      y={488.067}
      width={18.308}
      height={5.744}
      rx={2.872}
      transform="rotate(-45 590.4 488.067)"
      fill="#E1E4E5"
    />
    <rect
      x={285}
      y={479.865}
      width={49.307}
      height={5.744}
      rx={2.872}
      transform="rotate(-45 285 479.865)"
      fill="#E1E4E5"
    />
    <rect
      x={303.905}
      y={480}
      width={18.308}
      height={5.744}
      rx={2.872}
      transform="rotate(-45 303.905 480)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={293.718}
        y1={688.086}
        x2={663.178}
        y2={-210.206}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={301.171}
        y1={236.082}
        x2={300.079}
        y2={9.316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={597.194}
        y1={220.019}
        x2={596.277}
        y2={29.62}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={430.5}
        y1={162.587}
        x2={429.816}
        y2={20.499}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg34);
const Memo = memo(ForwardRef);
export default Memo;
