import React from "react";

import { TypographyCopy } from "./TypographyCopy";
import { TypographyHeading } from "./TypographyHeading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms / Typography / Vertical Rythem"
};

export const H1_and_2_h2s = () => {
  return (
    <>
      <TypographyHeading cxNode="h1">
        H1. Commodo <strong>Ridiculu</strong>
      </TypographyHeading>
      <TypographyCopy>
        P. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id
        elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec
        ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
        felis euismod semper. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </TypographyCopy>
      <TypographyHeading cxNode="h2">
        H2. Tristique Justo Bibendum
      </TypographyHeading>
      <TypographyCopy>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non
        metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
        Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas faucibus mollis
        interdum.
      </TypographyCopy>
      <TypographyHeading cxNode="h2">
        H2. Tristique Justo Bibendum
      </TypographyHeading>
      <TypographyCopy>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Donec ullamcorper nulla non
        metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
        Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas faucibus mollis
        interdum.
      </TypographyCopy>
    </>
  );
};
