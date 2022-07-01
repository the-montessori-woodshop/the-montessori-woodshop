import { ComponentMeta } from "@storybook/react";
import * as Icons from "@woodshop/icons";
import React from "react";

import { Icon } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Icons / SVGs",
  component: Icon
} as ComponentMeta<typeof Icon>;

export const AllIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {Object.entries(Icons).map(([IconName, IconComponent]) => {
        return (
          <div
            style={{
              width: "140px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon cxTitle={IconName} cxSize={48}>
              <IconComponent />
            </Icon>
            <div>{IconName}</div>
          </div>
        );
      })}
    </div>
  );
};
