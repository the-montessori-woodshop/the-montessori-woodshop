import { TypographyCopy, makeRem } from "@woodshop/components";
import type { ReactNode } from "react";
import { forwardRef } from "react";
import type { TableHeaderProps } from "react-table";
import styled from "styled-components";

export const TableHead = styled.div`
  padding: 0 ${makeRem(16)};
  height: ${makeRem(36)};
  background: var(--color-grey2);
  align-items: center;

  & > * {
    height: 100%;
  }
`;

const STableHeadTH = styled.div`
  height: 100%;
`;
const STableHeadTHContent = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
`;

export const TableHeadTH = forwardRef<
  HTMLDivElement,
  TableHeaderProps & { children: ReactNode }
>(function TableHeadTH({ children, ...restProps }, ref) {
  return (
    <STableHeadTH {...restProps} ref={ref}>
      <STableHeadTHContent>
        <TypographyCopy
          cxVariant="caption"
          style={{
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {children}
        </TypographyCopy>
      </STableHeadTHContent>
    </STableHeadTH>
  );
});
