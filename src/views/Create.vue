<script>
import Head from "@/components/components/Head.vue";
import PhotoComponent from "@/components/components/PhotoComponent.vue";
import {reactive, ref} from "vue";
import axios from "axios";
import Notifications from "@/components/components/Notifications.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Return from "@/components/components/Return.vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import {useStaticDataStore} from "@/helpers/staticDataStore";
import {prepareUrlToRouter} from "@/router/helper";

export default {
    name: "Create",
    components: {Return, Navbar, Notifications, PhotoComponent, Head},
    setup() {
        const staticDataStore = useStaticDataStore();
        const addWishScreenConfig = ref(staticDataStore.screensData.add_wish);
        const indexUrl = '/lista-zyczen';
        const data = ref({
            images: []
        });

        const imagesData = reactive({
            value: []
        });
        const wish = ref('');
        const setPublic = ref('');
        const notifications = ref('');
        const errors = ref([]);
        const loading = ref(false);

        const handlePushToImageData = (event) => {
            errors.value = [];
            const response = JSON.parse(event.xhr.response);
            data.value.images.push({
                url: event.dataURL,
                uuid: response.data.uuid
            });
        }

        const handleRemoveFromImageData = (event) => {
            for (let i = 0; i < data.value.images.length; i++) {
                if (data.value.images[i].uuid === event) {
                    data.value.images.splice(i, 1);
                }
            }
        }

        const sendData = async (event) => {
            loading.value = true;
            let formData = new FormData();
            const token = await recaptcha();
            if (data.value.images && data.value.images.length > 0) {
                for (let i = 0; i < data.value.images.length; i++) {
                    formData.append('images[]', data.value.images[i].uuid);
                }
            }
            formData.append('wish', wish.value);
            formData.append('isPublic', setPublic.value ? 1 : 0);
            formData.append('recaptcha', token);
            axios.post(
                `${process.env.API_URL}/wish/store`,
                formData,
                {}
            ).then(() => {
                window.location.href = indexUrl;
            }).catch((e) => {
                notifications.value.addNotification(
                    addWishScreenConfig.value.fail_upload_wish_message,
                    'error'
                );
                if (typeof e.response.data.errors !== undefined && e.response.data.errors) {
                    errors.value = e.response.data.errors;
                }
                loading.value = false;
            });
        }
        const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
        const recaptcha = async () => {
            await recaptchaLoaded();
            return await executeRecaptcha("login");
        }

        return {
            back: prepareUrlToRouter(addWishScreenConfig.value.back),
            addWishScreenConfig,
            data,
            images: data.value.images,
            setPublic,
            wish,
            sendData,
            handlePushToImageData,
            handleRemoveFromImageData,
            notifications,
            errors,
            loading,
            imagesData,
        };
    }
}
</script>
<template>
    <div class="relative z-10">
        <Return :back="back"/>
        <div class="h-screen items-baseline w-full">
            <div>
                <div class="text-center">
                    <Head head="Dodaj wpis"/>
                    <div class="mt-1 min-[600px]:leading-6 md:leading-[2.8vw] text-[#272525] max-[600px]:text-[21px] md:text-[2vw] px-4">
                        <div v-if="addWishScreenConfig.description" v-html="addWishScreenConfig.description"></div>
                        <div v-else>
                            <p>Wpisy w tej księdze to początek</p>
                            <p>naszej małżeńskiej historii.</p>
                            <p>Dziękujemy za Twój udział w naszym szczęściu i życzymy Ci wielu pięknych chwil!</p>
                        </div>
                    </div>
                </div>
                <Notifications ref="notifications"/>
                <div class="mx-auto max-w-7xl py-6 px-6 sm:px-6 lg:px-8">
                    <div v-if="loading"
                         class="grid justify-items-center fixed w-full h-full left-0 top-0 content-center z-10 bg-gray-400 bg-opacity-50">
                        <pulse-loader :loading="loading" :size="'10px'"></pulse-loader>
                    </div>
                    <div class="space-y-12">
                        <div class="">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <PhotoComponent
                                                v-if="addWishScreenConfig.dropzoneProperties"
                                                @pushToImagesData="handlePushToImageData"
                                                @removeFromImagesData="handleRemoveFromImageData"
                                                :images-data="imagesData"
                                                :dropzone-properties="addWishScreenConfig.dropzoneProperties"
                                />
                                <div class="text-red-600" v-if="errors.images">{{ errors.images[0] }}</div>
                                <div class="col-span-full mb-2">
                                    <label for="about"
                                           class="block text-[14px] leading-6 text-[#272525]">Życzenia</label>
                                    <div>
                                        <textarea
                                            id="wish"
                                            name="wish"
                                            rows="3"
                                            v-model="wish"
                                            class="bg-[#ffffff50] min-h-[119px] border-[#39645a41] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <div class="text-red-600" v-if="errors.wish">{{ errors.wish[0] }}</div>
                                </div>
                                <div class="space-y-6 col-span-full">
                                    <div class="relative flex gap-x-1">
                                        <div class="flex h-6 items-center">
                                            <input id="setPublic"
                                                   name="setPublic"
                                                   type="checkbox"
                                                   v-model="setPublic"
                                                   class="w-[11px] h-[11px] bg-[#ffffff50] h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            >
                                        </div>
                                        <div class="text-sm leading-6">
                                            <label for="setPublic" class="font-medium text-[10px] text-gray-900">Zaznacz
                                                tą opcję a życzenia będą widoczne tylko dla pary młodej.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-x-6">
                        <button type="submit"
                                @click="sendData"
                                class="w-3/4 hover:cursor-pointer hover:opacity-70 my-2 text-center text-[20px] bg-[#ffffff]
                        py-3 rounded-3xl shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a73]">
                            Dodaj życzenie
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
