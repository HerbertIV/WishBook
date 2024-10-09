<template>
    <div class="w-full text-center">
        <h2 class="text-3xl text-[#272525] py-10 font-normal leading-[normal]">
            {{ head }}
        </h2>
    </div>
</template>
<script setup>
    defineProps({
        head: String
    })
</script>
