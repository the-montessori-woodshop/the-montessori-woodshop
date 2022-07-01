import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg141 = (
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
      d="M508.423 323.045 423.9 238.523m146.868 84.522 84.261-84.522m-377.741 84.522 84.261-84.522m-127.846 73.591c-1.357-10.278-2.322-20.687-2.322-31.33C231.381 151.105 336.486 46 466.165 46c88.044 0 164.688 48.548 204.862 120.262M261.302 395.305c40.174 71.713 116.818 120.261 204.862 120.261 129.679 0 234.784-105.105 234.784-234.783 0-10.644-.965-21.053-2.322-31.331"
      stroke="#E1E4E5"
      strokeWidth={4.707}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M495.513 354.141c0-24.287 19.695-44.009 44.009-44.009 24.313 0 44.009 19.696 44.009 44.009s-19.696 44.009-44.009 44.009c-24.235.104-43.931-19.435-44.009-43.67v-.339zm-58.697-146.714c0 24.287-19.695 44.009-44.009 44.009-24.313 0-44.035-19.696-44.035-44.009 0-24.339 19.696-44.035 44.035-44.035 24.235-.104 43.931 19.435 44.009 43.67v.365zm293.48 0c0 24.287-19.695 44.009-44.009 44.009-24.313 0-44.035-19.696-44.035-44.009s19.696-44.009 44.009-44.009c24.235-.105 43.931 19.435 44.009 43.67.026.104.026.208.026.339zM202.033 354.141c0-24.287 19.695-44.009 44.009-44.009 24.313 0 44.035 19.696 44.035 44.009s-19.696 44.009-44.009 44.009c-24.235.104-43.931-19.435-44.009-43.67-.026-.104-.026-.209-.026-.339z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={4.707}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M553.261 252.991h-40.537V218.24h40.526c9.609 0 17.37 7.783 17.37 17.37v0c.011 9.619-7.75 17.381-17.359 17.381z"
      stroke="#6f381e"
      strokeWidth={15.926}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M512.724 218.251v-35.844h36.152c9.895 0 17.911 8.016 17.911 17.932v0c0 9.896-8.016 17.912-17.911 17.912m-13.512-46.152v10.267m0 82.399v-11.583"
      stroke="#6f381e"
      strokeWidth={15.926}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M410.861 393.037h-40.537v-34.75h40.526c9.609 0 17.37 7.782 17.37 17.37v0c.011 9.619-7.75 17.38-17.359 17.38z"
      stroke="#6f381e"
      strokeWidth={15.926}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M370.324 358.297v-35.844h36.152c9.895 0 17.912 8.016 17.912 17.933v0c0 9.895-8.017 17.911-17.912 17.911m-13.512-46.151v10.267m0 82.399v-11.583"
      stroke="#6f381e"
      strokeWidth={15.926}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M651.594 350.415h-25.891m-322.46-142.4h-25.891M436.62 466.924h-34.521m-.578-25.609H367m-36.479-274H296"
      stroke="#E1E4E5"
      strokeWidth={12.945}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="m393.176 186.047 21.675 21.675-21.675 21.675-21.675-21.675 21.675-21.675zM246.069 333.154l21.675 21.675-21.675 21.676-21.675-21.676 21.675-21.675zm294.215 0 21.675 21.675-21.675 21.676-21.675-21.676 21.675-21.675zm145.931-147.107 21.675 21.675-21.675 21.675-21.675-21.675 21.675-21.675z"
      stroke="#fff"
      strokeWidth={5.884}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M528.023 126.811h-25.891m-51.782 0h-25.891m69.043 25.891h-34.521m86.696 288.331h-25.891m-51.782 0h-25.891m69.043 25.891h-34.522M145.543 268.427h56.49m562.54 137.693h-56.49m-506.05-165.938h-37.66m543.71 194.182h37.66m-543.71-222.427h-9.415m515.465 250.672h9.415"
      stroke="#E1E4E5"
      strokeWidth={12.945}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M607.751 538.908c-7.405 5.098-18.714 1.531-18.714 1.531s.703-11.831 8.112-16.924c7.405-5.098 18.71-1.536 18.71-1.536s-.703 11.831-8.108 16.929z"
      fill="url(#a)"
    />
    <path
      d="M783.161 254.152c8.394-5.749 9.224-19.146 9.224-19.146s-12.783-4.066-21.174 1.69c-8.395 5.749-9.227 19.138-9.227 19.138s12.782 4.067 21.177-1.682z"
      fill="url(#b)"
    />
    <path
      d="M123.417 418.451c13.446 13.685 38.59 10.8 38.59 10.8s3.327-25.074-10.131-38.751c-13.446-13.685-38.578-10.808-38.578-10.808s-3.327 25.074 10.119 38.759z"
      fill="url(#c)"
    />
    <circle
      r={11.417}
      transform="matrix(-1 0 0 1 381.742 542.284)"
      fill="#E1E4E5"
    />
    <circle
      r={9.158}
      transform="matrix(-1 0 0 1 612.501 408.216)"
      fill="#E1E4E5"
    />
    <circle
      r={5.862}
      transform="matrix(-1 0 0 1 710.897 116.684)"
      fill="#E1E4E5"
    />
    <circle
      r={5.862}
      transform="matrix(-1 0 0 1 515.056 542.613)"
      fill="#E1E4E5"
    />
    <circle
      r={5.862}
      transform="matrix(-1 0 0 1 658.633 507.307)"
      fill="#E1E4E5"
    />
    <circle
      r={12.163}
      transform="matrix(-1 0 0 1 204.782 454.765)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.356}
      ry={7.485}
      transform="matrix(-1 0 0 1 286.709 513.638)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={15.228}
      ry={12.022}
      transform="scale(-1 1) rotate(26.006 -349.467 -340.1)"
      fill="#E1E4E5"
    />
    <circle
      transform="matrix(0 1 1 0 638.805 75.592)"
      fill="#E1E4E5"
      r={9.769}
    />
    <path
      d="M747.16 300.202h.245c1.449 20.536 16.721 20.852 16.721 20.852s-16.841.329-16.841 24.057c0-23.728-16.84-24.057-16.84-24.057s15.265-.316 16.715-20.852zM476.482 71.89h.245c1.449 20.536 16.721 20.853 16.721 20.853s-16.841.328-16.841 24.057c0-23.729-16.84-24.057-16.84-24.057s15.265-.317 16.715-20.852zM277.089 55.823h.177c1.045 15.026 12.058 15.258 12.058 15.258s-12.144.24-12.144 17.603c0-17.363-12.145-17.603-12.145-17.603s11.009-.232 12.054-15.258zM152.467 307h.177c1.045 15.027 12.058 15.258 12.058 15.258s-12.144.24-12.144 17.603c0-17.363-12.145-17.603-12.145-17.603s11.009-.231 12.054-15.258z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={578.908}
        y1={555.634}
        x2={637.2}
        y2={494.193}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={812.552}
        y1={230.484}
        x2={723.96}
        y2={267.081}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={177.064}
        y1={465.197}
        x2={79.857}
        y2={312.816}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg141);
const Memo = memo(ForwardRef);
export default Memo;
