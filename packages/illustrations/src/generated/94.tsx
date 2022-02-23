import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg94 = (
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
    <circle cx={411.178} cy={284.178} r={184.178} fill="url(#a)" />
    <path
      d="M234.864 381.751h401.833c15.348 0 27.789-11.289 27.789-25.212v-14.991c0-13.923-12.441-25.212-27.789-25.212H234.864c18.38 18.23 18.7 46.085.739 64.656l-.739.759z"
      fill="#6f381e"
    />
    <path
      d="M240.493 323.829h202.21c13.923 0 25.212 11.289 25.212 25.212s-11.289 25.212-25.212 25.212H240.478c9.445-15.467 9.424-34.998.015-50.424z"
      fill="url(#b)"
    />
    <path
      d="M252.954 244.817c-.883-1.514.455-3.264 2.49-3.264h320.021c25.083 0 45.414 16.778 45.414 37.482 0 20.698-20.331 37.476-45.414 37.476H255.361c-2.045 0-3.383-1.761-2.494-3.279 12.667-21.664 12.636-46.85.087-68.415z"
      fill="#2D2019"
    />
    <path
      d="M255.506 249.619h214.717c15.86 0 28.719 12.859 28.719 28.718v2.154c0 15.859-12.859 28.718-28.719 28.718H255.051c9.621-19.097 9.724-40.503.455-59.59z"
      fill="url(#c)"
    />
    <path
      d="M642.419 238.222H435.897c-18.312 0-33.16-16.009-33.16-35.757 0-19.748 14.848-35.757 33.16-35.757h206.522c-15.787 19.825-16.401 48.905-1.472 69.485l1.472 2.029z"
      fill="url(#d)"
    />
    <path
      d="M405.459 202.465c0-19.748 15.017-35.757 33.541-35.757h207.179c.965 0 1.745-.842 1.74-1.87-.01-1.022-.79-1.838-1.74-1.838H317.517c-20.445 0-37.017 17.667-37.017 39.465 0 21.798 16.572 39.465 37.017 39.465h328.662c.955 0 1.73-.821 1.74-1.833.01-1.028-.77-1.87-1.74-1.87H439c-18.524-.005-33.541-16.014-33.541-35.762z"
      fill="#6f381e"
    />
    <path
      d="M373.861 280.935c0-4.14 5.243-7.497 11.704-7.497h25.755c-4.904 0-8.876 2.546-8.876 5.687l.122 80.357-14.23-10.334-14.503 10.334.028-78.547z"
      fill="#E1E4E5"
    />
    <path
      d="M135 381.617h597.087c18.54 0 33.573 15.033 33.573 33.572v28.238c0 18.54-15.033 33.573-33.573 33.573H135l.315-.325c25.542-26.586 25.403-68.638-.315-95.058z"
      fill="#2D2019"
    />
    <path
      d="M145.571 395.736h319.19c18.54 0 33.573 15.033 33.573 33.572 0 18.54-15.033 33.573-33.573 33.573H145.576c11.734-20.791 11.718-46.375-.005-67.145z"
      fill="url(#e)"
    />
    <circle
      cx={240.5}
      cy={141.5}
      r={5.5}
      stroke="#E1E4E5"
      strokeWidth={3.312}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={652.822} cy={272.822} r={4.822} fill="#E1E4E5" />
    <path
      d="m583.429 130.607-14.594 5.706.924-15.643 14.592-5.702-.922 15.639z"
      stroke="#E1E4E5"
      strokeWidth={4.206}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M200.418 347.872c3.894-3.405 5.006-10.243 5.006-10.243s-7.547-.517-11.44 2.888c-3.894 3.406-5.613 7.814-3.835 9.846 1.778 2.032 6.374.917 10.269-2.491zm501.705 7.652c-5.897-5.158-7.581-15.514-7.581-15.514s11.429-.783 17.326 4.375c5.897 5.157 8.5 11.834 5.808 14.911-2.693 3.078-9.653 1.39-15.553-3.772z"
      fill="#E1E4E5"
    />
    <circle
      cx={167.499}
      cy={285.106}
      r={9.646}
      transform="rotate(136.121 167.499 285.106)"
      fill="#E1E4E5"
    />
    <circle
      r={6.735}
      transform="scale(1 -1) rotate(-43.879 -29.23 -1025.314)"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="M196.209 216.418 186 206.209 196.209 196l10.209 10.209-10.209 10.209zm489-4 10.209-10.209L685.209 192 675 202.209l10.209 10.209z"
      stroke="#E1E4E5"
      strokeWidth={5.42}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={419.032}
        y1={674.876}
        x2={407.673}
        y2={-300.708}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={349.347}
        y1={402.523}
        x2={349.692}
        y2={268.96}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={371.796}
        y1={342.619}
        x2={372.245}
        y2={184.775}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={517.468}
        y1={278.317}
        x2={518.126}
        y2={88.889}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={314.431}
        y1={500.526}
        x2={314.825}
        y2={322.67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg94);
const Memo = memo(ForwardRef);
export default Memo;