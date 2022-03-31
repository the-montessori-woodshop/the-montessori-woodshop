import React, { FC, useContext, useMemo, useState } from "react";

type MarkdownRendererContextType = {
  markdownSource: string;
  setMarkdownSource: React.Dispatch<React.SetStateAction<string>>;
};

const MarkdownRendererContext =
  React.createContext<MarkdownRendererContextType | null>(null);

export const MarkdownRendererProvider: FC = ({ children }) => {
  const [markdownSource, setMarkdownSource] = useState("");

  const value = useMemo(
    () => ({
      markdownSource,
      setMarkdownSource,
    }),
    [markdownSource]
  );

  return (
    <MarkdownRendererContext.Provider value={value}>
      {children}
    </MarkdownRendererContext.Provider>
  );
};

export const useMarkdownRendererContext = (): MarkdownRendererContextType => {
  const context = useContext(MarkdownRendererContext);
  if (!context) {
    throw new Error(
      "'useMarkdownRendererContext()' must be used within a <MarkdownRendererProvider /> component"
    );
  }
  return context;
};
