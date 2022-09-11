<template>
  <!-- <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=44&end=107&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=308&end=374&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=633&end=709&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=893&end=957&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=956&end=1020&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/Z1IvxI8YcUM?autoplay=1&loop=0&playlist=Z1IvxI8YcUM&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/PdnZTxKIe9g?autoplay=1&loop=0&playlist=PdnZTxKIe9g&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe> -->
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">
          <q-icon name="mdi-order-alphabetical-descending" size="2em"></q-icon>
          First Thing's First
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Oops! You need to build a set list first...
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Let's Do it!"
          @click="this.$router.push({ name: 'builder' })"
          color="primary"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div class="fireworks-display hidden" ref="fireworks" id="fireworks">
    <div class="before"></div>
    <div class="after"></div>
  </div>
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
      <!-- TRAINING COMPLETE! STEP -1 -->
      <div v-if="this.currentStep == -1" class="q-ma-lg">
        <div class="title-h4">You Did It!!!</div>
        <div class="row justify-center q-ma-md">
          <q-chip ref="chip4hp" class="q-ma-md whiteToYellow"
            ><q-avatar
              icon="fas fa-shield-heart"
              color="info"
              text-color="white"
              size="40px"
            >
            </q-avatar
            >+{{ pointsEarned("hp") }} HP
          </q-chip>
          <q-chip ref="chip4cp" class="q-ma-md whiteToYellow"
            ><q-avatar
              icon="fas fa-heart-pulse"
              color="negative"
              text-color="white"
              size="40px"
            >
            </q-avatar
            >+{{ pointsEarned("cp") }} CP
          </q-chip>
          <q-chip ref="chip4xp" class="q-ma-md whiteToYellow"
            ><q-avatar
              icon="mdi-star-shooting"
              color="warning"
              text-color="white"
              size="40px"
            >
            </q-avatar
            >+{{ pointsEarned("xp") }} XP
          </q-chip>
          <q-chip ref="chip4sp" class="q-ma-md whiteToYellow"
            ><q-avatar
              icon="mdi-dumbbell"
              color="accent"
              text-color="white"
              size="40px"
            >
            </q-avatar
            >+{{ pointsEarned("sp") }} SP
          </q-chip>
        </div>
        <div class="row justify-center">
          <ul>
            <li>
              You earned
              <span color="info" class="" text-color="white" size="3em"
                ><span class="text-sm text-white border-radius-sm bg-info">{{
                  pointsEarned("hp")
                }}</span>
              </span>
              HP (Health Points)
            </li>
            <li>
              You earned
              <span class="" color="negative" text-color="white" size="2em"
                ><span
                  class="text-sm text-white border-radius-sm bg-negative"
                  >{{ pointsEarned("cp") }}</span
                >
              </span>
              CP (Cardio Points)
            </li>
            <li>
              You earned
              <span color="warning" class="" text-color="white" size="2em"
                ><span class="text-sm text-white border-radius-sm bg-warning">{{
                  pointsEarned("xp")
                }}</span>
              </span>
              XP (eXercise Points)
            </li>
            <li>
              You earned
              <span color="accent" class="" text-color="white" size="2em"
                ><span class="text-sm text-white border-radius-sm bg-accent">{{
                  pointsEarned("sp")
                }}</span>
              </span>
              SP (Strength Points)
            </li>
          </ul>
          <!-- your stats -->
        </div>

        <fieldset class="justify-center row bg-primary display-block">
          <legend class="text-center title-h4">Your Updated Points</legend>
          <div class="border-double-2 text-center q-pa-md">
            <q-chip class="q-ma-xs"
              ><q-avatar
                icon="fas fa-shield-heart"
                color="info"
                text-color="white"
                size="40px"
              >
              </q-avatar
              >{{ userBasePoints.hp }} HP
            </q-chip>
          </div>
          <div class="border-double-2 text-center q-pa-md">
            <q-chip class="q-ma-xs"
              ><q-avatar
                icon="fas fa-heart-pulse"
                color="negative"
                text-color="white"
                size="40px"
              >
              </q-avatar>
              {{ userBasePoints.cp }} CP
            </q-chip>
          </div>
          <div class="border-double-2 text-center q-pa-md">
            <q-chip class="q-ma-xs"
              ><q-avatar
                icon="mdi-star-shooting"
                color="warning"
                text-color="white"
                size="40px"
              >
              </q-avatar>
              {{ userBasePoints.xp }} XP
            </q-chip>
          </div>
          <div class="border-double-2 text-center q-pa-md">
            <q-chip class="q-ma-xs"
              ><q-avatar
                icon="mdi-dumbbell"
                color="accent"
                text-color="white"
                size="40px"
              >
              </q-avatar>
              {{ userBasePoints.sp }} SP
            </q-chip>
          </div>
        </fieldset>
        <div class="row justify-center q-ma-lg">
          <q-btn
            @click="
              this.currentStep = 0;
              this.$refs['fireworks'].classList.add('hidden');
            "
            color="positive"
            text-color="accent"
            >do it again</q-btn
          >
          <div>&nbsp;</div>
          <q-btn
            @click="this.$router.push({ name: 'home' })"
            color="info"
            text-color=""
            >homebase</q-btn
          >
        </div>
      </div>
      <!-- end of congrats screen -->
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
              <q-btn color="info" class="info" @click="showCompleted">
                finished!
              </q-btn>
            </div>

            <div class="quote-holder">
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
            <div class="row justify-center video-icon">
              <!-- start of floating points upper left -->

              <q-chip class=""
                ><q-avatar
                  :icon="'fas fa-shield-heart'"
                  :color="'info'"
                  :text-color="'white'"
                  size="20px"
                >
                  <!-- <q-badge
                    floating
                    :color="xstep?.badge?.color"
                    :text-color="xstep?.badge?.font"
                    v-if="xstep.badge && xstep?.badge?.caption"
                    >{{ xstep.badge.caption }}</q-badge
                  > -->
                </q-avatar>

                {{ xstep.points.cp }}
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="fas fa-heart-pulse"
                  color="negative"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.hp }}
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="mdi-star-shooting"
                  color="warning"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.xp }}fgdfg
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="mdi-dumbbell"
                  color="accent"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.sp }}
              </q-chip>

              <!-- end points -->
            </div>

            <div class="title-h4 q-mt-lg">
              {{ xstep.title }}
            </div>
            <div class="text-center">{{ xstep.caption }}</div>
          </div>

          <div class="row justify-center q-ma-md">
            <q-chip class=""
              >{{ xstep.reps }}x &nbsp;
              <q-avatar
                icon="mdi-rotate-360"
                color="dark"
                text-color="white"
                size="40px"
              >
              </q-avatar>

              reps
            </q-chip>
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
                @click="showCompleted"
              >
                finished!
              </q-btn>
            </div>
          </div>
          <div class="q-ma-lg"></div>
          <div class="row justify-between q-mt-xl">
            <q-btn
              color="negative"
              class="negative"
              v-if="this.currentStep < this.stepsList.length"
              @click="this.currentStep++"
              size="xs"
            >
              skip this
            </q-btn>
            <q-btn
              color="negative"
              class="negative"
              v-if="this.currentStep <= this.stepsList.length"
              @click="
                this.currentStep = 0;
                ytUrl = null;
              "
              size="xs"
            >
              cancel all
            </q-btn>
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
      alert: false,
      userBasePoints: {
        xp: window.localStorage.getItem("user.points.xp") || 0,
        hp: window.localStorage.getItem("user.points.hp") || 0,
        cp: window.localStorage.getItem("user.points.cp") || 0,
        sp: window.localStorage.getItem("user.points.sp") || 0,
      } || { xp: 0, hp: 0, cp: 0, sp: 0 },
      currentStep: ref(0),
      stepsList: window.localStorage.getItem("usersCurrentSetlist") || [],
      playList: [],
      videoIdIndex: 0,
      ytUrl: "",
    };
  },
  methods: {
    showCompleted() {
      // this.userBasePoints = null;
      console.log(
        "donec:",
        this.userBasePoints,
        localStorage.getItem("user.points.xp")
      );

      this.$refs["fireworks"].classList.remove("hidden");
      this.currentStep = -1;
      this.ytUrl = null;
      // this.$refs["pointshp"].innerHTML = "!!!";
      console.log(
        "THISONE!",
        this.pointsTotal,
        this.step,
        this.$refs["xpointshp"],
        this.$refs["fireworks"],
        this.$refs
      );
      // this.pointsTotal["hp"] = 6;
      let vibdata = [500, 200, 100, 200, 100, 200, 100, 200, 1000];
      this.bmpToVibrate(vibdata, 1);
      this.pointsAdd();
    },
    animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
    bmpToVibrate(bpm, type = 0) {
      //this is duplicated code! (look in baseMeasure)
      let vibPerSecond = 60 / bpm;
      let vibOn = vibPerSecond * 200;
      let vibOff = vibPerSecond * 800;
      let vibData = [];

      if (type === 1) {
        vibData = bpm;
        window.navigator.vibrate(vibData);
        return true;
      }

      for (let i = 0; i < 22; i += 2) {
        vibData[i] = vibOn;
        vibData[i + 1] = vibOff;
      }

      // console.log("Vibration Data:", vibData);
      window.navigator.vibrate(vibData);
    },
    switchToVideoId(id, mute = 0, startAt = 0, endAt = 0, autoplay = 0) {
      console.log("localStore:", localStorage.getItem("userAge"));
      mute = mute === true ? "mute=1" : "mute=0";
      this.ytUrl = `https://www.youtube.com/embed/${id}?autoplay=${autoplay}&loop=0&playlist=${id}&start=${startAt}&end=${endAt}&rel=0${mute}`;
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
    pointsAdd(type = "xp") {
      let hpx =
        this.userBasePoints.hp != "null" ? this.userBasePoints.hp * 1 : 0;

      let xpx =
        this.userBasePoints.xp != "null" ? this.userBasePoints.xp * 1 : 0;
      let cpx =
        this.userBasePoints.cp != "null" ? this.userBasePoints.cp * 1 : 0;

      let spx =
        this.userBasePoints.sp != "null" ? this.userBasePoints.sp * 1 : 0;

      const alldata = this.stepsList;
      for (let index = 0; index < alldata.length; index++) {
        if (alldata[index].points.cp) {
          cpx += parseFloat(alldata[index].points.cp);
        }
        if (alldata[index].points.hp) {
          hpx += parseFloat(alldata[index].points.hp);
        }
        if (alldata[index].points.xp != null) {
          xpx += parseFloat(alldata[index].points.xp);
        }
        if (alldata[index].points.sp != null) {
          spx += parseFloat(alldata[index].points.sp);
        }
      }
      this.userBasePoints.hp = hpx.toFixed(1).replace(/[.,]0$/, "");
      this.userBasePoints.cp = cpx.toFixed(1).replace(/[.,]0$/, "");
      this.userBasePoints.xp = xpx.toFixed(1).replace(/[.,]0$/, "");
      this.userBasePoints.sp = spx.toFixed(1).replace(/[.,]0$/, "");
      this.saveUserPoints();
      console.log("FIXeD:", hpx, cpx, xpx, spx);
    },

    saveUserPoints() {
      //points only
      window.localStorage.setItem("user.points.xp", this.userBasePoints.xp);
      window.localStorage.setItem("user.points.hp", this.userBasePoints.hp);
      window.localStorage.setItem("user.points.cp", this.userBasePoints.cp);
      window.localStorage.setItem("user.points.sp", this.userBasePoints.sp);
    },
    pointsEarned(type = "xp") {
      let hpx = 0,
        xpx = 0,
        cpx = 0;
      let spx = 0;
      const alldata = this.stepsList;
      for (let index = 0; index < alldata.length; index++) {
        if (alldata[index].points.cp) {
          cpx += parseFloat(alldata[index].points.cp);
        }
        if (alldata[index].points.hp) {
          hpx += parseFloat(alldata[index].points.hp);
        }
        if (alldata[index].points.xp != null) {
          xpx += parseFloat(alldata[index].points.xp);
        }
        if (alldata[index].points.sp != null) {
          spx += parseFloat(alldata[index].points.sp);
        }
      }

      if (type == "hp") {
        return hpx.toFixed(1).replace(/[.,]0$/, "");
      }

      if (type == "cp") {
        return cpx.toFixed(1).replace(/[.,]0$/, "");
      }
      if (type == "xp") {
        return xpx.toFixed(1).replace(/[.,]0$/, "");
      }
      if (type == "sp") {
        return spx.toFixed(1).replace(/[.,]0$/, "");
      }
      return `
      <h3>${xpx}:${hpx}:${cpx}</h3>`;
      console.log("total_hp:", hpx, xpx, cpx);
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
    console.log("!!!:", window.localStorage.getItem("userCurrentSetlist"));
    if (window.localStorage.getItem("userCurrentSetlist") == "[]") {
      this.alert = true;
    }
    //

    this.stepsList = JSON.parse(
      window.localStorage.getItem("userCurrentSetlist")
    );
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
template {
  margin: 100px;
}
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
  top: -10px;
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
  // text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0d4aff,
  //   0 0 30px #2f18ff, 0 0 40px #18dcff, 0 0 55px #18ffe0, 0 0 75px #18f0ff,
  //   2px 2px 2px rgba(36, 107, 206, 0), 2px 2px 2px #000000, -1px -1px #444;
}
.cycle-color {
  animation: animateBgReward 3s linear infinite;
}
.fireworks-display {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
// fireworks
.fireworks-display > .before,
.fireworks-display > .after {
  position: absolute;

  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.8;
  z-index: 500;
  box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84,
    190px 16.33333px #002bff, -113px -308.66667px #ff009d,
    -109px -287.66667px #ffb300, -50px -313.66667px #ff006e,
    226px -31.66667px #ff4000, 180px -351.66667px #ff00d0,
    -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00,
    -69px -27.66667px #ff0400, -111px -339.66667px #6200ff,
    155px -237.66667px #00ddff, -152px -380.66667px #00ffd0,
    -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00,
    -88px 10.33333px #0d00ff, 112px -309.66667px #005eff,
    69px -415.66667px #ff00a6, 168px -100.66667px #ff004c,
    -244px 24.33333px #ff6600, 97px -325.66667px #ff0066,
    -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff,
    140px -196.66667px #9000ff, 125px -175.66667px #00bbff,
    118px -381.66667px #ff002f, 144px -111.66667px #ffae00,
    36px -78.66667px #f600ff, -63px -196.66667px #c800ff,
    -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff,
    -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2,
    91px -278.66667px #000dff, -22px -191.66667px #9dff00,
    139px -392.66667px #a6ff00, 56px -2.66667px #0099ff,
    -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb,
    -238px -346.66667px #00ff73, 62px -363.66667px #0088ff,
    244px -170.66667px #0062ff, 224px -142.66667px #b300ff,
    141px -208.66667px #9000ff, 211px -285.66667px #ff6600,
    181px -128.66667px #1e00ff, 90px -123.66667px #c800ff,
    189px 70.33333px #00ffc8, -18px -383.66667px #00ff33,
    100px -6.66667px #ff008c;
  -moz-animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards,
    5s fwposition linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards,
    5s fwposition linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards,
    5s fwposition linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards,
    5s fwposition linear infinite backwards;
  animation: 1s bang ease-out infinite backwards,
    1s gravity ease-in infinite backwards,
    5s fwposition linear infinite backwards;
}

.fireworks-display > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-moz-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-o-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-ms-keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@keyframes bang {
  from {
    box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
      0 0 white, 0 0 white, 0 0 white;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes fwposition {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes fwposition {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes fwposition {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes fwposition {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes fwposition {
  0%,
  19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }

  20%,
  39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }

  40%,
  59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }

  60%,
  79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }

  80%,
  99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
.border-radius-sm {
  border-radius: 5px;
}
.border-radius-lg {
  border-radius: 15px;
}
.text-sm {
  font-size: 0.75em;
  padding: 3px;
}
.text-xs {
  font-size: 0.5em;
  padding: 3px;
}
.text-xxs {
  font-size: 0.25em;
}
</style>
