import { Box, Container } from '@mui/material';
import './App.css';
import Category from './components/Category/Category';


function App() {

  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 2,
          padding: 2,
          mt: 5
        }}>

          <Category name='Postres' totalItems={2} />
      </Box>
    </Container>
  )
}

export default App