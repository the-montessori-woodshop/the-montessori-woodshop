import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg435 = (
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
    <rect
      x={197}
      y={72}
      width={505.996}
      height={365.442}
      rx={20}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M323.501 514.448h252.998M396.996 476h106"
      stroke="#E1E4E5"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m82.5 159.833 23.5-16.5 104.5-4v46l29.5 11h26.5l5 116-5 48-16.5 6-35 4.5-109-4.5-16-19-10-130.5 2.5-57z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M118.667 127C92.893 127 72 147.893 72 173.667V337c0 25.773 20.893 46.667 46.667 46.667h116.666C261.107 383.667 282 362.773 282 337V192.997a46.671 46.671 0 0 0-13.668-32.999l-19.33-19.33A46.671 46.671 0 0 0 216.003 127h-97.336zm133.166 49.497a23.335 23.335 0 0 1 5.539 8.836h-22.039c-6.443 0-11.666-5.223-11.666-11.666v-22.039a23.325 23.325 0 0 1 8.836 5.54l19.33 19.329z"
      fill="#6f381e"
    />
    <path
      d="M139 270.125 161.636 293 222 232"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M391.667 127C365.893 127 345 147.893 345 173.667V337c0 25.773 20.893 46.667 46.667 46.667h116.666C534.107 383.667 555 362.773 555 337V192.997a46.671 46.671 0 0 0-13.668-32.999l-19.33-19.33A46.671 46.671 0 0 0 489.003 127h-97.336zm133.166 49.497a23.335 23.335 0 0 1 5.539 8.836h-22.039c-6.443 0-11.666-5.223-11.666-11.666v-22.039a23.325 23.325 0 0 1 8.836 5.54l19.33 19.329z"
      fill="#6f381e"
    />
    <path
      d="M412 270.125 434.636 293 495 232"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M664.667 127C638.893 127 618 147.893 618 173.667V337c0 25.773 20.893 46.667 46.667 46.667h116.666C807.107 383.667 828 362.773 828 337V192.997a46.671 46.671 0 0 0-13.668-32.999l-19.33-19.33A46.671 46.671 0 0 0 762.003 127h-97.336zm133.166 49.497a23.335 23.335 0 0 1 5.539 8.836h-22.039c-6.443 0-11.666-5.223-11.666-11.666v-22.039a23.325 23.325 0 0 1 8.836 5.54l19.33 19.329z"
      fill="#6f381e"
    />
    <path
      d="M685 270.125 707.636 293 768 232"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg435);
const Memo = memo(ForwardRef);
export default Memo;
