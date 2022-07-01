import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg312 = (
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
      d="M132.875 497h680.692c63.896 0 60.964-53.046 40.093-71.53-21.392-18.944-63.659-11.26-63.659-11.26s-12.585-35.68-54.005-53.051c-36.638-15.365-75.02-8.054-75.02-8.054s0-24.487-23.459-44.767c-23.46-20.282-54.739-18.31-54.739-18.31S561.276 155 417.588 155c-143.687 0-160.303 127.14-160.303 127.14s-32.257 0-55.718 21.686c-23.459 21.683-26.391 46.32-26.391 46.32s-78.455-10.658-101.658 57.582C59.69 448.399 88.1 497 132.875 497z"
      fill="url(#a)"
    />
    <path
      d="M312.063 245.54c-46.477 87.323-25.698 174.111 58.709 218.906 84.407 44.794 171.206 24.054 218.932-58.61 47.727-82.664 16.382-171.616-58.708-218.906-75.09-47.289-172.455-28.713-218.933 58.61z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={22.907}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M540.358 193.51c-44.83-13.981-57.997 18.095-58.941 44.001-.944 25.906 77.746 60.323 63.113 107.956-11.605 37.776-96.739-3.29-114.247 27.035-17.508 30.325 29.488 52.218-4.873 111.734"
      stroke="#fff"
      strokeWidth={22.907}
      strokeLinejoin="round"
    />
    <path
      d="M407.501 167.063c19.838 11.454 23.243 60.038 4.531 67.19-12.475 4.768-28.848-1.165-37.514 8.794-13.866 15.935 29.007 40.687 1.712 72.809-13.647 16.061-75.569 12.42-82.286 59.414"
      stroke="#fff"
      strokeWidth={22.907}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M369.426 202.539c0-25.428-19.328-46.042-43.172-46.042-23.843 0-43.171 20.614-43.171 46.042 0 38.046 43.171 66.205 43.171 66.205s43.172-28.159 43.172-66.205z"
      fill="#2D2019"
    />
    <path
      d="M326.255 182.401c-9.538 0-17.269 7.731-17.269 17.268s7.731 17.269 17.269 17.269c9.537 0 17.268-7.732 17.268-17.269 0-9.537-7.731-17.268-17.268-17.268z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M610.483 236.371c0-25.428-19.329-46.041-43.172-46.041-23.843 0-43.172 20.613-43.172 46.041 0 38.047 43.172 66.205 43.172 66.205s43.172-28.158 43.172-66.205z"
      fill="#2D2019"
    />
    <path
      d="M567.311 216.233c-9.537 0-17.269 7.731-17.269 17.269 0 9.537 7.732 17.268 17.269 17.268 9.537 0 17.269-7.731 17.269-17.268 0-9.538-7.732-17.269-17.269-17.269z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M394.801 435.137c0-25.428-19.329-46.041-43.172-46.041-23.843 0-43.172 20.613-43.172 46.041 0 38.047 43.172 66.205 43.172 66.205s43.172-28.158 43.172-66.205z"
      fill="#2D2019"
    />
    <path
      d="M351.629 414.999c-9.537 0-17.269 7.731-17.269 17.269 0 9.537 7.732 17.268 17.269 17.268 9.537 0 17.268-7.731 17.268-17.268 0-9.538-7.731-17.269-17.268-17.269z"
      fill="#fff"
    />
    <path
      d="M746.004 174.911c-8.468 15.113-27.015 17.189-56.727 14.317-22.345-2.164-42.723-3.838-65.07-16.022-15.642-8.522-28.023-20.052-37.06-31.25-9.793-12.132-23.461-25.977-16.761-39.732 9.209-18.896 62.46-34.81 114.168-8.785 56.802 28.596 69.734 66.701 61.45 81.472z"
      fill="url(#b)"
    />
    <path
      d="M833.08 255.612c-18.962 9.406-44.13-2.688-44.13-2.688s5.594-27.34 24.566-36.734c18.962-9.406 44.12 2.676 44.12 2.676s-5.594 27.34-24.556 36.746z"
      fill="url(#c)"
    />
    <path
      d="M72.346 374.39c21.037 12.608 51.218.953 51.218.953s-3.946-32.093-24.996-44.687c-21.037-12.608-51.205-.967-51.205-.967s3.946 32.093 24.983 44.701z"
      fill="url(#d)"
    />
    <circle
      cx={736.395}
      cy={224.093}
      r={17.237}
      transform="rotate(180 736.395 224.093)"
      fill="#6f381e"
    />
    <circle
      cx={435.19}
      cy={119.19}
      r={14.19}
      transform="rotate(180 435.19 119.19)"
      fill="#6f381e"
    />
    <circle
      r={16.16}
      transform="matrix(-1 0 0 1 173.449 419.164)"
      fill="#6f381e"
    />
    <circle
      r={7.541}
      transform="matrix(-1 0 0 1 787.441 315.635)"
      fill="#6f381e"
    />
    <circle
      r={9.696}
      transform="matrix(-1 0 0 1 642.696 475.696)"
      fill="#E1E4E5"
    />
    <circle
      r={14.005}
      transform="matrix(-1 0 0 1 118.145 452.442)"
      fill="#E1E4E5"
    />
    <circle
      r={10.659}
      transform="matrix(-1 0 0 1 827.258 444.034)"
      fill="#E1E4E5"
    />
    <circle
      r={11.851}
      transform="matrix(-1 0 0 1 743.432 107.671)"
      fill="#E1E4E5"
    />
    <circle
      r={10.642}
      transform="scale(1 -1) rotate(-75 -121.669 -208.115)"
      fill="#E1E4E5"
    />
    <circle
      r={4.429}
      transform="matrix(-1 0 0 1 332.556 60.695)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={10.89}
      ry={8.712}
      transform="matrix(-1 0 0 1 760.419 391.468)"
      fill="#E1E4E5"
    />
    <circle
      r={7.704}
      transform="scale(1 -1) rotate(-75 218.54 -371.744)"
      fill="#E1E4E5"
    />
    <path
      d="M200.786 133.459h.155c.919 13.016 10.599 13.216 10.599 13.216s-10.675.209-10.675 15.248c0-15.039-10.674-15.248-10.674-15.248s9.676-.2 10.595-13.216zm-6.75 382.171h.149c.882 12.978 10.175 13.177 10.175 13.177s-10.248.208-10.248 15.203c0-14.995-10.248-15.203-10.248-15.203s9.29-.199 10.172-13.177z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={485.494}
        y1={688.745}
        x2={480.968}
        y2={-217.138}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={688.957}
        y1={272.858}
        x2={613.478}
        y2={-66.311}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={760.263}
        y1={284.953}
        x2={916.664}
        y2={161.239}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={153.753}
        y1={414.975}
        x2={-15.517}
        y2={257.701}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg312);
const Memo = memo(ForwardRef);
export default Memo;
