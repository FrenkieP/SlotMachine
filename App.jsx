import "./App.css";
import Slot from "./Slot.jsx";

function App() {
  return (
    <div>
      <Slot val1="1" val2="1" val3="1" />
      <Slot val1="1" val2="10" val3="1" />
    </div>
  );
}

export default App;
