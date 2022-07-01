import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg354 = (
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
      d="M256.921 350.488c2.361 59.878 130.205 170.079 269.555 111.765 64.81-27.124 55.905-61.207 102.392-111.593 27.709-30.031 69.26-54.673 77.642-95.331 7.244-35.094-2.605-71.159-22.956-93.308-45.769-49.812-131.45-78.82-204.541 13.296-73.091 92.115-228.161 20.742-222.092 175.171z"
      fill="url(#a)"
    />
    <path
      d="M177.272 206.074c13.423 23.956 42.821 27.248 89.918 22.695 35.421-3.43 67.721-6.084 103.145-25.398 24.794-13.508 44.42-31.785 58.745-49.535 15.522-19.23 37.189-41.177 26.567-62.98-14.596-29.952-99.005-55.177-180.97-13.925-90.038 45.328-110.537 105.729-97.405 129.143z"
      fill="url(#b)"
    />
    <path
      d="M121.19 297.033c23.827 11.82 55.452-3.378 55.452-3.378s-7.028-34.355-30.868-46.158c-23.828-11.82-55.44 3.362-55.44 3.362s7.028 34.355 30.856 46.174z"
      fill="url(#c)"
    />
    <path
      d="M767.065 328.404c-18.906 11.331-46.031.856-46.031.856s3.547-28.842 22.465-40.161c18.906-11.331 46.019-.869 46.019-.869s-3.547 28.843-22.453 40.174z"
      fill="url(#d)"
    />
    <circle cx={154.35} cy={513.919} r={10.688} fill="#E1E4E5" />
    <ellipse cx={637.777} cy={534.24} rx={7.107} ry={7.653} fill="#E1E4E5" />
    <circle cx={99.924} cy={408.251} r={11.75} fill="#E1E4E5" />
    <circle cx={165.704} cy={96.95} r={13.063} fill="#E1E4E5" />
    <circle
      cx={809.27}
      cy={193.322}
      r={11.73}
      transform="rotate(90 809.27 193.322)"
      fill="#E1E4E5"
    />
    <circle cx={548.851} cy={66.489} r={15.605} fill="#E1E4E5" />
    <circle cx={346.404} cy={575.786} r={7.653} fill="#E1E4E5" />
    <path
      d="M761.622 109.826h-.171c-1.013 14.347-11.683 14.568-11.683 14.568s11.766.23 11.766 16.807c0-16.577 11.766-16.807 11.766-16.807s-10.666-.221-11.678-14.568zm17.875 375.559h-.164c-.972 14.304-11.216 14.524-11.216 14.524s11.296.229 11.296 16.758c0-16.529 11.297-16.758 11.297-16.758s-10.24-.22-11.213-14.524z"
      fill="#E1E4E5"
    />
    <path
      d="M229.954 368.705a11.796 11.796 0 0 1 11.798 0l57.923 33.441a11.8 11.8 0 0 1 5.899 10.218v66.883a11.8 11.8 0 0 1-5.899 10.218l-57.923 33.441a11.796 11.796 0 0 1-11.798 0l-57.922-33.441a11.8 11.8 0 0 1-5.9-10.218v-66.883a11.8 11.8 0 0 1 5.9-10.218l57.922-33.441z"
      fill="#6f381e"
    />
    <path
      d="m260.754 430.766-29.386 29.152-17.632-17.491"
      stroke="#fff"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M434.25 473.155v32.5c0 5.983 4.757 10.833 10.625 10.833h21.25c5.868 0 10.625-4.85 10.625-10.833v-32.5H498v32.5c0 17.949-14.271 32.5-31.875 32.5h-21.25c-17.604 0-31.875-14.551-31.875-32.5v-32.5h21.25z"
      fill="#6f381e"
    />
    <path
      d="M470.497 111.12c-22.96 7.471-75.44 24.272-101.68 31.707l-21.32 10.933c-14.213 29.338-43.296 88.888-45.92 92.386-2.624 3.499 14.578 51.387 23.507 74.894l38.267 47.56 12.026 69.973c12.573 7.107 38.923 21.32 43.733 21.32 6.014 0 91.84 1.64 99.494 0 6.122-1.312 16.4-20.956 20.773-30.613v-56.307c0-4.373 24.053-27.698 36.08-38.813l27.88-68.88-27.88-77.08c-15.671-16.947-48.325-52.152-53.573-57.4-5.248-5.248-36.445-15.307-51.387-19.68z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m518.642 367.812 15.736-12.615c28.903-23.169 47.289-58.634 47.289-98.422 0-69.616-56.435-126.051-126.051-126.051s-126.051 56.435-126.051 126.051c0 39.788 18.386 75.253 47.289 98.422l15.737 12.615v57.031c0 11.603 9.406 21.009 21.008 21.009h84.034c11.603 0 21.009-9.406 21.009-21.009v-57.031zm42.017 20.169v36.862c0 34.808-28.218 63.026-63.026 63.026h-84.034c-34.808 0-63.025-28.218-63.025-63.026v-36.862c-38.423-30.801-63.026-78.13-63.026-131.206 0-92.821 75.247-168.068 168.068-168.068 92.822 0 168.068 75.247 168.068 168.068 0 53.076-24.602 100.405-63.025 131.206z"
      fill="#6f381e"
    />
    <path
      d="M426.41 249.729c-8.787-8.765-23.033-8.765-31.82 0-8.787 8.765-8.787 22.976 0 31.741L433 319.785v125.37h45v-125.37l38.41-38.315c8.787-8.765 8.787-22.976 0-31.741s-23.033-8.765-31.82 0l-29.09 29.018-29.09-29.018z"
      fill="#fff"
    />
    <path
      d="M669.48 368.705a11.797 11.797 0 0 1 11.799 0l57.922 33.441a11.8 11.8 0 0 1 5.899 10.218v66.883a11.8 11.8 0 0 1-5.899 10.218l-57.922 33.441a11.797 11.797 0 0 1-11.799 0l-57.922-33.441a11.8 11.8 0 0 1-5.9-10.218v-66.883a11.8 11.8 0 0 1 5.9-10.218l57.922-33.441z"
      fill="#6f381e"
    />
    <path
      d="m700.28 430.766-29.386 29.152-17.632-17.491"
      stroke="#fff"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={429.656}
        y1={694.515}
        x2={555.239}
        y2={-308.879}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={267.698}
        y1={361.332}
        x2={387.341}
        y2={-176.293}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={212.69}
        y1={333.902}
        x2={16.16}
        y2={178.446}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={693.903}
        y1={364.879}
        x2={846.029}
        y2={223.533}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg354);
const Memo = memo(ForwardRef);
export default Memo;
