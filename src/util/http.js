const axios = require("axios");

const url = window.location.host.split(":")[0];

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://${url}:3333`
      : `http://${url}:9998`
});

export default client;
