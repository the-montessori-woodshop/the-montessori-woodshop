import { Box, BoxContent } from "@woodshop/components";
import { FC } from "react";

import { CheckoutDescriptionList } from "./CheckoutDescriptionList";
import { CheckoutDescriptionListItem } from "./CheckoutDescriptionListItem";
import { CheckoutDescriptionListItemData } from "./CheckoutDescriptionListItemData";
import { CheckoutDescriptionListItemTag } from "./CheckoutDescriptionListItemTag";

export const CheckoutOverview: FC = () => {
  return (
    <Box>
      <BoxContent cxVariant="no-gutters">
        <CheckoutDescriptionList>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Name
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Ship to
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Shipping
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
          <CheckoutDescriptionListItem>
            <CheckoutDescriptionListItemTag>
              Payment
            </CheckoutDescriptionListItemTag>
            <CheckoutDescriptionListItemData onClick={() => void 0}>
              -- --
            </CheckoutDescriptionListItemData>
          </CheckoutDescriptionListItem>
        </CheckoutDescriptionList>
      </BoxContent>
    </Box>
  );
};
