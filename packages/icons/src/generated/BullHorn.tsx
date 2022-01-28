import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgBullHorn = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.002 13.83A3.001 3.001 0 0 1 6 8h4.5c1.89 0 4.48-.971 7.743-2.929A.5.5 0 0 1 19 5.5v2.55a2.5 2.5 0 0 1 2 2.45v1a2.5 2.5 0 0 1-2 2.45v2.55a.5.5 0 0 1-.757.429C14.98 14.97 12.39 14 10.5 14H9.22c-.152.186-.22.352-.22.5 0-.068.026-.046.224.053.552.276.776.463.776.947 0 .352-.116.562-.36.823l-.024.027c-.102.11-.116.132-.116.216 0-.04.007-.038.183.031l.039.015c.532.209.778.394.778.888 0 .48-.227.934-.646 1.354-1.526 1.525-2.885 1.751-3.77.423-.706-1.058-1.055-2.866-1.082-5.447Zm1.002.17c.04 2.303.354 3.885.912 4.723.448.672 1.09.565 2.23-.577.234-.233.342-.437.353-.616-.011.063-.04.053-.142.013l-.04-.015c-.545-.214-.817-.431-.817-.957 0-.39.124-.625.384-.903l.025-.027c.075-.08.088-.096.09-.125-.005.047-.042.021-.223-.069C8.224 15.171 8 14.984 8 14.5c0-.17.028-.337.084-.5h-2.08ZM19 9.085v3.83a1.5 1.5 0 0 0 1-1.415v-1a1.5 1.5 0 0 0-1-1.415Zm-8-.103v4.036c1.871.135 4.199 1.008 7 2.61V6.372c-2.801 1.601-5.129 2.474-7 2.609ZM10 13V9H6a2 2 0 1 0 0 4h4Z" />
  </svg>
);

const ForwardRef = forwardRef(SvgBullHorn);
const Memo = memo(ForwardRef);
export default Memo;
