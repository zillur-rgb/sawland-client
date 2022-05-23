import { createContext, useEffect, useState } from "react";

const ToolsContext = createContext();
export function ToolsProvider({ children }) {
  const [tools, setTools] = useState([]);
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);
  // console.log(tools);
  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(...tools, data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(...reviews, data));
  }, []);

  return (
    <ToolsContext.Provider
      value={{
        tools,
        setTools,
        reviews,
        setReviews,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
}
export default ToolsContext;
