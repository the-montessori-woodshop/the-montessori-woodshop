import { Button, Icon, TypographyCopy, makeRem } from "@woodshop/components";
import { Pencil } from "@woodshop/icons";
import { FC, memo } from "react";
import styled from "styled-components";

export const SDd = styled.dd`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const CheckoutDescriptionListItemData: FC<{
  onClick: () => void;
}> = memo(function CheckoutDescriptionListItemData({ onClick, children }) {
  return (
    <SDd>
      <TypographyCopy
        cxVariant="caption"
        cxColor="textSecondary"
        style={{
          fontSize: makeRem(12),
          flex: 1,
        }}
      >
        {children}
      </TypographyCopy>
      <Button
        onClick={onClick}
        // style={{
        //   minHeight: makeRem(24),
        //   minWidth: makeRem(24),
        //   height: makeRem(24),
        //   width: makeRem(24),
        // }}
      >
        <Icon cxTitle="edit" cxSize={16}>
          <Pencil />
        </Icon>
      </Button>
    </SDd>
  );
});
