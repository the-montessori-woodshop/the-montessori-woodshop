import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg244 = (
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
      d="M615.876 174.663c83.452 83.451 83.452 218.751 0 302.203-83.452 83.452-218.752 83.452-302.203 0-83.452-83.452-83.452-218.752 0-302.203 83.429-83.43 218.751-83.43 302.203 0z"
      fill="#fff"
    />
    <path
      d="M615.876 174.663c83.452 83.451 83.452 218.751 0 302.203-83.452 83.452-218.752 83.452-302.203 0-83.452-83.452-83.452-218.752 0-302.203 83.429-83.43 218.751-83.43 302.203 0"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M374.789 519.649V407.428c0-10.572 2.474-21.009 7.265-30.434l82.71-163.687 82.709 163.687a67.167 67.167 0 0 1 7.266 30.434v112.221"
      fill="#fff"
    />
    <path
      d="M374.789 519.649V407.428c0-10.572 2.474-21.009 7.265-30.434l82.71-163.687 82.709 163.687a67.167 67.167 0 0 1 7.266 30.434v112.221"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m553.005 392.649-42.671 32.009-45.572-34.191-45.573 34.191-42.67-32.009"
      fill="#fff"
    />
    <path
      d="m553.005 392.649-42.671 32.009-45.572-34.191-45.573 34.191-42.67-32.009m118.956-118.847-31.396 24.318-29.398-22.766M418.443 422.14V534m92.407-111.86V534"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <circle
      cx={703.483}
      cy={492.622}
      r={14.786}
      transform="rotate(180 703.483 492.622)"
      fill="#6f381e"
    />
    <circle
      cx={726.224}
      cy={223.921}
      r={21.03}
      transform="rotate(180 726.224 223.921)"
      fill="#6f381e"
    />
    <circle
      cx={191.515}
      cy={305.427}
      r={12.172}
      transform="rotate(180 191.515 305.427)"
      fill="#6f381e"
    />
    <circle
      r={13.862}
      transform="matrix(-1 0 0 1 295.641 542.287)"
      fill="#6f381e"
    />
    <circle
      r={6.469}
      transform="matrix(-1 0 0 1 257.455 112.58)"
      fill="#6f381e"
    />
    <circle
      r={8.317}
      transform="matrix(-1 0 0 1 619.298 547.18)"
      fill="#E1E4E5"
    />
    <circle
      r={12.014}
      transform="matrix(-1 0 0 1 166.842 416.741)"
      fill="#E1E4E5"
    />
    <circle
      r={9.143}
      transform="matrix(-1 0 0 1 763.831 416.595)"
      fill="#E1E4E5"
    />
    <circle
      r={10.165}
      transform="matrix(-1 0 0 1 692.5 129.152)"
      fill="#E1E4E5"
    />
    <circle
      r={9.128}
      transform="scale(1 -1) rotate(-75 -90.736 -211.643)"
      fill="#E1E4E5"
    />
    <circle
      r={12.144}
      transform="matrix(-1 0 0 1 363.211 67.665)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.341}
      ry={7.473}
      transform="matrix(-1 0 0 1 764.025 333.539)"
      fill="#E1E4E5"
    />
    <circle
      r={18.998}
      transform="scale(1 -1) rotate(-75 237.423 -400.173)"
      fill="#E1E4E5"
    />
    <path
      d="M188.589 178.697h.133c.788 11.165 9.092 11.336 9.092 11.336s-9.156.179-9.156 13.08c0-12.901-9.157-13.08-9.157-13.08s8.3-.171 9.088-11.336zm9.537 299.14h.128c.756 11.132 8.728 11.303 8.728 11.303s-8.791.179-8.791 13.041c0-12.862-8.791-13.041-8.791-13.041s7.969-.171 8.726-11.303z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg244);
const Memo = memo(ForwardRef);
export default Memo;
