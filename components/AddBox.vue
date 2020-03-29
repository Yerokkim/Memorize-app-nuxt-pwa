<template>
  <div>
    <form class="v-flex md-12">
      <v-text-field v-model="voca" label="Vocabulary" required></v-text-field>

      <v-text-field v-model="meaning" label="Meaning" required></v-text-field>

      <v-select
        v-model="times"
        :items="items"
        label="Select"
        data-vv-name="select"
        required
      ></v-select>

      <v-checkbox
        v-model="alram"
        :value="true"
        label="alram"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn class="mr-4" @click="add">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddBox",
  data() {
    return {
      voca: "",
      meaning: "",
      times: null,
      items: [1, 2, 5, 6],
      alram: false
    };
  },

  methods: {
    ...mapActions({
      addToStore: "addVoca"
    }),
    async add() {
      const dataList = {
        voca: this.voca,
        meaning: this.meaning,
        times: this.times,
        alram: this.alram
      };

      await this.addToStore(dataList);
      this.clear();
    },
    clear() {
      this.voca = "";
      this.meaning = "";
      this.times = null;
      this.alram = false;
    }
  }
};
</script>
