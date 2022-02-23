import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg10 = (
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
      d="M579.48 488.733H303.403c-16.374 0-29.647-14.718-29.647-32.873 0-18.155 13.273-32.873 29.647-32.873h104.088c11.685 0 21.16-10.501 21.165-23.457l.001-1.109c.005-12.366-9.034-22.396-20.187-22.396h-.906c-29.411 0-53.13-26.567-52.736-59.172.053-4.394.054-8.785.003-13.181-.378-32.591 23.334-59.14 52.639-59.14h128.135c13.106 0 23.731-11.78 23.731-26.311 0-22.522 16.463-40.777 36.773-40.777h28.101c20.309 0 36.773 18.255 36.773 40.777v74.242c0 20.956 15.321 37.942 34.219 37.942h16.605c26.064 0 47.193 23.429 47.193 52.329 0 28.9-21.129 52.329-47.193 52.329h-85.896c-11.976 0-21.322 10.855-20.983 24.129l.017.717c.351 15.821-11.192 28.824-25.465 28.824z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M320.52 163.711h276.077c16.374 0 29.647 14.772 29.647 32.994s-13.273 32.994-29.647 32.994H492.509c-11.685 0-21.16 10.539-21.165 23.543l-.002 1.114c-.004 12.411 9.035 22.477 20.188 22.477h.905c29.412 0 53.13 26.665 52.737 59.39a561.02 561.02 0 0 0-.003 13.23c.378 32.711-23.334 59.357-52.639 59.357H364.395c-13.106 0-23.731 11.824-23.731 26.408 0 22.605-16.463 40.926-36.773 40.926H275.79c-20.309 0-36.773-18.321-36.773-40.926v-74.515c0-21.033-15.321-38.082-34.219-38.082h-16.605c-26.064 0-47.193-23.515-47.193-52.521s21.129-52.521 47.193-52.521h85.896c11.976 0 21.322-10.895 20.983-24.218l-.017-.72c-.351-15.879 11.192-28.93 25.465-28.93z"
      fill="url(#b)"
    />
    <path
      d="M654.001 323.065c-11.456 24.45-44.155 39.891-44.155 39.891s-13.476-37.092-2.02-61.542c11.474-24.45 31.086-39.428 43.839-33.44 12.753 5.969 13.792 30.641 2.336 55.091zm-70.626 28.88c12.772 23.783 5.635 59.226 5.635 59.226s-37.797-11.308-50.568-35.109c-12.772-23.801-13.069-48.474-.649-55.129 12.401-6.654 32.81 7.23 45.582 31.012zM569.472 489.21c-.389 4.672-.908 7.879-1.038 8.694-.018.093-.018.167-.037.204v.019s-.018 0-.018-.019l-.13-.018c-.408-.13-1.631-.501-3.467-1.113-9.806-3.318-36.869-13.902-47.602-33.014-13.217-23.541-13.958-48.232-1.687-55.11 12.271-6.895 32.94 6.6 46.157 30.141 5.913 10.548 7.896 23.486 8.249 34.59.204 5.969-.056 11.4-.427 15.626zm78.43-69.475c-26.137 6.765-58.891-8.546-58.891-8.546s19.964-34.052 46.101-40.818c26.137-6.766 50.179-1.205 53.719 12.42 3.541 13.643-14.792 30.178-40.929 36.944z"
      fill="#E1E4E5"
    />
    <path
      d="M624.861 499.331c-25.285 9.454-59.448-2.372-59.448-2.372s16.312-35.943 41.597-45.397c25.284-9.454 49.789-6.432 54.72 6.766 4.931 13.198-11.567 31.55-36.869 41.003z"
      fill="#E1E4E5"
    />
    <path
      d="M617.166 353.614c-.222.333-19.779 33.125-40.503 124.289-1.52 6.673-3.04 13.68-4.56 20.984l-.445-.093-3.262-.686v-.018h-.019l-.129-.019c-.408-.13-1.632-.5-3.467-1.112a1103.375 1103.375 0 0 1 5.116-23.394c20.762-90.552 39.966-122.509 40.818-123.937l6.451 3.986zM230.417 137.215c11.456 24.45 44.155 39.891 44.155 39.891s13.476-37.092 2.02-61.542c-11.474-24.45-31.086-39.427-43.839-33.44-12.753 5.969-13.791 30.641-2.336 55.091zm24.311 278.25c22.146 15.447 58.185 12.47 58.185 12.47s-6.876-38.861-29.021-54.307c-22.162-15.438-46.635-18.603-54.686-7.041-8.061 11.546 3.377 33.432 25.522 48.878zm83.465 94.377c29.053-5.178 54.604-35.331 54.604-35.331s-35.346-24.719-64.399-19.542c-29.058 5.197-50.418 21.665-47.705 36.823 2.694 15.152 28.448 23.227 57.5 18.05zm-37.148-343.747c-12.772 23.783-5.636 59.225-5.636 59.225s37.797-11.308 50.568-35.109c12.772-23.801 13.069-48.473.649-55.128-12.401-6.654-32.81 7.23-45.581 31.012zm13.901 137.264c.389 4.671.908 7.878 1.038 8.694.019.093.019.167.037.204v.018s.019 0 .019-.018l.13-.019c.407-.129 1.631-.5 3.466-1.112 9.806-3.318 36.869-13.902 47.602-33.014 13.217-23.541 13.958-48.232 1.687-55.109-12.271-6.896-32.94 6.599-46.156 30.14-5.914 10.548-7.897 23.486-8.249 34.59-.204 5.969.055 11.4.426 15.626zm-78.428-69.475c26.137 6.766 58.891-8.546 58.891-8.546s-19.964-34.052-46.101-40.817c-26.136-6.766-50.178-1.205-53.719 12.419-3.54 13.643 14.792 30.178 40.929 36.944z"
      fill="#E1E4E5"
    />
    <path
      d="M259.56 313.48c25.284 9.454 59.447-2.372 59.447-2.372s-16.312-35.943-41.596-45.397c-25.284-9.453-49.79-6.432-54.721 6.766-4.93 13.198 11.567 31.55 36.87 41.003z"
      fill="#E1E4E5"
    />
    <path
      d="M267.253 167.763c.222.334 19.779 33.125 40.503 124.289 1.52 6.673 3.04 13.68 4.56 20.983l.445-.092 3.262-.686v-.019h.019l.129-.018c.408-.13 1.632-.501 3.467-1.112a1102.013 1102.013 0 0 0-5.116-23.394c-20.762-90.551-39.966-122.509-40.818-123.936l-6.451 3.985zm376.628-42.851c-12.573 26.836-48.462 43.783-48.462 43.783s-14.791-40.711-2.217-67.546c12.593-26.835 34.118-43.274 48.116-36.702 13.997 6.55 15.137 33.63 2.563 60.465zm-77.516 31.698c14.018 26.103 6.185 65.003 6.185 65.003s-41.484-12.411-55.502-38.534c-14.017-26.123-14.343-53.202-.712-60.506 13.611-7.304 36.011 7.934 50.029 34.037zm-15.258 150.656c-.427 5.127-.997 8.647-1.139 9.542-.021.101-.021.183-.041.224v.02s-.02 0-.02-.02l-.143-.021c-.447-.142-1.79-.549-3.804-1.22-10.763-3.642-40.467-15.259-52.247-36.235-14.506-25.839-15.319-52.938-1.851-60.486 13.468-7.569 36.153 7.243 50.659 33.081 6.491 11.576 8.667 25.777 9.054 37.964a142.83 142.83 0 0 1-.468 17.151zm86.078-76.254c-28.686 7.426-64.636-9.379-64.636-9.379s21.912-37.374 50.598-44.8c28.687-7.426 55.075-1.322 58.96 13.631 3.886 14.974-16.235 33.122-44.922 40.548z"
      fill="#E1E4E5"
    />
    <path
      d="M611.896 318.374c-27.75 10.376-65.247-2.604-65.247-2.604s17.904-39.449 45.655-49.825c27.751-10.376 54.647-7.06 60.059 7.426 5.412 14.486-12.696 34.627-40.467 45.003z"
      fill="#E1E4E5"
    />
    <path
      d="M603.453 158.441c-.244.366-21.708 36.357-44.454 136.414a1269.715 1269.715 0 0 0-5.005 23.031l-.488-.102-3.581-.752v-.021h-.02l-.142-.02c-.448-.143-1.791-.549-3.805-1.221a1208.233 1208.233 0 0 1 5.615-25.675c22.787-99.386 43.864-134.461 44.8-136.028l7.08 4.374z"
      fill="#E1E4E5"
    />
    <circle cx={450} cy={320.5} r={187.689} fill="#6f381e" />
    <path
      d="M450 360.555v-31.524c23.386 0 42.344-18.818 42.344-42.032 0-23.214-18.958-42.032-42.344-42.032-23.386 0-42.345 18.818-42.345 42.032M450 412.685c-.569 0-1.03.487-1.03 1.087 0 .601.461 1.087 1.03 1.087s1.03-.486 1.03-1.087c0-.6-.461-1.087-1.03-1.087"
      stroke="#fff"
      strokeWidth={28.027}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      rx={14.467}
      ry={13.911}
      transform="scale(1 -1) rotate(43.879 774.395 67.403)"
      fill="#6f381e"
    />
    <ellipse
      rx={14.467}
      ry={13.911}
      transform="scale(-1 1) rotate(-1.121 11667.736 36326.556)"
      fill="#6f381e"
    />
    <circle
      cx={207.479}
      cy={419.288}
      r={7.234}
      transform="rotate(136.121 207.479 419.288)"
      fill="#E1E4E5"
    />
    <circle
      cx={707.973}
      cy={359.736}
      r={7.234}
      transform="rotate(1.121 707.973 359.736)"
      fill="#E1E4E5"
    />
    <circle
      r={23.269}
      transform="scale(1 -1) rotate(28.879 615.257 229.788)"
      fill="#6f381e"
    />
    <circle
      r={23.269}
      transform="scale(-1 1) rotate(-16.121 1470.103 2402.483)"
      fill="#6f381e"
    />
    <defs>
      <linearGradient
        id="a"
        x1={506.032}
        y1={2.918}
        x2={512.189}
        y2={827.428}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={393.969}
        y1={651.312}
        x2={387.765}
        y2={-176.229}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg10);
const Memo = memo(ForwardRef);
export default Memo;