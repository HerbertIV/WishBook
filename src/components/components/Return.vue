<script setup>

    defineProps({
        back: String
    })
</script>

<template>
    <div class="m-3 absolute top-0 left-0 z-10">
        <router-link :to="back"
                     class="text-[#272525] hover:cursor-pointer hover:opacity-70 hover:bg-transparent">
          <font-awesome-icon class="w-[6px]" :icon="['fas', 'angle-left']" />
          Wróć
        </router-link>
    </div>
</template>
