import { Box, Container, Paper, Typography, Divider, Button, IconButton } from '@mui/material';
import './App.css';
import Category from './components/Category/Category';
import Dish from './components/Dish/Dish';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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

const orders = [
  { id: 1, name: "Roast chicken", quantity: 2, price: 25.50 },
  { id: 2, name: "Red caviar", quantity: 3, price: 36.90 },
  { id: 3, name: "German sausage", quantity: 1, price: 5.90 },
  { id: 4, name: "Irish cream coffee", quantity: 1, price: 4.20 },
  { id: 5, name: "Caesar salad", quantity: 2, price: 12.50 },
  { id: 6, name: "Grilled salmon", quantity: 1, price: 15.30 }
];

const App = () => {
  const subtotal = orders.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2
      }}
    >
      {/* Contenido Principal */}
      <Container sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 2,
            mt: 5
          }}
        >
          {categories.map(category => (
            <Category
              name={category.name}
              totalItems={category.total}
              color={category.color}
              key={category.name}
            />
          ))}
        </Box>
        <Divider orientation='horizontal' sx={{ bgcolor: "#2d2d2d", mt: 5 }} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 2,
            mt: 5
          }}
        >
          {menuItems.map(item => (
            <Dish name={item.name} price={item.price} key={item.name} />
          ))}
        </Box>
      </Container>

      {/* Resumen del Pedido */}
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
            <IconButton aria-label='editar'>
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
              <Typography variant="body1">${order.price.toFixed(2)}</Typography>
              <IconButton size="small" color="error">
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
    </Box>
  );
};

export default App;
