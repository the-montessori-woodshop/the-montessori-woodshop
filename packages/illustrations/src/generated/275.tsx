import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg275 = (
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
      d="M540.534 181.532c-2.524 4.505-8.052 5.124-16.909 4.268-6.66-.645-12.734-1.144-19.396-4.776-4.662-2.54-8.353-5.977-11.046-9.315-2.919-3.616-6.993-7.743-4.996-11.843 2.745-5.632 18.617-10.376 34.03-2.618 16.932 8.524 20.786 19.882 18.317 24.284z"
      fill="url(#a)"
    />
    <path
      d="M832.035 259.009c-17.981 8.919-41.847-2.55-41.847-2.55s5.304-25.925 23.295-34.833c17.981-8.919 41.837 2.537 41.837 2.537s-5.304 25.926-23.285 34.846z"
      fill="url(#b)"
    />
    <path
      d="M303.443 437.645c12.68 7.599 30.871.574 30.871.574s-2.378-19.344-15.066-26.935c-12.68-7.599-30.864-.583-30.864-.583s2.379 19.344 15.059 26.944z"
      fill="url(#c)"
    />
    <circle
      r={8.124}
      transform="matrix(-1 0 0 1 699.999 533.803)"
      fill="#E1E4E5"
    />
    <circle
      r={11.735}
      transform="matrix(-1 0 0 1 97.333 418.631)"
      fill="#E1E4E5"
    />
    <circle
      r={8.931}
      transform="matrix(-1 0 0 1 664.672 350.046)"
      fill="#E1E4E5"
    />
    <circle
      r={9.93}
      transform="matrix(-1 0 0 1 595.486 201.468)"
      fill="#E1E4E5"
    />
    <circle
      r={8.917}
      transform="matrix(0 1 1 0 44.917 231.866)"
      fill="#E1E4E5"
    />
    <circle
      r={11.862}
      transform="matrix(-1 0 0 1 234.473 67.993)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.125}
      ry={7.3}
      transform="matrix(-1 0 0 1 594.681 482.857)"
      fill="#E1E4E5"
    />
    <circle
      r={18.558}
      transform="scale(1 -1) rotate(-75 254.093 -436.011)"
      fill="#E1E4E5"
    />
    <path
      d="M164.841 171.667h.13c.77 10.906 8.881 11.073 8.881 11.073s-8.944.175-8.944 12.777c0-12.602-8.944-12.777-8.944-12.777s8.107-.167 8.877-11.073zm49.532 278.07h.125c.739 10.874 8.526 11.041 8.526 11.041s-8.587.174-8.587 12.739c0-12.565-8.587-12.739-8.587-12.739s7.784-.167 8.523-11.041zm23.03-341.585a1.987 1.987 0 0 1 .274 3.957c-4.679.656-9.59 1.496-14.608 2.493a1.983 1.983 0 0 1-2.331-1.563 1.99 1.99 0 0 1 1.559-2.335 270.768 270.768 0 0 1 14.832-2.535c.092-.009.183-.017.274-.017zm-29.275 5.785a1.99 1.99 0 0 1 1.925 1.505 1.99 1.99 0 0 1-1.443 2.41 296.785 296.785 0 0 0-14.26 3.982 1.993 1.993 0 0 1-2.481-1.314 1.99 1.99 0 0 1 1.311-2.485 295.882 295.882 0 0 1 14.459-4.04c.166-.033.332-.058.489-.058zm-28.478 8.786c.805 0 1.568.499 1.858 1.297a1.983 1.983 0 0 1-1.178 2.551 245.522 245.522 0 0 0-13.712 5.528 1.982 1.982 0 0 1-2.613-1.022 1.989 1.989 0 0 1 1.02-2.619 241.07 241.07 0 0 1 13.936-5.61c.224-.092.457-.125.689-.125zm-27.267 11.994c.713 0 1.41.391 1.758 1.072a1.985 1.985 0 0 1-.846 2.677 201.69 201.69 0 0 0-12.825 7.29 1.973 1.973 0 0 1-2.729-.649 1.984 1.984 0 0 1 .639-2.734 203.437 203.437 0 0 1 13.082-7.44c.298-.141.614-.216.921-.216zm-25.277 15.727c.606 0 1.203.274 1.593.806a1.994 1.994 0 0 1-.415 2.784 156.72 156.72 0 0 0-11.381 9.31 1.988 1.988 0 0 1-2.804-.15 1.997 1.997 0 0 1 .149-2.809c3.65-3.292 7.574-6.5 11.672-9.543.365-.274.78-.398 1.186-.398zm-22.049 19.94c.472 0 .945.166 1.327.515a1.99 1.99 0 0 1 .141 2.81 130.38 130.38 0 0 0-9.175 11.421 1.988 1.988 0 0 1-2.77.465 1.996 1.996 0 0 1-.465-2.776 133.936 133.936 0 0 1 9.457-11.778 2.036 2.036 0 0 1 1.485-.657zM87.852 194.58c.323 0 .647.075.945.241a1.988 1.988 0 0 1 .788 2.702 120.892 120.892 0 0 0-6.205 13.241 1.984 1.984 0 1 1-3.691-1.463 123.718 123.718 0 0 1 6.412-13.682 2.011 2.011 0 0 1 1.75-1.039zm-10.95 27.58a1.985 1.985 0 0 1 1.916 2.493 132.209 132.209 0 0 0-2.937 14.338 1.976 1.976 0 0 1-2.256 1.671 1.99 1.99 0 0 1-1.676-2.261c.747-5.02 1.759-9.991 3.028-14.779a2.012 2.012 0 0 1 1.925-1.462zm-4.58 29.374h.141a1.984 1.984 0 0 1 1.842 2.12 167.432 167.432 0 0 0-.398 11.404c0 1.114.008 2.227.033 3.308a1.985 1.985 0 0 1-1.94 2.028 1.985 1.985 0 0 1-2.024-1.945 153.241 153.241 0 0 1-.033-3.399c0-3.791.14-7.714.406-11.679a1.99 1.99 0 0 1 1.975-1.837zm.747 29.749c.979 0 1.833.731 1.966 1.729.656 4.979 1.61 9.808 2.837 14.346a1.987 1.987 0 0 1-1.393 2.436 1.984 1.984 0 0 1-2.431-1.405c-1.27-4.713-2.256-9.708-2.937-14.862a1.984 1.984 0 0 1 1.958-2.244zm7.856 28.626c.755 0 1.477.441 1.808 1.172 2.033 4.514 4.43 8.761 7.135 12.618a1.99 1.99 0 0 1-.482 2.768 1.98 1.98 0 0 1-2.762-.482c-2.845-4.056-5.367-8.52-7.507-13.266a1.986 1.986 0 0 1 .995-2.627c.266-.124.54-.183.813-.183zm65.087 2.311c1.037 0 1.916.815 1.974 1.862a1.989 1.989 0 0 1-1.858 2.111c-4.596.283-9.399 1.347-13.887 3.076a1.983 1.983 0 0 1-2.563-1.147 1.99 1.99 0 0 1 1.144-2.569c4.862-1.87 10.071-3.017 15.065-3.333.042.008.091 0 .125 0zm14.625 2.012c.248 0 .497.05.738.141 6.18 2.502 9.896 6.882 10.452 12.335a1.986 1.986 0 0 1-1.767 2.178 1.985 1.985 0 0 1-2.173-1.779c-.514-5.02-4.629-7.697-7.989-9.06a1.98 1.98 0 0 1 .739-3.815zm-41.992 8.519c.589 0 1.169.258 1.559.757.68.864.531 2.111-.323 2.793a43.92 43.92 0 0 0-9.557 10.481 1.98 1.98 0 0 1-2.746.582 1.989 1.989 0 0 1-.58-2.751c2.812-4.339 6.321-8.179 10.419-11.429a1.943 1.943 0 0 1 1.228-.433zm-20.64 11.305c.482 0 .963.174 1.344.523 3.576 3.3 7.491 6.151 11.631 8.462a1.984 1.984 0 0 1-1.933 3.466c-4.413-2.468-8.578-5.502-12.385-9.01a1.988 1.988 0 0 1-.117-2.809c.399-.416.93-.632 1.46-.632zm66.954 4.571c.439 0 .879.142 1.244.441.854.69.987 1.937.307 2.793-3.194 3.973-7.483 7.073-12.75 9.21a1.98 1.98 0 0 1-2.58-1.098 1.985 1.985 0 0 1 1.095-2.585c4.629-1.878 8.378-4.571 11.141-8.012a1.964 1.964 0 0 1 1.543-.749zm-62.316 8.637c.174 0 .348.025.522.066a1.986 1.986 0 0 1 1.394 2.444c-1.203 4.414-1.85 9.201-1.916 14.222a1.99 1.99 0 0 1-1.983 1.961h-.025a1.984 1.984 0 0 1-1.958-2.011c.075-5.361.764-10.482 2.058-15.219a1.98 1.98 0 0 1 1.908-1.463zm21.128 1.105c.166 0 .34.025.506.067 4.745 1.246 9.532 1.82 14.169 1.695a1.986 1.986 0 0 1 2.033 1.937 1.98 1.98 0 0 1-1.933 2.036c-5.011.133-10.179-.482-15.281-1.828a1.992 1.992 0 0 1-1.418-2.427 1.999 1.999 0 0 1 1.924-1.48zm-21.85 28.452c.946 0 1.783.682 1.949 1.646.797 4.538 1.991 9.318 3.551 14.188a1.994 1.994 0 0 1-1.286 2.502 1.989 1.989 0 0 1-2.497-1.288c-1.618-5.045-2.854-9.991-3.675-14.712a1.988 1.988 0 0 1 1.61-2.303c.116-.025.232-.033.348-.033zm8.901 28.369a1.99 1.99 0 0 1 1.817 1.189c1.875 4.297 4.04 8.76 6.445 13.257.515.973.15 2.17-.813 2.693a1.99 1.99 0 0 1-2.687-.814c-2.448-4.597-4.662-9.143-6.579-13.54a1.99 1.99 0 0 1 1.021-2.619c.257-.108.531-.166.796-.166zm14.202 26.141c.63 0 1.244.3 1.634.856a114.178 114.178 0 0 0 9.1 11.438 1.988 1.988 0 0 1-.132 2.809 1.98 1.98 0 0 1-2.804-.133 117.898 117.898 0 0 1-9.424-11.844 1.992 1.992 0 0 1 1.626-3.126zm19.909 22.01c.456 0 .921.158 1.294.483a131.068 131.068 0 0 0 11.631 8.91 1.984 1.984 0 0 1 .522 2.76 1.974 1.974 0 0 1-2.754.523 134.085 134.085 0 0 1-11.987-9.184 1.983 1.983 0 0 1-.207-2.802c.39-.457.945-.69 1.501-.69zm330.037 15.544c.797 0 1.543.482 1.85 1.263a1.996 1.996 0 0 1-1.12 2.577c-4.007 1.571-8.785 3.217-14.218 4.896a1.986 1.986 0 0 1-2.481-1.313 1.991 1.991 0 0 1 1.311-2.486c5.334-1.654 10.029-3.266 13.936-4.804.233-.092.482-.133.722-.133zm-305.507 1.238c.315 0 .647.075.946.241a166.76 166.76 0 0 0 13.223 6.426 1.98 1.98 0 0 1 1.028 2.61 1.973 1.973 0 0 1-2.604 1.03 174.796 174.796 0 0 1-13.539-6.574 1.988 1.988 0 0 1 .946-3.733zm277.112 7.706c.879 0 1.684.59 1.916 1.479a1.977 1.977 0 0 1-1.41 2.427 469.849 469.849 0 0 1-14.509 3.599 1.984 1.984 0 0 1-2.381-1.487 1.984 1.984 0 0 1 1.485-2.386 485.974 485.974 0 0 0 14.393-3.574 2.08 2.08 0 0 1 .506-.058zm-249.861 4.181c.215 0 .431.033.647.108a225.11 225.11 0 0 0 14.094 4.339 1.987 1.987 0 0 1 1.394 2.435 1.982 1.982 0 0 1-2.431 1.396 227.331 227.331 0 0 1-14.351-4.413 1.987 1.987 0 0 1 .647-3.865zm220.868 2.585c.921 0 1.75.648 1.941 1.587a1.989 1.989 0 0 1-1.543 2.344 587.999 587.999 0 0 1-14.666 2.818 1.992 1.992 0 0 1-2.307-1.604 1.996 1.996 0 0 1 1.601-2.311c4.886-.881 9.789-1.82 14.576-2.801.132-.025.265-.033.398-.033zm-29.3 5.261a1.98 1.98 0 0 1 1.958 1.687 1.99 1.99 0 0 1-1.659 2.27c-4.911.764-9.88 1.479-14.783 2.119a1.971 1.971 0 0 1-2.223-1.712 1.986 1.986 0 0 1 1.709-2.228c4.869-.64 9.813-1.346 14.691-2.103.108-.025.208-.033.307-.033zm-162.882.008c.132 0 .273.017.406.042 4.695.989 9.59 1.887 14.534 2.676a1.99 1.99 0 0 1 1.651 2.27 1.985 1.985 0 0 1-2.273 1.654 290.53 290.53 0 0 1-14.733-2.71 1.99 1.99 0 0 1-1.535-2.352 2.008 2.008 0 0 1 1.95-1.58zm133.367 3.866c1.003 0 1.858.756 1.974 1.778a1.986 1.986 0 0 1-1.759 2.186c-4.96.532-9.963 1.006-14.865 1.405a1.988 1.988 0 0 1-2.14-1.82 1.985 1.985 0 0 1 1.816-2.145 615.8 615.8 0 0 0 14.766-1.396c.067 0 .141-.008.208-.008zm-103.976.814c.074 0 .149 0 .224.008 4.786.541 9.747.99 14.741 1.347a1.978 1.978 0 0 1 1.833 2.128 1.978 1.978 0 0 1-2.124 1.837 389.763 389.763 0 0 1-14.898-1.363 1.985 1.985 0 0 1 .224-3.957zm74.319 1.613a1.988 1.988 0 0 1 .116 3.973 543.96 543.96 0 0 1-14.923.623 2.008 2.008 0 0 1-2.041-1.937 1.985 1.985 0 0 1 1.925-2.044c4.861-.133 9.846-.341 14.815-.624a.411.411 0 0 0 .108.009zm-44.638.532h.075c4.836.174 9.822.266 14.815.274 1.095 0 1.983.898 1.983 1.995a1.978 1.978 0 0 1-1.983 1.978h-.008a438.83 438.83 0 0 1-14.948-.283 1.978 1.978 0 0 1-1.908-2.053 1.977 1.977 0 0 1 1.974-1.911zm342.801 4.247a1.989 1.989 0 0 1-.273-3.957 262.536 262.536 0 0 0 14.608-2.493 1.984 1.984 0 0 1 2.331 1.562 1.99 1.99 0 0 1-1.56 2.336 270.605 270.605 0 0 1-14.832 2.535 2.78 2.78 0 0 1-.274.017zm29.275-5.785a1.988 1.988 0 0 1-.481-3.915 297.11 297.11 0 0 0 14.26-3.982 1.99 1.99 0 0 1 2.48 1.314 1.99 1.99 0 0 1-1.31 2.485 296.51 296.51 0 0 1-14.459 4.04 2.555 2.555 0 0 1-.49.058zm28.479-8.786a1.985 1.985 0 0 1-.681-3.849 245.095 245.095 0 0 0 13.713-5.527 1.982 1.982 0 0 1 2.613 1.022 1.99 1.99 0 0 1-1.02 2.619 240.815 240.815 0 0 1-13.937 5.61 1.79 1.79 0 0 1-.688.125zm27.267-11.994c-.713 0-1.41-.391-1.759-1.073a1.984 1.984 0 0 1 .847-2.676 201.663 201.663 0 0 0 12.824-7.29 1.973 1.973 0 0 1 2.73.649c.58.931.29 2.161-.639 2.734a203.437 203.437 0 0 1-13.082 7.44 2.17 2.17 0 0 1-.921.216zm25.277-15.727a1.992 1.992 0 0 1-1.178-3.59 156.935 156.935 0 0 0 11.381-9.31 1.988 1.988 0 0 1 2.804.15c.73.814.664 2.069-.149 2.809a158.87 158.87 0 0 1-11.672 9.542c-.365.275-.78.399-1.186.399zm22.049-19.94a1.95 1.95 0 0 1-1.327-.515 1.99 1.99 0 0 1-.141-2.81 130.399 130.399 0 0 0 9.175-11.421 1.987 1.987 0 1 1 3.235 2.311 134.007 134.007 0 0 1-9.457 11.778 2.043 2.043 0 0 1-1.485.657zm17.205-24.196c-.324 0-.647-.075-.946-.241a1.988 1.988 0 0 1-.788-2.702 120.855 120.855 0 0 0 6.205-13.241 1.985 1.985 0 1 1 3.692 1.463 123.685 123.685 0 0 1-6.413 13.682 2.01 2.01 0 0 1-1.75 1.039zm10.95-27.58a1.985 1.985 0 0 1-1.916-2.493 132.208 132.208 0 0 0 2.936-14.338 1.976 1.976 0 0 1 2.257-1.671 1.99 1.99 0 0 1 1.675 2.261 135.761 135.761 0 0 1-3.027 14.778 2.012 2.012 0 0 1-1.925 1.463zm4.579-29.374h-.141a1.984 1.984 0 0 1-1.842-2.12c.266-3.873.399-7.705.399-11.404 0-1.114-.009-2.228-.034-3.308a1.986 1.986 0 0 1 1.942-2.028 1.985 1.985 0 0 1 2.024 1.945c.025 1.114.033 2.261.033 3.399 0 3.791-.141 7.714-.407 11.679a1.989 1.989 0 0 1-1.974 1.837zm-.747-29.749a1.993 1.993 0 0 1-1.966-1.729c-.655-4.979-1.609-9.808-2.837-14.346a1.987 1.987 0 0 1 1.394-2.436 1.985 1.985 0 0 1 2.431 1.405c1.269 4.713 2.256 9.708 2.936 14.862a1.984 1.984 0 0 1-1.958 2.244zm-7.855-28.627c-.755 0-1.477-.44-1.809-1.172-2.032-4.513-4.43-8.76-7.134-12.617a1.989 1.989 0 0 1 .481-2.768 1.98 1.98 0 0 1 2.763.482c2.845 4.056 5.367 8.52 7.507 13.266a1.987 1.987 0 0 1-.995 2.627 1.91 1.91 0 0 1-.813.182zm-65.087-2.31a1.981 1.981 0 0 1-1.974-1.862 1.988 1.988 0 0 1 1.858-2.111c4.596-.283 9.399-1.347 13.887-3.076a1.982 1.982 0 0 1 2.563 1.147 1.989 1.989 0 0 1-1.145 2.569c-4.861 1.87-10.071 3.017-15.065 3.333-.041-.009-.091 0-.124 0zm-14.625-2.012c-.249 0-.498-.05-.738-.141-6.18-2.502-9.897-6.882-10.453-12.335-.107-1.089.681-2.07 1.767-2.178a1.985 1.985 0 0 1 2.174 1.779c.514 5.02 4.629 7.697 7.988 9.06a1.977 1.977 0 0 1-.738 3.815zm41.992-8.52a1.97 1.97 0 0 1-1.56-.756 1.995 1.995 0 0 1 .324-2.793 43.935 43.935 0 0 0 9.556-10.481 1.98 1.98 0 0 1 2.746-.582 1.989 1.989 0 0 1 .581 2.751c-2.812 4.339-6.321 8.179-10.419 11.429a1.944 1.944 0 0 1-1.228.432zm20.639-11.304c-.481 0-.962-.174-1.344-.524a61.186 61.186 0 0 0-11.63-8.461 1.984 1.984 0 0 1 1.933-3.466c4.413 2.468 8.577 5.502 12.385 9.01.805.74.863 2.003.116 2.809a2.022 2.022 0 0 1-1.46.632zm-66.953-4.572c-.44 0-.879-.141-1.244-.44a1.994 1.994 0 0 1-.307-2.793c3.194-3.973 7.482-7.073 12.75-9.21a1.98 1.98 0 0 1 2.58 1.098 1.985 1.985 0 0 1-1.095 2.585c-4.629 1.878-8.379 4.571-11.141 8.012-.39.491-.962.748-1.543.748zm62.316-8.636c-.174 0-.348-.025-.523-.066a1.986 1.986 0 0 1-1.393-2.444c1.203-4.414 1.85-9.201 1.916-14.222a1.99 1.99 0 0 1 1.983-1.961h.024a1.984 1.984 0 0 1 1.958 2.011c-.074 5.361-.763 10.482-2.057 15.219a1.983 1.983 0 0 1-1.908 1.463zm-21.129-1.105c-.166 0-.34-.025-.506-.067-4.745-1.247-9.531-1.82-14.168-1.695a1.986 1.986 0 0 1-2.033-1.937 1.98 1.98 0 0 1 1.933-2.036c5.01-.133 10.179.482 15.28 1.828a1.993 1.993 0 0 1 1.419 2.427 2 2 0 0 1-1.925 1.48zm21.851-28.452a1.983 1.983 0 0 1-1.95-1.646c-.796-4.538-1.991-9.318-3.55-14.189a1.994 1.994 0 0 1 1.286-2.502 1.989 1.989 0 0 1 2.496 1.289c1.618 5.045 2.854 9.991 3.675 14.712a1.988 1.988 0 0 1-1.957 2.336zm-8.901-28.369a1.987 1.987 0 0 1-1.817-1.189 185.47 185.47 0 0 0-6.446-13.257 1.999 1.999 0 0 1 .813-2.693 1.99 1.99 0 0 1 2.688.814c2.447 4.597 4.662 9.143 6.578 13.54a1.989 1.989 0 0 1-1.02 2.619 2.073 2.073 0 0 1-.796.166zm-14.202-26.141a1.99 1.99 0 0 1-1.635-.857 113.995 113.995 0 0 0-9.1-11.437 1.989 1.989 0 0 1 .133-2.809 1.98 1.98 0 0 1 2.804.133c3.393 3.74 6.562 7.73 9.424 11.844a1.993 1.993 0 0 1-1.626 3.126zm-19.91-22.011c-.456 0-.92-.158-1.294-.482a131.052 131.052 0 0 0-11.63-8.91 1.984 1.984 0 0 1-.523-2.76 1.975 1.975 0 0 1 2.755-.523 134.085 134.085 0 0 1 11.987 9.184c.829.715.929 1.97.207 2.802-.39.457-.946.689-1.502.689zm-330.037-15.543a1.987 1.987 0 0 1-1.849-1.263 1.995 1.995 0 0 1 1.119-2.577c4.007-1.571 8.785-3.217 14.219-4.896a1.985 1.985 0 0 1 2.48 1.313 1.99 1.99 0 0 1-1.31 2.486c-5.334 1.654-10.03 3.266-13.937 4.804a1.989 1.989 0 0 1-.722.133zm305.508-1.239c-.316 0-.647-.074-.946-.241a167.102 167.102 0 0 0-13.223-6.425 1.98 1.98 0 0 1-1.029-2.61 1.973 1.973 0 0 1 2.605-1.03 174.772 174.772 0 0 1 13.538 6.574 1.988 1.988 0 0 1-.945 3.732zm-277.112-7.705c-.879 0-1.684-.59-1.916-1.479a1.977 1.977 0 0 1 1.41-2.427 469.088 469.088 0 0 1 14.509-3.6 1.985 1.985 0 0 1 2.381 1.488 1.985 1.985 0 0 1-1.485 2.386 485.198 485.198 0 0 0-14.393 3.574 2.08 2.08 0 0 1-.506.058zm249.861-4.181c-.216 0-.432-.033-.647-.108a225.11 225.11 0 0 0-14.094-4.339 1.987 1.987 0 0 1-1.394-2.435 1.982 1.982 0 0 1 2.431-1.396 227.331 227.331 0 0 1 14.351 4.413 1.988 1.988 0 0 1-.647 3.865zm-220.868-2.585a1.984 1.984 0 0 1-1.941-1.587 1.988 1.988 0 0 1 1.543-2.344 587.999 587.999 0 0 1 14.666-2.818 1.992 1.992 0 0 1 2.306 1.604 1.994 1.994 0 0 1-1.601 2.311c-4.886.881-9.789 1.82-14.575 2.801a2.146 2.146 0 0 1-.398.033zm29.3-5.261a1.979 1.979 0 0 1-1.958-1.688 1.989 1.989 0 0 1 1.659-2.269c4.911-.764 9.88-1.479 14.782-2.119a1.972 1.972 0 0 1 2.224 1.712 1.986 1.986 0 0 1-1.709 2.228c-4.87.64-9.814 1.346-14.692 2.103a1.376 1.376 0 0 1-.306.033zm162.882-.009c-.133 0-.274-.016-.407-.041a302.283 302.283 0 0 0-14.533-2.677 1.987 1.987 0 0 1 .622-3.923c5.01.79 9.971 1.704 14.733 2.71a1.989 1.989 0 0 1 1.534 2.352 2.007 2.007 0 0 1-1.949 1.579zm-133.367-3.865a1.992 1.992 0 0 1-1.974-1.778 1.985 1.985 0 0 1 1.758-2.186 585.463 585.463 0 0 1 14.866-1.405 1.988 1.988 0 0 1 .323 3.965c-4.869.399-9.838.872-14.766 1.396-.066 0-.141.008-.207.008zm103.976-.814c-.075 0-.149 0-.224-.009-4.787-.54-9.747-.989-14.741-1.346a1.978 1.978 0 0 1-1.833-2.128 1.976 1.976 0 0 1 2.123-1.837c5.044.366 10.054.823 14.899 1.363a1.984 1.984 0 0 1-.224 3.957zm-74.32-1.613a1.988 1.988 0 0 1-.116-3.973c5.002-.274 10.021-.49 14.924-.623a2.009 2.009 0 0 1 2.041 1.936 1.986 1.986 0 0 1-1.925 2.045c-4.861.133-9.847.341-14.816.624-.033-.009-.066-.009-.108-.009zm44.639-.532h-.075a433.393 433.393 0 0 0-14.816-.274 1.991 1.991 0 0 1-1.982-1.995c0-1.097.887-1.978 1.982-1.978h.008c5.036.008 10.063.108 14.949.282a1.98 1.98 0 0 1 1.908 2.054 1.979 1.979 0 0 1-1.974 1.911z"
      fill="#E1E4E5"
    />
    <rect
      x={263.323}
      y={64.047}
      width={123.964}
      height={123.964}
      rx={61.982}
      fill="#6f381e"
    />
    <path
      d="m345.677 115.194-27.09 26.873-16.254-16.124"
      stroke="#fff"
      strokeWidth={10.287}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={150}
      y={255}
      width={84.016}
      height={84.016}
      rx={42.008}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M211.098 314.631v2.809c0 1.55-1.242 2.809-2.772 2.809h-33.264c-1.53 0-2.772-1.259-2.772-2.809v-2.854c0-8.5 9.586-14.023 19.404-14.023s19.404 5.526 19.404 14.023m-12.444-38.699c3.844 3.844 3.844 10.076 0 13.92-3.844 3.844-10.076 3.844-13.92 0-3.843-3.844-3.843-10.076 0-13.92 3.844-3.844 10.076-3.844 13.92 0z"
      fill="#fff"
    />
    <rect
      x={675}
      y={103}
      width={84.016}
      height={84.016}
      rx={42.008}
      fill="#6f381e"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M736.098 162.631v2.809c0 1.55-1.242 2.809-2.772 2.809h-33.264c-1.53 0-2.772-1.259-2.772-2.809v-2.854c0-8.5 9.586-14.023 19.404-14.023s19.404 5.526 19.404 14.023m-12.444-38.699c3.844 3.844 3.844 10.076 0 13.919-3.844 3.844-10.076 3.844-13.92 0-3.843-3.843-3.843-10.075 0-13.919 3.844-3.844 10.076-3.844 13.92 0z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M647.889 456.504c0-35.622-28.877-64.5-64.499-64.5h-55.401c-35.622 0-64.499 28.878-64.499 64.5s28.877 64.499 64.499 64.499h18.534l27.264 21.91c2.87 2.306 7.134.263 7.134-3.419v-18.491h2.469c35.622 0 64.499-28.877 64.499-64.499z"
      fill="#6f381e"
    />
    <rect
      x={511.288}
      y={433.099}
      width={47.667}
      height={7.688}
      rx={3.844}
      fill="#fff"
    />
    <rect
      x={511.288}
      y={453.089}
      width={73.038}
      height={7.688}
      rx={3.844}
      fill="#fff"
    />
    <rect
      x={511.288}
      y={473.078}
      width={99.947}
      height={7.688}
      rx={3.844}
      fill="#fff"
    />
    <path
      d="M547.275 326.624c-1.218 30.911-67.217 87.802-139.155 57.697-33.457-14.002-28.86-31.597-52.859-57.608-14.304-15.503-35.754-28.225-40.082-49.214-3.739-18.117 1.345-36.735 11.851-48.17 23.628-25.714 67.86-40.689 105.593 6.864 37.733 47.554 117.786 10.708 114.652 90.431z"
      fill="url(#d)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M374.381 242.964c-24.962 3.281-44.254 23.671-44.254 48.604 0 27.209 22.915 49.274 51.172 49.274h112.58c22.608 0 40.938-17.65 40.938-39.419 0-21.77-18.33-39.42-40.938-39.42 0-32.659-27.49-59.129-61.407-59.129-26.989 0-49.852 16.783-58.091 40.09z"
      fill="#6f381e"
    />
    <path
      d="M431.906 279.774v-32.795m.007 58.523c.936 0 1.696.887 1.69 1.979 0 1.092-.76 1.979-1.697 1.979-.936 0-1.696-.887-1.696-1.979s.76-1.979 1.703-1.979"
      stroke="#fff"
      strokeWidth={15.588}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={523.53}
        y1={210.728}
        x2={501.031}
        y2={109.63}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={762.985}
        y1={286.832}
        x2={911.295}
        y2={169.517}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={352.511}
        y1={462.107}
        x2={250.484}
        y2={367.311}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={458.103}
        y1={504.225}
        x2={393.272}
        y2={-13.769}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg275);
const Memo = memo(ForwardRef);
export default Memo;