import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg161 = (
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
      d="M746.811 477.331H153.189c-18.115 0-32.189-12.282-32.189-26.731V138.022c0-14.449 14.074-26.732 32.189-26.732h593.622c18.115 0 32.189 12.283 32.189 26.732V450.6c0 14.449-14.074 26.731-32.189 26.731z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M176.017 217.899v116.434c0 6.32 5.06 11.438 11.309 11.438h68.54l29.919-42.645c1.426-2.035 4.993-2.035 6.419 0l10.475 14.933.081.116.071-.102 22.465-32.618c1.553-2.258 5.446-2.258 6.999 0l29.751 43.202V217.899c0-6.32-5.074-11.438-11.31-11.438h-163.41c-6.249 0-11.309 5.118-11.309 11.438z"
      fill="#6f381e"
    />
    <path
      d="M228.479 285.763c-10.913 0-19.759-8.847-19.759-19.76 0-10.912 8.846-19.759 19.759-19.759s19.76 8.847 19.76 19.759c0 10.913-8.847 19.76-19.76 19.76z"
      fill="#fff"
    />
    <path
      d="M779 153.519H121v-10.431c0-17.775 14.414-32.189 32.189-32.189h593.622c17.775 0 32.189 14.414 32.189 32.189v10.431z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M153.251 141.05a7.342 7.342 0 1 0 0-14.684 7.342 7.342 0 0 0 0 14.684zm30.593 0a7.342 7.342 0 1 0-.001-14.685 7.342 7.342 0 0 0 .001 14.685zm29.369 0a7.342 7.342 0 1 0 0-14.684 7.342 7.342 0 0 0 0 14.684z"
      fill="#E1E4E5"
    />
    <rect
      x={391.414}
      y={206.461}
      width={333.231}
      height={24.074}
      rx={12.037}
      fill="#E1E4E5"
    />
    <rect
      x={391.414}
      y={262.211}
      width={333.231}
      height={24.074}
      rx={12.037}
      fill="#E1E4E5"
    />
    <rect
      x={390.59}
      y={317.684}
      width={315.723}
      height={23.764}
      rx={11.882}
      fill="#E1E4E5"
    />
    <rect
      x={391.414}
      y={373.71}
      width={333.231}
      height={24.074}
      rx={12.037}
      fill="#E1E4E5"
    />
  </svg>
);

const ForwardRef = forwardRef(Svg161);
const Memo = memo(ForwardRef);
export default Memo;
