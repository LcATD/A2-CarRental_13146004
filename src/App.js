import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Browse } from "./pages/browse";
import { Checkout } from "./pages/checkout";
import { Navbar } from "./components/navbar";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <header className="header">
          {/* Nav Bar */}
          <Navbar />
        </header>
        <Routes>
          <Route path="/browse" element={<Browse />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
