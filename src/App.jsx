import { Box, Container, Divider } from '@mui/material';
import { useState } from 'react';
import Category from './components/Category/Category';
import Dish from './components/Dish/Dish';
import OrderSummary from './components/OrderSummary/OrderSummary';
import categories from './data/categories';
import menuItems from './data/menuItems';
import { EggAlt, SoupKitchen,
  RamenDining, Cookie, Liquor, LocalDrink, Restaurant, MenuBookSharp
} from '@mui/icons-material';
import TableDialog from './components/TableDialog';

const iconMap = {
  "Breakfast": <EggAlt />,
  "Soup": <SoupKitchen />,
  "Pasta": <RamenDining />,
  "Dessert": <Cookie />,
  "Liquor": <Liquor />,
  "Drink": <LocalDrink />,
  "Salad": <Restaurant />,
  "Special": <MenuBookSharp />,
};

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
    setOrders(prevOrders => prevOrders
      .map(order => order.name === name ? { ...order, quantity: order.quantity - 1 } : order)
      .filter(order => order.quantity > 0)
    );
  };

  const subtotal = orders.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
      <Container>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr 1fr', // 2 columnas en pantallas pequeñas
            sm: '1fr 1fr', // 2 columnas en pantallas medianas
            md: '1fr 1fr 1fr 1fr', // 4 columnas en pantallas grandes
          },
          gap: 2,
          mt: 5,
        }}>
          {categories.map(category => (
            <Category
              key={category.name}
              name={category.name}
              totalItems={category.total}
              color={category.color}
              icon={iconMap[category.icon]}
            />
          ))}
        </Box>
        <Divider sx={{ mt: 5, bgcolor: "#323232" }} />
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr 1fr', // 2 columnas en pantallas pequeñas
            sm: '1fr 1fr', // 2 columnas en pantallas medianas
            md: '1fr 1fr 1fr 1fr', // 4 columnas en pantallas grandes
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
      />
      <TableDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default App;