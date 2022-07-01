import { makeRem } from "@woodshop/components";
import {
  PageLayoutPaneHeader,
  PageLayoutPaneHeaderTitle,
} from "~/components/page-layout";
import type { FC} from "react";
import { memo } from "react";
import styled from "styled-components";

const SPageLayoutPaneHeader = styled(PageLayoutPaneHeader)`
  padding: 0 ${makeRem(24)};
`;

export const SummaryHeader: FC = memo(function SummaryHeader() {
  return (
    <SPageLayoutPaneHeader>
      <PageLayoutPaneHeaderTitle>Summary</PageLayoutPaneHeaderTitle>
    </SPageLayoutPaneHeader>
  );
});
