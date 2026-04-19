export interface Meal {
    id: string;
    user_id: string;
    name: string;
    ingredients: string[];
    servings: number;
    instructions: string;
    prep_time_minutes: number;
    category: string;
    created_at?: string;
    updated_at?: string;
}