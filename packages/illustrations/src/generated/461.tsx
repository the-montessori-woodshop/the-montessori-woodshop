import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg461 = (
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
      d="M624.801 368.871c46.794 11.085 96.286-28.599 96.286-28.599s-26.411-57.637-73.221-68.688c-46.794-11.086-96.271 28.565-96.271 28.565s26.411 57.637 73.206 68.722z"
      fill="url(#a)"
    />
    <path
      d="M327.077 255.995c-42.425 29.221-107.238 8.794-107.238 8.794s4.013-67.797 46.466-96.99c42.425-29.221 107.209-8.823 107.209-8.823s-4.013 67.797-46.437 97.019z"
      fill="url(#b)"
    />
    <circle cx={422.528} cy={145.063} r={14.546} fill="#E1E4E5" />
    <ellipse cx={592} cy={433} rx={8} ry={6} fill="#E1E4E5" />
    <ellipse cx={696} cy={262} rx={8} ry={6} fill="#E1E4E5" />
    <ellipse cx={370} cy={415} rx={8} ry={6} fill="#E1E4E5" />
    <ellipse cx={618} cy={206} rx={8} ry={6} fill="#E1E4E5" />
    <path
      d="M228.746 357.918h-.242c-1.433 19.957-16.535 20.264-16.535 20.264s16.653.319 16.653 23.379c0-23.06 16.653-23.379 16.653-23.379s-15.095-.307-16.529-20.264z"
      fill="#E1E4E5"
    />
    <path
      d="M477 491h-48V374h48v117z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M514 511H391v-31h123v31z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M551.22 202.551H341.579c-36.839 0-66.704 29.865-66.704 66.704v104.821c0 10.52 8.539 19.058 19.059 19.058h304.932c10.52 0 19.058-8.538 19.058-19.058V269.255c0-36.839-29.864-66.704-66.704-66.704z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M484.516 145.377v133.408-133.408z"
      fill="#fff"
    />
    <path d="M484.516 145.377v133.408" stroke="#E1E4E5" strokeWidth={11} />
    <path
      d="M484.497 271.636a7.162 7.162 0 0 0-7.128 7.166c0 3.945 3.202 7.147 7.147 7.128a7.15 7.15 0 0 0 7.147-7.147c0-3.945-3.202-7.147-7.166-7.147"
      stroke="#E1E4E5"
      strokeWidth={13.231}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M341.579 202.551c36.84 0 66.704 29.865 66.704 66.704v123.879"
      fill="#fff"
    />
    <path
      d="M341.579 202.551c36.84 0 66.704 29.865 66.704 66.704v123.879"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M619.291 160.006c1.292 2.197-.292 4.966-2.841 4.966H479.576a3.296 3.296 0 0 1-3.296-3.296v-68.09c0-5.3 4.286-9.586 9.586-9.586h130.683c2.552 0 4.135 2.775 2.838 4.972l-19.985 33.842a3.297 3.297 0 0 0-.003 3.346l19.892 33.846z"
      fill="#6f381e"
    />
    <path
      d="m216.137 228.638-22.158 77.443a9.97 9.97 0 0 0 6.836 12.333l134.497 38.475c4.168 1.189 8.475-.461 10.854-3.804a9.906 9.906 0 0 0 1.468-3.043l22.146-77.411c1.522-5.293-1.543-10.811-6.825-12.321l-134.497-38.486c-5.282-1.511-10.779 1.532-12.321 6.814z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M193.624 309.489a9.97 9.97 0 0 0 7.2 8.915l134.487 38.486a9.966 9.966 0 0 0 10.853-3.804l-68.497-62.411-84.043 18.814z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="m216.137 228.638 60.214 74.765 92.294-26.808 1.135-3.964c1.522-5.293-1.543-10.811-6.825-12.321l-134.497-38.486c-5.282-1.511-10.779 1.532-12.321 6.814z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle cx={218} cy={217} r={52} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M206.207 193c-9.702 0-16.207 8.94-16.207 17.265C190 227.164 217.008 241 217.5 241c.492 0 27.5-13.836 27.5-30.735 0-8.325-6.505-17.265-16.207-17.265-5.546 0-9.188 2.715-11.293 5.133-2.105-2.418-5.748-5.133-11.293-5.133zM561 516v-36 36z"
      fill="#fff"
    />
    <path d="M561 516v-36" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M631 516v-22 22z"
      fill="#fff"
    />
    <path d="M631 516v-22" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M545 516v-25 25z"
      fill="#fff"
    />
    <path d="M545 516v-25" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M615 516v-15 15z"
      fill="#fff"
    />
    <path d="M615 516v-15" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M576 516v-25 25z"
      fill="#fff"
    />
    <path d="M576 516v-25" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M646 516v-15 15z"
      fill="#fff"
    />
    <path d="M646 516v-15" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M345 516v-36 36z"
      fill="#fff"
    />
    <path d="M345 516v-36" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M275 516v-22 22z"
      fill="#fff"
    />
    <path d="M275 516v-22" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M361 516v-25 25z"
      fill="#fff"
    />
    <path d="M361 516v-25" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M291 516v-15 15z"
      fill="#fff"
    />
    <path d="M291 516v-15" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M330 516v-25 25z"
      fill="#fff"
    />
    <path d="M330 516v-25" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M260 516v-15 15z"
      fill="#fff"
    />
    <path d="M260 516v-15" stroke="#E1E4E5" strokeWidth={11} />
    <defs>
      <linearGradient
        id="a"
        x1={801.015}
        y1={396.434}
        x2={391.38}
        y2={202.908}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={161.816}
        y1={351.874}
        x2={495.77}
        y2={-0.272}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg461);
const Memo = memo(ForwardRef);
export default Memo;
