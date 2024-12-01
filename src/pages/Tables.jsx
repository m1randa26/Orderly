import { Alert, Box, Button, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";  // Importar useEffect
import Table from "../components/Table/Table";
import createApiUrl from "../api"; // Asegúrate de que este archivo api.js esté bien configurado

const Tables = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [mesas, setMesas] = useState([]);  // Estado para almacenar las mesas obtenidas del backend

  // Fetch de las mesas al cargar el componente
  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await fetch(createApiUrl('mesas'));
        const data = await response.json();
        setMesas(data);  // Guardar las mesas en el estado
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };

    fetchMesas();  // Llamar a la función fetchMesas
  }, []);

  const handleTableClick = (id) => {
    if (selectedTable === id) {
      setSelectedTable(null);
    } else {
      setSelectedTable(id);
    }
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
          Selecciona una mesa
        </Typography>
        <Alert severity="info" sx={{ mt: 3 }}>
          Al seleccionar la mesa, la orden estará asociada a la mesa previamente seleccionada.
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
        {/* Mapear las mesas obtenidas del backend */}
        {mesas.map((mesa) => (
          <Table
            key={mesa.id}
            idMesa={mesa.numero}
            selected={selectedTable === mesa.numero}
            onClick={handleTableClick}
            disponible={mesa.disponible}  // Pasar el estado disponible como prop
          />
        ))}
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
