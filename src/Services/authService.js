import axios from "axios";

const BASE_URL = process.env.BACKEND_URL || "http://localhost:3000";
const API_URL = BASE_URL + "/auth/";


const register = async (formData) => {
    try {
        const response = await axios.post(API_URL + "signup", formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const login = async (formData) => {
    try {

        const response = await axios.post(API_URL + "signin", formData);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const logout = async (formData) => {

    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
};

export default {
    register,
    login,
    logout
};



