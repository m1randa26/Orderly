import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const TableDialog = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        onClose();
      },
    }}
  >
    <DialogTitle>Ingresa el nombre del mesero</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        required
        margin="dense"
        id="name"
        name="name"
        label="Nombre"
        type="text"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancelar</Button>
      <Button type="submit">Aceptar</Button>
    </DialogActions>
  </Dialog>
);

TableDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TableDialog;