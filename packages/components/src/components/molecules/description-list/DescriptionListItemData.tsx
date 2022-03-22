import { styled } from "@linaria/react";
import React, { forwardRef, memo, useMemo } from "react";

import { TypographyCopy } from "../../atoms/typography/TypographyCopy";

const SDd = styled.dd`
  word-break: break-all;
  flex: 1;
  margin: 0;
`;

export type DescriptionListItemDataProps = JSX.IntrinsicElements["dd"];

const DescriptionListItemDataFC = forwardRef<
  HTMLElement,
  DescriptionListItemDataProps
>(function DescriptionListItemDataFC({ children, ...restProps }, ref) {
  const Content = useMemo(() => {
    if (
      typeof children === "string" ||
      typeof children === "number" ||
      typeof children === "undefined"
    ) {
      return (
        <TypographyCopy
          cxVariant="caption"
          cxColor="textPrimary"
          cxNode="div"
          style={{
            fontWeight: "bold"
          }}
        >
          {children}
        </TypographyCopy>
      );
    }
    return children;
  }, [children]);

  return (
    <SDd {...restProps} ref={ref}>
      {Content}
    </SDd>
  );
});

export const DescriptionListItemData = memo(DescriptionListItemDataFC);
