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
  <div class="block main min-h-full max-sm:h-full overflow-auto relative">
    <div class="min-h-full font-lora max-w-[768px] w-full">
      <Loader />
      <RouterView />
    </div>
  </div>
</template>

