<template>
  <!-- <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=44&end=107&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=308&end=374&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=633&end=709&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=893&end=957&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/azv8eJgoGLk?autoplay=1&loop=0&playlist=azv8eJgoGLk&start=956&end=1020&rel=0" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/Z1IvxI8YcUM?autoplay=1&loop=0&playlist=Z1IvxI8YcUM&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="http://www.youtube.com/embed/PdnZTxKIe9g?autoplay=1&loop=0&playlist=PdnZTxKIe9g&start=205&end=236&rel=0&mute=1" frameborder="0" allowfullscreen></iframe> -->
  <br />
  <q-dialog v-model="alert" persistent>
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
    <div class="text-center" v-if="ytUrl && currentStep >= 1">
      This video is for technique demonstration only
    </div>
    <q-video
      :ratio="16 / 9"
      :src="ytUrl"
      frameborder="0"
      allowfullscreen
      v-show="ytUrl"
    ></q-video>

    <!--  -->
    <div class="q-pa-md questItem holdSteps">
      <div v-if="!ytUrl && currentStep >= 1">
        <!-- This was a bug, it WILL be a feature! -->
        <p>Please try again.</p>
        <q-btn
          @click="
            this.$router.go();
            startConditioning();
          "
          >It Retro!</q-btn
        >
      </div>
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
              <span color="accent" class="" text-color="white" size="2em"
                ><span class="text-sm text-white border-radius-sm bg-accent">{{
                  pointsEarned("sp")
                }}</span>
              </span>
              SP (Strength Points)
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
                icon="mdi-dumbbell"
                color="accent"
                text-color="white"
                size="40px"
              >
              </q-avatar>
              {{ userBasePoints.sp }} SP
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
          <div class="title-h4 row">Training Prescriptions</div>
          <div class="text-center">
            <div v-html="randomWelcome"></div>
            <div class="text-center row justify-center">
              <q-card class="q-pa-sm">
                <q-btn
                  v-if="!customRoutineEmpty && this.stepsList[0]"
                  @click="
                    buildRoutine();
                    startConditioning();
                  "
                  color="positive"
                  text-color=""
                  >Your Custom Routine</q-btn
                >
                <q-btn
                  v-if="customRoutineEmpty || !this.stepsList[0]"
                  @click="this.$router.push({ name: 'builder' })"
                  color="info"
                  text-color=""
                  >Create a Custom Routine</q-btn
                >
                <hr />
                <h5>Low Impact Supplementary Exercises</h5>
                <p>No equipment needed!</p>
                <q-btn
                  @click="
                    buildRoutine(1, 0);
                    startConditioning();
                  "
                  color="info"
                  text-color=""
                  class=""
                  style="max-width: 120px; min-height: 150px"
                  ><q-icon name="medication" class="h2"></q-icon>#1 Exercise For
                  Sedentary
                  <q-icon name="medication" class="h2"></q-icon>
                  <div
                    class="text-sm block full-width special-alert rainbowToRainbow"
                  >
                    <q-icon name="star" class="h2"></q-icon>Zero Impact - In
                    Chair<q-icon name="star" class="h2"></q-icon></div
                ></q-btn>
                <q-btn
                  @click="
                    buildRoutine(1, 1);
                    startConditioning();
                  "
                  color="primary"
                  text-color=""
                  style="max-width: 120px; min-height: 150px"
                  ><q-icon name="medication" class="h2"></q-icon> Lying In Bed
                  <q-icon name="medication" class="h2"></q-icon>
                  <div class="text-sm block full-width">
                    Super Low Impact
                  </div></q-btn
                >
                <q-btn
                  @click="
                    buildRoutine(1, 2);
                    startConditioning();
                  "
                  color="primary"
                  text-color=""
                  style="max-width: 120px; min-height: 150px"
                  ><q-icon name="medication" class="h2"></q-icon> Sitting In
                  Chair <q-icon name="medication" class="h2"></q-icon>
                  <div class="text-sm block full-width">
                    Very Low Impact
                  </div></q-btn
                >
                <q-btn
                  @click="
                    buildRoutine(1, 3);
                    startConditioning();
                  "
                  color="primary"
                  text-color=""
                  style="max-width: 120px; min-height: 150px"
                  ><q-icon name="medication" class="h2"></q-icon> Standing Only
                  <q-icon name="medication" class="h2"></q-icon>
                  <div class="text-sm block full-width">Low Impact</div></q-btn
                >
              </q-card>

              <!-- <q-btn color="info" class="info" @click="showCompleted">
                finished!
              </q-btn> -->
            </div>

            <Quotes />
          </div>
        </div>
      </div>
      <!-- <q-stepper v-model="step" vertical color="primary" animated> -->
      <!-- exercise steps -->
      <!-- .slice().reverse() was removed because we no longer use quasars step progression -->

      <div v-for="xstep in stepsList" :key="xstep.step">
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

                {{ xstep.points.hp * (repsCompleted + 1) }}
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="fas fa-heart-pulse"
                  color="negative"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.cp * (repsCompleted + 1) }}
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="mdi-star-shooting"
                  color="warning"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.xp * (repsCompleted + 1) }}
              </q-chip>
              <q-chip class=""
                ><q-avatar
                  icon="mdi-dumbbell"
                  color="accent"
                  text-color="white"
                  size="20px"
                >
                </q-avatar>

                {{ xstep.points.sp * (repsCompleted + 1) }}
              </q-chip>

              <!-- end points -->
            </div>

            <div class="title-h4 q-mt-lg">
              {{ xstep.title }}
            </div>

            <div class="text-center title-positive">{{ xstep.caption }}</div>
          </div>
          <!-- Click to add number of reps -->
          <div
            class="row justify-center q-ma-md"
            @dblclick="addRemoveRep('done')"
          >
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
          <div class="text-center">
            <!-- add reps -->
            Completed Reps: <b><span v-html="repsCompleted"></span></b> of
            {{ xstep.reps }}
            <br />
            <q-btn
              color="positive"
              icon="mdi-plus-circle-outline"
              @click="addRemoveRep(1)"
              >Add Rep</q-btn
            ><q-btn
              color="negative"
              icon="mdi-minus-circle-outline"
              @click="addRemoveRep(-1)"
              >Remove Rep</q-btn
            >
            <!-- {{ userStepRep }} -->
          </div>
          <p v-html="modifyThisStepData(xstep)"></p>
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
              <!-- <q-btn @click="onYouTubeIframeAPIReady()">sfd</q-btn> -->
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
              v-if="this.currentStep <= this.stepsList.length"
              @click="
                this.currentStep++;
                this.currentRepCount = 0;
              "
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
                this.currentRepCount = 0;
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
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { ref } from "vue";

import { LocalStorage } from "quasar";
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
import Quotes from "src/components/RandomQuote.vue";
export default {
  components: {
    Quotes,
  },
  data() {
    return {
      alert: false,
      customRoutineEmpty: false,
      userBasePoints: {
        xp: LocalStorage.getItem("user.points.xp") || 0,
        hp: LocalStorage.getItem("user.points.hp") || 0,
        cp: LocalStorage.getItem("user.points.cp") || 0,
        sp: LocalStorage.getItem("user.points.sp") || 0,
      } || { xp: 0, hp: 0, cp: 0, sp: 0 },
      currentStep: ref(0),
      workingList: LocalStorage.getItem("userCurrentSetlist") || [],
      stepsList: [],
      playList: [],
      setList: [],
      doctorSets: [],
      videoIdIndex: 0,
      ytUrl: "",
      currentRepCount: 0,
      userStepRep: "",
    };
  },
  methods: {
    addRemoveRep(amount) {
      if (amount == "done") {
        console.log("isdone");
        if (this.currentRepCount < this.stepsList[this.currentStep - 1].reps) {
          this.currentRepCount = this.stepsList[this.currentStep - 1].reps;
          console.log("isnD");
          confetti({
            particleCount: 100,
            spread: 200,
            scalar: 0.75,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
            origin: { y: 0.5, x: 0.6 },
            // ticks: 50,
            // gravity: 0,
            // decay: 0.94,
            // startVelocity: 30,
          });
          setTimeout(() => {
            // this.showLevelUp("center");
          }, 1000);
          confetti({
            particleCount: 100,
            scalar: 0.75,
            shapes: ["circle", "square", "star"],
          });
          // this.repsCompleted = this.stepsList[this.currentStep - 1];
        } else {
          this.currentRepCount = 0;
        }

        return;
      }
      console.log("isUNdone");
      console.log(
        "reps:",
        this.currentRepCount,
        this.stepsList[this.currentStep - 1].reps
      );
      if (
        this.currentRepCount >= this.stepsList[this.currentStep - 1].reps - 1 &&
        amount > -1
      ) {
        confetti({
          particleCount: 100,
          spread: 200,
          scalar: 0.75,
          shapes: ["star"],
          colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          origin: { y: 0.5, x: 0.6 },
          // ticks: 50,
          // gravity: 0,
          // decay: 0.94,
          // startVelocity: 30,
        });
        setTimeout(() => {
          // this.showLevelUp("center");
        }, 1000);
        confetti({
          particleCount: 100,
          scalar: 0.75,
          shapes: ["circle", "square", "star"],
        });
      } else if (amount >= 1) {
        confetti({
          particleCount: 2 * this.currentRepCount,
          spread: 40,
          // any other options from the global
          // confetti function
        });
      }

      this.currentRepCount = (this.currentRepCount + amount) * 1;
      if (this.currentRepCount <= -1) this.currentRepCount = 0;
    },
    onYouTubeIframeAPIReady() {
      player = new YT.Player("ytplayer", {
        events: {
          onReady: this.onPlayerReady,
        },
      });
      console.log("@WWWWOOW");
    },
    onPlayerReady() {
      console.log("dfsfdsfw?");
      console.log("KOKOK:", player);
      player.playVideo();
      // Mute!
      player.mute();
    },
    buildRoutine(type = 0, drsetnum = 0) {
      this.currentRepCount = 0;
      this.userStepRep = ""; // need to use this to modify points based on reps of each exercise

      // console.log(
      //   "started-build-routineXy",
      //   eval(LocalStorage.getItem("userCurrentSetlist")),
      //   LocalStorage.getItem("userCurrentSetlist").split(","),
      //   this.setList.length,
      //   this.stepsList.length,
      //   this.workingList.length
      // );
      console.log(
        "WWWTTTFF:",
        LocalStorage.getItem("userCurrentSetlist"),
        this.workingList
      );
      let selectedSetList = [];
      if (LocalStorage.getItem("userCurrentSetlist"))
        selectedSetList = LocalStorage.getItem("userCurrentSetlist"); //.split(","); //eval(LocalStorage.getItem("userCurrentSetlist"));//
      let newList = [];
      // ! get prescribed sets
      if (type == 1) {
        let drorder = this.doctorSets.find((item) => item.id === drsetnum);

        // console.log("it hrer:", drorder.set, drorder);

        // alert("it's here:", drorder.set || [1]);
        selectedSetList = eval(drorder?.set || []); // temp replace for the loop
      }

      for (let index = 0; index < selectedSetList.length; index++) {
        console.log("curSetId:");
        let foundSet = this.setList.find(
          (item) => item.id === parseInt(selectedSetList[index])
        );

        foundSet.step = index + 1;
        newList.push(foundSet);
      }

      // LocalStorage.set("userCurrentSetlist", newList);
      // this.workingSetlist = newList;
      this.stepsList = newList;
    },
    saveSetList() {
      let buildSetlist = [];
      for (let index = 0; index < 0; index++) {
        // let withStepNum = this.selected[index].alldata["step"];
        buildSetlist.push(this.selected[index].alldata.id);
        // buildSetlist[index]["step"] = index + 1;
        console.log("selected:", this.selected[index].alldata.id);
      }
      // console.log("fixdd:", buildSetlist[index]["step"]);
      LocalStorage.set("userCurrentSetlist", buildSetlist);
      // save this list onto all custom lists
      // let oldSets = this.usersSetLists;
      // if (!isArray(oldSets)) {
      // }
      // LocalStorage.set("user.setlists.custom");
      //
      this.workingSetlist = buildSetlist;
      console.log(
        "saved setlist:",
        this.workingSetlist,
        "localastore",
        LocalStorage.getItem("userCurrentSetlist")
      );

      this.popupTitle = "Saved!";
      this.popupCaption = "Your set list was saved!.";
    },
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
      this.userStepRep += this.currentRepCount + ",";
      this.currentRepCount = 0;
      console.log("localStore:", localStorage.getItem("userAge"));
      mute = mute == 1 ? "mute=1" : "mute=0";
      this.ytUrl = `https://www.youtube.com/embed/${id}?autoplay=${autoplay}&loop=0&playlist=${id}&start=${startAt}&end=${endAt}&rel=0${mute}&enablejsapi=1&modestbranding=1&theme=light&showinfo=0`;

      console.log("PLAYINGT:", this.ytUrl);
      // window.scrollTo({ top: 0, behavior: "smooth" });
      window.scrollTo(0, 0);
    },

    getNextVideoId() {
      console.log("NEWXT!:");
    },
    startConditioning() {
      console.log("###L:", this.stepsList, this.workingList);
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
      LocalStorage.set("user.points.xp", this.userBasePoints.xp);
      LocalStorage.set("user.points.hp", this.userBasePoints.hp);
      LocalStorage.set("user.points.cp", this.userBasePoints.cp);
      LocalStorage.set("user.points.sp", this.userBasePoints.sp);
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
    loadSetLists(data, error = null) {
      if (error) {
        alert(error.message);
      } else {
        this.setList = data.setLists;

        this.doctorSets = data.doctorSets;

        this.buildRoutine();
      }
    },
    modifyThisStepData(xstep) {
      let randomReps = Math.floor(Math.random() * (xstep.reps / 2 - 2) + 1);
      return xstep.body.replace("[xtra-reps]", randomReps);
    },
  },

  computed: {
    repsCompleted() {
      if (this.stepsList[this.currentStep - 1]) {
        if (this.currentRepCount >= this.stepsList[this.currentStep - 1].reps) {
          return this.currentRepCount;
          // return `<span class="glower">${this.currentRepCount}</span>`; // why glower here?
        }
      }

      return this.currentRepCount;
    },

    randomWelcome() {
      const welcomes = [
        "Everything is all setup. Make a choice to begin your training.",
        "Select from your prescribed exercises, or your custom routine.",
      ];

      let itemNum = Math.floor(Math.random() * welcomes.length);
      return welcomes[itemNum];
    },
  },
  mounted() {
    // console.log(
    //   "p!!!:",
    //   LocalStorage.getItem("userCurrentSetlist").split(","),
    //   this.stepsList,
    //   this.workingList
    // );
    if (
      LocalStorage.getItem("userCurrentSetlist") == "[]" ||
      LocalStorage.getItem("userCurrentSetlist") == null
    ) {
      this.saveSetList(); // not made yet, so make the doctors list.

      this.customRoutineEmpty = true;
      //this.alert = true; //
    } else {
      fetch("https://rmatter.com/health-full/data/index.php?loc=setlist")
        .then((res) => res.json())
        .then((data) => this.loadSetLists(data))
        .catch((err) => this.loadSetLists("", err));
    }
    //

    // this.stepsList = JSON.parse(
    //   LocalStorage.getItem("userCurrentSetlist")
    // );
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
  padding: 1px 1px 5px 1px;
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
@keyframes animateBgReward {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.special-alert {
  padding: 0.5em;
  color: $text;
  animation: animateBgReward 5s ease infinite;
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
.glower {
  animation: colorCycle 2s ease infinite;
  border-bottom: 4px double $info;
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
