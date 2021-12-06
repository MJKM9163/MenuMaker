import client from "./client";

export const priceAPI100Call = (data) =>
    client.get(`/api/openAPIs/price100/${data}`);

export const priceAPI200Call = (data) =>
    client.get(`/api/openAPIs/price200/${data}`);

export const priceAPI300Call = (data) =>
    client.get(`/api/openAPIs/price300/${data}`);

export const priceAPI400Call = (data) =>
    client.get(`/api/openAPIs/price400/${data}`);

export const priceAPI500Call = (data) =>
    client.get(`/api/openAPIs/price500/${data}`);

export const priceAPI600Call = (data) =>
    client.get(`/api/openAPIs/price600/${data}`);