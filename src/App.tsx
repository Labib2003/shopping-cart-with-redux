import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Store from "./pages/Store";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="w-3/4 mx-auto">
        <Store />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
