<script>
  import Head from "@/components/components/Head.vue";
  import Return from "@/components/components/Return.vue";
  import {onMounted, ref} from "vue";
  import {prepareUrlToRouter} from "@/router/helper";
  import {render} from "@/helpers/screenHelper";

  export default {
      name: "Home",
      components: {Head, Return},
      setup() {
        const props = ref(null);
        const back = ref(null);
        const dateTime = ref(null);
        const menuListElements = ref([]);
        const menuState = ref(null);
        const header = ref(null);
        const state = ref(false);

        const verifyState = () => {
          state.value = menuState.value.checked;
        }
        const isWeeding = () => {
          if (dateTime.value) {
            const day = dateTime.value.getDate();
            const month = dateTime.value.getMonth();
            const year = dateTime.value.getFullYear();
            const hour = dateTime.value.getHours();
            return (day <= 29 || (day === 30 && hour < 17)) && year === 2024 && month <= 6;
          }

          return false;
        }
        onMounted(async () => {
          props.value = await render('/wish/schedule-weeding');
          back.value = prepareUrlToRouter(props.value.back);
          header.value = props.value.header;
          menuListElements.value = props.value.list;
          dateTime.value = new Date(props.value.datetime);
        });

        return {
          isWeeding,
          state,
          verifyState,
          menuState,
          back,
          menuListElements,
          header
        };
      }
  }
</script>
<template>
  <div class="w-full flex justify-center h-screen relative flex-wrap z-10">
    <Return :back="back" />
    <div class="w-full relative flex-wrap">
      <div class="h-[118px]">
        <Head :head="header" />
      </div>
      <div class="w-full text-center">
        <div v-for="menuListElement in menuListElements">
          <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">{{ menuListElement.header }}</p>
          <p class="pb-4 md:text-[17px] text-[1.7vh] w-full" v-for="item in menuListElement.items">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
