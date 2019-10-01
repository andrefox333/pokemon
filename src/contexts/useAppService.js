import axios from "axios";

/**
 * API call to find paths
 * @param {Object} data
 * */
export async function findPath(data) {
  const config = {
    method: "POST",
    url: "https://frozen-reef-96768.herokuapp.com/find-path",
    data
  };

  const response = await axios(config);

  return response.data;
}
