import { create } from "zustand";
import { getAxiosClient } from "../api";
const useUserStore = create((set) => ({
  createUser: async (formData) => {
    return getAxiosClient()
      .post("user/create-user", formData)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        throw error;
      });
  },
}));

export default useUserStore;
