<script>
import App from "@/components/Layouts/App.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getNow } from '@/components/helpers/date.js';
import axios from "axios";
import {onMounted, ref} from "vue";
import {render} from "@/helpers/screenHelper";

export default {
  name: "Home",
  components: { SwiperSlide, Swiper, App },
  layout: (h, page) => h(App, [page]),
  setup() {
    const props = ref(null);
    const welcomeMsg = ref('');
    const weedingDate = ref(getNow('dd.mm.yyyy'));
    const brideAndGroomNames = ref('Państwo Młodzi');
    const images = ref({});
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {
    };

    onMounted(async () => {
      props.value = await render('/wish/home');
      welcomeMsg.value = props.value.welcomeMsg;
      weedingDate.value = props.value.weedingDate;
      brideAndGroomNames.value = props.value.brideAndGroomNames;
      console.log(props.value);
      let imagesData = JSON.parse(props.value.welcomePhotos);
      images.value = imagesData.map((image) => {
        return {
          url: image,
          class: 'bg-center'
        };
      });
    });

    return {
      images,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Pagination],
      welcomeMsg,
      weedingDate,
      brideAndGroomNames
    };
  }
}
</script>

<template>
  <div class="flex items-baseline flex-wrap py-1 min-h-screen h-full">
    <div class="flex flex-wrap mt-[2vh]">
      <div class="w-full mb-5">
        <div class="w-full">
          <p class="text-center pb-2 pt-4 text-[1.8vh] md:text-[24px]" v-html="weedingDate"></p>
        </div>
        <div class="w-full">
          <h2 class="text-[4vh] md:text-[64px] text-center font-vibes" v-html="brideAndGroomNames"></h2>
        </div>
        <div class="w-full my-[14px]">
          <div class="text-center w-full flex justify-center">
            <img src="/assets/img/serce.svg" class="w-[3.5vh] md:w-[48px]">
          </div>
        </div>
        <div class="w-full">
          <div
              class="text-center text-lg w-full text-[16px] md:text-[36px] px-1 leading-[3.5vh] md:leading-[46.08px] mt-4 px-[40px]">
            <div v-if="welcomeMsg" v-html="welcomeMsg"></div>
            <div v-else>
              <p class="text-[2.4vh] md:text-[36px]">Witaj na naszym weselu!</p>
              <p class="text-[2.4vh] md:text-[36px]">Napisz dla nas życzenia, dodaj zdjęcia i&nbsp;stwórz wspomnienia,
                które zostaną z&nbsp;nami na zawsze!</p>
            </div>

          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="w-full text-center flex justify-center w-full flex-wrap mt-[3vh]
                               md:w-[500px]
                               max-sm:w-[27vh]
                               md:h-[300px]
                               max-sm:h-[33vh]
                               w-[500px]
                               h-[254px]
">
          <swiper
              :slidesPerView="'auto'"
              :autoplay="{
                          delay: 2000,
                          disableOnInteraction: false,
                        }"
              :slides-per-view="1"
              :modules="modules"
              :space-between="50"
              :loop="true"
              :centeredSlides="true"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide
                :class="{
                                '!flex': true,
                                'justify-center': true,
                            }"
                v-for="(slideContent, index) in images"
                :key="index"
                :virtualIndex="index"
            >
              <div class="text-center
                               md:w-[230px]
                               max-sm:w-[27vh]
                               md:h-[300px]
                               max-sm:h-[33vh]
                               w-[215px]
                               h-[254px]
                               bg-cover"
                   :class="slideContent.class"
                   :style="{
                                backgroundImage: 'url('+slideContent.url+')'
                             }"></div>
            </swiper-slide>
          </swiper>

          <div class="w-full flex justify-center mt-6 md:mt-[48px] w-full">
             <router-link class="
               text-[2.3vh] md:text-[24px] flex items-center justify-center
               flex items-center justify-center text-[14px] bg-[#ffffff]
               hover:cursor-pointer transition ease-in-out delay-50 hover:opacity-70
               rounded-2xl px-6 py-3 md:px-10 md:py-4 shadow-[0_0_6px_0_rgba(57,100,90,0.3)]
               border-[1px] border-[#39645a41]" to="/menu">
               Przejdź dalej&nbsp;<img class="ml-1 md:w-[20px]" src="/assets/img/vector.svg">
             </router-link>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.swiper-slide {
  max-height: 100vh;
  overflow-y: hidden;
}
</style>
