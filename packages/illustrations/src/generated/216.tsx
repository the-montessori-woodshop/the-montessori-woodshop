import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg216 = (
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
      d="M646.613 431.582c-9.501 54.002-138.967 138.208-258.149 68.202-55.43-32.56-43.166-62.369-79.123-113.77-21.432-30.635-56.077-58.087-58.68-95.982-2.254-32.711 11.109-64.202 32.285-81.783 47.623-39.539 128.878-55.307 183.827 37.201 54.949 92.507 204.328 46.854 179.84 186.132z"
      fill="url(#a)"
    />
    <path
      d="M698.821 237.699c-12.348 22.039-39.393 25.067-82.721 20.879-32.586-3.156-62.301-5.597-94.889-23.365-22.81-12.427-40.865-29.241-54.043-45.571-14.28-17.691-34.212-37.88-24.441-57.939 13.428-27.554 91.081-50.76 166.485-12.81 82.832 41.7 101.69 97.267 89.609 118.806z"
      fill="url(#b)"
    />
    <path
      d="M782.299 283.776c-23.264 11.54-54.14-3.299-54.14-3.299s6.862-33.541 30.138-45.065c23.263-11.54 54.127 3.282 54.127 3.282s-6.862 33.542-30.125 45.082z"
      fill="url(#c)"
    />
    <path
      d="M120.084 366.538c24.803 14.865 60.387 1.123 60.387 1.123s-4.653-37.838-29.471-52.686c-24.803-14.865-60.372-1.14-60.372-1.14s4.653 37.838 29.456 52.703z"
      fill="url(#d)"
    />
    <circle
      cx={736.524}
      cy={206.447}
      r={12.702}
      transform="rotate(180 736.524 206.447)"
      fill="#6f381e"
    />
    <circle
      cx={348.169}
      cy={244.355}
      r={10.457}
      transform="rotate(180 348.169 244.355)"
      fill="#6f381e"
    />
    <circle
      r={11.909}
      transform="matrix(-1 0 0 1 212.142 334.722)"
      fill="#6f381e"
    />
    <circle
      r={5.557}
      transform="matrix(-1 0 0 1 711.122 272.371)"
      fill="#6f381e"
    />
    <circle
      r={7.145}
      transform="matrix(-1 0 0 1 707.914 481.332)"
      fill="#E1E4E5"
    />
    <circle
      r={5.313}
      transform="matrix(-1 0 0 1 155.224 443.321)"
      fill="#E1E4E5"
    />
    <circle
      r={7.855}
      transform="matrix(-1 0 0 1 744.3 410.69)"
      fill="#E1E4E5"
    />
    <circle
      r={8.733}
      transform="matrix(-1 0 0 1 660.943 167.864)"
      fill="#E1E4E5"
    />
    <circle
      r={7.842}
      transform="scale(1 -1) rotate(-75 -82.02 -253.302)"
      fill="#E1E4E5"
    />
    <circle
      r={7.216}
      transform="matrix(-1 0 0 1 390.753 104.216)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.025}
      ry={6.42}
      transform="matrix(-1 0 0 1 715.71 367.18)"
      fill="#E1E4E5"
    />
    <circle
      r={16.321}
      transform="scale(1 -1) rotate(-75 216.994 -417.75)"
      fill="#E1E4E5"
    />
    <path
      d="M219.603 212.912h.115c.677 9.591 7.81 9.739 7.81 9.739s-7.866.154-7.866 11.237c0-11.083-7.866-11.237-7.866-11.237s7.13-.148 7.807-9.739zm-11.95 251.073h.11c.65 9.563 7.498 9.711 7.498 9.711s-7.552.153-7.552 11.203c0-11.05-7.552-11.203-7.552-11.203s6.846-.148 7.496-9.711z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m268.692 225.279-37.989-37.819a26.934 26.934 0 0 0-18.994-7.837h-96.341c-14.843 0-26.866 11.969-26.866 26.747v187.225c0 14.777 12.023 26.746 26.866 26.746h134.33c14.843 0 26.865-11.969 26.865-26.746V244.189a26.696 26.696 0 0 0-7.871-18.91z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.64}
    />
    <path
      d="M135.021 374.936h93.495m-93.495-26.293h93.495"
      stroke="#E1E4E5"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M224.013 311.964v6.041c0 3.335-2.686 6.042-5.996 6.042h-71.944c-3.31 0-5.996-2.707-5.996-6.042v-6.138c0-18.282 20.732-30.159 41.968-30.159 21.236 0 41.968 11.883 41.968 30.159m-27.633-74.36c8.122 8.412 8.122 22.051 0 30.464-8.122 8.412-21.291 8.412-29.413 0-8.122-8.413-8.122-22.052 0-30.464 8.122-8.412 21.291-8.412 29.413 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m572.849 193.919-53.936-53.697a38.245 38.245 0 0 0-26.968-11.127H355.159c-21.075 0-38.145 16.994-38.145 37.975v265.824c0 20.981 17.07 37.975 38.145 37.975h190.722c21.074 0 38.144-16.994 38.144-37.975V220.767a37.9 37.9 0 0 0-11.176-26.848z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.64}
    />
    <path
      d="M383.062 369.071h132.744"
      stroke="#E1E4E5"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M509.413 316.994v8.578c0 4.735-3.814 8.577-8.512 8.577H398.753c-4.699 0-8.512-3.842-8.512-8.577v-8.715c0-25.957 29.435-42.821 59.586-42.821 30.15 0 59.586 16.873 59.586 42.821M470.18 211.28c11.532 11.943 11.532 31.308 0 43.252-11.532 11.944-30.229 11.944-41.761 0-11.532-11.944-11.532-31.309 0-43.252 11.532-11.944 30.229-11.944 41.761 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m804.665 225.279-37.988-37.819a26.935 26.935 0 0 0-18.994-7.837h-96.341c-14.844 0-26.866 11.969-26.866 26.747v187.225c0 14.777 12.022 26.746 26.866 26.746h134.329c14.844 0 26.866-11.969 26.866-26.746V244.189a26.693 26.693 0 0 0-7.872-18.91z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.64}
    />
    <path
      d="M670.994 374.936h93.495m-93.495-26.293h93.495"
      stroke="#E1E4E5"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M759.986 311.964v6.041c0 3.335-2.686 6.042-5.995 6.042h-71.945c-3.309 0-5.995-2.707-5.995-6.042v-6.138c0-18.282 20.732-30.159 41.967-30.159 21.236 0 41.968 11.883 41.968 30.159m-27.632-74.36c8.122 8.412 8.122 22.051 0 30.464-8.123 8.412-21.291 8.412-29.413 0-8.123-8.413-8.123-22.052 0-30.464 8.122-8.412 21.29-8.412 29.413 0z"
      fill="#6f381e"
    />
    <path
      d="m594.335 438.149-50.02-50.02"
      stroke="#6f381e"
      strokeWidth={28.186}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={449.781}
      cy={273.244}
      r={144.244}
      stroke="#6f381e"
      strokeWidth={25.854}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={447.7}
        y1={722.283}
        x2={457.181}
        y2={-202.951}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={615.632}
        y1={380.531}
        x2={505.565}
        y2={-114.063}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={692.964}
        y1={319.772}
        x2={884.843}
        y2={167.995}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={216.064}
        y1={414.389}
        x2={16.492}
        y2={228.959}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg216);
const Memo = memo(ForwardRef);
export default Memo;
