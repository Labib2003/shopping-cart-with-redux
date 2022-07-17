import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Store from "./pages/Store";

function App() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <ShoppingCartProvider>
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="w-3/4 mx-auto">
            <Store />
          </div>
        </ShoppingCartProvider>
      </div>
      {/* cart sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
