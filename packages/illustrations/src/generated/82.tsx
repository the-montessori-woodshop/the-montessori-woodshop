import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg82 = (
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
      d="M681.576 347.832c3.382 62.313-118.445 189.019-268.604 142.121-69.838-21.814-63.922-58.019-117.027-105.736-31.653-28.439-77.133-49.945-89.782-91.284-10.927-35.682-4.226-74.034 14.718-98.98 42.606-56.102 128.62-94.519 213.371-6.125 84.751 88.393 238.585-.705 247.324 160.004z"
      fill="url(#a)"
    />
    <path
      d="M645.836 208.552c-11.409 20.361-36.396 23.159-76.426 19.29-30.105-2.916-57.559-5.172-87.667-21.587-21.074-11.481-37.755-27.015-49.93-42.103-13.193-16.344-31.608-34.997-22.581-53.529 12.406-25.457 84.149-46.897 153.815-11.836 76.527 38.527 93.949 89.865 82.789 109.765z"
      fill="url(#b)"
    />
    <path
      d="M343.384 476.445c-29.695-41.544-60.107-85.698-99.923-107.445-41.068-22.443-48.642-8.611-51.485 13.379-2.843 21.99 9.828 74.093 65.875 103.738 56.061 29.653 113.319 29.209 85.533-9.672z"
      fill="url(#c)"
    />
    <path
      d="M687.87 215.875c-6.532-12.055.709-28.627.709-28.627s17.827 2.981 24.35 15.042c6.532 12.054-.7 28.62-.7 28.62s-17.828-2.981-24.359-15.035z"
      fill="url(#d)"
    />
    <path
      d="M345.964 117.424c14.045 9.674 35.502 2.912 35.502 2.912s-1.329-22.445-15.383-32.11c-14.045-9.674-35.492-2.92-35.492-2.92s1.328 22.444 15.373 32.118z"
      fill="url(#e)"
    />
    <path
      d="M565.043 164.452c15.226 15.497 43.699 12.23 43.699 12.23s3.767-28.394-11.473-43.881c-15.226-15.497-43.684-12.24-43.684-12.24s-3.768 28.394 11.458 43.891z"
      fill="url(#f)"
    />
    <ellipse
      cx={630.555}
      cy={375.434}
      rx={11.316}
      ry={10.823}
      transform="rotate(180 630.555 375.434)"
      fill="#6f381e"
    />
    <circle
      cx={460}
      cy={457.681}
      transform="rotate(180 460 457.681)"
      fill="#6f381e"
      r={12}
    />
    <ellipse
      cx={263.939}
      cy={434.187}
      rx={15.251}
      ry={14.759}
      transform="rotate(180 263.939 434.187)"
      fill="#6f381e"
    />
    <circle
      r={5.412}
      transform="matrix(-1 0 0 1 224.181 248.995)"
      fill="#6f381e"
    />
    <circle
      r={10.332}
      transform="matrix(-1 0 0 1 492.332 132.012)"
      fill="#6f381e"
    />
    <ellipse
      rx={10.332}
      ry={9.84}
      transform="matrix(-1 0 0 1 617.764 469.894)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.823}
      ry={9.84}
      transform="matrix(-1 0 0 1 171.824 340.52)"
      fill="#E1E4E5"
    />
    <circle
      r={7.239}
      transform="matrix(-1 0 0 1 302.762 472.988)"
      fill="#E1E4E5"
    />
    <circle
      r={4.92}
      transform="matrix(-1 0 0 1 555.282 131.413)"
      fill="#E1E4E5"
    />
    <circle
      r={4.808}
      transform="scale(1 -1) rotate(-75 -77.878 -309.428)"
      fill="#E1E4E5"
    />
    <circle
      r={6.396}
      transform="matrix(-1 0 0 1 246.812 195.862)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={4.92}
      ry={3.936}
      transform="matrix(-1 0 0 1 637.935 309.509)"
      fill="#E1E4E5"
    />
    <circle
      r={9.117}
      transform="scale(1 -1) rotate(-75 155.235 -326.225)"
      fill="#E1E4E5"
    />
    <path
      d="M708.714 307.542h.128c.762 10.798 8.793 10.964 8.793 10.964s-8.855.173-8.855 12.65c0-12.477-8.856-12.65-8.856-12.65s8.027-.166 8.79-10.964zm-8.785 57.139h.101c.601 8.512 6.931 8.643 6.931 8.643s-6.98.136-6.98 9.972c0-9.836-6.981-9.972-6.981-9.972s6.328-.131 6.929-8.643zm-517.454-213h.168c.995 14.324 11.479 14.545 11.479 14.545s-11.561.229-11.561 16.781c0-16.552-11.561-16.781-11.561-16.781s10.48-.221 11.475-14.545z"
      fill="#E1E4E5"
    />
    <path
      d="M739 528.046H602.624l-11.314-30.433c-4.009-10.779-12.208-19.447-22.694-24.189-9.877-4.464-23.17-12.572-36.054-27.023-25.076-28.124-38.382-58.292-38.382-58.292l84.517-.415s-7.606-47.239 34.4-109.976a35.509 35.509 0 0 0 5.841-22.823l-3.982-45.757s-28.546-31.876-11.033-71.418c0 0 16.746-23.168 23.391-14.688 0 0 50.587 120.367 55.192 138.264 4.605 17.897 10.747 29.148 4.605 85.396-1.625 14.892-2.211 27.308-2.191 37.521a133.08 133.08 0 0 0 12.811 56.67L739 528.046z"
      fill="#F8AE9D"
    />
    <path
      d="M199.815 373.327V192.552c0-13.462 10.903-24.378 24.358-24.378h369.158c13.562 0 24.358 11.031 24.358 24.378v180.775c0 13.458-10.899 24.377-24.358 24.377H224.169c-13.573 0-24.354-11.045-24.354-24.377z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M328.824 311.928v4.692c0 2.591-2.075 4.693-4.631 4.693h-55.567c-2.556 0-4.631-2.102-4.631-4.693v-4.767c0-14.199 16.013-23.424 32.414-23.424 16.402 0 32.415 9.23 32.415 23.424m-20.788-64.647c6.421 6.421 6.421 16.831 0 23.252-6.421 6.422-16.832 6.422-23.253 0-6.421-6.421-6.421-16.831 0-23.252 6.421-6.421 16.832-6.421 23.253 0z"
      fill="#fff"
    />
    <rect
      x={355.675}
      y={242.181}
      width={222.27}
      height={13.434}
      rx={6.717}
      fill="#fff"
    />
    <rect
      x={355.675}
      y={275.154}
      width={222.27}
      height={13.434}
      rx={6.717}
      fill="#fff"
    />
    <rect
      x={355.675}
      y={308.128}
      width={222.27}
      height={13.434}
      rx={6.717}
      fill="#fff"
    />
    <path
      d="M621.436 236.75s-1.088 4.046-3.553 6.041l-2.927-33.653s-21-23.449-15.926-55.07c1.738-10.826 7.127-20.788 15.366-28.027 4.706-4.132 9.874-6.893 12.918-3.005 0 0 23.79 56.603 40.224 97.949l-46.102 15.765z"
      fill="#F8AE9D"
    />
    <defs>
      <linearGradient
        id="a"
        x1={535.968}
        y1={721.346}
        x2={308.084}
        y2={-306.785}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={568.978}
        y1={340.513}
        x2={467.288}
        y2={-116.438}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={310.226}
        y1={612.822}
        x2={212.798}
        y2={162.267}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={667.177}
        y1={169.427}
        x2={750.908}
        y2={267.772}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={400.675}
        y1={149.165}
        x2={290.117}
        y2={32.586}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={625.792}
        y1={217.386}
        x2={515.717}
        y2={44.833}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg82);
const Memo = memo(ForwardRef);
export default Memo;
