import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg255 = (
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
      d="M210.279 387.478c2.681 68.006 147.88 193.167 306.147 126.936 73.608-30.806 63.494-69.516 116.291-126.741 31.471-34.108 78.662-62.095 88.183-108.272 8.227-39.858-2.959-80.819-26.072-105.975-51.983-56.574-149.295-89.519-232.309 15.101-83.013 104.62-259.133 23.557-252.24 198.951z"
      fill="url(#a)"
    />
    <path
      d="M204.597 197.499c11.829 21.111 37.735 24.011 79.239 19.999 31.214-3.022 59.678-5.361 90.894-22.381 21.849-11.904 39.145-28.009 51.768-43.652 13.679-16.946 32.772-36.286 23.412-55.5-12.863-26.394-87.247-48.624-159.477-12.271-79.344 39.945-97.408 93.172-85.836 113.805z"
      fill="url(#b)"
    />
    <path
      d="M108.359 260.828c30.665 15.211 71.365-4.348 71.365-4.348s-9.046-44.213-39.727-59.404c-30.665-15.211-71.349 4.327-71.349 4.327s9.046 44.213 39.711 59.425z"
      fill="url(#c)"
    />
    <path
      d="M795.452 308.218c-16.66 9.986-40.563.755-40.563.755s3.125-25.417 19.796-35.391c16.661-9.985 40.554-.766 40.554-.766s-3.126 25.417-19.787 35.402z"
      fill="url(#d)"
    />
    <circle cx={184.398} cy={468.781} r={9.418} fill="#E1E4E5" />
    <circle cx={797.805} cy={398.984} r={13.604} fill="#E1E4E5" />
    <circle cx={136.436} cy={375.663} r={10.354} fill="#E1E4E5" />
    <circle cx={194.403} cy={101.336} r={11.511} fill="#E1E4E5" />
    <circle
      cx={835.072}
      cy={174.037}
      r={10.337}
      transform="rotate(90 835.072 174.037)"
      fill="#E1E4E5"
    />
    <circle cx={532.044} cy={74.493} r={13.752} fill="#E1E4E5" />
    <ellipse cx={174.122} cy={318.31} rx={10.578} ry={8.463} fill="#E1E4E5" />
    <path
      d="M719.544 112.682h-.151c-.892 12.644-10.295 12.838-10.295 12.838s10.368.203 10.368 14.812c0-14.609 10.369-14.812 10.369-14.812s-9.399-.194-10.291-12.838zm15.752 330.954h-.144c-.857 12.606-9.885 12.8-9.885 12.8s9.955.202 9.955 14.767c0-14.565 9.955-14.767 9.955-14.767s-9.024-.194-9.881-12.8z"
      fill="#E1E4E5"
    />
    <circle cx={456.861} cy={300.126} r={202.667} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M376.678 211.265v209.937-209.937z"
      fill="#fff"
    />
    <path
      d="M376.678 211.265v209.937"
      stroke="#E1E4E5"
      strokeWidth={9.271}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M371.602 206.838c27.839-17.322 63.103-17.322 90.943 0 27.839 17.323 63.103 17.323 90.943 0v133.167c-27.84 17.322-63.104 17.322-90.943 0-27.84-17.323-63.104-17.323-90.943 0"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={406.463}
        y1={778.206}
        x2={549.093}
        y2={-361.399}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={284.284}
        y1={334.317}
        x2={389.717}
        y2={-139.455}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={226.116}
        y1={308.276}
        x2={-26.811}
        y2={108.211}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={730.98}
        y1={340.361}
        x2={865.038}
        y2={215.803}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg255);
const Memo = memo(ForwardRef);
export default Memo;
