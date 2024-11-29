import React, { useState, useEffect  } from "react";
import { createChart } from 'lightweight-charts';
import { Button,  ButtonGroup, useTheme,} from '@mui/material';

import {Box, Grid, Card, Typography, CardContent, IconButton, MenuItem, Select, List, ListItem, ListItemText,
  ListItemButton,  ListItemIcon, Divider, 
} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SearchIcon from "@mui/icons-material/Search";
import TableBarIcon from '@mui/icons-material/TableBar';
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

// Datos
const dayData = [  { time: '2018-10-19', value: 26.19 },
    { time: '2018-10-22', value: 25.87 },
    { time: '2018-10-23', value: 25.83 },
    { time: '2018-10-24', value: 25.78 },
    { time: '2018-10-25', value: 25.82 },
    { time: '2018-10-26', value: 25.81 },
    { time: '2018-10-29', value: 25.82 },
    { time: '2018-10-30', value: 25.71 },
    { time: '2018-10-31', value: 25.82 },
    { time: '2018-11-01', value: 25.72 },
    { time: '2018-11-02', value: 25.74 },
    { time: '2018-11-05', value: 25.81 },
    { time: '2018-11-06', value: 25.75 },
    { time: '2018-11-07', value: 25.73 },
    { time: '2018-11-08', value: 25.75 },
    { time: '2018-11-09', value: 25.75 },
    { time: '2018-11-12', value: 25.76 },
    { time: '2018-11-13', value: 25.8 },
    { time: '2018-11-14', value: 25.77 },
    { time: '2018-11-15', value: 25.75 },
    { time: '2018-11-16', value: 25.75 },
    { time: '2018-11-19', value: 25.75 },
    { time: '2018-11-20', value: 25.72 },
    { time: '2018-11-21', value: 25.78 },
    { time: '2018-11-23', value: 25.72 },
    { time: '2018-11-26', value: 25.78 },
    { time: '2018-11-27', value: 25.85 },
    { time: '2018-11-28', value: 25.85 },
    { time: '2018-11-29', value: 25.55 },
    { time: '2018-11-30', value: 25.41 },
    { time: '2018-12-03', value: 25.41 },
    { time: '2018-12-04', value: 25.42 },
    { time: '2018-12-06', value: 25.33 },
    { time: '2018-12-07', value: 25.39 },
    { time: '2018-12-10', value: 25.32 },
    { time: '2018-12-11', value: 25.48 },
    { time: '2018-12-12', value: 25.39 },
    { time: '2018-12-13', value: 25.45 },
    { time: '2018-12-14', value: 25.52 },
    { time: '2018-12-17', value: 25.38 },
    { time: '2018-12-18', value: 25.36 },];
const weekData = [ { time: '2016-07-18', value: 26.1 },
    { time: '2016-07-25', value: 26.19 },
    { time: '2016-08-01', value: 26.24 },
    { time: '2016-08-08', value: 26.22 },
    { time: '2016-08-15', value: 25.98 },
    { time: '2016-08-22', value: 25.85 },
    { time: '2016-08-29', value: 25.98 },
    { time: '2016-09-05', value: 25.71 },
    { time: '2016-09-12', value: 25.84 },
    { time: '2016-09-19', value: 25.89 },
    { time: '2016-09-26', value: 25.65 },
    { time: '2016-10-03', value: 25.69 },
    { time: '2016-10-10', value: 25.67 },
    { time: '2016-10-17', value: 26.11 },
    { time: '2016-10-24', value: 25.8 },
    { time: '2016-10-31', value: 25.7 },
    { time: '2016-11-07', value: 25.4 },
    { time: '2016-11-14', value: 25.32 },
    { time: '2016-11-21', value: 25.48 },
    { time: '2016-11-28', value: 25.08 },
    { time: '2016-12-05', value: 25.06 },
    { time: '2016-12-12', value: 25.11 },
    { time: '2016-12-19', value: 25.34 },];
const monthData = [{ time: '2006-12-01', value: 25.4 },
    { time: '2007-01-01', value: 25.5 },
    { time: '2007-02-01', value: 25.11 },
    { time: '2007-03-01', value: 25.24 },
    { time: '2007-04-02', value: 25.34 },
    { time: '2007-05-01', value: 24.82 },
    { time: '2007-06-01', value: 23.85 },
    { time: '2007-07-02', value: 23.24 },
    { time: '2007-08-01', value: 23.05 },
    { time: '2007-09-03', value: 22.26 },
    { time: '2007-10-01', value: 22.52 },
    { time: '2007-11-01', value: 20.84 },
    { time: '2007-12-03', value: 20.37 },
    { time: '2008-01-01', value: 23.9 },
    { time: '2008-02-01', value: 22.58 },];

const Ganancias = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const stats = [
    { title: "Revenue", value: "$1200.56", icon: <MonetizationOnIcon /> },
    { title: "Paid orders", value: 198, icon: <ShoppingCartIcon /> },
    { title: "Tip amount", value: "$186.72", icon: <BarChartIcon /> },
    { title: "Dishes sold", value: 227, icon: <BarChartIcon /> },
  ];

  const chartContainerRef = React.useRef(null);
        const [chartInstance, setChartInstance] = useState(null);
        const [currentData, setCurrentData] = useState(dayData);
        const theme = useTheme();
      
        useEffect(() => {
          // Crear el gráfico
          const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 347,
            layout: {
              backgroundColor: "#000",
              textColor: theme.palette.text.primary,
            },
            grid: {
              vertLines: {
                color: theme.palette.divider,
              },
              horzLines: {
                color: theme.palette.divider,
              },
            },
            
          });
      
          const lineSeries = chart.addLineSeries({
            color: '#c113de', // Aquí defines el color rojo
            lineWidth: 2, // Opcional: Ajusta el grosor de la línea
          });
          lineSeries.setData(currentData);
          setChartInstance(chart);
      
          return () => chart.remove(); // Limpieza
        }, [theme, currentData]);
      
        // Cambiar rango
        const handleRangeChange = (data) => {
          setCurrentData(data);
          if (chartInstance) {
            const lineSeries = chartInstance.addLineSeries();
            lineSeries.setData(data);
          }
        };

  return (
    
    <Box sx={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", p: 3, display: 'flex' }}>
      <Box
        sx={{width: '230px', backgroundColor: '#1c1c1c', padding: '16px',}}>
        <Typography variant="h5" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Restaurante
        </Typography>
        <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon  sx={{color: "#fff"}}>
            <HomeIcon  />
          </ListItemIcon>
          <ListItemText primary="home" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon sx={{color: "#fff"}}>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon sx={{color: "#fff"}}>
            <TableBarIcon  />
          </ListItemIcon>
          <ListItemText primary="Mesas" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <BarChartIcon  color="secondary"/>
          </ListItemIcon>
          <ListItemText primary="Ganancias" />
        </ListItemButton>
      </List>
      <Divider />
      </Box>
      <Box sx={{ flexGrow: 1, padding: '24px' }}>

      {/* Dashboard Title */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Dashboard
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: index === 0 ? "#9c27b0" : "#1e1e1e",
                color: "#fff",
                height: "100%",
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {stat.icon}
                  <Typography sx={{ marginLeft: "10px" }}>{stat.title}</Typography>
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Accepted Orders Section */}
      <Box mt={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Accepted Orders
          </Typography>
          <ButtonGroup variant="contained" color="secondary" aria-label="Medium-sized button group">
              <Button onClick={() => handleRangeChange(dayData)}>Day</Button>
              <Button onClick={() => handleRangeChange(weekData)}>Week</Button>
              <Button onClick={() => handleRangeChange(monthData)}>Month</Button>
            </ButtonGroup>
          
        </Box>
        <Box
          sx={{
            backgroundColor: "#1e1e1e",
            height: "auto",
            p: 2,
            borderRadius: "8px",
          }}
        >
              <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: 2,
            }}
          >
            
            <Box
              ref={chartContainerRef}
              sx={{
                width: '100%',
                maxWidth: '800px',
                border: '5px solid #ffff',
                borderRadius: '10px'
              }}
            />
            
          </Box>
         
        </Box>
        
      </Box>
      </Box>
    </Box>
  );
};

export default Ganancias;
