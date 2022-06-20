import { ComponentMeta } from "@storybook/react";
import * as Illustrations from "@woodshop/illustrations";
import React from "react";

import { Illustration } from "./Illustration";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Illustration / SVGs",
  component: Illustration
} as ComponentMeta<typeof Illustration>;

export const AllIllustrations = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {Object.entries(Illustrations).map(
        ([IllustrationName, IllustrationComponent]) => {
          return (
            <div
              key={IllustrationName}
              style={{
                width: "200px",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Illustration cxTitle={IllustrationName} cxSize={192}>
                <IllustrationComponent />
              </Illustration>
              <div>{IllustrationName}</div>
            </div>
          );
        }
      )}
    </div>
  );
};
