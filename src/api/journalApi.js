import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-2e189-default-rtdb.firebaseio.com",
});

export default journalApi;
