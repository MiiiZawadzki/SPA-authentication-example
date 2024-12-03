import { defineStore } from 'pinia';
import router from '@/router';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            'name': '',
            'email': '',
        },
        isAuthenticated: null
    }),
    actions: {
        async login(credentials) {
            this.isAuthenticated = true;
            this.user = {
                'name': 'Username',
                'email': 'user@user.com',
            };

            console.log('Login');
            router.push('/home');
        },
        logout() {
            this.user = null;
            this.isAuthenticated = false;

            console.log('Logout');
            router.push('/login');
        }
    }
});