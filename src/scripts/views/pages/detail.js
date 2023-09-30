import restoDbSource from "../../data/restodb--source";
import UrlParser from "../../routes/url-parser";
const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menu = await restoDbSource.detailMenu(url.id);
    console.log(menu);
  },
};

export default Detail;
