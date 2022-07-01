import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg37 = (
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
      d="M672.9 334.088c3.066 56.505-107.405 171.4-243.568 128.874-63.328-19.781-57.964-52.612-106.119-95.881-28.703-25.788-69.943-45.289-81.414-82.775-9.908-32.356-3.832-67.134 13.347-89.755 38.635-50.872 116.631-85.708 193.482-5.554s216.347-.639 224.272 145.091z"
      fill="url(#a)"
    />
    <path
      d="M624.963 189.348c-10.123 18.067-32.294 20.549-67.814 17.116-26.713-2.587-51.073-4.589-77.788-19.154-18.699-10.188-33.501-23.971-44.304-37.359-11.707-14.502-28.047-31.054-20.036-47.497 11.008-22.589 74.667-41.613 136.482-10.502 67.904 34.185 83.363 79.738 73.46 97.396z"
      fill="url(#b)"
    />
    <path
      d="M322.779 478.849c-24.831-34.737-50.26-71.657-83.552-89.841-34.339-18.766-40.672-7.2-43.049 11.187-2.377 18.387 8.218 61.953 55.081 86.741 46.876 24.795 94.753 24.423 71.52-8.087z"
      fill="url(#c)"
    />
    <path
      d="M698.914 237.112c-17.572 4.163-36.157-10.74-36.157-10.74s9.918-21.643 27.496-25.793c17.572-4.163 36.151 10.726 36.151 10.726s-9.918 21.644-27.49 25.807z"
      fill="url(#d)"
    />
    <path
      d="M707.902 408.242c15.931 10.974 40.269 3.303 40.269 3.303s-1.507-25.459-17.449-36.422c-15.931-10.973-40.259-3.313-40.259-3.313s1.507 25.459 17.439 36.432z"
      fill="url(#e)"
    />
    <path
      d="M170.51 293.549c17.271 17.578 49.567 13.872 49.567 13.872s4.274-32.207-13.013-49.774c-17.271-17.579-49.551-13.883-49.551-13.883s-4.274 32.207 12.997 49.785z"
      fill="url(#f)"
    />
    <circle
      cx={695.073}
      cy={312.099}
      r={8.833}
      transform="rotate(180 695.073 312.099)"
      fill="#6f381e"
    />
    <circle
      cx={283.226}
      cy={426.931}
      r={9.937}
      transform="rotate(180 283.226 426.931)"
      fill="#6f381e"
    />
    <circle
      r={8.281}
      transform="matrix(-1 0 0 1 226.363 173.529)"
      fill="#6f381e"
    />
    <circle
      r={3.865}
      transform="matrix(-1 0 0 1 549.878 216.591)"
      fill="#6f381e"
    />
    <circle
      r={4.969}
      transform="matrix(-1 0 0 1 668.022 423.066)"
      fill="#E1E4E5"
    />
    <circle
      r={7.177}
      transform="matrix(-1 0 0 1 205.384 329.214)"
      fill="#E1E4E5"
    />
    <circle
      r={5.462}
      transform="matrix(-1 0 0 1 371.5 468.83)"
      fill="#E1E4E5"
    />
    <circle
      r={6.073}
      transform="matrix(-1 0 0 1 601.773 128.259)"
      fill="#E1E4E5"
    />
    <circle
      r={5.453}
      transform="scale(1 -1) rotate(-75 -47.767 -308.71)"
      fill="#E1E4E5"
    />
    <circle
      r={7.255}
      transform="matrix(-1 0 0 1 358.841 141.587)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={5.581}
      ry={4.464}
      transform="matrix(-1 0 0 1 611.157 293.675)"
      fill="#E1E4E5"
    />
    <circle
      r={11.349}
      transform="scale(1 -1) rotate(-75 157.847 -380.565)"
      fill="#E1E4E5"
    />
    <path
      d="M709.46 259.1h.146c.864 12.249 9.974 12.438 9.974 12.438s-10.045.196-10.045 14.349c0-14.153-10.045-14.349-10.045-14.349s9.105-.189 9.97-12.438zM320.608 79.589h.251c1.489 21.435 17.178 21.765 17.178 21.765s-17.3.343-17.3 25.111c0-24.768-17.3-25.111-17.3-25.111s15.682-.33 17.171-21.765z"
      fill="#E1E4E5"
    />
    <path
      d="M452.714 554.033c165.277 0 299.261-7.986 299.261-17.837 0-9.851-133.984-17.836-299.261-17.836-165.278 0-299.261 7.985-299.261 17.836 0 9.851 133.983 17.837 299.261 17.837z"
      fill="url(#g)"
    />
    <path
      d="M441.562 523.493h18.726V354.966h-18.726v168.527z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M404.682 513.524v14.354h92.748v-14.354h-92.748zm215.932-275.889 13.485 47.134a6.066 6.066 0 0 1-4.16 7.505l-81.857 23.417a6.067 6.067 0 0 1-6.606-2.315 6.037 6.037 0 0 1-.894-1.852l-13.478-47.114a6.059 6.059 0 0 1 4.154-7.499l81.857-23.423a6.07 6.07 0 0 1 7.499 4.147z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M634.316 286.843a6.068 6.068 0 0 1-4.382 5.425l-81.851 23.423a6.067 6.067 0 0 1-6.606-2.314l41.689-37.985 51.15 11.451z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m620.614 237.635-36.648 45.503-56.171-16.315-.691-2.413a6.059 6.059 0 0 1 4.154-7.499l81.857-23.423a6.07 6.07 0 0 1 7.499 4.147zm-275.609-16.514 17.086 59.72a7.685 7.685 0 0 1-5.271 9.509l-103.717 29.67a7.685 7.685 0 0 1-8.369-2.933 7.63 7.63 0 0 1-1.132-2.346l-17.078-59.695a7.676 7.676 0 0 1 5.263-9.502l103.716-29.678c4.074-1.165 8.312 1.181 9.502 5.255z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M362.363 283.468a7.686 7.686 0 0 1-5.552 6.874L253.103 320.02a7.686 7.686 0 0 1-8.37-2.933l52.821-48.128 64.809 14.509z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m345.005 221.121-46.434 57.654-71.172-20.672-.875-3.057a7.676 7.676 0 0 1 5.263-9.502l103.716-29.678c4.074-1.165 8.312 1.181 9.502 5.255zM648.85 343.965l10.962 38.316a4.932 4.932 0 0 1-3.382 6.102l-66.544 19.036a4.932 4.932 0 0 1-6.096-3.388l-10.958-38.3a4.925 4.925 0 0 1 3.377-6.096l66.544-19.042a4.937 4.937 0 0 1 6.097 3.372z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M659.987 383.967a4.933 4.933 0 0 1-3.562 4.41l-66.539 19.042a4.931 4.931 0 0 1-5.37-1.882l33.889-30.879 41.582 9.309z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m648.85 343.965-29.792 36.991-45.664-13.264-.562-1.961a4.925 4.925 0 0 1 3.377-6.096l66.544-19.042a4.937 4.937 0 0 1 6.097 3.372zm-386.691 10.319 10.706 37.42a4.816 4.816 0 0 1-3.303 5.959l-64.987 18.59a4.814 4.814 0 0 1-5.244-1.838 4.774 4.774 0 0 1-.71-1.47l-10.701-37.404a4.81 4.81 0 0 1 3.298-5.953l64.987-18.596a4.82 4.82 0 0 1 5.954 3.292z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M273.036 393.35a4.819 4.819 0 0 1-3.479 4.308l-64.982 18.596a4.817 4.817 0 0 1-5.244-1.838l33.096-30.156 40.609 9.09z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m262.159 354.284-29.095 36.126-44.595-12.953-.549-1.916a4.81 4.81 0 0 1 3.298-5.953l64.987-18.596a4.82 4.82 0 0 1 5.954 3.292zm84.715-20.017 6.731 23.525a3.027 3.027 0 0 1-2.077 3.746l-40.856 11.688a3.028 3.028 0 0 1-3.743-2.08l-6.727-23.515a3.023 3.023 0 0 1 2.073-3.743l40.856-11.691a3.031 3.031 0 0 1 3.743 2.07z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M353.712 358.828a3.027 3.027 0 0 1-2.187 2.707l-40.853 11.691a3.027 3.027 0 0 1-3.297-1.155l20.807-18.959 25.53 5.716z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m346.874 334.267-18.291 22.711-28.036-8.143-.345-1.204a3.023 3.023 0 0 1 2.073-3.743l40.856-11.691a3.031 3.031 0 0 1 3.743 2.07zm307.881-186.342 10.706 37.419a4.819 4.819 0 0 1-3.303 5.959l-64.987 18.591a4.819 4.819 0 0 1-5.954-3.309l-10.701-37.404a4.81 4.81 0 0 1 3.298-5.953l64.987-18.596a4.82 4.82 0 0 1 5.954 3.293z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M665.632 186.991a4.816 4.816 0 0 1-3.479 4.307l-64.982 18.596a4.815 4.815 0 0 1-5.244-1.838l33.096-30.156 40.609 9.091z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M654.755 147.925 625.66 184.05l-44.595-12.953-.549-1.916a4.81 4.81 0 0 1 3.298-5.953l64.987-18.596a4.82 4.82 0 0 1 5.954 3.293zm-167.893 28.47 10.706 37.419a4.818 4.818 0 0 1-3.303 5.959l-64.987 18.591a4.817 4.817 0 0 1-5.954-3.308l-10.701-37.404a4.811 4.811 0 0 1 3.298-5.954l64.987-18.596a4.822 4.822 0 0 1 5.954 3.293z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M497.738 215.461a4.816 4.816 0 0 1-3.479 4.307l-64.982 18.596a4.814 4.814 0 0 1-5.244-1.838l33.096-30.156 40.609 9.091z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m486.862 176.395-29.095 36.125-44.595-12.953-.549-1.915a4.811 4.811 0 0 1 3.298-5.954l64.987-18.596a4.822 4.822 0 0 1 5.954 3.293zm-96.748-43.692 10.707 37.419a4.819 4.819 0 0 1-3.303 5.959l-64.988 18.591a4.817 4.817 0 0 1-5.953-3.308l-10.701-37.404a4.811 4.811 0 0 1 3.298-5.954l64.987-18.596a4.82 4.82 0 0 1 5.953 3.293z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M400.991 171.769a4.815 4.815 0 0 1-3.479 4.307l-64.982 18.596a4.814 4.814 0 0 1-5.244-1.838l33.097-30.156 40.608 9.091z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="m390.114 132.703-29.094 36.125-44.595-12.953-.549-1.915a4.811 4.811 0 0 1 3.298-5.954l64.987-18.596a4.82 4.82 0 0 1 5.953 3.293z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M414.013 315.221h78.724c13.834 0 25.048 11.215 25.048 25.048v39.363a7.159 7.159 0 0 1-7.157 7.156H396.121a7.159 7.159 0 0 1-7.157-7.156v-39.363c0-13.833 11.215-25.048 25.049-25.048z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M439.061 293.751v50.097-50.097z"
      fill="#fff"
    />
    <path d="M439.061 293.751v50.097" stroke="#E1E4E5" strokeWidth={4.161} />
    <path
      d="M439.068 341.164a2.69 2.69 0 0 1 2.677 2.691 2.674 2.674 0 0 1-2.684 2.676 2.684 2.684 0 1 1 .007-5.367"
      stroke="#E1E4E5"
      strokeWidth={8.452}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M492.736 315.221c-13.834 0-25.048 11.215-25.048 25.048v46.519"
      fill="#fff"
    />
    <path
      d="M492.736 315.221c-13.834 0-25.048 11.215-25.048 25.048v46.519"
      stroke="#E1E4E5"
      strokeWidth={4.161}
    />
    <path
      d="M389.219 297.937c-.825 1.403.187 3.172 1.815 3.172h49.014a2.106 2.106 0 0 0 2.106-2.105v-24.702c0-1.99-1.61-3.599-3.6-3.599h-47.553c-1.63 0-2.642 1.772-1.813 3.176l6.471 10.959c.389.659.39 1.477.002 2.137l-6.442 10.962z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={540.863}
        y1={672.787}
        x2={334.221}
        y2={-259.513}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={556.766}
        y1={306.439}
        x2={466.535}
        y2={-99.022}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={295.053}
        y1={592.882}
        x2={213.588}
        y2={216.147}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={632.742}
        y1={247.462}
        x2={786.568}
        y2={174.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={769.96}
        y1={444.247}
        x2={644.554}
        y2={312.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={239.418}
        y1={353.593}
        x2={114.559}
        y2={157.864}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="g"
        x1={465.476}
        y1={574.034}
        x2={465.41}
        y2={479.54}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg37);
const Memo = memo(ForwardRef);
export default Memo;
