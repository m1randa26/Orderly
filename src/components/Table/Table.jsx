import { Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Table = ({ idMesa, selected, onClick }) => {
  return (
    <Paper
      elevation={3}
      onClick={() => onClick(idMesa)}  // Maneja el clic para seleccionar/deseleccionar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 150,
        height: 150,
        borderRadius: 2,
        backgroundColor: selected ? "#3fa34d" : "#ebeff3", // Cambia el color si está seleccionada
        cursor: "pointer", // Para indicar que es interactivo
        transition: "background-color 0.3s ease", // Suaviza la transición de color
        '&:hover': {
          backgroundColor: selected ? "#2a9134" : "#d1d9e6", // Cambio de color al pasar el mouse
        },
      }}
    >
      <Typography variant="h6" sx={{ color: selected ? "#fff" : "#000" }}>{idMesa}</Typography>
    </Paper>
  );
};

Table.propTypes = {
  idMesa: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Table;