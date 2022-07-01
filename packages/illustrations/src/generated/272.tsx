import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg272 = (
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
      d="M746.811 533.101H153.189c-17.654 0-32.189-15.322-32.189-34.493V101.594c0-19.172 14.535-34.493 32.189-34.493h593.622C764.465 67.1 779 82.42 779 101.594v397.014c0 19.171-14.535 34.493-32.189 34.493z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M357 200.438v116.434c0 6.32 5.06 11.438 11.31 11.438h68.539l29.919-42.646c1.427-2.034 4.993-2.034 6.42 0l10.474 14.934.081.116.071-.103 22.465-32.617c1.553-2.259 5.446-2.259 6.999 0l29.751 43.202V200.438c0-6.32-5.074-11.438-11.309-11.438H368.31c-6.25 0-11.31 5.118-11.31 11.438z"
      fill="#6f381e"
    />
    <path
      d="M409.463 268.302c-10.913 0-19.76-8.847-19.76-19.76 0-10.913 8.847-19.759 19.76-19.759 10.913 0 19.759 8.846 19.759 19.759s-8.846 19.76-19.759 19.76z"
      fill="#fff"
    />
    <path
      d="M779 109.62H121V99.189C121 81.414 135.414 67 153.189 67h593.622C764.586 67 779 81.414 779 99.189v10.431z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="M153.251 97.151a7.342 7.342 0 1 0 0-14.684 7.342 7.342 0 0 0 0 14.684zm30.593 0a7.343 7.343 0 1 0-.001-14.685 7.343 7.343 0 0 0 .001 14.685zm29.369 0a7.342 7.342 0 1 0 0-14.684 7.342 7.342 0 0 0 0 14.684z"
      fill="#E1E4E5"
    />
    <rect x={208} y={353} width={483} height={24} rx={12} fill="#E1E4E5" />
    <rect x={655} y={128} width={36} height={24} rx={12} fill="#E1E4E5" />
    <rect x={605} y={128} width={36} height={24} rx={12} fill="#E1E4E5" />
    <rect x={555} y={128} width={36} height={24} rx={12} fill="#E1E4E5" />
    <rect x={505} y={128} width={36} height={24} rx={12} fill="#E1E4E5" />
    <rect x={208} y={128} width={86} height={24} rx={12} fill="#E1E4E5" />
    <rect x={208} y={396} width={483} height={24} rx={12} fill="#E1E4E5" />
    <rect x={344} y={448} width={211} height={52} rx={26} fill="#6f381e" />
  </svg>
);

const ForwardRef = forwardRef(Svg272);
const Memo = memo(ForwardRef);
export default Memo;
