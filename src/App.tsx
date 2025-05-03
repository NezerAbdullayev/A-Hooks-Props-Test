import { Table } from "./components";
import "./styles.css";

export default function App() {
  console.log("re-rendering APP");

  return (
    <div className="App">
      <Table />
    </div>
  );
}
