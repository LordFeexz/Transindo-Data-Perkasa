import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios, { formToJSON } from "axios";
import { swalError } from "../../helpers/swalError";

export const useDataStore = defineStore("data", {
  state: () => ({
    lists: [],
    baseUrl: `http://localhost:3000`,
    params: {
      role: null,
      level: null,
      languages: null,
      tools: null,
    },
  }),
  actions: {
    async fetchList() {
      try {
        let url = `${this.baseUrl}/data`;
        if (this.params.role) {
          url += `?role=${this.params.role}`;
        } else if (this.params.level) {
          url += `?level=${this.params.level}`;
        } else if (this.params.languages) {
          url += `?languages_like=${this.params.languages}`;
        } else if (this.params.tools) {
          url += `?tools_like=${this.params.tools}`;
        }
        const { data } = await axios({
          method: "get",
          url,
        });
        this.lists = data;
      } catch (err) {
        swalError(err);
      }
    },
    changeRole(data) {
      this.params.role = data;
    },
    changeLevel(data) {
      this.params.role = data;
    },
    changeLanguages(data) {
      this.params.languages = data;
    },
    changeTools(data) {
      this.params.tools = data;
    },
  },
});
