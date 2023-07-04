import { ref } from "vue";
import { io } from "socket.io-client";

let socket = null;

export default function useSocketConnection(url = "http://localhost") {
  const isConnected = ref(false);
  const isLoading = ref(false);
  const hasError = ref(false);

  const connect = () => {
    isLoading.value = true;
    try {
      socket = io(url, { transports: ["websocket"] });
      isConnected.value = true;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
    }
  };

  const disconnect = () => {
    isLoading.value = true;
    try {
      socket.close();
      isConnected.value = false;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
    }
  };

  /**
   * Exect a callback function pased in params when event is received.
   *
   * @param {String} event
   * @param {Function} callback
   */
  const on = (event, callback) => {
    isLoading.value = true;
    try {
      socket.on(event, callback);
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
    }
  };

  /**
   * Removes a event listener from the listeners array.
   *
   * @param {String} event
   */
  const off = (event) => {
    socket.removeAllListeners(event);
  };

  /**
   * Emit a event to socket server, adicionally passed data in params.
   *
   * @param {String} eventName Event name.
   * @param {Object} data Any value of data.
   */
  const emit = (eventName, data = null) => {
    isLoading.value = true;
    try {
      if (data != null) {
        socket.emit(eventName, data);
      } else {
        socket.emit(eventName);
      }
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      isLoading.value = false;
    }
  };

  return {
    socket,
    isConnected,
    isLoading,
    hasError,
    connect,
    disconnect,
    on,
    off,
    emit,
  };
}
