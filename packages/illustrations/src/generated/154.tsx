import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg154 = (
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
      d="M535.298 169.506c67.323 0 112.466 62.892 112.466 121.458 0 118.884-187.423 216.219-190.837 216.219-3.414 0-190.837-97.335-190.837-216.219 0-58.566 45.143-121.458 112.467-121.458 38.485 0 63.76 19.099 78.37 36.11 14.61-17.011 39.885-36.11 78.371-36.11z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M498.477 249C534.108 249 558 282.339 558 313.384 558 376.403 458.807 428 457 428c-1.807 0-101-51.597-101-114.616C356 282.339 379.892 249 415.523 249c20.368 0 33.745 10.125 41.477 19.142 7.732-9.017 21.109-19.142 41.477-19.142z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M218.384 473.778h3.962a1.73 1.73 0 0 1 1.729 1.729v3.962a1.73 1.73 0 0 1-1.729 1.729h-3.962c-.95 0-1.729-.78-1.729-1.729v-3.962a1.725 1.725 0 0 1 1.729-1.729zm13.736 0h3.962c.949 0 1.729.779 1.729 1.729v3.962a1.73 1.73 0 0 1-1.729 1.729h-3.962c-.95 0-1.729-.78-1.729-1.729v-3.962c0-.95.779-1.729 1.729-1.729zm13.745 0h3.961c.95 0 1.73.779 1.73 1.729v3.962c0 .958-.78 1.729-1.73 1.729h-3.961c-.95 0-1.73-.78-1.73-1.729v-3.962a1.726 1.726 0 0 1 1.73-1.729zm13.735 0h3.962c.95 0 1.729.779 1.729 1.729v3.962a1.73 1.73 0 0 1-1.729 1.729H259.6c-.958 0-1.737-.78-1.737-1.729v-3.962a1.747 1.747 0 0 1 1.737-1.729zm13.737-.001h3.962c.958 0 1.737.78 1.737 1.73v3.961c0 .958-.779 1.73-1.737 1.73h-3.962c-.95 0-1.729-.78-1.729-1.73v-3.961c0-.95.779-1.73 1.729-1.73zm-40.713 14.979h3.961c.95 0 1.73.779 1.73 1.729v3.97c0 .949-.78 1.729-1.73 1.729h-3.961c-.958 0-1.73-.78-1.73-1.729v-3.962a1.728 1.728 0 0 1 1.73-1.737zm13.735 0h3.962c.95 0 1.729.779 1.729 1.729v3.97c0 .949-.779 1.729-1.729 1.729h-3.962c-.95 0-1.729-.78-1.729-1.729v-3.962a1.727 1.727 0 0 1 1.729-1.737zm13.737 0h3.962c.958 0 1.737.779 1.737 1.729v3.97c0 .949-.779 1.729-1.737 1.729h-3.962c-.95 0-1.729-.78-1.729-1.729v-3.962c0-.958.779-1.737 1.729-1.737zm-14.231-31.07h3.961c.95.001 1.73.78 1.73 1.73v3.961c0 .958-.78 1.73-1.73 1.73h-3.961c-.95 0-1.73-.78-1.73-1.73v-3.961a1.727 1.727 0 0 1 1.73-1.73zm13.735 0h3.962c.95.001 1.729.78 1.729 1.73v3.961c0 .958-.779 1.73-1.729 1.73H259.6c-.958 0-1.737-.78-1.737-1.73v-3.961c.008-.95.787-1.73 1.737-1.73zm438.215 19.138h-3.628c-.878 0-1.584.714-1.584 1.584v3.628c0 .877.714 1.584 1.584 1.584h3.628a1.59 1.59 0 0 0 1.584-1.584v-3.628a1.58 1.58 0 0 0-1.584-1.584zm-12.58 0h-3.629a1.59 1.59 0 0 0-1.583 1.584v3.628c0 .877.714 1.584 1.583 1.584h3.629a1.59 1.59 0 0 0 1.584-1.584v-3.628a1.59 1.59 0 0 0-1.584-1.584zm-12.589 0h-3.628a1.59 1.59 0 0 0-1.584 1.584v3.628c0 .877.714 1.584 1.584 1.584h3.628a1.59 1.59 0 0 0 1.584-1.584v-3.628a1.58 1.58 0 0 0-1.584-1.584zm-12.58 0h-3.629a1.59 1.59 0 0 0-1.583 1.584v3.628c0 .877.713 1.584 1.583 1.584h3.629c.877 0 1.591-.714 1.591-1.584v-3.628a1.6 1.6 0 0 0-1.591-1.584zm-12.581 0h-3.629a1.59 1.59 0 0 0-1.591 1.583v3.629c0 .877.714 1.584 1.591 1.584h3.629a1.59 1.59 0 0 0 1.583-1.584v-3.629a1.59 1.59 0 0 0-1.583-1.583zm37.289 13.718h-3.629a1.59 1.59 0 0 0-1.584 1.584v3.636c0 .87.714 1.584 1.584 1.584h3.629c.877 0 1.583-.714 1.583-1.584v-3.629a1.581 1.581 0 0 0-1.583-1.591zm-12.581 0h-3.628a1.59 1.59 0 0 0-1.584 1.584v3.636c0 .87.714 1.584 1.584 1.584h3.628a1.59 1.59 0 0 0 1.584-1.584v-3.629a1.582 1.582 0 0 0-1.584-1.591zm-12.581 0h-3.629c-.877 0-1.591.714-1.591 1.584v3.636c0 .87.714 1.584 1.591 1.584h3.629a1.59 1.59 0 0 0 1.584-1.584v-3.629c0-.877-.714-1.591-1.584-1.591zm13.034-28.456h-3.628a1.59 1.59 0 0 0-1.584 1.584v3.628c0 .878.714 1.584 1.584 1.584h3.628a1.59 1.59 0 0 0 1.584-1.584v-3.628a1.58 1.58 0 0 0-1.584-1.584zm-12.58 0h-3.629a1.59 1.59 0 0 0-1.583 1.584v3.628c0 .878.713 1.584 1.583 1.584h3.629c.877 0 1.591-.714 1.591-1.584v-3.628a1.6 1.6 0 0 0-1.591-1.584z"
      fill="#E1E4E5"
    />
    <path
      d="M699.531 399.614c-10.873 12.584-32.784 11.482-32.784 11.482s-4.269-21.506 6.616-34.084c10.873-12.584 32.773-11.488 32.773-11.488s4.268 21.506-6.605 34.09z"
      fill="url(#a)"
    />
    <path
      d="M584.85 504.447c8.537-5.846 9.381-19.469 9.381-19.469s-12.999-4.136-21.533 1.718c-8.537 5.847-9.383 19.462-9.383 19.462s12.999 4.136 21.535-1.711z"
      fill="url(#b)"
    />
    <path
      d="M186.738 377.923c13.674 13.917 39.243 10.983 39.243 10.983s3.384-25.498-10.302-39.407c-13.674-13.917-39.231-10.991-39.231-10.991s-3.384 25.498 10.29 39.415z"
      fill="url(#c)"
    />
    <circle
      cx={457.991}
      cy={334.991}
      r={7.991}
      transform="rotate(180 457.991 334.991)"
      fill="#6f381e"
    />
    <circle
      r={10.999}
      transform="matrix(-1 0 0 1 318.948 155.207)"
      fill="#6f381e"
    />
    <circle
      r={12.649}
      transform="matrix(-1 0 0 1 645.076 182.155)"
      fill="#6f381e"
    />
    <circle
      r={7.15}
      transform="matrix(-1 0 0 1 488.825 149.945)"
      fill="#6f381e"
    />
    <circle
      r={5.5}
      transform="matrix(-1 0 0 1 736.858 281.386)"
      fill="#E1E4E5"
    />
    <circle
      r={9.313}
      transform="matrix(-1 0 0 1 180.268 280.005)"
      fill="#E1E4E5"
    />
    <circle
      r={5.5}
      transform="matrix(-1 0 0 1 699.461 164.794)"
      fill="#E1E4E5"
    />
    <circle
      r={9.298}
      transform="scale(1 -1) rotate(-75 -195.562 -276.764)"
      fill="#fff"
    />
    <circle
      r={12.369}
      transform="matrix(-1 0 0 1 446.747 130.966)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.514}
      ry={7.612}
      transform="matrix(-1 0 0 1 725.282 417.968)"
      fill="#fff"
    />
    <circle
      r={7.638}
      transform="scale(1 -1) rotate(-75 234.315 -456.156)"
      fill="#E1E4E5"
    />
    <path
      d="M212.755 162.906h.249c1.473 20.884 17.004 21.205 17.004 21.205s-17.126.334-17.126 24.465c0-24.131-17.126-24.465-17.126-24.465s15.525-.321 16.999-21.205zM356.443 79h.179c1.063 15.281 12.263 15.516 12.263 15.516s-12.35.245-12.35 17.902c0-17.657-12.35-17.902-12.35-17.902S355.38 94.281 356.443 79z"
      fill="#E1E4E5"
    />
    <path
      d="M738.768 218.045c21.685-5.137 44.62 13.253 44.62 13.253s-12.239 26.71-33.931 31.831c-21.685 5.137-44.614-13.237-44.614-13.237s12.24-26.71 33.925-31.847z"
      fill="url(#d)"
    />
    <circle cx={156.814} cy={215.008} r={11.716} fill="#6f381e" />
    <circle
      r={8.797}
      transform="matrix(1 0 0 -1 731.356 334.18)"
      fill="#6f381e"
    />
    <circle
      r={16.794}
      transform="matrix(1 0 0 -1 185.409 439.285)"
      fill="#6f381e"
    />
    <circle
      r={9.373}
      transform="matrix(1 0 0 -1 609.84 440.349)"
      fill="#E1E4E5"
    />
    <circle
      r={7.997}
      transform="matrix(1 0 0 -1 374.528 498.676)"
      fill="#E1E4E5"
    />
    <circle
      r={7.815}
      transform="scale(-1 1) rotate(-75 -129.4 594.191)"
      fill="#E1E4E5"
    />
    <circle
      r={10.396}
      transform="matrix(1 0 0 -1 698.34 438.977)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={7.997}
      ry={6.398}
      transform="matrix(1 0 0 -1 125.881 288.327)"
      fill="#E1E4E5"
    />
    <circle
      r={16.264}
      transform="scale(-1 1) rotate(-75 -57.18 231.725)"
      fill="#E1E4E5"
    />
    <path
      d="M229.307 333.208h-.209c-1.239-17.552-14.293-17.822-14.293-17.822s14.395-.281 14.395-20.563c0 20.282 14.395 20.563 14.395 20.563s-13.049.27-14.288 17.822zM510.901 521.17h-.152c-.899-13.077-10.375-13.278-10.375-13.278s10.449-.209 10.449-15.32c0 15.111 10.45 15.32 10.45 15.32s-9.472.201-10.372 13.278z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={655.714}
        y1={443.027}
        x2={731.357}
        y2={305.817}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={614.739}
        y1={480.379}
        x2={524.647}
        y2={517.596}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={241.294}
        y1={425.461}
        x2={142.441}
        y2={270.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={820.428}
        y1={205.272}
        x2={630.598}
        y2={294.954}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg154);
const Memo = memo(ForwardRef);
export default Memo;
