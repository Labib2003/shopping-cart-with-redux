import CartItemComponent from "./components/CartItemComponent";
import Navbar from "./components/Navbar";
import { useShoppingCart } from "./contexts/ShoppingCartContext";
import Store from "./pages/Store";
import products from "./data/products.json"
import Filter from "./components/Filter";

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
          <Filter />
          <Store />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-1/4 bg-base-100 text-base-content">
          <p className="text-xl font-medium">Cart</p>
          {
            cartItems.map(item => <li key={item.id}>
              <CartItemComponent {...item}></CartItemComponent>
            </li>)
          }
          <p className="text-xl font-medium text-right mt-5">Grand Total: ${
            cartItems.reduce((total, cartItem) => {
              const item = products.find(item => item.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}</p>
        </ul>
      </div>
    </div>
  );
}

export default App;
