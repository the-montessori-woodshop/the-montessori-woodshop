import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg136 = (
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
      x={193.66}
      y={129.359}
      width={130.277}
      height={130.277}
      rx={20}
      fill="#6f381e"
    />
    <rect
      x={561.88}
      y={383.453}
      width={124.893}
      height={124.893}
      rx={20}
      fill="#6f381e"
    />
    <circle cx={327.167} cy={448.053} r={64.6} fill="#F8AE9D" />
    <circle cx={779.905} cy={302.164} r={39.298} fill="#F8AE9D" />
    <circle cx={596.466} cy={199.684} r={59.989} fill="#F8AE9D" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M188.576 456.257c.255-.247.508-.497.76-.748 25.95-25.951 25.95-68.025 0-93.976-25.951-25.95-68.025-25.95-93.976 0a68.59 68.59 0 0 0-.747.76l93.963 93.964z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M484.032 252.079c.016-.58.024-1.162.024-1.747 0-34.702-28.131-62.833-62.833-62.833-34.701 0-62.833 28.131-62.833 62.833 0 .585.008 1.167.024 1.747h125.618zm22.417 256.191c.422-.399.84-.805 1.253-1.218 24.538-24.538 24.538-64.322 0-88.86-24.538-24.538-64.322-24.538-88.86 0-.413.413-.819.831-1.218 1.253l88.825 88.825z"
      fill="#2D2019"
    />
    <path
      d="M112.823 218.649c3.849-6.666 13.472-6.666 17.321 0l37.657 65.225c3.849 6.667-.962 15-8.66 15H83.826c-7.698 0-12.51-8.333-8.66-15l37.657-65.225z"
      fill="#F8AE9D"
    />
    <path
      d="M523.265 106.026c7.698 0 12.51 8.333 8.661 15l-29.706 51.45c-3.849 6.667-13.471 6.667-17.32 0l-29.705-51.45c-3.849-6.667.962-15 8.66-15h59.41zm269.583 275.342c7.698 0 12.509 8.333 8.66 15l-37.657 65.225c-3.849 6.666-13.472 6.666-17.321 0l-37.658-65.225c-3.849-6.667.963-15 8.661-15h75.315z"
      fill="#E1E4E5"
    />
    <path
      d="M690.9 239.837c-7.698 0-12.509-8.333-8.66-15l39.384-68.214c3.849-6.667 13.471-6.667 17.32 0l39.384 68.214c3.849 6.667-.962 15-8.66 15H690.9z"
      fill="#2D2019"
    />
    <rect
      x={217.347}
      y={291.936}
      width={495.267}
      height={77.52}
      rx={38.76}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M274.826 316.876c5.021 5.021 5.021 13.162 0 18.183-5.021 5.021-13.162 5.021-18.183 0-5.022-5.021-5.022-13.162 0-18.183 5.021-5.022 13.162-5.022 18.183 0m-.093 18.256 12.597 12.769"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M87.933 474.718h4.445c1.075 0 1.94.874 1.94 1.94v4.444c0 1.075-.874 1.94-1.94 1.94h-4.445a1.947 1.947 0 0 1-1.94-1.94v-4.444a1.936 1.936 0 0 1 1.94-1.94zm15.41 0h4.444c1.066 0 1.94.874 1.94 1.94v4.444c0 1.075-.874 1.94-1.94 1.94h-4.444a1.947 1.947 0 0 1-1.94-1.94v-4.444c0-1.066.874-1.94 1.94-1.94zm15.42 0h4.444c1.066 0 1.94.874 1.94 1.94v4.444c0 1.075-.874 1.94-1.94 1.94h-4.444a1.947 1.947 0 0 1-1.94-1.94v-4.444a1.935 1.935 0 0 1 1.94-1.94zm15.409 0h4.445c1.065 0 1.94.874 1.94 1.94v4.444c0 1.075-.875 1.94-1.94 1.94h-4.445a1.95 1.95 0 0 1-1.949-1.94v-4.444a1.961 1.961 0 0 1 1.949-1.94zm15.411 0h4.445a1.95 1.95 0 0 1 1.949 1.94v4.444c0 1.075-.875 1.94-1.949 1.94h-4.445a1.947 1.947 0 0 1-1.94-1.94v-4.444c0-1.066.875-1.94 1.94-1.94zm-45.675 16.804h4.445c1.065 0 1.94.874 1.94 1.939v4.454c0 1.066-.875 1.94-1.94 1.94h-4.445a1.941 1.941 0 0 1-1.94-1.94v-4.444a1.937 1.937 0 0 1 1.94-1.949zm15.41 0h4.444c1.066 0 1.94.874 1.94 1.939v4.454c0 1.066-.874 1.94-1.94 1.94h-4.444a1.947 1.947 0 0 1-1.94-1.94v-4.444a1.937 1.937 0 0 1 1.94-1.949zm15.41 0h4.445c1.075 0 1.949.874 1.949 1.939v4.454c0 1.066-.874 1.94-1.949 1.94h-4.445a1.948 1.948 0 0 1-1.94-1.94v-4.444a1.95 1.95 0 0 1 1.94-1.949zm-15.965-34.856h4.444c1.066 0 1.94.874 1.94 1.94v4.445c0 1.074-.874 1.94-1.94 1.94h-4.444a1.948 1.948 0 0 1-1.94-1.94v-4.445a1.935 1.935 0 0 1 1.94-1.94zm15.409 0h4.445c1.065 0 1.94.874 1.94 1.94v4.445c0 1.074-.875 1.94-1.94 1.94h-4.445a1.95 1.95 0 0 1-1.949-1.94v-4.445a1.961 1.961 0 0 1 1.949-1.94zm234.175-310.503h3.077c.744 0 1.343.606 1.343 1.343v3.077c0 .744-.606 1.343-1.343 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077a1.34 1.34 0 0 1 1.343-1.343zm10.668 0h3.077a1.35 1.35 0 0 1 1.343 1.343v3.077c0 .744-.606 1.343-1.343 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077c0-.737.605-1.343 1.343-1.343zm10.675 0h3.077c.738 0 1.343.606 1.343 1.343v3.077c0 .744-.605 1.343-1.343 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077a1.34 1.34 0 0 1 1.343-1.343zm10.668 0h3.077c.738 0 1.343.606 1.343 1.343v3.077c0 .744-.605 1.343-1.343 1.343h-3.077a1.35 1.35 0 0 1-1.349-1.343v-3.077a1.358 1.358 0 0 1 1.349-1.343zm10.669 0h3.077c.744 0 1.35.605 1.35 1.343v3.077c0 .744-.606 1.343-1.35 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077c0-.738.605-1.343 1.343-1.343zm-31.621 11.634h3.077c.738 0 1.343.605 1.343 1.343v3.083c0 .738-.605 1.343-1.343 1.343h-3.077a1.344 1.344 0 0 1-1.343-1.343v-3.077a1.341 1.341 0 0 1 1.343-1.349zm10.668 0h3.077c.738 0 1.343.605 1.343 1.343v3.083c0 .738-.605 1.343-1.343 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077a1.341 1.341 0 0 1 1.343-1.349zm10.669 0h3.077c.744 0 1.35.605 1.35 1.343v3.083a1.35 1.35 0 0 1-1.35 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077a1.35 1.35 0 0 1 1.343-1.349zm-11.053-24.131h3.077c.738 0 1.343.605 1.343 1.343v3.077c0 .744-.605 1.343-1.343 1.343h-3.077a1.348 1.348 0 0 1-1.343-1.343v-3.077a1.34 1.34 0 0 1 1.343-1.343zm10.668 0h3.077c.738 0 1.343.605 1.343 1.343v3.077c0 .744-.605 1.343-1.343 1.343h-3.077a1.35 1.35 0 0 1-1.349-1.343v-3.077a1.357 1.357 0 0 1 1.349-1.343z"
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg136);
const Memo = memo(ForwardRef);
export default Memo;
