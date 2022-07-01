import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg134 = (
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
      d="M194.066 494.594c13.513-11.675 12.329-35.203 12.329-35.203s-23.093-4.584-36.599 7.104c-13.513 11.675-12.336 35.191-12.336 35.191s23.093 4.584 36.606-7.092z"
      fill="url(#a)"
    />
    <circle
      cx={774.252}
      cy={449.74}
      r={17.447}
      transform="rotate(-135 774.252 449.74)"
      fill="#6f381e"
    />
    <circle
      cx={267.795}
      cy={467.738}
      r={24.914}
      transform="rotate(-90 267.795 467.738)"
      fill="#6f381e"
    />
    <circle
      cx={432.8}
      cy={107.418}
      r={19.628}
      transform="rotate(180 432.8 107.418)"
      fill="#6f381e"
    />
    <circle
      r={16.357}
      transform="matrix(-1 0 0 1 703.838 125.233)"
      fill="#6f381e"
    />
    <circle
      r={7.633}
      transform="matrix(-1 0 0 1 503.79 286.927)"
      fill="#E1E4E5"
    />
    <circle
      r={7.633}
      transform="matrix(-1 0 0 1 374.82 286.927)"
      fill="#E1E4E5"
    />
    <circle
      r={9.814}
      transform="scale(-1 1) rotate(-45 251.07 1038.028)"
      fill="#E1E4E5"
    />
    <circle
      r={5.973}
      transform="matrix(-1 0 0 1 245.071 289.085)"
      fill="#E1E4E5"
    />
    <circle
      r={7.655}
      transform="matrix(-1 0 0 1 128.565 428.449)"
      fill="#E1E4E5"
    />
    <circle
      r={9.138}
      transform="matrix(-1 0 0 1 553.906 159.546)"
      fill="#E1E4E5"
    />
    <circle
      r={6.016}
      transform="scale(1 -1) rotate(-75 84.003 -315.957)"
      fill="#E1E4E5"
    />
    <circle
      r={7.695}
      transform="matrix(-1 0 0 1 339.366 459.99)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.023}
      ry={8.818}
      transform="scale(-1 1) rotate(-45 455.96 741.554)"
      fill="#E1E4E5"
    />
    <circle
      r={12.647}
      transform="scale(1 -1) rotate(-75 236.518 -458.59)"
      fill="#E1E4E5"
    />
    <path
      d="M692.991 405.368h.289c1.707 24.194 19.7 24.566 19.7 24.566s-19.841.388-19.841 28.343c0-27.955-19.841-28.343-19.841-28.343s17.986-.372 19.693-24.566zM300.502 63.852h.313c1.855 26.695 21.392 27.105 21.392 27.105s-21.544.428-21.544 31.273c0-30.845-21.544-31.273-21.544-31.273s19.529-.41 21.383-27.105z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m484.113 458.031 28.402-57.595-71.257-103.986-71.276 103.986 28.403 57.595"
      fill="#6f381e"
    />
    <path
      d="m484.113 458.031 28.402-57.595-71.257-103.986-71.276 103.986 28.403 57.595"
      stroke="#fff"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M397.968 458.214h86.422v49.723h-86.422v-49.723z"
      fill="#6f381e"
      stroke="#fff"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M500.964 125.547v0a7.105 7.105 0 0 1-7.103-7.103v0a7.106 7.106 0 0 1 7.103-7.104v0a7.107 7.107 0 0 1 7.104 7.104v0a7.104 7.104 0 0 1-7.104 7.103z"
      stroke="#E1E4E5"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M441.236 399.144V296.45"
      stroke="#fff"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M397.605 201.242c-70.539 17.577-122.874 81.132-122.874 157.094"
      stroke="#E1E4E5"
      strokeWidth={4.874}
    />
    <path
      d="m404.895 201.296-166.071-.179"
      stroke="#E1E4E5"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M211.894 228.119v0c-14.866 0-26.93-12.065-26.93-26.931v0c0-14.865 12.064-26.93 26.93-26.93v0c14.865 0 26.93 12.065 26.93 26.93v0c0 14.884-12.065 26.931-26.93 26.931zm237.884 5.493h-26.93c-9.911 0-17.954-8.043-17.954-17.953v-26.93c0-9.911 8.043-17.954 17.954-17.954h26.93c9.91 0 17.953 8.043 17.953 17.954v26.93c0 9.91-8.043 17.953-17.953 17.953zM288.196 421.173h-26.93c-9.91 0-17.953-8.043-17.953-17.954v-26.93c0-9.91 8.043-17.953 17.953-17.953h26.93c9.911 0 17.954 8.043 17.954 17.953v26.93c0 9.929-8.043 17.954-17.954 17.954z"
      stroke="#E1E4E5"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M475.32 201.242c70.539 17.577 122.874 81.132 122.874 157.094"
      stroke="#E1E4E5"
      strokeWidth={4.874}
    />
    <path
      d="m468.03 201.296 166.07-.179"
      stroke="#E1E4E5"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M661.031 228.119v0c14.865 0 26.93-12.065 26.93-26.931v0c0-14.865-12.065-26.93-26.93-26.93v0c-14.866 0-26.93 12.065-26.93 26.93v0c0 14.884 12.064 26.931 26.93 26.931zm-237.884 5.493h26.93c9.91 0 17.954-8.043 17.954-17.953v-26.93c0-9.911-8.044-17.954-17.954-17.954h-26.93c-9.911 0-17.954 8.043-17.954 17.954v26.93c0 9.91 8.043 17.953 17.954 17.953zm161.581 187.561h26.931c9.91 0 17.953-8.043 17.953-17.954v-26.93c0-9.91-8.043-17.953-17.953-17.953h-26.931c-9.91 0-17.953 8.043-17.953 17.953v26.93c0 9.929 8.043 17.954 17.953 17.954z"
      stroke="#E1E4E5"
      strokeWidth={4.874}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M232.839 512.528h467.59v1.122h-467.59v-1.122z"
      stroke="#E1E4E5"
      strokeWidth={3.424}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M579.384 535.734c-23.694 0-42.903-19.21-42.903-42.904 0-23.693 19.209-42.903 42.903-42.903 23.693 0 42.903 19.21 42.903 42.903 0 23.694-19.21 42.904-42.903 42.904z"
      fill="#6f381e"
    />
    <path
      d="m593.685 486.33-17.873 18.201-10.729-10.919"
      stroke="#fff"
      strokeWidth={5.105}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={635.088}
      y={253.869}
      width={105.85}
      height={109.408}
      rx={52.925}
      fill="#6f381e"
    />
    <circle cx={680.274} cy={300.627} r={3.143} fill="#fff" />
    <path
      d="M712.101 306.394a22.763 22.763 0 0 0-3.267-.266c-6.595-.047-12.878 2.844-17.19 7.911-4.311 5.066-6.217 11.797-5.213 18.414"
      stroke="#fff"
      strokeWidth={5.413}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M713.28 307.896v0a25.345 25.345 0 0 1-25.344 25.343v0a25.344 25.344 0 0 1-25.343-25.343v0a25.345 25.345 0 0 1 25.343-25.344v0a25.343 25.343 0 0 1 25.344 25.344z"
      stroke="#fff"
      strokeWidth={5.413}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={114.818}
      y={286.767}
      width={95.205}
      height={98.405}
      rx={47.602}
      fill="#6f381e"
    />
    <circle cx={155.46} cy={328.822} r={2.827} fill="#fff" />
    <path
      d="M184.086 334.009a20.518 20.518 0 0 0-2.939-.238c-5.932-.043-11.583 2.558-15.461 7.114-3.878 4.557-5.592 10.612-4.689 16.563"
      stroke="#fff"
      strokeWidth={4.869}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M185.146 335.36v0a22.795 22.795 0 0 1-22.795 22.795v0a22.795 22.795 0 0 1-22.795-22.795v0a22.794 22.794 0 0 1 22.795-22.794v0a22.795 22.795 0 0 1 22.795 22.794z"
      stroke="#fff"
      strokeWidth={4.869}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m116.869 155.532 14.858 14.865m29.729-59.452 14.865 14.865m-44.595 14.866 9.912 9.905m4.954-24.772 9.913 9.905m19.817-39.636 9.906 9.913m4.952-24.769 9.912 9.905"
      stroke="#E1E4E5"
      strokeWidth={4.223}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M109.563 177.959c-4.177-4.177-4.177-10.949 0-15.126l88.917-88.917c4.177-4.177 10.949-4.177 15.125 0l24.513 24.512c4.176 4.177 4.176 10.948 0 15.125L149.2 202.471c-4.177 4.176-10.949 4.176-15.125 0l-24.512-24.512z"
      stroke="#E1E4E5"
      strokeWidth={4.223}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={240.683}
        y1={447.544}
        x2={93.347}
        y2={528.769}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg134);
const Memo = memo(ForwardRef);
export default Memo;
