<script>

import { RouterView } from 'vue-router'
import Navbar from "@/components/Layouts/Navbar.vue";
import Loader from "@/components/components/Loader.vue";
import { useLoaderStore } from "@/helpers/useLoaderStore";

export default {
    name: 'App',
    components: {Navbar, Loader, RouterView},
    setup() {
      const loaderStore = useLoaderStore();
      loaderStore.show();
    }
}

</script>
<template>
  <div class="block main min-h-full max-sm:h-full overflow-auto relative">
    <div class="min-h-full font-lora max-w-[768px] w-full">
      <Loader />
      <RouterView />
    </div>
  </div>
</template>

