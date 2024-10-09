<template>
    <a :href="photo.url" data-fancybox="gallery">
        <img :src="photo.thumb" style="width: 80px; height: 100px" class="object-cover"/>
    </a>
</template>
<script>
    export default {
        name: "Photo",
        props: {
            photo: Object,
            galleryId: Number|null
        },
        setup(props) {
        }
    }
</script>
<style>
    .gsc-arrow, .gsc-arrow--side-right, .gsc-arrow--side-left {
        background: transparent!important;
    }
    .gsc-arrow span {
        border-color: black!important;
    }
    .gsc-indicator {
        display: none!important;
    }
</style>
