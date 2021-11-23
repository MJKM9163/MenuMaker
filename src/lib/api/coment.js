import client from "./client";

export const create = (comentDate) =>
    client.post('/api/coment/create', (comentDate));

export const comentList = () =>
    client.get('/api/coment/list');
                        
