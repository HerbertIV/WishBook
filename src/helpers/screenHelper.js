import axios from "axios";

export const render = async (url) => {
    return axios.get(
        `${process.env.API_URL}${url}`
    ).then((response) => {
        return response.data;
    });
};