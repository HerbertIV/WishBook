import { defineStore } from 'pinia';
import axios from 'axios';

export const useStaticDataStore = defineStore('staticData', {
    state: () => ({
        screensData: null, // Przechowywane dane statyczne
        isLoaded: false, // Flaga wskazująca, czy dane zostały już pobrane
    }),
    actions: {
        async fetchScreensData() {
            if (this.isLoaded) return; // Zapobiega wielokrotnemu pobieraniu danych

            try {
                const response = await axios.get(`${process.env.API_URL}/wish/screens`); // Zmień na właściwy endpoint
                this.screensData = response.data;
                this.isLoaded = true;
            } catch (error) {
                console.error('Error fetching static screens data:', error);
            }
        },
    },
});