import React, { FC, ReactNode, useContext, useMemo } from "react";

type TablistContextContextType = {
  cxSize: CXSize;
};

const TablistContextContext =
  React.createContext<TablistContextContextType | null>(null);

export type CXSize = "sm" | "lg";

export type TablistContextProviderProps = {
  cxSize: CXSize;
  children: ReactNode;
};

export const TablistContextProvider: FC<TablistContextProviderProps> = ({
  children,
  ...restProps
}) => {
  const value = useMemo(
    () => ({
      ...restProps
    }),
    []
  );

  return (
    <TablistContextContext.Provider value={value}>
      {children}
    </TablistContextContext.Provider>
  );
};

export const useTablistContextContext = (): TablistContextContextType => {
  const context = useContext(TablistContextContext);
  if (!context) {
    throw new Error(
      "'useTablistContextContext()' must be used within a <TablistContextProvider /> component"
    );
  }
  return context;
};
