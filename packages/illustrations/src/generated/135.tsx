import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg135 = (
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
    <mask
      id="a"
      maskUnits="userSpaceOnUse"
      x={226.778}
      y={185.894}
      width={339.648}
      height={340.12}
      fill="#000"
    >
      <path fill="#fff" d="M226.778 185.894h339.648v340.12H226.778z" />
      <path d="M326.681 450.542a1.171 1.171 0 0 1 1.6-1.705 155.818 155.818 0 0 0 6.938 5.312 1.17 1.17 0 0 1 .26 1.634 1.174 1.174 0 0 1-1.635.263 159.926 159.926 0 0 1-7.046-5.392 1.762 1.762 0 0 1-.117-.112zm14.244 10.33a1.175 1.175 0 0 1-.122-1.436 1.174 1.174 0 0 1 1.621-.343 174.612 174.612 0 0 0 7.441 4.565c.556.325.751 1.039.428 1.599a1.173 1.173 0 0 1-1.6.43 173.955 173.955 0 0 1-7.546-4.627 1.583 1.583 0 0 1-.222-.188zm15.222 8.781a1.172 1.172 0 0 1 1.39-1.838 144.808 144.808 0 0 0 7.889 3.708c.593.257.865.946.607 1.54a1.173 1.173 0 0 1-1.541.609 142.368 142.368 0 0 1-8.015-3.771 1.043 1.043 0 0 1-.33-.248zm16.121 6.971a1.17 1.17 0 0 1 1.254-1.898c2.776.987 5.566 1.868 8.295 2.617.624.169.991.816.815 1.44-.17.624-.818.992-1.438.821a119.439 119.439 0 0 1-8.463-2.669 1.265 1.265 0 0 1-.463-.311zm16.936 4.614a1.175 1.175 0 0 1 1.079-1.95c2.883.534 5.775.933 8.589 1.184a1.17 1.17 0 1 1-.214 2.334 93.702 93.702 0 0 1-8.806-1.216 1.154 1.154 0 0 1-.648-.352zm17.462 1.528a1.173 1.173 0 0 1 .848-1.968 76.932 76.932 0 0 0 8.616-.617 1.173 1.173 0 0 1 1.313 1.01 1.179 1.179 0 0 1-1.014 1.315c-2.9.377-5.891.591-8.883.638a1.204 1.204 0 0 1-.88-.378zm17.358-2.272a1.172 1.172 0 0 1 .576-1.93 71.415 71.415 0 0 0 8.211-2.63 1.168 1.168 0 0 1 1.516.668 1.17 1.17 0 0 1-.667 1.514 72.877 72.877 0 0 1-8.485 2.717 1.185 1.185 0 0 1-1.151-.339zm16.311-6.332a1.17 1.17 0 0 1 .308-1.829 77.726 77.726 0 0 0 7.374-4.483 1.174 1.174 0 0 1 1.323 1.936 80.17 80.17 0 0 1-7.601 4.62 1.185 1.185 0 0 1-1.404-.244zm14.53-9.806a3.403 3.403 0 0 1-.057-.061 1.17 1.17 0 0 1 .177-1.646 98.152 98.152 0 0 0 6.504-5.744 1.17 1.17 0 1 1 1.627 1.68 102.823 102.823 0 0 1-6.665 5.887 1.172 1.172 0 0 1-1.586-.116zm12.555-12.257a1.175 1.175 0 0 1-.041-1.543 65.117 65.117 0 0 0 5.061-6.981 1.172 1.172 0 0 1 1.612-.375c.544.342.714 1.065.368 1.614a68.137 68.137 0 0 1-5.244 7.231 1.171 1.171 0 0 1-1.756.054zm9.219-14.878a1.175 1.175 0 0 1-.219-1.252 45.51 45.51 0 0 0 2.59-8.145 1.173 1.173 0 0 1 1.389-.902c.633.134 1.035.754.9 1.387a47.911 47.911 0 0 1-2.721 8.566 1.17 1.17 0 0 1-1.534.623 1.116 1.116 0 0 1-.405-.277zm-25.112-29.053a1.174 1.174 0 0 1 1.67-1.644c1.966 1.873 4.352 3.521 6.9 4.767a1.174 1.174 0 0 1-1.037 2.104c-2.758-1.351-5.343-3.142-7.483-5.173-.013-.021-.037-.039-.05-.054zm-4.998-7.126a1.225 1.225 0 0 1-.235-.376c-1.398-3.674-.997-7.038 1.137-9.465a1.17 1.17 0 0 1 1.65-.11 1.17 1.17 0 0 1 .103 1.652c-1.963 2.237-1.469 5.088-.71 7.087a1.167 1.167 0 0 1-1.945 1.212zm20.527 14.727a1.162 1.162 0 0 1-.299-.977c.101-.641.7-1.077 1.337-.981 2.794.43 5.608.4 8.363-.075a1.168 1.168 0 0 1 1.353.953 1.173 1.173 0 0 1-.956 1.355c-3.003.525-6.07.549-9.118.082a1.141 1.141 0 0 1-.68-.357zm13.165 4.384a1.17 1.17 0 0 1-.313-.791 36.033 36.033 0 0 0-1.009-8.42 1.17 1.17 0 0 1 2.273-.555 38.657 38.657 0 0 1 1.075 8.966 1.171 1.171 0 0 1-1.167 1.177 1.193 1.193 0 0 1-.859-.377zm-24.884-30.766a1.175 1.175 0 0 1 .775-1.967c2.998-.214 6.058.395 9.094 1.815a1.171 1.171 0 0 1-.995 2.119c-2.669-1.247-5.337-1.787-7.932-1.6a1.16 1.16 0 0 1-.942-.367zm28.731 23.464a1.172 1.172 0 0 1 .316-1.836c2.39-1.25 4.718-2.892 6.914-4.877a1.173 1.173 0 0 1 1.643.07l.01.011a1.17 1.17 0 0 1-.084 1.653c-2.346 2.118-4.835 3.875-7.401 5.216a1.169 1.169 0 0 1-1.398-.237zm-7.998-9.574a1.266 1.266 0 0 1-.175-.245c-1.365-2.551-3.037-4.849-4.951-6.803a1.17 1.17 0 0 1 .021-1.655 1.168 1.168 0 0 1 1.656.018c2.067 2.112 3.875 4.592 5.34 7.336a1.176 1.176 0 0 1-.48 1.587 1.178 1.178 0 0 1-1.411-.238zm21.06-1.972a1.17 1.17 0 0 1-.071-1.503c1.642-2.165 3.228-4.598 4.707-7.226a1.175 1.175 0 0 1 1.597-.448c.563.318.761 1.029.445 1.596-1.531 2.723-3.173 5.241-4.883 7.49a1.173 1.173 0 0 1-1.795.091zm8.688-15.227a1.173 1.173 0 0 1-.215-1.262 109.698 109.698 0 0 0 3.143-8.104 1.178 1.178 0 0 1 1.49-.729c.612.213.933.875.726 1.488a114.368 114.368 0 0 1-3.212 8.275 1.173 1.173 0 0 1-1.932.332zm5.599-16.624a1.174 1.174 0 0 1-.286-1.05 67.21 67.21 0 0 0 1.292-8.521 1.172 1.172 0 0 1 2.334.196 69.452 69.452 0 0 1-1.338 8.823 1.175 1.175 0 0 1-2.002.552zm1.524-17.433a1.161 1.161 0 0 1-.311-.753 77.26 77.26 0 0 0-.816-8.6 1.17 1.17 0 0 1 .983-1.333 1.164 1.164 0 0 1 1.331.98c.452 2.978.733 5.961.84 8.864a1.169 1.169 0 0 1-1.127 1.214 1.16 1.16 0 0 1-.9-.372zM387.256 203.17a1.175 1.175 0 0 1-.196-1.307 1.176 1.176 0 0 1 1.563-.549c2.286 1.101 4.914 2.505 7.82 4.18a1.17 1.17 0 0 1 .427 1.598c-.323.56-1.04.753-1.6.431-2.854-1.641-5.435-3.023-7.667-4.095a1.186 1.186 0 0 1-.347-.258zm123.096 131.518a1.142 1.142 0 0 1-.275-.505 98.31 98.31 0 0 0-2.529-8.291 1.168 1.168 0 0 1 .716-1.492 1.164 1.164 0 0 1 1.49.712c1 2.842 1.872 5.697 2.59 8.488a1.171 1.171 0 0 1-1.992 1.088zM402.513 211.852a1.17 1.17 0 0 1-.13-1.422 1.167 1.167 0 0 1 1.615-.364 273.746 273.746 0 0 1 7.375 4.826 1.17 1.17 0 0 1 .313 1.625 1.171 1.171 0 0 1-1.627.316 287.799 287.799 0 0 0-7.318-4.786 1.192 1.192 0 0 1-.228-.195zm102.043 106.292a1.135 1.135 0 0 1-.213-.322 131.9 131.9 0 0 0-3.779-7.831 1.17 1.17 0 0 1 2.072-1.09 133.977 133.977 0 0 1 3.85 7.973 1.172 1.172 0 0 1-1.93 1.27zm-87.489-96.478a1.17 1.17 0 0 1 1.54-1.749 347.618 347.618 0 0 1 7.101 5.207c.515.389.619 1.121.232 1.64a1.176 1.176 0 0 1-1.641.235 371.527 371.527 0 0 0-7.058-5.174 1.386 1.386 0 0 1-.174-.159zm14.028 10.55a1.167 1.167 0 0 1-.056-1.523 1.173 1.173 0 0 1 1.646-.193 353.974 353.974 0 0 1 6.846 5.538c.504.413.566 1.149.152 1.647a1.17 1.17 0 0 1-1.648.155c-2.23-1.847-4.519-3.7-6.802-5.504a.815.815 0 0 1-.138-.12zm65.347 70.382a1.39 1.39 0 0 1-.145-.193 178.293 178.293 0 0 0-4.674-7.354 1.172 1.172 0 0 1 1.945-1.305 171.588 171.588 0 0 1 4.74 7.454 1.173 1.173 0 0 1-.401 1.606 1.184 1.184 0 0 1-1.465-.208zm-51.832-59.181a1.171 1.171 0 0 1 1.626-1.684c2.22 1.93 4.432 3.901 6.571 5.86a1.173 1.173 0 0 1-1.584 1.73 361.227 361.227 0 0 0-6.527-5.82c-.026-.029-.06-.058-.086-.086zm42.064 44.603a1.384 1.384 0 0 1-.087-.1 214.273 214.273 0 0 0-5.331-6.91 1.166 1.166 0 0 1 .184-1.646 1.165 1.165 0 0 1 1.645.18 229.28 229.28 0 0 1 5.388 6.985 1.171 1.171 0 0 1-1.799 1.491zm-29.118-32.762a1.173 1.173 0 0 1 1.67-1.644 316.295 316.295 0 0 1 6.256 6.199c.44.459.446 1.201-.018 1.658a1.17 1.17 0 0 1-1.656-.011 296.555 296.555 0 0 0-6.213-6.152c-.009-.018-.023-.032-.039-.05zm18.137 19.076-.03-.033a254.58 254.58 0 0 0-5.825-6.512 1.175 1.175 0 0 1 .067-1.657 1.166 1.166 0 0 1 1.65.063l.003.004a257.997 257.997 0 0 1 5.875 6.573c.421.49.369 1.226-.122 1.648a1.168 1.168 0 0 1-1.618-.086z" />
    </mask>
    <path
      d="M326.681 450.542a1.171 1.171 0 0 1 1.6-1.705 155.818 155.818 0 0 0 6.938 5.312 1.17 1.17 0 0 1 .26 1.634 1.174 1.174 0 0 1-1.635.263 159.926 159.926 0 0 1-7.046-5.392 1.762 1.762 0 0 1-.117-.112zm14.244 10.33a1.175 1.175 0 0 1-.122-1.436 1.174 1.174 0 0 1 1.621-.343 174.612 174.612 0 0 0 7.441 4.565c.556.325.751 1.039.428 1.599a1.173 1.173 0 0 1-1.6.43 173.955 173.955 0 0 1-7.546-4.627 1.583 1.583 0 0 1-.222-.188zm15.222 8.781a1.172 1.172 0 0 1 1.39-1.838 144.808 144.808 0 0 0 7.889 3.708c.593.257.865.946.607 1.54a1.173 1.173 0 0 1-1.541.609 142.368 142.368 0 0 1-8.015-3.771 1.043 1.043 0 0 1-.33-.248zm16.121 6.971a1.17 1.17 0 0 1 1.254-1.898c2.776.987 5.566 1.868 8.295 2.617.624.169.991.816.815 1.44-.17.624-.818.992-1.438.821a119.439 119.439 0 0 1-8.463-2.669 1.265 1.265 0 0 1-.463-.311zm16.936 4.614a1.175 1.175 0 0 1 1.079-1.95c2.883.534 5.775.933 8.589 1.184a1.17 1.17 0 1 1-.214 2.334 93.702 93.702 0 0 1-8.806-1.216 1.154 1.154 0 0 1-.648-.352zm17.462 1.528a1.173 1.173 0 0 1 .848-1.968 76.932 76.932 0 0 0 8.616-.617 1.173 1.173 0 0 1 1.313 1.01 1.179 1.179 0 0 1-1.014 1.315c-2.9.377-5.891.591-8.883.638a1.204 1.204 0 0 1-.88-.378zm17.358-2.272a1.172 1.172 0 0 1 .576-1.93 71.415 71.415 0 0 0 8.211-2.63 1.168 1.168 0 0 1 1.516.668 1.17 1.17 0 0 1-.667 1.514 72.877 72.877 0 0 1-8.485 2.717 1.185 1.185 0 0 1-1.151-.339zm16.311-6.332a1.17 1.17 0 0 1 .308-1.829 77.726 77.726 0 0 0 7.374-4.483 1.174 1.174 0 0 1 1.323 1.936 80.17 80.17 0 0 1-7.601 4.62 1.185 1.185 0 0 1-1.404-.244zm14.53-9.806a3.403 3.403 0 0 1-.057-.061 1.17 1.17 0 0 1 .177-1.646 98.152 98.152 0 0 0 6.504-5.744 1.17 1.17 0 1 1 1.627 1.68 102.823 102.823 0 0 1-6.665 5.887 1.172 1.172 0 0 1-1.586-.116zm12.555-12.257a1.175 1.175 0 0 1-.041-1.543 65.117 65.117 0 0 0 5.061-6.981 1.172 1.172 0 0 1 1.612-.375c.544.342.714 1.065.368 1.614a68.137 68.137 0 0 1-5.244 7.231 1.171 1.171 0 0 1-1.756.054zm9.219-14.878a1.175 1.175 0 0 1-.219-1.252 45.51 45.51 0 0 0 2.59-8.145 1.173 1.173 0 0 1 1.389-.902c.633.134 1.035.754.9 1.387a47.911 47.911 0 0 1-2.721 8.566 1.17 1.17 0 0 1-1.534.623 1.116 1.116 0 0 1-.405-.277zm-25.112-29.053a1.174 1.174 0 0 1 1.67-1.644c1.966 1.873 4.352 3.521 6.9 4.767a1.174 1.174 0 0 1-1.037 2.104c-2.758-1.351-5.343-3.142-7.483-5.173-.013-.021-.037-.039-.05-.054zm-4.998-7.126a1.225 1.225 0 0 1-.235-.376c-1.398-3.674-.997-7.038 1.137-9.465a1.17 1.17 0 0 1 1.65-.11 1.17 1.17 0 0 1 .103 1.652c-1.963 2.237-1.469 5.088-.71 7.087a1.167 1.167 0 0 1-1.945 1.212zm20.527 14.727a1.162 1.162 0 0 1-.299-.977c.101-.641.7-1.077 1.337-.981 2.794.43 5.608.4 8.363-.075a1.168 1.168 0 0 1 1.353.953 1.173 1.173 0 0 1-.956 1.355c-3.003.525-6.07.549-9.118.082a1.141 1.141 0 0 1-.68-.357zm13.165 4.384a1.17 1.17 0 0 1-.313-.791 36.033 36.033 0 0 0-1.009-8.42 1.17 1.17 0 0 1 2.273-.555 38.657 38.657 0 0 1 1.075 8.966 1.171 1.171 0 0 1-1.167 1.177 1.193 1.193 0 0 1-.859-.377zm-24.884-30.766a1.175 1.175 0 0 1 .775-1.967c2.998-.214 6.058.395 9.094 1.815a1.171 1.171 0 0 1-.995 2.119c-2.669-1.247-5.337-1.787-7.932-1.6a1.16 1.16 0 0 1-.942-.367zm28.731 23.464a1.172 1.172 0 0 1 .316-1.836c2.39-1.25 4.718-2.892 6.914-4.877a1.173 1.173 0 0 1 1.643.07l.01.011a1.17 1.17 0 0 1-.084 1.653c-2.346 2.118-4.835 3.875-7.401 5.216a1.169 1.169 0 0 1-1.398-.237zm-7.998-9.574a1.266 1.266 0 0 1-.175-.245c-1.365-2.551-3.037-4.849-4.951-6.803a1.17 1.17 0 0 1 .021-1.655 1.168 1.168 0 0 1 1.656.018c2.067 2.112 3.875 4.592 5.34 7.336a1.176 1.176 0 0 1-.48 1.587 1.178 1.178 0 0 1-1.411-.238zm21.06-1.972a1.17 1.17 0 0 1-.071-1.503c1.642-2.165 3.228-4.598 4.707-7.226a1.175 1.175 0 0 1 1.597-.448c.563.318.761 1.029.445 1.596-1.531 2.723-3.173 5.241-4.883 7.49a1.173 1.173 0 0 1-1.795.091zm8.688-15.227a1.173 1.173 0 0 1-.215-1.262 109.698 109.698 0 0 0 3.143-8.104 1.178 1.178 0 0 1 1.49-.729c.612.213.933.875.726 1.488a114.368 114.368 0 0 1-3.212 8.275 1.173 1.173 0 0 1-1.932.332zm5.599-16.624a1.174 1.174 0 0 1-.286-1.05 67.21 67.21 0 0 0 1.292-8.521 1.172 1.172 0 0 1 2.334.196 69.452 69.452 0 0 1-1.338 8.823 1.175 1.175 0 0 1-2.002.552zm1.524-17.433a1.161 1.161 0 0 1-.311-.753 77.26 77.26 0 0 0-.816-8.6 1.17 1.17 0 0 1 .983-1.333 1.164 1.164 0 0 1 1.331.98c.452 2.978.733 5.961.84 8.864a1.169 1.169 0 0 1-1.127 1.214 1.16 1.16 0 0 1-.9-.372zM387.256 203.17a1.175 1.175 0 0 1-.196-1.307 1.176 1.176 0 0 1 1.563-.549c2.286 1.101 4.914 2.505 7.82 4.18a1.17 1.17 0 0 1 .427 1.598c-.323.56-1.04.753-1.6.431-2.854-1.641-5.435-3.023-7.667-4.095a1.186 1.186 0 0 1-.347-.258zm123.096 131.518a1.142 1.142 0 0 1-.275-.505 98.31 98.31 0 0 0-2.529-8.291 1.168 1.168 0 0 1 .716-1.492 1.164 1.164 0 0 1 1.49.712c1 2.842 1.872 5.697 2.59 8.488a1.171 1.171 0 0 1-1.992 1.088zM402.513 211.852a1.17 1.17 0 0 1-.13-1.422 1.167 1.167 0 0 1 1.615-.364 273.746 273.746 0 0 1 7.375 4.826 1.17 1.17 0 0 1 .313 1.625 1.171 1.171 0 0 1-1.627.316 287.799 287.799 0 0 0-7.318-4.786 1.192 1.192 0 0 1-.228-.195zm102.043 106.292a1.135 1.135 0 0 1-.213-.322 131.9 131.9 0 0 0-3.779-7.831 1.17 1.17 0 0 1 2.072-1.09 133.977 133.977 0 0 1 3.85 7.973 1.172 1.172 0 0 1-1.93 1.27zm-87.489-96.478a1.17 1.17 0 0 1 1.54-1.749 347.618 347.618 0 0 1 7.101 5.207c.515.389.619 1.121.232 1.64a1.176 1.176 0 0 1-1.641.235 371.527 371.527 0 0 0-7.058-5.174 1.386 1.386 0 0 1-.174-.159zm14.028 10.55a1.167 1.167 0 0 1-.056-1.523 1.173 1.173 0 0 1 1.646-.193 353.974 353.974 0 0 1 6.846 5.538c.504.413.566 1.149.152 1.647a1.17 1.17 0 0 1-1.648.155c-2.23-1.847-4.519-3.7-6.802-5.504a.815.815 0 0 1-.138-.12zm65.347 70.382a1.39 1.39 0 0 1-.145-.193 178.293 178.293 0 0 0-4.674-7.354 1.172 1.172 0 0 1 1.945-1.305 171.588 171.588 0 0 1 4.74 7.454 1.173 1.173 0 0 1-.401 1.606 1.184 1.184 0 0 1-1.465-.208zm-51.832-59.181a1.171 1.171 0 0 1 1.626-1.684c2.22 1.93 4.432 3.901 6.571 5.86a1.173 1.173 0 0 1-1.584 1.73 361.227 361.227 0 0 0-6.527-5.82c-.026-.029-.06-.058-.086-.086zm42.064 44.603a1.384 1.384 0 0 1-.087-.1 214.273 214.273 0 0 0-5.331-6.91 1.166 1.166 0 0 1 .184-1.646 1.165 1.165 0 0 1 1.645.18 229.28 229.28 0 0 1 5.388 6.985 1.171 1.171 0 0 1-1.799 1.491zm-29.118-32.762a1.173 1.173 0 0 1 1.67-1.644 316.295 316.295 0 0 1 6.256 6.199c.44.459.446 1.201-.018 1.658a1.17 1.17 0 0 1-1.656-.011 296.555 296.555 0 0 0-6.213-6.152c-.009-.018-.023-.032-.039-.05zm18.137 19.076-.03-.033a254.58 254.58 0 0 0-5.825-6.512 1.175 1.175 0 0 1 .067-1.657 1.166 1.166 0 0 1 1.65.063l.003.004a257.997 257.997 0 0 1 5.875 6.573c.421.49.369 1.226-.122 1.648a1.168 1.168 0 0 1-1.618-.086z"
      fill="#E1E4E5"
    />
    <path
      d="M326.681 450.542a1.171 1.171 0 0 1 1.6-1.705 155.818 155.818 0 0 0 6.938 5.312 1.17 1.17 0 0 1 .26 1.634 1.174 1.174 0 0 1-1.635.263 159.926 159.926 0 0 1-7.046-5.392 1.762 1.762 0 0 1-.117-.112zm14.244 10.33a1.175 1.175 0 0 1-.122-1.436 1.174 1.174 0 0 1 1.621-.343 174.612 174.612 0 0 0 7.441 4.565c.556.325.751 1.039.428 1.599a1.173 1.173 0 0 1-1.6.43 173.955 173.955 0 0 1-7.546-4.627 1.583 1.583 0 0 1-.222-.188zm15.222 8.781a1.172 1.172 0 0 1 1.39-1.838 144.808 144.808 0 0 0 7.889 3.708c.593.257.865.946.607 1.54a1.173 1.173 0 0 1-1.541.609 142.368 142.368 0 0 1-8.015-3.771 1.043 1.043 0 0 1-.33-.248zm16.121 6.971a1.17 1.17 0 0 1 1.254-1.898c2.776.987 5.566 1.868 8.295 2.617.624.169.991.816.815 1.44-.17.624-.818.992-1.438.821a119.439 119.439 0 0 1-8.463-2.669 1.265 1.265 0 0 1-.463-.311zm16.936 4.614a1.175 1.175 0 0 1 1.079-1.95c2.883.534 5.775.933 8.589 1.184a1.17 1.17 0 1 1-.214 2.334 93.702 93.702 0 0 1-8.806-1.216 1.154 1.154 0 0 1-.648-.352zm17.462 1.528a1.173 1.173 0 0 1 .848-1.968 76.932 76.932 0 0 0 8.616-.617 1.173 1.173 0 0 1 1.313 1.01 1.179 1.179 0 0 1-1.014 1.315c-2.9.377-5.891.591-8.883.638a1.204 1.204 0 0 1-.88-.378zm17.358-2.272a1.172 1.172 0 0 1 .576-1.93 71.415 71.415 0 0 0 8.211-2.63 1.168 1.168 0 0 1 1.516.668 1.17 1.17 0 0 1-.667 1.514 72.877 72.877 0 0 1-8.485 2.717 1.185 1.185 0 0 1-1.151-.339zm16.311-6.332a1.17 1.17 0 0 1 .308-1.829 77.726 77.726 0 0 0 7.374-4.483 1.174 1.174 0 0 1 1.323 1.936 80.17 80.17 0 0 1-7.601 4.62 1.185 1.185 0 0 1-1.404-.244zm14.53-9.806a3.403 3.403 0 0 1-.057-.061 1.17 1.17 0 0 1 .177-1.646 98.152 98.152 0 0 0 6.504-5.744 1.17 1.17 0 1 1 1.627 1.68 102.823 102.823 0 0 1-6.665 5.887 1.172 1.172 0 0 1-1.586-.116zm12.555-12.257a1.175 1.175 0 0 1-.041-1.543 65.117 65.117 0 0 0 5.061-6.981 1.172 1.172 0 0 1 1.612-.375c.544.342.714 1.065.368 1.614a68.137 68.137 0 0 1-5.244 7.231 1.171 1.171 0 0 1-1.756.054zm9.219-14.878a1.175 1.175 0 0 1-.219-1.252 45.51 45.51 0 0 0 2.59-8.145 1.173 1.173 0 0 1 1.389-.902c.633.134 1.035.754.9 1.387a47.911 47.911 0 0 1-2.721 8.566 1.17 1.17 0 0 1-1.534.623 1.116 1.116 0 0 1-.405-.277zm-25.112-29.053a1.174 1.174 0 0 1 1.67-1.644c1.966 1.873 4.352 3.521 6.9 4.767a1.174 1.174 0 0 1-1.037 2.104c-2.758-1.351-5.343-3.142-7.483-5.173-.013-.021-.037-.039-.05-.054zm-4.998-7.126a1.225 1.225 0 0 1-.235-.376c-1.398-3.674-.997-7.038 1.137-9.465a1.17 1.17 0 0 1 1.65-.11 1.17 1.17 0 0 1 .103 1.652c-1.963 2.237-1.469 5.088-.71 7.087a1.167 1.167 0 0 1-1.945 1.212zm20.527 14.727a1.162 1.162 0 0 1-.299-.977c.101-.641.7-1.077 1.337-.981 2.794.43 5.608.4 8.363-.075a1.168 1.168 0 0 1 1.353.953 1.173 1.173 0 0 1-.956 1.355c-3.003.525-6.07.549-9.118.082a1.141 1.141 0 0 1-.68-.357zm13.165 4.384a1.17 1.17 0 0 1-.313-.791 36.033 36.033 0 0 0-1.009-8.42 1.17 1.17 0 0 1 2.273-.555 38.657 38.657 0 0 1 1.075 8.966 1.171 1.171 0 0 1-1.167 1.177 1.193 1.193 0 0 1-.859-.377zm-24.884-30.766a1.175 1.175 0 0 1 .775-1.967c2.998-.214 6.058.395 9.094 1.815a1.171 1.171 0 0 1-.995 2.119c-2.669-1.247-5.337-1.787-7.932-1.6a1.16 1.16 0 0 1-.942-.367zm28.731 23.464a1.172 1.172 0 0 1 .316-1.836c2.39-1.25 4.718-2.892 6.914-4.877a1.173 1.173 0 0 1 1.643.07l.01.011a1.17 1.17 0 0 1-.084 1.653c-2.346 2.118-4.835 3.875-7.401 5.216a1.169 1.169 0 0 1-1.398-.237zm-7.998-9.574a1.266 1.266 0 0 1-.175-.245c-1.365-2.551-3.037-4.849-4.951-6.803a1.17 1.17 0 0 1 .021-1.655 1.168 1.168 0 0 1 1.656.018c2.067 2.112 3.875 4.592 5.34 7.336a1.176 1.176 0 0 1-.48 1.587 1.178 1.178 0 0 1-1.411-.238zm21.06-1.972a1.17 1.17 0 0 1-.071-1.503c1.642-2.165 3.228-4.598 4.707-7.226a1.175 1.175 0 0 1 1.597-.448c.563.318.761 1.029.445 1.596-1.531 2.723-3.173 5.241-4.883 7.49a1.173 1.173 0 0 1-1.795.091zm8.688-15.227a1.173 1.173 0 0 1-.215-1.262 109.698 109.698 0 0 0 3.143-8.104 1.178 1.178 0 0 1 1.49-.729c.612.213.933.875.726 1.488a114.368 114.368 0 0 1-3.212 8.275 1.173 1.173 0 0 1-1.932.332zm5.599-16.624a1.174 1.174 0 0 1-.286-1.05 67.21 67.21 0 0 0 1.292-8.521 1.172 1.172 0 0 1 2.334.196 69.452 69.452 0 0 1-1.338 8.823 1.175 1.175 0 0 1-2.002.552zm1.524-17.433a1.161 1.161 0 0 1-.311-.753 77.26 77.26 0 0 0-.816-8.6 1.17 1.17 0 0 1 .983-1.333 1.164 1.164 0 0 1 1.331.98c.452 2.978.733 5.961.84 8.864a1.169 1.169 0 0 1-1.127 1.214 1.16 1.16 0 0 1-.9-.372zM387.256 203.17a1.175 1.175 0 0 1-.196-1.307 1.176 1.176 0 0 1 1.563-.549c2.286 1.101 4.914 2.505 7.82 4.18a1.17 1.17 0 0 1 .427 1.598c-.323.56-1.04.753-1.6.431-2.854-1.641-5.435-3.023-7.667-4.095a1.186 1.186 0 0 1-.347-.258zm123.096 131.518a1.142 1.142 0 0 1-.275-.505 98.31 98.31 0 0 0-2.529-8.291 1.168 1.168 0 0 1 .716-1.492 1.164 1.164 0 0 1 1.49.712c1 2.842 1.872 5.697 2.59 8.488a1.171 1.171 0 0 1-1.992 1.088zM402.513 211.852a1.17 1.17 0 0 1-.13-1.422 1.167 1.167 0 0 1 1.615-.364 273.746 273.746 0 0 1 7.375 4.826 1.17 1.17 0 0 1 .313 1.625 1.171 1.171 0 0 1-1.627.316 287.799 287.799 0 0 0-7.318-4.786 1.192 1.192 0 0 1-.228-.195zm102.043 106.292a1.135 1.135 0 0 1-.213-.322 131.9 131.9 0 0 0-3.779-7.831 1.17 1.17 0 0 1 2.072-1.09 133.977 133.977 0 0 1 3.85 7.973 1.172 1.172 0 0 1-1.93 1.27zm-87.489-96.478a1.17 1.17 0 0 1 1.54-1.749 347.618 347.618 0 0 1 7.101 5.207c.515.389.619 1.121.232 1.64a1.176 1.176 0 0 1-1.641.235 371.527 371.527 0 0 0-7.058-5.174 1.386 1.386 0 0 1-.174-.159zm14.028 10.55a1.167 1.167 0 0 1-.056-1.523 1.173 1.173 0 0 1 1.646-.193 353.974 353.974 0 0 1 6.846 5.538c.504.413.566 1.149.152 1.647a1.17 1.17 0 0 1-1.648.155c-2.23-1.847-4.519-3.7-6.802-5.504a.815.815 0 0 1-.138-.12zm65.347 70.382a1.39 1.39 0 0 1-.145-.193 178.293 178.293 0 0 0-4.674-7.354 1.172 1.172 0 0 1 1.945-1.305 171.588 171.588 0 0 1 4.74 7.454 1.173 1.173 0 0 1-.401 1.606 1.184 1.184 0 0 1-1.465-.208zm-51.832-59.181a1.171 1.171 0 0 1 1.626-1.684c2.22 1.93 4.432 3.901 6.571 5.86a1.173 1.173 0 0 1-1.584 1.73 361.227 361.227 0 0 0-6.527-5.82c-.026-.029-.06-.058-.086-.086zm42.064 44.603a1.384 1.384 0 0 1-.087-.1 214.273 214.273 0 0 0-5.331-6.91 1.166 1.166 0 0 1 .184-1.646 1.165 1.165 0 0 1 1.645.18 229.28 229.28 0 0 1 5.388 6.985 1.171 1.171 0 0 1-1.799 1.491zm-29.118-32.762a1.173 1.173 0 0 1 1.67-1.644 316.295 316.295 0 0 1 6.256 6.199c.44.459.446 1.201-.018 1.658a1.17 1.17 0 0 1-1.656-.011 296.555 296.555 0 0 0-6.213-6.152c-.009-.018-.023-.032-.039-.05zm18.137 19.076-.03-.033a254.58 254.58 0 0 0-5.825-6.512 1.175 1.175 0 0 1 .067-1.657 1.166 1.166 0 0 1 1.65.063l.003.004a257.997 257.997 0 0 1 5.875 6.573c.421.49.369 1.226-.122 1.648a1.168 1.168 0 0 1-1.618-.086z"
      stroke="#E1E4E5"
      strokeWidth={4}
      mask="url(#a)"
    />
    <path
      d="m361.009 167.835-6.486 12.943-71.731-31.279 78.217 18.336z"
      fill="#fff"
    />
    <path
      d="m345.494 194.317-14.067 4.216-45.382-47.68 59.449 43.464z"
      fill="#6f381e"
    />
    <path
      d="m282.792 149.499 89.313 72.628-8.683-39.068-80.63-33.56z"
      fill="#6f381e"
    />
    <path
      d="M361.01 167.836 282.794 149.5l74.183-7.109 4.033 25.445z"
      fill="#6f381e"
    />
    <path
      d="m796 417.057-70.398 70.398-21.549-9.87c-7.634-3.494-16.34-3.736-24.201-.771-7.403 2.794-18.451 5.47-32.561 4.662-27.461-1.574-49.903-10.278-49.903-10.278l43.413-43.842s-28.311-20.459-39.012-74.527a25.921 25.921 0 0 0-8.767-14.797l-25.675-21.564s-31.189-1.719-42.561-31.171c0 0-3.315-20.603 4.493-19.656 0 0 88.246 36.021 99.862 42.882 11.616 6.861 20.594 9.498 46.459 41.704 6.848 8.526 12.955 15.238 18.237 20.5a97.166 97.166 0 0 0 35.866 22.64L796 417.057z"
      fill="#F8AE9D"
    />
    <path
      d="M452.102 412.058a100.425 100.425 0 0 1-3.699 1.702l-.402-.927c1.199-.523 2.43-1.09 3.661-1.685l.44.91z"
      fill="#2D2019"
    />
    <path
      d="M388.714 341.437s-22.522 4.475-19.658 13.503c2.863 9.026 44.516 9.442 44.516 9.442l-24.858-22.945zm39.605 39.605s-22.521 4.476-19.658 13.502c2.863 9.027 44.516 9.444 44.516 9.444l-24.858-22.946zm26.776 26.776s-22.521 4.476-19.658 13.502c2.863 9.026 44.516 9.443 44.516 9.443l-24.858-22.945z"
      fill="#F8AE9D"
    />
    <path
      d="m378.892 310.826 81.858-81.858c6.096-6.096 15.976-6.102 22.069-.009l136.109 136.109 31.053 31.053c6.141 6.141 6.035 16.024-.009 22.068l-81.858 81.859c-6.095 6.094-15.975 6.103-22.069.009L409.934 363.946l-31.053-31.053c-6.146-6.147-6.027-16.03.011-22.067z"
      fill="#2D2019"
    />
    <path
      d="m388.246 331.694 93.157-93.157 155.633 155.634-93.156 93.157-155.634-155.634z"
      fill="#fff"
    />
    <path
      d="M584.946 327.377s1.527 2.65 1.284 4.952l-18.883-15.86s-22.944-1.265-36.648-20.207c-4.691-6.486-7.052-14.41-6.535-22.399.295-4.563 1.538-8.656 5.117-8.22 0 0 41.498 16.938 71.325 29.798l-15.66 31.936z"
      fill="#F8AE9D"
    />
    <circle cx={508} cy={359} r={49} fill="#6f381e" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m533.821 362.863-15.194 7.334-5.076 14.344c-1.395 3.945-6.855 4.242-8.673.475l-18.719-38.785c-1.821-3.774 1.829-7.869 5.79-6.487l41.381 14.441c3.955 1.38 4.269 6.855.491 8.678z"
      fill="#fff"
    />
    <path
      clipRule="evenodd"
      d="M451.6 127.376h54.816a6.095 6.095 0 0 1 6.092 6.092v35.971a6.092 6.092 0 0 1-6.092 6.091H451.6a6.088 6.088 0 0 1-6.091-6.091v-35.971a6.094 6.094 0 0 1 6.091-6.092z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m445.958 131.551 27.765 19.86a8.982 8.982 0 0 0 10.437.009l27.895-19.896"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M569.123 189.982h54.816a6.094 6.094 0 0 1 6.092 6.092v35.97a6.091 6.091 0 0 1-6.092 6.092h-54.816c-3.362.005-6.091-2.725-6.091-6.092v-35.97a6.094 6.094 0 0 1 6.091-6.092z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m563.481 194.157 27.765 19.86a8.982 8.982 0 0 0 10.437.009l27.895-19.896"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M287.092 285h54.816a6.094 6.094 0 0 1 6.091 6.092v35.971a6.091 6.091 0 0 1-6.091 6.091h-54.816a6.088 6.088 0 0 1-6.092-6.091v-35.971a6.094 6.094 0 0 1 6.092-6.092z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m281.449 289.175 27.765 19.859a8.98 8.98 0 0 0 10.437.009l27.895-19.895"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M201.177 332.767h44.931a4.996 4.996 0 0 1 4.993 4.993v29.485a4.993 4.993 0 0 1-4.993 4.993h-44.931a4.991 4.991 0 0 1-4.994-4.993V337.76a4.996 4.996 0 0 1 4.994-4.993z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m196.552 336.19 22.758 16.278a7.362 7.362 0 0 0 8.555.007l22.865-16.308"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M281.456 400.865h35.945c2.204 0 3.994 1.743 3.994 3.89v22.973c0 2.15-1.79 3.891-3.994 3.891h-35.945c-2.205.002-3.995-1.741-3.995-3.891v-22.973c0-2.147 1.79-3.89 3.995-3.89z"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m277.461 403.079 18.455 13.151a5.987 5.987 0 0 0 6.938.006l18.541-13.174"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M618.197 272.462c-10.275 2.434-21.142-6.279-21.142-6.279s5.799-12.656 16.077-15.082c10.275-2.434 21.139 6.272 21.139 6.272s-5.8 12.655-16.074 15.089z"
      fill="url(#b)"
    />
    <path
      d="M375.376 431.373c9.107 6.273 23.02 1.888 23.02 1.888s-.862-14.554-9.975-20.821c-9.107-6.272-23.014-1.894-23.014-1.894s.862 14.554 9.969 20.827z"
      fill="url(#c)"
    />
    <path
      d="M140.402 313.489c9.669 9.842 27.751 7.767 27.751 7.767s2.393-18.032-7.286-27.867c-9.669-9.842-27.742-7.773-27.742-7.773s-2.393 18.032 7.277 27.873z"
      fill="url(#d)"
    />
    <circle
      cx={719.5}
      cy={178.5}
      r={7.5}
      transform="rotate(180 719.5 178.5)"
      fill="#6f381e"
    />
    <ellipse
      cx={237.212}
      cy={459.914}
      rx={20.159}
      ry={19.509}
      transform="rotate(180 237.212 459.914)"
      fill="#6f381e"
    />
    <circle
      r={14.681}
      transform="matrix(-1 0 0 1 236.721 163.28)"
      fill="#6f381e"
    />
    <circle
      r={13.656}
      transform="matrix(-1 0 0 1 590.967 145.426)"
      fill="#6f381e"
    />
    <circle
      r={12.282}
      transform="matrix(-1 0 0 1 479.757 499.916)"
      fill="#E1E4E5"
    />
    <circle
      r={12.919}
      transform="matrix(-1 0 0 1 138.808 366.555)"
      fill="#E1E4E5"
    />
    <circle
      r={6.365}
      transform="matrix(-1 0 0 1 708.887 268.838)"
      fill="#E1E4E5"
    />
    <circle
      r={9.715}
      transform="matrix(-1 0 0 1 639.746 109.633)"
      fill="#E1E4E5"
    />
    <circle
      r={6.355}
      transform="scale(1 -1) rotate(-75 20.72 -372.105)"
      fill="#E1E4E5"
    />
    <circle
      r={6.041}
      transform="matrix(-1 0 0 1 158.29 163.072)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={6.503}
      ry={5.202}
      transform="matrix(-1 0 0 1 766.139 369.822)"
      fill="#E1E4E5"
    />
    <circle
      r={13.226}
      transform="scale(1 -1) rotate(-75 226.59 -392.714)"
      fill="#E1E4E5"
    />
    <path
      d="M660.321 148.245h.17c1.008 14.273 11.623 14.493 11.623 14.493s-11.706.229-11.706 16.721c0-16.492-11.705-16.721-11.705-16.721s10.611-.22 11.618-14.493zM285.597 45h.199c1.182 17.076 13.632 17.34 13.632 17.34s-13.729.272-13.729 20.004c0-19.731-13.73-20.005-13.73-20.005s12.446-.263 13.628-17.339zm127.986 97.753h.143c.851 12.054 9.816 12.239 9.816 12.239s-9.886.193-9.886 14.121c0-13.928-9.885-14.121-9.885-14.121s8.961-.185 9.812-12.239zm124.113-32.951h.144c.851 12.054 9.815 12.24 9.815 12.24s-9.885.193-9.885 14.121c0-13.928-9.885-14.121-9.885-14.121s8.96-.186 9.811-12.24z"
      fill="#E1E4E5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M649 269.028c0-32.6 26.428-59.028 59.028-59.028h50.7c32.6 0 59.028 26.428 59.028 59.028 0 32.6-26.428 59.027-59.028 59.027h-16.961l-26.588 21.366c-1.968 1.582-4.892.181-4.892-2.344v-19.022h-2.259c-32.6 0-59.028-26.427-59.028-59.027z"
      fill="#6f381e"
    />
    <rect
      width={43.623}
      height={7.036}
      rx={3.518}
      transform="matrix(-1 0 0 1 774.012 247.609)"
      fill="#fff"
    />
    <rect
      width={66.842}
      height={7.036}
      rx={3.518}
      transform="matrix(-1 0 0 1 774.012 265.902)"
      fill="#fff"
    />
    <rect
      width={91.468}
      height={7.036}
      rx={3.518}
      transform="matrix(-1 0 0 1 774.012 284.196)"
      fill="#fff"
    />
    <rect
      x={176}
      y={207}
      width={90.04}
      height={90.04}
      rx={45.02}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M241.481 270.905v3.011c0 1.662-1.331 3.01-2.97 3.01h-35.649c-1.64 0-2.971-1.348-2.971-3.01v-3.059c0-9.109 10.273-15.027 20.795-15.027 10.523 0 20.795 5.921 20.795 15.027m-13.339-41.473c4.12 4.119 4.12 10.798 0 14.917-4.119 4.119-10.798 4.119-14.917 0-4.12-4.119-4.12-10.798 0-14.917 4.119-4.12 10.798-4.12 14.917 0z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="b"
        x1={579.505}
        y1={278.514}
        x2={669.45}
        y2={236.021}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={410.851}
        y1={451.955}
        x2={339.164}
        y2={376.362}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={178.981}
        y1={347.106}
        x2={109.077}
        y2={237.524}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg135);
const Memo = memo(ForwardRef);
export default Memo;