<template>
  <q-page class="flex flex-center">
    <MainSection @citation="citation" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainSection from "src/layouts/MainSection.vue";

export default defineComponent({
  name: "PageIndex",
  components: { MainSection },
  methods: {
    citation(id, name, caption, short, show = true) {
      this.$emit("citation", id, name, caption, short, show);
    },
  },
});
</script>
