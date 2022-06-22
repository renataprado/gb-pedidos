import { useEffect } from "react";
import Box from "@mui/material/Box";
import OrderItem from "./OrderItem";
import { Typography } from "@mui/material";


//const [orders, setOrders] = useState(second)
const OrdersList = props => {
  
    useEffect(() => {
      //console.log(props);
    }, [props])

    if(props.orders.length === 0){
      return (
        <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Voce ainda não possui pedidos!
        </Typography>
        </Box>
      )
    }
    
    return (
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
          }}
        >
          <Typography variant="h5" gutterBottom component="div">
            Histórico de Pedidos
          </Typography>
          <Box>
            <ul>
              {props.orders.map((order) => (
                <OrderItem order={order} />
              ))}
            </ul>
          </Box>
        </Box>
    );
  }

export default OrdersList;
