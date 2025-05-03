import { useBoolean } from "ahooks";
import { EditPanel, Table } from "./components";
import "./styles.css";

export default function App() {
  const [
    visibleEditPanel,
    { setTrue: openEditPanel, setFalse: closeEditPanel },
  ] = useBoolean();

  return (
    <div className="App">
      <Table openEditPanel={openEditPanel} />
      <EditPanel visible={visibleEditPanel} close={closeEditPanel} />
    </div>
  );
}
