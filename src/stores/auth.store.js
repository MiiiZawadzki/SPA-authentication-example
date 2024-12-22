import { defineStore } from 'pinia';
import router from '@/router';
import axios from 'axios';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            'name': '',
            'email': '',
        },
        isAuthenticated: null,
        flash: '',
        errors: {}
    }),
    actions: {
        async login(credentials) {
            await axios.get('/sanctum/csrf-cookie');
            try {
                const response = await axios.post('/api/login', credentials);

                if (response.data.user) {
                    this.user = response.data.user;
                    this.isAuthenticated = true;
                    router.push('/home');
                }

            } catch (error) {
                if (error) {
                    this.errors.value = { message: error.response.data.message };
                } else {
                    this.errors.value = { message: 'Error' };
                }
            }
        },
        async register(credentials) {
            await axios.get('/sanctum/csrf-cookie');
            try {
                const response = await axios.post('/api/register', credentials);
                this.flash = response.data.message;

                router.push('/login');
            } catch (error) {
                if (error) {
                    this.errors.value = { message: error.response.data.message };
                } else {
                    this.errors.value = { message: 'Error' };
                }
            }
        },
        async user() {
            try {
                const response = await axios.get('/api/user');
                this.user = response.data;
                this.isAuthenticated = true;
            } catch (error) {
                console.error('User not authenticated', error);
                this.user = null;
                this.isAuthenticated = false;
            }
        },
        async logout() {
            await axios.post('/api/logout');
            this.user = null;
            this.isAuthenticated = false;

            router.push('/login');
        },
        clearErrors() {
            this.errors = {};
        }
    }
});