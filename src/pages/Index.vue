<template>
  <q-page class="flex flex-center">
    <MainSection />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MainSection from "src/layouts/MainSection.vue";

export default defineComponent({
  name: "PageIndex",
  components: { MainSection },
});
</script>
