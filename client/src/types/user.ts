export interface User {
    id: number;
    email: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
}