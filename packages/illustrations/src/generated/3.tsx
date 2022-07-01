import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg3 = (
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
      d="M684.444 149.207c-21.601-70.504-208.304-161.501-355.806-48.38-68.6 52.614-47.307 90.372-86.805 164.914-23.545 44.428-65.249 86.79-62.462 137.797 2.395 44.03 25.433 83.85 56.599 103.817 70.092 44.903 181.143 52.525 239.199-80.017 58.056-132.543 264.966-96.29 209.275-278.131z"
      fill="url(#a)"
    />
    <path
      d="M774.621 314.175c-21.083-21.633-53.257-16.761-102.005 1.485-36.659 13.73-70.224 25.746-102.365 56.353-22.499 21.412-38.149 46.42-48.316 69.359-11.018 24.852-27.791 54.34-10.298 74.484 24.037 27.669 120.908 30.44 196.254-36.728 82.765-73.799 87.348-143.814 66.73-164.953z"
      fill="url(#b)"
    />
    <path
      d="M239.303 175.695c-20.772 55.388-41.563 113.912-79.594 150.183-39.224 37.426-51.846 24.219-61.62.466-9.774-23.754-11.218-85.852 42.607-135.827 53.839-49.989 118.041-66.658 98.607-14.822z"
      fill="url(#c)"
    />
    <ellipse
      rx={22}
      ry={21.5}
      transform="matrix(1 0 0 -1 725 197.5)"
      fill="#2D2019"
    />
    <ellipse
      rx={13.5}
      ry={14}
      transform="matrix(1 0 0 -1 613.5 82)"
      fill="#F8AE9D"
    />
    <circle r={31} transform="matrix(1 0 0 -1 236 491)" fill="#6f381e" />
    <ellipse
      rx={14.5}
      ry={15}
      transform="matrix(1 0 0 -1 182.5 360)"
      fill="#F8AE9D"
    />
    <circle
      cx={156}
      cy={271}
      r={16}
      transform="rotate(-180 156 271)"
      fill="#E1E4E5"
    />
    <circle r={15.5} transform="matrix(1 0 0 -1 463.5 527.5)" fill="#E1E4E5" />
    <ellipse
      rx={18.5}
      ry={19}
      transform="matrix(1 0 0 -1 681.5 321)"
      fill="#E1E4E5"
    />
    <ellipse cx={640} cy={460} rx={13} ry={14} fill="#F8AE9D" />
    <ellipse cx={454} cy={302.5} rx={169} ry={168.5} fill="#6f381e" />
    <circle cx={455} cy={301} r={87} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M431.897 421.301a123.84 123.84 0 0 0 45.826.059c8.197-1.524 12.156-10.931 7.963-18.15l-20.398-34.991c-4.789-8.214-16.676-8.269-21.402-.084l-20.165 34.928c-4.162 7.208-.079 16.671 8.176 18.238zm45.576-241.178c-15.104-2.803-30.457-2.621-45.265.269-8.105 1.577-12.083 10.974-7.979 18.128l19.89 34.701c4.654 8.15 16.398 8.108 21.118-.067l20.168-34.932c4.162-7.209.199-16.604-7.932-18.099zm70.009 200.466c10.064-11.772 17.684-25.238 22.692-39.573 2.745-7.852-3.366-15.979-11.64-15.945l-40.089.127c-9.411.03-15.329 10.279-10.648 18.445l19.988 34.883c4.139 7.2 14.278 8.399 19.697 2.063zM361.644 220.695c-10.064 11.771-17.684 25.238-22.692 39.573-2.745 7.852 3.367 15.979 11.64 15.945l40.089-.128c9.411-.029 15.329-10.278 10.648-18.444l-19.998-34.889c-4.129-7.194-14.268-8.394-19.687-2.057zm209.11 39.46c-5.197-14.646-13.116-28.012-23.109-39.54-5.473-6.309-15.661-5.07-19.813 2.121l-20.145 34.892c-4.729 8.191 1.234 18.471 10.735 18.496l40.586.1c8.374.026 14.542-8.186 11.746-16.069zm-231.575 81.44c5.026 14.547 12.75 27.8 22.534 39.208 5.36 6.243 15.429 4.936 19.581-2.255l20.145-34.892c4.729-8.192-1.085-18.385-10.467-18.341l-40.079.193c-8.268.035-14.418 8.257-11.714 16.087z"
      fill="#fff"
    />
    <ellipse cx={455} cy={300.5} rx={52} ry={51.5} fill="#6f381e" />
    <defs>
      <linearGradient
        id="a"
        x1={370.942}
        y1={-205.916}
        x2={536.441}
        y2={1027.38}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={634.335}
        y1={174.951}
        x2={660.275}
        y2={780.267}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={161.312}
        y1={33.038}
        x2={187.381}
        y2={566.394}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg3);
const Memo = memo(ForwardRef);
export default Memo;
