import { Box, Container } from '@mui/material';
import './App.css';
import Category from './components/Category/Category';
import Divider from '@mui/material/Divider';
import Dish from './components/Dish/Dish';

const categories = [
  {
    name: "Desayunos",
    total: 13,
    color: "#cfdddb"
  },
  {
    name: "Sopas",
    total: 8,
    color: "#e4cded"
  },
  {
    name: "Pastas",
    total: 10,
    color: "#c2dbe9"
  },
  {
    name: "Postres",
    total: 9,
    color: "#c9caef"
  },
  {
    name: "Alcohol",
    total: 12,
    color: "#fac1d9"
  },
  {
    name: "Bebidas",
    total: 11,
    color: "#e5dade"
  },
  {
    name: "Ensaladas",
    total: 7,
    color: "#f1c8d0"
  },
  {
    name: "Especialidades",
    total: 5,
    color: "#f1c8d0"
  }
]

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


function App() {

  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 2,
          mt: 5
        }}>

        {categories.map(category => (
          <Category
            name={category.name}
            totalItems={category.total}
            color={category.color}
            key={category.name} />
        ))}
      </Box>
      <Divider orientation='horizontal' sx={{ bgcolor: "#2d2d2d", mt: 5 }} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 2,
          mt: 5
        }}>
          {menuItems.map(item => (
            <Dish name={item.name} price={item.price} key={item.name} />
          ))}
      </Box>
    </Container>
  )
}

export default App