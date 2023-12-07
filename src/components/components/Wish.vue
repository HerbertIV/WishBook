<template>
    <div class="flex justify-between px-6 mt-2">
        <div
            :id="0"
            class="bg-white h-80 bg-cover bg-center hover:opacity-50 hover:cursor-pointer" :style="'background-image: url('+ firstPhoto +')'"
            :class="{'w-1/2': description, 'w-full': !description}"
            @click="index = 0"
        ></div>
        <div v-if="description" class="w-1/2 ml-3 text-center">{{ description }}</div>
    </div>
    <div class="grid grid-cols-4 md:grid-cols-4 gap-4 my-10 px-6 place-items-center" v-if="images.length > 0">
        <VueGallery :images="images" :index="index" @close="index = null" :id="`gallery-${wish.id}`"></VueGallery>
        <div v-for="(image, ImageIndex) in images" class="relative text-right">
            <div :id="image.index"
                 class="bg-white rounded-lg h-40 bg-cover bg-center hover:opacity-50 hover:cursor-pointer" :style="'background-image: url('+ image +')'"
                 @click="index = ImageIndex"
            >
            </div>
        </div>
    </div>
</template>
<script >
import {reactive, ref} from 'vue';
import VueGallery from "vue-gallery";

export default {
    name: "Wish",
    components: {VueGallery},
    props: {
        wish: String,
    },
    setup(props) {
        const wish = ref(props.wish);
        const index = ref('');
        const firstPhoto = wish.value.files[0].url;
        const images = wish.value.files.map((image, index) => image.url);
        return {
            description: wish.value.content,
            firstPhoto,
            images,
            index,
            wish
        };
    },
};
</script>
<style >
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
.close {
    background-color: red;
}
.close:hover {
    background-color: hsla(0, 100%, 50%, 0.4);
}
</style>