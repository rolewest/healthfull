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
      v-show="ytUrl"
    ></q-video>
    <!--  -->
    <div class="q-pa-md questItem holdSteps">
      <!-- Initialization step / Welcome! STEP 0 -->
      <div v-if="this.currentStep == 0">
        <div class="step">
          <div class="title-h4 row">Start Conditioning?</div>
          <div class="text-center">
            <div v-html="randomWelcome"></div>
            <div class="text-center">
              <q-btn
                @click="startConditioning()"
                color="positive"
                text-color="accent"
                >start!</q-btn
              >
            </div>

            <div class="bg-check quote-holder border-double-3 border-positive">
              <p
                class="on-the-floor bg-accent"
                v-html="randomAtYourFeetMsg"
              ></p>
              <div class="bg-dark border-torn-holder">
                <div class="border-torn">
                  <span v-html="randomQuote"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <q-stepper v-model="step" vertical color="primary" animated> -->
      <!-- exercise steps -->
      <div v-for="xstep in stepsList.slice().reverse()" :key="xstep.step">
        <div
          :class="{
            'border-double-1 step': true,
            hidden: xstep.step != this.currentStep,
          }"
          :id="`rstep_${xstep.step}`"
        >
          <div>
            <div class="row justify-center">
              <q-chip class="video-icon"
                ><q-avatar
                  :icon="xstep.icon.name || 'fas fa-shield-heart'"
                  :color="xstep.icon.color || 'info'"
                  :text-color="xstep.icon.font || 'white'"
                  size="40px"
                >
                  <q-badge
                    floating
                    :color="xstep.badge.color"
                    :text-color="xstep.badge.font"
                    v-if="xstep.badge && xstep?.badge?.caption"
                    >{{ xstep.badge.caption }}</q-badge
                  >
                </q-avatar>
                <div v-if="xstep.points.xp">
                  {{ `${xstep.points.xp} XP` }}
                </div>
                <div v-else>
                  {{
                    xstep.points.cp
                      ? `${xstep.points.cp} CP`
                      : `${xstep.points.hp} HP`
                  }}
                </div></q-chip
              >
            </div>

            <div class="title-h4">
              {{ xstep.title }}
            </div>
            <div class="text-center">{{ xstep.caption }}</div>
          </div>
          <p v-html="xstep.body"></p>
          <!-- navigation -->
          <div class="text-center">
            {{ currentStep }} of {{ stepsList.length }}
          </div>
          <div class="row step-buttons justify-center">
            <div>
              <q-btn
                @click="
                  this.switchToVideoId(
                    this.stepsList[this.currentStep - 2].video.id,
                    this.stepsList[this.currentStep - 2].video.mute,
                    this.stepsList[this.currentStep - 2].video.start,
                    this.stepsList[this.currentStep - 2].video.end
                  );
                  this.currentStep--;
                "
                v-if="this.currentStep > 1"
                color="secondary"
              >
                back
              </q-btn>
            </div>
            <div>&nbsp;</div>
            <div>
              <q-btn
                @click="
                  this.switchToVideoId(
                    this.stepsList[xstep.step].video.id,
                    this.stepsList[xstep.step].video.mute,
                    this.stepsList[xstep.step].video.start,
                    this.stepsList[xstep.step].video.end
                  );
                  this.currentStep++;
                "
                v-if="this.currentStep < this.stepsList.length"
                :color="this.currentStep == 1 ? 'primary' : 'positive'"
              >
                <span v-if="this.currentStep == 1">Next One!</span>
                <span
                  v-if="
                    this.currentStep > 1 &&
                    this.currentStep < this.stepsList.length
                  "
                  class=""
                  >Let's Keep Going!</span
                >
              </q-btn>
              <q-btn
                color="info"
                class="info"
                v-if="this.currentStep == this.stepsList.length"
              >
                finished!
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
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      currentStep: ref(0),
      stepsList: [
        {
          step: 1,

          video: { id: "uKYZIC-67gY", start: 44, end: 107, mute: 0 },
          title: "Seated Chair Run",
          caption: "Low Impact",
          icon: { name: "fas fa-shield-heart", color: "accent", font: "" },
          badge: { caption: null, color: "red", font: "blue" },
          points: { hp: 20, cp: 2, xp: 20 },
          tags: ["Cardio", "Low Impact"],
          body: `<h5 class="text-center">How to do it:</h5><ol>
            <li>Sit on the front half of the chair</li>
            <li>Keep your back as straight as you can</li>
            <li></li>
            <li></li>
            <li></li>

            </ol>`,
        },
        {
          step: 2,
          video: { id: "Z1IvxI8YcUM", start: 100, end: 10000 },
          title: "2Seated Chair Run",
          caption: "2Low Impact",
          icon: { name: "mdi-heart-pulse", color: "red", font: "white" },
          points: { hp: 11, cp: 43 },
        },
        {
          step: 3,
          video: { id: "azv8eJgoGLk", start: 100, end: 100000 },
          title: "2Seated Chair Run",
          caption: "2Low Impact",
          icon: "home",
          points: { hp: 10 },
        },
      ],
      playList: [],
      videoIdIndex: 0,
      ytUrl: "",
    };
  },
  methods: {
    switchToVideoId(id, mute = 0, startAt = 0, endAt = 0, autoplay = 0) {
      console.log("localStore:", localStorage.getItem("userAge"));
      mute = mute === true ? "mute=1" : "mute=0";
      this.ytUrl = `http://www.youtube.com/embed/${id}?autoplay=${autoplay}&loop=0&playlist=${id}&start=${startAt}&end=${endAt}&rel=0${mute}`;
      console.log(this.ytUrl);
    },

    getNextVideoId() {
      console.log("NEWXT!:");
    },
    startConditioning() {
      this.currentStep = 1;
      // load the first video in the series
      this.switchToVideoId(
        this.stepsList[0].video.id,
        this.stepsList[0].video.mute,
        this.stepsList[0].video.start,
        this.stepsList[0].video.end
      );
    },
  },
  computed: {
    randomAtYourFeetMsg() {
      const atfeet = [
        "You notice an esoteric piece of a scientific script on the floor...",
        "At your feet looks like a torn page from some forgotten science journal...",
        "In front of you is a ripped fragment of some neglected treatise...",
        "You notice a small paper with some bygone wisdom imprinted upon it...",
        "Wedged between two floor panels you notice a tiny shred from some antiquated and cryptic tome...",
        "A gust of wind blows an enigmatic scrap of some perplexing scroll that you snatch from the air...",
      ];

      let itemNum = Math.floor(Math.random() * atfeet.length);
      return atfeet[itemNum];
    },
    randomWelcome() {
      const welcomes = [
        "Everything is all setup, just click start to begin your training.",
        "Click start to begin your training.",
      ];

      let itemNum = Math.floor(Math.random() * welcomes.length);
      return welcomes[itemNum];
    },
    randomQuote() {
      const quotes = [
        "<blockquote>...regular physical activity and a high fitness level are associated with a reduced risk of premature death from any cause and from cardiovascular disease in particular among asymptomatic men and women. Year:2006 AD <cite>PMID: 16534088; PMCID: PMC1402378.</cite></blockquote>",
        "<blockquote>In communicating the benefits of chair-based activities [ye] public health messaging should reinforce the evidence that every minute counts: any activity is better than none, and everyone (all ages and abilities) should aim to move more and move more often. Year:2021 AD<cite>PMID: 33669357; PMCID: PMC7920319.</cite></blockquote>",
        "<blockquote>Health benefits from regular exercise that should be emphasized and reinforced by every mental health professional to their patients include the following: <br/><ol><li><div>Improved sleep</div></li><li><div>Increased interest in sex</div></li><li><div>Better endurance</div></li><li><div>Stress relief</div></li><li><div>Improvement in mood</div></li><li><div>Increased energy and stamina</div></li><li><div>Reduced tiredness that can increase mental alertness</div></li><li><div>Weight reduction</div></li><li><div>Reduced cholesterol and improved cardiovascular fitness</div></li></ol> Year:2006 AD<cite>PMID: 16862239; PMCID: PMC1470658</cite></blockquote>",
        `<blockquote>Contrary to our hypothesis, combined aerobic and resistance training improved cardiovascular fitness to the same extent as aerobic training alone and strength to the same extent as resistance training alone. Therefore, combined aerobic and resistance training resulted in additive effects that translated into the greatest improvement among the interventions in physical function and reduction of frailty. Year:2017 AD <cite> PMID: 28514618; PMCID: PMC5552187.</cite></blockquote>`,
      ];
      // `<blockquote><cite></cite></blockquote>`,
      let itemNum = Math.floor(Math.random() * quotes.length);
      return quotes[itemNum];
    },
  },
  mounted() {
    // load the first video in the series
    // this.switchToVideoId(
    //   this.stepsList[0].video.id,
    //   this.stepsList[0].video.mute,
    //   this.stepsList[0].video.start,
    //   this.stepsList[0].video.end
    // );
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
.holdSteps {
  position: relative;
}
.video-icon {
  position: absolute;
  left: 3px;
  opacity: 0.95;
  top: -15px;
}
.quote-holder {
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
}
blockquote {
  // font-family: Georgia, serif;
  font-size: 1em;
  font-style: italic;
  // width: 500px;
  // margin: 0.25em 0;
  // padding: 0.35em;
  // line-height: 1.45;
  position: relative;
  color: #383838;
}

blockquote:before {
  display: block;
  padding-left: 10px;
  content: "\201C";
  font-size: 4em;
  position: absolute;
  left: -1.5em;
  top: -0.5em;
  color: #7a7a7a;
}

blockquote cite {
  color: #999999;
  font-size: 8px;
  display: block;
  margin-top: 5px;
}

blockquote cite:before {
  content: "\2014 \2009";
}
.border-torn {
  height: auto;
  overflow: auto;
  padding: 20px;
  background-image: linear-gradient(#efefff 2px, transparent 2px),
    linear-gradient(90deg, #efefff 2px, transparent 2px),
    linear-gradient(#efefff 1px, transparent 1px),
    linear-gradient(90deg, #efefff 1px, #ffffff 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  -webkit-box-shadow: 0px 0px 0px 1px #000000;
  box-shadow: 0px 0px 0px 7px #000000;
  filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5));

  clip-path: polygon(
    1% 2%,
    3.5% 0.1%,
    8.9% 2.7%,
    16.2% 1.2%,
    19.7% 0.8%,
    24.7% 2%,
    31.2% 0%,
    35.9% 2.3%,
    40.6% 0.5%,
    47.1% 1.8%,
    49.9% 1%,
    53.8% 2.5%,
    62.2% 0.4%,
    67.3% 1.2%,
    70.3% 0.3%,
    75.8% 1.4%,
    78.5% 1.7%,
    84% 2.6%,
    91.1% 0.5%,
    93.6% 2.4%,
    97.3% 0.3%,
    98.9% 6%,
    98.1% 11.4%,
    98.6% 15.5%,
    97.3% 17.8%,
    97.7% 27.4%,
    98.3% 28.5%,
    99.7% 34.1%,
    98.8% 41.9%,
    98.3% 45.7%,
    98.4% 50.9%,
    98.7% 57.4%,
    99.6% 60.4%,
    99.4% 66.6%,
    99.2% 69.5%,
    97.4% 77.1%,
    98.1% 82.3%,
    99.9% 83.5%,
    98.2% 91.5%,
    99.3% 95.3%,
    98% 98.6%,
    93.6% 97.4%,
    90.3% 98.3%,
    86.8% 98.3%,
    78.6% 98.5%,
    76.4% 99.2%,
    69.7% 99.8%,
    64.2% 99.3%,
    61.8% 99.2%,
    57.2% 98.1%,
    48.7% 98.3%,
    46.8% 99%,
    39.6% 98.9%,
    33.8% 97.3%,
    28.2% 99.4%,
    27% 98.3%,
    22.1% 98.6%,
    13.1% 97.1%,
    8.7% 99.3%,
    2.7% 97.4%,
    2% 98.2%,
    2.1% 94.3%,
    0.7% 90.5%,
    0.9% 86.3%,
    2.2% 78.2%,
    0.4% 76.7%,
    1.2% 72.1%,
    2% 64%,
    1.4% 59.8%,
    0.4% 57.3%,
    0.3% 49.1%,
    2.9% 44.7%,
    1.9% 41.3%,
    0.8% 35.7%,
    2.9% 31.3%,
    0.8% 24.9%,
    2.7% 20.5%,
    0.8% 17.4%,
    2.5% 8.6%,
    1.1% 5.5%
  );
  transform: scale(0.99);
}
.border-torn-holder {
  clip-path: polygon(
    1% 2%,
    3.5% 0.1%,
    8.9% 2.7%,
    16.2% 1.2%,
    19.7% 0.8%,
    24.7% 2%,
    31.2% 0%,
    35.9% 2.3%,
    40.6% 0.5%,
    47.1% 1.8%,
    49.9% 1%,
    53.8% 2.5%,
    62.2% 0.4%,
    67.3% 1.2%,
    70.3% 0.3%,
    75.8% 1.4%,
    78.5% 1.7%,
    84% 2.6%,
    91.1% 0.5%,
    93.6% 2.4%,
    97.3% 0.3%,
    98.9% 6%,
    98.1% 11.4%,
    98.6% 15.5%,
    97.3% 17.8%,
    97.7% 27.4%,
    98.3% 28.5%,
    99.7% 34.1%,
    98.8% 41.9%,
    98.3% 45.7%,
    98.4% 50.9%,
    98.7% 57.4%,
    99.6% 60.4%,
    99.4% 66.6%,
    99.2% 69.5%,
    97.4% 77.1%,
    98.1% 82.3%,
    99.9% 83.5%,
    98.2% 91.5%,
    99.3% 95.3%,
    98% 98.6%,
    93.6% 97.4%,
    90.3% 98.3%,
    86.8% 98.3%,
    78.6% 98.5%,
    76.4% 99.2%,
    69.7% 99.8%,
    64.2% 99.3%,
    61.8% 99.2%,
    57.2% 98.1%,
    48.7% 98.3%,
    46.8% 99%,
    39.6% 98.9%,
    33.8% 97.3%,
    28.2% 99.4%,
    27% 98.3%,
    22.1% 98.6%,
    13.1% 97.1%,
    8.7% 99.3%,
    2.7% 97.4%,
    2% 98.2%,
    2.1% 94.3%,
    0.7% 90.5%,
    0.9% 86.3%,
    2.2% 78.2%,
    0.4% 76.7%,
    1.2% 72.1%,
    2% 64%,
    1.4% 59.8%,
    0.4% 57.3%,
    0.3% 49.1%,
    2.9% 44.7%,
    1.9% 41.3%,
    0.8% 35.7%,
    2.9% 31.3%,
    0.8% 24.9%,
    2.7% 20.5%,
    0.8% 17.4%,
    2.5% 8.6%,
    1.1% 5.5%
  );
}
.bg-check {
  opacity: 0.8;
  background-image: linear-gradient(135deg, $primary 25%, transparent 25%),
    linear-gradient(225deg, $primary 25%, transparent 25%),
    linear-gradient(45deg, $primary 25%, transparent 25%),
    linear-gradient(315deg, $primary 25%, #e5e5f7 25%);
  background-position: 34px 0, 34px 0, 0 0, 0 0;
  background-size: 34px 34px;
  background-repeat: repeat;
}
.on-the-floor {
  padding: 0.5em;
  color: $text;
  animation: glower 5s ease infinite;
  background: $primary;
  background-size: 500% 100%;
  transition: all 0.5s;
  border-radius: 10px;
  opacity: 0.8;
  text-shadow: 2px 2px 2px #3366ff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0d4aff,
    0 0 30px #2f18ff, 0 0 40px #18dcff, 0 0 55px #18ffe0, 0 0 75px #18f0ff,
    2px 2px 2px rgba(36, 107, 206, 0), 2px 2px 2px #000000, -1px -1px #444;
}
.cycle-color {
  animation: animateBgReward 3s linear infinite;
}
</style>
