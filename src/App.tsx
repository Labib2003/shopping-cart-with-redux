import Navbar from "./components/Navbar";
import Store from "./pages/Store";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-3/4 mx-auto">
        <Store />
      </div>
    </div>
  );
}

export default App;
