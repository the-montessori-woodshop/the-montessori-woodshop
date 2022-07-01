import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg455 = (
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
    <ellipse
      cx={478.583}
      cy={299.691}
      rx={251.028}
      ry={250.455}
      fill="url(#a)"
    />
    <rect
      x={407.516}
      y={228.051}
      width={375.968}
      height={280.346}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M678.029 335.798h51.581m-103.162 55.02h103.163m-277.392 46.996h277.392M626.386 335.798h.124m-44.837 0h.144"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path fill="#6f381e" d="M455.029 312.244h82.087v82.087h-82.087z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M495.927 312.674c-9.875 0-18.979.814-26.286 1.779-6.576.869-11.534 5.828-12.403 12.404-.965 7.307-1.779 16.41-1.779 26.285 0 9.876.814 18.979 1.779 26.286.869 6.576 5.827 11.535 12.403 12.403 7.307.966 16.411 1.78 26.286 1.78 9.876 0 18.979-.814 26.286-1.78 6.576-.868 11.535-5.827 12.403-12.403.965-7.307 1.78-16.41 1.78-26.286 0-9.875-.815-18.978-1.78-26.285-.868-6.576-5.827-11.535-12.403-12.404-7.307-.965-16.41-1.779-26.286-1.779zm-27.61-8.251c-11.113 1.468-19.641 9.996-21.109 21.109-1.009 7.64-1.866 17.196-1.866 27.61 0 10.415.857 19.971 1.866 27.611 1.468 11.113 9.996 19.641 21.109 21.109 7.639 1.008 17.196 1.866 27.61 1.866 10.414 0 19.971-.858 27.611-1.866 11.112-1.468 19.641-9.996 21.108-21.109 1.009-7.64 1.867-17.196 1.867-27.611 0-10.414-.858-19.97-1.867-27.61-1.467-11.113-9.996-19.641-21.108-21.109-7.64-1.009-17.197-1.866-27.611-1.866-10.414 0-19.971.857-27.61 1.866z"
      fill="#6f381e"
    />
    <path
      d="M480.752 348.084c5.588 0 10.117-4.53 10.117-10.117 0-5.588-4.529-10.117-10.117-10.117-5.587 0-10.117 4.529-10.117 10.117 0 5.587 4.53 10.117 10.117 10.117zm46.141 8.636 9.076 9.077c-.313 4.736-.77 9.13-1.274 13.033l-14.956-14.956a5.06 5.06 0 0 0-7.154 0L501.6 374.859c-5.926 5.927-15.535 5.927-21.462 0l-.868-.868a5.058 5.058 0 0 0-7.153 0l-12.187 12.187c-1.412-1.914-2.356-4.212-2.691-6.75a207.906 207.906 0 0 1-.528-4.339l8.252-8.252c5.926-5.926 15.535-5.926 21.461 0l.868.868a5.058 5.058 0 0 0 7.154 0l10.985-10.985c5.927-5.926 15.535-5.926 21.462 0z"
      fill="#fff"
    />
    <rect
      x={407.516}
      y={228.051}
      width={375.968}
      height={32.598}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={420.555}
      y={238.917}
      width={10.866}
      height={10.866}
      rx={5.433}
      fill="#E1E4E5"
    />
    <rect
      x={440.114}
      y={238.917}
      width={10.866}
      height={10.866}
      rx={5.433}
      fill="#E1E4E5"
    />
    <rect
      x={459.673}
      y={238.917}
      width={10.866}
      height={10.866}
      rx={5.433}
      fill="#E1E4E5"
    />
    <rect
      x={173.682}
      y={90.501}
      width={425.808}
      height={317.51}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M480.056 212.532h58.418m-168.765 62.313h168.765m-314.163 53.226h314.163M421.567 212.532h.14m-50.782 0h.164"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path fill="#6f381e" d="M227.493 185.855h92.968v92.968h-92.968z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M273.813 186.343c-11.184 0-21.494.922-29.77 2.015-7.448.984-13.064 6.6-14.047 14.047-1.093 8.276-2.016 18.586-2.016 29.771 0 11.184.923 21.494 2.016 29.77.983 7.448 6.599 13.064 14.047 14.047 8.276 1.093 18.586 2.016 29.77 2.016 11.185 0 21.495-.923 29.771-2.016 7.447-.983 13.063-6.599 14.047-14.047 1.093-8.276 2.015-18.586 2.015-29.77 0-11.185-.922-21.495-2.015-29.771-.984-7.447-6.6-13.063-14.047-14.047-8.276-1.093-18.586-2.015-29.771-2.015zm-31.27-9.345c-12.586 1.662-22.245 11.321-23.907 23.907-1.143 8.652-2.114 19.476-2.114 31.271 0 11.794.971 22.618 2.114 31.27 1.662 12.586 11.321 22.245 23.907 23.907 8.652 1.143 19.476 2.114 31.27 2.114 11.795 0 22.619-.971 31.271-2.114 12.586-1.662 22.245-11.321 23.907-23.907 1.142-8.652 2.114-19.476 2.114-31.27 0-11.795-.972-22.619-2.114-31.271-1.662-12.586-11.321-22.245-23.907-23.907-8.652-1.142-19.476-2.114-31.271-2.114-11.794 0-22.618.972-31.27 2.114z"
      fill="#6f381e"
    />
    <path
      d="M256.627 226.446c6.328 0 11.458-5.13 11.458-11.458s-5.13-11.458-11.458-11.458c-6.329 0-11.459 5.13-11.459 11.458s5.13 11.458 11.459 11.458zm52.257 9.782 10.28 10.28a238.515 238.515 0 0 1-1.444 14.76l-16.938-16.938a5.73 5.73 0 0 0-8.103 0l-12.441 12.441c-6.712 6.712-17.594 6.712-24.307 0l-.983-.983a5.73 5.73 0 0 0-8.102 0l-13.802 13.802c-1.598-2.168-2.668-4.77-3.048-7.644a244.28 244.28 0 0 1-.598-4.914l9.346-9.346c6.712-6.712 17.595-6.712 24.307 0l.983.983a5.73 5.73 0 0 0 8.102 0l12.441-12.441c6.712-6.712 17.595-6.712 24.307 0z"
      fill="#fff"
    />
    <rect
      x={173.682}
      y={90.501}
      width={425.808}
      height={36.92}
      rx={4}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <rect
      x={188.449}
      y={102.808}
      width={12.307}
      height={12.307}
      rx={6.153}
      fill="#E1E4E5"
    />
    <rect
      x={210.601}
      y={102.808}
      width={12.307}
      height={12.307}
      rx={6.153}
      fill="#E1E4E5"
    />
    <rect
      x={232.753}
      y={102.808}
      width={12.307}
      height={12.307}
      rx={6.153}
      fill="#E1E4E5"
    />
    <path
      d="M671.053 99.162a30 30 0 0 1 30 0l21.619 12.482a29.999 29.999 0 0 1 15 25.98v24.964a30 30 0 0 1-15 25.981l-21.619 12.482a30 30 0 0 1-30 0l-21.619-12.482a30 30 0 0 1-15-25.981v-24.964a29.999 29.999 0 0 1 15-25.98l21.619-12.482z"
      fill="#6f381e"
    />
    <path
      d="m704.489 138.972-21.757 21.583-13.054-12.95"
      stroke="#fff"
      strokeWidth={8.45}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={770.875}
      cy={187.932}
      r={12.609}
      transform="rotate(180 770.875 187.932)"
      fill="#6f381e"
    />
    <circle
      cx={124.393}
      cy={262.438}
      r={6.877}
      transform="rotate(180 124.393 262.438)"
      fill="#6f381e"
    />
    <circle
      r={19.476}
      transform="matrix(-1 0 0 1 245.16 468.678)"
      fill="#6f381e"
    />
    <circle
      r={9.089}
      transform="matrix(-1 0 0 1 725.179 336.324)"
      fill="#6f381e"
    />
    <circle
      r={11.685}
      transform="matrix(-1 0 0 1 361.889 468.986)"
      fill="#E1E4E5"
    />
    <circle
      r={16.879}
      transform="matrix(-1 0 0 1 134.396 400.82)"
      fill="#E1E4E5"
    />
    <circle
      r={12.846}
      transform="matrix(-1 0 0 1 698.9 537.775)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.877}
      ry={7.451}
      transform="matrix(-1 0 0 1 761.706 102.537)"
      fill="#E1E4E5"
    />
    <circle
      r={12.825}
      transform="matrix(0 1 1 0 561.919 376.723)"
      fill="#E1E4E5"
    />
    <circle
      r={5.338}
      transform="matrix(-1 0 0 1 293.276 54.338)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={13.125}
      ry={10.5}
      transform="matrix(-1 0 0 1 754.198 299.302)"
      fill="#E1E4E5"
    />
    <circle
      r={9.285}
      transform="scale(1 -1) rotate(-75 241.018 -395.872)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={489.288}
        y1={830.984}
        x2={473.878}
        y2={-495.668}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg455);
const Memo = memo(ForwardRef);
export default Memo;
