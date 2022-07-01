import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const Svg274 = (
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
      d="M337.664 336.281c-6.727 17.586-9.694 37.053-7.922 57.427a123.694 123.694 0 0 0 3.605 20.751l17.183-4.923a23.64 23.64 0 0 1 23.475 6.259l29.557 30.449a19.726 19.726 0 0 0 15.294 5.953c14.436-.835 26.107 11.602 24.357 25.955l-3.745 30.731c2.032.279 4.078.509 6.137.688 6.418.558 12.746.646 18.954.294a23.64 23.64 0 0 1-5.31-22.296l5.629-20.158c3.102-11.112 13.773-18.361 25.246-17.152l22.552 2.375c16.538 1.743 25.811 19.336 18.863 33.707a128.105 128.105 0 0 0 17.76-15.317L534.608 428a20.179 20.179 0 0 0-12.075-12.397l-25.876-9.604c-16.241-6.028-20.698-26.899-8.335-39.035l67.369-66.128c-11.47-13.833-25.772-25.272-41.94-33.353l-18.49 59.418a23.643 23.643 0 0 1-18.113 16.192l-47.884 9.198a20.185 20.185 0 0 0-13.672 9.733l-1.393 2.415c-7.359 12.754-24.46 15.751-35.716 6.259l-40.819-34.417zm98.38 172.082 3.733-30.63c1.488-12.21-8.44-22.79-20.721-22.08a23.186 23.186 0 0 1-17.978-6.998l-29.557-30.449a20.182 20.182 0 0 0-20.038-5.343l-17.21 4.932c13.589 46.404 53.455 82.535 101.771 90.568zm148.552-137.782c3.276 37.689-9.656 72.274-32.617 97.579l-14.095-41.279a23.642 23.642 0 0 0-14.147-14.524l-25.876-9.603c-13.863-5.145-17.667-22.961-7.114-33.319l67.129-65.893c14.868 18.936 24.547 42.054 26.72 67.039zm-245.579-37.688 41.697 35.159c9.609 8.101 24.205 5.543 30.486-5.343l1.394-2.415a23.642 23.642 0 0 1 16.017-11.402l47.883-9.199a20.177 20.177 0 0 0 15.461-13.82l18.644-59.911c-12.984-6.05-27.099-9.958-41.867-11.245-58.252-5.065-109.1 28.604-129.715 78.176zm130.071 176.636c20.239-1.859 39.091-8.402 55.468-18.541l2.433-3.65c8.417-12.624.413-29.671-14.675-31.261l-22.553-2.376c-9.793-1.031-18.901 5.157-21.549 14.641l-5.629 20.158a20.18 20.18 0 0 0 5.189 19.718l1.316 1.311z"
      fill="#E1E4E5"
    />
    <path
      d="m391.012 183.871 65.715 42.424 64.883-42.424L456.727 20l-65.715 163.871z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M454.568 141.448v113.129m-39.103-86.473 40.77 29.124"
    />
    <path
      d="m497.191 244.353 48.841 31.53 48.222-31.53-48.222-121.793-48.841 121.793z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M544.941 212.823v84.081m-29.277-64.688 30.301 21.646"
    />
    <path
      d="m316.491 244.353 48.841 31.53 48.222-31.53-48.222-121.793-48.841 121.793z"
      fill="#fff"
      stroke="#E1E4E5"
      strokeWidth={4}
    />
    <path
      stroke="#E1E4E5"
      strokeWidth={4}
      d="M364.24 212.823v84.081m-29.276-64.688 30.301 21.646"
    />
    <path
      d="m643.735 292.799-29.092 29.092m-325.797-19.325-29.092 29.092m16.069 81.608-29.092 29.091m120.256 79.98-29.092 29.092m177.233-11.185-29.092 29.092m139.791-82.814-29.091 29.092m94.209-138.163-29.092 29.092m-47.21-119.563-11.637 11.637m-343.252-1.869-11.636 11.637m-1.387 99.062-11.637 11.637m102.801 97.435-11.637 11.636m159.778 6.27L474.4 546.062m122.336-65.358-11.637 11.636m76.754-120.707-11.637 11.637m-.663-61.38-11.636 11.637m-343.252-1.87-11.637 11.637m-1.387 99.063-11.636 11.637m102.8 97.434-11.636 11.637m159.778 6.27-11.637 11.637m122.336-65.358-11.637 11.637m76.754-120.709-11.637 11.637"
      stroke="#E1E4E5"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M185.793 343.17c14.848 8.899 36.151.672 36.151.672s-2.786-22.652-17.643-31.541c-14.849-8.899-36.142-.682-36.142-.682s2.785 22.652 17.634 31.551z"
      fill="url(#a)"
    />
    <circle
      cx={670.768}
      cy={233.566}
      r={14.582}
      transform="rotate(180 670.768 233.566)"
      fill="#6f381e"
    />
    <circle
      cx={622.823}
      cy={421.194}
      r={20.74}
      transform="rotate(180 622.823 421.194)"
      fill="#6f381e"
    />
    <circle
      cx={302.996}
      cy={122.783}
      r={12.004}
      transform="rotate(180 302.996 122.783)"
      fill="#6f381e"
    />
    <circle
      r={13.671}
      transform="matrix(-1 0 0 1 290.01 382.565)"
      fill="#6f381e"
    />
    <circle
      r={6.38}
      transform="matrix(-1 0 0 1 733.38 334.38)"
      fill="#6f381e"
    />
    <circle
      r={8.202}
      transform="scale(1 -1) rotate(60 598.474 122.296)"
      fill="#E1E4E5"
    />
    <circle
      r={11.848}
      transform="matrix(-1 0 0 1 194.635 403.285)"
      fill="#E1E4E5"
    />
    <circle
      r={9.017}
      transform="scale(1 -1) rotate(60 676.914 92.17)"
      fill="#E1E4E5"
    />
    <circle
      r={10.025}
      transform="matrix(-1 0 0 1 643.668 151.237)"
      fill="#E1E4E5"
    />
    <circle
      r={9.002}
      transform="scale(1 -1) rotate(-75 -33.092 -284.766)"
      fill="#E1E4E5"
    />
    <ellipse
      rx={9.212}
      ry={7.37}
      transform="scale(1 -1) rotate(60 745.193 223.014)"
      fill="#E1E4E5"
    />
    <circle
      r={11.004}
      transform="scale(1 -1) rotate(-75 206.369 -381.545)"
      fill="#E1E4E5"
    />
    <path
      d="M291.545 180.976h.131c.777 11.011 8.966 11.18 8.966 11.18s-9.03.177-9.03 12.899c0-12.722-9.029-12.899-9.029-12.899s8.185-.169 8.962-11.18zm-13.719 288.223h.126c.747 10.978 8.609 11.147 8.609 11.147s-8.67.176-8.67 12.861c0-12.685-8.669-12.861-8.669-12.861s7.858-.169 8.604-11.147z"
      fill="#E1E4E5"
    />
    <defs>
      <linearGradient
        id="a"
        x1={243.252}
        y1={371.816}
        x2={123.776}
        y2={260.807}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#EEE" />
      </linearGradient>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(Svg274);
const Memo = memo(ForwardRef);
export default Memo;
