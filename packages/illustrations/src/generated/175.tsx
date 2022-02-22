import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg175 = (
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
      d="M350.656 159.004h260.51c5.705 0 9.577 5.801 7.388 11.069l-33.055 79.569a8.001 8.001 0 0 0 0 6.138l33.055 79.569c2.189 5.268-1.683 11.069-7.388 11.069h-260.51"
      fill="#6f381e"
    />
    <path
      d="M387.832 469.827h-73.203m36.602 0v-311.11"
      stroke="#2D2019"
      strokeWidth={23.875}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M713.866 341.205c-13.531 3.206-27.843-8.27-27.843-8.27s7.637-16.666 21.173-19.862c13.531-3.206 27.838 8.26 27.838 8.26s-7.637 16.667-21.168 19.872z"
      fill="url(#a)"
    />
    <path
      d="M244.407 147.849c17.821 12.275 45.047 3.695 45.047 3.695s-1.686-28.48-19.519-40.743c-17.821-12.275-45.035-3.706-45.035-3.706s1.686 28.479 19.507 40.754z"
      fill="url(#b)"
    />
    <path
      d="M691.601 157.653c-12.293 12.512-35.28 9.874-35.28 9.874s-3.042-22.924 9.262-35.428c12.293-12.511 35.269-9.881 35.269-9.881s3.042 22.924-9.251 35.435z"
      fill="url(#c)"
    />
    <circle
      cx={257.711}
      cy={430.838}
      r={10.561}
      transform="rotate(180 257.711 430.838)"
      fill="#6f381e"
    />
    <ellipse
      cx={530.217}
      cy={402.369}
      rx={11.694}
      ry={11.11}
      transform="rotate(180 530.217 402.369)"
      fill="#6f381e"
    />
    <circle r={10.5} transform="matrix(-1 0 0 1 224.5 217.5)" fill="#6f381e" />
    <ellipse
      rx={10.525}
      ry={9.94}
      transform="matrix(-1 0 0 1 471.525 128.662)"
      fill="#E1E4E5"
    />
    <circle
      r={8.449}
      transform="matrix(-1 0 0 1 429.449 385.171)"
      fill="#E1E4E5"
    />
    <circle
      r={5.046}
      transform="matrix(-1 0 0 1 528.094 470.332)"
      fill="#E1E4E5"
    />
    <circle
      r={7.209}
      transform="matrix(-1 0 0 1 526.048 82.148)"
      fill="#E1E4E5"
    />
    <circle
      r={7.045}
      transform="scale(1 -1) rotate(-75 -50.349 -508.264)"
      fill="#E1E4E5"
    />
    <circle
      r={9.372}
      transform="matrix(-1 0 0 1 211.372 294.372)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.209}
      ry={5.767}
      transform="matrix(-1 0 0 1 291.834 267.844)"
      fill="#E1E4E5"
    />
    <circle
      r={14.661}
      transform="scale(1 -1) rotate(-75 51.65 -601.158)"
      fill="#E1E4E5"
    />
    <path
      d="M253.879 323.722h.189c1.117 15.823 12.884 16.066 12.884 16.066s-12.976.254-12.976 18.537c0-18.283-12.976-18.537-12.976-18.537s11.763-.243 12.879-16.066zM356.761 68.626h.184c1.091 16.098 12.584 16.346 12.584 16.346s-12.674.258-12.674 18.858c0-18.6-12.673-18.858-12.673-18.858s11.488-.248 12.579-16.346zM173.579 341.722h.184c1.091 16.098 12.584 16.345 12.584 16.345s-12.673.258-12.673 18.859c0-18.601-12.674-18.859-12.674-18.859s11.488-.247 12.579-16.345zm468.315-116.326h.184c1.091 16.098 12.584 16.346 12.584 16.346s-12.674.258-12.674 18.858c0-18.6-12.673-18.858-12.673-18.858s11.488-.248 12.579-16.346zm87.595 20.326h.137c.815 12.028 9.403 12.213 9.403 12.213s-9.47.192-9.47 14.09c0-13.898-9.469-14.09-9.469-14.09s8.584-.185 9.399-12.213z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={662.911}
        y1={349.175}
        x2={781.363}
        y2={293.214}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={313.828}
        y1={188.125}
        x2={173.544}
        y2={40.2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={642.555}
        y1={200.39}
        x2={731.425}
        y2={61.078}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg175);
const Memo = memo(ForwardRef);
export default Memo;
