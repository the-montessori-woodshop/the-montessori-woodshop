import { useCallback, useMemo, useRef } from "react";

export const useCopyToClipboard = (
  params: { onCopied?: () => void } = {
    onCopied: undefined,
  }
) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCopy = useCallback<
    React.MouseEventHandler<HTMLInputElement>
  >(() => {
    if (inputRef.current) {
      inputRef.current.select();
      inputRef.current.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(inputRef.current.value);
    }
  }, []);

  return useMemo(() => ({ inputRef, handleCopy }), [handleCopy]);
};
