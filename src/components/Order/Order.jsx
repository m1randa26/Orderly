import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PropTypes from "prop-types";

const Order = ({ alimentos }) => {
  return (
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
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
                Mesero Isaac
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Orden #925
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mesa #15
              </Typography>
            </Box>
            <Chip icon={<AccessTimeIcon/>} label="Pendiente" color="warning" />
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              06:12 PM
            </Typography>
          </Box>

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

          {/* Items de la orden */}
          {alimentos.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                my: 1,
                alignItems: "center",
              }}
            >
              <Typography variant="body2">{item.name}</Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", flexBasis: "20%" }}
              >
                {item.qty}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Botones */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Button variant="outlined" color="primary" fullWidth>
              Iniciar Orden
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

Order.propTypes = {
  alimentos: PropTypes.array.isRequired
}

export default Order;