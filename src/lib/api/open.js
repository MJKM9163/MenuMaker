import client from "./client";

export const priceAPI = (data) => {
    for (let n = 1; n < 7; n++) {
        client.get(`/api/openAPIs/priceAPI/${data}/${n.toString()}00`);
    }
}
