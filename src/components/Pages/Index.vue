<template>
    <div ref="list">
        <Header headerText="Wpisy do księgi życzeń"/>
        <TransitionGroup name="fade">
            <div v-for="wish in wishes" :key="wish.id">
                <Wish :wish="wish" />
            </div>
        </TransitionGroup>
        <p id="load-more" class="my-5" :class='loadMoreStatus'></p>
    </div>
</template>
<script>
import Header from "@/components/Layouts/Header.vue";
import axios from "axios";
import Wish from "@/components/components/Wish.vue";
import {ref, onMounted, Transition, TransitionGroup, Suspense} from "vue";
export default {
    name: "Index",
    components: {Wish, Header, Transition, TransitionGroup, Suspense},
    setup() {
        const wishes = ref([]);
        const loadMoreStatus = ref('idle');
        const list = ref(null);
        const page = ref(1);
        const limit = 2;
        console.log(process.env);
        const getWishes = async () => {
            axios.get(
                `${process.env.API_URL}/wish/index?page=${page.value}&perPage=${limit}`
            ).then((response) => {
                wishes.value.push(...response.data);
                loadMoreStatus.value = response.data.length < limit ?
                    'no-more' :
                    'idle';
                page.value++;
            }).catch((e) => {
                console.log('error: ' + e);
            });
        }
        onMounted(async () => {
            window.addEventListener('scroll', loadWishes);
            loadWishes();
        });
        const loadWishes = async (event) => {
            if (
                loadMoreStatus.value === 'idle' &&
                list.value.getBoundingClientRect().bottom < window.innerHeight
            ) {
                loadMoreStatus.value = 'loading';
                getWishes(page.value, limit);
            }
        }
        return {
            wishes,
            loadWishes,
            loadMoreStatus,
            list
        }
    }
}
</script>
<style scoped>
* {
    font-family: arial, sans-serif;
}

/* infinite scroll container */
#load-more {
    text-align: center;
    color: #999;
}

/* loading spinner */
#load-more.loading::after {
    content: " ";
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: spin 1.2s linear infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* no more data notif */
#load-more.no-more::before {
    content: 'Dziękujemy za wszystkie życzenia :)';
}

/* status helper */
#status {
    position: fixed;
    right: 1rem;
    top: 1rem;
    background: #f003;
    padding: .2rem .5rem;
    border-radius: 4px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to /* .slide-fade-leave-active poniżej Vue 3.1.3 */ {
    opacity: 0;
    transform: translateY(-20px);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

</style>