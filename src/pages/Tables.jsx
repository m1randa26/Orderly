import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";  // Importar useState
import Table from "../components/Table/Table";

const Tables = () => {
  const [selectedTable, setSelectedTable] = useState(null);  // Estado para almacenar la mesa seleccionada

  // Función para manejar la selección/deselección de mesas
  const handleTableClick = (id) => {
    if (selectedTable === id) {
      setSelectedTable(null);  // Deselecciona si la mesa ya está seleccionada
    } else {
      setSelectedTable(id);  // Selecciona la mesa
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 4
        }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
          Selecciona una mesa
        </Typography>
        <Alert severity="info" sx={{ mt: 3 }}>
          Al seleccionar la mesa la orden estará asociada a la mesa
          previamente seleccionada.
        </Alert>
      </Box>
      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: '1fr 1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr 1fr',
          },
          gap: 2,
          justifyItems: "center",
          alignItems: "center",
        }}>
        <Table idMesa={1} selected={selectedTable === 1} onClick={handleTableClick} />
        <Table idMesa={3} selected={selectedTable === 3} onClick={handleTableClick} />
        <Table idMesa={5} selected={selectedTable === 5} onClick={handleTableClick} />
        <Table idMesa={8} selected={selectedTable === 8} onClick={handleTableClick} />
        <Table idMesa={10} selected={selectedTable === 10} onClick={handleTableClick} />
        <Table idMesa={25} selected={selectedTable === 25} onClick={handleTableClick} />
        <Table idMesa={33} selected={selectedTable === 33} onClick={handleTableClick} />
        <Table idMesa={2} selected={selectedTable === 2} onClick={handleTableClick} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button variant="contained" color="success" size="large">
          Seleccionar
        </Button>
      </Box>
    </Container>
  );
};

export default Tables;
