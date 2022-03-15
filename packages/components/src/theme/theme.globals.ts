import { css } from "@linaria/core";

import { makeRem } from "./theme.utils";

export default css`
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
      --color-secondary: #e6c084;

      --color-danger: #fe1414;
      --color-warning: #e8e812;
      --color-success: #2df20e;

      --color-white: white;
      --color-white-rgba: 255, 255, 255;
      --color-grey1: #fcfcfc;
      --color-grey1-rgba: 0, 0, 99;
      --color-grey2: #f8f8f8;
      --color-grey2-rgba: 0, 0, 97;
      --color-grey3: #e7e7e7;
      --color-grey4: #c0c0c0;
      --color-grey5: #706e6e;
      --color-black: #3e3b39;
      --color-black-rgba: 24, 8, 24;

      --color-drop-shadow: rgba(48, 48, 78, 0.03);

      --color-textPrimary: var(--color-black);
      --color-textSecondary: var(--color-grey5);

      /* Navbar (100px) */
      --navbar-height: ${makeRem(80)};
      --sidenav-width: ${makeRem(80)};

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
