import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg293 = (
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
      d="M215.353 385.785c2.63 66.733 145.112 189.551 300.415 124.56 72.23-30.229 62.305-68.214 114.114-124.369 30.882-33.468 77.189-60.932 86.532-106.244 8.073-39.112-2.904-79.306-25.584-103.991-51.009-55.514-146.5-87.843-227.959 14.818s-254.282 23.117-247.518 195.226z"
      fill="url(#a)"
    />
    <path
      d="M209.778 199.363c11.607 20.715 37.028 23.562 77.755 19.625 30.629-2.966 58.561-5.261 89.193-21.962 21.44-11.681 38.411-27.485 50.798-42.835 13.423-16.629 32.158-35.607 22.974-54.461-12.622-25.9-85.614-47.713-156.491-12.041-77.859 39.197-95.584 91.427-84.229 111.674z"
      fill="url(#b)"
    />
    <path
      d="M115.341 261.506c30.091 14.927 70.029-4.266 70.029-4.266s-8.876-43.385-38.983-58.291c-30.091-14.927-70.013 4.245-70.013 4.245s8.876 43.386 38.967 58.312z"
      fill="url(#c)"
    />
    <path
      d="M789.571 308.01c-16.349 9.798-39.805.74-39.805.74s3.067-24.941 19.426-34.728c16.349-9.799 39.794-.752 39.794-.752s-3.067 24.941-19.415 34.74z"
      fill="url(#d)"
    />
    <circle cx={189.957} cy={465.566} r={9.242} fill="#E1E4E5" />
    <circle cx={791.879} cy={397.076} r={13.35} fill="#E1E4E5" />
    <circle cx={142.893} cy={374.192} r={10.16} fill="#E1E4E5" />
    <circle cx={199.775} cy={105} r={11.296} fill="#E1E4E5" />
    <circle
      cx={828.448}
      cy={176.34}
      r={10.143}
      transform="rotate(90 828.448 176.34)"
      fill="#E1E4E5"
    />
    <circle cx={531.094} cy={78.659} r={13.494} fill="#E1E4E5" />
    <ellipse cx={179.873} cy={317.913} rx={10.38} ry={8.304} fill="#E1E4E5" />
    <path
      d="M715.083 116.134h-.148c-.875 12.407-10.102 12.598-10.102 12.598s10.174.198 10.174 14.534c0-14.336 10.175-14.534 10.175-14.534s-9.223-.191-10.099-12.598zm15.458 324.758h-.142c-.841 12.37-9.699 12.56-9.699 12.56s9.768.198 9.768 14.491c0-14.293 9.769-14.491 9.769-14.491s-8.855-.19-9.696-12.56z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M297.664 200.502h305.922c6.376 0 12.433 3.309 16.585 9.06 4.151 5.75 5.982 13.368 5.013 20.856l-36.981 285.635c-1.64 12.667-10.812 22.018-21.598 22.018h-231.96c-10.786 0-19.958-9.351-21.598-22.018l-36.981-285.635c-.97-7.488.861-15.106 5.013-20.856 4.151-5.751 10.209-9.06 16.585-9.06z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m505.255 538.071 21.852-337.569-21.852 337.569z"
      fill="#fff"
    />
    <path
      d="m505.255 538.071 21.852-337.569"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m395.995 538.071-21.852-337.569 21.852 337.569z"
      fill="#fff"
    />
    <path
      d="m395.995 538.071-21.852-337.569"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M403.714 132.79h131.807c10.671 0 15.273-13.294 6.538-19.193l-.37-.248c-12.436-8.224-28.756-7.477-28.756-7.477s-2.332-44.486-46.241-44.486c-21.709 0-39.254 35.702-39.254 35.702s-29.532 0-34.419 22.432c-1.478 6.795 3.475 13.27 10.695 13.27z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M596.015 173.417H464.208c-10.671 0-15.274-13.294-6.538-19.193l.37-.248c12.436-8.224 28.756-7.477 28.756-7.477s2.331-44.486 46.241-44.486c21.709 0 39.254 35.702 39.254 35.702s29.532 0 34.419 22.432c1.478 6.795-3.476 13.27-10.695 13.27z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M328.477 173.417c-22.27 0-11.85-35.097 16.363-26.714 1.562-48.733 81.483-84.39 114.531-18.66 9.344-7.348 30.325 6.532 25.679 18.66 10.379.879 18.544 2.073 24.897 3.653 14.668 3.649 11.764 22.897-3.355 22.762l-178.115.299z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M291.669 200.502c-17.951 0-9.552-35.097 13.19-26.714 1.259-48.733 65.68-84.39 92.319-18.661 7.531-7.348 24.443 6.532 20.698 18.661 8.366.879 14.948 2.072 20.069 3.652 11.823 3.65 9.483 22.897-2.704 22.763l-143.572.299z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M415.886 200.502c-22.27 0-11.85-35.097 16.363-26.714 1.562-48.733 81.483-84.39 114.531-18.661 9.344-7.348 30.325 6.532 25.679 18.661 10.379.879 18.544 2.072 24.897 3.652 14.668 3.65 11.764 22.897-3.355 22.763l-178.115.299z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <circle
      cx={450.004}
      cy={366.144}
      r={105.26}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m492.035 385.586-52.898 29.871C426.113 422.802 410 413.36 410 398.365v-59.728c0-15.008 16.086-24.438 29.137-17.092l52.898 29.871c13.287 7.477 13.287 26.666 0 34.17z"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={407.864}
        y1={769.198}
        x2={547.823}
        y2={-349.071}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={287.973}
        y1={333.62}
        x2={391.432}
        y2={-131.282}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={230.893}
        y1={308.067}
        x2={-17.297}
        y2={111.747}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={726.305}
        y1={339.551}
        x2={857.853}
        y2={217.325}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg293);
const Memo = memo(ForwardRef);
export default Memo;
