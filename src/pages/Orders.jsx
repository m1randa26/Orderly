<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
=======
import { Box, Container, Typography } from "@mui/material"
import Filter from "../components/OrderFilter/Filter"
import Order from "../components/Order/OrderFactura";
>>>>>>> orden

const Orders = () => {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    // Llamada al backend para obtener las órdenes
    axios
      .get("http://localhost:8080/api/ordenes") // Ajusta la URL según tu endpoint
      .then((response) => {
        setOrdenes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las órdenes:", error);
      });
  }, []);

  // Función para actualizar el estatus de la orden
  const actualizarEstatus = (id, nuevoEstatus) => {
    axios
      .put(`http://localhost:8080/api/ordenes/${id}`, nuevoEstatus, {
        headers: { "Content-Type": "text/plain" }, 
      })
      .then((response) => {
        setOrdenes((prevOrdenes) =>
          prevOrdenes.map((orden) =>
            orden.id === id ? { ...orden, estatus: nuevoEstatus } : orden
          )
        );
      })
      .catch((error) => {
        console.error("Error al actualizar el estatus:", error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" color="#fff" mt={3}>
        Listado de órdenes
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 2,
        }}
      >
        {ordenes.map((orden) => (
          <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }} key={orden.id}>
            <Container>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Mesero: {orden.mesero}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Orden #{orden.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mesa: {orden.mesa}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total: ${orden.precioTotal.toFixed(2)}
                    </Typography>
                  </Box>
                  <Chip
                    icon={<AccessTimeIcon />}
                    label={orden.estatus}
                    color={orden.estatus === "pendiente" ? "warning" : "success"}
                  />
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle2">Alimentos</Typography>
                  <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
                    Cantidad
                  </Typography>
                </Box>

                {orden.articulos.map((articulo) => (
                  <Box
                    key={articulo.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography variant="body2">{articulo.nombre}</Typography>
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                      {articulo.cantidad}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />

                <Box
                 
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => actualizarEstatus(orden.id, "Completado")}
                    disabled={orden.estatus === "Completado"}
                  >
                    Iniciar Orden
                  </Button>
                  {orden.estatus === "Completado" && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mt: 2 }}
                      onClick={() => console.log(`Realizar pago para orden #${orden.id}`)}
                    >
                      Realizar Pago
                    </Button>
                  )}
                </Box>
              </Box>
            </Container>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Orders;