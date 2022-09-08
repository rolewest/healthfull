<template>
  <h1>
    <span class="text-h4 holdTitle text-center" @click="pressedStart()">
      Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div>
      <span class="pressStartArrow">Gamify your health</span>
    </span>
  </h1>
  <span
    class="mdi mdi-comment-quote-outline citation"
    @click="
      citation(
        1,
        'RMR',
        'Resting Metabolic Rate',
        `We use the Oxford method to get your base RMR.`
      )
    "
  ></span>
</template>

<script>
import JustHeart from "../components/JustHeart.vue";
export default {
  props: [],
  components: {
    JustHeart,
  },
  methods: {
    pressedStart() {
      alert("welcome!");
    },
    citation(id, name, caption, short, show = true) {
      this.$emit("citation", id, name, caption, short, show);
    },
  },
};
</script>

<style>
body {
  background: #cfcfcf;
}
</style>
