import client from "./client";

export const create = (comentDate) =>
    client.post('/api/coment/create', (comentDate));

export const comentList = () =>
    client.get('/api/coment/list');

export const comentUpdate = (updateDate) =>
    client.patch('/api/coment/update', (updateDate));

export const comentDelete = id =>
    client.delete(`/api/coment/delete/${id}`);