<template>

  <div class="home">
    <navbar />
    <b-row class="mt-5 mb-5">
      <b-col cols="3">
        <cards />
      </b-col>
      <b-col cols="3">
        <cards />
      </b-col>
      <b-col cols="3">
        <cards />
      </b-col>
      <b-col cols="3">
        <cards />
      </b-col>
    </b-row>
    <tables />
  </div>
</template>

<script>
import navbar from "../components/nav-bar.vue";
import cards from "../components/Cards.vue";
import tables from "@/components/Table.vue";
export default {
  name: "Home",
  components: {
    navbar,
    cards,
    tables,
  },
};
</script>
