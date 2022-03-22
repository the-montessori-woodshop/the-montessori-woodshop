import React, { FC } from "react";

import { DescriptionList } from "./DescriptionList";
import { DescriptionListGroup } from "./DescriptionListGroup";
import { DescriptionListGroupTitle } from "./DescriptionListGroupTitle";
import { DescriptionListItem } from "./DescriptionListItem";
import { DescriptionListItemData } from "./DescriptionListItemData";
import { DescriptionListItemTag } from "./DescriptionListItemTag";

export default {
  title: "Molecules / Description List",
  decorators: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    )
  ]
};

export const Standard: FC = () => {
  return (
    <DescriptionList>
      <DescriptionListItem>
        <DescriptionListItemTag>tag</DescriptionListItemTag>
        <DescriptionListItemData>label</DescriptionListItemData>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListItemTag>tag</DescriptionListItemTag>
        <DescriptionListItemData>label</DescriptionListItemData>
      </DescriptionListItem>
      <DescriptionListItem>
        <DescriptionListItemTag>tag</DescriptionListItemTag>
        <DescriptionListItemData>label</DescriptionListItemData>
      </DescriptionListItem>
    </DescriptionList>
  );
};

export const WithGroupsAndTitles = () => {
  return (
    <>
      <DescriptionListGroup>
        <DescriptionListGroupTitle>Group 1</DescriptionListGroupTitle>
        <Standard />
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListGroupTitle>Group 2</DescriptionListGroupTitle>
        <Standard />
      </DescriptionListGroup>
    </>
  );
};

export const StickyHeaders = () => {
  return (
    <>
      <div>Scroll inside of the box to see the sticky headers by default</div>
      <div
        style={{
          marginTop: "3rem",
          height: 500,
          overflowY: "auto",
          background: "white",
          width: "50%",
          border: "1px solid #c1c1c1"
        }}
      >
        <WithGroupsAndTitles />
        <WithGroupsAndTitles />
        <WithGroupsAndTitles />
        <WithGroupsAndTitles />
        <WithGroupsAndTitles />
        <WithGroupsAndTitles />
      </div>
    </>
  );
};
