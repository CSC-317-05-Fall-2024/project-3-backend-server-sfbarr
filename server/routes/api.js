import express from 'express';

import restaurantFunctions from '../data/restaurants.js'; 
const { createRestaurant, deleteRestaurant, getRestaurants } = restaurantFunctions; 


const router = express.Router();

// Add routes here


router.get('/restaurants', (req, res) => {
    console.log("Router get request \n\n");
    const restaurants = getRestaurants();
    res.json(restaurants); // Respond with JSON
});

// Create a new restaurant
router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body; // Expecting body to have the new restaurant data
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant); // Respond with the created restaurant
    console.log("Router POST request \n\n");
});


// Delete a restaurant by ID

router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Extract ID from the URL and parse it
    console.log(`Received request to delete restaurant with ID: ${+id}`);
    const deleted = deleteRestaurant(id); // Check if the restaurant was deleted
    if (deleted) {
        res.status(204).send(); // No content to send back after deletion
    } else {
        res.status(404).send('Restaurant not found'); // Return 404 if not found
    }
    console.log("Router DELETE request \n\n");
});

// router.get('/restaurants', (req, res) => {
//     const restaurants = getRestaurants();
//     res.json(restaurants); // Send the list of restaurants as JSON
// });

// router.get('/restaurants/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const restaurant = getRestaurant(id);
    
//     if (restaurant) {
//         res.json(restaurant); // Send the specific restaurant as JSON
//     } else {
//         res.status(404).send('Restaurant not found');
//     }
// });

// router.post('/restaurants', (req, res) => {
//     const newRestaurant = req.body; // Assuming you send the new restaurant data in the request body
//     createRestaurant(newRestaurant);
//     res.status(201).send('Restaurant created');
// });

// router.delete('/restaurants/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     deleteRestaurant(id);
//     res.send('Restaurant deleted');
// });



export {router as backendRouter};