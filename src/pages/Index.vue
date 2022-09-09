<template>
  <q-page class="flex flex-center">
    <MainSection @citation="citation" />
  </q-page>
</template>
<div class="modelElm"></div>
<script>
import { defineComponent } from "vue";
import MainSection from "src/layouts/MainSection.vue";

export default defineComponent({
  name: "PageIndex",
  components: { MainSection },
  methods: {
    citation(id, name, caption, short, show = true) {
      console.log("emit indesx.vue");
      this.$emit("citation", id, name, caption, short, show);
    },
  },
});
</script>
