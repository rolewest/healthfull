<template>
  <div class="hold-start block-item"></div>
  <div class="text-center block-item top-block">
    <br />
    The only patient simulator game where you play the patient...
  </div>
  <div
    class="start-title-h4 rpgClickCursor"
    @click="pressedStart()"
    v-if="isNewUser"
  >
    <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
    <div
      class="pressStartArrow rpgClickCursor block-item"
      @click="pressedStart()"
    >
      <span>Start</span>
    </div>
  </div>
  <div
    class="start-title-h4 rpgClickCursor"
    @click="pressedContinue()"
    v-if="!isNewUser"
  >
    <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
    <div
      class="pressStartArrow rpgClickCursor block-item"
      @click="pressedContinue()"
    >
      <span>Continue</span>
    </div>
  </div>
  <div class="text-center block-item">To Gameify your health!</div>
  <div class="text-center block-item">
    Using the latest scientific & medical research
  </div>

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
import confetti from "https://cdn.skypack.dev/canvas-confetti";
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
    startConfetti() {
      confetti({
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["star"],
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        particleCount: 300,
        scalar: 1.2,
        shapes: ["star"],
        // origin: { y: 0.5, x: 0.6 },
      });
    },
    pressedStart() {
      setTimeout(() => {
        this.startConfetti();
      }, 100);
      setTimeout(() => {
        this.startConfetti();
      }, 300);

      setTimeout(() => {
        this.$router.push({ name: "intro" });
      }, 1000);
    },
    pressedContinue() {
      setTimeout(() => {
        this.startConfetti();
      }, 100);
      setTimeout(() => {
        this.startConfetti();
      }, 300);

      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 1000);
    },
    // citation(id, name, caption, short, show = true) {
    //   this.$emit("citation", id, name, caption, short, show);
    // },
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
  font-family: "Material Design Icons";
  content: "\F02D5";
  // F05F6
  overflow: hidden;
  font-size: 25em;
  opacity: 0.1;
  color: $negative;
  animation: pulse-animate-intro 3s infinite;
}
.q-page-container {
  margin: auto;
  /* max-width: 1000px; */
  /* background: hotpink; */
  // max-width: 95%;
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
  position: relative;
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

  95% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.start-title-h4 {
  font-size: 1.8em;
  text-align: center;
  text-decoration: double;
  // border: 1px solid $primary;
  display: block;
  text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
    -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
    0px -2px 0 $info;
}
.start-title-h4:active,
.start-title-h4:hover {
  color: $positive;
  text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
    -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
    0px -2px 0 $info;
}
</style>
