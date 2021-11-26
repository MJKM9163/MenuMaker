import client from "./client";

export const register = (userDate) =>
    client.post('/api/auth/register', (userDate));

export const login = (userDate) =>
    client.post('/api/auth/login', (userDate));

export const check = () =>
    client.get('/api/auth/check');

export const logout = (date) =>
    client.post('/api/auth/logout', (date));