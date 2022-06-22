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

export default App;
