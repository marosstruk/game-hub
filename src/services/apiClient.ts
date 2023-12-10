import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e41dc157e441419a987443d01bd1af89",
  },
});
