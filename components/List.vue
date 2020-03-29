<template>
  <div>
    <div v-for="list in lists" :key="list.index">
      <p>{{ list.voca }}</p>
      <p>{{ list.meaning }}</p>
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
