import React from "react";

import { TypographyCopy } from "../../atoms/TypographyCopy";
import { PageSection } from "./PageSection";
import { PageSectionPane } from "./PageSectionPane";
import { PageSectionPaneContent } from "./PageSectionPaneContent";
import { PageSectionPaneTitle } from "./PageSectionPaneTitle";

export default {
  title: "Templates / PageSection"
};

export const SinglePane = () => {
  return (
    <PageSection>
      <PageSectionPane>
        <PageSectionPaneTitle>test title</PageSectionPaneTitle>
        <PageSectionPaneContent>
          <TypographyCopy>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Sed posuere
            consectetur est at lobortis. Nullam quis risus eget urna mollis
            ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </TypographyCopy>
        </PageSectionPaneContent>
      </PageSectionPane>
    </PageSection>
  );
};

export const SinglePaneWBgMain = () => {
  return (
    <PageSection cxBackground="main">
      <PageSectionPane>
        <PageSectionPaneTitle>test title</PageSectionPaneTitle>
        <PageSectionPaneContent>
          <TypographyCopy>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Sed posuere
            consectetur est at lobortis. Nullam quis risus eget urna mollis
            ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </TypographyCopy>
        </PageSectionPaneContent>
      </PageSectionPane>
    </PageSection>
  );
};

export const SplitPane = () => {
  return (
    <PageSection cxLayout="split-pane">
      <PageSectionPane>
        <PageSectionPaneTitle>test title</PageSectionPaneTitle>
        <PageSectionPaneContent>
          <TypographyCopy>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Sed posuere
            consectetur est at lobortis. Nullam quis risus eget urna mollis
            ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </TypographyCopy>
        </PageSectionPaneContent>
      </PageSectionPane>
      <PageSectionPane>
        <TypographyCopy cxNode="p">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur
          est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </TypographyCopy>
        <TypographyCopy cxNode="p">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur
          est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </TypographyCopy>
      </PageSectionPane>
    </PageSection>
  );
};

export const SplitPaneLeftAligned = () => {
  return (
    <PageSection cxLayout="split-pane">
      <PageSectionPane cxAlign="left">
        <PageSectionPaneTitle>test title</PageSectionPaneTitle>
        <PageSectionPaneContent>
          <TypographyCopy>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Sed posuere
            consectetur est at lobortis. Nullam quis risus eget urna mollis
            ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </TypographyCopy>
        </PageSectionPaneContent>
      </PageSectionPane>
      <PageSectionPane>
        <TypographyCopy cxNode="p">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur
          est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </TypographyCopy>
        <TypographyCopy cxNode="p">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur
          est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit.
        </TypographyCopy>
      </PageSectionPane>
    </PageSection>
  );
};
