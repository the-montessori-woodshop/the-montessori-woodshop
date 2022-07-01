import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg98 = (
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
      d="M595.714 161.796c-5.45 9.726-17.385 11.062-36.506 9.214-14.381-1.393-27.495-2.47-41.877-10.311-10.066-5.485-18.034-12.905-23.85-20.112-6.302-7.807-15.098-16.717-10.786-25.569 5.926-12.16 40.196-22.402 73.473-5.654 36.555 18.404 44.877 42.926 39.546 52.432z"
      fill="url(#a)"
    />
    <path
      d="M344.424 479.633c-34.372-48.085-69.572-99.191-115.657-124.363-47.535-25.977-56.301-9.967-59.592 15.486-3.29 25.453 11.376 85.759 76.247 120.072 64.889 34.323 131.163 33.808 99.002-11.195z"
      fill="url(#b)"
    />
    <path
      d="M593.89 437.164c-35.516 4.658-72.884 8.898-99.491 26.357-27.451 18.005-21.392 27.26-8.722 36.281 12.67 9.021 49.099 18.385 85.953-6.511 36.865-24.902 55.498-60.484 22.26-56.127z"
      fill="url(#c)"
    />
    <path
      d="M642.364 200.774c-15.441 3.658-31.773-9.437-31.773-9.437s8.715-19.019 24.162-22.666c15.441-3.658 31.768 9.426 31.768 9.426s-8.716 19.019-24.157 22.677z"
      fill="url(#d)"
    />
    <path
      d="M380.737 126.418c16.257 11.198 41.092 3.37 41.092 3.37s-1.538-25.978-17.805-37.165c-16.256-11.197-41.081-3.38-41.081-3.38s1.538 25.978 17.794 37.175z"
      fill="url(#e)"
    />
    <path
      d="M169.072 286.15c17.623 17.938 50.579 14.156 50.579 14.156s4.361-32.865-13.279-50.791c-17.624-17.937-50.563-14.166-50.563-14.166s-4.361 32.864 13.263 50.801z"
      fill="url(#f)"
    />
    <ellipse
      cx={688.098}
      cy={345.528}
      rx={13.097}
      ry={12.528}
      transform="rotate(180 688.098 345.528)"
      fill="#6f381e"
    />
    <ellipse
      cx={242.058}
      cy={459.11}
      rx={17.653}
      ry={17.083}
      transform="rotate(180 242.058 459.11)"
      fill="#6f381e"
    />
    <circle
      r={6.264}
      transform="matrix(-1 0 0 1 258.264 257.264)"
      fill="#6f381e"
    />
    <circle
      r={11.958}
      transform="matrix(-1 0 0 1 620.958 134.958)"
      fill="#6f381e"
    />
    <circle
      r={10.755}
      transform="matrix(-1 0 0 1 693.755 447.755)"
      fill="#E1E4E5"
    />
    <circle
      r={11.313}
      transform="matrix(-1 0 0 1 188.313 342.312)"
      fill="#E1E4E5"
    />
    <circle
      r={3.986}
      transform="matrix(-1 0 0 1 296.724 516.624)"
      fill="#E1E4E5"
    />
    <circle
      r={5.694}
      transform="matrix(-1 0 0 1 576.694 146.694)"
      fill="#E1E4E5"
    />
    <circle
      r={5.565}
      transform="scale(1 -1) rotate(-75 -80.094 -332.51)"
      fill="#E1E4E5"
    />
    <circle
      r={7.403}
      transform="matrix(-1 0 0 1 212.591 154.763)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={5.694}
      ry={4.556}
      transform="matrix(-1 0 0 1 636.695 328.556)"
      fill="#E1E4E5"
    />
    <circle
      r={11.581}
      transform="scale(1 -1) rotate(-75 157.704 -346.09)"
      fill="#E1E4E5"
    />
    <path
      d="M726.174 290h.149c.882 12.499 10.177 12.691 10.177 12.691s-10.25.2-10.25 14.642c0-14.442-10.25-14.642-10.25-14.642s9.291-.192 10.174-12.691zM326.521 113h.257c1.519 21.873 17.528 22.21 17.528 22.21s-17.653.35-17.653 25.623c0-25.273-17.653-25.623-17.653-25.623s16.002-.337 17.521-22.21z"
      fill="#E1E4E5"
    />
    <circle
      cx={434.63}
      cy={306.298}
      r={148.172}
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <circle cx={434.63} cy={306.298} r={90.55} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M437.934 339.495a185.711 185.711 0 0 1 27.982-29.863l.173-.148a4.196 4.196 0 0 0 0-6.377l-.173-.149a185.663 185.663 0 0 1-27.982-29.862 4.126 4.126 0 0 0-6.606 0 185.624 185.624 0 0 1-27.983 29.862l-.172.149a4.192 4.192 0 0 0 0 6.377l.172.148a185.672 185.672 0 0 1 27.983 29.863 4.126 4.126 0 0 0 6.606 0zm-3.306-123.754v-57.623 57.623z"
      fill="#fff"
    />
    <path d="M434.628 215.741v-57.623" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M434.628 396.845v57.623-57.623z"
      fill="#fff"
    />
    <path d="M434.628 396.845v57.623" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m539.398 201.518-40.746 40.745 40.746-40.745z"
      fill="#fff"
    />
    <path d="m539.398 201.518-40.746 40.745" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m370.596 370.32-40.746 40.746 40.746-40.746z"
      fill="#fff"
    />
    <path d="m370.596 370.32-40.746 40.746" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M582.801 306.296h-57.624 57.624z"
      fill="#fff"
    />
    <path d="M582.801 306.296h-57.624" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M344.074 306.296H286.45h57.624z"
      fill="#fff"
    />
    <path d="M344.074 306.296H286.45" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m498.652 370.32 40.746 40.746-40.746-40.746z"
      fill="#fff"
    />
    <path d="m498.652 370.32 40.746 40.746" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m329.85 201.518 40.746 40.745-40.746-40.745z"
      fill="#fff"
    />
    <path d="m329.85 201.518 40.746 40.745" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M632.928 360.066h-62.264c-13.739.041-24.866 11.168-24.906 24.906v62.265c.04 13.738 11.167 24.865 24.906 24.906h62.264c13.739-.041 24.866-11.168 24.906-24.906v-62.265c-.04-13.738-11.167-24.865-24.906-24.906z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={7.813}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={573.841} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={573.84} cy={437.142} r={7.767} fill="#fff" />
    <circle cx={601.325} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={601.325} cy={437.142} r={7.767} fill="#fff" />
    <circle cx={628.809} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={628.809} cy={437.142} r={7.767} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M304.308 360.066h-62.264c-13.738.041-24.866 11.168-24.906 24.906v62.265c.04 13.738 11.168 24.865 24.906 24.906h62.264c13.739-.041 24.866-11.168 24.906-24.906v-62.265c-.04-13.738-11.167-24.865-24.906-24.906z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={7.813}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={245.221} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={245.22} cy={437.142} r={7.767} fill="#fff" />
    <circle cx={272.705} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={272.705} cy={437.142} r={7.767} fill="#fff" />
    <circle cx={300.189} cy={395.318} r={7.767} fill="#fff" />
    <circle cx={300.189} cy={437.142} r={7.767} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M664.866 239.792a34.071 34.071 0 1 1-48.184 0c13.305-13.305 34.878-13.305 48.184 0z"
      fill="#6f381e"
    />
    <path
      d="M664.866 239.792a34.071 34.071 0 1 1-48.184 0c13.305-13.305 34.878-13.305 48.184 0"
      stroke="#6f381e"
      strokeWidth={4.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M642.208 278.306a80.649 80.649 0 0 1 12.154-12.974l.075-.065a1.821 1.821 0 0 0 0-2.771l-.075-.064a80.69 80.69 0 0 1-12.154-12.974 1.793 1.793 0 0 0-2.869 0 80.69 80.69 0 0 1-12.154 12.974l-.075.065a1.821 1.821 0 0 0 0 2.771l.075.064a80.69 80.69 0 0 1 12.154 12.974 1.79 1.79 0 0 0 2.869 0z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M513.8 144.343a25.072 25.072 0 1 1-40.891 27.322 25.072 25.072 0 0 1 5.435-27.322c9.791-9.791 25.665-9.791 35.456 0z"
      fill="#6f381e"
    />
    <path
      d="M513.8 144.343a25.072 25.072 0 1 1-40.891 27.322 25.072 25.072 0 0 1 5.435-27.322c9.791-9.791 25.665-9.791 35.456 0"
      stroke="#6f381e"
      strokeWidth={3.495}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M497.127 172.683a59.339 59.339 0 0 1 8.944-9.547l.055-.047a1.342 1.342 0 0 0 0-2.039l-.055-.047a59.345 59.345 0 0 1-8.944-9.548 1.32 1.32 0 0 0-2.111 0 59.342 59.342 0 0 1-8.943 9.548l-.056.047a1.34 1.34 0 0 0 0 2.039l.056.047a59.384 59.384 0 0 1 8.943 9.548 1.32 1.32 0 0 0 2.111-.001z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M292.032 168.093a34.072 34.072 0 1 1-48.184 0c13.306-13.305 34.879-13.305 48.184 0z"
      fill="#6f381e"
    />
    <path
      d="M292.032 168.093a34.072 34.072 0 1 1-48.184 0c13.306-13.305 34.879-13.305 48.184 0"
      stroke="#6f381e"
      strokeWidth={4.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M269.374 206.607a80.69 80.69 0 0 1 12.154-12.974l.075-.064a1.825 1.825 0 0 0 0-2.771l-.075-.065a80.649 80.649 0 0 1-12.154-12.974 1.791 1.791 0 0 0-2.869 0 80.697 80.697 0 0 1-12.154 12.975l-.075.064a1.821 1.821 0 0 0 0 2.771l.075.064a80.655 80.655 0 0 1 12.154 12.975 1.792 1.792 0 0 0 2.869-.001z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={559.001}
        y1={224.83}
        x2={510.427}
        y2={6.557}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={306.045}
        y1={637.485}
        x2={193.275}
        y2={115.985}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={667.34}
        y1={502.72}
        x2={356.333}
        y2={414.229}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={584.216}
        y1={209.87}
        x2={719.389}
        y2={146.009}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={444.063}
        y1={163.158}
        x2={316.097}
        y2={28.221}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={239.387}
        y1={347.42}
        x2={111.978}
        y2={147.696}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg98);
const Memo = memo(ForwardRef);
export default Memo;
