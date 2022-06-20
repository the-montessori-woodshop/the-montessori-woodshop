import { TypographyCopy, makeRem } from "@woodshop/components";
import { FC } from "react";
import styled from "styled-components";

export const Sdt = styled.dt`
  min-width: 20%;
`;

export const CheckoutDescriptionListItemTag: FC = ({ children }) => {
  return (
    <Sdt>
      <TypographyCopy
        cxVariant="caption"
        cxColor="textPrimary"
        style={{
          fontSize: makeRem(12),
          marginLeft: makeRem(4),
        }}
      >
        {children}
      </TypographyCopy>
    </Sdt>
  );
};
