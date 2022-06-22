import { useEffect, useState} from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {format} from 'date-fns'

const OrderStatus = props => {

  const [date, setDate] = useState(props.status.createAt);
  return (
    <Box sx={{m: 1}}>
        <Typography> {props.status.name} </Typography>
        <Typography>  {format(new Date(date), "dd/MM/yyyy")}</Typography>
    </Box>
  );
};
export default OrderStatus;