// Pastikan path ke UrlParser sesuai dengan struktur direktori Anda
import UrlParser from "../../routes/url-parser";
import restoDbSource from "../../data/restodb--source";
import createRestaurantDetailTemplate from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail-container">
        <!-- Detail content will be rendered here -->
      </div>
    `;
  },

  async afterRender() {
    try {
      const selectedRestaurantId = UrlParser.parseActiveUrlWithoutCombiner().id;
      const restaurant = await restoDbSource.detailMenu(selectedRestaurantId);

      const detailContainer = document.getElementById("restaurant-detail");

      if (restaurant) {
        // Pastikan data restoran valid sebelum dimasukkan ke dalam template
        detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      } else {
        // Tanggapi jika data restoran tidak valid atau tidak ditemukan
        detailContainer.innerHTML = "<p>Restaurant not found.</p>";
      }
    } catch (error) {
      // Tanggapi kesalahan fetch atau pemrosesan data
      console.error("Error fetching restaurant details:", error);
    }
  },
};

export default Detail;
