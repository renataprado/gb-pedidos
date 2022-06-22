import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OrderStatus from "./OrderStatus";

const OrderItem = (props) => {

  const [green, setGreen] = useState(props.order.recentStatus.name.includes("entregue"))

  useEffect(() => {
    //console.log(props);
  }, [props]);


  return (
      <Box sx={{mt: 2}}>
        <Accordion sx={{bgcolor: green ? '#c3ebd2': '#f1edb7;'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box sx={{display: 'flex'}}>
              <Typography >Pedido nº {props.order.orderId}</Typography>
              <Typography sx={{ml: 6}}>{props.order.recentStatus.name}</Typography>
            </Box>
          
            
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{display: 'flex'}}>
              {props.order.status.map((status, index) => (
                <OrderStatus key={index} status={status}/>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
  );
};

export default OrderItem;
