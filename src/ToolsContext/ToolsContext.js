import { createContext, useEffect, useState } from "react";

const ToolsContext = createContext();
export function ToolsProvider({ children }) {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <ToolsContext.Provider
      value={{
        tools,
        setTools,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
}
export default ToolsContext;
