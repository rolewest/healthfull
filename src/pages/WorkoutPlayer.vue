<template>
  <!-- <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=44&end=107&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=308&end=374&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=633&end=709&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=893&end=957&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=956&end=1020&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/Z1IvxI8YcUM?autoplay=1&loop=0&playlist=Z1IvxI8YcUM&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/PdnZTxKIe9g?autoplay=1&loop=0&playlist=PdnZTxKIe9g&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe> -->
  <div class="">
    <q-video
      :ratio="16 / 9"
      :src="ytUrl"
      frameborder="0"
      allowfullscreen
    ></q-video>
    <!--  -->
    <div class="q-pa-md questItem">
      <!-- <q-stepper v-model="step" vertical color="primary" animated> -->
      <div v-for="xstep in stepsList.slice().reverse()" :key="xstep.step">
        <div
          :class="{
            'border-double-1 step': true,
            hidden: xstep.step != this.currentStep,
          }"
          :id="`rstep_${xstep.step}`"
        >
          <div>
            <div class="title-h4">
              {{ xstep.title }}
            </div>
            <div class="text-center">{{ xstep.caption }}</div>
          </div>

          <!-- navigation -->
          <div class="text-center">
            {{ currentStep }}of{{ stepsList.length }}
          </div>
          <div class="row step-buttons justify-center">
            <div>
              <q-btn @click="this.currentStep--" v-if="this.currentStep > 1">
                back
              </q-btn>
            </div>
            <div>&nbsp;</div>
            <div>
              <q-btn
                @click="this.currentStep++"
                v-if="this.currentStep < this.stepsList.length"
              >
                <span v-if="this.currentStep == 1">start</span>
                <span
                  v-if="
                    this.currentStep > 1 &&
                    this.currentStep < this.stepsList.length
                  "
                  >continue</span
                >
              </q-btn>
              <q-btn
                color="secondary"
                class="info"
                v-if="this.currentStep == this.stepsList.length"
              >
                finish!
              </q-btn>
            </div>
          </div>
        </div>

        <!-- <q-step
            :name="xstep.step"
            :title="xstep.title"
            :icon="xstep.icon"
            :active-icon="xstep.icon"
            :done="step > xstep.step"
          >
            {{ xstep.caption }}!

            <q-stepper-navigation>
              <q-btn
                @click="step = xstep.step + 1"
                color="primary"
                label="Continue"
              />
            </q-stepper-navigation>
          </q-step> -->

        <!-- end loop -->
      </div>
      <!-- </q-stepper> -->
    </div>
    <!--  -->
  </div>

  <q-btn @click="switchToVideoId('PdnZTxKIe9g', 0, 205, 236)">dffdfd</q-btn>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      currentStep: ref(1),
      stepsList: [
        {
          step: 1,
          vid: "azv8eJgoGLk",
          title: "Seated Chair Run",
          caption: "Low Impact",
          icon: "mdi-heart-pulse",
          icona: "heart",
        },
        {
          step: 2,
          vid: "azv8eJgoGLk",
          title: "2Seated Chair Run",
          caption: "2Low Impact",
          icon: "home",
          icona: "home",
        },
        {
          step: 3,
          vid: "azv8eJgoGLk",
          title: "2Seated Chair Run",
          caption: "2Low Impact",
          icon: "home",
          icona: "home",
        },
      ],
      playList: [],
      videoIdIndex: 0,
      ytUrl:
        "http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=956&end=1020&rel=0",
    };
  },
  methods: {
    switchToVideoId(id, mute = 0, startAt = 0, endAt = 0) {
      console.log("localStore:", localStorage.getItem("userAge"));
      mute = mute === true ? "mute=1" : "mute=0";
      this.ytUrl = `http://www.youtube.com/embed/${id}?autoplay=1&loop=0&playlist=${id}&start=${startAt}&end=${endAt}&rel=0${mute}`;
    },
    getNextVideoId() {
      console.log("NEWXT!:");
    },
  },
};
</script>

<style lang="scss">
.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.q-stepper__tab,
.r-stepper {
  /* background: #dd66d0; */
  display: none;
}
.q-stepper__tab--active,
.r-stepper-active {
  /* background: #45dd00; */
  display: block;
}
.q-stepper__tab--done,
.r-stepper-done {
  /* background: #45d0dd; */
  display: block;
}
.q-stepper__tab--done i,
.r-stepper-done i {
  /* background: #45d0dd; */
  color: $positive;
  display: block;
}
.q-stepper__title,
.r-stepper-title {
  /* position: relative;
  display: block;

  text-align: center; */
  margin-left: 2em;
}
.q-stepper__caption,
.r-stepper-caption {
  margin-left: 2.5em;
}
.step-buttons {
  margin: 1em;
}
</style>
