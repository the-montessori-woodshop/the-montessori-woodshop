import { css } from "@linaria/core";

import { makeRem } from "./theme.utils";

export const globals = css`
  :global() {
    :root {
      /* Font & Typography */
      --font-size: 16px;
      --font-family: "Open Sans", sans-serif;
      --font-family-heading: "Bitter", serif;
      --font-line-height: 1.75;
      --font-line-height-heading: 1.3;

      /* Color */
      --color-primary: #6f381e;
      --color-primary-rgb: 111, 56, 30;
      --color-secondary: #e6c084;
      --color-secondary-rgb: 230, 192, 132;

      --color-danger: #fe1414;
      --color-danger-rgb: 254, 20, 20;
      --color-warning: #e8e812;
      --color-warning-rgb: 232, 232, 18;
      --color-success: #2df20e;
      --color-success-rgb: 45, 242, 14;

      --color-white: white;
      --color-white-rgba: 255, 255, 255;
      --color-grey1: #fcfcfc; // grey 3
      --color-grey1-rgba: 0, 0, 99;
      --color-grey2: #f8f8f8;
      --color-grey2-rgba: 0, 0, 97;
      --color-grey3: #e7e7e7; // grey 2.5
      --color-grey4: #c0c0c0;
      --color-grey5: #706e6e;
      --color-black: #3e3b39;
      --color-black-rgba: 24, 8, 24;
      --color-gradient: linear-gradient(
        335deg,
        hsl(19deg 57% 28%) 0%,
        hsl(20deg 58% 30%) 11%,
        hsl(21deg 58% 32%) 18%,
        hsl(21deg 58% 34%) 23%,
        hsl(23deg 60% 36%) 28%,
        hsl(23deg 60% 38%) 31%,
        hsl(24deg 60% 40%) 35%,
        hsl(25deg 60% 42%) 38%,
        hsl(26deg 61% 44%) 41%,
        hsl(27deg 61% 46%) 44%,
        hsl(28deg 62% 48%) 46%,
        hsl(28deg 62% 50%) 49%,
        hsl(29deg 62% 52%) 52%,
        hsl(30deg 63% 55%) 55%,
        hsl(31deg 63% 56%) 58%,
        hsl(32deg 64% 59%) 62%,
        hsl(33deg 64% 61%) 66%,
        hsl(33deg 64% 63%) 71%,
        hsl(34deg 65% 65%) 76%,
        hsl(35deg 66% 67%) 83%,
        hsl(36deg 66% 69%) 90%,
        hsl(37deg 66% 71%) 100%
      );

      --color-drop-shadow: rgba(48, 48, 78, 0.03);

      --color-textPrimary: var(--color-black);
      --color-textSecondary: var(--color-grey5);

      /* Navs */
      --navbar-height: ${makeRem(80)};
      --sidenav-width: ${makeRem(80)};
      --topnav-height: ${makeRem(80)};

      /* Breakpoints */
      --breakpoint-tablet: ${makeRem(577)};
      --breakpoint-desktop: ${makeRem(992)};
    }

    html {
      font-size: var(--font-size);
    }

    html,
    body {
      padding: 0;
      margin: 0;
    }

    * {
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: border-box;
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
  }
`;
