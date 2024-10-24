/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

// document.addEventListener('DOMContentLoaded', () => {
//     // Select all the restaurant cards and add a delete button to each
//     document.querySelectorAll('.restaurant-card').forEach(card => {
//       const deleteBtn = card.querySelector('.delete-btn');
//       deleteBtn.addEventListener('click', () => {
//         deleteRestaurantCard(card);
//       });
//     });
//   });
  
  
//   function deleteRestaurantCard(cardElement) {
//     cardElement.remove(); // Removes the card from the DOM
//   }

document.addEventListener('DOMContentLoaded', () => {
  // Select all the restaurant cards and add a delete button to each
  document.querySelectorAll('.restaurant-card').forEach(card => {
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      console.log('deleteBtn element clicked');
  });

    // Extract the restaurant ID from a data attribute on the card
    const restaurantId = card.dataset.id; // Assuming you're storing the ID in a data-id attribute

    deleteBtn.addEventListener('click', () => {
      console.log('DeleteBtn clicked');
      deleteRestaurantCard(restaurantId, card); // Pass the ID and card element
    });
  });
});

async function deleteRestaurantCard(restaurantId, cardElement) {
  console.log(typeof restaurantId);
  console.log(`Attempting to delete restaurant with ID: ${+restaurantId}`);
  
  try {
      const response = await fetch(`/api/restaurants/${+restaurantId}`, {
          method: 'DELETE',
      });

      console.log(`Response status: ${response.status}`);
      if (response.status === 204) {
          console.log(`Restaurant with ID ${restaurantId} deleted successfully`);
          cardElement.remove(); // Remove the card from the DOM
          console.log(cardElement);
      } else {
          console.error(`Failed to delete restaurant with ID ${restaurantId}`);
      }
  } catch (error) {
      console.error('Error during deletion:', error);
  }
}