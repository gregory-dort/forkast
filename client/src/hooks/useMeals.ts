import axios from 'axios';
import { useState } from 'react';
import { mealsApi } from '../apis/api';
import type { Meal } from '../types/meals';

const useMeals = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMeals = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await mealsApi.get('/all-meals');
            setMeals(response.data.meals);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || 'Unable to fetch meals. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again.')
            }
        } finally {
            setIsLoading(false);
        }
    }

    const addMeal = async (mealData: Omit<Meal, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await mealsApi.post('/add-meal', mealData);
            setMeals(prev => [...prev, response.data.meal]);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || 'Unable to add meal. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again.')
            }
        } finally {
            setIsLoading(false);
        }
    }

    const deleteMeal = async (mealID: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await mealsApi.delete(`/delete-meal/${mealID}`)
            setMeals(prev => prev.filter(meal => meal.id !== mealID))
            return response.data.message;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || 'Unable to delete meal. Please try again.');
            } else {
                setError('Unexpected error occurred. Please try again.')
            }
        } finally {
            setIsLoading(false);
        }
    }

    const updateMeal = async (mealID: string, mealData: Partial<Omit<Meal, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await mealsApi.put(`/update-meal/${mealID}`, mealData);
            setMeals(prev => prev.map(meal =>
                meal.id === mealID ? response.data.meal : meal
            ));
            return response.data.message;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || 'Unable to update meal. Please try again.');
            } else {
                setError('Unexpected error occurred. Please try again.')
            }
        } finally {
            setIsLoading(false);
        }
    }

    const getMeal = async (mealID: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await mealsApi.get(`/get-meal/${mealID}`);
            return response.data.meal;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || 'Unable to retrieve meal. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again');
            }
        } finally {
            setIsLoading(false);
        }
    }

    return { meals, isLoading, error, fetchMeals, addMeal, deleteMeal, updateMeal, getMeal };
}

export default useMeals;