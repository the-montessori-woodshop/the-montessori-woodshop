import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg106 = (
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
      d="M628.854 220.056c-17.348 4.11-35.696-10.602-35.696-10.602s9.791-21.368 27.145-25.465c17.348-4.11 35.69 10.59 35.69 10.59s-9.791 21.367-27.139 25.477z"
      fill="url(#a)"
    />
    <path
      d="M291.922 416.892c15.728-10.834 39.757-3.261 39.757-3.261s-1.488 25.134-17.227 35.957c-15.728 10.834-39.745 3.271-39.745 3.271s1.487-25.134 17.215-35.967z"
      fill="url(#b)"
    />
    <ellipse
      cx={693.309}
      cy={311.001}
      rx={12.672}
      ry={12.121}
      transform="rotate(180 693.309 311.001)"
      fill="#6f381e"
    />
    <circle
      r={12.438}
      transform="matrix(-1 0 0 1 266.775 209.438)"
      fill="#6f381e"
    />
    <circle
      r={11.57}
      transform="matrix(-1 0 0 1 549.173 166.761)"
      fill="#6f381e"
    />
    <circle r={5} transform="matrix(-1 0 0 1 575 422)" fill="#6f381e" />
    <circle
      r={10.945}
      transform="matrix(-1 0 0 1 232.592 338.728)"
      fill="#E1E4E5"
    />
    <circle
      r={5.393}
      transform="matrix(-1 0 0 1 352.679 468.065)"
      fill="#E1E4E5"
    />
    <circle
      r={5.384}
      transform="scale(1 -1) rotate(-75 -47.577 -308.211)"
      fill="#E1E4E5"
    />
    <circle
      r={7.162}
      transform="matrix(-1 0 0 1 359.5 190.162)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={5.509}
      ry={4.407}
      transform="matrix(-1 0 0 1 606.372 292.882)"
      fill="#E1E4E5"
    />
    <path
      d="M708.842 210h.145c.853 12.093 9.846 12.279 9.846 12.279s-9.917.193-9.917 14.166c0-13.973-9.917-14.166-9.917-14.166s8.99-.186 9.843-12.279zm-342.556 39h.101c.603 8.688 6.951 8.822 6.951 8.822s-7 .139-7 10.178c0-10.039-7-10.178-7-10.178s6.345-.134 6.948-8.822z"
      fill="#E1E4E5"
    />
    <circle
      r={12.95}
      transform="scale(1 -1) rotate(-75 35.349 -438.816)"
      fill="#E1E4E5"
    />
    <circle
      r={7.846}
      transform="scale(1 -1) rotate(-75 53.512 -462.487)"
      fill="#E1E4E5"
    />
    <circle
      r={7.846}
      transform="scale(1 -1) rotate(-75 17.186 -415.146)"
      fill="#E1E4E5"
    />
    <circle
      cx={230.936}
      cy={336.983}
      r={85.936}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M201.932 363.871v4.331c0 2.391 1.914 4.331 4.273 4.331h51.288c2.359 0 4.274-1.94 4.274-4.331v-4.4c0-13.105-14.78-21.62-29.918-21.62s-29.917 8.519-29.917 21.62m19.187-59.666c-5.927 5.926-5.927 15.535 0 21.461 5.926 5.927 15.535 5.927 21.461 0 5.927-5.926 5.927-15.535 0-21.461-5.926-5.927-15.535-5.927-21.461 0z"
      fill="#6f381e"
    />
    <circle
      cx={449.668}
      cy={407.59}
      r={85.936}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M420.663 434.478v4.331c0 2.391 1.915 4.331 4.274 4.331h51.287c2.359 0 4.274-1.94 4.274-4.331v-4.4c0-13.105-14.779-21.62-29.918-21.62-15.138 0-29.917 8.519-29.917 21.62m19.187-59.666c-5.926 5.926-5.926 15.535 0 21.461 5.927 5.927 15.535 5.927 21.462 0 5.926-5.926 5.926-15.535 0-21.461-5.927-5.927-15.535-5.927-21.462 0z"
      fill="#6f381e"
    />
    <circle
      cx={668.402}
      cy={336.983}
      r={85.936}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M639.398 363.871v4.331c0 2.391 1.915 4.331 4.274 4.331h51.288c2.359 0 4.273-1.94 4.273-4.331v-4.4c0-13.105-14.779-21.62-29.917-21.62-15.138 0-29.918 8.519-29.918 21.62m19.187-59.666c-5.927 5.926-5.927 15.535 0 21.461 5.926 5.927 15.535 5.927 21.461 0 5.927-5.926 5.927-15.535 0-21.461-5.926-5.927-15.535-5.927-21.461 0z"
      fill="#6f381e"
    />
    <path
      transform="matrix(.90994 -.41474 .97886 .20454 293.747 253.481)"
      stroke="#E1E4E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeDasharray="4 12"
      d="M1-1h103.573"
    />
    <path
      transform="matrix(-.90994 -.41474 -.97886 .20454 602.634 253.481)"
      stroke="#E1E4E5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeDasharray="4 12"
      d="M1-1h103.573"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M449.522 261.043c-29.005 0-52.522-23.517-52.522-52.522S420.517 156 449.522 156s52.521 23.516 52.521 52.521c0 29.005-23.516 52.522-52.521 52.522z"
      fill="#6f381e"
    />
    <path
      d="m467.029 200.564-21.879 22.281-13.135-13.367"
      stroke="#fff"
      strokeWidth={7.091}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={563.526}
        y1={230.274}
        x2={715.39}
        y2={158.529}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={353.189}
        y1={381.346}
        x2={229.383}
        y2={511.897}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg106);
const Memo = memo(ForwardRef);
export default Memo;
