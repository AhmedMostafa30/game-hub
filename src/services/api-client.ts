import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e691bf2e96a34dffa8c20a73134338be",
  },
});
