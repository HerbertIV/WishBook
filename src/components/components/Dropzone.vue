<script >
import {ref, onMounted, defineComponent, defineEmits} from 'vue'
import { Dropzone } from 'dropzone-exif-fix'
import { useStore } from 'vuex'
import EXIF from "exif-js";
export default defineComponent({
    name: 'Dropzone',
    props:['dropzoneOptions'],
    setup (props, { emit }) {
        //getting the div container
        const dropRef = ref(null);
        const helperBox = ref(null);

        const sendFile = (event) => {
            const file = event.target.files[0];

            // Encode the file using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                // Use a regex to remove data url part
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '');
                let formData = new FormData();
                formData.append('image', base64String);
                axios.post(
                    `${process.env.API_URL}/wish/file-upload`,
                    formData
                ).catch((e, response) => {
                    notifications.value.addNotification('Niestety coś poszło nie tak :(, spróbuj ponownie.', 'error');
                    if (typeof e.response.data.errors !== undefined && e.response.data.errors) {
                        errors.value = e.response.data.errors;
                    }
                    loading.value = false;
                });
            };
            reader.readAsDataURL(file);
        }

        const customPreview = `
            <div class="d-flex flex-wrap dz-preview dz-processing dz-image-preview dz-complete mt-1">
              <div class="spinner"></div>
              <div class="dz-image">
                <img data-dz-thumbnail>
              </div>
              <div class="dz-progress">
                <span class="dz-upload" data-dz-uploadprogress></span>
              </div>
              <div class="dz-error-message"><span data-dz-errormessage></span></div>
              <div class="dz-success-mark">
                <i class="bi bi-check-circle-fill" style="font-size: 2rem; color: green;"></i>
              </div>
              <div class="dz-error-mark">
                <i class="bi bi-exclamation-circle-fill" style="font-size: 2rem; color: red;"></i>
              </div>
            </div>
          `

        onMounted(() => {
            // Configuring Dropzone and Adding to div element
            if(dropRef.value !== null) {
                let dropzone = new Dropzone(dropRef.value, {
                    ...props.dropzoneOptions,
                    ...{previewTemplate: customPreview}
                });
                dropzone.on('success', file => {
                    const response = JSON.parse(file.xhr.response);
                    emit('syncImagesDataFromDropzone', file);
                    dropzone.removeFile(file);
                });
                dropzone.on('processing', file => {
                    if (file.previewElement) {
                        file.previewElement.classList.add("dz-processing");
                        if (file._removeLink) {
                            return (file._removeLink.innerHTML = this.options.dictCancelUpload);
                        }
                    }
                });
            }
        })

        return {
            dropRef,
            sendFile
        }
    }
})
</script>

<template>
    <div>
        <div ref="dropRef"
             class="flex flex-wrap text-center justify-center items-center dropzone custom-dropzone
              mb-2 bg-[#ffffff50] min-h-[119px] border-[#39645a41] block w-full
               rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
               focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
"
        ></div>
        <div ref="helperBox">
        </div>
        <div class="dropzone preview-container flex flex-wrap justify-between"></div>
    </div>
</template>

<style scoped>
    .custom-dropzone {
        border-style: hidden;
        border-width: 1px;
        border-color: rgb(218, 222, 224);
        padding: 20px;
        color: rgb(102, 102, 100)
    }
</style>
