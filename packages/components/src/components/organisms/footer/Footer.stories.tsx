import React from "react";

import { Footer } from "./Footer";
import { FooterSection } from "./FooterSection";
import { FooterSectionContent } from "./FooterSectionContent";
import { FooterSectionContentText } from "./FooterSectionContentText";
import { FooterSectionTitle } from "./FooterSectionTitle";

export default {
  title: "Organisms / Footer"
};

export const Base = () => {
  return (
    <Footer>
      <FooterSection>
        <FooterSectionTitle>The Montessori Woodshop, LLC</FooterSectionTitle>
        <FooterSectionContent>
          <FooterSectionContentText>Our Story</FooterSectionContentText>
          <FooterSectionContentText>Mission</FooterSectionContentText>
          <FooterSectionContentText>Craftsmanship</FooterSectionContentText>
        </FooterSectionContent>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle>The montessori Woodshop, LLC</FooterSectionTitle>
        <FooterSectionContent>
          <FooterSectionContentText>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
          </FooterSectionContentText>
          <FooterSectionContentText>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet
          </FooterSectionContentText>
        </FooterSectionContent>
      </FooterSection>
    </Footer>
  );
};
