import PropTypes from 'prop-types';
import { Paper, Box, Typography, Divider, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const OrderSummary = ({ orders, openDialog }) => {
  const subtotal = orders.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <Paper
      elevation={3}
      sx={{
        width: { xs: "100%", md: 350 },
        bgcolor: "#1c1c1e",
        color: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6">Table 5</Typography>
          <IconButton onClick={openDialog}>
            <EditIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Typography variant="subtitle2" color="gray">
          Leslie K.
        </Typography>
      </Box>
      <Divider sx={{ my: 2, bgcolor: "#444" }} />
      <Box sx={{ flexGrow: 1, maxHeight: 300, overflow: "auto" }}>
        {orders.map(order => (
          <Box
            key={order.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#2c2c2e",
              borderRadius: 1,
              padding: 1,
              mb: 1,
            }}
          >
            <Typography>{order.name} x{order.quantity}</Typography>
            <Typography>${order.price.toFixed(2)}</Typography>
            <IconButton size="small" color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 2, bgcolor: "#444" }} />
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Tax 10%</Typography>
          <Typography>${tax.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 1, bgcolor: "#444" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">${total.toFixed(2)}</Typography>
        </Box>
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Place Order
      </Button>
    </Paper>
  );
};

OrderSummary.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  openDialog: PropTypes.func.isRequired,
};

export default OrderSummary;