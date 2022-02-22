import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg214 = (
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
    <circle cx={444.295} cy={290.146} r={222.498} fill="url(#a)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M616.031 293.593H193.745c-39.64 0-37.821-32.793-24.873-44.219 13.271-11.712 39.493-6.961 39.493-6.961s7.807-22.058 33.503-32.796c22.73-9.499 46.541-4.979 46.541-4.979s0-15.138 14.553-27.675c14.555-12.539 33.96-11.319 33.96-11.319s13.339-83.475 102.479-83.475c89.141 0 99.449 78.599 99.449 78.599s20.012 0 34.566 13.405c14.553 13.405 16.372 28.636 16.372 28.636s48.672-6.59 63.067 35.596c8.578 25.143-9.046 55.188-36.824 55.188z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M486.221 375.407H350.912c-12.098 0-17.31-15.649-7.411-22.589.138-.1.279-.199.419-.295 14.096-9.678 32.595-8.799 32.595-8.799s2.64-52.368 52.411-52.368c44.999 0 62.943 44.123 69.416 68.433 2.102 7.897-3.94 15.618-12.121 15.618z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M309.844 285.941c0 78.946 86.003 164.049 117.375 192.47 6.501 5.888 16.055 5.888 22.555 0 31.355-28.421 117.358-113.524 117.358-192.47 0-69.192-57.598-125.283-128.644-125.283s-128.644 56.091-128.644 125.283z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M438.488 242.522v102.915m51.458-51.457H387.031"
      stroke="#fff"
      strokeWidth={23}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M159.509 442.108h186.573c15.104 0 21.619-19.312 9.254-27.881-.172-.119-.348-.242-.524-.361-17.602-11.947-40.703-10.862-40.703-10.862s-3.301-64.624-65.455-64.624c-30.729 0-55.563 51.864-55.563 51.864s-41.803 0-48.721 32.586c-2.091 9.872 4.92 19.278 15.139 19.278zm431.743-35.267h151.924c12.299 0 17.605-15.836 7.536-22.863l-.427-.296c-14.333-9.797-33.144-8.907-33.144-8.907s-2.688-52.992-53.299-52.992c-25.022 0-45.244 42.529-45.244 42.529s-34.04 0-39.673 26.721c-1.703 8.095 4.006 15.808 12.327 15.808zm45.272 118.251H509.477c-10.286 0-14.722-12.94-6.302-18.681.117-.08.237-.162.357-.242 11.986-8.004 27.717-7.277 27.717-7.277s2.247-43.299 44.571-43.299c20.926 0 37.836 34.749 37.836 34.749s28.466 0 33.177 21.833c1.424 6.614-3.35 12.917-10.309 12.917zm-263.475 7.261H258.44c-9.278 0-13.28-11.781-5.684-17.008l.321-.22c10.813-7.288 25.004-6.626 25.004-6.626s2.027-39.421 40.208-39.421c18.876 0 34.132 31.637 34.132 31.637s25.678 0 29.928 19.878c1.285 6.022-3.022 11.76-9.3 11.76z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <defs>
      <linearGradient
        id="a"
        x1={453.783}
        y1={762.135}
        x2={440.062}
        y2={-416.433}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg214);
const Memo = memo(ForwardRef);
export default Memo;
