<script >

import Navbar from "@/components/Layouts/Navbar.vue";
import Header from "@/components/Layouts/Header.vue";
import Loader from "@/components/components/Loader.vue";
import {onMounted, ref} from "vue";

export default {
    name: 'App',
    components: {Navbar, Header, Loader}
}

</script>

<template>
    <div class="block main min-h-full max-sm:h-full overflow-auto relative">
        <div class="min-h-full font-lora max-w-[768px] w-full">
            <Loader />
            <slot />
        </div>
    </div>
</template>
