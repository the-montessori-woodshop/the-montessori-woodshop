import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg205 = (
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
      d="M718.697 359.789c2.347 69.208-149.828 213.346-331.607 165.169-84.544-22.409-76.298-62.83-139.698-114.488-37.789-30.789-92.638-53.5-106.885-99.138-12.309-39.393-3.044-82.222 20.77-110.466 53.556-63.52 159.542-108.522 260.374-12.465 100.832 96.056 290.968-7.105 297.046 171.388z"
      fill="url(#a)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M629.602 207.307v-51.154c0-28.251-22.902-51.153-51.154-51.153H322.681c-28.251 0-51.153 22.902-51.153 51.153v127.884"
      fill="#fff"
    />
    <path
      d="M629.602 207.307v-51.154c0-28.251-22.902-51.153-51.154-51.153H322.681c-28.251 0-51.153 22.902-51.153 51.153v127.884"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M271.528 216.252h165.354a25.577 25.577 0 0 0 21.279-11.382l35.885-53.941a25.572 25.572 0 0 1 21.356-11.407h114.2c28.251 0 51.154 22.902 51.154 51.153v255.767c0 28.252-22.903 51.154-51.154 51.154H271.528c-28.251 0-51.153-22.902-51.153-51.154V267.405c0-28.251 22.902-51.153 51.153-51.153z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.13}
    />
    <ellipse
      rx={13.917}
      ry={13.254}
      transform="matrix(-1 0 0 1 718.227 479.149)"
      fill="#E1E4E5"
    />
    <circle
      r={4.639}
      transform="matrix(-1 0 0 1 292.465 519.783)"
      fill="#E1E4E5"
    />
    <circle
      r={6.627}
      transform="matrix(-1 0 0 1 566.399 205.929)"
      fill="#E1E4E5"
    />
    <circle
      r={6.476}
      transform="scale(1 -1) rotate(-75 -180.786 -314.12)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.627}
      ry={5.302}
      transform="matrix(-1 0 0 1 704.513 233.511)"
      fill="#E1E4E5"
    />
    <path
      d="M186.177 456.259h.174c1.026 14.545 11.844 14.769 11.844 14.769s-11.929.233-11.929 17.04c0-16.807-11.929-17.04-11.929-17.04s10.814-.224 11.84-14.769zm574.334-165.951h.18c1.067 15.36 12.309 15.596 12.309 15.596s-12.397.246-12.397 17.994c0-17.748-12.396-17.994-12.396-17.994s11.237-.236 12.304-15.596z"
      fill="#E1E4E5"
    />
    <rect
      x={454.489}
      y={316.183}
      width={14.298}
      height={73.689}
      rx={7.149}
      fill="#fff"
    />
    <rect
      x={498.483}
      y={345.879}
      width={14.298}
      height={73.689}
      rx={7.149}
      transform="rotate(90 498.483 345.879)"
      fill="#fff"
    />
    <path
      d="M562.351 438.274 503 393.077"
      stroke="#6f381e"
      strokeWidth={20}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={460.266}
      cy={344.266}
      r={94.266}
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={18.345}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M414.281 349.644h92.453m-92.453-36.981h92.453m-92.453 74.475h64.717"
      stroke="#fff"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={530.485}
        y1={779.032}
        x2={277.414}
        y2={-357.319}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg205);
const Memo = memo(ForwardRef);
export default Memo;
