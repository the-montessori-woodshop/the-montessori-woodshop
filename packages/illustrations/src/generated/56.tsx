import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg56 = (
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
      d="M636.621 174.065c-15.28-49.872-147.347-114.241-251.686-34.223-48.526 37.218-33.463 63.927-61.403 116.656-16.655 31.427-46.155 61.392-44.184 97.473 1.694 31.145 17.991 59.313 40.037 73.437 49.58 31.763 128.135 37.155 169.202-56.602 41.067-93.756 187.428-68.112 148.034-196.741z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M469.95 381.641H432.3c-41.584 0-75.3-33.715-75.3-75.3v-150.6c0-10.391 8.434-18.824 18.825-18.824h150.6c10.391 0 18.825 8.433 18.825 18.824v150.6c0 41.585-33.716 75.3-75.3 75.3z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={28.238}
    />
    <path d="M450.771 363.522v75.3" stroke="#6f381e" strokeWidth={28.238} />
    <path
      d="M394.296 438.822h112.95"
      stroke="#6f381e"
      strokeWidth={28.238}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M365.457 471.114h170.628"
      stroke="#6f381e"
      strokeWidth={42.657}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M532.061 193.392h56.475c10.391 0 18.825 8.433 18.825 18.825v37.65c0 31.192-25.282 56.474-56.475 56.474h-18.825m-162.58-112.949h-56.475c-10.391 0-18.825 8.433-18.825 18.825v37.65c0 31.192 25.282 56.474 56.475 56.474h18.825"
      stroke="#6f381e"
      strokeWidth={28.238}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m451.119 256.69 13.023 6.842c2.532 1.331 5.499-.818 5.012-3.642l-2.487-14.496 10.536-10.257c2.052-2 .922-5.486-1.915-5.895l-14.554-2.116-6.512-13.198c-1.265-2.571-4.927-2.571-6.199 0l-6.505 13.198-14.555 2.116c-2.837.409-3.966 3.895-1.915 5.895l10.536 10.257-2.486 14.496c-.487 2.824 2.48 4.973 5.012 3.642l13.022-6.842h-.013z"
      fill="#fff"
    />
    <path
      d="M629.812 136.917h.297c1.759 23.209 20.299 23.566 20.299 23.566s-20.444.372-20.444 27.19c0-26.818-20.444-27.19-20.444-27.19s18.532-.357 20.292-23.566zm-309.15 204.106h.277c1.641 21.643 18.929 21.976 18.929 21.976s-19.064.347-19.064 25.355c0-25.008-19.063-25.355-19.063-25.355s17.281-.333 18.921-21.976zm246.109 40.255h.18c1.069 14.1 12.331 14.317 12.331 14.317s-12.419.225-12.419 16.517c0-16.292-12.419-16.517-12.419-16.517s11.258-.217 12.327-14.317zM227.673 172.554h.18c1.069 14.1 12.332 14.317 12.332 14.317s-12.42.225-12.42 16.517c0-16.292-12.419-16.517-12.419-16.517s11.258-.217 12.327-14.317zm86.394-66.955h.18c1.069 14.099 12.332 14.316 12.332 14.316s-12.42.226-12.42 16.517c0-16.291-12.419-16.517-12.419-16.517s11.258-.217 12.327-14.316zm46.654 294.82h.137c.806 10.643 9.308 10.807 9.308 10.807s-9.375.17-9.375 12.467c0-12.297-9.374-12.467-9.374-12.467s8.498-.164 9.304-10.807zm268.903-93.954h.136c.807 10.643 9.308 10.807 9.308 10.807s-9.374.17-9.374 12.468c0-12.298-9.375-12.468-9.375-12.468s8.498-.164 9.305-10.807zm-60.476-200.866h.136c.807 10.642 9.308 10.806 9.308 10.806s-9.375.17-9.375 12.468c0-12.298-9.374-12.468-9.374-12.468s8.498-.164 9.305-10.806z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={414.859}
        y1={-77.138}
        x2={531.929}
        y2={795.257}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg56);
const Memo = memo(ForwardRef);
export default Memo;
