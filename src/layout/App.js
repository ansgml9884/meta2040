import { Route, Routes } from "react-router-dom";
import Purchase from "../shop/Purchase";
import Experience from "../oobe/Experience";
import StartShopping from "../shop/StartShopping";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartShopping />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
