/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Select all the restaurant cards and add a delete button to each
    document.querySelectorAll('.restaurant-card').forEach(card => {
      const deleteBtn = card.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        deleteRestaurantCard(card);
      });
    });
  });
  
  
  function deleteRestaurantCard(cardElement) {
    cardElement.remove(); // Removes the card from the DOM
  }