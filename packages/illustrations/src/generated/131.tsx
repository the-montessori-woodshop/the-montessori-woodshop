import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg131 = (
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
      stroke="#E1E4E5"
      strokeWidth={6.113}
      d="M749.235 298.381v139.357M550.348 298.381v184.005M362.285 298.381v184.005M180.986 298.381v184.005m569.252-185.007h-200.24m12.177 0H361.934m18.942 0h-200.24"
    />
    <circle cx={750.238} cy={294.322} r={14.883} fill="#E1E4E5" />
    <circle cx={549.998} cy={294.322} r={14.883} fill="#E1E4E5" />
    <circle cx={361.934} cy={294.322} r={14.883} fill="#E1E4E5" />
    <circle cx={180.636} cy={294.322} r={14.883} fill="#E1E4E5" />
    <rect
      x={292.933}
      y={375.501}
      width={144.338}
      height={144.338}
      rx={72.169}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M397.903 477.945v4.825c0 2.664-2.134 4.826-4.762 4.826h-57.147c-2.629 0-4.763-2.162-4.763-4.826v-4.903c0-14.602 16.468-24.09 33.336-24.09s33.336 9.493 33.336 24.09m-21.384-66.484c6.604 6.604 6.604 17.31 0 23.914-6.604 6.603-17.31 6.603-23.914 0-6.603-6.604-6.603-17.31 0-23.914 6.604-6.603 17.31-6.603 23.914 0z"
      fill="#fff"
    />
    <rect
      x={475.584}
      y={375.501}
      width={144.338}
      height={144.338}
      rx={72.169}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M580.556 477.945v4.825c0 2.664-2.134 4.826-4.763 4.826h-57.146c-2.629 0-4.763-2.162-4.763-4.826v-4.903c0-14.602 16.468-24.09 33.336-24.09s33.336 9.493 33.336 24.09m-21.385-66.484c6.604 6.604 6.604 17.31 0 23.914-6.603 6.603-17.31 6.603-23.913 0-6.604-6.604-6.604-17.31 0-23.914 6.603-6.603 17.31-6.603 23.913 0z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M184.695 520.269c-39.974 0-72.384-32.41-72.384-72.384 0-39.974 32.41-72.384 72.384-72.384 39.974 0 72.384 32.41 72.384 72.384 0 39.974-32.41 72.384-72.384 72.384z"
      fill="#6f381e"
    />
    <path
      d="m208.822 436.917-30.153 30.709-18.103-18.423"
      stroke="#fff"
      strokeWidth={11.307}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m830.185 447.205-40.734 23.517-11.156 40.928c-3.065 11.253-18.185 13.205-24.016 3.107L694.248 410.78c-5.841-10.117 3.464-22.255 14.761-19.228l118.023 31.624c11.281 3.023 13.281 18.181 3.153 24.029z"
      fill="#6f381e"
    />
    <path
      d="m125.511 138.371-12.783 12.771-6.211-6.192m46.691-12.69h37.781m-37.487 18.744h62.48m-90.471 31.103-12.783 12.771-6.211-6.192m46.691-12.69h37.781m-37.487 18.744h62.48m-.001 43.735h-62.773m62.774-18.744h-62.48"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M116.014 244.723c6.901 0 12.495-5.594 12.495-12.495 0-6.902-5.594-12.496-12.495-12.496-6.902 0-12.496 5.594-12.496 12.496 0 6.901 5.594 12.495 12.496 12.495z"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m324.398 138.495-12.784 12.771-6.21-6.192m46.69-12.69h37.782m-37.487 18.743h62.479m-90.47 31.104-12.784 12.771-6.21-6.192m46.69-12.69h37.782m-37.487 18.744h62.479m0 43.735h-62.774m62.774-18.744h-62.479"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M314.9 244.847c6.902 0 12.496-5.594 12.496-12.496 0-6.901-5.594-12.496-12.496-12.496-6.901 0-12.496 5.595-12.496 12.496 0 6.902 5.595 12.496 12.496 12.496z"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m515.167 138.495-12.783 12.771-6.211-6.192m46.691-12.69h37.782m-37.488 18.743h62.48m-90.471 31.104-12.783 12.771-6.211-6.192m46.691-12.69h37.782m-37.488 18.744h62.48m-.001 43.735h-62.773m62.774-18.744h-62.48"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M505.67 244.847c6.901 0 12.496-5.595 12.496-12.496 0-6.901-5.595-12.496-12.496-12.496-6.902 0-12.496 5.595-12.496 12.496 0 6.901 5.594 12.496 12.496 12.496z"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m705.935 138.495-12.783 12.771-6.211-6.192m46.692-12.69h37.781m-37.487 18.743h62.48m-90.472 31.104-12.783 12.771-6.211-6.192m46.692-12.69h37.781m-37.487 18.744h62.48m-.001 43.735h-62.773m62.774-18.744h-62.48"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M696.438 244.847c6.901 0 12.496-5.594 12.496-12.496 0-6.901-5.595-12.496-12.496-12.496-6.901 0-12.496 5.595-12.496 12.496 0 6.902 5.595 12.496 12.496 12.496z"
      stroke="#E1E4E5"
      strokeWidth={7.441}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M648.746 505.833c-6.292 4.332-15.902 1.301-15.902 1.301s.597-10.053 6.893-14.381c6.292-4.332 15.898-1.305 15.898-1.305s-.597 10.053-6.889 14.385z"
      fill="url(#a)"
    />
    <path
      d="M793.776 384.86c7.133-4.885 7.838-16.268 7.838-16.268s-10.862-3.455-17.992 1.436c-7.133 4.885-7.841 16.262-7.841 16.262s10.862 3.455 17.995-1.43z"
      fill="url(#b)"
    />
    <path
      d="M59.776 495.909c11.426 11.628 32.791 9.176 32.791 9.176s2.827-21.305-8.609-32.927c-11.425-11.629-32.78-9.184-32.78-9.184s-2.827 21.306 8.599 32.935z"
      fill="url(#c)"
    />
    <circle
      r={8.222}
      transform="matrix(-1 0 0 1 95.18 373.426)"
      fill="#6f381e"
    />
    <circle r={9.701} transform="matrix(-1 0 0 1 92.844 485.143)" fill="#fff" />
    <circle
      r={7.782}
      transform="matrix(-1 0 0 1 416.828 365.238)"
      fill="#E1E4E5"
    />
    <circle
      r={4.981}
      transform="matrix(-1 0 0 1 769.321 77.98)"
      fill="#E1E4E5"
    />
    <circle
      r={4.981}
      transform="matrix(-1 0 0 1 456.088 491.936)"
      fill="#E1E4E5"
    />
    <circle
      r={4.981}
      transform="matrix(-1 0 0 1 680.774 478.654)"
      fill="#E1E4E5"
    />
    <circle
      r={7.769}
      transform="scale(1 -1) rotate(-75 -256.432 -272.584)"
      fill="#fff"
    />
    <circle
      r={10.335}
      transform="matrix(-1 0 0 1 281.028 346.761)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.95}
      ry={6.36}
      transform="matrix(-1 0 0 1 270.895 514.345)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={12.94}
      ry={10.216}
      transform="scale(-1 1) rotate(26.006 -1476.576 -1547.508)"
      fill="#E1E4E5"
    />
    <circle
      transform="matrix(0 1 1 0 649.783 111.186)"
      fill="#E1E4E5"
      r={8.301}
    />
    <path
      d="M636.869 385.127h.208c1.231 17.449 14.208 17.718 14.208 17.718s-14.31.279-14.31 20.442c0-20.163-14.31-20.442-14.31-20.442s12.972-.269 14.204-17.718zM445.387 91.816h.208c1.231 17.45 14.208 17.718 14.208 17.718s-14.31.28-14.31 20.442c0-20.162-14.31-20.442-14.31-20.442s12.972-.268 14.204-17.718zm-187.695-3.32h.15c.888 12.768 10.246 12.965 10.246 12.965s-10.319.204-10.319 14.957c0-14.753-10.32-14.957-10.32-14.957s9.355-.197 10.243-12.965zM129.299 314.29h.15c.888 12.768 10.246 12.965 10.246 12.965s-10.319.204-10.319 14.958c0-14.754-10.319-14.958-10.319-14.958s9.354-.197 10.242-12.965z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={624.237}
        y1={520.045}
        x2={673.769}
        y2={467.838}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={818.75}
        y1={364.75}
        x2={743.471}
        y2={395.847}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={105.362}
        y1={535.63}
        x2={22.763}
        y2={406.149}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg131);
const Memo = memo(ForwardRef);
export default Memo;