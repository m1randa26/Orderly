import { Box, Container, Divider } from '@mui/material';
import './App.css';
import { useState } from 'react';
import CategoryGrid from './components/Category/CategoryGrid';
import DishGrid from './components/Dish/DishGrid';
import OrderSummary from './components/OrderSummary';
import TableDialog from './components/TableDialog';

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
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <Container sx={{ flexGrow: 1 }}>
        <CategoryGrid categories={categories} />
        <Divider sx={{ bgcolor: "#2d2d2d", mt: 5 }} />
        <DishGrid menuItems={menuItems} />
      </Container>
      <OrderSummary
        orders={orders}
        openDialog={() => setOpen(true)}
      />
      <TableDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default App;
