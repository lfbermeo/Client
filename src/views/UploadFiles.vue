<script setup>
import { ref, computed, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

import useApiFiles from './../composables/uploadFiles';

// Refs
const fileType = ref(useRoute().query.type);

const inputFile = ref(null);
const filesSelected = ref([]);
const previewFiles = ref([]);

// Computed properties
const isImages = computed(() => fileType.value === 'image');
const formats = computed(() => {
    previewFiles.value = [];
    filesSelected.value = [];

    if (fileType.value === 'image') {
        return ['image/png', 'image/jpeg'];
    } else {
        return ['video/mp4'];
    }
});

// Use UploadFiles Composable
const { filesForm, isLoading, status, response, uploadFiles } = useApiFiles();

// Prevent reload
onBeforeRouteUpdate((to, from) => {
    fileType.value = to.query.type;
});

// File methods
function selectFile(event) {
    // console.log("Selected files", inputFile.value.files);
    filesSelected.value = inputFile.value.files;
    previewFiles.value = [];
    for (const file of filesSelected.value) {
        // console.log("File", file);
        createPreview(file);
    }
    // console.log("Preview images", previewFiles.value);
}

function createPreview(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
        previewFiles.value.push(event.target.result);
    };
    reader.readAsDataURL(file);
}

// Redirect to results view
const timerRedirect = ref(3);
const router = useRouter();

watch(status, async (status, prevStatus) => {
    if (status !== 'success') return;

    console.log(status);

    for (let index = timerRedirect.value; index > 0; index--) {
        timerRedirect.value = index;
        await timeout(1000);
    }

    router.push({ name: 'results', query: { type: fileType.value } });

    // if (fileType.value === 'image') {
    //     router.push({ name: 'results', query: { type: fileType.value } });
    // } else {
    //     router.push({ name: 'resultsStream', query: { type: fileType.value } });
    // }

});

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

</script>

<template>
    <h1 class="title mt-6">{{ isImages ? 'Selector de imágenes' : 'Selector de video' }}</h1>
    <!-- <h2 class="subtitle">{{ fileType }}</h2> -->

    <section class="section">
        <form class="form" enctype="multipart/form-data" @submit.prevent="uploadFiles" ref="filesForm">
            <label class="label" for="file-input">
                {{ isImages ? '🖼️ Seleccionar imágenes...' : '🎞️ Seleccionar video...' }}
            </label>
            <div class="field has-addons">
                <div class="control">
                    <input class="input" id="file-input" required type="file" name="file" :accept="formats"
                        @change="selectFile" ref="inputFile" :multiple="isImages" />
                </div>
                <div class="control">
                    <button :class="['button', 'is-info', { 'is-loading': isLoading }]" type="submit">
                        <span class="icon">
                            <i class="fas fa-cloud-upload-alt" />
                        </span>
                    </button>
                </div>
            </div>
        </form>
    </section>

    <section v-if="status === 'success'" class="section has-text-centered">
        <p class="is-size-4">Redirect to result view in {{ timerRedirect }} seconds...</p>
    </section>

    <section class="section">
        <ul class="files-list">
            <li class="files-item" v-for="(file, index) in filesSelected">
                <img v-if="isImages" :src="previewFiles[index]" />
                <video v-else :src="previewFiles[index]" controls />
                <p>{{ file.name }}</p>
            </li>
        </ul>
    </section>
</template>