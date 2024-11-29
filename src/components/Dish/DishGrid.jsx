import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Dish from '../Dish/Dish';

const DishGrid = ({ menuItems }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
      gap: 2,
      mt: 5,
    }}
  >
    {menuItems.map(item => (
      <Dish name={item.name} price={item.price} key={item.name} />
    ))}
  </Box>
);

DishGrid.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DishGrid;