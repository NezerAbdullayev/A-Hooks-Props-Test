import React from "react";
import { Box } from "./Box";
import { fakePayments } from "../data";
import { RenderComponent } from "./RenderComponent";
import EditPanel from "./EditPanel";
import { useTable } from "../hooks/useTable";

export const Table: React.FC = () => {
  const {
    count,
    increment,
    decrement,
    openEditPanel,
    closeEditPanel,
    handleEditPanel,
    visibleEditPanel,
  } = useTable();
  return (
    <>
      <Box className="table-container">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Müştəri</th>
              <th>Məbləğ</th>
              <th>Status</th>
              <th>Ödəniş növü</th>
              <th>Tarix</th>
            </tr>
          </thead>
          <tbody>
            {fakePayments.map((payment) => (
              <tr
                key={payment.id}
                onClick={() => handleEditPanel(payment)}
                style={{ cursor: "pointer" }}
              >
                <td>{payment.id}</td>
                <td>{payment.customerName}</td>
                <td>{payment.amount.toFixed(2)} ₼</td>
                <td>{payment.status}</td>
                <td>{payment.method}</td>
                <td>{new Date(payment.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* re-render component */}
      <RenderComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
      <div style={{ marginTop: 30 }} />

      {/* edit Panel */}
      <EditPanel visible={visibleEditPanel} close={closeEditPanel} />
    </>
  );
};
