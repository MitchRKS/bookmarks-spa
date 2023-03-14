import React, { useState, createContext, useContext } from "react";

const AuthControllerContext = createContext({});

export function ProvideAuthController({ children }) {
  const provider = useController();
  return (
    <AuthControllerContext.Provider value={provider}>
      {children}
    </AuthControllerContext.Provider>
  );
}

export const useAuthController = () => {
  return useContext(AuthControllerContext);
};

function useController() {
  const [authorized, setAuthorized] = useState(false);
  return { authorized, setAuthorized };
}
