import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg431 = (
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
      d="M682.882 329.106V186.832c0-88.812-20.715-111.07-104.017-111.07H412.261c-83.302 0-104.017 22.258-104.017 111.07v248.142c0 58.62 32.175 72.504 71.182 30.632l.22-.22c18.07-19.173 45.617-17.63 61.264 3.305h90.442"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M632.196 503.29c38.948 0 70.52-31.572 70.52-70.52 0-38.947-31.572-70.52-70.52-70.52-38.947 0-70.52 31.573-70.52 70.52 0 38.948 31.573 70.52 70.52 70.52zm83.743 13.223-22.038-22.038M439.412 185.95h176.3m-176.3 116.358h176.3m-176.3-58.179h132.225M439.412 362.427H512.4"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      r={104.724}
      transform="matrix(-1 0 0 1 298.726 243.955)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M334.838 280.594v5.153a5.157 5.157 0 0 1-5.159 5.153h-61.906a5.158 5.158 0 0 1-5.159-5.153v-5.235c0-15.593 17.84-25.724 36.112-25.724 18.273 0 36.112 10.136 36.112 25.724m-23.344-70.992c7.051 7.051 7.051 18.483 0 25.534-7.052 7.052-18.484 7.052-25.535 0-7.052-7.051-7.052-18.483 0-25.534 7.051-7.052 18.483-7.052 25.535 0z"
      fill="#fff"
    />
    <path
      d="M224.659 109.461c17.294 8.579 40.248-2.452 40.248-2.452s-5.101-24.935-22.405-33.502c-17.295-8.58-40.239 2.44-40.239 2.44s5.101 24.935 22.396 33.514z"
      fill="url(#a)"
    />
    <circle
      r={11.745}
      transform="matrix(1 0 0 -1 165.55 150.975)"
      fill="#6f381e"
    />
    <circle
      r={22.089}
      transform="matrix(1 0 0 -1 732.298 106.313)"
      fill="#6f381e"
    />
    <circle cx={740.989} cy={319.16} r={11.739} fill="#6f381e" />
    <circle cx={143.953} cy={248.91} r={16.593} fill="#E1E4E5" />
    <circle cx={413.725} cy={523.971} r={20.857} fill="#E1E4E5" />
    <circle
      cx={752.711}
      cy={452.53}
      r={16.566}
      transform="rotate(105 752.711 452.53)"
      fill="#E1E4E5"
    />
    <ellipse cx={177.104} cy={366.468} rx={16.952} ry={13.562} fill="#E1E4E5" />
    <circle
      cx={221.058}
      cy={488.917}
      r={27.057}
      transform="rotate(90 221.058 488.917)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={291.071}
        y1={136.221}
        x2={148.426}
        y2={23.389}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg431);
const Memo = memo(ForwardRef);
export default Memo;
