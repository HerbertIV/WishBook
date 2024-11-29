<script>
  import Head from "@/components/components/Head.vue";
  import Return from "@/components/components/Return.vue";
  import {ref} from "vue";
  import {prepareUrlToRouter} from "@/router/helper";
  import {useStaticDataStore} from "@/helpers/staticDataStore";

  export default {
      name: "Home",
      components: {Head, Return},
      setup() {
        const staticDataStore = useStaticDataStore();
        const scheduleScreenConfig = ref(staticDataStore.screensData.schedule);
        const dateTime = new Date(scheduleScreenConfig.value.datetime);
        const menuState = ref(null);
        const state = ref(false);

        const verifyState = () => {
          state.value = menuState.value.checked;
        }
        const isWeeding = () => {
          if (dateTime) {
            const day = dateTime.datetime.getDate();
            const month = dateTime.datetime.getMonth();
            const year = dateTime.datetime.getFullYear();
            const hour = dateTime.datetime.getHours();
            return (day <= 29 || (day === 30 && hour < 17)) && year === 2024 && month <= 6;
          }

          return false;
        }

        return {
          back: prepareUrlToRouter(scheduleScreenConfig.value.back),
          scheduleScreenConfig,
          isWeeding,
          state,
          verifyState,
          menuState
        };
      }
  }
</script>
<template>
  <div class="w-full flex justify-center h-screen relative flex-wrap z-10">
    <Return :back="back" />
    <div class="w-full relative flex-wrap">
      <div class="h-[118px]">
        <Head :head="scheduleScreenConfig.header" />
      </div>
      <div class="w-full text-center">
        <div v-for="menuListElement in scheduleScreenConfig.list">
          <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">{{ menuListElement.header }}</p>
          <p class="pb-4 md:text-[17px] text-[1.7vh] w-full" v-for="item in menuListElement.items">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
