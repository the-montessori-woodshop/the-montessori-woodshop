import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg273 = (
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
      d="M555.817 76.559a25.707 25.707 0 0 0-1.656-.533c-.185-.053-.368-.11-.553-.157-.196-.05-.393-.098-.589-.146-.2-.047-.402-.095-.604-.14-.19-.042-.381-.078-.575-.115a32.683 32.683 0 0 0-1.204-.202 29.02 29.02 0 0 0-1.223-.145 25.75 25.75 0 0 0-.814-.062c-.143-.008-.286-.023-.429-.028-.419-.02-.84-.031-1.263-.031H352.814a26.153 26.153 0 0 0-5.273.533c-11.076 2.268-19.602 11.553-20.763 23.017-.09.884-.135 1.778-.135 2.684v397.653c0 11.355 7.195 21.022 17.267 24.675.045.017.09.031.134.045.5.177 1.008.339 1.519.485.185.053.367.109.555.157.197.05.393.098.59.146.199.047.401.095.603.14.191.042.382.078.575.115a35.126 35.126 0 0 0 1.201.202c.233.033.469.061.708.089a23.945 23.945 0 0 0 1.33.118c.143.009.286.023.429.028.418.02.839.031 1.263.031h194.095c.904 0 1.796-.045 2.677-.135 12.317-1.253 22.111-11.071 23.363-23.418.089-.883.134-1.778.134-2.683V101.234c-.005-11.355-7.201-21.022-17.269-24.675z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M449.862 503.748c8.333 0 15.088-6.755 15.088-15.088 0-8.333-6.755-15.088-15.088-15.088-8.333 0-15.088 6.755-15.088 15.088 0 8.333 6.755 15.088 15.088 15.088z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={424.715}
      y={95.114}
      width={51.551}
      height={5.029}
      rx={2.515}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M498.898 218.962a49.665 49.665 0 0 1-14.545 35.119 49.667 49.667 0 0 1-70.239-70.239 49.667 49.667 0 0 1 70.239 0 49.667 49.667 0 0 1 14.545 35.12z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={434.218}
      cy={204.717}
      r={6.16}
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M496.588 216.018a44.861 44.861 0 0 0-6.402-.52c-12.924-.093-25.238 5.574-33.687 15.502-8.45 9.928-12.184 23.119-10.216 36.087"
      fill="#fff"
    />
    <path
      d="M496.588 216.018a44.861 44.861 0 0 0-6.402-.52c-12.924-.093-25.238 5.574-33.687 15.502-8.45 9.928-12.184 23.119-10.216 36.087"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={383.223}
      y={366.699}
      width={139.564}
      height={10.059}
      rx={5.029}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={393.281}
      y={336.523}
      width={129.506}
      height={10.059}
      rx={5.029}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={376.936}
      y={306.347}
      width={145.851}
      height={10.059}
      rx={5.029}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M288.442 156.282c-.016-.005-.03-.009-.046-.016a20.97 20.97 0 0 0-1.315-.422c-.152-.044-.302-.09-.455-.129-.161-.042-.323-.081-.484-.12-.164-.039-.33-.079-.496-.115a14.65 14.65 0 0 0-.473-.095 14.55 14.55 0 0 0-.533-.095 22.013 22.013 0 0 0-2.132-.242c-.118-.007-.236-.018-.354-.023a22.268 22.268 0 0 0-1.038-.025H121.52a21.42 21.42 0 0 0-3.277.249c-.355.055-.711.118-1.059.189-9.108 1.865-16.118 9.5-17.073 18.927a21.737 21.737 0 0 0-.111 2.206v326.978c0 9.337 5.916 17.286 14.198 20.29l.111.036c.411.146.828.279 1.248.399.152.044.302.09.457.129.162.042.323.081.485.12.163.039.33.079.496.116.157.034.314.064.473.094.177.035.355.067.533.095a20.996 20.996 0 0 0 1.036.145c.141.016.281.032.425.046.221.021.445.037.669.051.117.007.235.018.353.023.344.016.69.025 1.038.025h159.599c.743 0 1.477-.037 2.201-.111 10.128-1.03 18.181-9.103 19.21-19.256.074-.726.111-1.462.111-2.206V176.571c-.005-9.337-5.921-17.285-14.201-20.289z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M201.319 507.546c6.852 0 12.406-5.554 12.406-12.406s-5.554-12.407-12.406-12.407-12.406 5.555-12.406 12.407 5.554 12.406 12.406 12.406z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={180.642}
      y={171.54}
      width={42.389}
      height={4.135}
      rx={2.068}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M241.64 273.375a40.838 40.838 0 0 1-11.96 28.878 40.838 40.838 0 1 1 0-57.755 40.836 40.836 0 0 1 11.96 28.877z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={188.456}
      cy={261.662}
      r={5.065}
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M239.741 270.955a36.697 36.697 0 0 0-5.265-.428c-10.627-.076-20.752 4.583-27.7 12.747-6.947 8.164-10.018 19.01-8.4 29.673"
      fill="#fff"
    />
    <path
      d="M239.741 270.955a36.697 36.697 0 0 0-5.265-.428c-10.627-.076-20.752 4.583-27.7 12.747-6.947 8.164-10.018 19.01-8.4 29.673"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={146.524}
      y={394.855}
      width={114.759}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={154.795}
      y={370.042}
      width={106.488}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={141.355}
      y={345.229}
      width={119.929}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M785.529 156.282c-.016-.005-.03-.009-.046-.016a21.212 21.212 0 0 0-1.316-.422c-.152-.044-.302-.09-.454-.129a28.573 28.573 0 0 0-.485-.12c-.164-.039-.33-.079-.496-.115a14.65 14.65 0 0 0-.473-.095 14.179 14.179 0 0 0-.533-.095 21.937 21.937 0 0 0-2.132-.242c-.118-.007-.235-.018-.353-.023-.344-.016-.69-.025-1.038-.025H618.606a21.41 21.41 0 0 0-3.276.249c-.356.055-.711.118-1.06.189-9.107 1.865-16.118 9.5-17.073 18.927a21.737 21.737 0 0 0-.111 2.206v326.978c0 9.337 5.917 17.286 14.199 20.29.036.013.073.025.11.036.411.146.829.279 1.249.399.152.044.302.09.457.129.161.042.323.081.484.12.164.039.33.079.496.116.157.034.314.064.473.094.178.035.356.067.533.095a20.45 20.45 0 0 0 1.036.145c.141.016.282.032.425.046.221.021.445.037.669.051.118.007.235.018.353.023.344.016.69.025 1.039.025h159.598c.743 0 1.477-.037 2.202-.111 10.127-1.03 18.18-9.103 19.209-19.256.074-.726.111-1.462.111-2.206V176.571c-.004-9.337-5.921-17.285-14.2-20.289z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M698.405 507.546c6.852 0 12.407-5.554 12.407-12.406s-5.555-12.407-12.407-12.407c-6.851 0-12.406 5.555-12.406 12.407s5.555 12.406 12.406 12.406z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={677.728}
      y={171.54}
      width={42.389}
      height={4.135}
      rx={2.068}
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M738.727 273.375a40.84 40.84 0 0 1-69.716 28.878 40.843 40.843 0 0 1 0-57.755 40.838 40.838 0 0 1 57.755 0 40.837 40.837 0 0 1 11.961 28.877z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={685.542}
      cy={261.662}
      r={5.065}
      fill="#E1E4E5"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M736.827 270.955a36.697 36.697 0 0 0-5.265-.428c-10.626-.076-20.752 4.583-27.699 12.747-6.948 8.164-10.018 19.01-8.4 29.673"
      fill="#fff"
    />
    <path
      d="M736.827 270.955a36.697 36.697 0 0 0-5.265-.428c-10.626-.076-20.752 4.583-27.699 12.747-6.948 8.164-10.018 19.01-8.4 29.673"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={643.61}
      y={394.855}
      width={114.759}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={651.881}
      y={370.042}
      width={106.488}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={638.441}
      y={345.229}
      width={119.929}
      height={8.271}
      rx={4.135}
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg273);
const Memo = memo(ForwardRef);
export default Memo;
