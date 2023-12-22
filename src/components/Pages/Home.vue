<script >
    import Header from "@/components/Layouts/Header.vue";
    import PhotoComponent from "@/components/components/PhotoComponent.vue";
    import {reactive, ref, watch, inject} from "vue";
    import axios from "axios";
    import Notifications from "@/components/components/Notifications.vue";
    export default {
        name: "Home",
        components: {Notifications, PhotoComponent, Header},
        setup() {
            const data = ref('');
            const wish = ref('');
            const setPublic = ref('');
            const notifications = ref('');
            const handleImageData = (event) => {
                data.images = event;
            }
            const sendData = (event) => {
                let formData = new FormData();
                if (data.images && data.images.length > 0) {
                    for (let i = 0; i < data.images.length; i++) {
                        formData.append('images[]', data.images[i].file);
                    }
                }
                formData.append('wish', wish.value);
                formData.append('isPublic', setPublic.value);
                axios.post(
                    `${process.env.API_URL}/wish/add`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((response) => {
                    wish.value = '';
                    setPublic.value = '';
                    data.images.splice(0, data.images.length);
                    notifications.value.addNotification('Dziękujemy za życzenia :)', 'success');
                }).catch((e) => {
                    console.log('error: ' + e);
                    notifications.value.addNotification('Niestety coś poszło nie tak :(, spróbuj ponownie.', 'error');
                });
            }
            return {
                data,
                setPublic,
                wish,
                sendData,
                handleImageData,
                notifications
            };
        }
    }
</script>
<template>
    <Header headerText="Podziel się życzeniami"/>
    <Notifications ref="notifications" />
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <p class="mt-1 text-sm leading-6 text-gray-600">Wpisy w tej księdze to początek naszej małżeńskiej historii. Dziękujemy za Twój udział w naszym szczęściu i życzymy Ci wielu pięknych chwil!</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="col-span-full">
                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Życzenia</label>
                        <div class="mt-2">
                            <textarea
                                id="wish"
                                name="wish"
                                rows="3"
                                v-model="wish"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <PhotoComponent @syncImagesData="handleImageData"/>

                    <div class="mt-6 space-y-6">
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input id="setPublic" name="setPublic" type="checkbox" v-model="setPublic" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                            </div>
                            <div class="text-sm leading-6">
                                <label for="setPublic" class="font-medium text-gray-900">Zaznacz tą opcję a życzenia będą widoczne dla wszystkich</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit"
                    @click="sendData"
                    class="w-full bg-[#7fc97d] hover:bg-[#a1ed9f] text-white font-bold py-2 px-4 border-b-4 border-[#7fc97d] hover:border-[#a1ed9f] rounded">
                Dodaj życzenie
            </button>
        </div>
    </div>
</template>