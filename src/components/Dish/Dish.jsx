import { Box, Button, Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"

const Dish = ({ name, price }) => {
    return (
        <Paper elevation="2"
            sx={{ bgcolor: "#2d2d2d", display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: { xs: "100%", sm: "350px", md: "250px" },
                    height: { xs: "auto", sm: "150px", md: "150px" },
                    padding: 2
                }}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                    {name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#989898" }}>
                    {price}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: 2
                    }}>
                    <Button variant="outlined"
                        sx={{
                            minWidth: '32px',
                            minHeight: '32px',
                            borderRadius: '12px',
                            color: '#cfcfcf',
                            borderColor: '#cfcfcf'
                        }}>
                        -
                    </Button>
                    <Typography variant="h6" sx={{ color: "#fff" }}>
                        0
                    </Typography>
                    <Button variant="outlined"
                        sx={{
                            minWidth: '32px',
                            minHeight: '32px',
                            borderRadius: '12px',
                            color: '#cfcfcf',
                            borderColor: '#cfcfcf'
                        }}>
                        +
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}

Dish.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Dish