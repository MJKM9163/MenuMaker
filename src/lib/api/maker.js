import client from "./client";

export const riceListCall = (number) =>
    client.post('/api/menumaker/rice', (number));

export const mainListCall = (number) =>
    client.post('/api/menumaker/main', (number));

export const sideListCall = (number) =>
    client.post('/api/menumaker/side', (number));

export const soupListCall = (number) =>
    client.post('/api/menumaker/soup', (number));