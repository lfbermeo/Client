<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import usePredictionResults from "../composables/predictionResults";
import PredictionResult from '../components/PredictionResult.vue';


const fileType = ref(useRoute().query.type);

const { predictionResults: predictions, fetchPredictions, closePredictionResultEvent } = usePredictionResults();

onMounted(() => {
    console.log('Se ejecuto esta linea');
    fetchPredictions();
});

onUnmounted(() => {
    console.log('OnUnmounted');
    closePredictionResultEvent();
})

</script>

<template>
    <h1 class="title">Result stream view</h1>

    <section class="section">
        <div class="predictions" v-if="predictions">
            <PredictionResult v-for="prediction in predictions" :key="prediction.id"
                :numDetections="prediction.predictions.length" :fileName="prediction.filename" :typeFile="fileType" />
        </div>
    </section>
</template>