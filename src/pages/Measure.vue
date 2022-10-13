<template>
  <!-- TODO: PASS PROPS so we can get rid of old BaseMeasure.vue file and use the components inside hear instead -->
  <div class="blockCursor">
    <!-- <div>
      <video hidden id="webcam" width="640" height="480"></video>
      <canvas id="canvas" width="640" height="480"></canvas>
    </div> -->

    <div class="questItem shadow-sm p-3" id="statsInput">
      <div class="is-card-type">
        <span class="title-text">Baseline Measurements</span>
      </div>
      <div class="row no-wrap justify-between is-retro-icon">
        <div class="mdi mdi-tape-measure text-h2 pr-5 text-left"></div>
        <p class="text-center text-h5">
          Let's find out some of your basic info so you can tell me your health
          goals!
        </p>
        <div class="mdi mdi-scale-bathroom text-h2 pr-5 text-right"></div>
      </div>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-human-male-height text-h3"></span
          ></span>
        </div>

        <input
          type="text"
          id="userHeight"
          ref="userHeight"
          class="form-control graphPaper-2"
          v-model="userHeight"
          placeholder="Height"
          aria-label="height"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        />

        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary bg-info"
            ref="userCMObj"
            @click="toggleCM(true)"
          >
            CM
          </button>
          <button
            type="button"
            class="btn btn-secondary bg-secondary"
            ref="userFTObj"
            @click="toggleCM(false)"
          >
            FT
          </button>
        </div>
      </div>
      <label for="userHeight">Height</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-weight text-h3"></span
          ></span>
        </div>
        <input
          type="number"
          id="userWeight"
          class="form-control graphPaper-2"
          v-model="userWeight"
          placeholder="Weight"
          aria-label="Weight"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        />
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary bg-info"
            ref="userKGObj"
            @click="toggleKG(true)"
          >
            KG
          </button>
          <button
            type="button"
            class="btn btn-secondary bg-secondary"
            ref="userLBObj"
            @click="toggleKG(false)"
          >
            LBS
          </button>
        </div>
      </div>
      <label for="userWeight">Weight</label>
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-cake-variant text-h3"></span
          ></span>
        </div>
        <input
          type="number"
          class="form-control graphPaper-2"
          v-model="userAge"
          placeholder="Age"
          aria-label="Age"
          aria-describedby="basic-addon1"
          @focus="$event.target.select()"
        /><br />
        <label for="userAge">Age</label>
      </div>
      <!-- Current Gender -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="text-h3"><q-icon name="fas fa-venus-mars" /></span
          ></span>
        </div>
        <q-btn
          ref="flipMale"
          :class="{
            'btn btn-secondary': true,
            'bg-secondary': this.userGender == 1,
            'bg-info': this.userGender == 0,
          }"
          @click="flipGender(0)"
        >
          <q-icon name="mdi-human-male" size="25px" /> male&nbsp;
        </q-btn>
        <q-btn
          ref="flipFemale"
          :class="{
            'btn btn-secondary': true,
            'bg-secondary': this.userGender == 0,
            'bg-info': this.userGender == 1,
          }"
          @click="flipGender(1)"
        >
          <q-icon name="mdi-human-female" size="25px" /> female&nbsp;
        </q-btn>

        <br />
        <label for="userAge">Gender</label>
      </div>

      <!-- User Resting Heart Rate -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span
              class="mdi mdi-heart-pulse text-h3"
              ref="smBpmIcon"
              style="border-radius: 100%"
            ></span
          ></span>
          <div style="font-size: 8px; max-width: 40%">
            You can use the BPM button on the lower right to record the value
            below when you are in a relaxed state, or
            <a
              href="https://prouast.github.io/heartbeat-js/"
              target="_blank"
              rel="noopener noreferrer"
              >tap here</a
            >
            to track via video.
          </div>
        </div>
        <input
          type="number"
          class="form-control graphPaper-2"
          v-model="userRHR"
          placeholder="Resting Heart Rate"
          aria-label="Age"
          aria-describedby="basic-addon1"
          @focus="
            $event.target.select();
            this.$refs.smBpmIcon.classList.add('pulseBPMTap');
          "
          v-on:blur="$refs.smBpmIcon.classList.remove('pulseBPMTap')"
        /><br />
        <label for="userRHR">Resting Heart Rate</label>
      </div>

      <!-- Mobility level -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-shape-plus text-h3"></span
          ></span>
        </div>
        <select
          id="userSkill"
          class="form-control"
          v-model="userSkill"
          placeholder="Skill Level"
          aria-label="Skill"
          aria-describedby="basic-addon1"
        >
          <!-- <option value="0">No exercise, or occasional</option>
          <option value="1.1">1 day every week</option>
          <option value="1.1">~1-2 days</option>
          <option value="1.2">2 days</option>
          <option value="1.3">3 days</option>
          <option value="1.4">4 days</option>
          <option value="1.5">5 days</option>
          <option value="1.6">6 days</option>
          <option value="1.7">7 days</option>
          <option value="2">I'm a trainer</option>
          <option value="3">I'm a professional athlete</option>
        </select> -->

          <option value="-10">Unable to stand</option>
          <option value="-6">Mobility issus</option>
          <option value="-5">Obesely overweight</option>
          <option value="-3">Very overweight</option>
          <option value="-2">Overweight</option>
          <option value="2.0">A bit overweight</option>
          <option value="0">Very thin</option>
          <option value="1.0">Skinny but overweight (skinny-fat)</option>
          <option value="1">A bit underweight</option>
          <option value="2">Average Build</option>
          <option value="3">Athletic</option>
          <option value="7">Body Builder</option>
          <option value="9">Fitness trainer</option>

          slim average athletic obese
          <!-- slim average athletic obese -->
        </select>
        <!-- could be check box collective such as:
                      -at work/school I: am on my feet all day, sit all day, don't work, work up a sweat for 10 minutes every day,
                      I don't work

                      at home I: sit around most days, play outdoor sports (for how many min X 0.01), I am out and about driving everyday,
                      I'm out mostly walk/jog/biking/

                      I cook, Takeout/delivery,
                      frozen/packaged-prepared (percent) vs fresh/frozen-whole

                      My hobbies include, for more than 30 minutes at a time: moderate exercise [ ] days/week
                      sitting watching tv/phone [ ] days per week
        -->
        <br />
        <label for="userSkill">Body Shape</label>
      </div>

      <!-- Exercise frequency -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-calendar-heart text-h3"></span
          ></span>
        </div>
        <select
          id="userExerciseFrequency"
          class="form-control"
          v-model="userExerciseFrequency"
          placeholder="Exercise Frequency"
          aria-label="Exercise Frequency"
          aria-describedby="basic-addon1"
        >
          <option value="0">Never</option>
          <option value="0.0">Less than once a week</option>
          <option value="1">Once a week</option>
          <option value="2">Two to three times a week</option>
          <option value="3">Almost every day</option>
        </select>

        <br />
        <label for="userSkill">Exercise Frequency</label>
      </div>

      <!-- Exercise Effort -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-gauge text-h3"></span
          ></span>
        </div>
        <select
          id="userExerciseEffort"
          class="form-control"
          v-model="userExerciseEffort"
          placeholder="Exercise Effort"
          aria-label="Exercise Effort"
          aria-describedby="basic-addon1"
        >
          <option value="0">I Take it easy</option>
          <option value="5">Heavy Breathing & Sweating</option>
          <option value="10">I push near exhaustion</option>
        </select>

        <br />
        <label for="userSkill">Exercise Effort</label>
      </div>
      <!-- Exercise Length -->
      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><span class="mdi mdi-clock text-h3"></span
          ></span>
        </div>
        <select
          id="userExerciseLength"
          class="form-control"
          v-model="userExerciseLength"
          placeholder="Exercise Length"
          aria-label="Exercise Length"
          aria-describedby="basic-addon1"
        >
          <option value="1">Less than 15 min.</option>
          <option value="1.01">16 to 30 min.</option>
          <option value="1.5">30 to 60 min.</option>
          <option value="1.5">more than 60 min.</option>
        </select>

        <br />
        <label for="userSkill">Exercise Length</label>
      </div>

      <div class="input-group mb-3 w-75 shadow-sm">
        <div class="input-group-prepend">
          <details :open="userNeck > 0">
            <summary><span>Have a tape measure handy?</span></summary>
            <fieldset>
              <div>
                We can get more details if you have a tape measure (non-stretch
                & cloth is best.) but feel free to skip this if you don't.
              </div>
              <span class="mdi mdi-tape-measure text-h3"></span>
              <span class="mdi mdi-arrow-left-right-bold text-h3"></span>
              <span class="mdi mdi-human text-h3"></span>
              <div class="row">
                <div
                  class="border-double-1 border-accent vertical-top width-100"
                >
                  <div class="title-h4">Neck</div>
                  Measure neck circumference from below the larynx, with the
                  tape angled downward to the front.
                  <div>
                    <input
                      type="number"
                      id="userNeck"
                      class="form-control graphPaper-2"
                      v-model="userNeck"
                      placeholder="Neck Size"
                      aria-label="Neck circumference"
                      aria-describedby="basic-addon1"
                      @focus="$event.target.select()"
                    />
                    <br /><label for="userNeck">Neck Circumference</label><br />
                  </div>
                </div>
                <div
                  class="border-double-1 border-accent vertical-top width-100"
                >
                  <div class="title-h4">Waist</div>
                  <div>
                    <b>Male:</b> Measure waist around the navel (belly button)
                  </div>
                  <div>
                    <b>Female:</b> Measure waist around smallest part of torso
                  </div>
                  <div>
                    <input
                      type="number"
                      id="userWaist"
                      class="form-control graphPaper-2"
                      v-model="userWaist"
                      placeholder="Waist Size"
                      aria-label="Waist circumference"
                      aria-describedby="basic-addon1"
                      @focus="$event.target.select()"
                    />
                    <br /><label for="userWaist">Waist Circumference </label>
                  </div>
                </div>
                <div
                  class="border-double-1 border-accent vertical-top width-100"
                >
                  <div class="title-h4">Hips</div>
                  <b>Both:</b>Measure hips at the widest part, usually around
                  buttocks/crotch, where you bend over from.
                  <div>
                    <input
                      type="number"
                      id="userHip"
                      class="form-control graphPaper-2"
                      v-model="userHip"
                      placeholder="Hip Size"
                      aria-label="Hip circumference"
                      aria-describedby="basic-addon1"
                      @focus="$event.target.select()"
                    />

                    <br /><label for="userHip">Hip Circumference</label>
                  </div>
                </div>
                <span v-if="userNeck > 0"
                  ><br />
                  {{
                    `Male:${navyBFP(0).toFixed(1)}  Female:${navyBFP(1).toFixed(
                      1
                    )}`
                  }}
                </span>
              </div>
            </fieldset>
          </details>
        </div>
      </div>
    </div>
    <!-- your personal goals -->
    <div class="questItem shadow-sm p-3" id="statsInput">
      <div class="is-card-type">
        <span class="title-text">Personal Health Goals</span>
      </div>
      <div class="row no-wrap justify-between is-retro-icon">
        <div class="mdi mdi-account-heart text-h2 pr-5 text-left"></div>
        <p class="text-center text-h5">
          Now tell me what's the reason for your visit today, and how you want
          to improve your health?
        </p>
        <div class="mdi mdi-calendar-star text-h2 pr-5 text-right"></div>
      </div>
      <div>
        <q-icon class="text-h3" name="mdi-human-edit"></q-icon><br />
        <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8145781/ -->
        <select
          id="userBodyGoal"
          class="form-control"
          v-model="userBodyGoal"
          placeholder="Body Goal"
          aria-label="Body Type Goal"
          aria-describedby="basic-addon1"
        >
          <option value="-2">Loose a lot of body fat</option>
          <option value="-1">Loose a bit of body fat</option>
          <option value="0">Maintain my current weight</option>
          <option value="1">Get an athletic body</option>
          <option value="2">Get a muscular body</option>
          <option value="3">Get a bodybuilder body</option></select
        ><br />
        <label for="userBodyGoal">Desired Body Improvement</label>
      </div>
      <br />
      <fieldset>
        <legend>
          <q-icon class="text-h3" name="mdi-head-dots-horizontal"></q-icon> My
          Health Concerns
        </legend>
        <div>
          <br />
          <label>
            <input
              type="checkbox"
              class="nes-radio"
              value="heart"
              v-model="userConcerns"
            />
            <span class="check-label">Heart Disease</span> </label
          ><br />

          <label>
            <input
              type="checkbox"
              class="nes-radio"
              value="cancer"
              v-model="userConcerns"
            />
            <span class="check-label">Cancer</span> </label
          ><br />

          <label>
            <input
              type="checkbox"
              class="nes-radio"
              value="diabetes"
              v-model="userConcerns"
            />
            <span class="check-label">Diabetes</span> </label
          ><br />
          <label>
            <input
              type="checkbox"
              class="nes-radio"
              value="alzheimers"
              v-model="userConcerns"
            />
            <span class="check-label">Alzheimers</span> </label
          ><br />
          <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8702655/#sec0060title -->
          <!-- <label>
            <input
              type="checkbox"
              class="nes-radio"
              value="immunity"
              v-model="userConcerns"
            />
            <span class="check-label">General Immunity</span> </label
          ><br /> -->
          check back soon for more...
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <q-icon class="text-h3" name="medical_information"></q-icon> My
          Lifestyle
        </legend>
        <div>
          <br />

          <label>
            I drink alcoholic
            <input type="number" v-model="userLifestyleAlcohol" />
            <span class="check-label"></span>
          </label>
          drinks every
          <select
            id="userLifestyleAlcoholFreq"
            class="form-control tiny-input"
            v-model="userLifestyleAlcoholFreq"
            placeholder="Frequency"
            aria-label="Alcohol Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />

          <label>
            I drink soda pop or fruit juice
            <input type="number" v-model="userLifestyleSoda" />
            <span class="check-label"></span>
          </label>
          drinks every
          <select
            id="userLifestyleSodaFreq"
            class="form-control tiny-input"
            v-model="userLifestyleSodaFreq"
            placeholder="Frequency"
            aria-label="Soda Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />

          <label>
            I smoke
            <input type="number" v-model="userLifestyleSmokes" />
            <span class="check-label"></span>
          </label>
          cigarettes every
          <select
            id="userLifestyleSmokesFreq"
            class="form-control tiny-input"
            v-model="userLifestyleSmokesFreq"
            placeholder="Frequency"
            aria-label="Smoking Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />
          <label>
            I eat meat
            <input type="number" v-model="userLifestyleMeat" />
            <span class="check-label"></span>
          </label>
          times every
          <select
            id="userLifestyleMeatFreq"
            class="form-control tiny-input"
            v-model="userLifestyleMeatFreq"
            placeholder="Frequency"
            aria-label="Meat Eat Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />
          <label>
            I eat seafood
            <input type="number" v-model="userLifestyleSeafood" />
            <span class="check-label"></span>
          </label>
          times every
          <select
            id="userLifestyleSeafoodFreq"
            class="form-control tiny-input"
            v-model="userLifestyleSeafoodFreq"
            placeholder="Frequency"
            aria-label="Seafood Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />
          <label>
            I eat dairy or eggs
            <input type="number" v-model="userLifestyleDairy" />
            <span class="check-label"></span>
          </label>
          times every
          <select
            id="userLifestyleDairyFreq"
            class="form-control tiny-input"
            v-model="userLifestyleDairyFreq"
            placeholder="Frequency"
            aria-label="Dairy Eat or Eggs Frequency"
            aria-describedby="basic-addon1"
          >
            <option value="365.25">Day</option>
            <option value="52.177457">Week</option>
            <option value="12">Month</option>
            <option value="1">Year</option>
          </select>

          <hr />
        </div>
        <div>
          <br />
          <label>
            Usually, I sit/lie around (sedentary) for
            <input type="number" v-model="userLifestyleSedentary" />
            <span class="check-label"></span>
          </label>
          hours every <b>day</b> (at home, work/school, watching tv, sitting,
          etc. don't include your regular sleep)

          <hr />
        </div>
      </fieldset>
    </div>
    <!-- Then diagnosis: things to avoid, things to eat, things to do/exercise -->
    <!-- Avoid: smoke of any kind, all meat products,  -->
    <!-- you get: no smoking (+10 years) -->
    <!-- https://understandinguncertainty.org/microlives -->
    <Clipboard />
    <!-- TODO: CLIPBOARD and PRESCRIPTION need to receive all props for user data... probably best to convert to object -->
    <div class="q-ma-sm">
      <Prescription />
    </div>

    <div v-if="showCitationModal">
      <Modal @close="toggleCitationModal" :theme="citationTheme" cite="cite">
        <template></template>
        <template v-slot:cite>
          <h4 class="title-h4">{{ citationName }}</h4>
          <div class="title-h4">
            {{ citationCaption }}
          </div>
          <div class="paperSheetFlat">
            <div class="text-center">
              <a :href="baseURL + '/citations/' + citationID" target="_blank"
                >see full citations & sources here</a
              ><br />
              <div class="text-h5">Basic Overview</div>
              <span class="text-negative">
                {{
                  citationTheme === "theme-red"
                    ? "WARNING: this method's use is questionable"
                    : ""
                }}</span
              >
              <span class="text-negative">
                {{
                  citationTheme === "theme-notice"
                    ? "WARNING: your data could be inaccurate"
                    : ""
                }}</span
              >
              <br />
            </div>

            <p>
              {{ citationShortFormat }}
            </p>
            <p>
              {{ citationWhy }}
            </p>
          </div>
          <div class="paperSheetFlat" v-show="citationSummary">
            <!-- [<router-link to="/about">abooot</router-link>] {{ citationName }} |
            {{ citationID }} | {{ citationCaption }} | {{ citationShort }} -->
            <div class="text-center text-h5">Sources / Excerpts</div>
            <kbd class="cite-text">
              {{ citationSummaryFormat }} <br />
              <a :href="baseURL + '/citations/' + citationID" target="_blank"
                >full citations are here</a
              >
            </kbd>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from "src/components/Modal.vue";
// import heartbeat from "src/components/heartbeatvideo.js";
import Prescription from "src/components/PrescriptionComponent.vue";
import Clipboard from "src/components/Clipboard.vue";

export default {
  props: ["baseURL"],
  components: {
    Modal,
    Prescription,
    Clipboard,
  },
  data() {
    return {
      showModal: false,
      showCitationModal: false,
      userGender: LocalStorage.getItem("userGender") || null,
      userLevel: LocalStorage.getItem("user.level.number") || 1,
      userAge: LocalStorage.getItem("userAge") || null,
      userHeight:
        LocalStorage.getItem("userHeightImp") != "null"
          ? LocalStorage.getItem("userHeightImp")
          : LocalStorage.getItem("userHeight") || 170,
      userWeight: LocalStorage.getItem("userWeight") || 55,
      userSkill: LocalStorage.getItem("userSkill") || 0,
      baseMobility: 4,
      userKG: LocalStorage.getItem("userKG") || true,
      userCM: LocalStorage.getItem("userKG") || true,
      userHeightImp: LocalStorage.getItem("userHeightImp") || null,
      userWeightImp: LocalStorage.getItem("userWeightImp") || null,
      // user setup values (prefs/settings)
      userPlanPrefs: [],
      userHealthPoints: [],
      userCooks: "",
      userWholeFood: "",
      userBaseWork: "",
      userBaseExercise: [],
      userNeck: LocalStorage.getItem("userNeck") || 0,
      userWaist: LocalStorage.getItem("userWaist") || 0,
      userHip: LocalStorage.getItem("userHip") || 0,
      userRHR: LocalStorage.getItem("userRHR") || 0,
      userExerciseFrequency: LocalStorage.getItem("userExerciseFrequency") || 0,
      userExerciseEffort: LocalStorage.getItem("userExerciseEffort") || 0,
      userExerciseLength: LocalStorage.getItem("userExerciseLength") || 0,
      userBasePoints: {
        xp: LocalStorage.getItem("user.points.xp"),
        hp: LocalStorage.getItem("user.points.hp"),
        cp: LocalStorage.getItem("user.points.cp"),
      } || { xp: 0, hp: 0, cp: 0 },
      userConcerns: Array.isArray(LocalStorage.getItem("userConcerns"))
        ? LocalStorage.getItem("userConcerns")
        : LocalStorage.getItem("userConcerns") || [],
      userLifestyleAlcohol:
        LocalStorage.getItem("user.lifestyle.alcohol.count") || 0,
      userLifestyleAlcoholFreq:
        LocalStorage.getItem("user.lifestyle.alcohol.freq") || 52.177457,
      userLifestyleSoda: LocalStorage.getItem("user.lifestyle.soda.count") || 0,
      userLifestyleSodaFreq:
        LocalStorage.getItem("user.lifestyle.soda.freq") || 52.177457,
      userLifestyleSmokes:
        LocalStorage.getItem("user.lifestyle.smokes.count") || 0,
      userLifestyleSmokesFreq:
        LocalStorage.getItem("user.lifestyle.smokes.freq") || 52.177457,
      userLifestyleMeat: LocalStorage.getItem("user.lifestyle.meat.count") || 0,
      userLifestyleMeatFreq:
        LocalStorage.getItem("user.lifestyle.meat.freq") || 52.177457,
      userLifestyleSeafood:
        LocalStorage.getItem("user.lifestyle.seafood.count") || 0,
      userLifestyleSeafoodFreq:
        LocalStorage.getItem("user.lifestyle.seafood.freq") || 52.177457,
      userLifestyleDairy:
        LocalStorage.getItem("user.lifestyle.dairy.count") || 0,
      userLifestyleDairyFreq:
        LocalStorage.getItem("user.lifestyle.dairy.freq") || 52.177457,
      userLifestyleSedentary:
        LocalStorage.getItem("user.lifestyle.sedentary.count") || 0,
      userLifestyleSedentaryFreq:
        LocalStorage.getItem("user.lifestyle.sedentary.freq") || 52.177457,
      userBodyGoal: LocalStorage.getItem("user.body.goal") || 0,
    };
  },
  methods: {
    riskFromDoctorMouth(risk = "", type = 0) {
      console.log("risk-=", risk);
      if (risk === "all") {
        let allRisk =
          parseFloat(this.getHabitRisk("heart", 1)) +
          parseFloat(this.getHabitRisk("cancer", 1)) +
          parseFloat(this.getHabitRisk("diabetes", 1)) +
          parseFloat(this.getHabitRisk("alzheimers", 1));
        if (type == "number") return allRisk;
        if (allRisk < 1) {
          return `According to my readings you're in excellent health!`;
        }
        if (allRisk < 2) {
          return `You seem to be taking care of yourself fairly well!`;
        }
        if (allRisk < 4) {
          return `We could improve one or two things to make you even healthier!`;
        }
        if (allRisk < 6) {
          return `We could improve things now to add years back to your life.`;
        }

        if (allRisk < 7) {
          return `I am starting to worry about Non Communicable Diseases.`;
        }
        if (allRisk < 9) {
          return `Making some changes now could drastically improve your lifespan and longevity.`;
        }
        if (allRisk < 12) {
          return `I'm quite concerned with a few of your health metrics. Let's make some changes.`;
        }
        if (allRisk < 16) {
          return `With a bit of work we can add YEARS back to your life!`;
        }
        if (allRisk >= 16) {
          return `With the right attitude and effort we can make some huge improvements!`;
        }
      }

      if (risk == "bodytype") {
        if (type == -2) return `loose that unwanted weight`;
        if (type == -1) return `loose that unwanted weight`;
        if (type == 0) return `maintain your current physique`;
        if (type == 1) return `obtain your athletic physique`;
        if (type == 2) return `obtain your muscular physique`;
        if (type == 3) return `maximize your body building results`;
      }
      // alert("predia:" + this.getBMI(0));
      if (risk == "prediabetes") {
        console.log(
          "prediaaa:L",
          this.getBMI(0) >= 20 && this.getBMI(0) < 22.2
        );
        if (this.getBMI(0) >= 20 && this.getBMI(0) < 22.2)
          return "Your body mass is nearing prediabetes.";
        if (this.getBMI(0) >= 22.2 && this.getBMI(0) < 22.6)
          return "Your body mass is at a prediabetic level.";
        if (this.getBMI(0) >= 22.6)
          return "Your body mass is dangerously above a prediabetic level.";
      }
      if (risk == "heart") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No signs of ${risk} disease.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `You're ${risk} disease risk is ${this.getHabitRisk(risk)}.`;
      }
      if (risk == "alzheimers") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No signs of ${risk} disease.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `${
            risk.charAt(0).toUpperCase() + risk.slice(1)
          } disease risk is ${this.getHabitRisk(risk)}.`;
      }
      if (risk == "diabetes") {
        if (this.getHabitRisk(risk, 1) < 1) return `No signs of ${risk}.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `You're at ${this.getHabitRisk(risk)} risk for ${risk}.`;
      }
      if (risk == "cancer") {
        if (this.getHabitRisk(risk, 1) < 1)
          return `No obvious signs of ${risk}.`;
        if (this.getHabitRisk(risk, 1) >= 1)
          return `And for ${risk} your risk is ${this.getHabitRisk(risk)}.`;
      }
    },
    getHabitRisk(risk = "alzheimers", type = 0) {
      let writtenLevel = null;
      let numeralLevel = 0;
      let level = (
        this.microLivesLostInYear(
          "meat",
          this.userLifestyleMeat,
          this.userLifestyleMeatFreq,
          2
        ) *
          0.001 +
        this.microLivesLostInYear(
          "dairy",
          this.userLifestyleDairy,
          this.userLifestyleDairyFreq,
          2
        ) *
          0.0005 +
        this.microLivesLostInYear(
          "alcohol",
          this.userLifestyleAlcohol,
          this.userLifestyleAlcoholFreq,
          2
        ) *
          0.005 +
        this.microLivesLostInYear(
          "soda",
          this.userLifestyleSoda,
          this.userLifestyleSodaFreq,
          2
        ) *
          0.005 +
        this.microLivesLostInYear(
          "smoking",
          this.userLifestyleSmokes,
          this.userLifestyleSmokesFreq,
          2
        ) *
          0.0001
      ).toFixed(2);
      // console.log(
      //   "sed:",
      //   this.microLivesLostInYear(
      //     "sedentary",
      //     this.userLifestyleSedentary,
      //     this.userLifestyleSedentaryFreq,
      //     2
      //   ) * 0.001
      // );
      let useMultiplier = 0.001;
      if (risk == "alzheimers") {
        useMultiplier = 0.0005;
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "seafood",
              this.userLifestyleSeafood,
              this.userLifestyleSeafoodFreq,
              2
            ) * 0.01
          );
      }
      if (
        this.microLivesLostInYear(
          "sedentary",
          this.userLifestyleSedentary,
          this.userLifestyleSedentaryFreq,
          2
        ) *
          useMultiplier >=
        10
      ) {
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "sedentary",
              this.userLifestyleSedentary,
              this.userLifestyleSedentaryFreq,
              2
            ) * useMultiplier
          );
      }

      if (risk == "diabetes") {
        // console.log("whsd:", this.showIdealWeight("guess"));
        if (this.showIdealWeight("guess") > 10)
          level = parseFloat(level) + parseFloat(this.showIdealWeight("guess"));
      }

      if (risk == "heart" || risk == "cancer") {
        if (risk == "cancer") useMultiplier = 0.0001;
        if (risk == "heart") useMultiplier = 0.00001;
        console.log(
          "SNOKECHECKL:",
          parseFloat(level),
          parseFloat(
            this.microLivesLostInYear(
              "smoking",
              this.userLifestyleSmokes,
              this.userLifestyleSmokesFreq,
              1
            ) * useMultiplier
          )
        );
        level =
          parseFloat(level) +
          parseFloat(
            this.microLivesLostInYear(
              "smoking",
              this.userLifestyleSmokes,
              this.userLifestyleSmokesFreq,
              1
            ) * useMultiplier
          );
        console.log("SNOKECHECKL1:", parseFloat(level));
        if (risk == "cancer") useMultiplier = 0.00001;
        if (risk == "heart") useMultiplier = 0.0001;
        if (this.showIdealWeight("guess") > 7)
          level = parseFloat(level) + parseFloat(this.showIdealWeight("guess"));
        console.log("SNOKECHECKL2:", parseFloat(level));
      }

      // return values
      if (level >= 35) {
        writtenLevel = "dangerously high";
        numeralLevel = 7;
      }
      if (level < 35) {
        writtenLevel = "extremely high";
        numeralLevel = 6;
      }
      if (level < 30) {
        writtenLevel = "very high";
        numeralLevel = 5;
      }
      if (level < 25) {
        writtenLevel = "high";
        numeralLevel = 4;
      }
      if (level < 20) {
        writtenLevel = "medium";
        numeralLevel = 3;
      }

      if (level < 10) {
        writtenLevel = "low";
        numeralLevel = 2;
      }
      if (level <= 9) {
        writtenLevel = "unlikely";
        numeralLevel = 1;
      }
      if (level <= 7) {
        writtenLevel = "";
        numeralLevel = 0;
      }
      // return risks
      if (risk == "alzheimers") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }

      if (risk == "diabetes") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "heart") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "cancer") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
      if (risk == "soda") {
        if (type == 0) return writtenLevel;
        return numeralLevel;
      }
    },
    getUserMicroLivesIn(type = "min") {
      //https://understandinguncertainty.org/microlives
      // age * 17531.6255; //half hours in a year
      let total = 0;
      total += parseFloat(
        this.microLivesLostInYear(
          "alcohol",
          this.userLifestyleAlcohol,
          this.userLifestyleAlcoholFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "soda",
          this.userLifestyleSoda,
          this.userLifestyleSodaFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "smoking",
          this.userLifestyleSmokes,
          this.userLifestyleSmokesFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "meat",
          this.userLifestyleMeat,
          this.userLifestyleMeatFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "seafood",
          this.userLifestyleSeafood,
          this.userLifestyleSeafoodFreq,
          2
        )
      );
      total += parseFloat(
        this.microLivesLostInYear(
          "dairy",
          this.userLifestyleDairy,
          this.userLifestyleDairyFreq,
          2
        )
      );
      if (this.userLifestyleSedentary >= 7) {
        total += parseFloat(
          this.microLivesLostInYear(
            "sedentary",
            this.userLifestyleSedentary,
            undefined,
            2
          )
        );
      }
      if (this.showIdealWeight("guess") >= 9) {
        total += parseFloat(
          this.microLivesLostInYear(
            "weight",
            this.showIdealWeight("guess"),
            undefined,
            2
          )
        );
      }
      if (type == "guess" || type == 0) {
        if (total / 60 / 24 / 365.25 >= 1)
          return `${(total / 60 / 24 / 365.25).toFixed(2)} years`;
        if (total / 60 / 24 >= 1) return `${(total / 60 / 24).toFixed(2)} days`;
        if (total / 60 >= 1) return `${(total / 60).toFixed(2)} hours`;
        if (total >= 1) return `${total.toFixed(2)} minutes`;
      }
      if (type == "ml") return `${total.toFixed(2) / 30} microlives`;
      if (type == "min") return `${total.toFixed(2)} minutes`;
      if (type == "hour") return `${(total / 60).toFixed(2)} hours`;
      if (type == "days") return `${(total / 60 / 24).toFixed(2)} hours`;
      if (type == "years")
        return `${(total / 60 / 24 / 365.25).toFixed(2)} hours`;
    },
    microLivesLostInYear(
      kind = "smoking",
      amount = 1,
      freq = 52.177457,
      type = 0
    ) {
      // https://sci-hub.se/10.1136/bmj.e8223
      // how many hours do you sit/lie down at: work, home, elsewhere; if you smoke how many each day?
      // let mlife = 0;
      // all 1 MicroLife/unit or hour
      let mlDividedBy = 2; //
      if (
        kind == "smoking" ||
        kind == "alcohol" ||
        kind == "sitting" ||
        kind == "meat"
      ) {
        mlDividedBy = 2; // 2 units/hours is worth 1 microlife
      }
      if (kind == "soda") {
        mlDividedBy = 2.5;
      }
      if (kind == "seafood") {
        mlDividedBy = 4;
      }

      if (kind == "dairy") {
        mlDividedBy = 6;
      }
      if (kind == "weight") {
        mlDividedBy = 5;
        freq = 365.25;
      }
      if (type == 1)
        return (
          parseFloat(amount / mlDividedBy) *
          parseFloat(freq * 1) *
          30
        ).toFixed(2); // just microlives
      if (type == 2)
        return Math.ceil(
          parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
        ).toFixed(2); // minutes

      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) /
          60 /
          24 /
          365.25 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) /
          60 /
          24 /
          365.25
        ).toFixed(2)} years`; // years
      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) /
          60 /
          24 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) /
          60 /
          24
        ).toFixed(2)} days`; // days
      if (
        (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30) / 60 >=
        1
      )
        return `${(
          Math.ceil(
            parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
          ) / 60
        ).toFixed(2)} hours`; // hours
      if (parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30 >= 1)
        return `${Math.ceil(
          parseFloat(amount / mlDividedBy) * parseFloat(freq * 1) * 30
        ).toFixed(2)} minutes`; // minutes
    },
    bfpToCategory(type = 0, bfp = 0) {
      const cats = [
        "Essential Fat",
        "Athletic",
        "Fitness",
        "Average",
        "Overweight",
        "Overweight+",
      ];
      const maleVals = [5, 13, 17, 24, 32, 100]; //just upper limits needed
      const femaleVals = [13, 20, 24, 31, 40, 100];

      let foundAtIndex = null;
      let curGender = null;

      if (type === 0) curGender = maleVals;
      if (type === 1) curGender = femaleVals;
      console.log("CURG:", curGender, type);
      for (let index = 0; index < curGender.length; index++) {
        if (bfp <= curGender[index] && foundAtIndex === null) {
          foundAtIndex = index;
          break;
        }
      }
      return cats[foundAtIndex];
      //       Essential fat	10-13%	2-5%
      // Athletes	14-20%	6-13%
      // Fitness	21-24%	14-17%
      // Average	25-31%	18-24%
      // Obese	32+%	25+%
    },
    navyBFP(type = 0) {
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6650177/
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9008774/
      const cmToInch = 0.393701;
      const inchToCm = 2.54;
      let userNeckInch = this.userNeck * cmToInch; //to inch
      let userWaistInch = this.userWaist * cmToInch; //to inch
      let userHipInch = this.userHip ? this.userHip * cmToInch : 0; //to inch
      let userHeightInch = this.userHeight * cmToInch; //to inch
      let weight = this.userWeight;
      let maleBFP =
        86.01 * Math.log10(userWaistInch - userNeckInch) -
        70.041 * Math.log10(userHeightInch) +
        36.76;
      let femaleBFP =
        163.205 * Math.log10(userWaistInch + userHipInch - userNeckInch) -
        97.684 * Math.log10(userHeightInch) -
        78.387;

      if (type === 0) {
        return maleBFP;
      }
      if (type === 1) {
        if (userHipInch === 0) return 0;
        return femaleBFP;
      }
      if (type === 2) {
        //LBM
        return (weight - weight * (maleBFP * 0.01)).toFixed(2);
      }
      if (type === 3) {
        //LBM
        if (userHipInch === 0) return 0;
        return (weight - weight * (femaleBFP * 0.01)).toFixed(2);
      }
      if (type === 4) {
        //BFM
        return (weight - (weight - weight * (maleBFP * 0.01))).toFixed(2);
      }
      if (type === 5) {
        //BFM
        if (userHipInch === 0) return 0;
        return (weight - (weight - weight * (femaleBFP * 0.01))).toFixed(2);
      }
    },
    v02Max(type = 0) {
      //
      let bmi = this.getBMI();
      let age = this.getMetabolicAge();
      let weight = this.userWeight;
      let rhr = this.userRHR;
      // console.log("userRHR:", rhr);
      let pai =
        this.userExerciseEffort +
        this.userExerciseFrequency +
        this.userExerciseLength;
      let wc = this.userWaist;
      //https://codeberg.org/Freeyourgadget/Gadgetbridge/issues/1905
      let maleBMI =
        92.05 - 0.327 * age - 0.933 * bmi - 0.167 * rhr + 0.257 * pai;
      let femaleBMI =
        70.77 - 0.244 * age - 0.749 * bmi - 0.107 * rhr + 0.213 * pai;

      let maleWaist =
        100.27 - 0.296 * age - 0.369 * wc - 0.155 * rhr + 0.266 * pai;
      let femaleWaist =
        74.74 - 0.247 * age - 0.259 * wc - 0.114 * rhr + 0.198 * pai;
      // console.log(
      //   "maxHR:",
      //   this.showMaxHeartRate(),
      //   parseInt(this.showMaxHeartRate()) / parseInt(rhr),
      //   parseInt(rhr)
      // );
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7966187/
      let maleVo2Max = -0.0049 * (age * age) + 0.0884 * age + 48.263;
      let femaleVo2Max = -0.0021 * (age * age) - 0.1407 * age + 43.066;
      let vo2 = 15 * (parseInt(this.showMaxHeartRate()) / parseInt(rhr));
      // console.log(
      //   "maxHR:",
      //   this.showMaxHeartRate(),
      //   parseInt(this.showMaxHeartRate()) / parseInt(rhr),
      //   parseInt(rhr),
      //   vo2
      // );
      if (type == 1) return vo2;
      if (type == 2) return `${((maleVo2Max + vo2) / 2).toFixed(2)} ml`;
      if (type == 3) return `${((femaleVo2Max + vo2) / 2).toFixed(2)} ml`;

      // if (type >= 2 && type <= 3) return `${vo2.toFixed(2)} ml`;
      if (type == 4) return (maleVo2Max + vo2) / 2;
      if (type == 5) return (femaleVo2Max + vo2) / 2;
      if (type == 6) return `${((maleVo2Max + vo2) / 2).toFixed(2)} ml`;
      if (type == 7) return `${((femaleVo2Max + vo2) / 2).toFixed(2)} ml`;

      if (type == 8) return maleBMI;
      if (type == 9) return femaleBMI;
      if (type == 10) return `${maleBMI.toFixed(2)} ml`;
      if (type == 11) return `${femaleBMI.toFixed(2)} ml`;
      if (type == 12) return `${maleWaist.toFixed(2)} ml`;
      if (type == 13) return `${femaleWaist.toFixed(2)} ml`;

      //https://www.academia.edu/27916980/VO2_max_makes_bridge_between_aerobic_and_anaerobic_exercise
    },
    vo2MaxRate(type = 0) {
      //https://www.academia.edu/27916980/VO2_max_makes_bridge_between_aerobic_and_anaerobic_exercise
      let age = this.getMetabolicAge();
      if (type == 0) {
        let o2Max = this.v02Max(4);
        if (o2Max > 60 && age <= 25) return "excellent";
        if (o2Max > 56 && age <= 35) return "excellent";
        if (o2Max > 51 && age <= 45) return "excellent";
        if (o2Max > 45 && age <= 55) return "excellent";
        if (o2Max > 41 && age < 65) return "excellent";
        if (o2Max > 41 && age >= 65) return "excellent";

        if (o2Max >= 52 && age <= 25) return "good";
        if (o2Max >= 49 && age <= 35) return "good";
        if (o2Max >= 43 && age <= 45) return "good";
        if (o2Max >= 39 && age <= 55) return "good";
        if (o2Max >= 36 && age < 65) return "good";
        if (o2Max >= 33 && age >= 65) return "good";

        if (o2Max >= 47 && age <= 25) return "above average";
        if (o2Max >= 43 && age <= 35) return "above average";
        if (o2Max >= 39 && age <= 45) return "above average";
        if (o2Max >= 36 && age <= 55) return "above average";
        if (o2Max >= 32 && age < 65) return "above average";
        if (o2Max >= 29 && age >= 65) return "above average";

        if (o2Max >= 42 && age <= 25) return "average";
        if (o2Max >= 40 && age <= 35) return "average";
        if (o2Max >= 35 && age <= 45) return "average";
        if (o2Max >= 32 && age <= 55) return "average";
        if (o2Max >= 30 && age < 65) return "average";
        if (o2Max >= 26 && age >= 65) return "average";

        if (o2Max >= 37 && age <= 25) return "below average";
        if (o2Max >= 35 && age <= 35) return "below average";
        if (o2Max >= 31 && age <= 45) return "below average";
        if (o2Max >= 29 && age <= 55) return "below average";
        if (o2Max >= 26 && age < 65) return "below average";
        if (o2Max >= 22 && age >= 65) return "below average";

        if (o2Max >= 30 && age <= 25) return "poor";
        if (o2Max >= 30 && age <= 35) return "poor";
        if (o2Max >= 26 && age <= 45) return "poor";
        if (o2Max >= 25 && age <= 55) return "poor";
        if (o2Max >= 22 && age < 65) return "poor";
        if (o2Max >= 20 && age >= 65) return "poor";

        if (o2Max < 30 && age <= 25) return "very poor";
        if (o2Max < 30 && age <= 35) return "very poor";
        if (o2Max < 26 && age <= 45) return "very poor";
        if (o2Max < 25 && age <= 55) return "very poor";
        if (o2Max < 22 && age < 65) return "very poor";
        if (o2Max < 20 && age >= 65) return "very poor";
      }

      if (type == 1) {
        let o2Max = this.v02Max(5); //female
        if (o2Max > 56 && age <= 25) return "excellent";
        if (o2Max > 52 && age <= 35) return "excellent";
        if (o2Max > 45 && age <= 45) return "excellent";
        if (o2Max > 40 && age <= 55) return "excellent";
        if (o2Max > 37 && age < 65) return "excellent";
        if (o2Max > 32 && age >= 65) return "excellent";

        if (o2Max >= 47 && age <= 25) return "good";
        if (o2Max >= 45 && age <= 35) return "good";
        if (o2Max >= 38 && age <= 45) return "good";
        if (o2Max >= 34 && age <= 55) return "good";
        if (o2Max >= 32 && age < 65) return "good";
        if (o2Max >= 28 && age >= 65) return "good";

        if (o2Max >= 42 && age <= 25) return "above average";
        if (o2Max >= 39 && age <= 35) return "above average";
        if (o2Max >= 34 && age <= 45) return "above average";
        if (o2Max >= 31 && age <= 55) return "above average";
        if (o2Max >= 28 && age < 65) return "above average";
        if (o2Max >= 25 && age >= 65) return "above average";

        if (o2Max >= 38 && age <= 25) return "average";
        if (o2Max >= 35 && age <= 35) return "average";
        if (o2Max >= 31 && age <= 45) return "average";
        if (o2Max >= 28 && age <= 55) return "average";
        if (o2Max >= 25 && age < 65) return "average";
        if (o2Max >= 22 && age >= 65) return "average";

        if (o2Max >= 33 && age <= 25) return "below average";
        if (o2Max >= 31 && age <= 35) return "below average";
        if (o2Max >= 27 && age <= 45) return "below average";
        if (o2Max >= 25 && age <= 55) return "below average";
        if (o2Max >= 22 && age < 65) return "below average";
        if (o2Max >= 19 && age >= 65) return "below average";

        if (o2Max >= 28 && age <= 25) return "poor";
        if (o2Max >= 26 && age <= 35) return "poor";
        if (o2Max >= 22 && age <= 45) return "poor";
        if (o2Max >= 20 && age <= 55) return "poor";
        if (o2Max >= 18 && age < 65) return "poor";
        if (o2Max >= 17 && age >= 65) return "poor";

        if (o2Max < 28 && age <= 25) return "very poor";
        if (o2Max < 26 && age <= 35) return "very poor";
        if (o2Max < 22 && age <= 45) return "very poor";
        if (o2Max < 20 && age <= 55) return "very poor";
        if (o2Max < 18 && age < 65) return "very poor";
        if (o2Max < 17 && age >= 65) return "very poor";
      }
    },
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
    toggleCitationModal() {
      if (this.showCitationModal) {
        setTimeout(() => {
          this.showCitationModal = !this.showCitationModal;
        }, 500);
      } else {
        this.showCitationModal = !this.showCitationModal;
      }

      console.log(
        "toggleCITMod:",
        this.showCitationModal,
        this.showCitationModal
      );
    },
    citation(
      id = 0,
      name = "",
      caption = "",
      short = "",
      summary = "",
      why = "",
      theme = ""
    ) {
      this.showCitationModal = true;
      this.citationName = name;
      this.citationID = id;
      this.citationCaption = caption;
      this.citationShort = short;
      this.citationSummary = summary;
      this.citationWhy = why;
      this.citationTheme = theme;
      console.log("seding emitter", this.$route, this.$router);
      console.log("CITE:", name, id, this.showCitationModal);
      console.log("citation", id, name, caption, short, summary, why, theme);
      console.log("parent:", this.$parent.$data);
      this.$emit("citation", id, name, caption, short, summary, why, theme);
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
      LocalStorage.setItem("userRHR", this.userRHR);
      LocalStorage.setItem("userExerciseFrequency", this.userExerciseFrequency);
      LocalStorage.setItem("userExerciseEffort", this.userExerciseEffort);
      LocalStorage.setItem("userExerciseLength", this.userExerciseLength);
      LocalStorage.removeItem("userLevel");
      LocalStorage.setItem("user.level.number", this.userLevel);
      LocalStorage.setItem("userGender", this.userGender);

      //points
      LocalStorage.setItem("user.points.xp", this.userBasePoints.xp);
      LocalStorage.setItem("user.points.hp", this.userBasePoints.hp);
      LocalStorage.setItem("user.points.cp", this.userBasePoints.cp);
      LocalStorage.setItem("userConcerns", this.userConcerns);

      LocalStorage.setItem(
        "user.lifestyle.alcohol.count",
        this.userLifestyleAlcohol
      );
      LocalStorage.setItem(
        "user.lifestyle.alcohol.freq",
        this.userLifestyleAlcoholFreq
      );
      LocalStorage.setItem("user.lifestyle.soda.count", this.userLifestyleSoda);
      LocalStorage.setItem(
        "user.lifestyle.soda.freq",
        this.userLifestyleSodaFreq
      );
      LocalStorage.setItem(
        "user.lifestyle.smokes.count",
        this.userLifestyleSmokes
      );
      LocalStorage.setItem(
        "user.lifestyle.smokes.freq",
        this.userLifestyleSmokesFreq
      );
      LocalStorage.setItem("user.lifestyle.meat.count", this.userLifestyleMeat);
      LocalStorage.setItem(
        "user.lifestyle.meat.freq",
        this.userLifestyleMeatFreq
      );
      LocalStorage.setItem(
        "user.lifestyle.seafood.count",
        this.userLifestyleSeafood
      );
      LocalStorage.setItem(
        "user.lifestyle.seafood.freq",
        this.userLifestyleSeafoodFreq
      );
      LocalStorage.setItem(
        "user.lifestyle.dairy.count",
        this.userLifestyleDairy
      );
      LocalStorage.setItem(
        "user.lifestyle.dairy.freq",
        this.userLifestyleDairyFreq
      );
      LocalStorage.setItem(
        "user.lifestyle.sedentary.count",
        this.userLifestyleSedentary
      );
      LocalStorage.setItem("user.body.goal", this.userBodyGoal);
    },
    flipGender(type = 0) {
      console.log("flipping to:", type);
      if (type === 0) {
        let allMale = document.querySelectorAll(".maleChart");
        let allFemale = document.querySelectorAll(".femaleChart");
        for (let index = 0; index < allMale.length; index++) {
          allMale[index].classList.remove("isHidden");
          allFemale[index].classList.add("isHidden");
          allMale[index].colSpan = "2";
          allFemale[index].colSpan = "1";
        }
        console.log("werttttffff:~~");
        // console.log("Flipah:", this.$refs.flipMale.classList);
        // this.$refs.flipMale.classList.add("bg-primary");
        // this.$refs.flipMale.classList.remove("bg-secondary");
        // this.$refs.flipFemale.classList.remove("bg-secondary");
        // this.$refs.flipFemale.classList.remove("bg-primary");
        // document.querySelectorAll(".maleChart").classList.remove("isHidden");
      } else {
        let allMale = document.querySelectorAll(".maleChart");
        let allFemale = document.querySelectorAll(".femaleChart");
        for (let index = 0; index < allMale.length; index++) {
          allMale[index].classList.add("isHidden");
          allFemale[index].classList.remove("isHidden");
          allMale[index].colSpan = "1";
          allFemale[index].colSpan = "2";
        }
        // this.$refs.flipMale.classList.remove("bg-primary");
        // this.$refs.flipMale.classList.add("bg-secondary");
        // this.$refs.flipFemale.classList.add("bg-primary");
        // this.$refs.flipFemale.classList.remove("bg-secondary");
        // document.querySelectorAll(".maleChart").classList.add("isHidden");
        //document.querySelectorAll(".maleChart").classList.toggle("isHidden");
      }
      this.userGender = type;
      this.saveUserData();
      console.log("flipped to:", this.userGender);
    },
    convertHeightToCM() {
      if (String(this.userHeight).includes("'")) {
        let usrhv = String(this.userHeight).split("'");

        return usrhv[0] * 30.48 + usrhv[1] * 2.54;
      } else {
        this.saveUserData();
        return this.userHeight;
      }
    },
    convertHeightToFT() {
      if (String(this?.userHeight).includes("'")) {
        this.saveUserData();
        return this.userHeight;
      } else {
        this.saveUserData();
        let usrhv = String(String(this.userHeight) * 0.0328084).split(".");

        return usrhv[0] + "'" + (parseFloat("0." + usrhv[1]) * 12).toFixed(0);
      }
    },
    activityToMet(type = "sleep") {
      //  https://onlinelibrary.wiley.com/doi/pdf/10.1002/clc.4960130809
      // https://community.plu.edu/~chasega/met.html
      if (type === "sleep") return 0.9;
      if (type === "sit") return 1.3;
      if (type === "stand") return 1.8;
      if (type === "driving") return 2;
      if (type === "clean") return 3.5;
      if (type === "cook") return 2.5;
      if (type === "dishes") return 2.2;
      if (type === "washwindows") return 4.9;
      if (type === "washfloor") return 3.3;
      if (type === "yardwork") return 5;
      if (type === "shoveling") return 8.5;

      if (type === "walk") return 2;
      if (type === "walk_medium") return 5;
      if (type === "jog") return 6.3;
      if (type === "run") return 11.2;
      if (type === "stairs") return 4.7;

      if (type === "hitt") return 8;
      if (type === "calisthenics") return 5;
      if (type === "hiking") return 6;
      if (type === "dance") return 5;
      if (type === "rowing_slow") return 5.5; //4km
      if (type === "rowing_medium") return 13.5; //12km
      if (type === "row_fast") return 19.1; //20km
      if (type === "climb") return 1.8;
      if (type === "martialarts") return 10.5;
      if (type === "jumprope") return 11;
      if (type === "skateboarding") return 6.5;
      if (type === "yoga") return 2.5;

      if (type === "bike_slow") return 5;
      if (type === "bike") return 8;
      if (type === "bike_fast") return 10;
      if (type === "swim") return 6;
      if (type === "tennis_singles") return 8;

      if (type === "sports") return 10;

      if (type === "weightlift_light") return 3.5;
      if (type === "weightlift_heavy") return 7;
    },
    getMetToCal(type = 0, activityMet = "sleep", minutes = 1) {
      let activityValue = this.activityToMet(activityMet);
      let met = (activityValue * 3.5 * this.userWeight) / 200; // calories burnt/minute
      if (type === 0) {
        return (met * minutes).toFixed(2);
      }
    },

    showMaxHeartRate(percent = 100) {
      // let maxHR = 220 - this.getMetabolicAge(); // OG Formula,
      let maxHR = 208 - 0.7 * this.getMetabolicAge(); // Tanaka Formula (2001)
      // hunt https://sci-hub.se/10.1111/j.1600-0838.2012.01445.x
      //https://pubmed.ncbi.nlm.nih.gov/22376273/
      // maxHR = 211 - 0.64 * this.getMetabolicAge(); //Hunt Formula (2012)

      let fox = 220 - this.getMetabolicAge(); // OG Formula,
      let tanaka = 208 - 0.7 * this.getMetabolicAge(); // Tanaka Formula (2001)
      let hunt = 211 - 0.64 * this.getMetabolicAge(); //Hunt Formula (2012)
      maxHR = (fox + tanaka + hunt) / 3;
      // console.log(
      //   "maxHR:",
      //   percent,
      //   percent * 0.01,
      //   maxHR * (80 * 0.01),
      //   (percent * 0.01 * maxHR).toFixed(0)
      // );
      return (maxHR * percent * 0.01).toFixed(0);
    },
    show1RM(type = 0) {
      let useLB = this.userKG ? 1 : 1; //
      let guessMale =
        this.userWeight *
        (0.676 * (0.149 * (this.userSkill * 0.46) + 1)) *
        useLB;
      let guessFemale =
        this.userWeight *
        (0.434 * (0.149 * (this.userSkill * 0.64) + 1)) *
        useLB;
      let lossOfStrength =
        this.userAge - 39 < 0 ? 0 : (this.userAge - 39) * 1.5;
      let unitKG = this.userKG ? " KG" : " LB";

      // let unitCM = this.userCM ? ' CM' : ' FT'
      let guessMale2 = guessMale - guessMale * (lossOfStrength * 0.01);
      let guessFemale2 = guessFemale - guessFemale * (lossOfStrength * 0.01);

      // get percentages from guessMale & guessFemale bases
      if (type > 100 && type < 201) {
        return (guessMale2 * ((type - 100) * 0.01)).toFixed(0) + `${unitKG}`;
      }
      if (type > 200 && type < 301) {
        return (guessFemale2 * ((type - 200) * 0.01)).toFixed(0) + `${unitKG}`;
      }

      if (type === 0) return guessMale;
      if (type === 1) return guessFemale;
      if (type === 2) return guessMale2.toFixed(2) + `${unitKG}`;
      if (type === 3) return guessFemale2.toFixed(2) + `${unitKG}`;
      if (type === 4) return guessMale2.toFixed(0) + `${unitKG}`;
      if (type === 5) return guessFemale2.toFixed(0) + `${unitKG}`;
    },
    showIdealWeight(type = 0) {
      let useLB = this.userKG ? 1 : 2.20462;
      let userHeight = this.convertHeightToCM();
      let userWeight = this.userWeight;
      let guessMale1 = 48 + (2.7 * (userHeight - 152)) / 2.64;
      let guessMale2 = 50 + (2.3 * (userHeight - 152)) / 2.64;
      let guessMale3 = 52 + (1.9 * (userHeight - 152)) / 2.64;
      let guessMale4 = 56.2 + (1.41 * (userHeight - 152)) / 2.64;

      let guessFemale1 = 45.5 + (2.2 * (userHeight - 152)) / 2.64;
      let guessFemale2 = 45.5 + (2.3 * (userHeight - 152)) / 2.64;
      let guessFemale3 = 49 + (1.7 * (userHeight - 152)) / 2.64;
      let guessFemale4 = 53.1 + (1.36 * (userHeight - 152)) / 2.64;

      let guessMaleAvg =
        (guessMale1 + guessMale2 + guessMale3 + guessMale4) / 4;
      let guessFemaleAvg =
        (guessFemale1 + guessFemale2 + guessFemale3 + guessFemale4) / 4;

      let unitKG = this.userKG ? " KG" : " LB";
      let maleWeightDiff = this.userWeight - guessMaleAvg * useLB;
      let femaleWeightDiff = this.userWeight - guessFemaleAvg * useLB;

      let difMod = "";
      if (maleWeightDiff > 0) difMod = "+";

      if (type === 0) return (guessMaleAvg * useLB).toFixed(2) + `${unitKG}`;
      if (type === 1) return (guessFemaleAvg * useLB).toFixed(2) + `${unitKG}`;
      if (type === 2) return difMod + maleWeightDiff.toFixed(2) + `${unitKG}`;
      if (type === 3) return difMod + femaleWeightDiff.toFixed(2) + `${unitKG}`;
      if (type === 4) return maleWeightDiff.toFixed(2);
      if (type === 5) return femaleWeightDiff.toFixed(2);

      if (type === 6) return (userWeight * 1).toFixed(2) + `${unitKG}`;

      if (type === "guess") {
        if (this.userGender === 0)
          return (this.userWeight - guessMaleAvg).toFixed(2);
        if (this.userGender === 1)
          return (this.userWeight - guessFemaleAvg).toFixed(2);
      }

      if (type === -1) return userWeight * useLB;
    },
    getBMI(type = 0) {
      this.saveUserData();
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmi = ((this.userWeight * useLB) / (userHeight * userHeight)) * 10000;
      let category = [
        "Severe Thinness",
        "Moderate Thinness",
        "Mild Thinness",
        "Good",
        "Ideal",
        "Overweight",
        "Overweight Class 1",
        "Overweight Class 2",
        "Overweight Class 3",
      ];
      if (this.userSkill > 0) {
        bmi = bmi - this.userSkill;
      }

      if (type === 0) return bmi.toFixed(2);
      if (type === 1) {
        if (bmi < 16) return category[0]; // severely thin
        if (bmi >= 16.01 && bmi < 17) return category[1];
        if (bmi >= 17 && bmi < 18) return category[2];
        if (bmi >= 18 && bmi < 18.4) return category[3];
        if (bmi >= 18.4 && bmi < 25) return category[4];
        if (bmi >= 25 && bmi < 30) return category[5];
        if (bmi >= 30 && bmi < 35) return category[6];
        if (bmi >= 35 && bmi < 40) return category[7];
        if (bmi > 40) return category[8];
      }
    },
    getBMR(type = 0) {
      const unit = " Cal";
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmrHarMale =
        13.397 * this.userWeight * useLB +
        4.799 * userHeight -
        5.677 * this.userAge +
        88.362;
      let bmrHarFemale =
        9.247 * this.userWeight * useLB +
        3.098 * userHeight -
        4.33 * this.userAge +
        447.593;
      let bmrMifMale =
        10 * this.userWeight * useLB + 6.25 * userHeight - 5 * this.userAge + 5;
      let bmrMifFemale =
        10 * this.userWeight * useLB +
        6.25 * userHeight -
        5 * this.userAge +
        161;
      let bmrRosaMale =
        88.362 +
        4.799 * this.userHeight +
        13.397 * this.userWeight * useLB -
        5.677 * this.userAge;
      let bmrRosaFemale =
        447.593 +
        3.098 * this.userHeight +
        9.247 * this.userWeight * useLB -
        4.33 * this.userAge;

      let bmrAvgMale = (bmrHarMale + bmrMifMale + bmrRosaMale) / 3;
      let bmrAvgFemale = (bmrHarFemale + bmrMifFemale + bmrRosaFemale) / 3;
      bmrAvgMale = bmrRosaMale;
      bmrAvgFemale = bmrRosaFemale;
      let maxLooseMale = bmrAvgMale + bmrAvgMale * -0.25;
      let maxLooseFemale = bmrAvgFemale + bmrAvgFemale * -0.25;
      let looseMale = bmrAvgMale + bmrAvgMale * -0.15;
      let looseFemale = bmrAvgFemale + bmrAvgFemale * -0.15;
      let gainMale = bmrAvgMale + bmrAvgMale * 0.5;
      let gainFemale = bmrAvgFemale + bmrAvgFemale * 0.5;
      let maintainMale = bmrAvgMale + bmrAvgMale * 0.2;
      let maintainFemale = bmrAvgFemale + bmrAvgFemale * 0.2;

      if (type === 0) return bmrAvgMale.toFixed(0) + unit;
      if (type === 1) return bmrAvgFemale.toFixed(0) + unit;

      if (type === -1) return looseMale.toFixed(0) + unit;
      if (type === -2) return looseFemale.toFixed(0) + unit;

      if (type === -3) return maxLooseMale.toFixed(0) + unit;
      if (type === -4) return maxLooseFemale.toFixed(0) + unit;

      if (type === 2) return maintainMale.toFixed(0) + unit;
      if (type === 3) return maintainFemale.toFixed(0) + unit;

      if (type === 4) return gainMale.toFixed(0) + unit;
      if (type === 5) return gainFemale.toFixed(0) + unit;
    },
    //get rmr ?
    getRMR(type = 0) {
      let useLB = this.userKG ? 1 : 0.453592;
      const fOxfordMale = [
        "61.0:-33.7",
        "23.3:514",
        "18.4:581",
        "16.0:545",
        "14.2:593",
        "13.5:514",
      ];
      const fOxfordFemale = [
        "58.9:-23.1",
        "20.1:507",
        "11.1:761",
        "13.1:558",
        "9.74:694",
        "10.1:569",
      ];
      if (type == 0) {
        //oxford male
        if (this.userAge >= 60) {
          const formula = fOxfordMale[5].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 30) {
          const formula = fOxfordMale[4].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 18) {
          const formula = fOxfordMale[3].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 10) {
          const formula = fOxfordMale[2].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 3) {
          const formula = fOxfordMale[1].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 0) {
          const formula = fOxfordMale[0].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
      }
      if (type == 1) {
        //oxford female
        if (this.userAge >= 60) {
          const formula = fOxfordFemale[5].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 30) {
          const formula = fOxfordFemale[4].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 18) {
          const formula = fOxfordFemale[3].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 10) {
          const formula = fOxfordFemale[2].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 3) {
          const formula = fOxfordFemale[1].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
        if (this.userAge >= 0) {
          const formula = fOxfordFemale[0].split(":");
          return (
            parseFloat(formula[0]) * (this.userWeight * useLB) +
            parseFloat(formula[1])
          ).toFixed(0);
        }
      }
    },

    estBodyFatFromBMI(type = 0) {
      //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3263863/#s5title
      // BF% = –44.988 + (0.503 × age) + (10.689 × sex) + (3.172 × BMI) – (0.026 × BMI2) + (0.181 × BMI × sex) – (0.02 × BMI × age) – (0.005 ×BMI2 × sex) + (0.00021 × BMI2 × age)

      let bmi = this.getBMI();
      let age = this.getMetabolicAge();
      let weight = this.userWeight;
      let baseBF = 1.2 * bmi + 0.23 * this.userAge;
      // let male = (baseBF - 16.2).toFixed(1);
      // let female = (baseBF - 5.4).toFixed(1);
      // if (type === 0) return male;
      // if (type === 1) return female;
      let sex = type;
      if (type > 1 && type <= 3) sex -= 2;
      if (type > 3) sex -= 4;
      let bfp =
        -44.988 +
        0.503 * age +
        10.689 * sex +
        3.172 * bmi -
        0.026 * bmi * bmi +
        0.181 * bmi * sex -
        0.02 * bmi * age -
        0.005 * (bmi * bmi) * sex +
        0.00021 * (bmi * bmi) * age;
      // console.log("sex:", type, sex, bmi, age, "!!");
      if (type <= 1) return bfp.toFixed(2);

      //show lean mass
      if (type > 1 && type <= 3)
        return (weight - weight * (bfp * 0.01)).toFixed(2);
      //show body fat mass
      if (type > 3)
        return (weight - (weight - weight * (bfp * 0.01))).toFixed(2);
    },
    getMetabolicAge() {
      //https://pubmed.ncbi.nlm.nih.gov/33666897/
      let useLB = this.userKG ? 1 : 0.453592;
      let userHeight = this.convertHeightToCM();
      let bmi = ((this.userWeight * useLB) / (userHeight * userHeight)) * 10000;
      let userAge = parseInt(this.userAge);

      if (bmi < 16) {
        return userAge + (17 - parseInt(bmi));
      }

      if (bmi < 18) {
        return userAge + 1; // underweight
      }
      if (bmi >= 25 && bmi < 29.9) {
        return userAge + 2; //overweight
      }

      if (bmi > 35) {
        return userAge + (parseInt(bmi) - 30); //obese
      }
      if (bmi > 30) {
        return userAge + 3; //obese
      }
      if (bmi > 18 && bmi < 18.5) {
        return userAge; //yourage
      }
      if (bmi > 18.5 && bmi < 25) {
        return userAge - 1; //ideal
      }
      return this.userAge;

      // // let userHeight = this.convertHeightToCM()
      // let male = (10 * this.userWeight) + (6.25 * this.userHeight) - (5 * this.userAge) -161
      // let female = (10 * this.userWeight) + (6.25 * this.userHeight) - (5 * this.userAge) + 5

      // if(type===0) return male.toFixed(0)
      // if(type===1) return female.toFixed(0)
    },
    toggleCM(yes) {
      this.userCM = yes;
      if (yes) {
        this.$refs.userCMObj.classList.remove("bg-secondary");
        this.$refs.userCMObj.classList.add("bg-info");
        this.$refs.userFTObj.classList.remove("bg-info");
        this.$refs.userFTObj.classList.add("bg-secondary");

        this.userHeight = this.convertHeightToCM();
        this.userHeightImp = null;
        this.$refs.userHeight.type = "number";
      } else {
        this.$refs.userFTObj.classList.remove("bg-secondary");
        this.$refs.userFTObj.classList.add("bg-info");
        this.$refs.userCMObj.classList.remove("bg-info");
        this.$refs.userCMObj.classList.add("bg-secondary");
        this.userHeight = this.convertHeightToFT();
        this.userHeightImp = this.convertHeightToFT();
        this.$refs.userHeight.type = "text";
      }
    },
    toggleKG(yes) {
      this.userKG = yes;
      if (yes) {
        this.$refs.userKGObj.classList.remove("bg-secondary");
        this.$refs.userKGObj.classList.add("bg-info");
        this.$refs.userLBObj.classList.remove("bg-info");
        this.$refs.userLBObj.classList.add("bg-secondary");
      } else {
        this.$refs.userLBObj.classList.remove("bg-secondary");
        this.$refs.userLBObj.classList.add("bg-info");
        this.$refs.userKGObj.classList.remove("bg-info");
        this.$refs.userKGObj.classList.add("bg-secondary");
      }
    },
  },
  mounted() {
    console.log("basemeasure mounted");
    if (this.userHeightImp != "null" && this.userHeightImp !== null)
      this.toggleCM(false);
    // this.toggleCM(this.userCM);
    // this.toggleKG(this.userKG);

    console.log("this.$store.", this.$store);
    console.log("currentGender:", this.userGender);

    // setTimeout(() => {
    //   console.log("filp!!?");
    //   this.flipGender(this.userGender);
    // }, 3000);
    if (this.userGender == 0) this.$refs.flipMale.click();
    if (this.userGender == 1) this.$refs.flipFemale.click();
  },
  computed: {
    citationSummaryFormat() {
      return this.citationSummary.replaceAll("''", '"');
    },
    citationShortFormat() {
      return this.citationShort.replaceAll("''", '"');
    },
    computeDifficultyFromDoctorMouthFood() {
      //<blockquote>""</blockquote>
      if (this.userLevel <= 1)
        return `
        <div class="q-ma-sm"><div class="bg-primary">•Before every meal enjoy:</div>
          <details class="q-ml-md noblink-details"><summary>500ml (2 cups) of cold water</summary>This adds a 44% increase to your metabolism and curbs your appetite:
            <blockquote>
              "...the water group (β = −0.87, P < 0.001) showed a 44% greater decline in weight over the 12 weeks than the nonwater group... consuming 500 ml water prior to each main meal leads to greater weight loss than a hypocaloric diet alone in middle-aged and older adults. [PMID: 19661958]"
            </blockquote>
            <blockquote>
              " This study demonstrates that consumption of a 568 ml water preload immediately before a meal reduces energy intake in non-obese young males. This might therefore be an effective strategy to suppress energy intake in this population and possibly assist with weight management [PMID: 25893719]. "
              </blockquote>
          </details>
          <details class="q-ml-md noblink-details"><summary>A simple salad or serving of fruit</summary>Before every meal eat a salad with a 1 tbsp vinegar, or if short on time, 1 piece of whole fruit (e.g. apple, orange, banana).<br/>Vinegar Boosts AMPK which boosts your metabolism, and a healthy salad, or piece of fruit, reduces your hunger:
            <blockquote>"salads reduced meal energy intake (by 7% for the small portion and 12% for the large)[PMID: 19661687]."</blockquote>
            <blockquote>"Body weight, BMI, visceral fat area, waist circumference, and serum triglyceride levels were significantly lower in both vinegar intake groups than in the placebo group.
              In conclusion, daily intake of vinegar might be useful in the prevention of metabolic syndrome by reducing obesity [PMID: 19661687]."
            </blockquote>
            <blockquote>"vinegar ingestion can promote modest weight loss in obese subjects (Kondo et al. 2009a).
              This is pertinent in light of the fact—as discussed below—that vinegar (acetic acid) has the potential to activate hepatic AMPK [PMID: 24248330]."
            </blockquote>
          </details>
        </div>
        <div class="q-ma-sm"><div class="bg-warning">•Restrictions:</div>
          <details class="q-ml-md noblink-details"><summary>Don't Eat after 7pm</summary>
            Try to avoid snacking at night as it's >50% more likely to become fat tissue:
            <blockquote>
              "Relative to daytime snacking, nighttime snacking significantly decreased fat oxidation (daytime snacking: 52.0 ± 13.6 g/day; nighttime snacking: 45.8 ± 14.0 g/day; P = 0.02) and tended to increase the respiratory quotient (daytime snacking: 0.878 ± 0.022; nighttime snacking: 0.888 ± 0.021; P = 0.09) [PMID: 23174861]."
            </blockquote>
          </details>
        </div>`;

      //don't eat after 7pm
      return "";
    },
    computeDifficultyFromDoctorMouthExercise() {
      if (this.userLevel <= 1) {
        //low mobility, start easy
        if (this.userBodyGoal <= -1) {
          // loose weight
        }
      }

      return "";
    },
  },
};
</script>

<style lang="scss">
body {
  // background: #cfcfcf !important;
  background-image: none !important;
}
.is-card-type {
  position: relative;
  display: block;

  background: $primary;
  border: 2px solid $secondary;
  color: $positive;
  font-size: 1.4em;
  text-align: center;
  padding: 1em;
  overflow-wrap: break-word;
  // padding-bottom: 2em;
  overflow: hidden;
  // overflow-x: scroll;
}
.title-text {
  position: relative;
  top: -0.5em;
  font-size: 1.2em;
  border-bottom: 6px double $secondary;

  text-align: center;

  text-shadow: 2px 2px 0 $accent, 2px -2px 0 $accent, -2px 2px 0 $accent,
    -2px -2px 0 $accent, 2px 0px 0 $accent, 0px 2px 0 $accent,
    -2px 0px 0 $accent, 0px -2px 0 $accent;
}
.is-retro-icon {
  overflow-wrap: break-word;
  overflow-x: hidden;
  // text-overflow: clip;
}
.is-retro-icon .mdi {
  padding: 2px;
  text-shadow: 2px 2px 0 $primary, 2px -2px 0 $primary, -2px 2px 0 $primary,
    -2px -2px 0 $primary, 2px 0px 0 $primary, 0px 2px 0 $primary,
    -2px 0px 0 $primary, 0px -2px 0 $primary;
}
.btn-group {
  display: inline-block;
}
input,
select {
  width: auto;
  max-width: 90%;
}
.mdi-check-outline {
  color: $positive;
}
.text-circle {
  border: 3px solid $negative;
  border-radius: 2em;
  padding: 1em;
}
label {
  border-bottom: 1px thin #000000;
}

.border-selection {
  position: relative;
  border: 4px solid $info;
  border-bottom: 4px solid $info !important;
  background: $positive;
  border-radius: 50%;
}
.border-selection::after {
  content: "◀";
  // right: -2em;
  right: 0.5em;
  top: auto;
  position: relative;
  font-size: 1.45em;
  animation: blinker 2s steps(1, end) infinite;
  // color: $info;
}

.border-selection .mdi {
  position: relative;
  color: #ffffff;
  // animation: colorCycle 2s ease infinite;
}
table {
  border-collapse: collapse;
  border: 2px solid #cccccc;
  padding: 1em;
  position: relative;
  width: 100%;
}
table td {
  padding: 0.5em;
  border-right: 1px dotted $primary;
  position: relative;
}
table th {
  border-right: 1px dotted $primary;
}
.text-is-stamp {
  font-family: "Saira Stencil One", cursive;
  font-size: 1.2em;
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(-3deg);
  top: -0.15em;
  left: 1em;
  text-transform: uppercase;

  color: #000;
  border: 3px double #000;
  border-radius: 7px;
  padding: 1px;
  opacity: 0.99;
  color: #eee;
  // background: #ffffff;
  text-shadow: 1px 1px 0 $dark, 1px -1px 0 $dark, -1px 1px 0 $dark,
    -1px -1px 0 $dark, 1px 1px 0 $dark, 0px 1px 0 $dark, -1px 0px 0 $dark,
    0px -1px 0 $dark;
  // -webkit-box-shadow: inset 1px 1px 7px -2px #000000;
  // box-shadow: inset 1px 1px 2px -1px #000000;
}

@keyframes glower {
  // 0% {
  //   -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  //   -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  //   box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
  // }
  0% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $info,
      0px 0px 20px 0px $secondary, inset 5px 5px 15px 5px $warning;
  }
  50% {
    -webkit-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    -moz-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
  }
  75% {
    -webkit-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    -moz-box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $negative, inset 5px 5px 15px 5px $positive;
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $accent,
      0px 0px 20px 0px $positive, inset 5px 5px 15px 5px $dark;
  }
  100% {
    -webkit-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 0px 0px rgba(45, 255, 196, 0.9);
    box-shadow: 0px 0px 15px 0px $info, 0px 0px 15px 0px $info,
      0px 0px 20px 0px $secondary, inset 5px 5px 15px 5px $warning;
  }
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}

@keyframes colorCycle {
  0% {
    color: $primary !important;
  }
  25% {
    color: $accent !important;
  }
  50% {
    color: $warning !important;
  }
  60% {
    color: $dark !important;
  }

  75% {
    color: $positive !important;
  }
  100% {
    color: $info !important;
  }
}
fieldset {
  border: 4px solid $dark;
  border-top: 4px solid #666 !important;
}
legend {
  // border-top: 4px solid #ff9900;
  font-size: 1.7em;
  padding: 4px;
}

select,
input[type="number"],
input[type="text"],
.q-btn {
  // -moz-appearance: none;
  // -webkit-appearance: none;
  // appearance: none;
  vertical-align: middle;
  outline: none;
  font-size: inherit;
  outline: none !important;
  box-shadow: none;
  // width: 30px;
  min-height: 30px;
  // background: white;
  border-radius: 0% !important;
  // outline: 3px solid $dark !important;
  position: relative;
  margin: 8px;
  padding: 2px;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}

.tiny-input {
  // -moz-appearance: none;
  // -webkit-appearance: none;
  // appearance: none;
  vertical-align: middle;
  outline: none;
  font-size: inherit;
  outline: none !important;
  box-shadow: none;
  // width: 30px;
  min-height: 1em;
  // background: white;
  border-radius: 0% !important;
  // outline: 3px solid $dark !important;
  position: relative;
  margin: 8px;
  padding: 2px;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
  width: 30%;
}
.q-btn {
  padding: 5px;
}
select {
  // text-align: center;
  padding: 1em;
}
select::after {
  content: "▼";
  right: 1px;
  top: -1px;
  position: relative;
  font-size: 2em;
  background: #ff9900;
}
input[type="checkbox"]:checked {
  background: $info;
}
input[type="checkbox"],
input[type="radio"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  vertical-align: middle;
  outline: none;
  font-size: inherit;
  outline: none !important;
  box-shadow: none;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 0% !important;
  // outline: 3px solid $dark !important;
  position: relative;
  margin: 8px;
  padding: 2px;
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
}
input[type="checkbox"]:not(:checked):hover + span,
input[type="checkbox"]:not(:checked):active + span,
input[type="checkbox"]:not(:checked):hover,
input[type="radio"]:not(:checked):hover + span,
input[type="radio"]:not(:checked):active + span,
input[type="radio"]:not(:checked):hover {
  // color: #ff9900;
  // background: #ff0000;
  // border: 1px solid greenyellow;
  // animation: colorCycle 2s ease infinite, glower 3s ease forwards infinite;
  // content: "▶";
  animation: blinker 2s steps(2, end) infinite;
}
input[type="checkbox"]:checked:hover + span,
input[type="checkbox"]:checked:active + span,
input[type="checkbox"]:checked:hover,
input[type="radio"]:checked:hover + span,
input[type="radio"]:checked:active + span,
input[type="radio"]:checked:hover {
  // color: #ff9900;
  // background: #ff0000;
  // border: 1px solid greenyellow;
  // animation: colorCycle 2s ease infinite, glower 3s ease forwards infinite;
  // content: "▶";
  animation: colorCycle 2s ease infinite;
}
input[type="checkbox"]:not(:checked):hover::before,
input[type="radio"]:not(:checked):hover::before {
  box-shadow: none !important;
  content: "▶";
  position: relative;
  left: 0em;
  top: -0.5em;
  font-size: 3em;
  transition: none !important;
}
input[type="checkbox"]:checked:after,
input[type="radio"]:checked:after {
  content: "✕";
  position: absolute;
  font-size: 4em;
  left: -0.05em;
  top: -0.5em;
  bottom: auto;
  // top: auto;
  text-align: center;
  color: $positive;
  justify-content: center;
}
input[type="checkbox"]:checked:hover:after,
input[type="radio"]:checked:hover:after {
  animation: colorCycle 2s ease infinite;
}
input[type="radio"] {
  // transform: rotate(45deg);
  margin-right: 2em;
}
input[type="radio"]:checked:after {
  content: "*";
}

input[type="radio"]:checked {
  background: $accent;
}
input[type="radio"]:not(:checked) {
  // background: $warning;
}
.check-label {
  position: relative;
  font-size: 1.5em;
  // top: -0.5em;
}

.citation {
  position: relative;
  color: $primary;
  font-size: 1em;
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 0.2em;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 1s ease;
}
.citation:hover,
.citation:active {
  opacity: 1;

  filter: grayscale(0%);
  // font-size: 1.1em;
  // padding: 0.1em;
  background: $accent;
  animation: colorCycle 2s ease infinite, glower 3s ease forwards infinite;
  box-shadow: inset 5px 5px 15px 5px #000000;
}
.row td .citation {
  position: relative;
  background: #ff9900;
}
details {
  // margin: 1em;
}
details > summary {
  // content: "dffdfdfd1112";
}
summary::before {
  content: "▶";
  // right: -2em;
  right: 0.25em;
  // top: -0.25em;
  position: relative;
  font-size: 2em;
  animation: blinker 2s steps(1, end) infinite;
  // color: $info;
}

details[open] > summary::after {
  content: "hide this";
  border: 1px solid $negative;
  padding: 0.25em;
  background: $secondary;
  animation: blinker 2s steps(1, end) infinite;
}
details[open] > summary::before {
  content: "▼";
  animation: none;
}
details[open] > summary span {
  display: none;
}
hr {
  height: 1em;
  background: $secondary;
}
.pulseVibrate {
  font-size: 2em;
  animation: pulse-animate 2s linear infinite;
  border-radius: 100%;
}
.pulseBPMTap {
  // font-size: 2em;
  animation: pulse-animate 2s linear infinite;
  // border-radius: 100%;
}

.pulseVibrate:hover {
  color: $info;
}
.pulseVibrate:active {
  color: $negative;
}
.unHighlight {
  // filter: grayscale(100%);
  filter: contrast(0%);
}
.border-double-1 {
  border: 4px double $primary;
}
.border-double-2 {
  border: 6px double $primary;
}
.border-double-3 {
  border: 8px double $primary;
}
.border-positive {
  border-color: $positive;
}
.border-negative {
  border-color: $negative;
}
.border-primary {
  border-color: $primary;
}
.border-info {
  border-color: $info;
}
.border-accent {
  border-color: $accent;
}
.width-100 {
  width: 100%;
}
@keyframes pulse-animate {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  }

  70% {
    transform: scale(1.2);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  90% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(1.1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
.cursive-text,
.cursive-text p {
  font-family: "Ms Madi", cursive;
  font-size: 2em;
}
.noblink-details summary::before {
  animation: none !important;
}
</style>
