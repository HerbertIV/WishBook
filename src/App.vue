<script >

import { RouterView } from 'vue-router'
import Navbar from "@/components/Layouts/Navbar.vue";
import Loader from "@/components/components/Loader.vue";

export default {
    name: 'App',
    components: {Navbar, Loader, RouterView},
}

</script>

<template>
  <RouterView />
</template>

