import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg170 = (
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
      d="m502.768 464-38.666 38.667L425.435 464h-77.333c-32.036 0-58-25.965-58-58V174c0-32.035 25.964-58 58-58h232c32.035 0 58 25.965 58 58v232c0 32.035-25.965 58-58 58h-77.334z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M422.321 331.723c38.823 38.841 88.014 63.596 117.269 34.466l7.095-7.096c9.444-9.444 8.128-25.076-2.827-32.705-6.918-4.82-14.352-9.995-22.568-15.775-8.501-5.975-20.168-5.068-27.548 2.259l-8.021 7.967c-9.941-6.296-19.776-14.387-28.917-23.511l-.035-.035c-9.124-9.123-17.215-18.976-23.511-28.917l7.967-8.021c7.327-7.38 8.252-19.065 2.241-27.565a3483.086 3483.086 0 0 1-15.739-22.515c-7.611-10.991-23.261-12.325-32.723-2.863l-7.096 7.096c-29.112 29.254-4.374 78.41 34.448 117.268"
      fill="#fff"
    />
    <path
      d="M236.561 429.341c-13.251 3.139-27.267-8.099-27.267-8.099s7.479-16.322 20.735-19.452c13.252-3.139 27.263 8.089 27.263 8.089s-7.479 16.322-20.731 19.462z"
      fill="url(#a)"
    />
    <path
      d="M717.76 149.92c-12.039 12.253-34.551 9.669-34.551 9.669s-2.979-22.449 9.071-34.695c12.039-12.253 34.539-9.677 34.539-9.677s2.979 22.45-9.059 34.703z"
      fill="url(#b)"
    />
    <circle
      cx={755.624}
      cy={490.559}
      r={10.343}
      transform="rotate(180 755.624 490.559)"
      fill="#6f381e"
    />
    <ellipse
      cx={290.554}
      cy={508.88}
      rx={11.453}
      ry={10.88}
      transform="rotate(180 290.554 508.88)"
      fill="#6f381e"
    />
    <circle
      r={14.826}
      transform="matrix(-1 0 0 1 734.198 238.895)"
      fill="#6f381e"
    />
    <ellipse
      rx={10.307}
      ry={9.735}
      transform="matrix(-1 0 0 1 417.409 508.735)"
      fill="#E1E4E5"
    />
    <circle
      r={8.274}
      transform="matrix(-1 0 0 1 141.274 431.619)"
      fill="#E1E4E5"
    />
    <circle
      r={4.942}
      transform="matrix(-1 0 0 1 589.043 501.942)"
      fill="#E1E4E5"
    />
    <circle
      r={7.06}
      transform="matrix(-1 0 0 1 625.161 109.06)"
      fill="#E1E4E5"
    />
    <circle
      r={6.899}
      transform="scale(1 -1) rotate(-75 -225.133 -377.028)"
      fill="#E1E4E5"
    />
    <circle
      r={9.178}
      transform="matrix(-1 0 0 1 218.653 240.038)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.06}
      ry={5.648}
      transform="matrix(-1 0 0 1 759.161 406.648)"
      fill="#E1E4E5"
    />
    <circle
      r={14.358}
      transform="scale(1 -1) rotate(-75 48.494 -659.759)"
      fill="#E1E4E5"
    />
    <path
      d="M717.714 331h.185c1.093 15.496 12.618 15.734 12.618 15.734s-12.708.248-12.708 18.153c0-17.905-12.708-18.153-12.708-18.153s11.519-.238 12.613-15.734zM277.42 92h.181c1.068 15.765 12.323 16.008 12.323 16.008s-12.411.252-12.411 18.468c0-18.216-12.412-18.468-12.412-18.468s11.251-.243 12.319-16.008zm-115.101 81h.18c1.069 15.765 12.324 16.008 12.324 16.008s-12.412.252-12.412 18.468c0-18.216-12.411-18.468-12.411-18.468s11.251-.243 12.319-16.008zm511.101 66h.181c1.068 15.765 12.323 16.008 12.323 16.008s-12.411.252-12.411 18.468c0-18.216-12.412-18.468-12.412-18.468s11.251-.243 12.319-16.008zm-454.74 55.745h.135c.798 11.779 9.208 11.96 9.208 11.96s-9.274.189-9.274 13.8c0-13.611-9.273-13.8-9.273-13.8s8.406-.181 9.204-11.96z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={186.66}
        y1={437.146}
        x2={302.663}
        y2={382.342}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={669.728}
        y1={191.773}
        x2={756.76}
        y2={55.341}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg170);
const Memo = memo(ForwardRef);
export default Memo;
