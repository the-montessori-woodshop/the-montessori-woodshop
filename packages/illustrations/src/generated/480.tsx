import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg480 = (
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
      d="M603.665 248.725c-9.835 6.303-21.528 1.651-38.293-9.49-12.607-8.381-24.198-15.845-33.625-30.188-6.6-10.036-10.306-20.825-12.127-30.356-1.975-10.326-5.711-22.902 2.642-28.958 11.476-8.318 48.208-.881 70.709 31.016 24.714 35.044 20.311 61.819 10.694 67.976z"
      fill="url(#a)"
    />
    <path
      d="M707.206 279.801c-14.347 7.117-33.388-2.034-33.388-2.034s4.232-20.686 18.586-27.792c14.347-7.117 33.381 2.024 33.381 2.024s-4.232 20.685-18.579 27.802z"
      fill="url(#b)"
    />
    <path
      d="M222.298 192.984c29.01 17.387 70.63 1.314 70.63 1.314s-5.442-44.257-34.47-61.624c-29.01-17.387-70.613-1.334-70.613-1.334s5.442 44.257 34.453 61.644z"
      fill="url(#c)"
    />
    <circle
      cx={642.525}
      cy={249.73}
      r={13.042}
      transform="rotate(180 642.525 249.73)"
      fill="#6f381e"
    />
    <circle
      cx={523.047}
      cy={64.097}
      r={10.736}
      transform="rotate(180 523.047 64.097)"
      fill="#6f381e"
    />
    <circle
      r={12.227}
      transform="matrix(-1 0 0 1 359.551 453.936)"
      fill="#6f381e"
    />
    <circle
      r={5.706}
      transform="matrix(-1 0 0 1 732.835 327.866)"
      fill="#6f381e"
    />
    <circle
      r={7.336}
      transform="matrix(-1 0 0 1 585.745 512.368)"
      fill="#E1E4E5"
    />
    <circle
      r={10.596}
      transform="matrix(-1 0 0 1 204.887 431.314)"
      fill="#E1E4E5"
    />
    <circle
      r={8.065}
      transform="matrix(-1 0 0 1 647.064 486.657)"
      fill="#E1E4E5"
    />
    <circle
      r={8.966}
      transform="matrix(-1 0 0 1 677.979 170.461)"
      fill="#E1E4E5"
    />
    <circle
      r={8.051}
      transform="scale(1 -1) rotate(-75 -92.296 -277.22)"
      fill="#E1E4E5"
    />
    <circle
      r={3.351}
      transform="matrix(-1 0 0 1 367.112 134.918)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.239}
      ry={6.591}
      transform="matrix(-1 0 0 1 702.319 454.338)"
      fill="#E1E4E5"
    />
    <circle
      r={5.829}
      transform="scale(1 -1) rotate(-75 177.277 -408.274)"
      fill="#E1E4E5"
    />
    <path
      d="M439.511 39.415a26.65 26.65 0 0 0-1.748.377c-.192.048-.383.091-.573.144-.201.056-.4.115-.599.173a18.762 18.762 0 0 0-1.181.379 33.014 33.014 0 0 0-1.175.439 27.77 27.77 0 0 0-.676.284c-.162.07-.325.14-.488.215-.253.116-.505.239-.756.363-.132.067-.267.128-.397.196a28.18 28.18 0 0 0-1.14.622l-172.782 99.756a26.985 26.985 0 0 0-3.392 2.317c-.35.282-.696.572-1.028.867-8.695 7.712-11.512 20.36-6.654 31.162.374.832.794 1.652 1.259 2.458L414.593 467.4l37.966 65.759c5.836 10.108 17.21 15.016 28.053 13.091.049-.008.096-.018.143-.029a26.869 26.869 0 0 0 1.601-.348c.192-.048.383-.092.575-.146.201-.056.4-.115.6-.173.201-.06.406-.122.609-.186.191-.06.38-.126.571-.193a31.379 31.379 0 0 0 1.173-.438c.224-.089.449-.186.675-.283.163-.071.325-.141.489-.216.253-.116.505-.238.756-.363.132-.066.266-.127.397-.196.382-.197.763-.403 1.14-.621l172.784-99.757a27.09 27.09 0 0 0 2.314-1.496c10.321-7.446 13.993-21.22 8.761-32.855a27.533 27.533 0 0 0-1.259-2.458L505.532 118.264l-37.966-65.76c-5.841-10.104-17.214-15.012-28.055-13.089z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.407}
    />
    <path
      d="M564.747 474.158c7.418-4.283 9.96-13.769 5.677-21.187-4.283-7.417-13.768-9.959-21.186-5.676-7.418 4.282-9.959 13.768-5.677 21.186 4.283 7.418 13.768 9.959 21.186 5.677z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.407}
    />
    <rect
      x={334.106}
      y={123.787}
      width={50.405}
      height={2.585}
      rx={1.292}
      transform="rotate(-30 334.106 123.787)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={2.585}
    />
    <rect
      x={272.165}
      y={181.935}
      width={215.837}
      height={342.496}
      rx={22.033}
      transform="rotate(-30 272.165 181.935)"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4.407}
    />
    <path
      d="m387.673 165.142-61.704 35.625m108.704 20.375-61.704 35.625m-29.188-25.148 41.136-23.75m5.864 79.75 41.136-23.75"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m232.503 264.744-13.749 7.397c-2.678 1.442-5.807-.885-5.295-3.941l2.624-15.68-11.124-11.095c-2.166-2.163-.972-5.932 2.02-6.378l15.371-2.288 6.87-14.269a3.607 3.607 0 0 1 6.542 0l6.871 14.269 15.379 2.295c2.991.447 4.185 4.216 2.02 6.379l-11.125 11.095 2.624 15.679c.513 3.056-2.616 5.384-5.294 3.942l-13.749-7.397h.015v-.008zm452.769 112.137-8.461 4.496c-1.648.877-3.574-.538-3.258-2.395l1.615-9.531-6.846-6.744c-1.333-1.315-.598-3.606 1.243-3.877l9.459-1.391 4.228-8.673c.824-1.691 3.202-1.691 4.026 0l4.228 8.673 9.464 1.395c1.841.272 2.575 2.563 1.243 3.877l-6.846 6.745 1.615 9.53c.315 1.858-1.61 3.272-3.258 2.396l-8.461-4.496h.009v-.005zm-418.733-80.058c-7.189 0-12.01 6.771-12.01 13.076 0 12.799 20.015 23.278 20.38 23.278.364 0 20.38-10.479 20.38-23.278 0-6.305-4.821-13.076-12.011-13.076-4.11 0-6.809 2.057-8.369 3.888-1.56-1.831-4.26-3.888-8.37-3.888z"
      fill="#6f381e"
    />
    <ellipse
      rx={9.364}
      ry={8.813}
      transform="matrix(-1 0 0 1 316.771 372.836)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M609.255 210.333v-60.495c.002-10.411-6.552-19.705-16.384-23.235l-37.8-13.555a59.698 59.698 0 0 0-40.303 0l-37.85 13.58c-9.824 3.527-16.376 12.808-16.384 23.21v60.495c0 31.433 44.145 54.692 64.446 63.754a24.17 24.17 0 0 0 19.829 0c20.301-9.062 64.446-32.371 64.446-63.754z"
      fill="#6f381e"
    />
    <path
      d="m543.768 151.232 7.471 11.722c1.179 1.844 3.801 3.688 5.767 4.214l13.369 3.425c8.257 2.107 10.485 9.219 5.111 15.804l-8.781 10.668c-1.311 1.713-2.359 4.742-2.228 6.849l.786 13.829c.524 8.561-5.505 12.907-13.369 9.746l-12.844-5.136c-1.966-.79-5.243-.79-7.209 0l-12.845 5.136c-7.864 3.161-13.893-1.317-13.369-9.746l.787-13.829c.131-2.107-.918-5.268-2.228-6.849l-8.782-10.668c-5.374-6.585-3.146-13.697 5.112-15.804l13.369-3.425c2.097-.526 4.718-2.502 5.767-4.214l7.47-11.722c4.719-7.112 12.059-7.112 16.646 0z"
      fill="#fff"
    />
    <path
      d="M338.533 436.153c11.224-49.209 84.32-49.152 95.487.057 6.551 28.866-11.452 53.3-27.233 68.415-11.452 11.024-29.569 11.024-41.078 0-15.724-15.115-33.727-39.606-27.176-68.472z"
      fill="#6f381e"
    />
    <path
      d="m371.443 454.003 11.968 12.175 23.422-23.748"
      stroke="#fff"
      strokeWidth={10.237}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={471.628}
      cy={337.66}
      r={53.724}
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={0.668}
    />
    <path
      d="M488.793 337.06c.89.514.89 1.798 0 2.312l-24.64 14.226a1.335 1.335 0 0 1-2.003-1.156V323.99a1.335 1.335 0 0 1 2.003-1.156l24.64 14.226z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={538.633}
        y1={288.886}
        x2={601.399}
        y2={63.148}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={652.113}
        y1={302}
        x2={770.446}
        y2={208.398}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={334.559}
        y1={248.952}
        x2={101.133}
        y2={32.068}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg480);
const Memo = memo(ForwardRef);
export default Memo;