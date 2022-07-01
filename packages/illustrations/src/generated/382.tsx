import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg382 = (
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
    <circle
      cx={744.215}
      cy={196.874}
      r={14.418}
      transform="rotate(180 744.215 196.874)"
      fill="#6f381e"
    />
    <circle
      cx={200.303}
      cy={377.918}
      r={13.443}
      transform="rotate(180 200.303 377.918)"
      fill="#6f381e"
    />
    <circle
      r={13.517}
      transform="matrix(-1 0 0 1 154.611 198.771)"
      fill="#6f381e"
    />
    <circle
      r={6.308}
      transform="matrix(-1 0 0 1 750.666 314.617)"
      fill="#6f381e"
    />
    <circle
      r={8.11}
      transform="matrix(-1 0 0 1 596.451 545.243)"
      fill="#E1E4E5"
    />
    <circle
      r={11.715}
      transform="matrix(-1 0 0 1 198.573 271.139)"
      fill="#E1E4E5"
    />
    <circle
      r={8.916}
      transform="matrix(-1 0 0 1 287.67 166.991)"
      fill="#E1E4E5"
    />
    <circle
      r={9.913}
      transform="matrix(-1 0 0 1 204.052 524.163)"
      fill="#E1E4E5"
    />
    <circle
      r={8.901}
      transform="scale(1 -1) rotate(-75 -165.564 -452.25)"
      fill="#E1E4E5"
    />
    <circle
      r={11.842}
      transform="matrix(-1 0 0 1 405.072 92.192)"
      fill="#E1E4E5"
    />
    <circle
      r={15.495}
      transform="scale(1 -1) rotate(-75 251.15 -416.646)"
      fill="#E1E4E5"
    />
    <path
      d="M649.34 226.14h.238c1.411 19.994 16.28 20.301 16.28 20.301s-16.396.32-16.396 23.423c0-23.103-16.396-23.423-16.396-23.423s14.863-.307 16.274-20.301z"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="M124.071 418.053h-16.425v-16.425c0-15.553 12.597-28.149 28.15-28.149h16.425v16.425c0 15.538-12.611 28.149-28.15 28.149v0z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M107.646 514.228c-30.359 0-54.961-24.603-54.961-54.962m0-.002c0-23.983 10.992-41.224 32.977-41.224m21.984 96.188c30.359 0 54.962-24.603 54.962-54.962m0-.002c0-23.983-10.992-41.224-32.977-41.224m0 .012c-10.992 0-17.227 3.519-21.985 3.519-4.757 0-10.992-3.519-21.984-3.519"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M808.463 418.053h-16.425v-16.425c0-15.553 12.597-28.149 28.149-28.149h16.425v16.425c0 15.538-12.61 28.149-28.149 28.149v0z"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M792.038 514.228c-30.359 0-54.962-24.603-54.962-54.962m0-.002c0-23.983 10.993-41.224 32.977-41.224m21.985 96.188c30.359 0 54.962-24.603 54.962-54.962m0-.002c0-23.983-10.993-41.224-32.977-41.224m0 .012c-10.993 0-17.228 3.519-21.985 3.519-4.757 0-10.992-3.519-21.985-3.519m-456.964 44.642h-24.05c-26.575 0-48.099-21.524-48.099-48.099v-58.994c0-27.729 22.486-50.216 50.216-50.216h21.933"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M505.486 151.635h-96.198c-53.126 0-96.199 43.073-96.199 96.199v216.447c0 26.575 21.524 48.099 48.099 48.099h192.398c26.574 0 48.099-21.524 48.099-48.099V247.834c0-53.126-43.073-96.199-96.199-96.199z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M601.685 462.693h24.049c26.575 0 48.1-21.524 48.1-48.099v-60.125c0-26.574-21.525-48.099-48.1-48.099h-24.049"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M505.486 437.682h-96.198c-13.276 0-24.05-10.775-24.05-24.05v-48.099c0-13.276 10.774-24.05 24.05-24.05h96.198c13.276 0 24.05 10.774 24.05 24.05v48.099c0 13.299-10.774 24.05-24.05 24.05z"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M529.536 151.634v-24.05c0-26.575-21.524-48.1-48.099-48.1h-48.1c-26.575 0-48.099 21.525-48.099 48.1v24.05"
      stroke="#6f381e"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M481.436 247.834h-48.099"
      stroke="#fff"
      strokeWidth={31}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg382);
const Memo = memo(ForwardRef);
export default Memo;
