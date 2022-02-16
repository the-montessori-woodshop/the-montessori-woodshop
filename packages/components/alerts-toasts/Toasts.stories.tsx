import { Story } from "@storybook/react/types-6-0";
import { LoremIpsum } from "lorem-ipsum";
import React from "react";

import { Button } from "../../buttons-links/Button";
import { CreateToastParams, ToastProvider, useToast } from "./Toast.context";
import docs from "./Toasts.docs.md";

export default {
  title: "Molecules / Toasts",
  parameters: {
    docs: {
      description: {
        component: docs
      }
    }
  },
  decorators: [
    (Story: Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
};

const lorem = new LoremIpsum();

export const Launch = () => {
  const { createToast } = useToast();

  const createToastFn = (params: Omit<CreateToastParams, "message">) => () => {
    createToast({
      ...params,
      message: lorem.generateSentences(1)
    });
  };

  return (
    <>
      <h2>Default</h2>
      <div>
        <Button variant="text" onClick={createToastFn({ variant: "error" })}>
          error
        </Button>
      </div>
      <div>
        <Button variant="text" onClick={createToastFn({ variant: "success" })}>
          success
        </Button>
      </div>
      <div>
        <Button variant="text" onClick={createToastFn({ variant: "warning" })}>
          warning
        </Button>
      </div>
      <div>
        <Button variant="text" onClick={createToastFn({ variant: "info" })}>
          info
        </Button>
      </div>
      <h2>Others Types</h2>
      <div>
        <Button
          variant="text"
          onClick={createToastFn({ variant: "error", dismissType: "manual" })}
        >
          error - manually dismiss
        </Button>
      </div>
      <Button
        variant="text"
        onClick={createToastFn({ variant: "success", timeout: 10 })}
      >
        success - persists for 10 seconds
      </Button>
      <div>
        <Button
          variant="text"
          onClick={createToastFn({ variant: "warning", timeout: 20 })}
        >
          warning - persists for 20 seconds
        </Button>
      </div>
    </>
  );
};
