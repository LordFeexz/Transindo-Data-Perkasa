import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { swalError } from "../../helpers/swalError";

export const useDataStore = defineStore("data", {
  state: () => ({
    lists: [],
    url: `http://localhost:3000`,
  }),
  actions: {
    async fetchList() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.url}/data`,
        });
        this.lists = data;
      } catch (err) {
        swalError(err);
      }
    },
  },
});
