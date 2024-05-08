import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardActionArea, CardContent, CardMedia, IconButton, Badge } from '@mui/material';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 20, image: 'https://via.placeholder.com/150' },
    // Add more products as needed
  ]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Dashboard
          </Typography>
          <IconButton color="inherit" aria-label="cart">
            <Badge badgeContent={cartItems.length} color="error">
              {/* <ShoppingCartIcon /> */}
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Button size="small" color="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Shopping Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="body1">
            Your cart is empty.
          </Typography>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
