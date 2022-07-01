import { Button, Icon, TypographyCopy, makeRem } from "@woodshop/components";
import { Pencil } from "@woodshop/icons";
import type { FC} from "react";
import { memo } from "react";
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
      <Button onClick={onClick}>
        <Icon cxTitle="edit" cxSize={20}>
          <Pencil />
        </Icon>
      </Button>
    </SDd>
  );
});
