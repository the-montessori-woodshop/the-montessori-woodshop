import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg60 = (
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
    <rect x={139} y={482} width={623} height={11} rx={5.5} fill="#E1E4E5" />
    <path
      d="M418.257 482.381s-55.276-70.822-78.378-81.675c-24.621-11.564-3.274 28.505-3.274 28.505s-52.642-51.611-65.008-38.725c-12.366 12.886.839 24.946.839 24.946s-44.08-8.176-50.511 8.308c-9.876 25.326 62.628 37.92 62.628 37.92s-34.734-7.608-27.784 8.072c10.478 23.64 161.488 12.649 161.488 12.649z"
      fill="#E1E4E5"
    />
    <path
      d="M505.691 451.236s-18.857-86.259-38.793-98.281c-19.937-12.026-42.501 12.339-42.501 12.339s-31.395-22.28-46.201-17.442c-14.806 4.837-1.677 21.504-1.677 21.504s-50.55-19.933-56.15-10.044c-10.418 18.428 43.223 42.885 43.223 42.885s-23.572-5.01-23.398 7.528c.26 18.91 54.217 17.033 54.217 17.033s-20.775 2.557-14.604 13.834c11.072 20.24 125.884 10.644 125.884 10.644zM180.542 126.667s20.095-5.393 27.023 40.677c6.928 46.069 6.977 71.304 6.977 71.304s2.545 10.017 10.015 6.51c7.471-3.508 20.33-16.209 29.049-10.246 9.04 6.188 8.604 18.432 1.237 34.187-7.367 15.755-22.236 50.836-23.571 54.024-1.315 3.113-1.043 8.455 4.428 6.876 5.472-1.579 40.57-21.543 49.039-4.329 8.488 17.219-19.253 57.725-22.196 62.205-2.944 4.48-2.694 6.911-.765 8.91 1.928 1.999 13.1-5.825 23.308-11.103 10.209-5.278 22.983-9.588 27.043.755 4.06 10.344-4.976 44.663-55.14 88.557l-24.575 18.817-28.904-11.451c-60.357-28.273-78.554-58.751-77.514-69.811 1.041-11.06 14.502-10.458 25.781-8.217 11.279 2.241 24.179 6.659 25.478 4.202 1.299-2.456.88-4.852-3.192-8.347-4.072-3.495-41.943-34.718-38.559-53.624 3.378-18.887 42.633-9.431 48.327-9.448 5.689.002 4.457-5.196 2.338-7.827-2.166-2.684-26.189-32.279-37.623-45.38-11.44-13.081-15.248-24.739-8.276-33.188 6.713-8.158 22.602.507 30.747 1.808 8.146 1.301 7.813-9.045 7.813-9.045s-6.961-24.263-13.056-70.449c-6.095-46.187 15.215-46.467 15.215-46.467"
      fill="#E1E4E5"
    />
    <path
      d="M232.927 487.338c-4.597-33.906-11.353-80.691-19.008-132.344-7.642-51.629-14.506-98.383-19.311-132.264-2.382-16.905-4.301-30.601-5.638-40.115-.663-4.705-1.183-8.37-1.544-10.911-.177-1.209-.325-2.151-.422-2.837-.111-.631-.181-.97-.181-.97s.014.324.078.982c.078.682.184 1.632.318 2.85.319 2.549.778 6.218 1.356 10.94 1.182 9.493 2.993 23.22 5.304 40.166 4.597 33.906 11.358 80.672 18.995 132.32 7.636 51.648 14.519 98.407 19.305 132.283"
      fill="#fff"
    />
    <path
      d="M236.327 253.42c-.07-.039-.554.573-1.428 1.741-.869 1.149-2.066 2.852-3.515 4.968-2.902 4.251-6.762 10.208-10.897 16.893-4.025 6.574-7.683 12.525-10.497 17.12-1.264 2.025-2.325 3.744-3.208 5.17-.767 1.217-1.154 1.915-1.085 1.954.07.038.573-.568 1.442-1.718.85-1.154 2.048-2.856 3.483-4.996 2.869-4.28 6.646-10.299 10.757-16.971l10.613-17.029c1.264-2.025 2.344-3.739 3.227-5.165.772-1.236 1.159-1.933 1.108-1.967zm-33.491 47.46c.163-.237-11.78-8.746-26.689-18.971-14.905-10.244-27.137-18.35-27.3-18.113-.164.237 11.785 8.727 26.689 18.971 14.923 10.249 27.136 18.35 27.3 18.113zm15.309 78.786c.02-.075-.745-.36-2.117-.848-1.601-.529-3.571-1.177-5.886-1.958-4.967-1.651-11.837-3.973-19.314-6.797-7.481-2.806-14.17-5.58-19.013-7.619-2.251-.944-4.157-1.755-5.724-2.415-1.351-.563-2.121-.829-2.155-.778-.039.07.678.462 1.976 1.15 1.303.67 3.211 1.622 5.6 2.723 4.756 2.216 11.433 5.107 18.934 7.918 7.495 2.83 14.419 5.026 19.468 6.519 2.527.737 4.583 1.288 5.99 1.645 1.425.362 2.221.535 2.241.46zm39.73-36.273c-.046-.052-.645.388-1.715 1.243a307.68 307.68 0 0 0-4.395 3.691 1040.356 1040.356 0 0 0-14.258 12.466c-5.523 4.911-10.495 9.409-14.061 12.7a204.277 204.277 0 0 0-4.183 3.948c-.973.941-1.485 1.505-1.439 1.557.046.053.645-.388 1.716-1.243 1.051-.86 2.551-2.121 4.394-3.691 3.691-3.157 8.736-7.555 14.258-12.466 5.523-4.911 10.495-9.408 14.042-12.705a199.407 199.407 0 0 0 4.183-3.947c.992-.936 1.523-1.495 1.458-1.553zm22.35 67.831c-.046-.052-.82.522-2.177 1.621-1.494 1.242-3.398 2.815-5.651 4.716a1659.9 1659.9 0 0 0-18.389 15.847c-7.141 6.24-13.574 11.928-18.192 16.08a2078.05 2078.05 0 0 0-5.439 4.973c-1.259 1.185-1.947 1.882-1.901 1.935.046.052.821-.522 2.177-1.621 1.495-1.242 3.399-2.815 5.651-4.716a1649.582 1649.582 0 0 0 18.39-15.847c7.141-6.24 13.573-11.928 18.191-16.08 2.174-1.982 4.005-3.655 5.44-4.973 1.278-1.18 1.946-1.882 1.9-1.935zm-50.805 43.742c.02-.075-.936-.471-2.661-1.134-1.932-.717-4.408-1.641-7.38-2.738-6.227-2.33-14.838-5.559-24.226-9.396-9.394-3.82-17.824-7.501-23.908-10.213a1072.248 1072.248 0 0 1-7.198-3.191c-1.706-.737-2.662-1.133-2.7-1.064-.039.07.868.574 2.52 1.437 1.651.863 4.072 2.073 7.075 3.498a443.047 443.047 0 0 0 23.809 10.507 447.564 447.564 0 0 0 24.382 9.117c3.159 1.067 5.722 1.894 7.502 2.431 1.76.532 2.751.797 2.785.746z"
      fill="#fff"
    />
    <path
      d="M614.6 197.798s-15.824-4.247-21.279 32.03c-5.455 36.276-5.494 56.146-5.494 56.146s-2.003 7.888-7.886 5.126c-5.882-2.762-16.008-12.763-22.874-8.068-7.118 4.873-6.774 14.514-.973 26.92 5.8 12.406 17.508 40.029 18.56 42.54 1.035 2.451.821 6.657-3.487 5.414-4.308-1.243-31.946-16.963-38.614-3.409-6.684 13.559 15.16 45.454 17.478 48.982 2.318 3.528 2.121 5.442.602 7.016-1.518 1.574-10.315-4.587-18.354-8.743-8.038-4.156-18.097-7.549-21.294.595-3.197 8.144 3.918 35.168 43.419 69.731l19.351 14.817 22.76-9.017c47.526-22.262 61.855-46.261 61.035-54.97-.819-8.709-11.418-8.235-20.3-6.471-8.881 1.765-19.039 5.244-20.062 3.31-1.023-1.935-.692-3.822 2.514-6.574 3.206-2.752 33.026-27.337 30.362-42.224-2.66-14.872-33.57-7.426-38.054-7.439-4.479.001-3.51-4.092-1.841-6.164 1.706-2.113 20.622-25.417 29.626-35.733 9.007-10.301 12.006-19.48 6.516-26.133-5.286-6.424-17.797.399-24.211 1.423-6.414 1.025-6.152-7.122-6.152-7.122s5.481-19.105 10.281-55.473c4.799-36.369-11.981-36.589-11.981-36.589"
      fill="#E1E4E5"
    />
    <path
      d="M573.351 481.798c3.621-26.698 8.94-63.537 14.968-104.21 6.017-40.654 11.423-77.469 15.206-104.148 1.875-13.312 3.387-24.096 4.44-31.587.521-3.705.931-6.591 1.215-8.592.139-.952.256-1.693.332-2.234.088-.497.143-.764.143-.764s-.011.255-.061.774c-.062.536-.145 1.284-.251 2.244-.251 2.007-.612 4.896-1.067 8.614-.932 7.475-2.358 18.284-4.177 31.628-3.62 26.698-8.944 63.522-14.957 104.191-6.013 40.669-11.433 77.488-15.202 104.163"
      fill="#fff"
    />
    <path
      d="M570.675 297.606c.055-.031.436.451 1.124 1.371.684.905 1.627 2.245 2.768 3.912 2.285 3.347 5.324 8.038 8.58 13.301 3.17 5.177 6.05 9.863 8.266 13.481.995 1.595 1.831 2.949 2.526 4.072.604.958.909 1.507.854 1.538-.055.03-.451-.447-1.135-1.353-.67-.909-1.612-2.249-2.742-3.934-2.26-3.37-5.233-8.11-8.471-13.363l-8.357-13.409c-.995-1.595-1.846-2.944-2.541-4.067-.608-.973-.912-1.523-.872-1.549zm26.371 37.371c-.129-.186 9.276-6.886 21.016-14.938 11.736-8.066 21.367-14.449 21.496-14.262.129.186-9.28 6.871-21.016 14.938-11.75 8.07-21.367 14.449-21.496 14.262zm-12.055 62.038c-.016-.059.587-.284 1.667-.668 1.26-.416 2.812-.927 4.635-1.541 3.91-1.301 9.32-3.129 15.207-5.353 5.892-2.21 11.159-4.394 14.972-5.999 1.773-.743 3.274-1.382 4.507-1.902 1.064-.443 1.67-.653 1.697-.612.03.055-.534.363-1.556.905a113.236 113.236 0 0 1-4.41 2.144 214.157 214.157 0 0 1-14.908 6.235 223.66 223.66 0 0 1-15.33 5.133c-1.99.581-3.609 1.014-4.717 1.295-1.122.285-1.748.422-1.764.363zm-31.285-28.562c.037-.041.508.306 1.351.979.828.677 2.009 1.67 3.46 2.906a810.11 810.11 0 0 1 11.228 9.816 846.409 846.409 0 0 1 11.071 10 155.48 155.48 0 0 1 3.294 3.109c.767.741 1.17 1.185 1.133 1.226-.036.041-.508-.305-1.35-.979-.829-.677-2.01-1.67-3.461-2.906a816.749 816.749 0 0 1-11.227-9.816c-4.349-3.867-8.264-7.408-11.057-10.004a160.599 160.599 0 0 1-3.294-3.109c-.781-.737-1.199-1.177-1.148-1.222zm-17.599 53.412c.037-.042.647.41 1.715 1.275 1.177.979 2.676 2.217 4.449 3.714 3.735 3.164 8.858 7.565 14.481 12.478a1444.14 1444.14 0 0 1 14.324 12.662 1649.1 1649.1 0 0 1 4.283 3.916c.992.933 1.533 1.482 1.497 1.524-.036.041-.646-.411-1.714-1.276-1.177-.978-2.677-2.217-4.45-3.714a1302.546 1302.546 0 0 1-14.48-12.478 1457.38 1457.38 0 0 1-14.325-12.662c-1.711-1.56-3.153-2.878-4.283-3.916-1.006-.929-1.533-1.482-1.497-1.523zm40.006 34.443c-.016-.059.737-.371 2.095-.893 1.521-.565 3.471-1.293 5.811-2.156 4.904-1.835 11.684-4.377 19.077-7.399a620.685 620.685 0 0 0 18.825-8.042 860.774 860.774 0 0 0 5.668-2.512c1.343-.581 2.096-.893 2.126-.838.031.055-.683.451-1.984 1.131-1.301.68-3.207 1.632-5.572 2.755a349.078 349.078 0 0 1-18.747 8.273 352.371 352.371 0 0 1-19.199 7.179c-2.488.84-4.506 1.492-5.907 1.914-1.386.419-2.167.628-2.193.588z"
      fill="#fff"
    />
    <path
      d="M561.063 107.995a21.747 21.747 0 0 0-1.422-.457c-.16-.046-.316-.094-.475-.135-.169-.043-.338-.084-.507-.125a35.864 35.864 0 0 0-.518-.121c-.164-.036-.328-.067-.494-.099a23.737 23.737 0 0 0-1.034-.173 24.024 24.024 0 0 0-1.751-.178c-.123-.007-.246-.019-.368-.024-.36-.017-.721-.027-1.085-.027H386.67a22.202 22.202 0 0 0-4.53.458c-9.515 1.948-16.839 9.925-17.837 19.774a22.805 22.805 0 0 0-.115 2.305v341.61c0 9.755 6.181 18.059 14.833 21.198.039.014.077.026.116.038.429.152.865.292 1.304.417.159.046.316.094.477.135.169.043.338.084.506.125a15.98 15.98 0 0 0 1.013.219c.186.036.371.07.557.099l.475.075c.2.028.402.052.607.077.147.016.294.033.444.048.231.021.465.038.699.053.123.007.246.019.369.024.359.017.721.026 1.085.026h166.741a22.7 22.7 0 0 0 2.299-.115c10.581-1.077 18.995-9.511 20.07-20.119.077-.758.116-1.527.116-2.305V129.193c-.005-9.755-6.186-18.059-14.836-21.198z"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M412.652 336.27a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382zm26 0a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382zm26 0a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382zm27 0a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382zm27 0a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382z"
      fill="#fff"
    />
    <circle
      r={4.861}
      transform="matrix(1 0 0 -1 727.861 244.861)"
      fill="#E1E4E5"
    />
    <circle
      r={4.861}
      transform="matrix(1 0 0 -1 150.861 345.906)"
      fill="#E1E4E5"
    />
    <circle
      r={4.861}
      transform="matrix(1 0 0 -1 591.861 176.861)"
      fill="#E1E4E5"
    />
    <path
      clipRule="evenodd"
      d="M651.561 260.122 644 252.561l7.561-7.561 7.561 7.561-7.561 7.561z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M322.089 341.313H204.916a9.657 9.657 0 0 0-9.642 9.014l-7.691 115.299c-.744 11.149 8.106 20.608 19.284 20.608h113.271c11.178 0 20.028-9.459 19.284-20.608l-7.691-115.299a9.657 9.657 0 0 0-9.642-9.014z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={13.417}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M250.699 436.486a4.501 4.501 0 0 1-6.513-4.775l2.427-13.907-10.218-9.79a4.5 4.5 0 0 1 2.481-7.711l14.187-2.028 6.405-12.774a4.5 4.5 0 0 1 8.064 0l6.405 12.774 14.187 2.028a4.5 4.5 0 0 1 2.481 7.711l-10.218 9.79 2.427 13.91a4.498 4.498 0 0 1-6.513 4.775l-12.801-6.613-12.801 6.61z"
      fill="#fff"
    />
    <path
      d="M292.494 358.989v-38.645 0c0-16.009-12.975-28.985-28.984-28.985h-.01c-16.009 0-28.984 12.976-28.984 28.985v38.645"
      stroke="#6f381e"
      strokeWidth={13.417}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M331.165 215.193a1.194 1.194 0 0 1-1.728-1.267l.644-3.69-2.711-2.598a1.196 1.196 0 0 1 .658-2.047l3.764-.538 1.699-3.389a1.194 1.194 0 0 1 2.14 0l1.699 3.389 3.764.538a1.196 1.196 0 0 1 .658 2.047l-2.711 2.598.644 3.691a1.192 1.192 0 0 1-1.728 1.267l-3.396-1.755-3.396 1.754zm272.487 14.077a1.62 1.62 0 0 1-2.346-1.72l.874-5.011-3.681-3.527a1.621 1.621 0 0 1 .894-2.778l5.11-.731 2.307-4.602a1.62 1.62 0 0 1 2.905 0l2.307 4.602 5.11.731a1.62 1.62 0 0 1 .894 2.778l-3.681 3.527.874 5.012a1.62 1.62 0 0 1-2.346 1.72l-4.611-2.383-4.61 2.382z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M506.756 219.724v47.759a11.038 11.038 0 0 1-8.126 10.769 110.375 110.375 0 0 1-50.833 0 11.038 11.038 0 0 1-8.126-10.769v-47.759"
      fill="#fff"
    />
    <path
      d="M506.756 219.724v47.759a11.038 11.038 0 0 1-8.126 10.769 110.375 110.375 0 0 1-50.833 0 11.038 11.038 0 0 1-8.126-10.769v-47.759"
      stroke="#fff"
      strokeWidth={7.76}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m506.844 230.904 18.03-4.247a5.593 5.593 0 0 0 4.093-6.977l-6.781-23.735a22.365 22.365 0 0 0-11.978-14.089l-10.043-4.727a22.365 22.365 0 0 0-9.523-2.129h-34.724c-3.292 0-6.544.727-9.523 2.129l-10.043 4.727a22.365 22.365 0 0 0-11.978 14.089l-6.781 23.735a5.59 5.59 0 0 0 4.093 6.977l18.03 4.247"
      fill="#fff"
    />
    <path
      d="m506.844 230.904 18.03-4.247a5.593 5.593 0 0 0 4.093-6.977l-6.781-23.735a22.365 22.365 0 0 0-11.978-14.089l-10.043-4.727a22.365 22.365 0 0 0-9.523-2.129h-34.724c-3.292 0-6.544.727-9.523 2.129l-10.043 4.727a22.365 22.365 0 0 0-11.978 14.089l-6.781 23.735a5.59 5.59 0 0 0 4.093 6.977l18.03 4.247"
      stroke="#fff"
      strokeWidth={7.76}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M716.85 487.857h-88.571c-12.71 0-22.815-10.681-22.106-23.368l4.532-81.604c.871-15.647 13.809-27.885 29.479-27.885h64.768c15.669 0 28.608 12.238 29.479 27.885l4.532 81.596c.701 12.695-9.403 23.376-22.113 23.376z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={10.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M695.248 376.063c0 11.333-10.156 20.522-22.682 20.522-12.527 0-22.683-9.189-22.683-20.522"
      stroke="#fff"
      strokeWidth={8.625}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M725.649 298.316c2.251 15.525-8.524 29.935-24.091 32.197-15.557 2.262-29.999-8.492-32.261-24.016-2.251-15.514 8.534-29.934 24.091-32.196 15.568-2.263 30.009 8.491 32.261 24.015z"
      fill="url(#a)"
    />
    <path
      d="M718.948 299.292c1.715 11.826-6.497 22.815-18.355 24.541-11.858 1.716-22.869-6.475-24.584-18.301-1.716-11.837 6.497-22.826 18.355-24.541 11.858-1.727 22.858 6.465 24.584 18.301z"
      fill="#fff"
    />
    <path
      d="m701.695 314.721.623 3.768-3.463.541-.602-3.67c-3.463.336-6.915-.195-9.053-1.353l1.225-4.396c1.937.975 4.577 1.494 7.105 1.343l-.925-5.619c-3.986-.314-8.486-.888-9.276-5.694-.59-3.562 1.57-7.037 6.938-8.499l-.613-3.735 3.464-.541.601 3.67c2.628-.206 5.267.076 7.361.953l-1.047 4.406c-1.926-.704-3.82-.996-5.579-.931l.947 5.716c3.986.271 8.407.866 9.187 5.608.568 3.508-1.559 6.95-6.893 8.433zm-5.903-14.333-.79-4.775c-1.771.693-2.328 1.776-2.15 2.891.201 1.169 1.337 1.656 2.94 1.884zm7.284 7.188c-.19-1.18-1.303-1.656-2.874-1.938l.769 4.645c1.67-.639 2.283-1.635 2.105-2.707z"
      fill="#E1E4E5"
    />
    <path
      d="M342.758 149.349c1.422 9.8-5.38 18.896-15.206 20.324-9.82 1.428-18.936-5.36-20.364-15.16-1.422-9.793 5.387-18.895 15.207-20.323 9.826-1.428 18.942 5.36 20.363 15.159z"
      fill="url(#b)"
    />
    <path
      d="M338.529 149.965c1.083 7.465-4.101 14.402-11.586 15.491-7.486 1.083-14.436-4.087-15.519-11.552-1.083-7.472 4.101-14.408 11.586-15.491 7.486-1.09 14.429 4.081 15.519 11.552z"
      fill="#fff"
    />
    <path
      d="m327.638 159.705.393 2.378-2.186.341-.38-2.316c-2.186.212-4.365-.123-5.715-.854l.774-2.775c1.223.615 2.889.943 4.484.847l-.583-3.546c-2.517-.198-5.357-.561-5.856-3.595-.372-2.248.992-4.442 4.38-5.364l-.387-2.358 2.186-.342.38 2.317c1.659-.13 3.325.048 4.647.601l-.661 2.782c-1.216-.445-2.411-.629-3.522-.588l.597 3.608c2.517.171 5.308.547 5.8 3.54.358 2.214-.984 4.387-4.351 5.324zm-3.726-9.048-.499-3.014c-1.118.437-1.469 1.121-1.357 1.825.127.738.844 1.045 1.856 1.189zm4.597 4.537c-.119-.745-.822-1.045-1.813-1.223l.485 2.932c1.054-.403 1.441-1.032 1.328-1.709z"
      fill="#E1E4E5"
    />
    <path
      d="M348.849 268.256c2.061 14.21-7.801 27.398-22.05 29.469-14.238 2.07-27.456-7.772-29.527-21.981-2.061-14.2 7.811-27.398 22.05-29.469 14.248-2.07 27.467 7.772 29.527 21.981z"
      fill="url(#c)"
    />
    <path
      d="M342.717 269.149c1.57 10.824-5.947 20.882-16.8 22.462-10.854 1.57-20.932-5.927-22.502-16.75-1.57-10.834 5.947-20.892 16.8-22.463 10.854-1.579 20.922 5.918 22.502 16.751z"
      fill="#fff"
    />
    <path
      d="m326.926 283.271.57 3.448-3.17.496-.55-3.359c-3.17.307-6.33-.179-8.287-1.239l1.121-4.023c1.774.892 4.19 1.368 6.503 1.229l-.846-5.143c-3.649-.287-7.766-.812-8.49-5.212-.54-3.26 1.437-6.441 6.35-7.778l-.561-3.419 3.17-.495.551 3.359c2.405-.189 4.821.069 6.737.872l-.958 4.033c-1.763-.644-3.496-.912-5.107-.853l.867 5.232c3.649.248 7.695.793 8.409 5.133.52 3.211-1.427 6.362-6.309 7.719zm-5.403-13.119-.723-4.37c-1.621.634-2.131 1.625-1.968 2.646.184 1.07 1.224 1.516 2.691 1.724zm6.666 6.579c-.173-1.08-1.192-1.516-2.629-1.773l.703 4.25c1.529-.584 2.09-1.496 1.926-2.477z"
      fill="#E1E4E5"
    />
    <rect
      width={122}
      height={8}
      rx={4}
      transform="matrix(-1 0 0 1 528.997 411)"
      fill="#fff"
    />
    <rect
      width={113}
      height={8}
      rx={4}
      transform="matrix(-1 0 0 1 519.997 387)"
      fill="#fff"
    />
    <rect
      width={127}
      height={8}
      rx={4}
      transform="matrix(-1 0 0 1 533.997 363)"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M687.5 235c-17.948 0-32.5-14.552-32.5-32.5s14.552-32.5 32.5-32.5 32.5 14.552 32.5 32.5-14.552 32.5-32.5 32.5z"
      fill="#6f381e"
    />
    <path
      d="m698.335 197.575-13.539 13.788-8.128-8.271"
      stroke="#fff"
      strokeWidth={4.883}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M626.5 175c-10.217 0-18.5-8.283-18.5-18.5s8.283-18.5 18.5-18.5 18.5 8.283 18.5 18.5-8.283 18.5-18.5 18.5z"
      fill="#6f381e"
    />
    <path
      d="m632.667 153.697-7.706 7.848-4.627-4.708"
      stroke="#fff"
      strokeWidth={2.892}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={213}
      y={186}
      width={99.96}
      height={75.579}
      rx={20}
      fill="#6f381e"
    />
    <rect
      x={262.573}
      y={242.888}
      width={21.13}
      height={21.13}
      rx={7}
      transform="rotate(45 262.573 242.888)"
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M273.159 202.254c8.744 0 14.607 8.173 14.607 15.784 0 15.451-24.343 28.1-24.786 28.1-.444 0-24.787-12.649-24.787-28.1 0-7.611 5.863-15.784 14.608-15.784 4.998 0 8.281 2.482 10.179 4.693 1.897-2.211 5.18-4.693 10.179-4.693z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={698.687}
        y1={362.666}
        x2={696.94}
        y2={212.197}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={325.74}
        y1={189.969}
        x2={324.636}
        y2={94.988}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={324.172}
        y1={327.154}
        x2={322.572}
        y2={189.433}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg60);
const Memo = memo(ForwardRef);
export default Memo;