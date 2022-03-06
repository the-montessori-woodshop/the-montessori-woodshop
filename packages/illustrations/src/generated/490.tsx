import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg490 = (
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
      d="M633.37 453.215V283.466a13.06 13.06 0 0 0-17.642-12.188l-65.297 24.448a13.05 13.05 0 0 0-8.471 12.249v145.24"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M484.83 293.248h22.852c6.311 0 11.426 5.115 11.426 11.426v22.852h-45.705v-22.852c0-6.311 5.116-11.426 11.427-11.426v0z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M496.256 270.395v22.853m-45.705 159.968V338.954c0-6.311 5.115-11.427 11.426-11.427h68.558c6.31 0 11.426 5.116 11.426 11.427v114.262m-62.839-57.133h34.279m-34.279 0h34.279m-34.279-34.277h34.279m59.029-29.892v80.675m30.472-80.675v80.675"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M277.921 290.71h20.314c5.609 0 10.156 4.547 10.156 10.157v20.313h-40.626v-20.313c0-5.61 4.547-10.157 10.156-10.157z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M288.077 270.395v20.313M247.45 453.217V331.336c0-5.609 4.548-10.156 10.157-10.156h60.94c5.609 0 10.157 4.547 10.157 10.156v30.47m30.47-.001v-71.097a10.158 10.158 0 0 1 13.722-9.507l50.783 19.044a10.158 10.158 0 0 1 6.592 9.517v143.453"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M298.233 453.214v-81.253c0-5.609 4.548-10.157 10.157-10.157h60.94c5.61 0 10.157 4.548 10.157 10.157v81.253M323.625 419.7h30.47m-30.47-27.424h30.47"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M152.882 504.279s61.601-71.859 148.154-72.868c86.947-1.014 156.12 70.408 162.492 74.097l-310.646-1.229z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M364.04 504.279s61.6-71.859 148.154-72.868c86.946-1.014 156.12 70.408 162.492 74.097l-310.646-1.229z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M490.938 504.532s46.905-57.094 112.811-57.896c66.204-.805 118.875 55.941 123.727 58.872l-236.538-.976z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M276.982 503.324v-28.271 28.271z"
      fill="#fff"
    />
    <path d="M276.982 503.324v-28.271" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M294.652 503.323v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M294.652 503.323v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M260.492 503.323v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M260.492 503.323v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M441.441 504.339v-28.271 28.271z"
      fill="#fff"
    />
    <path d="M441.441 504.339v-28.271" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M459.111 504.338v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M459.111 504.338v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M424.951 504.338v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M424.951 504.338v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M645.493 506.369v-28.27 28.27z"
      fill="#fff"
    />
    <path d="M645.493 506.369v-28.27" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M663.163 506.369v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M663.163 506.369v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M629.003 506.369v-20.025 20.025z"
      fill="#fff"
    />
    <path d="M629.003 506.369v-20.025" stroke="#E1E4E5" strokeWidth={11} />
    <circle cx={453.825} cy={150.037} r={56.284} fill="#6f381e" />
    <path
      clipRule="evenodd"
      d="M352.323 156.674c11.885 0 6.324-18.847-8.733-14.345-.834-26.169-43.488-45.316-61.126-10.02-4.987-3.946-16.185 3.507-13.705 10.02-5.539.472-9.897 1.113-13.287 1.961-7.829 1.96-6.279 12.295 1.79 12.223l95.061.161zm422.123 74.608c17.66 0 9.397-27.833-12.976-21.185-1.239-38.646-64.618-66.922-90.825-14.798-7.41-5.827-24.049 5.18-20.364 14.798-8.231.697-14.706 1.643-19.744 2.897-11.632 2.894-9.329 18.157 2.661 18.05l141.248.238zM121.249 176.87h63.967c5.719 0 8.183-7.461 3.503-10.771a14.063 14.063 0 0 0-.198-.14c-6.664-4.615-15.409-4.195-15.409-4.195s-1.248-24.969-24.777-24.969c-21.272 0-29.755 21.038-32.815 32.628-.994 3.766 1.862 7.447 5.729 7.447zm444.65-9.54h63.967c5.719 0 8.183-7.462 3.503-10.771a14.122 14.122 0 0 0-.198-.141c-6.664-4.614-15.409-4.195-15.409-4.195s-1.248-24.969-24.777-24.969c-21.273 0-29.756 21.038-32.815 32.629-.994 3.765 1.862 7.447 5.729 7.447zm-160.986 67.266h-52.246c-4.671 0-6.684-5.999-2.861-8.659a6.62 6.62 0 0 1 .162-.113c5.442-3.71 12.585-3.373 12.585-3.373s1.019-20.073 20.237-20.073c17.375 0 24.303 16.913 26.802 26.231.812 3.027-1.521 5.987-4.679 5.987zm177.05 7.818h-85.811c-6.947 0-9.944-8.793-4.257-12.695l.241-.164c8.096-5.44 18.721-4.946 18.721-4.946s1.518-29.426 30.105-29.426c14.133 0 25.556 23.616 25.556 23.616s19.226 0 22.408 14.837c.962 4.496-2.263 8.778-6.963 8.778zm-412.606-2.445h134.39c12.615 0 12.036-10.392 7.916-14.013-4.224-3.712-12.569-2.206-12.569-2.206s-2.484-6.991-10.662-10.394c-7.233-3.01-14.811-1.577-14.811-1.577s0-4.798-4.632-8.771c-4.632-3.973-10.807-3.587-10.807-3.587s-4.245-26.454-32.614-26.454c-28.368 0-31.649 24.909-31.649 24.909s-6.368 0-11 4.248-5.21 9.075-5.21 9.075-15.49-2.088-20.071 11.281c-2.73 7.968 2.879 17.489 11.719 17.489z"
      stroke="#E1E4E5"
      strokeWidth={11}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg490);
const Memo = memo(ForwardRef);
export default Memo;
