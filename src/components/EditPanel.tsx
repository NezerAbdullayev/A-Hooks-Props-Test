import React from "react";
import { Box } from "./Box";

interface IEditPanel {
  visible: boolean;
  close: () => void;
}

export const EditPanel = ({ visible, close }: IEditPanel) => {
  console.log("payment edit Panel");

  return (
    <Box
      visible={visible}
      onHide={close}
      style={{
        marginTop: 30,
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>Edit Panel</h3>
      <p>
        This is the edit panel, and its visibility is controlled by the
        `visible` prop.
      </p>
      <button onClick={close}>Close</button>
    </Box>
  );
};
