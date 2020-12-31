const axios = require("axios").default;

const TinNgoServices = {
  axiosData(baseUri, headers = {}) {
    return axios
      .get(baseUri, headers)
      .then((response) => response)
      .catch((err) => err);
  },
  fetchData(baseUri, headers = {}) {
    return fetch(baseUri, headers)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  },
  async fetchWithTimeout(resource, options) {
    const timeout = 8000;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  },
  postAxiosPayloadData(baseUri, headers = {}, payload = {}) {
    return axios
      .post(baseUri, { ...payload }, headers)
      .then((response) => response)
      .catch((err) => {
        return { err };
      });
  },
  postFetchPayloadData(baseUri, headers = {}, payload = {}) {
    return fetch(baseUri, {
      method: "post",
      headers,
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        return { err };
      });
  },
};

module.exports = TinNgoServices;
