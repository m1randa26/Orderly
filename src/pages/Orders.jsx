import { Box, Container, Typography } from "@mui/material"
import Filter from "../components/OrderFilter/Filter"
import Order from "../components/Order/Order";

const Orders = () => {

  const alimentos = [
    { name: "Scrambled eggs with toast", qty: 1 },
    { name: "Smoked Salmon Bagel", qty: 1, },
    { name: "Belgian Waffles", qty: 2 },
    { name: "Classic Lemonade", qty: 1 },
    { name: "Classic Lemonade", qty: 1 },
    { name: "Classic Lemonade", qty: 1 },
    { name: "Classic Lemonade", qty: 1 },
    { name: "Classic Lemonade", qty: 1 },
  ]

  return (
    <Container>
      <Typography variant="h4" color="#fff" mt={3}>
        Listado de órdenes
      </Typography>
      <Filter />
      <Box
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 2,
        }}>

        <Order alimentos={alimentos} />
        <Order alimentos={alimentos} />
        <Order alimentos={alimentos} />
        <Order alimentos={alimentos} />
      </Box>
    </Container>
  )
}

export default Orders