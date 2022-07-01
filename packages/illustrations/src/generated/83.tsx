import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg83 = (
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
      d="M304.876 196c4.203-17.045 43.928-41.938 65.156-26.93 6.516-32.472 12.611-52.721 33.899-68.718 21.289-15.996 56.809 4.913 62.514 48.708 5.705-18.003 34.71-42.267 58.01-21.808 21.559 18.932 23.721 50.655 21.469 68.718H304.876v.03z"
      fill="url(#a)"
    />
    <path
      d="M364.009 218.43c-3.35-13.573-35.005-33.396-51.921-21.445-5.192-25.859-10.049-41.984-27.013-54.723-16.964-12.738-45.269 3.912-49.815 38.788-4.546-14.337-27.66-33.659-46.227-17.366-17.179 15.076-18.902 40.338-17.107 54.722h192.083v.024z"
      fill="url(#b)"
    />
    <path
      d="M757.769 196c-3.415-13.838-35.688-34.048-52.934-21.864-5.294-26.363-10.246-42.804-27.541-55.791-17.295-12.987-46.152 3.989-50.787 39.545-4.635-14.616-28.199-34.316-47.129-17.705-17.514 15.37-19.271 41.126-17.441 55.791h195.832V196z"
      fill="url(#c)"
    />
    <path
      d="m350.017 228.267-9.609 213.31H165.547l18.082-86.575 58.275-18.392a10.937 10.937 0 0 0 6.613-6.487l34.844-89.48 66.656-12.376z"
      fill="#6f381e"
    />
    <path
      d="m330.753 250.723-4.363 76.955-63.109 5.912 27.186-80.054 40.286-2.813zM175.937 355.231l14.224-2.25-8.289 29.287-7.324-.781a3.029 3.029 0 0 1-2.698-3.237l1.55-20.275a3.014 3.014 0 0 1 2.537-2.744z"
      fill="#fff"
    />
    <path
      d="M255.451 312.914c3.399 2.893.333 29.023-2.1 28.586-2.423-.436-7.612-1.435-9.713-3.088-2.101-1.653-13.903-22.8-11.033-27.186 2.87-4.386 20.217-.563 22.846 1.688z"
      fill="#6f381e"
    />
    <path
      opacity={0.1}
      d="M255.451 312.914c3.399 2.893.333 29.023-2.1 28.586-2.423-.436-7.612-1.435-9.713-3.088-2.101-1.653-13.903-22.8-11.033-27.186 2.87-4.386 20.217-.563 22.846 1.688z"
      fill="#000"
    />
    <path
      d="M345.241 441.577h359.493L683.366 179.5h-325l-13.125 262.077z"
      fill="#6f381e"
    />
    <path d="M706.548 453.104H157.51v-16.337h549.038v16.337z" fill="url(#d)" />
    <path
      d="M200.276 455.009v-22.18l-53.712-3.299-3.896 25.479h57.608zm516.709-25.182-33.514 3.462v21.72h37.569l-4.055-25.182z"
      fill="#DBDBDB"
      stroke="#E1E4E5"
      strokeWidth={1.148}
    />
    <path
      d="M560.847 458.04s5.109-37.829 42.536-37.829 42.972 37.829 42.972 37.829"
      stroke="#E1E4E5"
      strokeWidth={11.481}
      strokeMiterlimit={10}
    />
    <path
      d="M603.612 421.451c53.534 0 53.626 83.189 0 83.189-53.534 0-53.626-83.189 0-83.189z"
      fill="#2D2019"
    />
    <path
      d="M603.612 444.16c24.293 0 24.339 37.759 0 37.759-24.304 0-24.338-37.759 0-37.759z"
      fill="#E1E4E5"
    />
    <path
      d="M240.171 458.04s5.109-37.829 42.535-37.829c37.427 0 42.972 37.829 42.972 37.829"
      stroke="#E1E4E5"
      strokeWidth={11.481}
      strokeMiterlimit={10}
    />
    <path
      d="M282.729 421.451c53.535 0 53.626 83.189 0 83.189-53.534 0-53.626-83.189 0-83.189z"
      fill="#2D2019"
    />
    <path
      d="M282.729 444.16c24.293 0 24.339 37.759 0 37.759-24.304 0-24.338-37.759 0-37.759z"
      fill="#E1E4E5"
    />
    <path
      d="M561.425 343.863c-20.817 17.342-54.579 17.342-75.395 0m-8.422-71.396v11.699m93.938-11.699v11.699m-55.857 31.516h15.03m-3.757-54.486c-7.152 15.974-11.273 33.761-11.273 52.606"
      stroke="#2D2019"
      strokeWidth={15.03}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={420.597}
        y1={252.626}
        x2={421.898}
        y2={-14.901}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={271.795}
        y1={263.524}
        x2={270.759}
        y2={50.482}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={663.755}
        y1={241.974}
        x2={662.699}
        y2={24.774}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={420.322}
        y1={462.263}
        x2={420.337}
        y2={418.989}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg83);
const Memo = memo(ForwardRef);
export default Memo;
