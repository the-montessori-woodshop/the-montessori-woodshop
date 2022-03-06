import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg43 = (
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
      d="m698.579 351.896-.951 5.191c-8.124 43.783-38.101 78.882-78.747 90.034a101.782 101.782 0 0 1-15.965 3.057c-38.975 4.343-80.521-13.772-106.488-46.456-15.271-19.219-26.197-43.655-46.764-55.962-26.789-16.034-59.157-5.55-87.052 5.19-27.92 10.766-60.313 21.147-87.051 4.985-16.736-10.098-27.534-29.01-33.19-48.383-15.04-51.261 2.288-107.789 36.455-144.789 34.168-37.001 82.887-56.195 132.274-62.336 69.157-8.582 143.56 8.017 200.737 53.754 57.177 45.736 94.172 122.28 86.742 195.715z"
      fill="url(#a)"
    />
    <path
      d="M238.25 299.561c11.256-23.843 1.052-52.297-22.791-63.553-23.843-11.255-52.297-1.051-63.553 22.792-11.255 23.843-1.051 52.296 22.792 63.552s52.296 1.052 63.552-22.791z"
      fill="#6f381e"
    />
    <path
      d="M235.992 292.372c.038 1.655 1.809 2.688 3.268 1.905l18.577-9.967c1.568-.841 1.557-3.094-.02-3.92l-19.027-9.967c-1.497-.784-3.286.326-3.248 2.015l.45 19.934z"
      fill="#6f381e"
    />
    <path
      d="M178.196 280.42a6.395 6.395 0 0 1-6.517 6.281 6.395 6.395 0 0 1-6.281-6.517 6.396 6.396 0 0 1 6.517-6.281 6.404 6.404 0 0 1 6.281 6.517zm22.232.943c-.36 3.513-3.513 6.07-7.026 5.71-3.513-.36-6.07-3.513-5.71-7.025.36-3.513 3.513-6.07 7.026-5.71 3.513.372 6.07 3.512 5.71 7.025zm20.903.385c-.36 3.513-3.513 6.07-7.026 5.71-3.513-.36-6.07-3.513-5.71-7.026.36-3.513 3.513-6.07 7.026-5.71a6.4 6.4 0 0 1 5.71 7.026z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M296.254 285.91v180.8c0 21.489 17.405 38.895 38.894 38.895h272.24c21.489 0 38.895-17.406 38.895-38.895v-180.8"
      fill="#6f381e"
    />
    <path
      d="M296.254 285.91v180.8c0 21.489 17.405 38.895 38.894 38.895h272.24c21.489 0 38.895-17.406 38.895-38.895v-180.8"
      stroke="#6f381e"
      strokeWidth={26.07}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m313.486 253.646 136.013-91.498a39.027 39.027 0 0 1 43.542 0l136.013 91.498c22.909 15.422 22.909 49.124 0 64.545l-114.232 76.855c-26.331 17.717-60.753 17.717-87.084 0l-114.233-76.855c-22.928-15.421-22.928-49.143-.019-64.545z"
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={26.07}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M405.489 263.277h131.578m-117.104 52.195h103.172"
      stroke="#6f381e"
      strokeWidth={24.406}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={682.3}
      y={465.612}
      width={54.04}
      height={6.296}
      rx={3.148}
      transform="rotate(-45 682.3 465.612)"
      fill="#E1E4E5"
    />
    <rect
      x={703.02}
      y={465.76}
      width={20.065}
      height={6.296}
      rx={3.148}
      transform="rotate(-45 703.02 465.76)"
      fill="#E1E4E5"
    />
    <rect
      x={562.353}
      y={85.676}
      width={54.04}
      height={6.296}
      rx={3.148}
      transform="rotate(135 562.353 85.676)"
      fill="#E1E4E5"
    />
    <rect
      x={541.633}
      y={85.528}
      width={20.065}
      height={6.296}
      rx={3.148}
      transform="rotate(135 541.633 85.528)"
      fill="#E1E4E5"
    />
    <rect
      x={219.167}
      y={432.455}
      width={47.773}
      height={5.566}
      rx={2.783}
      transform="rotate(-45 219.167 432.455)"
      fill="#E1E4E5"
    />
    <rect
      x={237.483}
      y={432.586}
      width={17.738}
      height={5.566}
      rx={2.783}
      transform="rotate(-45 237.483 432.586)"
      fill="#E1E4E5"
    />
    <rect
      x={739.885}
      y={204.041}
      width={44.639}
      height={5.201}
      rx={2.6}
      transform="rotate(135 739.885 204.041)"
      fill="#E1E4E5"
    />
    <rect
      x={722.77}
      y={203.918}
      width={16.575}
      height={5.201}
      rx={2.6}
      transform="rotate(135 722.77 203.918)"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="m747.784 376.23-11.649-11.094 11.649-11.094 11.648 11.094-11.648 11.094z"
      stroke="#E1E4E5"
      strokeWidth={5.643}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M223.604 372.05c0 6.131-4.968 11.094-11.106 11.094-6.137 0-11.081-4.988-11.081-11.094 0-6.131 4.968-11.094 11.106-11.094 6.137 0 11.081 4.963 11.081 11.094z"
      stroke="#E1E4E5"
      strokeWidth={5.547}
      strokeMiterlimit={10}
    />
    <path
      d="M637.316 93.509c-15.514 12.98-14.597 39.648-14.597 39.648s26.072 5.607 41.579-7.387c15.514-12.98 14.605-39.634 14.605-39.634s-26.073-5.607-41.587 7.373z"
      fill="url(#b)"
    />
    <ellipse
      cx={372.814}
      cy={143.733}
      rx={10.544}
      ry={10.896}
      transform="rotate(105 372.814 143.733)"
      fill="#E1E4E5"
    />
    <circle
      r={18.354}
      transform="scale(-1 1) rotate(75 -557.107 -346.408)"
      fill="#6f381e"
    />
    <ellipse
      rx={6.827}
      ry={5.586}
      transform="scale(-1 1) rotate(75 -417.215 -306.257)"
      fill="#E1E4E5"
    />
    <path
      d="M272.301 156.831h.226c1.336 17.755 15.421 18.028 15.421 18.028s-15.531.285-15.531 20.8c0-20.515-15.532-20.8-15.532-20.8s14.079-.273 15.416-18.028zm409.376-6.914h.193c1.146 14.204 13.218 14.423 13.218 14.423s-13.312.228-13.312 16.64c0-16.412-13.313-16.64-13.313-16.64s12.068-.219 13.214-14.423z"
      fill="#E1E4E5"
    />
    <rect
      x={311.149}
      y={485.096}
      width={42.481}
      height={4.949}
      rx={2.475}
      transform="rotate(-45 311.149 485.096)"
      fill="#fff"
    />
    <rect
      x={332.866}
      y={485.096}
      width={42.481}
      height={4.949}
      rx={2.475}
      transform="rotate(-45 332.866 485.096)"
      fill="#fff"
    />
    <rect
      x={355.939}
      y={485.096}
      width={42.481}
      height={4.949}
      rx={2.475}
      transform="rotate(-45 355.939 485.096)"
      fill="#fff"
    />
    <path
      d="M588.992 492.332c10.416.012 25.406-2.7 37.685-14.535 12.277-11.836 5.376-19.191-6.813-20.524-12.189-1.333-26.807 4.226-36.272 16.129-9.465 11.904-3.15 18.92 5.4 18.93z"
      fill="url(#c)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={458.358}
        y1={-96.293}
        x2={466.549}
        y2={832.221}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={583.673}
        y1={145.958}
        x2={752.001}
        y2={56.617}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={644.048}
        y1={496.226}
        x2={549.287}
        y2={442.723}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg43);
const Memo = memo(ForwardRef);
export default Memo;
