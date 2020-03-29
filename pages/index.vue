<template>
  <div>
    <v-layout column justify-center align-center>
      <AddBox />
      <List />
    </v-layout>
  </div>
</template>

<script>
import AddBox from "~/components/AddBox.vue";
import List from "~/components/List.vue";

export default {
  components: {
    // Logo,
    // VuetifyLogo,
    AddBox,
    List
  }
};
</script>
