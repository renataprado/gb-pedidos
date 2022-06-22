import * as React from 'react';
import Box from '@mui/material/Box';
import OrderItem from './OrderItem';
import { Typography } from '@mui/material';

const OrdersList = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 1,
        p: 2
      }}
    >
      <Typography variant="h5" gutterBottom component="div">
        Histórico de Pedidos
      </Typography>
      <Box>
          {orders.map(order => (
            <OrderItem 
            key={order.orderId} 
            id={order.orderId} />
          ))}
      </Box>
    </Box>
  );
}

export default OrdersList;

const orders = [
  { 
    id: '1',
    createAt: '2020-08-02 01:00:00',
    orderId: '123abc',
    value: 100.10,
    name: 'Aguardando pagamento'
  },
  { 
    id: '21',
    createAt: '2020-08-03 03:00:00',
    orderId: '456def',
    value: 100,
    name: 'Pagamento Aprovado'
  }
]