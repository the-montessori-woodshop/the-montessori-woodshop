import { globals } from "../src/theme/theme.globals";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <div
      className={globals}
      style={{
        height: "100%",
        width: "100%"
      }}
    >
      <Story />
    </div>
  )
];
