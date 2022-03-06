import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg39 = (
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
      d="M276.019 153.076c47.99-60.2 149.967-85.385 218.141 4.857 57.826 76.543 83.019 80.922 126.971 95.484 29.022 9.621 76.512 22.654 48.839 97.106-36.219 97.444-215.396 123.764-313.365 87.392-93.686-34.779-167.679-175.599-80.586-284.839z"
      fill="url(#a)"
    />
    <path
      d="M496.04 116.14c22.493 39.473 65.093 90.311 136.017 110.935 70.925 20.612 83.556-21.603 62.177-70.677-21.378-49.074-73.84-92.278-138.933-102.095-65.093-9.817-77.724 29.44-59.261 61.837z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M301.739 391.146V185.72c0-21.28 17.2-38.516 38.436-38.516h230.618c21.236 0 38.436 17.236 38.436 38.516v205.426c0 13.981-7.572 26.884-19.776 33.663l-115.308 64.187a38.34 38.34 0 0 1-37.341 0l-115.309-64.187a38.557 38.557 0 0 1-19.756-33.663z"
      fill="#6f381e"
    />
    <path
      d="M391.567 317.071H519.4m-127.833-59.885H519.4M391.567 375.229H519.4"
      stroke="#fff"
      strokeWidth={20.586}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={573.892}
      y={490.158}
      width={45.902}
      height={5.348}
      rx={2.674}
      transform="rotate(-45 573.892 490.158)"
      fill="#E1E4E5"
    />
    <rect
      x={223.098}
      y={335.449}
      width={45.902}
      height={5.348}
      rx={2.674}
      transform="rotate(135 223.098 335.449)"
      fill="#E1E4E5"
    />
    <rect
      x={289.573}
      y={110.201}
      width={45.902}
      height={5.348}
      rx={2.674}
      transform="rotate(135 289.573 110.201)"
      fill="#E1E4E5"
    />
    <rect
      x={591.49}
      y={490.284}
      width={17.043}
      height={5.348}
      rx={2.674}
      transform="rotate(-45 591.49 490.284)"
      fill="#E1E4E5"
    />
    <rect
      x={205.5}
      y={335.323}
      width={17.043}
      height={5.348}
      rx={2.674}
      transform="rotate(135 205.5 335.323)"
      fill="#E1E4E5"
    />
    <rect
      x={271.974}
      y={110.075}
      width={17.043}
      height={5.348}
      rx={2.674}
      transform="rotate(135 271.974 110.075)"
      fill="#E1E4E5"
    />
    <rect
      x={709.12}
      y={236.395}
      width={28.116}
      height={28.116}
      rx={11.139}
      transform="rotate(45 709.12 236.395)"
      fill="#6f381e"
    />
    <ellipse cx={456.06} cy={525.519} rx={13.82} ry={13.244} fill="#E1E4E5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M574.679 131.081h-32.246c-8.9 0-16.123 7.309-16.123 16.315v81.574l32.246-16.315 32.246 16.315v-81.574c0-9.006-7.223-16.315-16.123-16.315z"
      fill="#fff"
    />
    <circle
      r={20.391}
      transform="scale(-1 1) rotate(30 -613.967 -228.868)"
      fill="#6f381e"
    />
    <circle
      cx={233.675}
      cy={403.17}
      r={14.083}
      transform="rotate(150 233.675 403.17)"
      fill="#E1E4E5"
    />
    <path
      d="M166.681 189.402c18.857 19.193 54.12 15.146 54.12 15.146s4.666-35.164-14.209-54.345c-18.857-19.193-54.102-15.158-54.102-15.158s-4.666 35.164 14.191 54.357z"
      fill="url(#c)"
    />
    <path
      d="M327.16 515.144c20.359-17.591 18.576-53.04 18.576-53.04s-34.794-6.906-55.143 10.704c-20.359 17.591-18.587 53.022-18.587 53.022s34.794 6.906 55.154-10.686z"
      fill="url(#d)"
    />
    <path
      d="M639.898 68.892h-.293c-1.735 24.75-20.011 25.132-20.011 25.132s20.154.396 20.154 28.995c0-28.6 20.153-28.995 20.153-28.995s-18.269-.381-20.003-25.132zm-1.89 343.433s35.614-11.453 53.72-34.309c2.406-3.037-.365-7.413-4.16-6.59a5.227 5.227 0 0 0-.193.043c-6.455 1.512-29.802 27.703-49.367 40.856zm-21.453.204s56.047-36.67 74.674-84.263c1.137-2.9-.147-6.28-3.016-7.518-1.868-.804-4.54-.81-8.31 1.237-10.052 5.466-36.844 59.718-63.348 90.544z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={467.192}
        y1={652.411}
        x2={458.396}
        y2={-287.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={600.576}
        y1={333.151}
        x2={595.955}
        y2={-142.687}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={241.918}
        y1={254.961}
        x2={105.591}
        y2={41.256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={397.396}
        y1={444.254}
        x2={175.41}
        y2={566.635}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg39);
const Memo = memo(ForwardRef);
export default Memo;
