<template>
  <div class="blockCursor">
    <!-- <div>
      <video hidden id="webcam" width="640" height="480"></video>
      <canvas id="canvas" width="640" height="480"></canvas>
    </div> -->

    <!-- Then diagnosis: things to avoid, things to eat, things to do/exercise -->
    <!-- Avoid: smoke of any kind, all meat products,  -->
    <!-- you get: no smoking (+10 years) -->
    <!-- https://understandinguncertainty.org/microlives -->

    <div class="questItem shadow">
      <div class="alert alert-primary">
        Doctor: {{ riskFromDoctorMouth("all") }}
        <div class="q-pl-sm q-ma-xs">
          <details>
            <summary>Show full assessment</summary>

            <p>
              Doctor: {{ riskFromDoctorMouth("heart") }}
              {{ riskFromDoctorMouth("alzheimers") }}
              {{ riskFromDoctorMouth("diabetes") }}
              {{ riskFromDoctorMouth("prediabetes") }}
              {{ riskFromDoctorMouth("cancer") }}
            </p>
          </details>
        </div>
        <hr />

        <p>
          Doctor: See your science backed prescription below to
          {{ riskFromDoctorMouth("bodytype", userBodyGoal) }}, as quickly and
          effortlessly as possible{{
            riskFromDoctorMouth("all", "number") > 1
              ? `, as well to help fight off disease and build immunity.`
              : ", as well to help build general immunity and avoid NCD's (Non Communicable Diseases) like Hypertension, Strokes, Type 2 Diabetes, and Cancer."
          }}
        </p>
        <p>
          Doctor: Let's start you off easy and when you complete a level we'll
          push it up a notch and fill a new prescription, sound good? You're
          currently at level {{ userLevel }}.
        </p>

        <!-- <p>
            Doctor: See your prescribed meal plan and exercise guide below...
          </p> -->
        <fieldset>
          <span class="float-right text-h3 opacity-50 rx-float"
            ><q-icon name="fas fa-prescription"></q-icon
          ></span>
          <legend class="text-center">
            <q-icon class="text-h3" name="medication"></q-icon
            >Prescription<q-icon class="text-h3" name="medication"></q-icon>
          </legend>
          <span class="text-h6">Recommended Weekly Meal Plan</span>
          <div class="border-double-1 graphPaper-2">
            <span v-html="computeDifficultyFromDoctorMouthFood"></span>
          </div>
          <span class="text-h6">Recommended Weekly <i></i> Exercise Plan</span>
          <div class="border-double-1 graphPaper-2 q-pa-sm">
            I've put together a few different impact levels, as we all have
            different energy levels on different days. You find them with the
            <q-btn
              @click="this.$router.push({ name: 'player' })"
              color=""
              text-color="black"
              icon="mdi-fire-circle"
            >
              <span>&nbsp;Setlists </span>
            </q-btn>
          </div>
          <span
            class="text-h6"
            v-if="
              userLifestyleSmokes > 0 ||
              (userLifestyleAlcohol >= 2 && userLifestyleAlcoholFreq >= 12) ||
              (userLifestyleSoda >= 2 && userLifestyleSodaFreq >= 12)
            "
          >
            Recommended Lifestyle Changes<br />
          </span>

          <ul class="q-pa-sm normal-ul">
            <li v-if="userLifestyleSmokes > 0"><span>Stop smoking</span></li>

            <li
              v-if="userLifestyleAlcohol >= 2 && userLifestyleAlcoholFreq >= 12"
            >
              <span>Reduce alcohol intake</span>
            </li>
            <li
              class=""
              v-if="userLifestyleSoda >= 2 && userLifestyleSodaFreq >= 12"
            >
              <span
                >Try to drink only
                <ul class="normal-ul">
                  <li>water</li>
                  <li>green tea</li>
                  <li>black coffee</li>
                </ul></span
              >
            </li>
          </ul>
          <div style="width: 99%; border-bottom: 1px solid">
            <span class="text-h5"
              ><q-icon name="fas fa-prescription"></q-icon></span
            >:<span class="cursive-text">Dr. Doctor</span>
          </div>
        </fieldset>
        <!-- <p>{{ riskFromDoctorMouth("all", "number") }}</p>
          {{ showIdealWeight("guess") }}
          <hr /> -->
        <br /><br />
        <details>
          <summary>More details</summary>
          <h4>In Progress...</h4>
          <p>
            These stats show an estimated <i>Reps Max 1 (1RM)</i> of
            {{ show1RM(2) }} for a male, and {{ show1RM(3) }} for a female.
          </p>
          <p>It also shows...</p>

          <p>
            ...[]Your body composition, from your info, looks like... choose
            what you want to do next:
          </p>
          <p>
            You noted that you only have 5 minutes a day to exercise, your
            standard mobility level, for strength we have designed a program
            with rest-pause sets, and jump rope for cardio
          </p>
          <p>
            You noted that you only have 5 minutes a day to exercise, your lower
            mobility level, for strength we have designed a program with
            progressively decreasing rest breaks (1min-20s), and seated jump
            rope for cardio
          </p>
          <p>
            You noted that you only have 5 minutes a day to exercise, your very
            lower mobility level, for strength we have designed a program with
            progressively decreasing rest breaks (1min-20s), and seated jump
            rope for cardio
          </p>

          <!-- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8449772/#Sec4title -->
          <p>
            Because of your standard mobility level your suggested resistance
            training for hypertrophy is 8-12 reps at 70-80% 1RM, 2-3 minutes
            rest to start, then rest-pause reps at 80+%, 3-6 (up to 10) sets 3-5
            days per week, utilize relatively fast (1–2 s: 1–2 s) repetition
            velocities,
          </p>
          <p>
            Because of your lower mobility level your suggested resistance
            training for hypertrophy: 10-40 reps at 40-50% 1RM, 1-2 min rest,
            and 2-4 sets 1-3 days per week,utilize relatively slow (2 s
            concentric: 4 s eccentric) to start and we can increase this if you
            feel ready later...
          </p>
          <p>
            Warming up with minimal light movement of the same exercises we'll
            perform, just make sure nothing is tight or sore feeling before you
            start. Stretching isn't needed [PMC8449772/#Sec19title]
          </p>
          <p>
            we've build a suggested, very low impact, exercise setlist for you
            consisting of: half-chair-stands, seated puppeteer-rows, and
            wall-presses or table presses to avoid standing,
          </p>
          <p>
            Once your desired goal is met, you can scale back to [e.g.70%
            (-30%)] of your current sets, as maintenance is easier than getting
            to that new baseline. Add more resistance to get there sooner
          </p>
          <p>
            Missed a day? That's okay, you can just make up for it. Studies show
            that strength, hypertrophy (muscle), and even metabolic functions
            because weekly volume seems to win out over frequency
          </p>
          <p>
            You'll need to lift [(Xreps * XRM) * Xsets * X days =
            suggested_volume] KG/LB every week (don't do it all at once!) to
            continue to reap the benefits (you'll receive them in your
            <em>body</em> 2-3 weeks after completing the exercise)
          </p>
        </details>
      </div>
    </div>

    <!-- <div>
        {{ userHealthPoints }} ({{
          userHealthPoints.reduce(
            (partialSum, a) => parseFloat(partialSum) + parseFloat(a),
            0
          )
        }})
        {{ userPlanPrefs }}
        {{ userAge }}
        {{ convertHeightToCM() }}
        {{ userWeight }}
        {{ userSkill }}
        {{ userKG }}
        {{ userCM }}
        [{{ userAge * userWeight }}]
      </div> -->

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

export default {
  props: ["baseURL"],
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      showCitationModal: false,
      userGender: window.localStorage.getItem("userGender") || null,
      userLevel: window.localStorage.getItem("userLevel") || 1,
      userAge: window.localStorage.getItem("userAge") || null,
      userHeight:
        window.localStorage.getItem("userHeightImp") != "null"
          ? window.localStorage.getItem("userHeightImp")
          : window.localStorage.getItem("userHeight") || 170,
      userWeight: window.localStorage.getItem("userWeight") || 55,
      userSkill: window.localStorage.getItem("userSkill") || 0,
      baseMobility: 4,
      userKG: window.localStorage.getItem("userKG") || true,
      userCM: window.localStorage.getItem("userKG") || true,
      userHeightImp: window.localStorage.getItem("userHeightImp") || null,
      userWeightImp: window.localStorage.getItem("userWeightImp") || null,
      // user setup values (prefs/settings)
      userPlanPrefs: [],
      userHealthPoints: [],
      userCooks: "",
      userWholeFood: "",
      userBaseWork: "",
      userBaseExercise: [],
      userNeck: window.localStorage.getItem("userNeck") || 0,
      userWaist: window.localStorage.getItem("userWaist") || 0,
      userHip: window.localStorage.getItem("userHip") || 0,
      userRHR: window.localStorage.getItem("userRHR") || 0,
      userExerciseFrequency:
        window.localStorage.getItem("userExerciseFrequency") || 0,
      userExerciseEffort:
        window.localStorage.getItem("userExerciseEffort") || 0,
      userExerciseLength:
        window.localStorage.getItem("userExerciseLength") || 0,
      userBasePoints: {
        xp: window.localStorage.getItem("user.points.xp"),
        hp: window.localStorage.getItem("user.points.hp"),
        cp: window.localStorage.getItem("user.points.cp"),
      } || { xp: 0, hp: 0, cp: 0 },
      userConcerns: Array.isArray(window.localStorage.getItem("userConcerns"))
        ? window.localStorage.getItem("userConcerns")
        : JSON.parse(window.localStorage.getItem("userConcerns")) || [],
      userLifestyleAlcohol:
        window.localStorage.getItem("user.lifestyle.alcohol.count") || 0,
      userLifestyleAlcoholFreq:
        window.localStorage.getItem("user.lifestyle.alcohol.freq") || 52.177457,
      userLifestyleSoda:
        window.localStorage.getItem("user.lifestyle.soda.count") || 0,
      userLifestyleSodaFreq:
        window.localStorage.getItem("user.lifestyle.soda.freq") || 52.177457,
      userLifestyleSmokes:
        window.localStorage.getItem("user.lifestyle.smokes.count") || 0,
      userLifestyleSmokesFreq:
        window.localStorage.getItem("user.lifestyle.smokes.freq") || 52.177457,
      userLifestyleMeat:
        window.localStorage.getItem("user.lifestyle.meat.count") || 0,
      userLifestyleMeatFreq:
        window.localStorage.getItem("user.lifestyle.meat.freq") || 52.177457,
      userLifestyleSeafood:
        window.localStorage.getItem("user.lifestyle.seafood.count") || 0,
      userLifestyleSeafoodFreq:
        window.localStorage.getItem("user.lifestyle.seafood.freq") || 52.177457,
      userLifestyleDairy:
        window.localStorage.getItem("user.lifestyle.dairy.count") || 0,
      userLifestyleDairyFreq:
        window.localStorage.getItem("user.lifestyle.dairy.freq") || 52.177457,
      userLifestyleSedentary:
        window.localStorage.getItem("user.lifestyle.sedentary.count") || 0,
      userLifestyleSedentaryFreq:
        window.localStorage.getItem("user.lifestyle.sedentary.freq") ||
        52.177457,
      userBodyGoal: window.localStorage.getItem("user.body.goal") || 0,
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
          return `According to my readings you're in good health!`;
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
      let wc = this.userW;
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
      console.log("parent:", JSON.parse(JSON.stringify(this.$parent.$data)));
      this.$emit("citation", id, name, caption, short, summary, why, theme);
    },
    saveUserData() {
      window.localStorage.setItem("userHeight", this.userHeight); //save it
      window.localStorage.setItem("userWeight", this.userWeight); //save it
      window.localStorage.setItem("userAge", this.userAge); //save it
      window.localStorage.setItem("userSkill", this.userSkill); //save it
      window.localStorage.setItem("userHeightImp", this.userHeightImp); // save imperial (feet) measure
      window.localStorage.setItem("userWeightImp", this.userWeightImp); // save imperial (pounds) measure
      window.localStorage.setItem("userKG", this.userKG);
      window.localStorage.setItem("userCM", this.userCM);
      window.localStorage.setItem("userNeck", this.userNeck);
      window.localStorage.setItem("userWaist", this.userWaist);
      window.localStorage.setItem("userHip", this.userHip);
      window.localStorage.setItem("userRHR", this.userRHR);
      window.localStorage.setItem(
        "userExerciseFrequency",
        this.userExerciseFrequency
      );
      window.localStorage.setItem(
        "userExerciseEffort",
        this.userExerciseEffort
      );
      window.localStorage.setItem(
        "userExerciseLength",
        this.userExerciseLength
      );
      window.localStorage.setItem("userLevel", this.userLevel);
      window.localStorage.setItem("userGender", this.userGender);
      //points
      window.localStorage.setItem("user.points.xp", this.userBasePoints.xp);
      window.localStorage.setItem("user.points.hp", this.userBasePoints.hp);
      window.localStorage.setItem("user.points.cp", this.userBasePoints.cp);
      window.localStorage.setItem(
        "userConcerns",
        JSON.stringify(this.userConcerns)
      );

      window.localStorage.setItem(
        "user.lifestyle.alcohol.count",
        this.userLifestyleAlcohol
      );
      window.localStorage.setItem(
        "user.lifestyle.alcohol.freq",
        this.userLifestyleAlcoholFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.soda.count",
        this.userLifestyleSoda
      );
      window.localStorage.setItem(
        "user.lifestyle.soda.freq",
        this.userLifestyleSodaFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.smokes.count",
        this.userLifestyleSmokes
      );
      window.localStorage.setItem(
        "user.lifestyle.smokes.freq",
        this.userLifestyleSmokesFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.meat.count",
        this.userLifestyleMeat
      );
      window.localStorage.setItem(
        "user.lifestyle.meat.freq",
        this.userLifestyleMeatFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.seafood.count",
        this.userLifestyleSeafood
      );
      window.localStorage.setItem(
        "user.lifestyle.seafood.freq",
        this.userLifestyleSeafoodFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.dairy.count",
        this.userLifestyleDairy
      );
      window.localStorage.setItem(
        "user.lifestyle.dairy.freq",
        this.userLifestyleDairyFreq
      );
      window.localStorage.setItem(
        "user.lifestyle.sedentary.count",
        this.userLifestyleSedentary
      );
      window.localStorage.setItem("user.body.goal", this.userBodyGoal);
    },
    flipGender(type = 0) {
      console.log("flipping to:", type);
      if (type == -1) {
        console.log(
          "GettingGender:",
          this.userGender,
          window.localStorage.getItem("userGender"),
          document.querySelectorAll(".maleChart")[3]
        );
        type = this.userGender;
      }
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
    //   this.flipGender(this.userGender - 1);
    // }, 3000);
    // console.log("gendered:", this.userGender);
    // this.flipGender(-1);
    // if (this.$refs?.flipMale) {
    //   if (this.userGender == 0) this.$refs.flipMale.click();
    //   if (this.userGender == 1) this.$refs.flipFemale.click();
    // } else {
    //   console.log("noBUTTONS");
    // }
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
          <details class="q-ml-md noblink-details"><summary>A simple salad or serving of fruit</summary>Before every meal eat a salad with a 1 tbsp apple vinegar, or if short on time, 1 piece of whole fruit (e.g. apple, orange, banana).<br/>Vinegar Boosts AMPK which boosts your metabolism, and a healthy salad, or piece of fruit, reduces your hunger:
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
.opacity-50 {
  opacity: 0.5;
}
.rx-float {
  position: relative;
  top: -0.5em;
}
</style>
