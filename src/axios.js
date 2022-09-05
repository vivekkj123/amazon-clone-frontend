import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
//   baseURL: 'https://salty-brushlands-39654.herokuapp.com/'
  // migrate from heroku to @Deta
  baseURL: 'https://amazon-clone-backend.deta.dev/'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
