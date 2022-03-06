import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg485 = (
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
    <rect
      x={582.736}
      y={361.317}
      width={340.751}
      height={46.821}
      rx={20}
      transform="rotate(-180 582.736 361.317)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={582.736}
      y={431.752}
      width={340.751}
      height={46.821}
      rx={20}
      transform="rotate(-180 582.736 431.752)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={582.736}
      y={502.188}
      width={340.751}
      height={46.821}
      rx={20}
      transform="rotate(-180 582.736 502.188)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={631.711}
      y={547.182}
      width={438.076}
      height={419.688}
      rx={16}
      transform="rotate(-180 631.711 547.182)"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={582.736}
      y={291.087}
      width={106.647}
      height={46.821}
      rx={20}
      transform="rotate(-180 582.736 291.087)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={452.677}
      y={291.087}
      width={210.693}
      height={46.821}
      rx={20}
      transform="rotate(-180 452.677 291.087)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <rect
      x={289.082}
      y={220.776}
      width={46.495}
      height={46.495}
      rx={23.248}
      transform="rotate(-180 289.082 220.776)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M613.961 48H485.013c-64.475 0-96.712 32.237-96.712 96.712v209.541c0 8.865 7.254 16.119 16.119 16.119h209.541c64.475 0 96.712-32.237 96.712-96.712V144.712c0-64.475-32.237-96.712-96.712-96.712z"
      fill="#6f381e"
    />
    <path
      d="M564.156 142.135 480.5 225.79c-3.223 3.224-6.286 9.51-6.931 14.023l-4.513 31.915c-1.612 11.605 6.448 19.665 18.053 18.053l31.914-4.513c4.514-.645 10.8-3.708 14.024-6.931l83.656-83.656c14.345-14.345 21.276-31.109 0-52.385-21.277-21.438-38.04-14.668-52.547-.161z"
      stroke="#fff"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M552.226 154.061c7.092 25.306 26.918 45.293 52.386 52.385"
      stroke="#fff"
      strokeWidth={24}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M747.332 357.966c-17.26 8.562-40.168-2.447-40.168-2.447s5.091-24.886 22.36-33.436c17.26-8.562 40.159 2.435 40.159 2.435s-5.091 24.886-22.351 33.448z"
      fill="url(#a)"
    />
    <path
      d="M146.916 118.765c16.694 10.006 40.644.757 40.644.757s-3.131-25.468-19.835-35.461c-16.694-10.006-40.634-.768-40.634-.768s3.132 25.467 19.825 35.472z"
      fill="url(#b)"
    />
    <circle
      cx={753.066}
      cy={187.951}
      r={17.748}
      transform="rotate(180 753.066 187.951)"
      fill="#6f381e"
    />
    <circle
      cx={151.999}
      cy={202.146}
      r={14.611}
      transform="rotate(180 151.999 202.146)"
      fill="#6f381e"
    />
    <circle
      r={16.639}
      transform="matrix(-1 0 0 1 271.929 85.19)"
      fill="#6f381e"
    />
    <circle
      r={7.765}
      transform="matrix(-1 0 0 1 676.253 400.818)"
      fill="#6f381e"
    />
    <circle
      r={9.983}
      transform="matrix(-1 0 0 1 612.388 495.674)"
      fill="#E1E4E5"
    />
    <circle
      r={14.421}
      transform="matrix(-1 0 0 1 167.476 429.324)"
      fill="#E1E4E5"
    />
    <circle
      r={10.975}
      transform="matrix(-1 0 0 1 683.79 540.318)"
      fill="#E1E4E5"
    />
    <circle
      r={12.202}
      transform="matrix(-1 0 0 1 770.107 100.838)"
      fill="#E1E4E5"
    />
    <circle
      r={10.957}
      transform="scale(1 -1) rotate(-75 -116.944 -225.705)"
      fill="#E1E4E5"
    />
    <circle
      r={4.561}
      transform="matrix(-1 0 0 1 342.024 63.598)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={11.213}
      ry={8.97}
      transform="matrix(-1 0 0 1 684.027 469.087)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={681.052}
        y1={384.672}
        x2={823.413}
        y2={272.065}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={211.517}
        y1={150.972}
        x2={77.193}
        y2={26.167}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg485);
const Memo = memo(ForwardRef);
export default Memo;
