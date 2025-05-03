import React from "react";
import { Box } from "./Box";
import { fakePayments } from "../data";

type TableProps = {
  openEditPanel: () => void;
};

export const Table: React.FC<TableProps> = ({ openEditPanel }) => {
  return (
    <Box onShow={openEditPanel} className="table-container">
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
            <tr key={payment.id}>
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
  );
};
