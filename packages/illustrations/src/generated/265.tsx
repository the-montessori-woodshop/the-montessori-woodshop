import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg265 = (
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
      d="m522.509 110.28 103.829 34.603a22.146 22.146 0 0 1 15.162 21.036V432.03c0 16.469-17.334 27.198-32.075 19.817l-81.086-40.543a44.273 44.273 0 0 0-39.656 0l-93.344 46.683a44.273 44.273 0 0 1-39.656 0l-100.925-50.452a22.191 22.191 0 0 1-12.258-19.839V136.348c0-15.139 14.829-25.824 29.171-21.036l89.797 29.925a44.29 44.29 0 0 0 28.041 0l104.959-34.979a44.456 44.456 0 0 1 28.041.022z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={5.32}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M508.5 108.217v298.585-298.585z"
      fill="#fff"
    />
    <path d="M508.5 108.217v298.585" stroke="#E1E4E5" strokeWidth={5.32} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M375.5 147.452v315.21-315.21z"
      fill="#fff"
    />
    <path d="M375.5 147.452v315.21" stroke="#E1E4E5" strokeWidth={5.32} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M537 305.609c0 26.22 28.078 54.485 38.321 63.924 2.122 1.956 5.241 1.956 7.364 0C592.922 360.094 621 331.829 621 305.609c0-22.98-18.805-41.609-42-41.609s-42 18.629-42 41.609z"
      fill="#6f381e"
    />
    <path
      d="M578.906 296.145v21.522m10.761-10.761h-21.522"
      stroke="#fff"
      strokeWidth={6.622}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M271 299.609c0 26.22 28.078 54.485 38.321 63.924 2.122 1.956 5.241 1.956 7.364 0C326.922 354.094 355 325.829 355 299.609c0-22.98-18.805-41.609-42-41.609s-42 18.629-42 41.609z"
      fill="#6f381e"
    />
    <path
      d="M312.906 290.145v21.522m10.761-10.761h-21.522"
      stroke="#fff"
      strokeWidth={6.622}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M408 249.221c0 25.974 28.078 53.975 38.321 63.326 2.122 1.937 5.241 1.937 7.364 0C463.922 303.196 492 275.195 492 249.221 492 226.455 473.195 208 450 208s-42 18.455-42 41.221z"
      fill="#6f381e"
    />
    <path
      d="M449.906 242.145v21.522m10.761-10.761h-21.522"
      stroke="#fff"
      strokeWidth={6.622}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m147 442.296 26.053 16.819 25.724-16.819-25.724-64.968L147 442.296z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M173.404 425.477v44.851m-16.007-35.266 16.163 11.547"
    />
    <path
      d="M255 435.955 272.108 447 289 435.955l-16.892-42.662L255 435.955z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M273.026 424.911v29.452m-10.8-23.717 10.614 7.583"
    />
    <path
      d="m436 442.296 26.053 16.819 25.724-16.819-25.724-64.968L436 442.296z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M462.404 425.477v44.851m-16.007-35.266 16.163 11.547"
    />
    <path
      d="m602 450.296 26.053 16.819 25.724-16.819-25.724-64.968L602 450.296z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M628.404 433.477v44.851m-16.007-35.266 16.163 11.547"
    />
    <path
      d="m706 442.296 26.053 16.819 25.724-16.819-25.724-64.968L706 442.296z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M732.404 425.477v44.851m-16.007-35.266 16.163 11.547"
    />
    <path
      d="m654 338.382 19.121 12.344L692 338.382 673.121 290.7 654 338.382z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M673.911 326.038v32.917M661.94 332.64l11.862 8.474"
    />
    <path
      d="m749 338.009 19.121 12.344L787 338.009l-18.879-47.681L749 338.009z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M768.911 325.666v32.917m-11.971-26.315 11.862 8.474"
    />
    <path
      d="m705 279.207 13.586 8.771L732 279.207l-13.414-33.879L705 279.207z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M719.726 270.436v23.389m-8.748-19.169 8.429 6.021"
    />
    <path
      d="m143 280.207 13.586 8.771L170 280.207l-13.414-33.879L143 280.207z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M157.726 271.436v23.389m-8.748-19.169 8.429 6.021"
    />
    <path
      d="m810 421.207 13.586 8.771L837 421.207l-13.414-33.879L810 421.207z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M824.726 412.436v23.389m-8.748-19.169 8.429 6.021"
    />
    <path
      d="m188 333.5 18.115 11.694L224 333.5l-17.885-45.172L188 333.5z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M206.968 321.806v31.184m-11.385-25.015 11.238 8.028"
    />
    <path
      d="m63 452.5 18.115 11.694L99 452.5l-17.885-45.172L63 452.5z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M81.968 440.806v31.184m-11.385-25.015 11.239 8.028"
    />
    <path
      d="m99 353.5 18.115 11.694L135 353.5l-17.885-45.172L99 353.5z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M117.968 341.806v31.184m-11.385-25.015 11.238 8.028"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M549 470v-11 11z"
      fill="#fff"
    />
    <path d="M549 470v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M240 470v-11 11z"
      fill="#fff"
    />
    <path d="M240 470v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M343 492v-11 11z"
      fill="#fff"
    />
    <path d="M343 492v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M809 472v-11 11z"
      fill="#fff"
    />
    <path d="M809 472v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M130 398v-11 11z"
      fill="#fff"
    />
    <path d="M130 398v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M702 387v-11 11z"
      fill="#fff"
    />
    <path d="M702 387v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M537 470v-8 8z"
      fill="#fff"
    />
    <path d="M537 470v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M228 470v-8 8z"
      fill="#fff"
    />
    <path d="M228 470v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M331 492v-8 8z"
      fill="#fff"
    />
    <path d="M331 492v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M702 488v-8 8z"
      fill="#fff"
    />
    <path d="M702 488v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M797 472v-8 8z"
      fill="#fff"
    />
    <path d="M797 472v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M118 398v-8 8z"
      fill="#fff"
    />
    <path d="M118 398v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M690 387v-8 8z"
      fill="#fff"
    />
    <path d="M690 387v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M509 470v-5 5z"
      fill="#fff"
    />
    <path d="M509 470v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M200 470v-5 5z"
      fill="#fff"
    />
    <path d="M200 470v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M303 492v-5 5z"
      fill="#fff"
    />
    <path d="M303 492v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M674 488v-5 5z"
      fill="#fff"
    />
    <path d="M674 488v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M769 472v-5 5z"
      fill="#fff"
    />
    <path d="M769 472v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path fillRule="evenodd" clipRule="evenodd" d="M90 398v-5 5z" fill="#fff" />
    <path d="M90 398v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M662 387v-5 5z"
      fill="#fff"
    />
    <path d="M662 387v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M561 470v-8 8z"
      fill="#fff"
    />
    <path d="M561 470v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M252 470v-8 8z"
      fill="#fff"
    />
    <path d="M252 470v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M355 492v-8 8z"
      fill="#fff"
    />
    <path d="M355 492v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M821 472v-8 8z"
      fill="#fff"
    />
    <path d="M821 472v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M142 398v-8 8z"
      fill="#fff"
    />
    <path d="M142 398v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M714 387v-8 8z"
      fill="#fff"
    />
    <path d="M714 387v-8" stroke="#E1E4E5" strokeWidth={4} />
  </svg>
);

const ForwardRef = forwardRef(Svg265);
const Memo = memo(ForwardRef);
export default Memo;
