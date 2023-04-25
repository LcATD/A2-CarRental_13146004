import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Grocery } from "./pages/grocery";
import { Fresh } from "./pages/fresh";
import { Meat } from "./pages/meat";
import { Dairy } from "./pages/dairy";
import { Frozen } from "./pages/frozen";
import { Checkout } from "./pages/checkout";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* Nav Bar */}
        <Navbar />
      </header>
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/meat" element={<Meat />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/frozen" element={<Frozen />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
