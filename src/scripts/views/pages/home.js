// home.js
import UrlParser from "../../routes/url-parser";
import restoDbSource from "../../data/restodb--source";
import createRestaurantItemTemplate from "../templates/createRestaurantItemTemplate";

const Home = {
  async render() {
    return `
      <main id="mainContent" tabindex="0">
        <div class="hero">
          <img src="./images/heros/hero-image_4.jpg" alt="" />
        </div>
        <div id="restaurants" class="restaurants-container">
          <!-- Restaurant items will be rendered here -->
        </div>
      </main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById("restaurants");

    try {
      const menu = await restoDbSource.menuutama();
      console.log(menu); // Debugging

      menu.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      // Add event listener to each detail button
      const detailButtons = document.querySelectorAll(".restaurant-item__button");
      detailButtons.forEach((button) => {
        button.addEventListener("click", async () => {
          const restaurantId = button.getAttribute("data-id");
          sessionStorage.setItem("selectedRestaurantId", restaurantId);

          // Redirect to detail page
          UrlParser.navigateTo(`#/detail/${restaurantId}`);
        });
      });
    } catch (error) {
      console.error("Error fetching menuutama:", error);
    }
  },
};

export default Home;
