import { useState, useEffect } from 'react';
import Category from '../Category/Category';
import { Box } from '@mui/material';
import LocalDrink from '@mui/icons-material/LocalDrink'; // Icono de bebida
import Restaurant from '@mui/icons-material/Restaurant'; // Icono de comida
import SoupKitchen from '@mui/icons-material/SoupKitchen'; // Icono de sopa
import MenuBookSharp from '@mui/icons-material/MenuBookSharp'; // Icono por defecto
import createApiUrl from "../../api"; // Asegúrate de que este archivo api.js esté bien configurado
import axios from 'axios';

// Iconos asignados según la categoría
const iconMap = {
  bebida: <LocalDrink />,
  comida: <Restaurant />,
  sopa: <SoupKitchen />,
  // Agregar más categorías e iconos si es necesario
};

// Colores predefinidos para las categorías
const categoryColors = ["#cfdddb", "#e4cded", "#c2dbe9", "#c9caef", "#fac1d9", "#e5dade", "#f1c8d0"];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(createApiUrl('inventario/categorias/items'));
        if (!response.ok) throw new Error('Error al obtener categorías');

        const data = await response.json();

        // Asigna colores e iconos dinámicos a cada categoría
        const mappedCategories = data.map((item, index) => ({
          name: item.categoria.charAt(0).toUpperCase() + item.categoria.slice(1), // Capitaliza la primera letra
          total: item.items,
          color: categoryColors[index % categoryColors.length], // Cicla colores predefinidos
          icon: iconMap[item.categoria] || <MenuBookSharp /> // Icono por defecto si no se encuentra en iconMap
        }));

        setCategories(mappedCategories); // Actualiza el estado con las categorías
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    fetchCategories();
  }, []);

  // Función que maneja el clic en una categoría
  const handleCategoryClick = async (categoryName) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/inventario/categoria/${categoryName}`);
      setInventory(response.data.articulos);
      console.log(inventory);
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr 1fr',
        sm: '1fr 1fr',
        md: '1fr 1fr 1fr 1fr',
      },
      gap: 2,
      mt: 5,
    }}>
      {categories.map(category => (
        <Category
          key={category.name}
          name={category.name}
          totalItems={category.total}
          color={category.color}
          icon={category.icon}
          onClick={handleCategoryClick}
        />
      ))}
    </Box>
  );
};

export default Categories;
