import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg412 = (
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
    <circle
      cx={461.914}
      cy={299.759}
      r={283.893}
      stroke="url(#a)"
      strokeWidth={3}
    />
    <path
      d="M449.698 377.223c-18.316-4.01-26.306-22.559-32.689-54.229-4.795-23.819-9.478-45.446-3.9-72.422 3.899-18.88 11.939-35.331 20.688-48.214 9.478-13.961 19.51-32.473 35.863-29.867 22.464 3.585 55.711 53.712 45.047 115.449-11.723 67.82-47.106 93.209-65.009 89.283z"
      fill="url(#b)"
    />
    <circle
      cx={760.858}
      cy={155.889}
      r={14.142}
      transform="rotate(180 760.858 155.889)"
      fill="#6f381e"
    />
    <circle
      r={13.258}
      transform="matrix(-1 0 0 1 144.545 186.452)"
      fill="#6f381e"
    />
    <circle
      r={6.187}
      transform="matrix(-1 0 0 1 662.483 255.392)"
      fill="#6f381e"
    />
    <circle
      r={7.955}
      transform="matrix(-1 0 0 1 514.926 507.167)"
      fill="#E1E4E5"
    />
    <circle
      r={11.49}
      transform="matrix(-1 0 0 1 204.628 429.139)"
      fill="#E1E4E5"
    />
    <circle
      r={8.745}
      transform="matrix(-1 0 0 1 275.052 155.282)"
      fill="#E1E4E5"
    />
    <circle
      r={9.722}
      transform="matrix(-1 0 0 1 365.013 375.904)"
      fill="#E1E4E5"
    />
    <circle
      r={8.731}
      transform="scale(1 -1) rotate(-75 -89.883 -243.415)"
      fill="#E1E4E5"
    />
    <circle
      r={11.615}
      transform="matrix(-1 0 0 1 307.989 58.326)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.934}
      ry={7.147}
      transform="matrix(-1 0 0 1 588.263 417.804)"
      fill="#E1E4E5"
    />
    <circle
      r={18.17}
      transform="scale(1 -1) rotate(-75 262.65 -406.874)"
      fill="#E1E4E5"
    />
    <path
      d="M449.599 192.846c18.316 4.009 26.306 22.559 32.688 54.229 4.796 23.819 9.479 45.446 3.901 72.422-3.899 18.879-11.939 35.331-20.688 48.214-9.478 13.96-19.51 32.473-35.863 29.866-22.464-3.584-55.711-53.712-45.047-115.448 11.723-67.82 47.106-93.209 65.009-89.283z"
      fill="url(#c)"
    />
    <circle cx={138.438} cy={414.18} r={14.142} fill="#6f381e" />
    <circle
      r={13.258}
      transform="matrix(1 0 0 -1 754.752 383.617)"
      fill="#6f381e"
    />
    <circle
      r={6.187}
      transform="matrix(1 0 0 -1 739.783 222.449)"
      fill="#6f381e"
    />
    <circle
      r={7.955}
      transform="matrix(1 0 0 -1 384.371 62.901)"
      fill="#E1E4E5"
    />
    <circle
      r={11.49}
      transform="matrix(1 0 0 -1 697.821 74.656)"
      fill="#E1E4E5"
    />
    <circle
      r={8.745}
      transform="matrix(1 0 0 -1 624.245 414.787)"
      fill="#E1E4E5"
    />
    <circle
      r={9.722}
      transform="matrix(1 0 0 -1 534.284 194.165)"
      fill="#E1E4E5"
    />
    <circle
      r={8.731}
      transform="scale(-1 1) rotate(-75 -168.068 627.612)"
      fill="#E1E4E5"
    />
    <circle
      r={11.615}
      transform="matrix(1 0 0 -1 636.297 526.874)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.934}
      ry={7.147}
      transform="matrix(1 0 0 -1 311.034 152.265)"
      fill="#E1E4E5"
    />
    <circle
      r={18.17}
      transform="scale(-1 1) rotate(-75 195.383 462.267)"
      fill="#E1E4E5"
    />
    <path
      d="M389.519 518.112h131.215c109.345 0 153.084-43.738 153.084-153.084V233.814c0-109.346-43.739-153.084-153.084-153.084H389.519c-109.345 0-153.084 43.738-153.084 153.084v131.214c0 109.346 43.739 153.084 153.084 153.084z"
      fill="#6f381e"
    />
    <path
      d="M506.543 275.586c-2.187 15.527-11.372 28.649-24.056 36.522v43.3c0 15.09-12.247 27.337-27.336 27.337-15.09 0-27.337-12.247-27.337-27.337v-43.3c-12.684-7.873-21.869-20.995-24.056-36.522-.437-2.405-.656-5.03-.656-7.654 0-33.241 31.492-59.047 66.045-49.862 17.495 4.593 31.71 18.808 36.302 36.303 1.969 7.217 2.188 14.434 1.094 21.213zm167.309.001H506.553m-102.819-.003H236.435"
      stroke="#fff"
      strokeWidth={32}
      strokeMiterlimit={10}
    />
    <defs>
      <linearGradient
        id="a"
        x1={474.084}
        y1={905.167}
        x2={456.484}
        y2={-606.552}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={330.315}
        y1={348.997}
        x2={657.738}
        y2={164.039}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={568.982}
        y1={221.072}
        x2={241.559}
        y2={406.029}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg412);
const Memo = memo(ForwardRef);
export default Memo;
