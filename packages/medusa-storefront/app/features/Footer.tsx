import {
  Footer as FooterEl,
  FooterSection,
  FooterSectionContent,
  FooterSectionContentText,
  FooterSectionTitle,
} from "@woodshop/components";
import type { FC } from "react";
import { memo, useMemo } from "react";

import { useIsCheckout } from "./useIsCheckout";

export const Footer: FC = memo(function Footer() {
  const isCheckout = useIsCheckout();

  const FooterContent = useMemo(
    () => (
      <FooterEl>
        <FooterSection>
          <FooterSectionTitle>The Montessori Woodshop, LLC</FooterSectionTitle>
          <FooterSectionContent>
            <FooterSectionContentText>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue
              laoreet
            </FooterSectionContentText>
            <FooterSectionContentText>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget
              quam. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue
              laoreet
            </FooterSectionContentText>
          </FooterSectionContent>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>About Us</FooterSectionTitle>
          <FooterSectionContent>
            <FooterSectionContentText>Our Story</FooterSectionContentText>
            <FooterSectionContentText>Mission</FooterSectionContentText>
            <FooterSectionContentText>Craftsmanship</FooterSectionContentText>
          </FooterSectionContent>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Privacy & Security</FooterSectionTitle>
          <FooterSectionContent>
            <FooterSectionContentText>
              Shipping & Returns
            </FooterSectionContentText>
          </FooterSectionContent>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>Support</FooterSectionTitle>
          <FooterSectionContent>
            <FooterSectionContentText>
              Shipping & Returns
            </FooterSectionContentText>
            <FooterSectionContentText>FAQs</FooterSectionContentText>
            <FooterSectionContentText>Warranty</FooterSectionContentText>
            <FooterSectionContentText>Contact Us</FooterSectionContentText>
          </FooterSectionContent>
        </FooterSection>
      </FooterEl>
    ),
    []
  );

  if (isCheckout) {
    return null;
  }

  return <>{FooterContent}</>;
});
