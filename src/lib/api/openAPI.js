import client from "./client";

export const priceAPICall = (data) =>
    client.get('/api/openAPIs/price', (data));