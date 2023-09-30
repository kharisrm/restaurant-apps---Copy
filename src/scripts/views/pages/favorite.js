import restoDbSource from "../../data/restodb--source";
const favorite = {
  async render() {
    return `
    <div class="hero">
    <img src="./images/heros/hero-image_4.jpg" width="450" alt="" />
  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default favorite;
