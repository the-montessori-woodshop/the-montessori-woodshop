import { Link } from "@remix-run/react";
import { ButtonContent, Illustration } from "@woodshop/components";
import { ImageAdd } from "@woodshop/illustrations";
import { StateEmtpy } from "~/components/StateEmpty";
import type { FC } from "react";

export const ImagesEmpty: FC = () => {
  return (
    <>
      <StateEmtpy
        title="No images added"
        description="Doesn't look like there are any images added to the DB yet. Click on the button below to upload some images."
        Action={
          <Link to="./new">
            <ButtonContent cxColor="primary" cxVariant="contained">
              Add an image
            </ButtonContent>
          </Link>
        }
      >
        <Illustration cxTitle="add an image" cxSize={300}>
          <ImageAdd />
        </Illustration>
      </StateEmtpy>
    </>
  );
};
