import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg140 = (
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
      d="M705.066 353.977c3.084 56.834-108.031 172.399-244.988 129.625-63.697-19.896-58.302-52.918-106.737-96.44-28.87-25.938-70.351-45.553-81.888-83.258-9.967-32.544-3.855-67.525 13.424-90.277 38.86-51.169 117.311-86.208 194.61-5.587 77.299 80.622 217.608-.642 225.579 145.937z"
      fill="url(#a)"
    />
    <path
      d="M666.196 211.238c-10.628 18.968-33.905 21.575-71.197 17.97-28.046-2.716-53.622-4.818-81.671-20.11-19.631-10.696-35.171-25.167-46.514-39.222-12.291-15.227-29.446-32.604-21.036-49.868 11.557-23.716 78.393-43.69 143.293-11.026 71.292 35.891 87.523 83.717 77.125 102.256z"
      fill="url(#b)"
    />
    <path
      d="M738.044 250.895c-20.023 9.933-46.598-2.839-46.598-2.839s5.906-28.869 25.939-38.787c20.023-9.933 46.588 2.825 46.588 2.825s-5.907 28.869-25.929 38.801z"
      fill="url(#c)"
    />
    <path
      d="M169.297 323.486c26.162 15.68 63.696 1.185 63.696 1.185s-4.908-39.912-31.086-55.574c-26.162-15.68-63.68-1.203-63.68-1.203s4.908 39.912 31.07 55.592z"
      fill="url(#d)"
    />
    <circle
      cx={698.647}
      cy={184.339}
      r={10.933}
      transform="rotate(180 698.647 184.339)"
      fill="#6f381e"
    />
    <circle
      cx={286.869}
      cy={246.267}
      r={12.299}
      transform="rotate(180 286.869 246.267)"
      fill="#6f381e"
    />
    <circle
      r={10.249}
      transform="matrix(-1 0 0 1 204.47 173.975)"
      fill="#6f381e"
    />
    <circle
      r={4.783}
      transform="matrix(-1 0 0 1 604.884 227.272)"
      fill="#6f381e"
    />
    <circle
      r={6.15}
      transform="matrix(-1 0 0 1 745.122 377.606)"
      fill="#E1E4E5"
    />
    <circle
      r={8.883}
      transform="matrix(-1 0 0 1 202.637 376.845)"
      fill="#E1E4E5"
    />
    <circle
      r={6.761}
      transform="matrix(-1 0 0 1 305.363 149.877)"
      fill="#E1E4E5"
    />
    <circle
      r={7.516}
      transform="matrix(-1 0 0 1 633.595 151.132)"
      fill="#E1E4E5"
    />
    <circle
      r={6.75}
      transform="scale(1 -1) rotate(-75 -42.564 -263.517)"
      fill="#E1E4E5"
    />
    <circle
      r={8.979}
      transform="matrix(-1 0 0 1 397.416 104.324)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.907}
      ry={5.526}
      transform="matrix(-1 0 0 1 680.732 322.68)"
      fill="#E1E4E5"
    />
    <circle
      r={14.047}
      transform="scale(1 -1) rotate(-75 214.793 -405.056)"
      fill="#E1E4E5"
    />
    <path
      d="M762.963 267.772h.181c1.07 15.16 12.345 15.393 12.345 15.393s-12.433.243-12.433 17.76c0-17.517-12.433-17.76-12.433-17.76s11.27-.233 12.34-15.393zM321.118 57.705h.311c1.843 26.53 21.26 26.938 21.26 26.938s-21.412.425-21.412 31.081c0-30.656-21.412-31.08-21.412-31.08s19.41-.409 21.253-26.94z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m610.565 200.068-56.951-57.002a40.27 40.27 0 0 0-28.476-11.811H380.705c-22.253 0-40.277 18.039-40.277 40.312v282.188c0 22.273 18.024 40.313 40.277 40.313H582.09c22.253 0 40.276-18.04 40.276-40.313V228.569a40.344 40.344 0 0 0-11.801-28.501z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M405.633 272.091h124.298m-124.298 56.306h124.298m-124.562 56.115h139.866"
      stroke="#E1E4E5"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M529.54 417.147c0-45.802 37.123-82.926 82.926-82.926 45.802 0 82.926 37.124 82.926 82.926m0 0c0 45.803-37.124 82.927-82.926 82.927-45.803 0-82.926-37.124-82.926-82.927"
      fill="#6f381e"
    />
    <path
      d="M584.618 393.631v17.328m55.697-17.328v17.328m.62 28.467s-10.679 9.902-28.467 9.902c-17.796 0-28.468-9.902-28.468-9.902"
      stroke="#fff"
      strokeWidth={11.167}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M254.769 409.835c0 27.673 14.646 52.035 37.12 67.393-.01 8.818.011 20.7.011 33.17l36.419-18.019a102.025 102.025 0 0 0 19.277 1.846c51.076 0 92.828-37.574 92.828-84.39s-41.752-84.391-92.828-84.391-92.827 37.575-92.827 84.391z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={12.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m340.512 383.327 32.954 19.494c4.745 2.805 4.745 9.675 0 12.49l-32.954 19.494c-4.837 2.857-10.943-.629-10.943-6.24v-38.987c0-5.632 6.106-9.118 10.943-6.251z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={572.26}
        y1={694.65}
        x2={364.413}
        y2={-243.084}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={594.596}
        y1={334.172}
        x2={499.863}
        y2={-91.521}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={661.154}
        y1={281.877}
        x2={826.302}
        y2={151.244}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={270.537}
        y1={373.959}
        x2={60.028}
        y2={178.368}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg140);
const Memo = memo(ForwardRef);
export default Memo;
