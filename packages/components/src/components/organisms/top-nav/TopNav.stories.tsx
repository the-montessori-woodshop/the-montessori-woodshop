import React from "react";

import { TopNav } from "./TopNav";
import { TopNavList } from "./TopNavList";
import { TopNavListItem } from "./TopNavListItem";
import { TopNavSection } from "./TopNavSection";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms / TopNav"
};

export const WithoutLinks = () => {
  return (
    <TopNav>
      <TopNavSection>
        <TopNavList>
          <TopNavListItem>left</TopNavListItem>
        </TopNavList>
      </TopNavSection>
      <TopNavSection>
        <TopNavList>
          <TopNavListItem>right</TopNavListItem>
        </TopNavList>
      </TopNavSection>
    </TopNav>
  );
};
