export type Payment = {
  id: string;
  customerName: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  method: "card" | "cash" | "bank";
  date: string;
};
export const fakePayments: Payment[] = [
  {
    id: "PMT-001",
    customerName: "Ali Həsənov",
    amount: 125.5,
    status: "paid",
    method: "card",
    date: "2025-04-01T10:15:00Z",
  },
  {
    id: "PMT-002",
    customerName: "Leyla Məmmədova",
    amount: 320.0,
    status: "pending",
    method: "bank",
    date: "2025-04-02T14:30:00Z",
  },
  {
    id: "PMT-003",
    customerName: "Rəşad Əliyev",
    amount: 89.99,
    status: "failed",
    method: "cash",
    date: "2025-04-03T09:00:00Z",
  },
  {
    id: "PMT-004",
    customerName: "Nigar Hacıyeva",
    amount: 210.75,
    status: "paid",
    method: "card",
    date: "2025-04-04T16:45:00Z",
  },
  {
    id: "PMT-005",
    customerName: "Elvin Hüseynov",
    amount: 150.0,
    status: "paid",
    method: "bank",
    date: "2025-04-05T11:20:00Z",
  },
];
