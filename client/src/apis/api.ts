import axios from 'axios';

export const usersApi = axios.create({
    baseURL: '/api/users',
    headers: { 'Content-Type': 'application/json' }
});

export const mealsApi = axios.create({
    baseURL: '/api/meals',
    headers: { 'Content-Type': 'application/json' }
});