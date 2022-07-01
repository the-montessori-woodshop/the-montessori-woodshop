import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg462 = (
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
      d="M90.405 439.144a5.272 5.272 0 0 0 5.272 5.272h136.444a5.272 5.272 0 1 0 0-10.544H95.677a5.272 5.272 0 0 0-5.272 5.272zM54.5 401.186a5.272 5.272 0 0 0 5.272 5.272h208.257a5.272 5.272 0 0 0 0-10.544H59.772a5.272 5.272 0 0 0-5.272 5.272zm208.028-133.11c0 55.551-44.246 100.423-98.629 100.423-54.382 0-98.628-44.872-98.628-100.423 0-55.552 44.246-100.424 98.628-100.424 54.383 0 98.629 44.872 98.629 100.424z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle
      cx={165.693}
      cy={239.351}
      r={21.43}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M129.905 295.005c0-8.86 7.183-16.043 16.044-16.043h43.087c8.861 0 16.044 7.183 16.044 16.043 0 8.861-7.183 16.044-16.044 16.044h-43.087c-8.861 0-16.044-7.183-16.044-16.044zm236.809 144.139a5.272 5.272 0 0 0 5.272 5.272H508.43a5.273 5.273 0 0 0 0-10.544H371.986a5.272 5.272 0 0 0-5.272 5.272zm-35.906-37.958a5.272 5.272 0 0 0 5.272 5.272h208.256a5.272 5.272 0 0 0 0-10.544H336.08a5.272 5.272 0 0 0-5.272 5.272zm208.028-133.11c0 55.551-44.246 100.423-98.629 100.423-54.382 0-98.628-44.872-98.628-100.423 0-55.552 44.246-100.424 98.628-100.424 54.383 0 98.629 44.872 98.629 100.424z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle
      cx={442.001}
      cy={239.35}
      r={21.43}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M406.213 295.005c0-8.861 7.183-16.044 16.044-16.044h43.087c8.861 0 16.044 7.183 16.044 16.044s-7.183 16.044-16.044 16.044h-43.087c-8.861 0-16.044-7.183-16.044-16.044zm236.809 144.139a5.272 5.272 0 0 0 5.272 5.272h136.444a5.272 5.272 0 0 0 0-10.544H648.294a5.272 5.272 0 0 0-5.272 5.272zm-35.906-37.959a5.272 5.272 0 0 0 5.272 5.272h208.256a5.272 5.272 0 1 0 0-10.544H612.388a5.272 5.272 0 0 0-5.272 5.272zm208.027-133.109c0 55.551-44.245 100.423-98.628 100.423s-98.628-44.872-98.628-100.423c0-55.552 44.245-100.424 98.628-100.424s98.628 44.872 98.628 100.424z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle
      cx={718.309}
      cy={239.35}
      r={21.43}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <path
      d="M682.521 295.005c0-8.861 7.183-16.044 16.044-16.044h43.087c8.861 0 16.044 7.183 16.044 16.044s-7.183 16.044-16.044 16.044h-43.087c-8.861 0-16.044-7.183-16.044-16.044z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={11}
    />
    <circle
      cx={637.114}
      cy={130.308}
      r={14.813}
      transform="rotate(180 637.114 130.308)"
      fill="#6f381e"
    />
    <circle
      cx={361.352}
      cy={149.421}
      r={8.08}
      transform="rotate(180 361.352 149.421)"
      fill="#6f381e"
    />
    <circle
      r={7.636}
      transform="matrix(-1 0 0 1 571.198 252.36)"
      fill="#6f381e"
    />
    <circle
      r={10.677}
      transform="matrix(-1 0 0 1 314.608 284.771)"
      fill="#6f381e"
    />
    <circle
      r={13.728}
      transform="matrix(-1 0 0 1 578.465 458.168)"
      fill="#E1E4E5"
    />
    <circle
      r={19.829}
      transform="matrix(-1 0 0 1 299.09 458.395)"
      fill="#E1E4E5"
    />
    <circle
      r={15.092}
      transform="matrix(-1 0 0 1 719.63 493.601)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={8.08}
      ry={8.753}
      transform="matrix(-1 0 0 1 754.91 124.249)"
      fill="#E1E4E5"
    />
    <circle
      r={15.067}
      transform="matrix(0 1 1 0 573.93 347.901)"
      fill="#E1E4E5"
    />
    <circle
      r={6.271}
      transform="matrix(-1 0 0 1 279.657 151.137)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={15.419}
      ry={12.335}
      transform="matrix(-1 0 0 1 836.261 360.441)"
      fill="#E1E4E5"
    />
    <circle
      r={10.908}
      transform="scale(1 -1) rotate(-75 -230.285 -355.59)"
      fill="#E1E4E5"
    />
    <path
      d="M495.232 100.66a30.001 30.001 0 0 1 30 0l30.642 17.692a29.999 29.999 0 0 1 15 25.98v35.383a30 30 0 0 1-15 25.981l-30.642 17.691a30 30 0 0 1-30 0l-30.643-17.691a30 30 0 0 1-15-25.981v-35.383a29.999 29.999 0 0 1 15-25.98l30.643-17.692z"
      fill="#6f381e"
    />
    <path
      d="m531.89 148.943-25.56 25.355-15.336-15.213"
      stroke="#fff"
      strokeWidth={8.45}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg462);
const Memo = memo(ForwardRef);
export default Memo;
