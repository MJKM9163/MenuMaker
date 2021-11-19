import client from "./client";

export const listSearch = () =>
    client.get('/api/setting/find');