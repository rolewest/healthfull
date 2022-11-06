<template>
  <div class="hold-start block-item"></div>
  <div class="text-center block-item top-block">
    <br />
    The only patient simulator game where you play the patient...
  </div>
  <div class="text-h4 rpgClickCursor" @click="pressedStart()">
    <!-- Health<JustHeart />Full
      <div class="powerBar powerBarGlow"></div> -->
    <div
      class="pressStartArrow rpgClickCursor block-item"
      @click="pressedStart()"
    >
      {{ isNewUser ? "Start New" : "Continue" }} Game
    </div>
  </div>
  <div class="text-center block-item">To Gameify your health!</div>
  <div class="text-center block-item">
    With the latest scientific & medical research
  </div>

  <div class="stethoscope-8bit"></div>
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
      }, 200);

      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 1000);
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
  font-family: "Material Design Icons";
  content: "\F05F6";

  font-size: 20em;
  opacity: 0.1;
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

  100% {
    transform: scale(1.1);
  }
}
.flask-8bit {
  box-shadow: 18px 2px 0 0 rgba(121, 85, 72, 1),
    20px 2px 0 0 rgba(121, 85, 72, 1), 22px 2px 0 0 rgba(121, 85, 72, 1),
    24px 2px 0 0 rgba(121, 85, 72, 1), 16px 4px 0 0 rgba(96, 125, 139, 1),
    18px 4px 0 0 rgba(121, 85, 72, 1), 20px 4px 0 0 rgba(121, 85, 72, 1),
    22px 4px 0 0 rgba(121, 85, 72, 1), 24px 4px 0 0 rgba(121, 85, 72, 1),
    26px 4px 0 0 rgba(96, 125, 139, 1), 16px 6px 0 0 rgba(96, 125, 139, 1),
    18px 6px 0 0 rgba(158, 158, 158, 1), 20px 6px 0 0 rgba(158, 158, 158, 1),
    22px 6px 0 0 rgba(255, 255, 255, 1), 24px 6px 0 0 rgba(158, 158, 158, 1),
    26px 6px 0 0 rgba(96, 125, 139, 1), 18px 8px 0 0 rgba(48, 63, 70, 1),
    20px 8px 0 0 rgba(48, 63, 70, 1), 22px 8px 0 0 rgba(48, 63, 70, 1),
    24px 8px 0 0 rgba(48, 63, 70, 1), 18px 10px 0 0 rgba(96, 125, 139, 1),
    20px 10px 0 0 rgba(158, 158, 158, 1), 22px 10px 0 0 rgba(158, 158, 158, 1),
    24px 10px 0 0 rgba(96, 125, 139, 1), 18px 12px 0 0 rgba(96, 125, 139, 1),
    20px 12px 0 0 rgba(158, 158, 158, 1), 22px 12px 0 0 rgba(158, 158, 158, 1),
    24px 12px 0 0 rgba(96, 125, 139, 1), 18px 14px 0 0 rgba(96, 125, 139, 1),
    20px 14px 0 0 rgba(158, 158, 158, 1), 22px 14px 0 0 rgba(158, 158, 158, 1),
    24px 14px 0 0 rgba(96, 125, 139, 1), 16px 16px 0 0 rgba(96, 125, 139, 1),
    18px 16px 0 0 rgba(158, 158, 158, 1), 20px 16px 0 0 rgba(158, 158, 158, 1),
    22px 16px 0 0 rgba(158, 158, 158, 1), 24px 16px 0 0 rgba(158, 158, 158, 1),
    26px 16px 0 0 rgba(96, 125, 139, 1), 16px 18px 0 0 rgba(96, 125, 139, 1),
    18px 18px 0 0 rgba(158, 158, 158, 1), 20px 18px 0 0 rgba(158, 158, 158, 1),
    22px 18px 0 0 rgba(255, 255, 255, 1), 24px 18px 0 0 rgba(158, 158, 158, 1),
    26px 18px 0 0 rgba(96, 125, 139, 1), 14px 20px 0 0 rgba(96, 125, 139, 1),
    16px 20px 0 0 rgba(158, 158, 158, 1), 18px 20px 0 0 rgba(158, 158, 158, 1),
    20px 20px 0 0 rgba(158, 158, 158, 1), 22px 20px 0 0 rgba(255, 255, 255, 1),
    24px 20px 0 0 rgba(158, 158, 158, 1), 26px 20px 0 0 rgba(158, 158, 158, 1),
    28px 20px 0 0 rgba(96, 125, 139, 1), 14px 22px 0 0 rgba(96, 125, 139, 1),
    16px 22px 0 0 rgba(158, 158, 158, 1), 18px 22px 0 0 rgba(158, 158, 158, 1),
    20px 22px 0 0 rgba(158, 158, 158, 1), 22px 22px 0 0 rgba(158, 158, 158, 1),
    24px 22px 0 0 rgba(255, 255, 255, 1), 26px 22px 0 0 rgba(158, 158, 158, 1),
    28px 22px 0 0 rgba(96, 125, 139, 1), 12px 24px 0 0 rgba(96, 125, 139, 1),
    14px 24px 0 0 rgba(158, 158, 158, 1), 16px 24px 0 0 rgba(158, 158, 158, 1),
    18px 24px 0 0 rgba(158, 158, 158, 1), 20px 24px 0 0 rgba(158, 158, 158, 1),
    22px 24px 0 0 rgba(158, 158, 158, 1), 24px 24px 0 0 rgba(255, 255, 255, 1),
    26px 24px 0 0 rgba(158, 158, 158, 1), 28px 24px 0 0 rgba(158, 158, 158, 1),
    30px 24px 0 0 rgba(96, 125, 139, 1), 12px 26px 0 0 rgba(96, 125, 139, 1),
    14px 26px 0 0 rgba(158, 158, 158, 1), 16px 26px 0 0 rgba(158, 158, 158, 1),
    18px 26px 0 0 rgba(158, 158, 158, 1), 20px 26px 0 0 rgba(158, 158, 158, 1),
    22px 26px 0 0 rgba(158, 158, 158, 1), 24px 26px 0 0 rgba(158, 158, 158, 1),
    26px 26px 0 0 rgba(255, 255, 255, 1), 28px 26px 0 0 rgba(158, 158, 158, 1),
    30px 26px 0 0 rgba(96, 125, 139, 1), 10px 28px 0 0 rgba(96, 125, 139, 1),
    12px 28px 0 0 rgba(158, 158, 158, 1), 14px 28px 0 0 rgba(158, 158, 158, 1),
    16px 28px 0 0 rgba(158, 158, 158, 1), 18px 28px 0 0 rgba(158, 158, 158, 1),
    20px 28px 0 0 rgba(158, 158, 158, 1), 22px 28px 0 0 rgba(158, 158, 158, 1),
    24px 28px 0 0 rgba(158, 158, 158, 1), 26px 28px 0 0 rgba(255, 255, 255, 1),
    28px 28px 0 0 rgba(158, 158, 158, 1), 30px 28px 0 0 rgba(158, 158, 158, 1),
    32px 28px 0 0 rgba(96, 125, 139, 1), 8px 30px 0 0 rgba(96, 125, 139, 1),
    10px 30px 0 0 rgba(255, 193, 7, 1), 12px 30px 0 0 rgba(255, 152, 0, 1),
    14px 30px 0 0 rgba(255, 152, 0, 1), 16px 30px 0 0 rgba(255, 152, 0, 1),
    18px 30px 0 0 rgba(255, 152, 0, 1), 20px 30px 0 0 rgba(255, 152, 0, 1),
    22px 30px 0 0 rgba(255, 152, 0, 1), 24px 30px 0 0 rgba(255, 152, 0, 1),
    26px 30px 0 0 rgba(255, 152, 0, 1), 28px 30px 0 0 rgba(255, 255, 255, 1),
    30px 30px 0 0 rgba(255, 193, 7, 1), 32px 30px 0 0 rgba(255, 193, 7, 1),
    34px 30px 0 0 rgba(96, 125, 139, 1), 6px 32px 0 0 rgba(96, 125, 139, 1),
    8px 32px 0 0 rgba(255, 193, 7, 1), 10px 32px 0 0 rgba(255, 193, 7, 1),
    12px 32px 0 0 rgba(255, 152, 0, 1), 14px 32px 0 0 rgba(255, 152, 0, 1),
    16px 32px 0 0 rgba(255, 152, 0, 1), 18px 32px 0 0 rgba(255, 152, 0, 1),
    20px 32px 0 0 rgba(255, 152, 0, 1), 22px 32px 0 0 rgba(255, 152, 0, 1),
    24px 32px 0 0 rgba(255, 152, 0, 1), 26px 32px 0 0 rgba(255, 152, 0, 1),
    28px 32px 0 0 rgba(255, 152, 0, 1), 30px 32px 0 0 rgba(255, 255, 255, 1),
    32px 32px 0 0 rgba(255, 193, 7, 1), 34px 32px 0 0 rgba(255, 193, 7, 1),
    36px 32px 0 0 rgba(96, 125, 139, 1), 6px 34px 0 0 rgba(96, 125, 139, 1),
    8px 34px 0 0 rgba(255, 193, 7, 1), 10px 34px 0 0 rgba(255, 193, 7, 1),
    12px 34px 0 0 rgba(255, 152, 0, 1), 14px 34px 0 0 rgba(255, 152, 0, 1),
    16px 34px 0 0 rgba(255, 152, 0, 1), 18px 34px 0 0 rgba(255, 152, 0, 1),
    20px 34px 0 0 rgba(255, 152, 0, 1), 22px 34px 0 0 rgba(255, 152, 0, 1),
    24px 34px 0 0 rgba(255, 152, 0, 1), 26px 34px 0 0 rgba(255, 152, 0, 1),
    28px 34px 0 0 rgba(255, 152, 0, 1), 30px 34px 0 0 rgba(255, 255, 255, 1),
    32px 34px 0 0 rgba(255, 193, 7, 1), 34px 34px 0 0 rgba(255, 193, 7, 1),
    36px 34px 0 0 rgba(96, 125, 139, 1), 6px 36px 0 0 rgba(96, 125, 139, 1),
    8px 36px 0 0 rgba(255, 193, 7, 1), 10px 36px 0 0 rgba(255, 193, 7, 1),
    12px 36px 0 0 rgba(255, 193, 7, 1), 14px 36px 0 0 rgba(255, 152, 0, 1),
    16px 36px 0 0 rgba(255, 152, 0, 1), 18px 36px 0 0 rgba(255, 152, 0, 1),
    20px 36px 0 0 rgba(255, 152, 0, 1), 22px 36px 0 0 rgba(255, 152, 0, 1),
    24px 36px 0 0 rgba(255, 152, 0, 1), 26px 36px 0 0 rgba(255, 152, 0, 1),
    28px 36px 0 0 rgba(255, 152, 0, 1), 30px 36px 0 0 rgba(255, 255, 255, 1),
    32px 36px 0 0 rgba(255, 193, 7, 1), 34px 36px 0 0 rgba(255, 193, 7, 1),
    36px 36px 0 0 rgba(96, 125, 139, 1), 8px 38px 0 0 rgba(96, 125, 139, 1),
    10px 38px 0 0 rgba(255, 193, 7, 1), 12px 38px 0 0 rgba(255, 193, 7, 1),
    14px 38px 0 0 rgba(255, 193, 7, 1), 16px 38px 0 0 rgba(255, 152, 0, 1),
    18px 38px 0 0 rgba(255, 152, 0, 1), 20px 38px 0 0 rgba(255, 152, 0, 1),
    22px 38px 0 0 rgba(255, 152, 0, 1), 24px 38px 0 0 rgba(255, 152, 0, 1),
    26px 38px 0 0 rgba(255, 152, 0, 1), 28px 38px 0 0 rgba(255, 152, 0, 1),
    30px 38px 0 0 rgba(255, 193, 7, 1), 32px 38px 0 0 rgba(255, 193, 7, 1),
    34px 38px 0 0 rgba(96, 125, 139, 1), 10px 40px 0 0 rgba(96, 125, 139, 1),
    12px 40px 0 0 rgba(96, 125, 139, 1), 14px 40px 0 0 rgba(96, 125, 139, 1),
    16px 40px 0 0 rgba(96, 125, 139, 1), 18px 40px 0 0 rgba(96, 125, 139, 1),
    20px 40px 0 0 rgba(96, 125, 139, 1), 22px 40px 0 0 rgba(96, 125, 139, 1),
    24px 40px 0 0 rgba(96, 125, 139, 1), 26px 40px 0 0 rgba(96, 125, 139, 1),
    28px 40px 0 0 rgba(96, 125, 139, 1), 30px 40px 0 0 rgba(96, 125, 139, 1),
    32px 40px 0 0 rgba(96, 125, 139, 1);
  height: 2px;
  width: 2px;
  opacity: 0.5;
  display: inline-block;
  position: relative;
  left: 15%;
}
.stethoscope-8bit {
  box-shadow: 14px 2px 0 0 rgba(0, 0, 0, 1), 16px 2px 0 0 rgba(0, 0, 0, 1),
    18px 2px 0 0 rgba(0, 0, 0, 1), 26px 2px 0 0 rgba(0, 0, 0, 1),
    28px 2px 0 0 rgba(0, 0, 0, 1), 30px 2px 0 0 rgba(0, 0, 0, 1),
    10px 4px 0 0 rgba(0, 0, 0, 1), 12px 4px 0 0 rgba(0, 0, 0, 1),
    14px 4px 0 0 rgba(48, 63, 70, 1), 16px 4px 0 0 rgba(48, 63, 70, 1),
    18px 4px 0 0 rgba(48, 63, 70, 1), 20px 4px 0 0 rgba(0, 0, 0, 1),
    24px 4px 0 0 rgba(0, 0, 0, 1), 26px 4px 0 0 rgba(48, 63, 70, 1),
    28px 4px 0 0 rgba(48, 63, 70, 1), 30px 4px 0 0 rgba(48, 63, 70, 1),
    32px 4px 0 0 rgba(0, 0, 0, 1), 34px 4px 0 0 rgba(0, 0, 0, 1),
    8px 6px 0 0 rgba(0, 0, 0, 1), 10px 6px 0 0 rgba(96, 125, 139, 1),
    12px 6px 0 0 rgba(0, 0, 0, 1), 14px 6px 0 0 rgba(56, 53, 53, 1),
    16px 6px 0 0 rgba(56, 53, 53, 1), 18px 6px 0 0 rgba(48, 63, 70, 1),
    20px 6px 0 0 rgba(0, 0, 0, 1), 24px 6px 0 0 rgba(0, 0, 0, 1),
    26px 6px 0 0 rgba(48, 63, 70, 1), 28px 6px 0 0 rgba(56, 53, 53, 1),
    30px 6px 0 0 rgba(56, 53, 53, 1), 32px 6px 0 0 rgba(0, 0, 0, 1),
    34px 6px 0 0 rgba(96, 125, 139, 1), 36px 6px 0 0 rgba(0, 0, 0, 1),
    6px 8px 0 0 rgba(0, 0, 0, 1), 8px 8px 0 0 rgba(96, 125, 139, 1),
    10px 8px 0 0 rgba(96, 125, 139, 1), 12px 8px 0 0 rgba(0, 0, 0, 1),
    14px 8px 0 0 rgba(56, 53, 53, 1), 16px 8px 0 0 rgba(56, 53, 53, 1),
    18px 8px 0 0 rgba(48, 63, 70, 1), 20px 8px 0 0 rgba(0, 0, 0, 1),
    24px 8px 0 0 rgba(0, 0, 0, 1), 26px 8px 0 0 rgba(48, 63, 70, 1),
    28px 8px 0 0 rgba(56, 53, 53, 1), 30px 8px 0 0 rgba(56, 53, 53, 1),
    32px 8px 0 0 rgba(0, 0, 0, 1), 34px 8px 0 0 rgba(96, 125, 139, 1),
    36px 8px 0 0 rgba(96, 125, 139, 1), 38px 8px 0 0 rgba(0, 0, 0, 1),
    4px 10px 0 0 rgba(0, 0, 0, 1), 6px 10px 0 0 rgba(96, 125, 139, 1),
    8px 10px 0 0 rgba(96, 125, 139, 1), 10px 10px 0 0 rgba(0, 0, 0, 1),
    14px 10px 0 0 rgba(0, 0, 0, 1), 16px 10px 0 0 rgba(0, 0, 0, 1),
    18px 10px 0 0 rgba(0, 0, 0, 1), 26px 10px 0 0 rgba(0, 0, 0, 1),
    28px 10px 0 0 rgba(0, 0, 0, 1), 30px 10px 0 0 rgba(0, 0, 0, 1),
    34px 10px 0 0 rgba(0, 0, 0, 1), 36px 10px 0 0 rgba(96, 125, 139, 1),
    38px 10px 0 0 rgba(96, 125, 139, 1), 40px 10px 0 0 rgba(0, 0, 0, 1),
    2px 12px 0 0 rgba(0, 0, 0, 1), 4px 12px 0 0 rgba(96, 125, 139, 1),
    6px 12px 0 0 rgba(96, 125, 139, 1), 8px 12px 0 0 rgba(0, 0, 0, 1),
    36px 12px 0 0 rgba(0, 0, 0, 1), 38px 12px 0 0 rgba(96, 125, 139, 1),
    40px 12px 0 0 rgba(96, 125, 139, 1), 42px 12px 0 0 rgba(0, 0, 0, 1),
    2px 14px 0 0 rgba(0, 0, 0, 1), 4px 14px 0 0 rgba(96, 125, 139, 1),
    6px 14px 0 0 rgba(0, 0, 0, 1), 38px 14px 0 0 rgba(0, 0, 0, 1),
    40px 14px 0 0 rgba(96, 125, 139, 1), 42px 14px 0 0 rgba(0, 0, 0, 1),
    2px 16px 0 0 rgba(0, 0, 0, 1), 4px 16px 0 0 rgba(96, 125, 139, 1),
    6px 16px 0 0 rgba(0, 0, 0, 1), 38px 16px 0 0 rgba(0, 0, 0, 1),
    40px 16px 0 0 rgba(96, 125, 139, 1), 42px 16px 0 0 rgba(0, 0, 0, 1),
    2px 18px 0 0 rgba(0, 0, 0, 1), 4px 18px 0 0 rgba(96, 125, 139, 1),
    6px 18px 0 0 rgba(0, 0, 0, 1), 38px 18px 0 0 rgba(0, 0, 0, 1),
    40px 18px 0 0 rgba(96, 125, 139, 1), 42px 18px 0 0 rgba(0, 0, 0, 1),
    2px 20px 0 0 rgba(0, 0, 0, 1), 4px 20px 0 0 rgba(96, 125, 139, 1),
    6px 20px 0 0 rgba(0, 0, 0, 1), 38px 20px 0 0 rgba(0, 0, 0, 1),
    40px 20px 0 0 rgba(96, 125, 139, 1), 42px 20px 0 0 rgba(0, 0, 0, 1),
    2px 22px 0 0 rgba(0, 0, 0, 1), 4px 22px 0 0 rgba(96, 125, 139, 1),
    6px 22px 0 0 rgba(0, 0, 0, 1), 38px 22px 0 0 rgba(0, 0, 0, 1),
    40px 22px 0 0 rgba(96, 125, 139, 1), 42px 22px 0 0 rgba(0, 0, 0, 1),
    2px 24px 0 0 rgba(0, 0, 0, 1), 4px 24px 0 0 rgba(96, 125, 139, 1),
    6px 24px 0 0 rgba(0, 0, 0, 1), 38px 24px 0 0 rgba(0, 0, 0, 1),
    40px 24px 0 0 rgba(96, 125, 139, 1), 42px 24px 0 0 rgba(0, 0, 0, 1),
    2px 26px 0 0 rgba(0, 0, 0, 1), 4px 26px 0 0 rgba(96, 125, 139, 1),
    6px 26px 0 0 rgba(96, 125, 139, 1), 8px 26px 0 0 rgba(0, 0, 0, 1),
    36px 26px 0 0 rgba(0, 0, 0, 1), 38px 26px 0 0 rgba(96, 125, 139, 1),
    40px 26px 0 0 rgba(96, 125, 139, 1), 42px 26px 0 0 rgba(0, 0, 0, 1),
    4px 28px 0 0 rgba(0, 0, 0, 1), 6px 28px 0 0 rgba(96, 125, 139, 1),
    8px 28px 0 0 rgba(96, 125, 139, 1), 10px 28px 0 0 rgba(0, 0, 0, 1),
    16px 28px 0 0 rgba(0, 0, 0, 1), 18px 28px 0 0 rgba(0, 0, 0, 1),
    26px 28px 0 0 rgba(0, 0, 0, 1), 28px 28px 0 0 rgba(0, 0, 0, 1),
    34px 28px 0 0 rgba(0, 0, 0, 1), 36px 28px 0 0 rgba(96, 125, 139, 1),
    38px 28px 0 0 rgba(96, 125, 139, 1), 40px 28px 0 0 rgba(0, 0, 0, 1),
    6px 30px 0 0 rgba(0, 0, 0, 1), 8px 30px 0 0 rgba(96, 125, 139, 1),
    10px 30px 0 0 rgba(96, 125, 139, 1), 12px 30px 0 0 rgba(0, 0, 0, 1),
    14px 30px 0 0 rgba(0, 0, 0, 1), 16px 30px 0 0 rgba(255, 87, 34, 1),
    18px 30px 0 0 rgba(255, 152, 0, 1), 20px 30px 0 0 rgba(0, 0, 0, 1),
    22px 30px 0 0 rgba(0, 0, 0, 1), 24px 30px 0 0 rgba(0, 0, 0, 1),
    26px 30px 0 0 rgba(255, 152, 0, 1), 28px 30px 0 0 rgba(255, 152, 0, 1),
    30px 30px 0 0 rgba(0, 0, 0, 1), 32px 30px 0 0 rgba(0, 0, 0, 1),
    34px 30px 0 0 rgba(96, 125, 139, 1), 36px 30px 0 0 rgba(96, 125, 139, 1),
    38px 30px 0 0 rgba(0, 0, 0, 1), 8px 32px 0 0 rgba(0, 0, 0, 1),
    10px 32px 0 0 rgba(96, 125, 139, 1), 12px 32px 0 0 rgba(96, 125, 139, 1),
    14px 32px 0 0 rgba(0, 0, 0, 1), 16px 32px 0 0 rgba(255, 87, 34, 1),
    18px 32px 0 0 rgba(255, 152, 0, 1), 20px 32px 0 0 rgba(255, 152, 0, 1),
    22px 32px 0 0 rgba(255, 152, 0, 1), 24px 32px 0 0 rgba(255, 152, 0, 1),
    26px 32px 0 0 rgba(255, 152, 0, 1), 28px 32px 0 0 rgba(255, 152, 0, 1),
    30px 32px 0 0 rgba(0, 0, 0, 1), 32px 32px 0 0 rgba(96, 125, 139, 1),
    34px 32px 0 0 rgba(96, 125, 139, 1), 36px 32px 0 0 rgba(0, 0, 0, 1),
    10px 34px 0 0 rgba(0, 0, 0, 1), 12px 34px 0 0 rgba(0, 0, 0, 1),
    14px 34px 0 0 rgba(0, 0, 0, 1), 16px 34px 0 0 rgba(255, 87, 34, 1),
    18px 34px 0 0 rgba(255, 87, 34, 1), 20px 34px 0 0 rgba(255, 152, 0, 1),
    22px 34px 0 0 rgba(255, 152, 0, 1), 24px 34px 0 0 rgba(255, 152, 0, 1),
    26px 34px 0 0 rgba(255, 152, 0, 1), 28px 34px 0 0 rgba(255, 152, 0, 1),
    30px 34px 0 0 rgba(0, 0, 0, 1), 32px 34px 0 0 rgba(0, 0, 0, 1),
    34px 34px 0 0 rgba(0, 0, 0, 1), 14px 36px 0 0 rgba(0, 0, 0, 1),
    16px 36px 0 0 rgba(0, 0, 0, 1), 18px 36px 0 0 rgba(255, 87, 34, 1),
    20px 36px 0 0 rgba(255, 87, 34, 1), 22px 36px 0 0 rgba(255, 87, 34, 1),
    24px 36px 0 0 rgba(255, 87, 34, 1), 26px 36px 0 0 rgba(255, 87, 34, 1),
    28px 36px 0 0 rgba(0, 0, 0, 1), 30px 36px 0 0 rgba(0, 0, 0, 1),
    18px 38px 0 0 rgba(0, 0, 0, 1), 20px 38px 0 0 rgba(0, 0, 0, 1),
    22px 38px 0 0 rgba(255, 87, 34, 1), 24px 38px 0 0 rgba(0, 0, 0, 1),
    26px 38px 0 0 rgba(0, 0, 0, 1), 20px 40px 0 0 rgba(0, 0, 0, 1),
    22px 40px 0 0 rgba(255, 87, 34, 1), 24px 40px 0 0 rgba(0, 0, 0, 1),
    20px 42px 0 0 rgba(0, 0, 0, 1), 22px 42px 0 0 rgba(255, 87, 34, 1),
    24px 42px 0 0 rgba(0, 0, 0, 1), 20px 44px 0 0 rgba(0, 0, 0, 1),
    22px 44px 0 0 rgba(0, 0, 0, 1), 24px 44px 0 0 rgba(0, 0, 0, 1),
    30px 44px 0 0 rgba(0, 0, 0, 1), 32px 44px 0 0 rgba(0, 0, 0, 1),
    34px 44px 0 0 rgba(0, 0, 0, 1), 36px 44px 0 0 rgba(0, 0, 0, 1),
    20px 46px 0 0 rgba(0, 0, 0, 1), 22px 46px 0 0 rgba(48, 63, 70, 1),
    24px 46px 0 0 rgba(0, 0, 0, 1), 28px 46px 0 0 rgba(0, 0, 0, 1),
    30px 46px 0 0 rgba(48, 63, 70, 1), 32px 46px 0 0 rgba(96, 125, 139, 1),
    34px 46px 0 0 rgba(96, 125, 139, 1), 36px 46px 0 0 rgba(48, 63, 70, 1),
    38px 46px 0 0 rgba(0, 0, 0, 1), 18px 48px 0 0 rgba(0, 0, 0, 1),
    20px 48px 0 0 rgba(48, 63, 70, 1), 22px 48px 0 0 rgba(0, 0, 0, 1),
    26px 48px 0 0 rgba(0, 0, 0, 1), 28px 48px 0 0 rgba(48, 63, 70, 1),
    30px 48px 0 0 rgba(96, 125, 139, 1), 32px 48px 0 0 rgba(158, 158, 158, 1),
    34px 48px 0 0 rgba(158, 158, 158, 1), 36px 48px 0 0 rgba(96, 125, 139, 1),
    38px 48px 0 0 rgba(48, 63, 70, 1), 40px 48px 0 0 rgba(0, 0, 0, 1),
    16px 50px 0 0 rgba(0, 0, 0, 1), 18px 50px 0 0 rgba(48, 63, 70, 1),
    20px 50px 0 0 rgba(0, 0, 0, 1), 26px 50px 0 0 rgba(0, 0, 0, 1),
    28px 50px 0 0 rgba(48, 63, 70, 1), 30px 50px 0 0 rgba(158, 158, 158, 1),
    32px 50px 0 0 rgba(158, 158, 158, 1), 34px 50px 0 0 rgba(158, 158, 158, 1),
    36px 50px 0 0 rgba(158, 158, 158, 1), 38px 50px 0 0 rgba(48, 63, 70, 1),
    40px 50px 0 0 rgba(0, 0, 0, 1), 14px 52px 0 0 rgba(0, 0, 0, 1),
    16px 52px 0 0 rgba(48, 63, 70, 1), 18px 52px 0 0 rgba(0, 0, 0, 1),
    26px 52px 0 0 rgba(0, 0, 0, 1), 28px 52px 0 0 rgba(48, 63, 70, 1),
    30px 52px 0 0 rgba(96, 125, 139, 1), 32px 52px 0 0 rgba(158, 158, 158, 1),
    34px 52px 0 0 rgba(158, 158, 158, 1), 36px 52px 0 0 rgba(96, 125, 139, 1),
    38px 52px 0 0 rgba(48, 63, 70, 1), 40px 52px 0 0 rgba(0, 0, 0, 1),
    14px 54px 0 0 rgba(0, 0, 0, 1), 16px 54px 0 0 rgba(96, 125, 139, 1),
    18px 54px 0 0 rgba(48, 63, 70, 1), 20px 54px 0 0 rgba(0, 0, 0, 1),
    28px 54px 0 0 rgba(0, 0, 0, 1), 30px 54px 0 0 rgba(48, 63, 70, 1),
    32px 54px 0 0 rgba(96, 125, 139, 1), 34px 54px 0 0 rgba(96, 125, 139, 1),
    36px 54px 0 0 rgba(48, 63, 70, 1), 38px 54px 0 0 rgba(0, 0, 0, 1),
    16px 56px 0 0 rgba(0, 0, 0, 1), 18px 56px 0 0 rgba(96, 125, 139, 1),
    20px 56px 0 0 rgba(48, 63, 70, 1), 22px 56px 0 0 rgba(0, 0, 0, 1),
    30px 56px 0 0 rgba(0, 0, 0, 1), 32px 56px 0 0 rgba(0, 0, 0, 1),
    34px 56px 0 0 rgba(0, 0, 0, 1), 36px 56px 0 0 rgba(0, 0, 0, 1),
    18px 58px 0 0 rgba(0, 0, 0, 1), 20px 58px 0 0 rgba(96, 125, 139, 1),
    22px 58px 0 0 rgba(48, 63, 70, 1), 24px 58px 0 0 rgba(0, 0, 0, 1),
    28px 58px 0 0 rgba(0, 0, 0, 1), 30px 58px 0 0 rgba(96, 125, 139, 1),
    32px 58px 0 0 rgba(0, 0, 0, 1), 20px 60px 0 0 rgba(0, 0, 0, 1),
    22px 60px 0 0 rgba(96, 125, 139, 1), 24px 60px 0 0 rgba(0, 0, 0, 1),
    26px 60px 0 0 rgba(0, 0, 0, 1), 28px 60px 0 0 rgba(96, 125, 139, 1),
    30px 60px 0 0 rgba(0, 0, 0, 1), 22px 62px 0 0 rgba(0, 0, 0, 1),
    24px 62px 0 0 rgba(96, 125, 139, 1), 26px 62px 0 0 rgba(48, 63, 70, 1),
    28px 62px 0 0 rgba(0, 0, 0, 1), 24px 64px 0 0 rgba(0, 0, 0, 1),
    26px 64px 0 0 rgba(0, 0, 0, 1);
  height: 2px;
  width: 2px;
  opacity: 1;
  display: inline-block;
  position: relative;
  // left: -15%;
  left: -7%;
}
</style>
