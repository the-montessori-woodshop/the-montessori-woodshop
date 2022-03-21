import { Button, Icon, makeRem } from "@woodshop/components";
import { Close } from "@woodshop/icons";
import { ImagePane } from "~/components/ImagePane";
import { ImagePaneContent } from "~/components/ImagePaneContent";
import { PageTitle } from "~/components/PageTitle";
import { useCallback } from "react";
import { Form, useNavigate } from "remix";

export default function ImagesNew() {
  const navigate = useNavigate();

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  return (
    <ImagePane>
      <PageTitle>Upload new image</PageTitle>
      <Button
        onClick={close}
        style={{
          position: "absolute",
          right: makeRem(24),
          top: makeRem(32),
        }}
      >
        <Icon cxTitle="close-panel" cxSize={32}>
          <Close />
        </Icon>
      </Button>
      <ImagePaneContent>
        <Form>
          <input type="file" accept=".png" multiple={false} />
        </Form>
      </ImagePaneContent>
    </ImagePane>
  );
}
