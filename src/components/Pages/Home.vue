<script setup>
    import Header from "@/components/Layouts/Header.vue";
    import {reactive} from "vue";
    import { XMarkIcon } from "@heroicons/vue/24/outline"

    const imagesData = reactive([]);
    const uploadPhoto = (event) => {
        let files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            const reader = new FileReader
            reader.onload = e => {
                imagesData.push({
                    index: i,
                    image: e.target.result
                });
            }
            reader.readAsDataURL(file);
        }
    };

    const removePhoto = (image) => {
        for (let i = 0; i < imagesData.length; i++) {
            if (imagesData[i].index === image.index) {
                imagesData.splice(i, 1);
            }
        }
    };
</script>
<template>
    <Header headerText="Podziel się życzeniami"/>
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <form>
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <p class="mt-1 text-sm leading-6 text-gray-600">Wpisy w tej księdze to początek naszej małżeńskiej historii. Dziękujemy za Twój udział w naszym szczęściu i życzymy Ci wielu pięknych chwil!</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Życzenia</label>
                            <div class="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Zdjęcia</label>
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Wgraj zdjęcie</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                accept="image/*"
                                                class="sr-only"
                                                multiple
                                                @change="uploadPhoto($event)"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                                <div v-for="image in imagesData"
                                     :id="image.index"
                                     class="relative bg-white rounded-lg text-right h-40 bg-cover bg-center" :style="'background-image: url('+ image.image +')'">
                                    <button type="button"
                                            @click="removePhoto(image)"
                                            class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center p-1" data-modal-hide="default-modal">
                                        <XMarkIcon class="bg-red-600 text-red-50 text-shadow rounded-md"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</template>