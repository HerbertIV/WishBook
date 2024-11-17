import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        cache: {},
    }),

    actions: {
        async fetchData(url) {
            if (this.cache[url]) {
                return this.cache[url];
            }
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.cache[url] = data;

                return data;
            } catch (error) {
                console.error(`Error fetching data from ${url}:`, error);
                throw error;
            }
        },
    },
});