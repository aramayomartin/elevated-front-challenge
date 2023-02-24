import { MainContextHandlers, MainContextState } from "context/interfaces";
import React, { createContext, useMemo, useState } from "react";

const initialState = {
};

export const MainContext = createContext<{
  handlers?: MainContextHandlers;
  state: MainContextState;
}>({
  state: {
    // Aqui van los state
  },
});

export const MainContextProvider: React.FC = ({ children }: any) => {
  const [state, setState] = useState<MainContextState>({ ...initialState });

  const contextValue = useMemo(
    () => ({
      handlers: {
        // Aqui van los handlers
      },
      state: state,
    }),
    [state]
  );
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
