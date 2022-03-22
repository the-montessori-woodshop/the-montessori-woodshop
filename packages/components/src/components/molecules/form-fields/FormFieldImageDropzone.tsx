import { styled } from "@linaria/react";
import { FileImage } from "@woodshop/icons";
import React, {
  DragEventHandler,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { forwardRef } from "react";

import { Icon, TypographyCopy } from "../../atoms";
import { InputFile, InputFileProps } from "../../atoms/inputs/InputFile";

const SLabel = styled.label`
  position: relative;
  display: block;
`;

const Simg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const SDiv2 = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & * {
    margin: 0 auto;
  }
`;

export type FormFieldImageDropzoneProps = InputFileProps;

export const FormFieldImageDropzone = forwardRef<
  HTMLInputElement,
  FormFieldImageDropzoneProps
>(function FormFieldImageDropzone(props, ref) {
  const inputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const handleOnDrop = useCallback<DragEventHandler<HTMLLabelElement>>((e) => {
    e.preventDefault();

    if (inputRef.current && imageRef.current) {
      inputRef.current.files = e.dataTransfer.files;
      inputRef.current.value = e.dataTransfer.files[0].name;
      imageRef.current.src = URL.createObjectURL(inputRef.current.files[0]);
      setIsDragging(false);
    }
  }, []);

  const handleOnDragover = useCallback<DragEventHandler<HTMLLabelElement>>(
    (e) => {
      e.preventDefault();
      setIsDragging(true);
    },
    []
  );

  const handleOnDragleave = useCallback<DragEventHandler<HTMLLabelElement>>(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
    },
    []
  );

  return (
    <SLabel
      onDragEnter={handleOnDragover}
      onDragLeave={handleOnDragleave}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragover}
    >
      <InputFile
        {...props}
        ref={inputRef}
        style={
          isDragging
            ? {
                borderColor: "var(--color-primary)"
              }
            : undefined
        }
      />
      <SDiv2>
        <div>
          <Icon
            cxTitle="drag and drop an image file"
            cxSize={32}
            cxColor="grey4"
          >
            <FileImage />
          </Icon>
          <TypographyCopy cxVariant="caption" cxColor="textSecondary">
            Drag and drop or select a .png or .jpg image
          </TypographyCopy>
        </div>
      </SDiv2>
      <Simg ref={imageRef} />
    </SLabel>
  );
});
