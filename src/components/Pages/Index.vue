<script>
import App from "@/components/Layouts/App.vue";
import MasonryWall from '@yeger/vue-masonry-wall'
import {onMounted, ref, TransitionGroup, onBeforeMount} from "vue";
import axios from "axios";
import ModalComponent from "@/components/components/ModalComponent.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from "@/components/components/Head.vue";
import Return from "@/components/components/Return.vue";
import { VueFlexWaterfall } from 'vue-flex-waterfall';
import {prepareUrlToRouter} from "@/router/helper";
import {render} from "@/helpers/screenHelper";

export default {
  name: "Index",
  components: {
    Return, Head,
    TransitionGroup,
    App,
    MasonryWall,
    ModalComponent,
    Swiper,
    SwiperSlide,
    VueFlexWaterfall
  },
  setup() {
    const props = ref(null);
    const back = ref(null);
    const isModalOpened = ref(false);
    const page = ref(1);
    const limit = 15;
    const wishes = ref([]);
    const loading = ref(false);
    const loadMoreStatus = ref('idle');
    const currentItem = ref(null);
    const images = ref([]);
    const cols = ref(null);
    const breakClasses = ref(null);
    const openModal = (item) => {
      isModalOpened.value = true;
      currentItem.value = item;
    };
    const closeModal = () => {
      isModalOpened.value = false;
    };
    onBeforeMount(async () => {
      breakClasses.value = {
        'desktop': 'grid-cols-4',
        'medium': 'md:grid-cols-4',
        'gap': 'gap-4',
      };
      cols.value = 4;
      const obj = [
        {
          "width": 600,
          "col": 3
        },
        {
          "width": 1000,
          "col": 4
        },
      ];
      if (window.innerWidth) {
        for (let i = 0; i <= obj.length; i++) {
          if (typeof obj[i] !== 'undefined' && window.innerWidth <= obj[i].width) {
            cols.value = obj[i].col;
            breakClasses.value = {
              'desktop': 'grid-cols-' + obj[i].col,
              'medium': 'md:grid-cols-' + obj[i].col,
              'gap': 'gap-' + obj[i].col,
            };
            break;
          }
        }
      }
    });

    const loadWishes = async () => {
      if (
          loadMoreStatus.value === 'idle'
      ) {
        loadMoreStatus.value = 'loadingRecords';
        loading.value = true;
        disableFade();
        await getWishes(page.value, limit);
      }
    }

    const disableFade = () => {
      for (let i = 0; i < wishes.value.length; i++) {
        wishes.value[i]['fade'] = false
      }
    }

    const getWishes = async () => {
      axios.get(
          `${process.env.API_URL}/wish/index?page=${page.value}&per_page=${limit}`
      ).then((response) => {
        loadMoreStatus.value = response.data.meta.to < limit ?
            'no-more' :
            'idle';
        let length = response.data.data.length;
        let divisor = cols.value;
        if (length > 0) {
          let responseWishes = [];
          let newWishes = [];
          for (let i = 0; i < length; i++) {
            let item = response.data.data[i];
            if (item) {
              responseWishes.push(item);
              images.value.push(item);
            }
            if ((i + 1) % divisor === 0 || (length - 1) === i) {
              newWishes.push(responseWishes);
              responseWishes = [];
            }
          }
          newWishes = newWishes[0].map((_, i) => newWishes.map(row => row[i]));
          if (wishes.value.length > 0) {
            wishes.value.concat(newWishes);
            for (let j = 0; j < wishes.value.length; j++) {
              for (let k = 0; k < newWishes.length; k++) {
                if (newWishes[j]) {
                  wishes.value[j].push(newWishes[j][k]);
                }
              }
            }
          } else {
            wishes.value = newWishes;
          }
          page.value++;
          if (length < limit) {
            loadMoreStatus.value = 'no-more';
          }
        } else {
          loadMoreStatus.value = 'no-more';
        }
        loading.value = false;
      }).catch((e) => {
        console.log('error: ' + e);
        loading.value = false;
      });
    }

    const onSwiper = (swiper) => {
      let index = images.value.findIndex((element) => element.id === currentItem.value.id);
      swiper.activeIndex = index;
      swiper.update();
    };
    const onSlideChange = () => {
    };

    onMounted(async () => {
      props.value = await render('/wish/wishes');
      back.value = prepareUrlToRouter(props.value.back);
      await loadWishes();
      loading.value = false;
    });

    return {
      wishes: wishes.value.length > 0 ? wishes.value.slice().reverse() : wishes,
      isModalOpen: false,
      currentImageIndex: 0,
      loading,
      loadWishes,
      loadMoreStatus,
      isModalOpened,
      openModal,
      closeModal,
      onSwiper,
      onSlideChange,
      modules: [Pagination],
      currentItem,
      back,
      images,
      cols
    };
  }
}
</script>

<template>
  <App>
    <div class="relative z-10">
      <Return :back="back" />
      <Head head="Zdjęcia i wpisy" />
      <TransitionGroup name="fade" mode="out-in" >
        <div
            :class="[
                        cols === 4 ? 'grid-cols-4' : 'grid-cols-3',
                        cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3',
                        cols === 4 ? 'gap-4' : 'gap-3',
                    ]"
            class="grid mx-2"
        >
          <div :class="'grid gap-' + cols" v-for="item in wishes">
            <div v-for="wish in item" :class="{
                            'animate-fade-in': wish ? wish.fade : false
                        }">
              <img v-if="wish" class="h-auto max-w-full rounded-lg object-cover"
                   @click="openModal(wish)"
                   :style="{
                                   height: wish ? `${wish.height}px` : false,
                                }"
                   :src="wish.thumb" alt="">
            </div>
          </div>
        </div>
        <div v-if="!loading">
          <p v-if="loadMoreStatus === 'no-more'" id="load-more" class="no-more my-3" ></p>
          <button
              class="hover:cursor-pointer hover:opacity-70 my-2 text-center w-full text-[20px] bg-[#ffffff]
                            px-4 py-2 rounded-2xl shadow-[0_0_6px_0_rgba(57,100,90,0.3)] border-[1px] border-[#39645a41]"
              v-else
              @click="loadWishes">Pokaż więcej</button>
        </div>
        <div v-else>
          <pulse-loader :loading="loading" :size="'10px'"></pulse-loader>
        </div>
      </TransitionGroup>
      <ModalComponent :is-open="isModalOpened" @modal-close="closeModal">
        <template #content>
          <swiper
              :slides-per-view="1"
              :modules="modules"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide
                v-for="(slideContent, index) in images"
                :key="index"
                :virtualIndex="index"
            >
              <div class="flex flex-wrap justify-center items-center w-[100vw] px-3">
                <img :src="slideContent.url" :alt="slideContent.alt"/>
                <div v-if="slideContent.wish.content" class="mt-5 text-center bg-[#FFFFFF] rounded-2xl py-2 px-4 shadow-md">
                  <p>{{ slideContent.wish.content }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </template>
      </ModalComponent>
    </div>
  </App>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  margin: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item {
  position: relative;
  width: 150px;
  border-radius: 4px;
  background-color: #a1cbfa;
  border: 1px solid #4290e2;
  margin-bottom: 15px;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100px;
}

</style>
