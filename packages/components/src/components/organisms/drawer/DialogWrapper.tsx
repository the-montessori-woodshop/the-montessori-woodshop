import React, { FC } from "react";

import { makeClass } from "../../../theme";
import { useDialogContext } from "./Dialog";

export const DialogWrapper: FC = () => {
  const { isOpen } = useDialogContext();
  return (
    <div
      className={makeClass(undefined, "howoPr", {
        active: isOpen
      })}
    />
  );
};
