import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg499 = (
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
      d="M389 379H181c-83.2 0-104-17.444-104-87.222V152.222C77 82.444 97.8 65 181 65h208c83.2 0 104 17.444 104 87.222v139.556C493 361.556 472.2 379 389 379z"
      fill="#6f381e"
    />
    <path
      d="M326.341 157.634h103.892m-83.114 60.371h83.113m-41.556 83.114h41.557"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M212.058 218.209c20.771 0 37.609-16.838 37.609-37.608 0-20.771-16.838-37.609-37.609-37.609s-37.609 16.838-37.609 37.609c0 20.77 16.838 37.608 37.609 37.608z"
      fill="#fff"
    />
    <path
      d="M284.784 307.971c-2.909-30.129-26.804-53.816-56.933-56.517-10.389-1.039-20.986-1.039-31.583 0-30.128 2.908-54.024 26.388-56.933 56.517"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M567.5 534h-151c-60.4 0-75.5-14.389-75.5-71.944V346.944C341 289.389 356.1 275 416.5 275h151c60.4 0 75.5 14.389 75.5 71.944v115.112C643 519.611 627.9 534 567.5 534z"
      fill="#6f381e"
    />
    <path
      d="M527 374h76m-76 47h60m-45 47h30"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M439.335 401.528c15.103 0 27.346-12.243 27.346-27.346s-12.243-27.346-27.346-27.346c-15.102 0-27.346 12.243-27.346 27.346s12.244 27.346 27.346 27.346z"
      fill="#fff"
    />
    <path
      d="M492.215 470.109c-2.115-21.907-19.489-39.13-41.396-41.094a116.549 116.549 0 0 0-22.965 0c-21.907 2.115-39.282 19.187-41.397 41.094"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M760.195 538.797s-28.787-38.733-51.977-48.503c-22.946-9.665-86.78-22.646-128.089-54.888a2.102 2.102 0 0 1-.595-2.617c1.644-3.176 7.066-9.422 23.68-4.222 21.616 6.804 38.301 11.584 38.301 11.584s-49.389-84.408-61.072-108.276c-2.308-4.71-3.637-8.758-4.267-12.282-1.959-10.992 12.942-16.401 18.713-6.84l33.789 55.935s-.315-7.432 5.632-10.398c5.631-2.791 16.579 2.512 21.371 11.585 0 0 .35-8.375 8.884-9.84 8.535-1.466 16.895 7.258 20.078 12.317 0 0-1.399-8.06 4.442-10.887 5.841-2.826 17.349 4.537 20.077 7.852 2.729 3.314 30.186 26.833 52.992 78.232l61.316 38.628s2.729 27.252-63.275 52.62z"
      fill="#F8AE9D"
    />
    <path
      d="M580.671 69.66a30 30 0 0 1 30 0l41.594 24.015a30 30 0 0 1 15 25.981v48.029a30 30 0 0 1-15 25.981l-41.594 24.015a30 30 0 0 1-30 0l-41.595-24.015a30 30 0 0 1-15-25.981v-48.029a30 30 0 0 1 15-25.981l41.595-24.015z"
      fill="#6f381e"
    />
    <path
      d="m621.24 128.227-30.176 29.935-18.106-17.961"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M725.671 190.66a30 30 0 0 1 30 0l41.594 24.015a30 30 0 0 1 15 25.981v48.029a30 30 0 0 1-15 25.981l-41.594 24.015a30 30 0 0 1-30 0l-41.595-24.015a30 30 0 0 1-15-25.981v-48.029a30 30 0 0 1 15-25.981l41.595-24.015z"
      fill="#6f381e"
    />
    <path
      d="m766.24 249.227-30.177 29.935-18.105-17.961"
      stroke="#fff"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M711.711 132.425c15.631 15.433 40.935 15.433 56.566 0a39.12 39.12 0 0 0 0-55.85c-15.631-15.433-40.935-15.433-56.566 0-15.615 15.433-15.615 40.448 0 55.85M793 158l-25-25"
      stroke="#6f381e"
      strokeWidth={24}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg499);
const Memo = memo(ForwardRef);
export default Memo;