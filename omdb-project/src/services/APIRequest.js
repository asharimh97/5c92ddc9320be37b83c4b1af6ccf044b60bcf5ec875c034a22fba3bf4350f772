import axios from "axios";
const API_KEY = "faf7e5bb";
export const apiUrl = "https://www.omdbapi.com";

export const request = async ({ method, data, headers, params, url }) => {
  const defaultParams = {
    apikey: API_KEY
  };

  try {
    const response = await axios({
      method,
      url,
      headers: headers || "",
      data: data || "",
      params: {
        ...defaultParams,
        ...params
      }
    });
    if (response.data.Response === "True") return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
