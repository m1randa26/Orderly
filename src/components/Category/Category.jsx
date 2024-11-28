import PropTypes from 'prop-types';
import { Box, Paper, Typography } from "@mui/material"
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

const Category = ({ name, totalItems, color }) => {
    return (
        <Paper
            elevation="2"
            sx={{ bgcolor: color }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: { xs: "100%", sm: "300px", md: "200px" },
                    height: { xs: "auto", sm: "150px", md: "150px" },
                    padding: 2,
                }}>
                <FreeBreakfastIcon />
                <Typography variant='h5'>
                    {name}
                </Typography>
                <Typography variant='subtitle1'>
                    {totalItems}
                </Typography>
            </Box>
        </Paper>
    )
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    totalItems: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default Category