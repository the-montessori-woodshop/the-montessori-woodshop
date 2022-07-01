import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg218 = (
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
      d="M691.916 435.313c-10.686 60.737-156.3 155.445-290.348 76.709-62.343-36.622-48.549-70.149-88.991-127.961-24.106-34.456-63.072-65.332-65.999-107.954-2.536-36.791 12.495-72.209 36.312-91.983 53.562-44.47 144.952-62.205 206.755 41.84 61.803 104.046 229.812 52.699 202.271 209.349z"
      fill="url(#a)"
    />
    <path
      d="M703.791 235.696c-12.596 22.479-40.182 25.568-84.376 21.296-33.237-3.219-63.546-5.709-96.786-23.832-23.266-12.676-41.682-29.825-55.123-46.482-14.566-18.045-34.897-38.638-24.93-59.098 13.696-28.105 92.902-51.775 169.814-13.066 84.487 42.534 103.722 99.211 91.401 121.182z"
      fill="url(#b)"
    />
    <path
      d="M788.937 282.693c-23.729 11.771-55.223-3.364-55.223-3.364s7-34.212 30.741-45.967c23.729-11.77 55.21 3.348 55.21 3.348s-6.999 34.212-30.728 45.983z"
      fill="url(#c)"
    />
    <path
      d="M113.482 367.11c25.299 15.163 61.595 1.146 61.595 1.146s-4.746-38.594-30.06-53.74c-25.299-15.162-61.579-1.163-61.579-1.163s4.746 38.595 30.044 53.757z"
      fill="url(#d)"
    />
    <circle
      cx={742.247}
      cy={203.819}
      r={12.956}
      transform="rotate(180 742.247 203.819)"
      fill="#6f381e"
    />
    <circle
      cx={346.127}
      cy={242.484}
      r={10.666}
      transform="rotate(180 346.127 242.484)"
      fill="#6f381e"
    />
    <circle
      r={8.466}
      transform="matrix(-1 0 0 1 317.324 469.94)"
      fill="#6f381e"
    />
    <circle
      r={5.668}
      transform="matrix(-1 0 0 1 716.337 271.06)"
      fill="#6f381e"
    />
    <circle
      r={7.288}
      transform="matrix(-1 0 0 1 713.065 484.2)"
      fill="#E1E4E5"
    />
    <circle
      r={10.527}
      transform="matrix(-1 0 0 1 154.433 431.954)"
      fill="#E1E4E5"
    />
    <circle
      r={8.012}
      transform="matrix(-1 0 0 1 750.179 412.145)"
      fill="#E1E4E5"
    />
    <circle
      r={8.908}
      transform="matrix(-1 0 0 1 665.155 164.464)"
      fill="#E1E4E5"
    />
    <circle
      r={7.999}
      transform="scale(1 -1) rotate(-75 -83.757 -249.122)"
      fill="#E1E4E5"
    />
    <circle
      r={10.641}
      transform="matrix(-1 0 0 1 385.263 108.993)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.185}
      ry={6.548}
      transform="matrix(-1 0 0 1 721.017 367.765)"
      fill="#E1E4E5"
    />
    <circle
      r={16.647}
      transform="scale(1 -1) rotate(-75 221.234 -416.858)"
      fill="#E1E4E5"
    />
    <path
      d="M214.992 210.413h.116c.691 9.783 7.966 9.934 7.966 9.934s-8.023.156-8.023 11.461c0-11.305-8.023-11.461-8.023-11.461s7.273-.151 7.964-9.934zm-12.19 256.093h.112c.663 9.754 7.648 9.904 7.648 9.904s-7.703.156-7.703 11.427c0-11.271-7.703-11.427-7.703-11.427s6.983-.15 7.646-9.904z"
      fill="#E1E4E5"
    />
    <path
      d="M482.147 515.055V406.872c0-11.641-9.438-21.079-21.08-21.079-11.641 0-21.079 9.438-21.079 21.079v108.183c0 11.641 9.438 21.079 21.079 21.079 11.642 0 21.08-9.438 21.08-21.079z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={5.247}
    />
    <path
      d="M326.006 205.874h254.866c43.339 0 78.471 35.132 78.471 78.47v127.434c0 11.34-9.206 20.546-20.546 20.546H268.081c-11.34 0-20.546-9.206-20.546-20.546V284.344c0-43.338 35.133-78.47 78.471-78.47z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={5.247}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M499.78 133.741v162.188-162.188z"
      fill="#fff"
    />
    <path d="M499.78 133.741v162.188" stroke="#E1E4E5" strokeWidth={9.568} />
    <path
      d="M499.757 287.239a8.707 8.707 0 0 0-8.666 8.712c0 4.796 3.893 8.689 8.689 8.665a8.69 8.69 0 0 0 8.688-8.688c0-4.796-3.892-8.689-8.711-8.689"
      stroke="#E1E4E5"
      strokeWidth={19.435}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <mask id="e" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326.009 203.25c44.787 0 81.094 36.307 81.094 81.094v150.603"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M326.009 203.25c44.787 0 81.094 36.307 81.094 81.094v150.603"
      fill="#fff"
    />
    <path
      d="M326.009 208.497c41.889 0 75.847 33.958 75.847 75.847h10.495c0-47.685-38.657-86.341-86.342-86.341v10.494zm75.847 75.847v150.603h10.495V284.344h-10.495z"
      fill="#E1E4E5"
      mask="url(#e)"
    />
    <path
      d="M662.89 211.942c1.897 3.228-.43 7.295-4.174 7.295H494.607a4.842 4.842 0 0 1-4.841-4.842V132.45c0-6.444 5.21-11.653 11.654-11.653h157.413c3.748 0 6.075 4.075 4.169 7.303l-23.303 39.461a4.841 4.841 0 0 0-.005 4.915l23.196 39.466z"
      fill="#6f381e"
    />
    <mask id="f" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m528.872 359.912-94.509-.174 94.509.174z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m528.872 359.912-94.509-.174 94.509.174z"
      fill="#fff"
    />
    <path
      d="m528.98 354.666-94.51-.174-.214 10.492 94.509.174.215-10.492z"
      fill="#E1E4E5"
      mask="url(#f)"
    />
    <mask id="g" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m591.303 388.373-157.515-.29 157.515.29z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m591.303 388.373-157.515-.29 157.515.29z"
      fill="#fff"
    />
    <path
      d="m591.411 383.127-157.516-.29-.214 10.492 157.515.291.215-10.493z"
      fill="#E1E4E5"
      mask="url(#g)"
    />
    <path
      d="M361.072 402.597H219.173c-9.751 0-17.647-7.897-17.647-17.648v-81.084c0-9.751 7.896-17.648 17.647-17.648h141.899c9.751 0 17.647 7.897 17.647 17.648v81.084c0 9.751-7.896 17.648-17.647 17.648z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={5.247}
    />
    <path
      d="M330.661 316.622h10.135a7.516 7.516 0 0 1 7.512 7.512v10.136a7.516 7.516 0 0 1-7.512 7.512h-10.135a7.516 7.516 0 0 1-7.512-7.512v-10.136a7.516 7.516 0 0 1 7.512-7.512z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={5.247}
    />
    <mask id="h" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259.707 344.405H229.3h30.407z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M259.707 344.405H229.3h30.407z"
      fill="#fff"
    />
    <path
      d="M259.707 339.158H229.3v10.495h30.407v-10.495z"
      fill="#E1E4E5"
      mask="url(#h)"
    />
    <mask id="i" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M279.983 374.813h-50.678 50.678z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M279.983 374.813h-50.678 50.678z"
      fill="#fff"
    />
    <path
      d="M279.983 369.566h-50.678v10.495h50.678v-10.495z"
      fill="#E1E4E5"
      mask="url(#i)"
    />
    <rect
      x={464.708}
      y={95.272}
      width={25.602}
      height={7.506}
      rx={3.753}
      transform="rotate(35.483 464.708 95.272)"
      fill="#E1E4E5"
    />
    <rect
      x={496.949}
      y={91.206}
      width={19.654}
      height={7.455}
      rx={3.728}
      transform="rotate(90 496.949 91.206)"
      fill="#E1E4E5"
    />
    <rect
      x={458.996}
      y={120.348}
      width={21.01}
      height={7.455}
      rx={3.728}
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={468.193}
        y1={762.271}
        x2={478.856}
        y2={-278.363}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={618.938}
        y1={381.383}
        x2={506.671}
        y2={-123.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={697.816}
        y1={319.409}
        x2={893.531}
        y2={164.598}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={211.382}
        y1={415.918}
        x2={7.819}
        y2={226.781}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg218);
const Memo = memo(ForwardRef);
export default Memo;
