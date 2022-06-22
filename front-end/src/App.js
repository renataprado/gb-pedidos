import "./App.css";
import React, {useState, useEffect } from "react";
import OrdersList from "./components/OrdersList";
import catcorn from '../src/cat.png';
import { CircularProgress } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadeadOrders, setLoadeadOrders] = useState([]);
  const [error, setError] = useState();


  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/orders')
        const responseData = await response.json();
        setLoadeadOrders(responseData.orders);
        setTimeout(() => setIsLoading(false), 500);
      } catch (err) {
        setError(err.message);
      }
    };
    sendRequest();
  }, [])
  
  return (
    <div className="App">
      <header>
        <img src={catcorn}  width="70" height="70"/>
      </header>
      <div className="page">
        {isLoading ? <CircularProgress color="primary" /> : 
         <OrdersList orders={loadeadOrders} />
         }
       
      </div>
    </div>
  );
}
const teste = [];
const dummyOrders = [
  {
      "orderId": "123abc",
      "status": [
          {
              "_id": "62b2e7ac7c0991c973fadf25",
              "createAt": "2020-08-02T04:00:00.000Z",
              "orderId": "123abc",
              "value": 100.1,
              "name": "Aguardando pagamento",
              "__v": 0
          }
      ],
      "recentStatus": {
          "_id": "62b2e7ac7c0991c973fadf25",
          "createAt": "2020-08-02T04:00:00.000Z",
          "orderId": "123abc",
          "value": 100.1,
          "name": "Aguardando pagamento",
          "__v": 0
      }
  },
  {
      "orderId": "456def",
      "status": [
          {
              "_id": "62b2e7ac7c0991c973fadf28",
              "createAt": "2020-08-05T06:00:00.000Z",
              "orderId": "456def",
              "value": 100,
              "name": "Pedido enviado",
              "__v": 0
          },
          {
              "_id": "62b2e7ac7c0991c973fadf26",
              "createAt": "2020-08-03T06:00:00.000Z",
              "orderId": "456def",
              "value": 100,
              "name": "Pagamento Aprovado",
              "__v": 0
          },
          {
              "_id": "62b2e7ac7c0991c973fadf27",
              "createAt": "2020-08-04T06:00:00.000Z",
              "orderId": "456def",
              "value": 100,
              "name": "Preparando pedido",
              "__v": 0
          },
          {
              "_id": "62b2e7ac7c0991c973fadf29",
              "createAt": "2020-08-06T06:00:00.000Z",
              "orderId": "456def",
              "value": 100,
              "name": "Pedido entregue",
              "__v": 0
          }
      ],
      "recentStatus": {
          "_id": "62b2e7ac7c0991c973fadf29",
          "createAt": "2020-08-06T06:00:00.000Z",
          "orderId": "456def",
          "value": 100,
          "name": "Pedido entregue",
          "__v": 0
      }
  }
]

export default App;
