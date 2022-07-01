import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg413 = (
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
      d="m470.135 98.83-.685 1.599-66.217 153.668h-65.075a112.233 112.233 0 0 0-43.84 8.905l39.959-95.443.913-2.283 1.598-3.654c.457-1.37.914-2.74 1.599-3.881 29.911-69.185 63.705-84.94 131.748-58.91z"
      stroke="#E1E4E5"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M593.207 258.664c-10.275-3.197-21.235-4.567-32.195-4.567H403.234l66.216-153.668.685-1.598c3.425 1.141 6.622 2.74 10.047 4.11l50.462 21.235c28.085 11.645 47.721 23.746 59.595 38.36 2.283 2.74 4.11 5.251 5.708 8.22 2.055 3.196 3.653 6.393 4.567 9.818a36.92 36.92 0 0 1 2.055 5.937c6.165 19.18 2.511 42.698-9.362 72.153z"
      stroke="#E1E4E5"
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M672 327.849v50.287c0 5.158-.228 10.316-.456 15.474C667.21 483.612 622.733 529 538.34 529H360.432c-5.475 0-10.949-.516-16.195-1.289-72.532-5.416-111.307-49.257-116.097-131.265-.684-5.931-1.14-12.12-1.14-18.31v-50.287c0-51.836 27.827-96.45 67.514-115.791C308.199 205.61 322.797 202 338.307 202h222.614c11.176 0 22.125 1.805 32.16 5.158C638.471 222.889 672 270.856 672 327.849z"
      fill="#6f381e"
    />
    <path
      d="M506.708 370.723H392.542M449.625 315v114.167"
      stroke="#fff"
      strokeWidth={32}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M213.3 118.817c12.316 6.11 28.664-1.746 28.664-1.746s-3.633-17.759-15.957-23.86c-12.317-6.11-28.658 1.737-28.658 1.737s3.634 17.759 15.951 23.869z"
      fill="url(#a)"
    />
    <circle
      r={8.364}
      transform="matrix(1 0 0 -1 192.364 143.364)"
      fill="#6f381e"
    />
    <circle
      r={15.731}
      transform="matrix(1 0 0 -1 627.731 87.731)"
      fill="#6f381e"
    />
    <circle cx={719.361} cy={228.361} r={8.361} fill="#6f381e" />
    <circle cx={183.817} cy={231.817} r={11.817} fill="#E1E4E5" />
    <circle cx={710.854} cy={474.854} r={14.854} fill="#E1E4E5" />
    <circle
      cx={713.449}
      cy={343.449}
      r={11.798}
      transform="rotate(105 713.449 343.449)"
      fill="#E1E4E5"
    />
    <ellipse cx={198.204} cy={381.786} rx={12.073} ry={9.658} fill="#E1E4E5" />
    <circle
      cx={191.528}
      cy={459.69}
      r={19.269}
      transform="rotate(90 191.528 459.69)"
      fill="#E1E4E5"
    />
    <path
      d="M686.922 143h-.172c-1.019 14.43-11.75 14.652-11.75 14.652s11.834.231 11.834 16.904c0-16.673 11.833-16.904 11.833-16.904S687.94 157.43 686.922 143zM283.446 88h-.165C282.303 102.387 272 102.608 272 102.608s11.362.231 11.362 16.855c0-16.624 11.361-16.855 11.361-16.855s-10.299-.221-11.277-14.608z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={260.598}
        y1={137.875}
        x2={159.008}
        y2={57.517}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg413);
const Memo = memo(ForwardRef);
export default Memo;
