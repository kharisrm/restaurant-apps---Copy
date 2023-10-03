// restodb--source.js
import API_ENDPOINT from "../globals/api-endpoint";

class restoDbSource {
  static async menuutama() {
    try {
      const response = await fetch(API_ENDPOINT.home);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseJson = await response.json();
      console.log("Response JSON:", responseJson);
      return responseJson.restaurants; // Ubah baris ini
    } catch (error) {
      console.error("Error fetching menuutama:", error);
      throw error;
    }
  }

  static async detailMenu(id) {
    try {
      const response = await fetch(API_ENDPOINT.Detail(id));
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      return response.json();
    } catch (error) {
      console.error("Error fetching detailMenu:", error);
      throw error;
    }
  }
}

export default restoDbSource;
