<template>
  <h1>
    <span class="text-h4 holdTitle text-center">
      <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
      <span
        class="pressStartArrow rpgClickCursor"
        @click="this.$router.push({ name: 'home' })"
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
    saveUserData() {
      localStorage.setItem("userHeight", this.userHeight); //save it
      localStorage.setItem("userWeight", this.userWeight); //save it
      localStorage.setItem("userAge", this.userAge); //save it
      localStorage.setItem("userSkill", this.userSkill); //save it
      localStorage.setItem("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      localStorage.setItem("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      localStorage.setItem("userKG", this.userKG);
      localStorage.setItem("userCM", this.userCM);
      localStorage.setItem("userNeck", this.userNeck);
      localStorage.setItem("userWaist", this.userWaist);
      localStorage.setItem("userHip", this.userHip);
      //points
      localStorage.setItem("user.points.xp", this.userBasePoints.xp);
      localStorage.setItem("user.points.hp", this.userBasePoints.hp);
      localStorage.setItem("user.points.cp", this.userBasePoints.cp);
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
  background: #cfcfcf !important;
}
.q-page-container {
  margin: auto;
  /* max-width: 1000px; */
  /* background: hotpink; */
  max-width: 95%;
}
.opacity-50 {
  opacity: 0.5;
}
</style>
