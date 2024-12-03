<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  authStore.login({ email: email.value, password: password.value });
};
</script>

<template>
    <div class="app-container flex flex-col">
        <div class="flex bg-color justify-start items-start">
            <RouterLink to="/" class="flex items-center px-5 py-2 m-4 border rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white">
                Back
            </RouterLink>
        </div>
        <div class="flex items-center p-10 flex-col m-10 mx-24">
            <div class="flex flex-col w-fit border border-4 rounded-xl p-10 bg-white">
                <h1 class="text-2xl font-bold mb-2 text-center">Login</h1>
                <form @submit.prevent="handleLogin" class="flex flex-col w-80">
                    <div class="flex flex-col m-3">
                        <label for="email" class="mx-3 text-neutral-800 mb-1">Email</label>
                        <input id="email" type="email" class="border rounded-lg mx-3 px-3 py-2" v-model="email"
                            placeholder="Email" required />
                    </div>
    
                    <div class="flex flex-col m-3">
                        <label for="password" class="mx-3 text-neutral-800 mb-1">Password</label>
                        <input id="password" type="password" class="border rounded-lg mx-3 px-3 py-2" v-model="password"
                            placeholder="Password" required />
                    </div>
    
                    <button type="submit" class="border rounded-lg p-3 m-6 bg-neutral-200 hover:bg-neutral-300">
                        Login
                    </button>
    
                    <div class="w-full flex flex-row justify-center items-center">
                        <h6>Don't have an account? <RouterLink class="text-blue-600" to="/register">Register</RouterLink>
                        </h6>
                    </div>
    
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    min-width: 100vw;
    min-height: 100vh;
    background: linear-gradient(45deg, #d3eadc, transparent);
}
</style>