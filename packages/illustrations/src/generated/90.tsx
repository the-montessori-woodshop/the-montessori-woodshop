import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg90 = (
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
    <path fill="transparent" d="M2 2h896v596H2z" />
    <path
      d="M348.961 256.62V134.64c0-26.04 21.109-47.149 47.148-47.149h235.742c26.039 0 47.148 21.109 47.148 47.149v330.038c0 26.039-21.109 47.148-47.148 47.148H501.868"
      stroke="#E1E4E5"
      strokeWidth={4.918}
    />
    <path
      d="M606.382 144.757h-92.506m92.506 115.081h-92.506m92.506-57.265h-92.506m92.506 115.632h-92.506m92.506 57.266h-92.506m92.506 58.367h-92.506"
      stroke="#E1E4E5"
      strokeWidth={15.184}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={379.539}
      y={135.439}
      width={103.273}
      height={103.273}
      rx={51.637}
      fill="#6f381e"
    />
    <path
      d="m447.959 177.794-22.516 22.252-13.509-13.351"
      stroke="#fff"
      strokeWidth={10.287}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M408.131 338.812v-25.728c0-14.215-11.528-25.728-25.762-25.728h-56.006c-14.233 0-25.761 11.513-25.761 25.728v25.728"
      stroke="#6f381e"
      strokeWidth={17.405}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M444.479 506.452H263.944c-14.25 0-25.791-11.541-25.791-25.791V391.64l68.132 44.96.007.004a46.828 46.828 0 0 0 20.188 7.415c5.578 8.573 15.244 14.242 26.234 14.242h1.954c10.938 0 20.564-5.615 26.154-14.12a46.84 46.84 0 0 0 21.309-7.537l.007-.004 68.132-44.961v89.022c0 14.25-11.541 25.791-25.791 25.791zM328.56 407.119c5.736-6.965 14.426-11.407 24.154-11.407h1.954c9.851 0 18.638 4.555 24.37 11.672a10.2 10.2 0 0 0 2.924-1.328l.007-.004 84.132-55.519c-4.601-7.058-12.564-11.721-21.622-11.721H263.944c-9.058 0-17.022 4.663-21.622 11.722l84.131 55.518.007.004c.66.436 1.365.792 2.1 1.063z"
      fill="#6f381e"
    />
    <path
      d="m238.153 391.64 4.793-7.263a8.7 8.7 0 0 0-13.495 7.263h8.702zm68.132 44.96 4.796-7.262-.003-.002-4.793 7.264zm.007.004-4.796 7.262h.001l4.795-7.262zm20.188 7.415 7.295-4.745a8.702 8.702 0 0 0-6.249-3.894l-1.046 8.639zm54.342.122-.837-8.662a8.701 8.701 0 0 0-6.435 3.883l7.272 4.779zm21.309-7.537 4.795 7.262.004-.003-4.799-7.259zm.007-.004-4.793-7.264-.007.005 4.8 7.259zm68.132-44.961h8.702a8.7 8.7 0 0 0-4.578-7.662 8.7 8.7 0 0 0-8.917.399l4.793 7.263zm-141.71 15.48-3.013 8.164a8.7 8.7 0 0 0 9.73-2.632l-6.717-5.532zm50.478.265-6.777 5.459a8.703 8.703 0 0 0 9.09 2.931l-2.313-8.39zm2.924-1.328-4.792-7.264-.004.003 4.796 7.261zm.007-.004 4.792 7.263h.001l-4.793-7.263zm84.132-55.519 4.793 7.264a8.704 8.704 0 0 0 2.497-12.016l-7.29 4.752zm-223.779.001-7.291-4.752a8.703 8.703 0 0 0 2.498 12.015l4.793-7.263zm84.131 55.518-4.793 7.263.003.002 4.79-7.265zm.007.004 4.797-7.261-.006-.004-4.791 7.265zm-62.516 109.099h180.535V497.75H263.944v17.405zm-34.493-34.494c0 19.056 15.437 34.494 34.493 34.494V497.75c-9.444 0-17.089-7.645-17.089-17.089h-17.404zm0-89.021v89.021h17.404V391.64h-17.404zm81.627 37.696-68.132-44.959-9.586 14.526 68.132 44.96 9.586-14.527zm.01.007-.007-.005-9.592 14.523.007.005 9.592-14.523zm16.438 6.037a38.136 38.136 0 0 1-16.439-6.038l-9.59 14.524a55.54 55.54 0 0 0 23.938 8.793l2.091-17.279zm25.188 14.179c-7.923 0-14.899-4.076-18.939-10.285l-14.589 9.491c7.115 10.936 19.471 18.198 33.528 18.198v-17.404zm1.954 0h-1.954v17.404h1.954v-17.404zm18.882-10.197c-4.049 6.16-10.996 10.197-18.882 10.197v17.404c13.99 0 26.296-7.193 33.426-18.042l-14.544-9.559zm23.786-10.02a38.138 38.138 0 0 1-17.351 6.137l1.674 17.324a55.555 55.555 0 0 0 25.267-8.937l-9.59-14.524zm.002-.001-.007.004 9.599 14.518.007-.004-9.599-14.518zm68.139-44.965-68.132 44.96 9.586 14.527 68.132-44.96-9.586-14.527zm13.495 96.285v-89.022h-17.404v89.022h17.404zm-34.493 34.494c19.056 0 34.493-15.438 34.493-34.494h-17.404c0 9.444-7.645 17.089-17.089 17.089v17.405zM335.277 412.651c4.154-5.044 10.419-8.236 17.437-8.236V387.01c-12.438 0-23.554 5.691-30.872 14.577l13.435 11.064zm17.437-8.236h1.954V387.01h-1.954v17.405zm1.954 0c7.106 0 13.441 3.273 17.593 8.428l13.555-10.917c-7.314-9.081-18.552-14.916-31.148-14.916v17.405zm22.498-5.62a1.56 1.56 0 0 1-.44.2l4.625 16.779a18.944 18.944 0 0 0 5.407-2.457l-9.592-14.522zm.011-.007-.007.004 9.584 14.528.007-.005-9.584-14.527zm84.131-55.518-84.132 55.518 9.586 14.527 84.132-55.518-9.586-14.527zm-16.829 4.244c5.996 0 11.271 3.075 14.332 7.771l14.58-9.504c-6.14-9.419-16.792-15.671-28.912-15.671v17.404zm-180.535 0h180.535V330.11H263.944v17.404zm-14.332 7.771c3.061-4.696 8.336-7.771 14.332-7.771V330.11c-12.12 0-22.773 6.252-28.913 15.672l14.581 9.503zm81.634 43.503-84.131-55.518-9.586 14.527 84.131 55.518 9.586-14.527zm.005.003-.007-.005-9.581 14.531.007.004 9.581-14.53zm.322.164a1.514 1.514 0 0 1-.316-.16l-9.593 14.522a18.942 18.942 0 0 0 3.883 1.966l6.026-16.328z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M270.555 281.381h-3.241c-.784 0-1.415.638-1.415 1.414v3.241c0 .784.638 1.415 1.415 1.415h3.241a1.42 1.42 0 0 0 1.414-1.415v-3.241a1.411 1.411 0 0 0-1.414-1.414zm-11.239 0h-3.24a1.42 1.42 0 0 0-1.415 1.414v3.241c0 .784.638 1.415 1.415 1.415h3.24a1.42 1.42 0 0 0 1.415-1.415v-3.241a1.42 1.42 0 0 0-1.415-1.414zm-11.242 0h-3.241a1.42 1.42 0 0 0-1.415 1.414v3.241c0 .784.638 1.415 1.415 1.415h3.241a1.42 1.42 0 0 0 1.414-1.415v-3.241a1.411 1.411 0 0 0-1.414-1.414zm-11.236 0h-3.24a1.42 1.42 0 0 0-1.415 1.414v3.241c0 .784.638 1.415 1.415 1.415h3.24c.784 0 1.421-.638 1.421-1.415v-3.241a1.43 1.43 0 0 0-1.421-1.414zm-11.236 0h-3.24c-.784 0-1.422.638-1.422 1.414v3.241c0 .784.638 1.415 1.422 1.415h3.24a1.42 1.42 0 0 0 1.415-1.415v-3.241a1.42 1.42 0 0 0-1.415-1.414zm33.306 12.253h-3.241a1.42 1.42 0 0 0-1.415 1.414v3.247a1.42 1.42 0 0 0 1.415 1.415h3.241c.783 0 1.414-.638 1.414-1.415v-3.24a1.412 1.412 0 0 0-1.414-1.421zm-11.239 0h-3.24a1.42 1.42 0 0 0-1.415 1.414v3.247a1.42 1.42 0 0 0 1.415 1.415h3.24a1.42 1.42 0 0 0 1.415-1.415v-3.24a1.413 1.413 0 0 0-1.415-1.421zm-11.237 0h-3.241c-.783 0-1.421.637-1.421 1.414v3.247c0 .777.638 1.415 1.421 1.415h3.241a1.42 1.42 0 0 0 1.414-1.415v-3.24a1.42 1.42 0 0 0-1.414-1.421zm11.642-25.415h-3.241a1.42 1.42 0 0 0-1.415 1.415v3.241c0 .783.638 1.414 1.415 1.414h3.241a1.42 1.42 0 0 0 1.414-1.414v-3.241a1.412 1.412 0 0 0-1.414-1.415zm-11.236 0h-3.24a1.42 1.42 0 0 0-1.415 1.415v3.241c0 .783.638 1.414 1.415 1.414h3.24a1.42 1.42 0 0 0 1.421-1.414v-3.241a1.43 1.43 0 0 0-1.421-1.415z"
      fill="#E1E4E5"
    />
    <circle
      r={7.227}
      transform="matrix(-1 0 0 1 273.656 215.995)"
      fill="#6f381e"
    />
    <circle
      r={8.541}
      transform="matrix(-1 0 0 1 296.984 158.733)"
      fill="#E1E4E5"
    />
    <circle
      cx={648.846}
      cy={344.007}
      r={4.327}
      transform="rotate(-180 648.846 344.007)"
      fill="#6f381e"
    />
    <circle
      r={7.227}
      transform="matrix(-1 0 0 1 651.453 226.869)"
      fill="#6f381e"
    />
    <circle
      cx={647.116}
      cy={409.454}
      r={2.598}
      transform="rotate(-180 647.116 409.454)"
      fill="#E1E4E5"
    />
    <circle
      r={4.589}
      transform="matrix(-1 0 0 1 648.583 295.814)"
      fill="#E1E4E5"
    />
    <circle
      r={3.573}
      transform="matrix(-1 0 0 1 647.398 185.773)"
      fill="#E1E4E5"
    />
    <path
      d="M316.562 186.604h.158c.939 13.298 10.828 13.503 10.828 13.503s-10.905.212-10.905 15.577c0-15.365-10.905-15.577-10.905-15.577s9.885-.205 10.824-13.503z"
      fill="#E1E4E5"
    />
    <path stroke="#E1E4E5" strokeWidth={4} d="M2 2h896v596H2z" />
  </svg>
);

const ForwardRef = forwardRef(Svg90);
const Memo = memo(ForwardRef);
export default Memo;