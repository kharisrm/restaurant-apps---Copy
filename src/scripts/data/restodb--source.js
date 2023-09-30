import API_ENDPOINT from "../globals/api-endpoint";

class restoDbSource {
  static async menuutama() {
    const response = await fetch(API_ENDPOINT.home);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMenu(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default restoDbSource;
