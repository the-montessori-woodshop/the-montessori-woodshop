import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg101 = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M127 503.136s82.957-65.62 199.519-66.542c117.09-.925 210.246 64.295 218.827 67.664L127 503.136z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M355.654 503.136s82.957-65.62 199.519-66.542c117.09-.925 210.245 64.295 218.827 67.664l-418.346-1.122z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M262.348 503.136s82.957-65.62 199.519-66.542c117.09-.925 210.245 64.295 218.827 67.664l-418.346-1.122z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M470.41 483.751V321.745c0-9.655-7.827-17.482-17.482-17.482s-17.482 7.827-17.482 17.482v162.006c0 9.655 7.827 17.482 17.482 17.482s17.482-7.827 17.482-17.482z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M485.216 479.098h-64.399c-6.675 0-12.087 5.412-12.087 12.087 0 6.676 5.412 12.087 12.087 12.087h64.399c6.675 0 12.087-5.411 12.087-12.087 0-6.675-5.412-12.087-12.087-12.087zM365.692 188.362h163.809c27.681 0 50.121 22.439 50.121 50.121v81.904c0 7.116-5.776 12.892-12.891 12.892H328.463c-7.116 0-12.892-5.776-12.892-12.892v-81.904c0-27.682 22.44-50.121 50.121-50.121z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M477.381 141.687v104.242-104.242z"
      fill="#fff"
    />
    <path d="M477.381 141.687v104.242" stroke="#E1E4E5" strokeWidth={7.293} />
    <path
      d="M477.366 240.343a5.596 5.596 0 0 0-5.569 5.6c0 3.082 2.501 5.584 5.584 5.569a5.586 5.586 0 0 0 5.584-5.584 5.59 5.59 0 0 0-5.599-5.585"
      stroke="#E1E4E5"
      strokeWidth={14.815}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M365.695 186.362c28.786 0 52.121 23.335 52.121 52.121v96.796"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M365.695 186.362c28.786 0 52.121 23.335 52.121 52.121v96.796"
      fill="#fff"
    />
    <path
      d="M365.695 190.362c26.576 0 48.121 21.544 48.121 48.121h8c0-30.995-25.126-56.121-56.121-56.121v8zm48.121 48.121v96.796h8v-96.796h-8z"
      fill="#E1E4E5"
      mask="url(#a)"
    />
    <path
      d="M581.704 151.437c1.445 2.46-.328 5.56-3.182 5.56H474.636a3.69 3.69 0 0 1-3.691-3.69v-52.089a7.484 7.484 0 0 1 7.49-7.49h100.159c2.858 0 4.631 3.107 3.178 5.567l-14.288 24.195a3.692 3.692 0 0 0-.004 3.747l14.224 24.2z"
      fill="#6f381e"
    />
    <path
      d="m380.27 294.254-83.333 16.849a10.143 10.143 0 0 1-11.955-7.934l-9.628-47.618a10.142 10.142 0 0 1 7.934-11.955l83.333-16.849a10.143 10.143 0 0 1 11.955 7.933l9.628 47.619a10.142 10.142 0 0 1-7.934 11.955z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m352.376 248.214 5.952-1.204a4.077 4.077 0 0 1 4.8 3.185l1.203 5.952a4.076 4.076 0 0 1-3.185 4.8l-5.952 1.203a4.074 4.074 0 0 1-4.799-3.185l-1.204-5.952a4.075 4.075 0 0 1 3.185-4.799z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m313.919 272.536-17.857 3.61"
      stroke="#E1E4E5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m496.079 287.052-60.743-.112"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m329.435 287.986-29.761 6.017"
      stroke="#E1E4E5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m536.205 305.345-101.238-.187"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m366.734 365.362-64.602 13.062a7.413 7.413 0 0 1-8.738-5.799l-7.464-36.915a7.413 7.413 0 0 1 5.799-8.738l64.602-13.062a7.413 7.413 0 0 1 8.738 5.799l7.464 36.915a7.412 7.412 0 0 1-5.799 8.738z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m345.286 330.552 4.615-.933a2.71 2.71 0 0 1 3.19 2.117l.933 4.615a2.708 2.708 0 0 1-2.117 3.19l-4.615.933a2.71 2.71 0 0 1-3.19-2.117l-.933-4.615a2.71 2.71 0 0 1 2.117-3.19z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m315.388 348.966-13.843 2.799m25.871 9.178-23.073 4.665"
      stroke="#E1E4E5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m253.091 334.481-64.602 13.062a7.413 7.413 0 0 1-8.738-5.799l-7.464-36.916a7.413 7.413 0 0 1 5.799-8.738l64.602-13.062a7.413 7.413 0 0 1 8.738 5.799l7.464 36.916a7.413 7.413 0 0 1-5.799 8.738z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m231.642 299.67 4.614-.933a2.71 2.71 0 0 1 3.191 2.117l.933 4.615a2.71 2.71 0 0 1-2.118 3.191l-4.614.933a2.71 2.71 0 0 1-3.191-2.118l-.933-4.614a2.71 2.71 0 0 1 2.118-3.191z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m201.741 318.084-13.843 2.799m25.873 9.179-23.072 4.665"
      stroke="#E1E4E5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M225.435 503.233v-13.33 13.33z"
      fill="#fff"
    />
    <path d="M225.435 503.233v-13.33" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M342.326 503.233v-13.33 13.33z"
      fill="#fff"
    />
    <path d="M342.326 503.233v-13.33" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M543.295 503.233v-13.33 13.33z"
      fill="#fff"
    />
    <path d="M543.295 503.233v-13.33" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M711.454 503.233v-13.33 13.33z"
      fill="#fff"
    />
    <path d="M711.454 503.233v-13.33" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M239.791 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M239.791 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M355.654 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M355.654 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M557.65 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M557.65 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M725.808 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M725.808 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M211.079 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M211.079 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M327.971 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M327.971 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M528.939 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M528.939 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M697.099 503.233v-9.228 9.228z"
      fill="#fff"
    />
    <path d="M697.099 503.233v-9.228" stroke="#E1E4E5" strokeWidth={4} />
  </svg>
);

const ForwardRef = forwardRef(Svg101);
const Memo = memo(ForwardRef);
export default Memo;
