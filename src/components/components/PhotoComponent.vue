<script>
import {reactive, defineEmits, ref} from "vue";
import VueGallery from 'vue-gallery';


const emit = defineEmits({
    syncImagesData: (imagesData) => {
        return imagesData;
    },
});
export default {
    name: 'PhotoComponent',
    components: {
        VueGallery,
    },
    props: {
        imagesData: {}
    },
    setup(props, { emit }) {
        const imagesData = reactive([]);
        const images = reactive([]);
        const index = ref('');
        const uploadPhoto = (event) => {
            let files = event.target.files;
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                const reader = new FileReader
                reader.onload = e => {
                    imagesData.push({
                        title: "",
                        description: "",
                        src: e.target.result,
                        index: i,
                        image: e.target.result,
                        file: file
                    });
                    images.push(e.target.result);
                }
                reader.readAsDataURL(file);
            }
            emit('syncImagesData', imagesData);
        };

        const removePhoto = (image) => {
            for (let i = 0; i < imagesData.length; i++) {
                if (imagesData[i].index === image.index) {
                    imagesData.splice(i, 1);
                    images.splice(i, 1);
                }
            }
            emit('syncImagesData', imagesData);
        };

        return {
            imagesData,
            images,
            removePhoto,
            uploadPhoto,
            index
        };
    }
}
</script>
<template>
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
            <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
            <div v-for="(image, ImageIndex) in imagesData" class="relative text-right" v-if="imagesData.length > 0">
                <button type="button"
                        @click="removePhoto(image)"
                        class="absolute -right-1 -top-1 text-gray-400 bg-red-500 -mr-1.5 -mt-1.5 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center p-1 shadow-[0_0px_5px_rgba(0,0,0,1)]" data-modal-hide="default-modal">
                    <font-awesome-icon icon="fa-solid fa-xmark" class="text-lg text-red-50 text-shadow rounded-md" />
                </button>
                <div :id="image.index"
                     class="bg-white rounded-lg h-40 bg-cover bg-center" :style="'background-image: url('+ image.image +')'"
                     @click="index = ImageIndex"
                >
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}
.blueimp-gallery {
    background: rgb(0 0 0 / 75%);
}
</style>