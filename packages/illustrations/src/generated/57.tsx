import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg57 = (
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
      d="M146.974 435.59h51.361c15.06 0 27.269 13.969 27.269 31.204 0 17.234 12.208 31.206 27.268 31.206h274.456c7.532 0 13.638-6.988 13.638-15.606 0-8.62-6.106-15.607-13.638-15.607h-58.89c-3.017 0-5.711-2.523-5.997-5.961-.329-3.943 2.373-7.257 5.749-7.257h113.839c22.822 0 41.323-21.173 41.323-47.288V288.452c0-17.233 12.209-31.204 27.268-31.204h88.797c17.995 0 32.583-16.693 32.583-37.286v-18.603c0-20.593-14.588-37.287-32.583-37.287h-49.481c-17.617 0-31.898-16.343-31.898-36.502 0-25.167-17.829-45.57-39.822-45.57H375.543c-14.492 0-26.271 13.377-26.382 29.959-.11 16.584-11.889 29.962-26.381 29.962H177.112c-10.494 0-19.522 9.228-20.016 21.221-.526 12.808 8.39 23.38 19.467 23.38h8.798c10.763 0 19.488 9.983 19.488 22.3v31.78c0 12.317 8.725 22.301 19.488 22.301h58.008c11.859 0 21.472 11.006 21.465 24.578-.008 13.57-9.626 24.559-21.482 24.55l-134.947-.115C122.385 311.658 102 334.774 102 363.38v20.744c0 28.425 20.135 51.466 44.974 51.466z"
      fill="url(#a)"
    />
    <rect
      x={230}
      y={136.684}
      width={474}
      height={317.633}
      rx={28}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M230 165c0-15.464 12.536-28 28-28h418c15.464 0 28 12.536 28 28v18H230v-18z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <circle cx={266.774} cy={162.016} r={6.992} fill="#E1E4E5" />
    <circle cx={290.928} cy={162.016} r={6.992} fill="#E1E4E5" />
    <circle cx={315.082} cy={162.016} r={6.992} fill="#E1E4E5" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M634.113 435.339c-7.122-6.73-37.977-36.482-37.977-36.482-4.318-4.081-11.317-4.081-15.627 0-4.318 4.08-4.318 24.909 0 28.982"
      fill="#6f381e"
    />
    <path
      d="M634.113 435.339c-7.122-6.73-37.977-36.482-37.977-36.482-4.318-4.081-11.317-4.081-15.627 0-4.318 4.08-4.318 24.909 0 28.982"
      stroke="#6f381e"
      strokeWidth={16.682}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M601.37 403.736a10.36 10.36 0 0 1 0-14.766c4.124-4.079 10.808-4.079 14.925 0l5.461 24.126"
      fill="#6f381e"
    />
    <path
      d="M601.37 403.736a10.36 10.36 0 0 1 0-14.766c4.124-4.079 10.808-4.079 14.925 0l5.461 24.126"
      stroke="#6f381e"
      strokeWidth={16.682}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m599.146 427.278-44.08-43.889c-4.298-4.279-11.266-4.279-15.557 0-4.298 4.28-4.298 11.217 0 15.489l54.459 54.222h-19.547c-6.395 0-11.581 5.163-11.581 11.531 0 5.309 3.763 9.873 8.985 10.917l41.234 8.201c17.229 3.432 35.045-1.935 47.469-14.313 20.522-20.433 20.522-53.565 0-73.997l-14.698-14.635-7.782-7.748c-4.298-4.279-11.266-4.279-15.556 0-4.298 4.28-4.298 11.217 0 15.489"
      fill="#6f381e"
    />
    <path
      d="M550.828 348v11.14M504 394.828h10.315m2.264-35.249 7.271 7.271"
      stroke="#6f381e"
      strokeWidth={16.682}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M335.549 464.099c33.993 0 61.55-27.557 61.55-61.55 0-33.992-27.557-61.549-61.55-61.549C301.557 341 274 368.557 274 402.549c0 33.993 27.557 61.55 61.549 61.55z"
      fill="#6f381e"
    />
    <path
      d="M321.294 398.327h28.503m.007-23.752h-4.986c-7.737 0-14.015 6.278-14.015 14.015v41.934"
      stroke="#fff"
      strokeWidth={10.282}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M432.906 326.812c41.37 0 74.906-33.536 74.906-74.906 0-41.369-33.536-74.906-74.906-74.906C391.537 177 358 210.537 358 251.906c0 41.37 33.537 74.906 74.906 74.906z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M472.607 242.416c0 31.46-17.978 53.932-49.438 53.932-17.978 0-25.184-9.386-31.461-17.977m0 0c.142-.023 13.483-4.495 13.483-4.495-15.011-15.176-16.15-37.655-4.494-53.932 5.528 10.284 15.85 19.768 26.966 22.472.427-12.982 9.236-22.472 22.472-22.472 9.011 0 14.314 3.438 17.977 8.989h13.484l-8.989 13.483"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M622.365 302.845c29.806 0 53.969-24.162 53.969-53.968 0-29.806-24.163-53.969-53.969-53.969s-53.969 24.163-53.969 53.969 24.163 53.968 53.969 53.968z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M609.135 242.861a8.324 8.324 0 1 1-11.772 11.772 8.324 8.324 0 1 1 11.772-11.772z"
      fill="#fff"
    />
    <path
      d="M609.135 242.861a8.324 8.324 0 1 1-11.772 11.772 8.324 8.324 0 1 1 11.772-11.772"
      stroke="#fff"
      strokeWidth={3.901}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M642.425 226.216a8.324 8.324 0 1 1-11.772 11.772 8.324 8.324 0 1 1 11.772-11.772z"
      fill="#fff"
    />
    <path
      d="M642.425 226.216a8.324 8.324 0 1 1-11.772 11.772 8.324 8.324 0 1 1 11.772-11.772"
      stroke="#fff"
      strokeWidth={3.901}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M642.425 259.506a8.324 8.324 0 1 1-11.773 11.771 8.324 8.324 0 0 1 11.773-11.771z"
      fill="#fff"
    />
    <path
      d="M642.425 259.506a8.324 8.324 0 1 1-11.773 11.771 8.324 8.324 0 0 1 11.773-11.771m-31.769-14.473 18.477-9.239m-18.477 16.667 18.477 9.238"
      stroke="#fff"
      strokeWidth={3.901}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={422.714}
        y1={-151.234}
        x2={430.679}
        y2={950.629}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg57);
const Memo = memo(ForwardRef);
export default Memo;
