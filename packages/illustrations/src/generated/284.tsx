import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg284 = (
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
      d="M766.83 370.138 711 456h120l-55.83-85.862c-1.853-2.851-6.487-2.851-8.34 0z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M651.285 296.96 548 456h222L666.715 296.96c-3.429-5.28-12.001-5.28-15.43 0z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m577 416.873 34.708 22.407 34.27-22.407-34.27-86.551L577 416.873z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M611.512 394.467v59.751m-21.048-46.441 21.534 15.383"
    />
    <path
      d="m656.819 424.905 27.244 17.588 26.9-17.588-26.9-67.939-27.244 67.939z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M684.339 407.316v46.902m-16.702-36.804 16.903 12.075"
    />
    <path stroke="#E1E4E5" strokeWidth={3.68} d="M53 456.374h794" />
    <path stroke="#E1E4E5" strokeWidth={3.683} d="M103.624 497.672h289.091" />
    <path stroke="#E1E4E5" strokeWidth={3.618} d="M439.342 497.704h365.027" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M194.79 300.868 95 455.55h214.487l-99.79-154.682c-3.313-5.135-11.594-5.135-14.907 0z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M284.383 337.263 206.906 455.55h166.527l-77.477-118.287c-2.572-3.926-9.001-3.926-11.573 0z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      d="m248 433.354 19.391 12.519 19.145-12.519L267.391 385 248 433.354z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M268.164 420.836v33.382m-12.129-26.664 12.03 8.594"
    />
    <path
      d="m787 433.354 19.391 12.519 19.145-12.519L806.391 385 787 433.354z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M807.164 420.836v33.382m-12.129-26.664 12.03 8.594"
    />
    <path
      d="m102 433.354 19.391 12.519 19.145-12.519L121.391 385 102 433.354z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M122.164 420.836v33.382m-12.129-26.664 12.03 8.594"
    />
    <path
      d="m171 429.135 23.313 15.05 23.018-15.05L194.313 371 171 429.135z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M194.837 414.084v40.134m-14.412-31.728 14.464 10.332"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M340.018 203c9.209 0 4.9-14.686-6.767-11.178-.646-20.392-33.695-35.312-47.361-7.809-3.864-3.074-12.54 2.734-10.619 7.809-4.291.368-7.668.867-10.295 1.528-6.065 1.527-4.865 9.581 1.387 9.525l73.655.125zm-121.5-2h-65.951c-5.339 0-7.642-6.702-3.271-9.677l.185-.125c6.222-4.146 14.388-3.769 14.388-3.769S165.036 165 187.006 165c10.863 0 19.641 18 19.641 18s14.777 0 17.222 11.309c.74 3.427-1.739 6.691-5.351 6.691zm372.422 12h107.613c10.101 0 9.638-8.221 6.338-11.085-3.382-2.936-10.064-1.745-10.064-1.745s-1.99-5.529-8.538-8.221c-5.792-2.381-11.86-1.248-11.86-1.248s0-3.795-3.709-6.938-8.653-2.838-8.653-2.838S658.667 160 635.951 160s-25.343 19.703-25.343 19.703-5.099 0-8.808 3.361c-3.709 3.36-4.172 7.178-4.172 7.178s-12.404-1.652-16.072 8.923C579.37 205.468 583.861 213 590.94 213zm-99.386-68.532c-12.113 0-6.446-19.208 8.9-14.62.85-26.67 44.321-46.184 62.297-10.212 5.082-4.022 16.495 3.574 13.968 10.212 5.645.481 10.086 1.134 13.542 1.999 7.978 1.997 6.399 12.531-1.825 12.457l-96.882.164zm-144.335 11.87h87.456c7.08 0 10.134-8.962 4.338-12.938-.081-.056-.163-.113-.245-.168-8.252-5.544-19.08-5.04-19.08-5.04s-1.547-29.99-30.682-29.99c-14.404 0-26.045 24.068-26.045 24.068s-19.595 0-22.838 15.122c-.981 4.581 2.306 8.946 7.096 8.946zM678.197 149h62.525c5.062 0 7.245-6.33 3.102-9.139l-.176-.118c-5.899-3.916-13.641-3.56-13.641-3.56S728.901 115 708.072 115c-10.298 0-18.621 17-18.621 17s-14.009 0-16.327 10.681c-.701 3.236 1.649 6.319 5.073 6.319zm-392.928-7H201.57c-7.857 0-7.496-6.514-4.93-8.784 2.631-2.327 7.828-1.383 7.828-1.383s1.547-4.382 6.64-6.515c4.505-1.887 9.225-.989 9.225-.989s0-3.007 2.884-5.498c2.885-2.491 6.731-2.249 6.731-2.249S232.592 100 250.26 100s19.711 15.614 19.711 15.614 3.967 0 6.851 2.663c2.885 2.663 3.245 5.688 3.245 5.688s9.647-1.309 12.5 7.072c1.701 4.994-1.793 10.963-7.298 10.963z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M450 438s-90-71.865-90-137.497C360 252.172 400.298 213 450 213c49.703 0 90 39.172 90 87.503C540 366.135 450 438 450 438z"
      fill="#6f381e"
      stroke="#6f381e"
      strokeWidth={28.772}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M449.981 292.455c-6.004 0-10.83 4.75-10.83 10.564s4.864 10.526 10.868 10.526c6.004 0 10.83-4.712 10.83-10.564.038-5.776-4.826-10.526-10.868-10.526"
      stroke="#fff"
      strokeWidth={48.925}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M537 454v-11 11z"
      fill="#fff"
    />
    <path d="M537 454v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M525 454v-8 8z"
      fill="#fff"
    />
    <path d="M525 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M497 454v-5 5z"
      fill="#fff"
    />
    <path d="M497 454v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M549 454v-8 8z"
      fill="#fff"
    />
    <path d="M549 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M746 454v-11 11z"
      fill="#fff"
    />
    <path d="M746 454v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M734 454v-8 8z"
      fill="#fff"
    />
    <path d="M734 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M706 454v-5 5z"
      fill="#fff"
    />
    <path d="M706 454v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M758 454v-8 8z"
      fill="#fff"
    />
    <path d="M758 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M408 454v-11 11z"
      fill="#fff"
    />
    <path d="M408 454v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M396 454v-8 8z"
      fill="#fff"
    />
    <path d="M396 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M368 454v-5 5z"
      fill="#fff"
    />
    <path d="M368 454v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M420 454v-8 8z"
      fill="#fff"
    />
    <path d="M420 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M296 454v-11 11z"
      fill="#fff"
    />
    <path d="M296 454v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M284 454v-8 8z"
      fill="#fff"
    />
    <path d="M284 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M256 454v-5 5z"
      fill="#fff"
    />
    <path d="M256 454v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M308 454v-8 8z"
      fill="#fff"
    />
    <path d="M308 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M176 454v-11 11z"
      fill="#fff"
    />
    <path d="M176 454v-11" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M164 454v-8 8z"
      fill="#fff"
    />
    <path d="M164 454v-8" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M136 454v-5 5z"
      fill="#fff"
    />
    <path d="M136 454v-5" stroke="#E1E4E5" strokeWidth={4} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M188 454v-8 8z"
      fill="#fff"
    />
    <path d="M188 454v-8" stroke="#E1E4E5" strokeWidth={4} />
  </svg>
);

const ForwardRef = forwardRef(Svg284);
const Memo = memo(ForwardRef);
export default Memo;
