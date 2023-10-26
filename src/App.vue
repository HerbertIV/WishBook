<script >

import { RouterView } from 'vue-router'
import Navbar from "@/components/Layouts/Navbar.vue";
import Header from "@/components/Layouts/Header.vue";

export default {
    name: 'App',
    components: {Navbar, Header, RouterView},
}

</script>

<template>
    <div class="block h-screen">
        <div class="min-h-full">
            <Navbar />
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>
