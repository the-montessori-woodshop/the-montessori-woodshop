import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg72 = (
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
      d="M450 526c196.061 0 355-6.268 355-14s-158.939-14-355-14-355 6.268-355 14 158.939 14 355 14z"
      fill="url(#a)"
    />
    <path
      d="m625.151 212.857-83.703 14.155.235 53.373-52.508-23.842-25.031 42.605-2.07-.847-144.351-57.088-3.858 80.883-89.773 9.687-.564-5.267 85.255-9.17 4.046-83.751 149.104 58.969 25.124-42.792 49.309 22.43-.235-49.658 82.809-13.966-8.987-47.072 5.176-.987 10.022 52.338z"
      fill="#E1E4E5"
    />
    <path
      d="M321.957 227.576c4.846 2.21 6.964 7.9 4.799 12.696-2.211 4.844-7.904 6.96-12.75 4.75-4.847-2.21-6.964-7.9-4.752-12.697a9.554 9.554 0 0 1 12.703-4.749zm-6.634 83.422c4.846 2.21 6.964 7.9 4.752 12.696-2.211 4.844-7.904 6.96-12.75 4.75-4.847-2.21-6.964-7.9-4.753-12.697 2.212-4.796 7.905-6.96 12.751-4.749zm153.291-27.369c4.846 2.21 6.963 7.9 4.752 12.697-2.212 4.843-7.905 6.959-12.704 4.749-4.846-2.21-6.963-7.9-4.752-12.697 2.164-4.843 7.858-6.959 12.704-4.749zm23.995-40.301c4.847 2.21 6.964 7.9 4.8 12.697a9.609 9.609 0 0 1-12.751 4.749c-4.846-2.21-6.964-7.9-4.799-12.696 2.211-4.797 7.904-6.96 12.75-4.75zm49.639-27.508A9.599 9.599 0 0 1 547 228.564c-2.212 4.843-7.905 6.959-12.704 4.749-4.846-2.21-6.963-7.9-4.752-12.697a9.56 9.56 0 0 1 12.704-4.796zm83.797-13.827c4.846 2.21 6.963 7.9 4.752 12.696a9.608 9.608 0 0 1-12.751 4.75 9.599 9.599 0 0 1-4.752-12.744c2.211-4.796 7.904-6.912 12.751-4.702zm-8.893-50.222c4.799 2.211 6.964 7.901 4.799 12.697-2.211 4.844-7.904 6.96-12.75 4.75a9.598 9.598 0 0 1-4.752-12.744c2.164-4.75 7.857-6.913 12.703-4.703zm-389.06 171.264c4.799 2.163 6.963 7.9 4.752 12.696-2.212 4.844-7.905 6.96-12.704 4.75-4.846-2.21-6.963-7.9-4.799-12.697 2.211-4.843 7.904-6.959 12.751-4.749z"
      fill="#6f381e"
    />
    <path
      d="M363.108 498.7V319.143h24.861V498.7h-24.861zm40.405-.355V319.089h28.606v179.256h-28.606zm43.869.354V283.354h26.016v215.345h-26.016zm41.56-.355V377.823h28.606v120.521h-28.606zm43.869 0V253.301h25.595v245.043h-25.595zm40.406.001V319.089h28.606v179.256h-28.606zm-231.629-79.188v79.537l-48.682.521.583-80.058h48.099zm-72.047-41.568V497.49l-48.668.774.592-120.675h48.076z"
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M422.095 439.212h-57.449v61.461h57.449v-61.461zm-75.114 0h-57.449v61.461h57.449v-61.461zm-75.92-30.868h-57.722v92.355h57.722v-92.355zm219.54 21.416h-52.179v70.914h52.179V429.76zm68.364 29.155h-57.401v41.758h57.401v-41.758z"
      fill="#6f381e"
    />
    <path
      d="M598.7 250.421c.52 4.014 1.911 8.854 4.162 10.497 2.553 1.866 3.342 3.846 3.342 3.846l2.595-.8 3.102-.956s.005-.316-.014-.844a22.896 22.896 0 0 0-.167-2.078s-.591-1.271.238-2.508c.828-1.232 1.209-3.349.626-4.827-.581-1.474-.701-4.813-1.25-4.839-1.331-.075-.42 4.682-1.154 5.353-.661.612-1.226.219-1.327.136l-.02-.017c-3.221-2.407-5.604-11.913-7.795-11.209-.817.262-2.562 6.536-2.338 8.246zm130.957 98.786s-2.75 4.759-1.518 7.504c1.228 2.747 5.491 6.408 6.591 7.844 1.095 1.434 4.814 5.223 6.313 2.785 1.497-2.432-1.147-8.901-2.981-11.339-1.832-2.443-2.005-6.635-2.005-6.635l-6.4-.159z"
      fill="#F8AE9D"
    />
    <path
      d="M727.897 355.919s.21 5.243.459 6.643c.251 1.404.498.974 1.457.032.958-.941.947-3.685 1.307-3.866.359-.181-3.223-2.809-3.223-2.809z"
      fill="#F8AE9D"
    />
    <path
      d="M679.791 249.847s-32.08 34.579-42.067 39.997l-25.161-29.7s-4.723.332-7.68 4.314c0 0 9.762 41.889 27.573 47.69 17.811 5.802 54.123-34.984 54.123-34.984l-6.788-27.317zm-29.91 253.472h32.942c1.583-1.866 1-8.754.762-11.006-.05-.455-.083-.716-.083-.716s-11.249-8.686-12.794-2.035a7.718 7.718 0 0 1-.166.615c-1.945 6.221-10.679 9.048-15.718 9.837-3.282.51-4.494 2.155-4.943 3.305z"
      fill="#2D2019"
    />
    <path
      d="M672.059 503.319h32.943c1.582-1.866.999-8.754.762-11.006-.05-.455-.083-.716-.083-.716s-11.249-8.686-12.794-2.035a7.32 7.32 0 0 1-.167.615c-1.945 6.221-10.678 9.048-15.717 9.837-3.282.51-4.494 2.155-4.944 3.305z"
      fill="#2D2019"
    />
    <path
      d="M658.879 355.201s1.575 17.046 3.427 37.533c2.515 27.832 5.542 62.021 5.842 68.497.518 11.246 2.592 29.235 2.592 29.235s4.924 4.274 14.78 2.472c0 0 8.784-25.681 11.292-52.854l.116-1.342c2.335-27.66 5.961-85.907 5.961-85.907l-44.01 2.366z"
      fill="#6f381e"
    />
    <path
      d="M667.813 356.367s2.971 16.877 6.498 37.163c4.794 27.559 10.617 61.415 11.442 67.845 1.43 11.165 4.984 28.95 4.984 28.95s5.356 3.965 15.245 1.589c0 0 6.884-26.083 7.258-53.282l.009-1.343c.159-27.673-.821-85.872-.821-85.872l-44.615 4.95z"
      fill="#6f381e"
    />
    <path
      d="M672.916 256.074c11.32 3.574 30-6.503 30-6.503s-9.528-7.404-8.984-23.693l-8.752 7.055-5.946 4.79s.024 2.826.674 7.776c.173 1.301.486 3.335-.489 4.378-3.791 4.045-6.503 6.197-6.503 6.197z"
      fill="#F8AE9D"
    />
    <path
      d="M675.773 237.457s18.7 3.108 20.456-8.568c1.756-11.676 5.35-19.139-6.514-21.616-11.864-2.477-14.863 1.627-16.395 5.382-1.533 3.754-2.364 23.693 2.453 24.802z"
      fill="#F8AE9D"
    />
    <path
      d="M657.113 361.242c.341.282.737.454 1.191.454 4.253-.058 16.65 2.305 27.139 1.227 8.842-.85 16.673-3.469 25.076-7.235 1.118-.502 3.685-1.874 3.63-3.12-.039-1.368-.173-3.347-.345-5.844-.596-8.678-1.63-23.599-.619-40.817.18-3.206.278-6.385.29-9.517.086-23.336-4.539-43.859-13.84-50.804-.796-.568-5.671 1.815-10.151 4.021-4.139 2.043-7.385 2.258-11.296 1.466l-4.802 3.465c-4.762 4.421-9.979 10.434-12.248 19.558-1.928 7.769-3.061 21.773-3.684 36.287-.282 6.577-.51 13.212-.569 19.503v.223c-.054.624-.054 1.306-.054 1.929-.228 16.164 0 28.976.282 29.204z"
      fill="#2D2019"
    />
    <path
      d="M732.46 351.63c-3.55.482-7.337-.015-7.337-.015s-8.559-32.791-9.731-35.807c-1.173-3.016-28.766-39.529-28.766-39.529l14.118-30.156s28.931 55.345 31.748 63.05c4.655 12.73 4.911 40.686 4.911 40.686s-2.154 1.395-4.943 1.771zm-34.128-126.924c-1.017 2.105-3.97 2.416-3.698.094.309-2.641.306-6.098-1.842-5.456-2.148.643-2.258 2.364-3.14 1.36-.882-1.003-.897-5.236-7.294-5.534-6.397-.294-8.995 1.932-11.966.623-1.781-.783-2.552-2.71-2.884-4.13-.094-.403.199-.965.468-.651.254.297.893.278.711-.067-1.127-2.138-2.812-6.804 1.481-10.281 5.746-4.652 11.602-1.607 14.926-1.407 7.325.443 12.056.882 14.447 5.695 1.982 3.993 1.642 13.857-1.209 19.754z"
      fill="#2D2019"
    />
    <path
      d="M440.429 232h.138c.818 10.975 9.433 11.143 9.433 11.143s-9.5.176-9.5 12.857c0-12.681-9.5-12.857-9.5-12.857s8.612-.168 9.429-11.143zm-92.474 41h.087c.517 7.774 5.958 7.893 5.958 7.893s-6 .125-6 9.107c0-8.982-6-9.107-6-9.107s5.439-.119 5.955-7.893zm-23.03 86h.146c.86 11.432 9.929 11.608 9.929 11.608s-10 .183-10 13.392c0-13.209-10-13.392-10-13.392s9.065-.176 9.925-11.608zm-139 19h.146c.86 11.432 9.929 11.608 9.929 11.608s-10 .183-10 13.392c0-13.209-10-13.392-10-13.392s9.065-.176 9.925-11.608zm85.504-101h.138c.818 11.889 9.433 12.072 9.433 12.072s-9.5.19-9.5 13.928c0-13.738-9.5-13.928-9.5-13.928s8.612-.183 9.429-12.072zm316.496-101h.146c.86 11.432 9.929 11.608 9.929 11.608s-10 .183-10 13.392c0-13.209-10-13.392-10-13.392s9.065-.176 9.925-11.608z"
      fill="#E1E4E5"
    />
    <rect
      x={195.494}
      y={462.069}
      width={34.425}
      height={4.011}
      rx={2.005}
      transform="rotate(135 195.494 462.069)"
      fill="#E1E4E5"
    />
    <rect
      x={182.295}
      y={461.975}
      width={12.782}
      height={4.011}
      rx={2.005}
      transform="rotate(135 182.295 461.975)"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={465.139}
        y1={541.698}
        x2={465.105}
        y2={467.531}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg72);
const Memo = memo(ForwardRef);
export default Memo;
