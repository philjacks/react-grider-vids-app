import axios from "axios";

const KEY = "AIzaSyBUDBP9OB_KsZ3br7XkV3irv81UoP9VW4E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
