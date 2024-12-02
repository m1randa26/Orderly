import { Box, Container, Divider } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from './components/Category/Categories.jsx'; // Importa el componente Categories
import Dish from './components/Dish/Dish';
import OrderSummary from './components/OrderSummary/OrderSummary';
import menuItems from './data/menuItems';
import TableDialog from './components/TableDialog';

const App = () => {
  const location = useLocation();
  const selectedTable = location.state?.selectedTable;

  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [savedName, setSavedName] = useState("Nombre");

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
    setOrders(prevOrders => prevOrders
      .map(order => order.name === name ? { ...order, quantity: order.quantity - 1 } : order)
      .filter(order => order.quantity > 0)
    );
  };

  const handleSaveValue = (value) => {
    setSavedName(value);
  };

  const subtotal = orders.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
      <Container>
        <Categories /> {/* Usa el componente Categories aquí */}
        <Divider sx={{ mt: 5, bgcolor: "#323232" }} />
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr 1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr',
          },
          gap: 2,
          mt: 5,
        }}>
          {menuItems.map(item => (
            <Dish
              key={item.name}
              {...item}
              onAddDish={handleAddDish}
              onRemoveDish={handleRemoveDish}
              quantity={orders.find(order => order.name === item.name)?.quantity || 0}
            />
          ))}
        </Box>
      </Container>
      <OrderSummary
        orders={orders}
        subtotal={subtotal}
        tax={tax}
        total={total}
        onEditName={() => setOpen(true)}
        onRemoveDish={handleRemoveDish}
        name={savedName}
        selectedTable={selectedTable}
      />
      <TableDialog open={open} onClose={() => setOpen(false)} onSave={handleSaveValue} />
    </Box>
  );
};

export default App;
