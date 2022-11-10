<template>
  <!-- <div id="scroll-container" class="border-block q-mt-sm">
    <div id="scroll-text">
      In the year 2038, on January 19, at 3:14:07 UTC, the newly created<br />
      <em>Digital Records of Disease Origins & Corrective Therapies </em> (DR.
      DOC-tor) database was hit with a massive solar flair at the same time that
      many computer systems malfunctioned due to the 2038 Bug.<br />
    </div>
  </div> --><br />
  <div class="pre-scroll-wrapper">
    <div class="float-btn">
      <q-btn color="accent" @click="this.$router.push({ name: 'home' })"
        >Continue</q-btn
      >
    </div>

    <div class="scroll-wrapper">
      <div class="scroll-text">
        <div class="pre-blank"></div>
        <!-- <h1>Health Full</h1> -->
        <h2>On January 19, 2038 at 3:14 UTC</h2>
        <h5>
          The newly created A.I. mainframe for Non communicable disease
          prevention was first turned on seconds after 3:14 and hit with
          radiation from a massive solar flair. At the same time many computer
          systems malfunctioned due to the 2038 Bug.
        </h5>
        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <h5>
          The last date in the system is for November 2nd 1988 which is the day
          that the Morris worm entered DARPA and other connected networks all
          over the world.
        </h5>
        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <h5>
          The A.I., code named DR.DOCTor, or the
          <em>Digital Records of Disease Origins & Corrective Therapies</em>
          inexplicably arrived on public digital devices in the year 2023.
          Traces of the Morris worm were also found and removed from the Dr.
          Doctor system.
        </h5>

        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <h5>
          Dr.Doctor lost access to all data from 2038 but was able to find all
          of the latest scientific and medical research up to and including the
          year 2023.
        </h5>
        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <!-- <h5>
          The A.I. was made for everyday use by regular people to allow them to manage their own healthcare
           and free them from the confusion
        </h5>
        <p><br /><br /><br /><br /></p> -->
        <h5>Click continue to become enroll as a patient...</h5>
        <p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </p>
        <!-- <h5>
          The A.I. was made for everyday use by regular people to allow them to manage their own healthcare
           and free them from the confusion
        </h5>
        <p><br /><br /><br /><br /></p> -->
        <h5>Is this dumb? Probably...</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    bmpToVibrate(bpm, type = 0) {
      let vibPerSecond = 60 / bpm;
      let vibOn = vibPerSecond * 200;
      let vibOff = vibPerSecond * 800;
      let vibData = [];

      if (type === 1) {
        vibData = bpm;
        window.navigator.vibrate(vibData);
      }

      for (let i = 0; i < 22; i += 2) {
        vibData[i] = vibOn;
        vibData[i + 1] = vibOff;
      }

      // console.log("Vibration Data:", vibData);
      window.navigator.vibrate(vibData);
    },
  },
};
</script>

<style lang="scss">
body {
  overflow-y: hidden !important;
}
.q-page-container {
  margin: auto;
  /* max-width: 1000px; */
  /* background: hotpink; */
  // max-width: 95%;
}
.float-btn {
  z-index: 1000;
  margin: auto 0;
  position: relative;
  // font-size: 100px;
  text-align: center;
  display: block;
}
.pre-blank {
  display: block;
  height: 60%;
}
.pre-scroll-wrapper {
  margin: 0 0 50% 0;
  height: 50%;
  width: 100%;
  position: relative;
  background: #222222ff;
  overflow-y: hidden;
  top: 0px;
  position: relative;
}
em {
  font-size: 1em;
}
.pre-scroll-wrapper::after {
  content: "";
  position: fixed;
  margin: 0 0 50% 0;
  top: 0;
  width: 95%;
  height: 30%;
  background: linear-gradient(180deg, #222222ff 55%, #22222200 100%);
}
// .pre-wrapper::after {
//   position: fixed;
//   margin: 100% 0 0 0;
//   bottom: -10;
//   width: 100%;
//   height: 25%;
//   background: linear-gradient(180deg, #ff222200 10%, #ff222211 100%);
// }
.scroll-wrapper {
  // margin: 0 auto;
  // display: flex;
  margin-top: 75vh; //pre=roll

  height: 10%;
  width: 100%;
  // perspective: 950px;
}
// .wrapper p {
//   font-size:3em;
// }
.scroll-text {
  color: $warning;
  font-size: 3vw;
  line-height: 1.5em;
  font-weight: bold;
  text-align: justify;
  position: relative;
  animation: scroll-text 70s linear forwards infinite; // forwards
  // transform: translateZ(-2500px) rotateX(20deg);
  margin: 2em;
}
.scroll-wrapper h1,
h2 {
  text-align: center;
}
@keyframes scroll-text {
  from {
    top: 0;
    transform: translateZ(0) rotateX(10deg);
  }
  to {
    top: -4500px;
    transform: translateZ(0px) rotateX(10deg);
  }
}

.border-block {
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
.border-block-info {
  box-shadow: 0px -4px 0px 0px $info, 0px 5px 0px 0px $info,
    -4px 0px 0px 1px$info, 4px 0px 0px 1px $info;
}
.border-block-accent {
  box-shadow: 0px -4px 0px 0px $accent, 0px 5px 0px 0px $accent,
    -4px 0px 0px 1px$accent, 4px 0px 0px 1px $accent;
}
.border-block-positive {
  box-shadow: 0px -4px 0px 0px $positive, 0px 5px 0px 0px $positive,
    -4px 0px 0px 1px$positive, 4px 0px 0px 1px $positive;
}
.border-block-negative {
  box-shadow: 0px -4px 0px 0px $negative, 0px 5px 0px 0px $negative,
    -4px 0px 0px 1px$negative, 4px 0px 0px 1px $negative;
}
.border-block-warning {
  box-shadow: 0px -4px 0px 0px $warning, 0px 5px 0px 0px $warning,
    -4px 0px 0px 1px$warning, 4px 0px 0px 1px $warning;
}
.border-block-primary {
  box-shadow: 0px -4px 0px 0px $primary, 0px 5px 0px 0px $primary,
    -4px 0px 0px 1px$primary, 4px 0px 0px 1px $primary;
}
</style>
