import { ref } from "vue";

import { API_ENDPOINT } from "../config";

export default function useApiFiles() {
  const status = ref("not-started");
  const filesForm = ref(null); // Reference to form element
  const response = ref(null);
  const isLoading = ref(false);

  const uploadFiles = async () => {
    const formData = new FormData(filesForm.value);
    status.value = "pending";
    isLoading.value = true;

    try {
      const res = await fetch(`${API_ENDPOINT}api/files/upload`, {
        method: "post",
        body: formData,
      });

      response.value = await res.json();
      status.value = "success";
      isLoading.value = false;
    } catch (error) {
      isLoading.value = false;
      status.value = "error";
    }
  };

  return { filesForm, status, isLoading, response, uploadFiles };
}
