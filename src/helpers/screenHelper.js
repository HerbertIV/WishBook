import {useDataStore} from "@/helpers/useDataStore";

export const render = async (url) => {
    const dataStore = useDataStore();
    return await dataStore.fetchData(`${process.env.API_URL}${url}`);
};