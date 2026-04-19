import axios from 'axios';
import { supabase } from '../lib/supabase';

export const usersApi = axios.create({
    baseURL: '/api/users',
    headers: { 'Content-Type': 'application/json' }
});

export const mealsApi = axios.create({
    baseURL: '/api/meals',
    headers: { 'Content-Type': 'application/json' }
});

mealsApi.interceptors.request.use(async (config) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
    }
    return config;
});