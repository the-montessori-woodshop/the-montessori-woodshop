import { Button, Icon, makeRem } from "@woodshop/components";
import { Close } from "@woodshop/icons";
import { ImagePane } from "~/components/ImagePane";
import { useCallback } from "react";
import { useNavigate } from "remix";

export default function ImagesNew() {
  const navigate = useNavigate();

  const close = useCallback(() => {
    navigate("../");
  }, [navigate]);

  return (
    <ImagePane>
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
    </ImagePane>
  );
}
