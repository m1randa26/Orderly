import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Category from '../Category/Category';

const CategoryGrid = ({ categories }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
      gap: 2,
      mt: 5,
    }}
  >
    {categories.map(category => (
      <Category
        name={category.name}
        totalItems={category.total}
        color={category.color}
        key={category.name}
      />
    ))}
  </Box>
);

CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryGrid;