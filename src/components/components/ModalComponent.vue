<script >
import {ref, TransitionGroup} from "vue";
import { onClickOutside } from '@vueuse/core'

export default {
    name: 'ModalComponent',
    components: {TransitionGroup},
    emits: ["modal-close"],
    props: {
        isOpen: {
            type: Boolean,
            default: true
        },
    },
    setup (props, emits) {
        const isOpen = ref(props);
        const target = ref(null);
        const ignoreElRef = ref(null);
        onClickOutside(target, () => emits.emit('modal-close'))
        const closeModal = () => {}
        return {
            isOpen,
            emit: emits.emit,
            target,
            ignoreElRef,
            onClickOutside
        };
    }
}


</script>

<template>
    <TransitionGroup name="fade" mode="out-in">
        <div v-if="isOpen.isOpen" class="modal-mask flex justify-center items-center  f-fadeOut">
            <div class="modal-wrapper ">
                <div class="modal-container" >
                    <div class="modal-close">
                        <slot name="close">
                            <div class="w-full flex justify-end">
                                <button type="button"
                                        @click.stop="emit('modal-close')"
                                        class="absolute right-5 top-5 text-gray-400 bg-red-500 -mr-1.5 -mt-1.5 rounded-lg text-sm w-8 h-8 ml-auto flex justify-center items-center p-1 shadow-[0_0px_5px_rgba(0,0,0,1)] z-10" data-modal-hide="default-modal">
                                    <font-awesome-icon icon="fa-solid fa-xmark" class="text-lg text-red-50 text-shadow rounded-md" />
                                </button>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-body items-center w-[100vw]">
                        <div ref="target">
                            <slot name="content"> default content </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TransitionGroup>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
}
.modal-container {
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(255, 255, 255, 0.33);
}

</style>
