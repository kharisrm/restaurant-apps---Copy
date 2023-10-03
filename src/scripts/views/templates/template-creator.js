import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <!-- ... kode lainnya ... -->
  <h4>Menu</h4>
  <p>Food: ${restaurant.menus && restaurant.menus.foods ? restaurant.menus.foods.map((food) => food.name).join(", ") : ""}</p>
  <p>Drink: ${restaurant.menus && restaurant.menus.drinks ? restaurant.menus.drinks.map((drink) => drink.name).join(", ") : ""}</p>
  <!-- ... kode lainnya ... -->
`;

export default createRestaurantDetailTemplate;
