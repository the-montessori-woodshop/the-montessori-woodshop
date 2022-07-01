import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg267 = (
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
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M182.191 185.176v-40.978c0-22.631 18.347-40.978 40.978-40.978h204.89c22.632 0 40.978 18.347 40.978 40.978v102.445"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M182.191 185.176v-40.978c0-22.631 18.347-40.978 40.978-40.978h204.89c22.632 0 40.978 18.347 40.978 40.978v102.445"
      fill="#fff"
    />
    <path
      d="M186.191 185.176v-40.978h-8v40.978h8zm0-40.978c0-20.422 16.556-36.978 36.978-36.978v-8c-24.84 0-44.978 20.138-44.978 44.978h8zm36.978-36.978h204.89v-8h-204.89v8zm204.89 0c20.423 0 36.978 16.556 36.978 36.978h8c0-24.84-20.137-44.978-44.978-44.978v8zm36.978 36.978v102.445h8V144.198h-8z"
      fill="#E1E4E5"
      mask="url(#a)"
    />
    <path
      d="m317.864 184.332.001.002a22.49 22.49 0 0 0 18.711 10.008h132.461c21.527 0 38.978 17.451 38.978 38.978v143.423c0 21.527-17.451 38.978-38.978 38.978H182.191c-21.527 0-38.978-17.451-38.978-38.978v-204.89c0-21.527 17.451-38.978 38.978-38.978h91.488a18.488 18.488 0 0 1 15.439 8.246l28.746 43.211z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M304.057 240.177v-40.978c0-22.631 18.346-40.978 40.978-40.978h204.89c22.631 0 40.978 18.347 40.978 40.978v102.445"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M304.057 240.177v-40.978c0-22.631 18.346-40.978 40.978-40.978h204.89c22.631 0 40.978 18.347 40.978 40.978v102.445"
      fill="#fff"
    />
    <path
      d="M308.057 240.177v-40.978h-8v40.978h8zm0-40.978c0-20.422 16.556-36.978 36.978-36.978v-8c-24.841 0-44.978 20.138-44.978 44.978h8zm36.978-36.978h204.89v-8h-204.89v8zm204.89 0c20.422 0 36.978 16.556 36.978 36.978h8c0-24.84-20.137-44.978-44.978-44.978v8zm36.978 36.978v102.445h8V199.199h-8z"
      fill="#E1E4E5"
      mask="url(#b)"
    />
    <path
      d="m439.729 239.333.002.002a22.487 22.487 0 0 0 18.71 10.008h132.462c21.527 0 38.978 17.451 38.978 38.978v143.423c0 21.527-17.451 38.978-38.978 38.978H304.057c-21.527 0-38.978-17.451-38.978-38.978v-204.89c0-21.527 17.451-38.978 38.978-38.978h91.488a18.484 18.484 0 0 1 15.438 8.246l28.746 43.211z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <mask id="c" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M425.922 295.179v-40.978c0-22.632 18.347-40.978 40.978-40.978h204.891c22.631 0 40.978 18.346 40.978 40.978v102.445"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M425.922 295.179v-40.978c0-22.632 18.347-40.978 40.978-40.978h204.891c22.631 0 40.978 18.346 40.978 40.978v102.445"
      fill="#fff"
    />
    <path
      d="M429.922 295.179v-40.978h-8v40.978h8zm0-40.978c0-20.423 16.556-36.978 36.978-36.978v-8c-24.84 0-44.978 20.137-44.978 44.978h8zm36.978-36.978h204.891v-8H466.9v8zm204.891 0c20.422 0 36.978 16.555 36.978 36.978h8c0-24.841-20.138-44.978-44.978-44.978v8zm36.978 36.978v102.445h8V254.201h-8z"
      fill="#E1E4E5"
      mask="url(#c)"
    />
    <path
      d="m561.595 294.334.001.003a22.492 22.492 0 0 0 18.711 10.007h132.461c21.527 0 38.978 17.451 38.978 38.978v143.423c0 21.527-17.451 38.978-38.978 38.978H425.922c-21.527 0-38.978-17.451-38.978-38.978v-204.89c0-21.527 17.451-38.978 38.978-38.978h91.489a18.492 18.492 0 0 1 15.438 8.246l28.746 43.211z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m767.534 499.96-42.729-42.73"
      stroke="#6f381e"
      strokeWidth={22.326}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={644.049}
      cy={359.09}
      r={123.219}
      fill="#fff"
      stroke="#6f381e"
      strokeWidth={20.479}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M765.967 239.753c-13.098 6.498-30.482-1.857-30.482-1.857s3.863-18.885 16.968-25.373c13.099-6.498 30.476 1.848 30.476 1.848s-3.863 18.885-16.962 25.382z"
      fill="url(#d)"
    />
    <path
      d="M191.616 370.036c20.174 12.091 49.117.914 49.117.914s-3.785-30.776-23.971-42.854c-20.174-12.091-49.105-.927-49.105-.927s3.784 30.776 23.959 42.867z"
      fill="url(#e)"
    />
    <circle
      r={7.887}
      transform="matrix(-1 0 0 1 326.228 435.807)"
      fill="#E1E4E5"
    />
    <circle
      r={11.392}
      transform="matrix(-1 0 0 1 153.542 433.026)"
      fill="#E1E4E5"
    />
    <circle
      r={8.671}
      transform="matrix(-1 0 0 1 798.262 411.588)"
      fill="#E1E4E5"
    />
    <circle
      r={9.64}
      transform="matrix(-1 0 0 1 669.851 158.239)"
      fill="#E1E4E5"
    />
    <circle
      r={8.656}
      transform="matrix(0 1 1 0 102.656 251.715)"
      fill="#E1E4E5"
    />
    <circle
      r={11.516}
      transform="matrix(-1 0 0 1 403.348 83.516)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.858}
      ry={7.087}
      transform="matrix(-1 0 0 1 439.359 485.694)"
      fill="#E1E4E5"
    />
    <circle
      r={18.016}
      transform="scale(1 -1) rotate(-75 209.545 -416.04)"
      fill="#E1E4E5"
    />
    <path
      d="M219.079 193.272h.126c.747 10.588 8.621 10.751 8.621 10.751s-8.682.17-8.682 12.403c0-12.233-8.683-12.403-8.683-12.403s7.871-.163 8.618-10.751zm-13.192 277.146h.122c.717 10.556 8.277 10.719 8.277 10.719s-8.336.169-8.336 12.366c0-12.197-8.337-12.366-8.337-12.366s7.557-.163 8.274-10.719z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="d"
        x1={715.669}
        y1={260.021}
        x2={823.704}
        y2={174.565}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={269.684}
        y1={408.957}
        x2={107.356}
        y2={258.133}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg267);
const Memo = memo(ForwardRef);
export default Memo;
