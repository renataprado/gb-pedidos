import "./App.css";
import OrdersList from "./components/OrdersList";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Gerenciador de pedidos</h3>
      </header>
      <div className="page">
        <OrdersList />
      </div>
    </div>
  );
}

export default App;
