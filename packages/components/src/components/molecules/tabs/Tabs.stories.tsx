import React from "react";

import { Tab } from "./Tab";
import { Tablist } from "./Tablist";
import { TabText } from "./TabText";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Tabs"
};

export const HorizontalSmallContained = () => {
  return (
    <Tablist
      ariaLabel="testing"
      cxLayout="horizontal"
      cxVariant="contained"
      cxSize="sm"
    >
      <Tab>
        <TabText>text</TabText>
      </Tab>
      <Tab isActive>
        <TabText>text</TabText>
      </Tab>
      <Tab>
        <TabText>text</TabText>
      </Tab>
    </Tablist>
  );
};

export const VerticalSmallStandalone = () => {
  return (
    <Tablist ariaLabel="testing" cxLayout="vertical" cxSize="sm">
      <Tab>
        <TabText>text</TabText>
      </Tab>
      <Tab isActive>
        <TabText>text</TabText>
      </Tab>
      <Tab>
        <TabText>text</TabText>
      </Tab>
    </Tablist>
  );
};

export const VerticalLargeStandalone = () => {
  return (
    <Tablist ariaLabel="testing" cxLayout="vertical" cxSize="lg">
      <Tab>
        <TabText>text</TabText>
      </Tab>
      <Tab isActive>
        <TabText>text</TabText>
      </Tab>
      <Tab>
        <TabText>text</TabText>
      </Tab>
    </Tablist>
  );
};

export const VerticalLargeContained = () => {
  return (
    <Tablist
      ariaLabel="testing"
      cxLayout="vertical"
      cxVariant="contained"
      cxSize="lg"
    >
      <Tab>
        <TabText>text</TabText>
      </Tab>
      <Tab isActive>
        <TabText>text</TabText>
      </Tab>
      <Tab>
        <TabText>text</TabText>
      </Tab>
    </Tablist>
  );
};
