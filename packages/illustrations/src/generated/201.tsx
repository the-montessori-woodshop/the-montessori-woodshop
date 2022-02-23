import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg201 = (
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
      d="M581.771 283.669c0 75.183-56.597 145.482-132.661 162.552-76.065-17.07-132.662-87.369-132.662-162.552v-59.057a33.1 33.1 0 0 1 20.613-30.647l82.913-33.874a77.003 77.003 0 0 1 58.271 0l82.914 33.874c12.47 5.1 20.612 17.203 20.612 30.647v59.057z"
      fill="#6f381e"
    />
    <path
      d="m499.41 268.654-58.039 58.039-34.823-34.823"
      stroke="#fff"
      strokeWidth={16.625}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={449.475} cy={88.487} r={29.139} fill="#6f381e" />
    <circle
      cx={661.049}
      cy={300.062}
      r={29.139}
      transform="rotate(90 661.049 300.062)"
      fill="#6f381e"
    />
    <circle cx={449.475} cy={511.637} r={29.139} fill="#6f381e" />
    <circle
      cx={237.899}
      cy={300.062}
      r={29.139}
      transform="rotate(90 237.899 300.062)"
      fill="#6f381e"
    />
    <path
      d="m282.007 100.771 55.779 55.779m-88.869-22.689 55.78 55.779m60.978-60.979-37.186-37.186m-51.682 126.054-37.186-37.186m153.944-79.572-9.296-9.296M248.917 245.419l-9.296-9.297m42.386 262.646 55.779-55.78m-88.869 22.69 55.78-55.779m60.978 60.979-37.186 37.186m-51.682-126.055-37.186 37.186m153.944 79.573-9.296 9.296M248.917 354.12l-9.296 9.296m383.071-262.645-55.779 55.779m88.869-22.689-55.779 55.779m-60.98-60.979 37.186-37.186m51.683 126.055 37.186-37.187m-153.944-79.572 9.297-9.296m135.351 153.944 9.296-9.296m-42.386 262.645-55.779-55.78m88.869 22.69-55.779-55.779m-60.98 60.979 37.186 37.186m51.683-126.055 37.186 37.186m-153.944 79.573 9.297 9.296M655.782 354.12l9.296 9.296"
      stroke="#E1E4E5"
      strokeWidth={12.945}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M147.581 228.929h3.695c.894 0 1.613.727 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.609 1.609 0 0 1 1.613-1.613zm12.812 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.613zm12.821 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.609 1.609 0 0 1 1.613-1.613zm12.812 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.621-1.613v-3.695a1.631 1.631 0 0 1 1.621-1.613zm12.813 0h3.696c.893 0 1.62.727 1.62 1.613v3.695c0 .894-.727 1.613-1.62 1.613h-3.696a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.613zM160.862 242.9h3.695a1.62 1.62 0 0 1 1.613 1.613v3.703a1.62 1.62 0 0 1-1.613 1.613h-3.695a1.614 1.614 0 0 1-1.613-1.613v-3.695a1.61 1.61 0 0 1 1.613-1.621zm12.813 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.703a1.62 1.62 0 0 1-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.61 1.61 0 0 1 1.613-1.621zm12.814 0h3.695a1.62 1.62 0 0 1 1.621 1.613v3.703a1.62 1.62 0 0 1-1.621 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.621zm-13.275-28.98h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.609 1.609 0 0 1 1.613-1.613zm12.812 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.621-1.613v-3.695a1.631 1.631 0 0 1 1.621-1.613zm523.65 127.894h3.696c.893 0 1.613.727 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.696a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.61 1.61 0 0 1 1.613-1.613zm12.812 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.613zm12.821 0h3.695a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.609 1.609 0 0 1 1.613-1.613zm12.812 0h3.696a1.62 1.62 0 0 1 1.613 1.613v3.695c0 .894-.727 1.613-1.613 1.613h-3.696a1.62 1.62 0 0 1-1.62-1.613v-3.695a1.63 1.63 0 0 1 1.62-1.613zm12.814 0h3.695a1.62 1.62 0 0 1 1.621 1.613v3.695c0 .894-.727 1.613-1.621 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.613zm-37.977 13.971h3.695a1.62 1.62 0 0 1 1.613 1.613v3.703a1.62 1.62 0 0 1-1.613 1.613h-3.695a1.614 1.614 0 0 1-1.613-1.613v-3.695a1.61 1.61 0 0 1 1.613-1.621zm12.812 0h3.696a1.62 1.62 0 0 1 1.613 1.613v3.703a1.62 1.62 0 0 1-1.613 1.613h-3.696a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.612 1.612 0 0 1 1.613-1.621zm12.814 0h3.695a1.62 1.62 0 0 1 1.621 1.613v3.703a1.62 1.62 0 0 1-1.621 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.695a1.62 1.62 0 0 1 1.613-1.621zm-13.275-28.981h3.695a1.62 1.62 0 0 1 1.613 1.613v3.696c0 .893-.727 1.613-1.613 1.613h-3.695a1.62 1.62 0 0 1-1.613-1.613v-3.696a1.609 1.609 0 0 1 1.613-1.613zm12.812 0h3.696a1.62 1.62 0 0 1 1.613 1.613v3.696c0 .893-.727 1.613-1.613 1.613h-3.696a1.62 1.62 0 0 1-1.62-1.613v-3.696a1.63 1.63 0 0 1 1.62-1.613z"
      fill="#E1E4E5"
    />
    <path
      d="M735.227 211.329c16.464-3.9 33.878 10.063 33.878 10.063s-9.293 20.279-25.762 24.167c-16.464 3.9-33.872-10.051-33.872-10.051s9.292-20.278 25.756-24.179z"
      fill="url(#a)"
    />
    <ellipse
      rx={9.307}
      ry={7.445}
      transform="matrix(1 0 0 -1 204.152 86.369)"
      fill="#E1E4E5"
    />
    <circle
      r={14.874}
      transform="scale(-1 1) rotate(-75 181.391 292.176)"
      fill="#E1E4E5"
    />
    <circle
      r={9.087}
      transform="scale(-1 1) rotate(-75 -60.279 703.356)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={797.226}
        y1={201.632}
        x2={653.101}
        y2={269.721}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg201);
const Memo = memo(ForwardRef);
export default Memo;