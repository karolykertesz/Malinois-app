import axios from "axios";

export default axios.create({
  baseURL: `https://pixabay.com/api/?key=14014620-330a9cc9d6cd80a26ce693cf2&q=malinois&image_type=photo&pretty=true`,
});
