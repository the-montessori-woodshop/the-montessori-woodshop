import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg11 = (
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
      d="M760.721 385.868H717.59c-10.568 0-19.422-7.311-19.422-16.572 0-4.631 2.285-8.774 5.712-11.698 3.428-2.925 8.283-4.874 13.71-4.874h6.284c5.427 0 10.283-1.95 13.711-4.875 3.427-2.924 5.712-7.067 5.712-11.698 0-9.017-8.569-16.572-19.423-16.572H592.258c-3.509 0-5.772-4.289-5.772-7.799 0-8.773-8.284-15.841-18.566-15.841h-48.947a4.752 4.752 0 1 1 0-9.504h187.763c8.284 0 15.996-2.925 21.423-7.555 5.427-4.631 8.854-11.211 8.854-18.278 0-14.379-13.71-25.834-30.277-25.834h-96.895c-15.28 0-30.355-11.941-45.634-11.941h-53.929c-8.076 0-14.623-6.547-14.623-14.623s6.547-14.622 14.623-14.622H631.33c5.712 0 11.139-1.95 14.853-5.118 3.713-3.169 5.998-7.555 5.998-12.673 0-9.749-9.426-17.791-20.851-17.791H351.697c-5.713 0-11.14 1.95-14.853 5.118-3.713 3.168-5.998 7.555-5.998 12.673 0 9.748 9.426 17.791 20.851 17.791h7.141c9.426 0 17.423 6.58 17.423 14.866 0 4.143-1.999 7.798-5.141 10.479-3.142 2.681-7.427 4.387-12.282 4.387h-34.562c-5.998 0-11.711 2.193-15.709 5.605-3.999 3.412-6.57 8.043-6.57 13.404 0 10.48 9.997 18.766 21.994 18.766h35.132c11.426 0 20.851 8.042 20.851 17.791 0 4.874-2.285 9.261-5.998 12.429-3.713 3.168-8.854 5.118-14.567 5.118H327.99c-5.142 0-9.712 1.706-13.14 4.63-3.427 2.925-5.426 6.824-5.426 11.211 0 8.773 8.283 15.841 18.566 15.841h25.421c14.567 0 26.278 9.992 26.278 22.421 0 6.093-2.857 11.942-7.712 15.841-4.856 4.143-11.426 6.58-18.566 6.58h-35.419c-7.14 0-13.71 2.438-18.28 6.581-4.856 3.899-7.712 9.504-7.712 15.597 0 12.185 11.711 22.177 25.992 22.177h109.313c12.101 0 23.973 6.824 36.074 6.824h19.691c7.739 0 14.013 6.274 14.013 14.014 0 7.739-6.274 14.013-14.013 14.013h-48.254c-6.284 0-11.711 2.193-15.71 5.605-3.999 3.412-6.57 8.286-6.57 13.404 0 10.48 9.997 19.01 22.28 19.01h297.056c6.284 0 11.711-2.194 15.71-5.606 3.999-3.412 6.569-8.286 6.569-13.404 0-10.479-9.997-19.009-22.279-19.009h-8.855c-9.14 0-16.281-6.337-16.281-13.892 0-3.899 1.714-7.311 4.856-9.748 2.856-2.437 7.141-4.143 11.711-4.143h37.418c6.284 0 11.711-2.193 15.71-5.605 3.998-3.412 6.569-8.286 6.569-13.404 0-10.967-9.997-19.497-22.279-19.497z"
      fill="url(#a)"
    />
    <path
      d="M151.213 293.844h37.194c9.114 0 16.75-5.898 16.75-13.37 0-3.736-1.971-7.079-4.926-9.438-2.956-2.36-7.144-3.933-11.824-3.933h-5.419c-4.68 0-8.867-1.573-11.823-3.932-2.956-2.36-4.927-5.702-4.927-9.438 0-7.275 7.39-13.371 16.75-13.371h113.907c2.795 0 4.573-3.496 4.573-6.292 0-7.078 7.143-12.78 16.011-12.78h42.473a3.835 3.835 0 1 0 0-7.669H197.767c-7.143 0-13.794-2.359-18.474-6.095-4.68-3.736-7.636-9.045-7.636-14.747 0-11.601 11.824-20.842 26.11-20.842h83.97c12.984 0 25.959-9.635 38.944-9.635H368c6.516 0 11.797-5.282 11.797-11.797 0-6.516-5.282-11.798-11.797-11.798H262.796c-4.927 0-9.607-1.573-12.809-4.129-3.202-2.556-5.173-6.095-5.173-10.224 0-7.865 8.129-14.354 17.982-14.354h241.146c4.927 0 9.607 1.573 12.809 4.129 3.202 2.556 5.173 6.096 5.173 10.225 0 7.865-8.129 14.353-17.982 14.353h-6.158c-8.128 0-15.025 5.309-15.025 11.994 0 3.343 1.724 6.292 4.434 8.455 2.709 2.163 6.404 3.54 10.591 3.54h29.805c5.173 0 10.099 1.769 13.548 4.522 3.448 2.753 5.665 6.489 5.665 10.814 0 8.455-8.621 15.14-18.967 15.14h-30.297c-9.853 0-17.981 6.489-17.981 14.354 0 3.933 1.97 7.472 5.173 10.028 3.202 2.556 7.635 4.129 12.562 4.129h27.095c4.434 0 8.375 1.376 11.331 3.736 2.955 2.359 4.68 5.505 4.68 9.045 0 7.078-7.144 12.78-16.011 12.78h-21.922c-12.563 0-22.662 8.062-22.662 18.09 0 4.915 2.463 9.634 6.651 12.78 4.187 3.343 9.853 5.309 16.011 5.309h30.543c6.158 0 11.823 1.967 15.765 5.309 4.187 3.146 6.65 7.669 6.65 12.584 0 9.831-10.099 17.893-22.415 17.893h-94.446c-10.359 0-20.572 5.506-30.93 5.506h-17.76c-6.244 0-11.306 5.061-11.306 11.306 0 6.244 5.062 11.305 11.306 11.305h42.391c5.42 0 10.1 1.77 13.548 4.523 3.449 2.753 5.665 6.685 5.665 10.814 0 8.455-8.621 15.337-19.213 15.337H176.091c-5.419 0-10.099-1.77-13.547-4.522-3.449-2.753-5.666-6.686-5.666-10.815 0-8.455 8.621-15.337 19.213-15.337h7.636c7.882 0 14.04-5.112 14.04-11.207 0-3.146-1.478-5.899-4.187-7.865-2.463-1.966-6.158-3.343-10.099-3.343h-32.268c-5.419 0-10.099-1.769-13.548-4.522-3.448-2.753-5.665-6.685-5.665-10.815 0-8.848 8.621-15.73 19.213-15.73z"
      fill="url(#b)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M274.923 151h358.154C654.042 151 671 168.334 671 189.7v15.558C670.974 184.119 654.026 167 633.077 167H274.923C253.986 167 237 184.145 237 205.279V189.7c0-21.366 16.986-38.7 37.923-38.7zM237 235v171.3c0 21.366 16.986 38.7 37.923 38.7h358.154C654.014 445 671 427.666 671 406.3V235H237z"
      fill="#6f381e"
    />
    <path
      d="M633.077 151H274.923C253.986 151 237 168.145 237 189.279V219h434v-29.721C671 168.145 654.042 151 633.077 151z"
      fill="#6f381e"
    />
    <path
      opacity={0.5}
      d="M426 189h58m124 97h-89m89 46h-89m-8-143h118m-152 97H297m180 46H297m180 41H297"
      stroke="#E1E4E5"
      strokeWidth={13.718}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={546} cy={384} r={26} fill="#fff" />
    <circle cx={581} cy={384} r={26} fill="#2D2019" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M563.393 403.037c5.077-4.735 8.252-11.483 8.252-18.973 0-7.49-3.175-14.239-8.252-18.973-5.078 4.734-8.253 11.483-8.253 18.973 0 7.49 3.175 14.238 8.253 18.973z"
      fill="#2D2019"
    />
    <defs>
      <linearGradient
        id="a"
        x1={547.969}
        y1={676.412}
        x2={541.039}
        y2={-203.415}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={334.683}
        y1={528.256}
        x2={339.914}
        y2={-181.596}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg11);
const Memo = memo(ForwardRef);
export default Memo;