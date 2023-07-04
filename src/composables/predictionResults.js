import { ref } from "vue";
import { API_ENDPOINT } from "../config";

import useSocketConnection from "./socketConnection";

const predictionResults = ref([]);

export default function usePredictionResults() {
  const { on, emit, off } = useSocketConnection(API_ENDPOINT);

  const fetchPredictions = () => {
    predictionResults.value = [];
    console.log("Fetching prediction");
    emit("predict", { other: "" });

    on("prediction-result", (prediction) => {
      console.log("Received prediction:", prediction);
      predictionResults.value.push(prediction);
    });

    console.log("Llego aqui");

    on("mantein-conection", (frame) => {
      console.log(`Frame ${frame}`);
    });
  };

  const closePredictionResultEvent = () => {
    predictionResults.value = [];
    off("prediction-result");
    off("mantein-conection");
  };

  return {
    predictionResults,
    fetchPredictions,
    closePredictionResultEvent,
  };
}
