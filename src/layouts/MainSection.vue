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
          window.LocalStorage.getItem("userHeight") ? "Continue" : "Start new"
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
import { LocalStorage } from "quasar";
// import JustHeart from "../components/JustHeart.vue";
export default {
  props: [],
  components: {
    // JustHeart,
  },
  data() {
    return {
      isNewUser: LocalStorage.getItem("userAge") === "null",
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
      LocalStorage.setItem("userHeight", this.userHeight); //save it
      LocalStorage.setItem("userWeight", this.userWeight); //save it
      LocalStorage.setItem("userAge", this.userAge); //save it
      LocalStorage.setItem("userSkill", this.userSkill); //save it
      LocalStorage.setItem("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      LocalStorage.setItem("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      LocalStorage.setItem("userKG", this.userKG);
      LocalStorage.setItem("userCM", this.userCM);
      LocalStorage.setItem("userNeck", this.userNeck);
      LocalStorage.setItem("userWaist", this.userWaist);
      LocalStorage.setItem("userHip", this.userHip);
      //points
      LocalStorage.setItem("user.points.xp", this.userBasePoints.xp);
      LocalStorage.setItem("user.points.hp", this.userBasePoints.hp);
      LocalStorage.setItem("user.points.cp", this.userBasePoints.cp);
    },
  },
  mounted() {
    console.log(
      "this.$store.",
      LocalStorage.getItem("userHeight"),
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
