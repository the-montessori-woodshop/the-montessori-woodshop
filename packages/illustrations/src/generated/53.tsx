import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg53 = (
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
      d="M241.863 289.31c-12.213 53.041 73.55 180.114 209.587 162.241 63.27-8.315 63.594-40.31 116.353-73.382 31.447-19.711 73.74-31.399 90.783-65.032 14.719-29.03 14.689-62.987 2.135-87.253-28.233-54.571-96.408-100.429-182.435-37.129-86.028 63.299-204.912-36.238-236.423 100.555z"
      fill="url(#a)"
    />
    <path
      d="M503.363 449.822c43.023-35.392 87.537-73.334 135.634-85.008 49.614-12.054 53.69 4.66 50.477 28.636-3.214 23.975-31.278 75.302-98.709 90.716-67.449 15.418-127.66-1.217-87.402-34.344z"
      fill="url(#b)"
    />
    <path
      d="M382.705 489.685h239.493c6.692 0 12.1-5.408 12.1-12.1v-79.763c0-6.692-5.408-12.1-12.1-12.1H382.705c-6.692 0-12.1 5.408-12.1 12.1v79.797c0 6.658 5.408 12.066 12.1 12.066z"
      fill="#6f381e"
    />
    <path
      d="M588.228 425.57H412.984m175.168 27.281h-98.885"
      stroke="#fff"
      strokeWidth={9.492}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M605.103 489.539v-47.047l59.958 47.047h-59.958z" fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M745.426 480.173v4.703c0 2.596-2.08 4.704-4.642 4.704h-55.698c-2.562 0-4.642-2.108-4.642-4.704v-4.779c0-14.232 16.051-23.479 32.491-23.479s32.491 9.252 32.491 23.479m-20.837-64.798c6.436 6.436 6.436 16.871 0 23.307-6.437 6.436-16.872 6.436-23.308 0s-6.436-16.871 0-23.307 16.871-6.436 23.308 0z"
      fill="#6f381e"
    />
    <path
      d="M382.705 207.157h239.493c6.692 0 12.1-5.408 12.1-12.1v-79.764a12.087 12.087 0 0 0-12.1-12.099H382.705c-6.692 0-12.1 5.407-12.1 12.099v79.798c0 6.658 5.408 12.066 12.1 12.066z"
      fill="#6f381e"
    />
    <path
      d="M588.228 143.042H412.984m175.168 27.281h-98.885"
      stroke="#fff"
      strokeWidth={9.492}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M605.103 207.01v-47.047l59.958 47.047h-59.958z" fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M745.426 197.645v4.703c0 2.596-2.08 4.703-4.642 4.703h-55.698c-2.562 0-4.642-2.107-4.642-4.703v-4.779c0-14.232 16.051-23.479 32.491-23.479s32.491 9.251 32.491 23.479m-20.837-64.798c6.436 6.436 6.436 16.871 0 23.307-6.437 6.436-16.872 6.436-23.308 0s-6.436-16.871 0-23.307 16.871-6.436 23.308 0z"
      fill="#6f381e"
    />
    <path
      d="M516.721 348.421H277.228c-6.692 0-12.1-5.408-12.1-12.1v-79.764a12.087 12.087 0 0 1 12.1-12.099h239.493c6.692 0 12.1 5.407 12.1 12.099v79.798c0 6.658-5.408 12.066-12.1 12.066z"
      fill="#6f381e"
    />
    <path
      d="M311.198 284.306h175.244m-175.168 27.281h98.885"
      stroke="#fff"
      strokeWidth={9.492}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M294.322 348.275v-47.047l-59.957 47.047h59.957z" fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M154 338.909v4.703c0 2.596 2.079 4.704 4.642 4.704h55.698c2.562 0 4.642-2.108 4.642-4.704v-4.778c0-14.233-16.051-23.48-32.491-23.48S154 324.606 154 338.834m20.837-64.799c-6.436 6.436-6.436 16.871 0 23.307s16.871 6.436 23.307 0c6.437-6.436 6.437-16.871 0-23.307-6.436-6.436-16.871-6.436-23.307 0z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M624.596 290.257h-3.216a1.405 1.405 0 0 1-1.403-1.404v-3.216c0-.777.632-1.403 1.403-1.403h3.216c.771 0 1.404.632 1.404 1.403v3.216a1.4 1.4 0 0 1-1.404 1.404zm-11.15 0h-3.216a1.409 1.409 0 0 1-1.403-1.404v-3.216c0-.777.632-1.403 1.403-1.403h3.216c.771 0 1.404.632 1.404 1.403v3.216a1.41 1.41 0 0 1-1.404 1.404zm-11.156 0h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.216c0-.777.633-1.403 1.404-1.403h3.216c.771 0 1.403.632 1.403 1.403v3.216a1.4 1.4 0 0 1-1.403 1.404zm-11.15 0h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.216c0-.777.633-1.403 1.404-1.403h3.216c.777 0 1.41.632 1.41 1.403v3.216a1.42 1.42 0 0 1-1.41 1.404zm-11.15 0h-3.216a1.41 1.41 0 0 1-1.41-1.404v-3.216c0-.777.632-1.403 1.41-1.403h3.216c.771 0 1.403.632 1.403 1.403v3.216c0 .771-.632 1.404-1.403 1.404zm33.048-12.158h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.223c0-.771.633-1.403 1.404-1.403h3.216c.777 0 1.403.632 1.403 1.403v3.216a1.402 1.402 0 0 1-1.403 1.411zm-11.15 0h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.223c0-.771.633-1.403 1.404-1.403h3.216c.771 0 1.403.632 1.403 1.403v3.216a1.402 1.402 0 0 1-1.403 1.411zm-11.15 0h-3.216a1.41 1.41 0 0 1-1.41-1.404v-3.223a1.41 1.41 0 0 1 1.41-1.403h3.216c.771 0 1.403.632 1.403 1.403v3.216a1.41 1.41 0 0 1-1.403 1.411zm11.552 25.219h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.215c0-.778.633-1.404 1.404-1.404h3.216c.771 0 1.403.633 1.403 1.404v3.215a1.4 1.4 0 0 1-1.403 1.404zm-11.15 0h-3.216a1.41 1.41 0 0 1-1.404-1.404v-3.215c0-.778.633-1.404 1.404-1.404h3.216c.777 0 1.41.633 1.41 1.404v3.215a1.42 1.42 0 0 1-1.41 1.404z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={311.202}
        y1={632.019}
        x2={660.571}
        y2={-217.425}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={499.797}
        y1={602.896}
        x2={729.683}
        y2={155.622}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg53);
const Memo = memo(ForwardRef);
export default Memo;
