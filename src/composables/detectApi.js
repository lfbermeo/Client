import { ref } from "vue";

import { API_ENDPOINT } from "../config";

export default function useDetectApi() {
  const response = ref(null);
  const isLoading = ref(false);
  const hasError = ref(false);

  const detectHelmets = async (fileType = "image") => {
    isLoading.value = true;

    try {
      const res = await fetch(`${API_ENDPOINT}api/predict/${fileType}`);
      response.value = await res.json();

      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
    }
  };

  return { response, isLoading, hasError, detectHelmets };
}
