<template>
  <h1>
    <span class="text-h4 holdTitle text-center">
      <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
      <span
        class="pressStartArrow rpgClickCursor"
        @click="this.$router.push('base')"
        >{{ isNewUser ? "Start" : "Continue" }}
        <!-- {{
          window.localStorage.getItem("userHeight") ? "Continue" : "Start new"
        }} -->
        Game</span
      >
    </span>
  </h1>
  <!-- <span
    class="mdi mdi-comment-quote-outline citation"
    @click="
      citation(
        1,
        'RMR',
        'Resting Metabolic Rate',
        `We use the Oxford method to get your base RMR.`
      )
    "
  ></span> -->
</template>

<script>
// import JustHeart from "../components/JustHeart.vue";
export default {
  props: [],
  components: {
    // JustHeart,
  },
  data() {
    return {
      isNewUser: localStorage.getItem("userAge") === "null",
    };
  },
  methods: {
    pressedStart() {
      alert("welcome!");
    },
    citation(id, name, caption, short, show = true) {
      this.$emit("citation", id, name, caption, short, show);
    },
  },
  mounted() {
    console.log(
      "this.$store.",
      window.localStorage.getItem("userHeight"),
      this.isNewUser
    );
  },
};
</script>

<style>
body {
  background: #cfcfcf;
}
</style>
