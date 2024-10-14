<script>
import VueEasyLightbox from 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js';
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css';
import {reactive, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Dropzone from "@/components/components/Dropzone.vue";

export default {
    name: 'PhotoComponent',
    components: {
        FontAwesomeIcon,
        VueEasyLightbox,
        Dropzone
    },
    props: {
        imagesData: Object,
        dropzoneProperties: Object
    },
    setup(props, { emit }) {
        const imagesData = reactive(props.imagesData);
        const dropzoneProperties = ref(props.dropzoneProperties);
        const images = reactive([]);
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const index = ref('');
        const handleImageData = (event) => {
            imagesData.value.push({
                title: "",
                description: "",
                src: event.dataURL,
                index: imagesData.value.length,
                image: event.dataURL,
                file: event.dataURL,
            });
            emit('pushToImagesData', event);
        }

        const removePhoto = (image) => {
            emit('removeFromImagesData', image.index);
            for (let i = 0; i < imagesData.value.length; i++) {
                if (imagesData.value[i].index === image.index) {
                    imagesData.value.splice(i, 1);
                    images.splice(i, 1);
                }
            }
        };
        const showImg = (index) => {
            indexRef.value = index
            visibleRef.value = true
        }
        const onHide = () => visibleRef.value = false
        const afterComplete = async (file) => {
            try {
                console.log(file);
            } catch (error) {
                console.log(error);
            }
        }
        const getDropzoneOptions = () => {
            let options = {
                url: `${process.env.API_URL}/wish/file-upload`,
                thumbnailWidth: dropzoneProperties.value.width_thumbnail_photo,
                thumbnailHeight: dropzoneProperties.value.height_thumbnail_photo,
                addRemoveLinks: false,
                acceptedFiles:"image/*",
                paramName: 'image',
                convertSize: 0,
                resizeQuality: dropzoneProperties.value.resize_quality_photo,
                dictDefaultMessage: dropzoneProperties.value.dropzone_message
            };
            if (dropzoneProperties.value.resize_width_photo) {
                options.resizeWidth = dropzoneProperties.value.resize_width_photo;
                options.resizeMimeType = 'image/jpeg';
            }

            return options;
        };

        return {
            imagesData: imagesData.value,
            images,
            removePhoto,
            index,
            visibleRef,
            indexRef,
            showImg,
            onHide,
            handleImageData,
            dropzoneOptions: getDropzoneOptions(),
            afterComplete
        };
    }
}
</script>
<template>
    <div class="col-span-full">
        <label for="cover-photo" class="block text-[14px] leading-6 text-[#272525]">Zdjęcia</label>
        <Dropzone :dropzoneOptions="dropzoneOptions"
                  ref="dropzone"
                  @syncImagesDataFromDropzone="handleImageData"
                  @vdropzone-complete="afterComplete"
        />
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10" v-if="imagesData.length > 0">
            <div v-for="(image, ImageIndex) in imagesData" class="relative text-right" v-if="imagesData.length > 0">
                <button type="button"
                        @click="removePhoto(image)"
                        class="absolute -right-1 -top-1 text-gray-400 bg-red-500 -mr-1.5 -mt-1.5 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center p-1 shadow-[0_0px_5px_rgba(0,0,0,1)]" data-modal-hide="default-modal">
                    <font-awesome-icon icon="fa-solid fa-xmark" class="text-lg text-red-50 text-shadow rounded-md" />
                </button>
                <div :data-image-id="image.index"
                     class="bg-white rounded-lg h-40 bg-cover bg-center" :style="'background-image: url('+ image.image +')'"
                     @click="() => showImg(image.index)"
                >
                </div>
            </div>
            <VueEasyLightbox :visible="visibleRef" :imgs="imagesData" :index="indexRef" @hide="onHide"></VueEasyLightbox>

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
