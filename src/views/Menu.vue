<template>
    <div class="w-full flex justify-center items-center h-screen relative">
        <Return :back="back" />
        <div class="w-4/5 flex justify-center flex-wrap items-center max-w-xl">
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff] px-4 py-5 rounded-2xl
            shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525] flex flex-wrap justify-center" to="/harmonogram-wesela">{{ textFirstButton }}</router-link>
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff]
             px-4 py-5 rounded-2xl shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525]" to="/dodaj-zyczenie">{{ textSecondButton }}</router-link>
            <router-link class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff] rounded-2xl
            px-4 py-5 shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41] text-[#272525]" to="/lista-zyczen">{{ textThirdButton }}</router-link>
        </div>
    </div>
</template>
<script>
  import {onMounted, ref} from 'vue';
  import Return from "@/components/components/Return.vue";
  import {prepareUrlToRouter} from "@/router/helper";
  import {render} from "@/helpers/screenHelper";

  export default {
      name: "Menu",
      components: {Return},
      setup() {
        const props = ref(null);
        const back = ref(null);
        const textFirstButton = ref(null);
        const textSecondButton = ref(null);
        const textThirdButton = ref(null);

        onMounted(async () => {
          props.value = await render('/wish/menu');
          back.value = prepareUrlToRouter(props.value.back);
          textFirstButton.value = props.value.text_first_button;
          textSecondButton.value = props.value.text_second_button;
          textThirdButton.value = props.value.text_third_button;
        });

        return {
          back,
          textFirstButton,
          textSecondButton,
          textThirdButton
        };
      }
  }
</script>
