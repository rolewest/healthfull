<template>
  <div class="hold-start block-item"></div>
  <div class="text-center block-item top-block">
    <br />
    The only patient simulator game where you play the patient...
  </div>
  <div class="text-h4 rpgClickCursor">
    <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
    <div
      class="pressStartArrow rpgClickCursor"
      @click="this.$router.push({ name: 'home' })"
    >
      {{ isNewUser ? "Start New" : "Continue" }}
      <!-- {{
          window.LocalStorage.getItem("userHeight") ? "Continue" : "Start new"
        }} -->
      Game
    </div>
  </div>
  <div class="text-center block-item">Gameify your health!</div>
  <div class="text-center block-item disclaimer q-pa-xl">
    <span class="blinker"
      >DISCLAIMER: THIS GAME DOES NOT PROVIDE MEDICAL ADVICE</span
    >
    <br />The information, including but not limited to, text, graphics, images
    and other material contained in this game are for informational purposes
    only. The purpose of this game is to promote broad consumer understanding
    and knowledge of various health topics. It is not intended to be a
    substitute for professional medical advice, diagnosis or treatment. Always
    seek the advice of your physician or other qualified health care provider
    with any questions you may have regarding a medical condition or treatment
    and before undertaking a new health care regimen, and never disregard
    professional medical advice or delay in seeking it because of something you
    have read on this game.
  </div>

  <br />

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
      LocalStorage.set("userHeight", this.userHeight); //save it
      LocalStorage.set("userWeight", this.userWeight); //save it
      LocalStorage.set("userAge", this.userAge); //save it
      LocalStorage.set("userSkill", this.userSkill); //save it
      LocalStorage.set("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      LocalStorage.set("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      LocalStorage.set("userKG", this.userKG);
      LocalStorage.set("userCM", this.userCM);
      LocalStorage.set("userNeck", this.userNeck);
      LocalStorage.set("userWaist", this.userWaist);
      LocalStorage.set("userHip", this.userHip);
      //points
      LocalStorage.set("user.points.xp", this.userBasePoints.xp);
      LocalStorage.set("user.points.hp", this.userBasePoints.hp);
      LocalStorage.set("user.points.cp", this.userBasePoints.cp);
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

<style lang="scss">
body {
  background: #cfcfcf !important;
  position: relative;
}
.hold-start:before {
  position: absolute;
  display: block;
  left: 5%;
  width: 85%;
  text-align: center;
  content: "\2665";
  font-size: 20em;
  opacity: 0.2;
  color: $negative;
  animation: pulse-animate-intro 3s infinite;
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
.top-block {
  display: block;
  position: relative;
  margin-top: 5em;
}
.block-item {
  all: unset;
  width: 100%;
  /* border: 1px solid #000; */
  text-align: center;
}
.disclaimer {
  font-size: 0.7em;
  padding: 1em;
  box-shadow: 0px -4px 0px 0px $negative, 0px 5px 0px 0px $negative,
    -4px 0px 0px 1px$negative, 4px 0px 0px 1px $negative;
  margin-top: 30%;
}
.disclaimer span {
  animation: blinker 5s steps(2, end) infinite,
    border_anim_neg 1s linear infinite;
}
@keyframes border_anim_neg {
  0% {
    // background-image: linear-gradient(to right, $warning, $info);
    border-bottom: 5px double $negative;
  }
  50% {
    // background-image: linear-gradient(to right, $info, $warning);
    border-bottom: 5px double $warning;
  }
  100% {
    // background-image: linear-gradient(to right, $warning, $info);
    border-bottom: 5px double $negative;
  }
}
@keyframes pulse-animate-intro {
  0% {
    transform: scale(1);
  }

  70% {
    transform: scale(1.2);
  }
  90% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>
