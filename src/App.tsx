import CartItemComponent from "./components/CartItemComponent";
import Navbar from "./components/Navbar";
import { useShoppingCart } from "./contexts/ShoppingCartContext";
import Store from "./pages/Store";

function App() {
  const { cartItems } = useShoppingCart();
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="w-3/4 mx-auto">
          <Store />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <p>Cart</p>
          {
            cartItems.map(item => <li key={item.id}>
              <CartItemComponent {...item}></CartItemComponent>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
