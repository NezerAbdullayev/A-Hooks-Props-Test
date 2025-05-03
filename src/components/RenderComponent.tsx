import React, { useState } from "react";
import { Box } from "./Box";

export const RenderComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <Box
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
        margin: "40px auto",
        textAlign: "center",
        backgroundColor: "#fafafa",
      }}
    >
      <h2>Sayğac: {count}</h2>
      <Box style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={decrement}>Azalt</button>
        <button onClick={increment}>Artır</button>
      </Box>
    </Box>
  );
};
