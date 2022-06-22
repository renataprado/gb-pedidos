import "./App.css";
import OrdersList from "./components/OrdersList";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Gerenciador de pedidos</h3>
      </header>
      <div className="page">
        <OrdersList orders={dummyOrders} />
      </div>
    </div>
  );
}

const teste = [];
const dummyOrders = [
  [
      {
          "_id": "62b29d473a701e8dc3b8206f",
          "createAt": "2020-08-02T04:00:00.000Z",
          "orderId": "123abc",
          "value": 100.1,
          "name": "Aguardando pagamento",
          "__v": 0
      },
      {
          "_id": "62b29efaa6ae298d61e91a83",
          "createAt": "2020-08-02T04:15:00.000Z",
          "orderId": "123abc",
          "value": 100.1,
          "name": "Pagamento aprovado",
          "__v": 0
      }
  ],
  [
      {
          "_id": "62b29efba6ae298d61e91a84",
          "createAt": "2020-08-03T06:00:00.000Z",
          "orderId": "456def",
          "value": 100,
          "name": "Pagamento Aprovado",
          "__v": 0
      }
  ]
]

export default App;
