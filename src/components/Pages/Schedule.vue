<script>
  import App from "@/components/Layouts/App.vue";
  import Head from "@/components/components/Head.vue";
  import Return from "@/components/components/Return.vue";
  import {onMounted, ref} from "vue";
  import {prepareUrlToRouter} from "@/router/helper";
  import {render} from "@/helpers/screenHelper";

  export default {
      name: "Home",
      components: {App, Head, Return},
      layout: (h, page) => h(App, [page]),
      setup() {
        const props = ref(null);
        const back = ref(null);
        const dateTime = ref(null);
        const menuState = ref(null);
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
          dateTime.value = new Date(props.value.datetime);
        });

        const weeding = isWeeding();
        return {
          isWeeding,
          state,
          verifyState,
          menuState,
          back
        };
      }
  }
</script>
<template>
  <div class="w-full flex justify-center h-screen relative flex-wrap z-10">
    <Return :back="back" />
    <label class="inline-flex items-center cursor-pointer m-3 absolute top-0 right-0 z-10" @click="verifyState()">
      <input type="checkbox" value="1" class="sr-only peer" ref="menuState">
      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none
            dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
            after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
            after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5dc596]"></div>
    </label>
    <div class="w-full relative flex-wrap">
      <div class="h-[118px]">
        <Head v-if="!state" head="Menu wesele" />
        <Head v-else head="Menu poprawiny" />
      </div>
      <div class="w-full text-center" v-if="isWeeding() && !state">
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Obiad</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Rosół z makaronem</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Devolay</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kieszonka drobiowa z pieczarkami</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Udko w boczku</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kotlet po hiszpańsku w sosie pomidorowym</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Żeberko duszone</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Ziemniaki | Talarki</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kompot</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Mizeria | Colesław | Buraczki</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Pierwsza kolacja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Grillowany schab w sosie z pomidora suszonego</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kluski śląskie</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Surówka z sałaty lodowej</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Druga kolacja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Shoarma</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Frytki</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Surówka z sałaty pekińskiej</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Deser</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Puchar lodowy z musem truskawkowym i bitą śmietaną</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Trzecia kolacja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Barszcz czerwony z uszkami</p>
      </div>
      <div class="pb-4 w-full text-center h-[80%]" v-else>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Obiad</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kwaśnica z wędzonym żeberkiem</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Żurek z białą kiełbasą i jajkiem</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Pierwsza kolacja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Kotlet fantazja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Dufinki</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Surówka z białej kapusty w zalewie musztardowej</p>
        <p class="pb-4 md:text-[19px] text-[2vh] w-full font-bold">Druga kolacja</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Placki po węgiersku</p>
        <p class="pb-4 md:text-[17px] text-[1.7vh] w-full">Surówka z kapusty pekińskiej</p>
      </div>
    </div>
  </div>
</template>
