<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import useDetectApi from '../composables/detectApi';
import PredictionResult from '../components/PredictionResult.vue';

// Refs
const fileType = ref(useRoute().query.type);

// Use Detect API composable
const { response, isLoading, hasError, detectHelmets } = useDetectApi();

const predictions = ref([]);


onMounted(async () => {
    await detectHelmets(fileType.value);
    predictions.value = response.value.data.predictions;
    console.log(predictions.value);
});
</script>

<template>
    <h1 class="title">Vista resultado detección</h1>

    <section v-if="isLoading" class="section">
        <progress class="progress is-small is-primary" max="100"></progress>
    </section>

    <section class="section">
        <div class="predictions" v-if="predictions">
            <PredictionResult v-for="prediction in predictions" :key="prediction.id"
                :numDetections="prediction.predictions.length" :fileName="prediction.filename" :typeFile="fileType" />
        </div>
    </section>
</template>