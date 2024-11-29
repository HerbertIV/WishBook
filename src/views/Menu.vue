<template>
    <div class="w-full flex justify-center items-center h-screen relative">
        <Return :back="back" />
        <div class="w-4/5 flex justify-center flex-wrap items-center max-w-xl">
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff] px-4 py-5 rounded-2xl
            shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525] flex flex-wrap justify-center" to="/harmonogram-wesela">{{ menuScreenConfig.text_first_button }}</router-link>
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff]
             px-4 py-5 rounded-2xl shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525]" to="/dodaj-zyczenie">{{ menuScreenConfig.text_second_button }}</router-link>
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff] rounded-2xl
            px-4 py-5 shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525]" to="/lista-zyczen">{{ menuScreenConfig.text_third_button }}</router-link>
        </div>
    </div>
</template>
<script>
  import {ref} from 'vue';
  import Return from "@/components/components/Return.vue";
  import {prepareUrlToRouter} from "@/router/helper";
  import {useStaticDataStore} from "@/helpers/staticDataStore";

  export default {
      name: "Menu",
      components: {Return},
      setup() {
        const staticDataStore = useStaticDataStore();
        const menuScreenConfig = ref(staticDataStore.screensData.menu);

        return {
          back: prepareUrlToRouter(menuScreenConfig.value.back),
          menuScreenConfig
        };
      }
  }
</script>
