<template>
  <div>
    <div v-for="list in lists" :key="list.index">
      <v-card>
        <v-list-item>
          <p>Vocabulary: {{ list.voca }}</p>
          <p>meaning:{{ list.meaning }}</p>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  computed: {
    lists() {
      return this.$store.state.list;
    }
  }
};
</script>
