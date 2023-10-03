import CONFIG from "./config";

const API_ENDPOINT = {
  home: `${CONFIG.BASE_URL}list`,
  Detail: (id) => `${CONFIG.BASE_URL}detail/${id}`, // <-- Diperbaiki dengan huruf "D" besar
};

export default API_ENDPOINT;
