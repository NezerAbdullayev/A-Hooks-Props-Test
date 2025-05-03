import React, { useState } from "react";
import { useBoolean } from "ahooks";
import { Payment } from "../data";

interface IUseTableReturnType {
  count: number;
  increment: () => void;
  decrement: () => void;
  openEditPanel: () => void;
  closeEditPanel: () => void;
  handleEditPanel: (payment: Payment) => void;
  visibleEditPanel: boolean;
}

export const useTable = (): IUseTableReturnType => {
  const [
    visibleEditPanel,
    { setTrue: openEditPanel, setFalse: closeEditPanel },
  ] = useBoolean();

  const handleEditPanel = (payment: Payment) => {
    console.log(payment);
    openEditPanel();
  };

  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return {
    count,
    increment,
    decrement,
    openEditPanel,
    closeEditPanel,
    handleEditPanel,
    visibleEditPanel,
  };
};
