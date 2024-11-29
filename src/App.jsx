import { Box, Container, Paper, Typography, Divider, Button, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import './App.css';
import Category from './components/Category/Category';
import Dish from './components/Dish/Dish';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

const categories = [
  { name: "Desayunos", total: 13, color: "#cfdddb" },
  { name: "Sopas", total: 8, color: "#e4cded" },
  { name: "Pastas", total: 10, color: "#c2dbe9" },
  { name: "Postres", total: 9, color: "#c9caef" },
  { name: "Alcohol", total: 12, color: "#fac1d9" },
  { name: "Bebidas", total: 11, color: "#e5dade" },
  { name: "Ensaladas", total: 7, color: "#f1c8d0" },
  { name: "Especialidades", total: 5, color: "#f1c8d0" }
];

const menuItems = [
  { name: "Tacos al pastor", price: "$50" },
  { name: "Burritos", price: "$80" },
  { name: "Enchiladas verdes", price: "$90" },
  { name: "Pozole rojo", price: "$120" },
  { name: "Tamales de pollo", price: "$35" },
  { name: "Quesadillas", price: "$40" },
  { name: "Sopes", price: "$60" },
  { name: "Chiles en nogada", price: "$150" },
  { name: "Pasta al pesto", price: "$110" },
  { name: "Pizza Margarita", price: "$130" },
  { name: "Hamburguesa clásica", price: "$90" },
  { name: "Sushi rolls", price: "$180" },
  { name: "Ramen", price: "$120" },
  { name: "Paella", price: "$200" },
  { name: "Ceviche de camarón", price: "$140" }
];

const App = () => {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddDish = (name) => {
    const existingDish = orders.find(order => order.name === name);
    if (existingDish) {
      setOrders(orders.map(order =>
        order.name === name ? { ...order, quantity: order.quantity + 1 } : order
      ));
    } else {
      setOrders([...orders, { id: name, name, quantity: 1, price: menuItems.find(item => item.name === name).price }]);
    }
  };

  const handleRemoveDish = (name) => {
    setOrders(prevOrders => {
      // Verifica si el platillo ya existe en los pedidos
      const updatedOrders = prevOrders.map(order =>
        order.name === name && order.quantity > 0
          ? { ...order, quantity: order.quantity - 1 } // Disminuir cantidad si es mayor que 0
          : order
      ).filter(order => order.quantity > 0); // Eliminar platillo cuando la cantidad llega a 0
  
      return updatedOrders;
    });
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const subtotal = orders.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
      {/* Contenido Principal */}
      <Container sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mt: 5 }}>
          {categories.map(category => (
            <Category name={category.name} totalItems={category.total} color={category.color} key={category.name} />
          ))}
        </Box>
        <Divider orientation='horizontal' sx={{ bgcolor: "#2d2d2d", mt: 5 }} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 2, mt: 5 }}>
          {menuItems.map(item => (
            <Dish
              name={item.name}
              price={item.price}
              key={item.name}
              onAddDish={handleAddDish}
              onRemoveDish={handleRemoveDish}
              quantity={orders.find(order => order.name === item.name)?.quantity || 0}
            />
          ))}
        </Box>
      </Container>

      {/* Resumen del Pedido */}
      <Paper elevation={3} sx={{
        width: { xs: "100%", md: 350 },
        bgcolor: "#1c1c1e",
        color: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Encabezado */}
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1
          }}>
            <Typography variant="h6">
              Table 5
            </Typography>
            <IconButton aria-label='editar' onClick={handleClickOpen}>
              <EditIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
          <Typography variant="subtitle2" color="gray">
            Leslie K.
          </Typography>
        </Box>

        <Divider sx={{ my: 2, bgcolor: "#444" }} />

        {/* Lista de pedidos con scroll */}
        <Box
          sx={{
            flexGrow: 1,
            maxHeight: 300, // Altura máxima del área con scroll
            overflow: "auto",
          }}
        >
          {orders.map((order) => (
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
    <Typography variant="body1">
      {order.name} x{order.quantity}
    </Typography>
    <Typography variant="body1">${(parseFloat(order.price.slice(1)) * order.quantity).toFixed(2)}</Typography>
    {/* Aquí agregamos el onClick */}
    <IconButton size="small" color="error" onClick={() => handleRemoveDish(order.name)}>
      <DeleteIcon />
    </IconButton>
  </Box>
))}
        </Box>

        <Divider sx={{ my: 2, bgcolor: "#444" }} />

        {/* Totales */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Subtotal</Typography>
            <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Tax 10%</Typography>
            <Typography variant="body2">${tax.toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ my: 1, bgcolor: "#444" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">${total.toFixed(2)}</Typography>
          </Box>
        </Box>

        {/* Botón de acción */}
        <Button variant="contained" color="primary" fullWidth>
          Place Order
        </Button>
      </Paper>

      {/* Dialogo para ingresar el número de mesa */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Ingresa el número de mesa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="tableNumber"
            name="tableNumber"
            label="Número de mesa"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Aceptar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default App;