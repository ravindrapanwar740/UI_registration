import axios from "axios";
import * as App from '../constant/constant'
import store  from "../store";

export const appLoader = {
    show: () => {
      store.dispatch({
        type: App.SHOW_LOADER,
      });
    },
    hide: () => {
      store.dispatch({
        type: App.HIDE_LOADER,
      });
    },
    reset: () => {
      store.dispatch({
        type: App.RESET_LOADER,
      });
    },
  };
  export const setAxiosCommonHeader = (key, value) => {
    axios.defaults.headers.common[key] = value;
  };
  
  export const removeAxiosCommonHeader = (key) => {
    delete axios.defaults.headers.common[key];
  };
export const updatUserDetailInApp = (userDetails = {}) => {
    setAxiosCommonHeader("token", userDetails?.token);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "userDetails",
        newValue: JSON.stringify(userDetails),
      })
    );
  };

  export const removeUserDetailsFromApp = () => {
    removeAxiosCommonHeader("token");
    localStorage.removeItem("userDetails");
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "userDetails",
        newValue: null,
      })
    );
  };
export const callApi = async (URL, options = {}) => {
    if (options.showLoader !== false) {
      appLoader.show();
    }
    try {
      const res = await axios({
        url: URL,
        method: options.method || "GET",
        ...options,
      });
      const data = res?.data;
      if (data.apiMessage && data.messageType) {
        // toaster.show(data.apiMessage, data.messageType);
      }
      return data;
    } catch (err) {
      if (err?.response?.status === 401) {
        // toaster.show("User Session Expired!", toaster.ERROR);
        removeUserDetailsFromApp();
      } else {
        // toaster.show(
        //   "Something went wrong! Please try again later.",
        //   toaster.ERROR
        // );
      }
      // throw err;
    } finally {
      if (options.showLoader !== false) {
        appLoader.hide();
      }
    }
  };