<template>
    <transition name="fade" mode="out-in">
        <div v-if="loading" class="grid justify-items-center fixed w-full h-full left-0 top-0 content-center z-[100] bg-[#dbe1db] bg-opacity-100">
            <pulse-loader :loading="loading" :size="'10px'"></pulse-loader>
        </div>
    </transition>
</template>

<script>

import {useLoaderStore} from "@/helpers/useLoaderStore";
import {onMounted, ref, watch} from "vue";

export default {
    name: 'Loader',
    setup() {
      const loaderStore = useLoaderStore();
      const loading = ref(loaderStore.isLoading);
      onMounted(() => {
        document.onreadystatechange = () => {
          if (document.readyState === 'complete') {
            loaderStore.hide();
          }
        }
        if (loading.value) {
          setTimeout(() => {
            loaderStore.hide();
          }, 2000);
        }
      });
      watch(
          () => loaderStore.isLoading, // Obserwowany stan
          (newValue) => {
            loading.value = newValue; // Synchronizacja loading z loaderStore
          }
      );

      return {
        loading
      };
    }
}
</script>

<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
</style>
