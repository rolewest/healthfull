<template>
  <!--  Welcome to your home base, like all your data, it only belongs to you, not us. -->
  <div class="q-pa-lg questItem">
    <div class="text-center text-h3">
      Home B<q-icon
        class="q-mb-sm"
        name="mdi-home-heart"
        size="1.2em"
        color="negative"
      ></q-icon
      >se
    </div>
    <div class="row justify-center"></div>
    <div
      class="text-center text-white q-pa-sm q-mb-sm border-block"
      :class="randomTipColor"
      v-if="!isNewPlayer"
    >
      <div class="title-accent">Random Tip:</div>
      <div v-html="currentTip" class="randomTip"></div>
    </div>
    <div class="row justify-center bg-accent text-white">
      <div class="q-pa-lg" v-if="isNewPlayer">
        <div class="type-writer">
          <div class="wrapper">
            <div class="text" style="width: 24ch" v-if="isNewPlayer">
              Welcome to Health Full!
            </div>
            <!-- <div class="text" style="width: 19ch" v-else>Nothing here yet...</div> -->
          </div>
        </div>
        <div
          class="fade-in-element"
          style="animation-duration: 10s; animation-delay: 2.3s; opacity: 0"
        >
          It looks like you're new here.

          <div class="q-mt-md">
            Just your Height, Weight, and Age can tell a lot about your current
            health level.

            <div
              class="fade-in-element q-mt-sm"
              style="animation-duration: 2s; animation-delay: 7.5s; opacity: 0"
            >
              Let's take a few simple measurements, when you're ready.
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="q-mt-md">
            <q-btn
              color="white"
              text-color="dark"
              @click="this.$router.push({ name: 'measure' })"
              class="q-pa-sm"
              ><q-icon
                name="ti-ruler-pencil"
                color="warning"
                size="30px"
              ></q-icon>
              &nbsp;I'm Ready!&nbsp;
              <q-icon
                name="mdi-human-male-height"
                color="info"
                size="30px"
              ></q-icon
            ></q-btn>
          </div>
        </div>
      </div>
    </div>

    <fieldset
      class="border-double-3 q-pa-lg q-ma-md row justify-center"
      v-if="!isNewPlayer"
    >
      <legend>What to do next?</legend>
      <div class="row q-pb-md donext-item">
        <q-card class="q-pa-md my-card bg-none" bordered>
          <div class="text-center">
            <p class="text-h6">See Meal Prescription!</p>
            <p>
              Science backed diet builds immunity. Stops and reverses disease.
            </p>
            <!-- Finally, a science backed diet to reach your health goals sooner. -->
            <q-btn
              class="q-pa-md border-double-1 q"
              color="info"
              @click="this.$router.push({ name: 'planner' })"
            >
              <q-avatar
                class="-mr-sm q-pb-sm"
                color="warning"
                icon="restaurant_menu"
                size="40px"
              >
              </q-avatar>
              <br />
              <div class="q-ma-sm">My Meal Plans</div>
            </q-btn>
          </div>
        </q-card>
      </div>
      <div class="row q-pb-md donext-item">
        <q-card class="q-pa-md my-card bg-none" bordered>
          <!-- <div class="text-center" v-if="!hasSetlist">
            <p class="text-h6">See your Setlists</p>
            <p>
              Exercise the way you want and personalized for your fitness level.
            </p>
            <q-btn
              class="q-pa-md border-double-1 vertical-bottom"
              color="info"
              @click="this.$router.push({ name: 'builder' })"
            >
              <q-avatar
                class="-mr-sm q-pb-sm"
                color="positive"
                icon="mdi-hammer-wrench"
                size="40px"
              >
              </q-avatar>
              <br />
              <div class="q-ma-sm">Make My Setlist</div>
            </q-btn>
          </div> -->
          <!-- v-else-if="hasSetlist" -->
          <div class="text-center">
            <p class="text-h6">See Fitness Prescription!</p>
            <p>
              Exercise the way you want. Personalized for your fitness level.
            </p>
            <q-btn
              class="q-pa-md border-double-1 vertical-bottom"
              color="info"
              @click="this.$router.push({ name: 'player' })"
            >
              <q-avatar
                class="-mr-sm q-pb-sm"
                color="negative"
                icon="mdi-fire-circle"
              >
              </q-avatar>
              <br />
              <div class="q-ma-sm">Setlist</div>
            </q-btn>
          </div>
        </q-card>
      </div>

      <div class="row q-pb-md donext-item">
        <q-card class="q-pa-md my-card bg-none" bordered>
          <div class="text-center">
            <p class="text-h6">See Current Prescription</p>
            <p>Small changes make a big difference. What the Doctor ordered!</p>
            <q-btn
              class="q-pa-md border-double-1 vertical-bottom"
              color="info"
              @click="
                this.$router.push({ name: 'measure', hash: '#prescription' })
              "
            >
              <q-avatar
                class="q-pb-sm"
                color="accent"
                icon="mdi-clipboard-pulse"
                size="40px"
              >
              </q-avatar>
              <br />
              <div class="q-ma-sm">My Prescriptions</div>
            </q-btn>
          </div>
        </q-card>
      </div>

      <!-- <div class="q-text-center border-double-1"></div> -->
    </fieldset>

    <!-- DAILY POINTS CHALLENGE -->
    <fieldset v-if="!isNewPlayer">
      <legend>Daily Challenge</legend>
      <!-- SELECTING CHALLENGE -->
      <div
        class="q-ma-sm"
        v-if="!userChallenges.daily.last && userChallenges.daily.opened"
      >
        <p class="text-center title-h4">Select Your Challenge</p>
        <!-- <div
          v-html=""
        ></div> -->
        <!-- {{ systemChallenges[userChallenges.daily.opened.toLowerCase()] }} -->
        <div
          v-for="challenge in randomList(
            systemChallenges[userChallenges.daily.opened.toLowerCase()],
            3
          )"
          :key="challenge.title"
        >
          <details v-if="challenge.title">
            <summary>{{ challenge.title }}</summary>
            <div class="hold-details">
              <div
                :class="[
                  'float-right border-double-1 text-center',
                  `border-${youRolledText(userChallenges.daily.rolled, 5)}`,
                ]"
              >
                <span :class="['text-h3 q-pa-sm']">{{ challenge.points }}</span>
                <div
                  :class="[
                    `bg-${youRolledText(userChallenges.daily.rolled, 5)}`,
                  ]"
                >
                  {{ youRolledText(userChallenges.daily.rolled, 4) }}
                </div>
              </div>
              <i>{{ challenge.caption }}</i>

              <div v-html="challenge.description"></div>

              <div class="text-center">
                <q-btn
                  color="info"
                  class="q-mb-sm"
                  @click="acceptChallenge(challenge.id)"
                  >Choose this Challenge!</q-btn
                >
              </div>
              <div v-html="challenge.caveats" class="text-italic"></div>
              <div class="bg-dark border-torn-holder">
                <div class="border-torn">
                  <div v-html="challenge.cite" class="graphPaper-2"></div>
                </div>
              </div>
            </div>
          </details>
          <div v-else>
            Sorry this challenge is in progress. Try Meal Points Challenges for
            now.
          </div>
        </div>

        <div class="text-center q-ma-md">
          <q-btn
            color="negative"
            @click="
              this.userChallenges.daily.opened = null;
              this.userChallenges.daily.accepted = null;
            "
            >Re-roll!</q-btn
          >
        </div>
      </div>
      <details
        v-if="!userChallenges.daily.last && !userChallenges.daily.opened"
      >
        <ol>
          <li>Tap ROLL to start.</li>
          <li>Tap Open Challenge if your happy with the result.</li>
          <li>Your challenge is revealed!</li>
          <li>Come back again tomorrow to play again.</li>
        </ol>
      </details>
      <!-- YOUR CURRENT DAILY CHALLENGE - IN PROGRESS -->
      <div v-if="userChallenges.daily.last && userChallenges.daily.opened">
        <div
          v-if="
            userChallenges.daily.completed != 'null' &&
            !compareDateStrings(userChallenges.daily.completed)
          "
        >
          Your current
          {{ youRolledText(this.userChallenges.daily.rolled, 4) }} challenge:
          <div
            class="border-double-3 q-ma-sm q-pa-sm row"
            @click.alt="userChallenges.daily.last = null"
          >
            <!-- LocalStorage.set('challenge.daily.last', null) -->
            <div class="q-ma-xs">
              <div
                class="roll-result"
                v-html="youRolledText(userChallenges.daily.rolled, 2)"
              ></div>
            </div>

            <div class="q-mt-sm">
              <b class="q-mb-sm">{{ userChallenges.daily.data?.title }}</b
              ><br /><span class="border-double-1-bottom">{{
                userChallenges.daily.data?.caption
              }}</span>
              <br />
            </div>
            <div class="q-ma-sm">
              Earn<span
                style="border-radius: 30%"
                :class="[
                  'q-pa-xs q-ma-xs text-white round-borders',
                  `bg-${youRolledText(userChallenges.daily.rolled, 5)}`,
                ]"
                >{{ userChallenges.daily.data?.points }}</span
              >
              <i>{{ youRolledText(userChallenges.daily.rolled, 3) }}</i>
              Points for completing this challenge
            </div>
            <div class="q-mt-sm">
              <details class="q-mb-lg">
                <div v-html="userChallenges.daily.data?.description"></div>
                <div
                  v-html="userChallenges.daily.data?.caveats"
                  class="text-italic"
                ></div>
                <div class="bg-dark border-torn-holder">
                  <div class="border-torn">
                    <div
                      v-html="userChallenges.daily.data?.cite"
                      class="graphPaper-2"
                    ></div>
                  </div>
                  &nbsp;
                </div>
              </details>
              <div
                class="place-that-holds-buttons row justify-center border-double-2 width-100"
              >
                <div class="" ref="markCompleteButton">
                  <q-btn
                    class="rainbowToRainbow"
                    @click="verifyChallengeComplete(1)"
                    >Mark As Completed!</q-btn
                  >
                </div>

                <div
                  class="confirm-daily-complete"
                  ref="confirmDailyCompleteButtons"
                >
                  <q-btn
                    color="negative"
                    @click="verifyChallengeComplete(0)"
                    class=""
                    >Cancel</q-btn
                  ><q-btn
                    @click="verifyChallengeComplete(2)"
                    class="rainbowToRainbow"
                    >Yes, I did it!</q-btn
                  >
                </div>
              </div>
            </div>
            <!-- dailyFindAcceptedById(this.userChallenges.daily.accepted).title -->
            <!-- {{
              systemChallenges[userChallenges.daily.opened.toLowerCase()][
                userChallenges.daily.accepted
              ]
            }} -->
            <!-- {{ userChallenges.daily.accepted }}|||{{
              systemChallenges[userChallenges.daily.opened.toLowerCase()]
            }} -->
            {{ dailyFindAcceptedById(this.userChallenges.daily.accepted) }}
            <!-- {{
              systemChallenges[userChallenges.daily.opened.toLowerCase()][
                this.userChallenges.daily.accepted
              ]
            }} -->
          </div>
        </div>
        <p
          @click.alt="
            this.userChallenges.daily.completed = null;
            this.userChallenges.daily.opened = null;
            this.userChallenges.daily.accepted = null;
          "
        >
          Come back tomorrow to play again...
          <!-- {{ userChallenges.daily }} -->
        </p>
      </div>
      <div
        class="roll-area"
        v-if="!userChallenges.daily.last && !userChallenges.daily.opened"
      >
        <div v-if="d1Value[0]" class="float-right">
          <div class="text-right">
            {{ youRolledText(d1Value[0], 3) }} Points Challenge
            <div
              class="roll-result"
              v-html="youRolledText(d1Value[0], 2)"
            ></div>
          </div>
        </div>

        <div class="text-h1 text-dark holdDi">
          <span
            class="d1holder flip-scale-up-hor"
            v-html="d1Value[1]"
            ref="d1elm"
          ></span>
        </div>
        <div class="roll-result" v-html="youRolledText(d1Value[0], 1)"></div>
        <q-btn class="q-ma-sm" @click="rollTheDice(0)" color="info">{{
          !d1Value[0] ? "Roll The Dice!" : "Roll Again"
        }}</q-btn>
        <span v-if="d1Value[0]">
          <q-btn
            class="blueToYellow powerBarGlow q-ma-sm"
            @click="openChallenge()"
            ><span
              v-html="youRolledText(d1Value[0], 2)"
              class="float-right"
              style="opacity: 0.5; display: inline-block"
            ></span>
            &nbsp;<span class="">Open Challenge</span></q-btn
          >
        </span>
      </div>
    </fieldset>
    <!-- end of daily challenge -->

    <!-- need section here for users stats (fat lost, muscle gained, etc.) charts etc. -->
    <!-- Suggested workout plan summary in details element could go here too -->
    <!-- your plan here, e.g. You only have 10 minutes alloted to Maximize your health
(are you Max Health?) you are focusing on Hypertrphy, currently, and your suggested 1RM and HRmax is...
 -->

    <!-- MY CHALLENGES ;| -->
    <!-- {{ userChallenges.daily.accepted }}|{{ userChallenges.daily.rolled }}|{{
      userChallenges.daily.accepted
    }}| -->
    <fieldset v-if="userChallenges.daily.last">
      <legend>Your Quests & Challenges</legend>
    </fieldset>
    <!-- user points -->
    <fieldset class="justify-center row bg-primary display-block">
      <legend class="text-center title-h4">Your Points</legend>
      <div class="border-double-2 text-center q-pa-md">
        <q-chip class="q-ma-xs"
          ><q-avatar
            icon="fas fa-shield-heart"
            color="info"
            text-color="white"
            size="40px"
          >
          </q-avatar
          >{{ getUserSavedValue("user.points.hp") }} HP
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
          {{ getUserSavedValue("user.points.cp") }} CP
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
          {{ getUserSavedValue("user.points.sp") }} SP
        </q-chip>
      </div>
      <div class="border-double-2 text-center q-pa-md">
        <q-chip class="q-ma-xs"
          ><q-avatar
            icon="restaurant_menu"
            color="positive"
            text-color="white"
            size="40px"
          >
          </q-avatar>
          {{ getUserSavedValue("user.points.xp") }} MP
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
          {{ getUserSavedValue("user.points.xp") }} XP
        </q-chip>
      </div>
    </fieldset>

    <!-- {{ userChallenges }}{{ systemChallenges }} -->
    <!-- roll your daily challenge (maybe should have a single challenge and this is more of a)
    use random and animate count to roll dice for each category: Health, Heart, Strength, Stomach ...excercise/movement?
    daily challenge: 3-5 options at a time, can re-roll (limit/level) but might not get as good
    you get 3 random of the 5 and they have randomized (formula based) values for the points you'll collect
    can also get very rare ones and with...not sure?

    All/most(?) challenges should live here for you to repeat them, but so of high value and little effort are not saved
    maybe if random is above/below a certain value it isn't saved

    could also do where you "spin" to choose your 3 (like slots) then only after you've commited only do you get to roll dice
    to see what the value of the points are...could encourage cheating though




  -->
    <Quotes :tackOnMsg="tackOnMsg" />
  </div>
</template>

<script>
import { LocalStorage } from "quasar";
import Quotes from "src/components/RandomQuote.vue";
export default {
  components: {
    Quotes,
  },
  data() {
    return {
      currentTip: this.randomTip,
      randomTipTimer: null,
      randomTipColor: "bg-primary",
      tackOnMsg: "  ...you really need to sweep up in here",
      d1Value: [],
      d1Die: 0,

      userChallenges: {
        daily: {
          rolled: LocalStorage.getItem("challenge.daily.rolled") || null,
          face: LocalStorage.getItem("challenge.daily.face") || null,
          last: LocalStorage.getItem("challenge.daily.last") || null,
          opened: LocalStorage.getItem("challenge.daily.opened") || null,
          accepted: LocalStorage.getItem("challenge.daily.accepted") || null,
          completed: LocalStorage.getItem("challenge.daily.completed") || null,
          data: LocalStorage.getItem("challenge.daily.data") || null,
        },
      },
      systemChallenges: {
        hp: [
          {
            id: 1,
            title: ``,
            caption: ``,
            description: ``,
            caveats: ``,
            cite: ``,
            points: 0,
          },
        ],
        cp: [
          {
            id: 1,
            title: ``,
            caption: ``,
            description: ``,
            cite: ``,
            caveats: ``,
            points: 0,
          },
        ],
        sp: [
          {
            id: 1,
            title: ``,
            caption: ``,
            description: ``,
            cite: ``,
            caveats: ``,
            points: 0,
          },
        ],
        mp: [
          {
            id: 1,
            title: `Forget the shaker`,
            caption: `No salt at the table for one meal today`,
            description: `Moderation is Key.
            You can still add salt while cooking/preparing, just don't add it once it's served. You choose the meal: breakfast, lunch, dinner, or snack. <br/><br>`,
            caveats: `Try to avoid processed foods and salted butter. `,
            cite: `<q>High sodium intake is responsible for 2.3 million deaths per year.(PMCID: PMC6727958)</q>`,
            points: 9,
          },
          {
            id: 2,
            title: `Cut out the (trans) fat`,
            caption: `No foods with trans fats today`,
            description: `This one's a killer. Also know as partially hydrogenated, or labeled as hydrogenated oil, This should be an easy one for many as most counties have restricted these foods.<br/>
           `,
            caveats: `It can be found is soft drinks; store bought cakes cookies, pies, and doughs; shortening & margarine; doughnuts; nondairy creamer; frozen pizza; french fries; fried chicken; microwave popcorn; hotdogs`,
            cite: `<q>[E]liminating trans fat would delay [around] 14.8 million [deaths within 25 years](PMCID: PMC6727958).</q>  `,
            points: 6,
          },
          {
            id: 3,
            title: `You're sweet enough`,
            caption: `No Fructose today`,
            description: `Avoid all processed food or drinks containing Fructose today. <br/>
           `,
            caveats: `Yes, this includes fruit juice, sports drinks,.`,
            cite: `<q>...we found that fructose, but not added sugars consumption, was related to an increased risk of death from all-causes mortality, and fructose from beverages was positively associated with risk of death from all-causes and CVD mortality in both men and women(PMCID: PMC3985213).</q>  `,
            points: 5,
          },
        ],
        xp: [
          {
            id: 1,
            title: ``,
            caption: ``,
            description: ``,
            caveats: ``,
            points: 0,
          },
        ],
      },
    };
  },
  methods: {
    verifyChallengeComplete(type = 0) {
      console.log(type, this.$refs.confirmDailyCompleteButtons.style.display);
      if (type == 0) {
        this.$refs.confirmDailyCompleteButtons.style.display = "none";
        this.$refs.markCompleteButton.style.display = "block";
      }

      if (type == 1) {
        this.$refs.confirmDailyCompleteButtons.style.display = "block";
        this.$refs.markCompleteButton.style.display = "none";
      }

      if (type == 2) {
        this.$refs.confirmDailyCompleteButtons.style.display = "none";
        this.$refs.markCompleteButton.style.display = "block";
        const now = new Date();
        const datestr = `${now.getDate()}${now.getMonth()}${now.getFullYear()}`;
        this.userChallenges.completed = datestr;
        console.log("complT:", this.userChallenges.completed);
        LocalStorage.set("challenge.daily.completed", datestr);
        LocalStorage.set("challenge.daily.last", null);
        console.log(
          "complT_ed:",
          this.userChallenges.completed,
          LocalStorage.getItem("challenge.daily.completed")
        );

        //add to score
        const pointsCategory = LocalStorage.getItem(
          "challenge.daily.opened"
        ).toLowerCase();
        const pointsToAdd = LocalStorage.getItem("challenge.daily.data.");
        const oldScore = LocalStorage.getItem(`user.points.${pointsCategory}`);
        // let newScore =

        // LocalStorage.getItem("user.points.") LocalStorage.getItem("challenge.daily.opened")

        // this.userChallenges.daily.opened = null;
        // this.userChallenges.daily.accepted = null;
        // LocalStorage.set("challenge.daily.accepted", null);
        // LocalStorage.set("challenge.daily.opened", null);
      }
    },
    compareDateStrings(date1, date2 = null) {
      const now = new Date();
      const datestr = `${now.getDate()}${now.getMonth()}${now.getFullYear()}`;

      if (date2 == null) date2 = datestr;
      return date1 == date2;
    },
    dailyFindAcceptedById(id) {
      let allCategory =
        this.systemChallenges[this.userChallenges.daily.opened.toLowerCase()];

      for (let index = 0; index < allCategory.length; index++) {
        console.log("running it....");
        // console.log("wtfff");
        // console.log("checking:", allCategory[index]);
        if (allCategory[index].id == id) {
          this.userChallenges.daily.data = allCategory[index];

          return "";
        }
        // return allCategory[index];
      }
    },
    randomList(rand, limit = -1) {
      if (limit >= 0) {
        return rand
          .sort(function () {
            return 0.5 - Math.random();
          })
          .slice(0, limit);
      }
      return rand.sort(function () {
        return 0.5 - Math.random();
      });
    },
    random(min = 0, max = 1) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    youRolledText(roll, type = 0) {
      if (!roll) return;

      let resultChallengeName = [
        `Health`,
        `Cardio`,
        `Strength`,
        `eXercise`,
        `Meal`,
      ];
      let color = ["info", "negative", "accent", "warning", "positive"];
      let resultChallengeShort = [`HP`, `CP`, `SP`, `XP`, `MP`];
      let resultAvatar = [
        `<div class="avatar-aftertext"><div class="mock-avatar bg-info">
          <span class="fas fa-shield-heart" style=" font-size: 2em;padding: 5px 5px 3px 5px;"></span>
        </div></div>
        `,
        `<div class="avatar-aftertext"><div class="mock-avatar bg-negative">
          <span class="fas fa-heart-pulse" style=" font-size: 2em;padding: 5px 5px 3px 5px;"></span>
        </div></div>
        `,
        `<div class="avatar-aftertext"><div class="mock-avatar bg-accent">
          <span class="mdi mdi-dumbbell text-h4" style="padding: 7px 5px 7px 5px;"></span>
        </div></div>
        `,
        `<div class="avatar-aftertext"><div class="mock-avatar bg-warning">
          <span class="mdi mdi-star-shooting text-h4" style="padding: 7px 5px 7px 5px;"></span>
        </div></div>
        `,
        `<div class="avatar-aftertext"><div class="mock-avatar bg-positive">
          <span class="material-icons text-h4" style="padding: 1px 5px 2px 5px;">restaurant_menu</span>
        </div></div>
        `,
      ];
      if (roll == 6) roll = 4;
      let resultStrings = [
        `You rolled a ${roll}!`,
        `A ${roll} is great!`,
        `${roll} is a good one!`,
        `A ${roll} for ${resultChallengeShort[roll - 1]} is tempting...`,
        `${roll} is as good as any`,
      ];

      let pick = Math.floor(Math.random() * resultStrings.length);
      if (type == 0) return resultStrings[pick] + resultAvatar[roll - 1];
      if (type == 1) return resultStrings[pick];
      if (type == 2) return resultAvatar[roll - 1];
      if (type == 3) return resultChallengeName[roll - 1];
      if (type == 4) return resultChallengeShort[roll - 1];
      if (type == 5) return color[roll - 1];
    },

    rollTheDice(type = 0) {
      let yourNumber = Math.floor(Math.random() * 6) + 1;
      let textColor = [
        "info",
        "negative",
        "accent",
        "warning",
        "positive",
        "warning",
      ];
      let hexColor = [
        "#2b99ed",
        "#bd5964",
        "#6a53b0",
        "#bd972e",
        "#79c28a",
        "#bd972e",
      ];

      let faceValue = "&#x268" + (yourNumber - 1) + ";";
      let glowColor = `${hexColor[yourNumber - 1]}`;

      const trans = [
        "",
        "flip-scale-up-hor",
        "flip-scale-up-diag-2",
        "rotate-scale-up-diag-1",
      ];
      let randomTransition = trans[this.random(0, trans.length - 1)];
      this.d1Value = [1, "&#x2680"];

      console.log("rolled:", yourNumber, faceValue);
      this.$refs.d1elm.style.transform = `rotate(0deg) scale(0)`;
      this.$refs.d1elm.className = `fadeOut  text-${
        textColor[yourNumber - 1]
      }  powerBarGlow glower `;

      this.d1Value = [yourNumber, faceValue];
      this.userChallenges.daily.rolled = yourNumber;
      this.userChallenges.daily.face = faceValue;
      this.$refs.d1elm.focus(); // use focus trick without setTimeOut
      this.$refs.d1elm.className = ` fadeIn text-dark glower ${randomTransition}`;
      this.$refs.d1elm.style.transform = `rotate(${Math.floor(
        Math.random() * 360
      )}deg) scale(0.9)`;
      this.$refs.d1elm.style.textShadow = `2px 2px 0 ${glowColor}, 2px -2px 0 ${glowColor}, -2px 2px 0 ${glowColor},
    -2px -2px 0 ${glowColor}, 2px 0px 0 ${glowColor}, 0px 2px 0 ${glowColor}, -2px 0px 0 ${glowColor},
    0px -2px 0 ${glowColor}`;

      // this.$refs.rollResult.innerHTML = `You rolled a ${yourNumber}`;
    },
    getUserSavedValue(value = "") {
      console.log("sdfdf:::", LocalStorage);
      if (
        LocalStorage.getItem(value) != "null" &&
        LocalStorage.getItem(value) != null
      )
        return LocalStorage.getItem(value);
      return 0;
    },

    openChallenge() {
      this.userChallenges.daily.opened = this.youRolledText(
        this.userChallenges.daily.rolled,
        4
      );
      LocalStorage.set(
        "challenge.daily.opened",
        this.userChallenges.daily.opened
      );
    },
    countDownToTomorrow() {
      //       let midnight = new Date();
      //       midnight.setHours(24);
      //       midnight.setMinutes(0);
      //       midnight.setSeconds(0);
      //       midnight.setMilliseconds(0);
      //       let tomort= (midnight.getTime() - new Date().getTime()) / 1000 / 60;
      // console.log('remains..',tomort)
      //       return tomort
      var today = new Date();
      var Christmas = new Date(today.getFullYear() + "-12-25");
      var diffMs = Christmas - today; // milliseconds between now & Christmas
      var diffDays = Math.floor(diffMs / 86400000); // days
      var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      console.log(
        diffDays +
          " days, " +
          diffHrs +
          " hours, " +
          diffMins +
          " minutes until Christmas =)"
      );
    },
    acceptChallenge(id) {
      const now = new Date();
      const datestr = `${now.getDate()}${now.getMonth()}${now.getFullYear()}`;
      this.userChallenges.daily.accepted = id;
      console.log("accept:", datestr);
      // if (datestr != LocalStorage.getItem("challenge.daily.last")) {
      console.log("okay..");
      console.log("CD:", this.userChallenges);
      // LocalStorage.set("challenge.daily.last", datestr);
      LocalStorage.set(
        "challenge.daily.rolled",
        this.userChallenges.daily.rolled
      );
      LocalStorage.set("challenge.daily.face", this.userChallenges.daily.face);
      LocalStorage.set(
        "challenge.daily.accepted",
        this.userChallenges.daily.accepted
      );
      this.userChallenges.daily.last = datestr;
      // LocalStorage.set(
      //   "challenge.daily.last",
      //   this.userChallenges.daily.last
      // );
      this.userChallenges.daily.last = datestr;
      this.dailyFindAcceptedById(this.userChallenges.daily.accepted);
      console.log("okay..");
      // }
    },
    randomTip() {
      let tips = [
        `The sources icons <span class="mdi mdi-comment-quote-outline xcitation"></span> next to debatable topics show you the latest medical & scientific facts!`,
        `In 2017 poor diet was the #1 killer world wide, with over 11 million victims... <a href="https://www.healthdata.org/sites/default/files/files/infographics/Infographic_Healthy-Eating-Saves-Lives_2019_0.pdf" target="_blank">full source</a>`,
        `Use the sources icons <span class="mdi mdi-comment-quote-outline xcitation"></span> to verify the science for yourself!`,
      ];
      if (LocalStorage.getItem("user.body.goal") <= 0) {
        // loose & maintain weight tips
        // tips.push(`Eat healthy ya'll`);
        // tips.push(`Eat healthy ya'll`);
        // tips.push(`Eat healthy ya'll`);
      }

      const colors = [
        "bg-positive",
        "bg-secondary",
        "bg-negative",
        "bg-info",
        "bg-warning",
      ];

      let itemNum = Math.floor(Math.random() * tips.length);
      let colorNum = Math.floor(Math.random() * colors.length);
      this.randomTipColor = colors[colorNum];
      return tips[itemNum];
    },
  },
  computed: {
    isNewPlayer() {
      console.log("uage:", LocalStorage.getItem("userAge"));
      return LocalStorage.getItem("userAge") == "null";
    },
    hasSetlist() {
      console.log("uagdde:", LocalStorage.getItem("userCurrentSetlist"));
      return LocalStorage.getItem("userCurrentSetlist") != null;
    },
  },
  mounted() {
    this.currentTip = this.randomTip();
    this.randomTipTimer = setInterval(() => {
      this.currentTip = this.randomTip();
    }, 10000);
    console.log("mmnt:", LocalStorage.getItem("user.points.xp"));
  },
  beforeUnmount() {
    clearInterval(this.randomTipTimer);
  },
};
</script>

<style lang="scss">
.donext-item {
  width: 220px;
}
.roll-area {
  // background: #ff0044;
}
#challenge-text {
  z-index: 100;
}
#roll-result {
  z-index: 1000;
  font-size: 2em;
}
.holdDi span {
  display: inline-block;
  position: relative;
  font-size: 2em;
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  z-index: 0;
  // text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
  //   -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
  //   0px -2px 0 $info;
}
.mock-avatar {
  background: #ff9900;
  color: white;
  border-radius: 15%;

  display: inline-block;
}
.mock-avatar span {
}
.type-writer .text {
  animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 10px solid $warning;
  text-align: left;
  /* margin: 1em auto; */
}
.typeOut {
  // display: none;
}
.typeOut:after {
  animation: blinker 1s infinite;
  /* color:rgba(255,165,0,.75); */
  color: $positive;
  content: "_";
  font-weight: 400;

  /* border-right:2px solid rgba(255,165,0,.75); */
}
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
.fadeOut {
  opacity: 0;
}
.randomTip {
  transition: all 1s;
}
.fadeIn {
  opacity: 1;
  transition: all 1s steps(1, end);
  -webkit-transition: all 1s steps(4, end);
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
}
@keyframes fadeInOnLoad {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in-element {
  animation: fadeInOnLoad 1s forwards;
  //animation: name duration timing-function delay iteration-count direction fill-mode;
}
body {
  // background: #e8dcb8 !important;

  // background-image: linear-gradient(135deg, $primary 25%, transparent 25%),
  //   linear-gradient(225deg, $primary 25%, transparent 25%),
  //   linear-gradient(45deg, $primary 25%, transparent 25%),
  //   linear-gradient(315deg, $primary 25%, #e5e5f7 25%) !important;
  // background-position: 34px 0, 34px 0, 0 0, 0 0 !important;
  // background-size: 34px 34px !important;
  // background-repeat: repeat !important;
}
.relative {
  position: relative;
}
.q-layout {
  max-width: 95%;
  margin: auto;
}
.flip-scale-up-hor {
  -webkit-animation: flip-scale-up-hor 0.5s linear both;
  animation: flip-scale-up-hor 0.5s linear both;
}
.flip-scale-up-diag-2 {
  -webkit-animation: flip-scale-up-diag-2 0.5s linear both;
  animation: flip-scale-up-diag-2 0.5s linear both;
}
.rotate-scale-up-diag-1 {
  -webkit-animation: rotate-scale-up-diag-1 0.7s linear both;
  animation: rotate-scale-up-diag-1 0.7s linear both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-9-12 12:19:10
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@-webkit-keyframes rotate-scale-up-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
    transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
    transform: scale(2) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
    transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}
@keyframes rotate-scale-up-diag-1 {
  0% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, 0deg);
    transform: scale(1) rotate3d(1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(2) rotate3d(1, 1, 0, -180deg);
    transform: scale(2) rotate3d(1, 1, 0, -180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(1, 1, 0, -360deg);
    transform: scale(1) rotate3d(1, 1, 0, -360deg);
  }
}
@-webkit-keyframes flip-scale-up-hor {
  0% {
    -webkit-transform: scale(0) rotateX(0);
    transform: scale(0) rotateX(0);
  }
  50% {
    -webkit-transform: scale(2.5) rotateX(-90deg);
    transform: scale(2.5) rotateX(-90deg);
  }
  100% {
    -webkit-transform: scale(1) rotateX(-180deg);
    transform: scale(1) rotateX(-180deg);
  }
}
@keyframes flip-scale-up-hor {
  0% {
    -webkit-transform: scale(0) rotateX(0);
    transform: scale(0) rotateX(0);
  }
  50% {
    -webkit-transform: scale(2.5) rotateX(-90deg);
    transform: scale(2.5) rotateX(-90deg);
  }
  100% {
    -webkit-transform: scale(1) rotateX(-180deg);
    transform: scale(1) rotateX(-180deg);
  }
}
/* ----------------------------------------------
 * Generated by Animista on 2022-9-12 12:26:44
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation flip-scale-up-diag-2
 * ----------------------------------------
 */
@-webkit-keyframes flip-scale-up-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(2.5) rotate3d(-1, 1, 0, 90deg);
    transform: scale(2.5) rotate3d(-1, 1, 0, 90deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 180deg);
    transform: scale(1) rotate3d(-1, 1, 0, 180deg);
  }
}
@keyframes flip-scale-up-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(2.5) rotate3d(-1, 1, 0, 90deg);
    transform: scale(2.5) rotate3d(-1, 1, 0, 90deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 180deg);
    transform: scale(1) rotate3d(-1, 1, 0, 180deg);
  }
}
q {
  display: inline-block;
  font-size: 0.9em;
  font-style: italic;
  padding: 1em;
  // background: white;
}
details[open] > .hold-details {
  border: 3px double $accent;
  padding: 1em;
}
.rainbowToRainbow {
  animation: animateBgReward 5s linear infinite, pulse 2s linear infinite,
    shadow-drop-center 5s linear infinite;
  background-image: linear-gradient(
    45deg,
    #ffffff,
    #ffffff,
    #ffffff,
    #f9f06b,
    #ffffffff,
    #ffffff,
    #f9f06b,
    $info,
    #ffffff,
    #ffffff,
    #ffffff,
    #ffffff
  );
  opacity: 0.5;
  background-size: 500% 100%;
}

@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
}
.confirm-daily-complete {
  display: none;
}
@keyframes pulse {
  0% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
.border-double-1-bottom {
  border-bottom: 3px double $negative;
}
.rainbowToRainbow:hover,
.rainbowToRainbow:active {
  opacity: 1;
  animation: animateBgReward 3s linear infinite;
  background-image: linear-gradient(
    90deg,
    #ffffff,
    #ffffff,
    #dcfaff,
    #f9f06b,
    $warning,
    $primary,
    $info,
    $secondary,
    $accent,
    $negative,
    $positive,
    #dcfaff,
    #ffffff,
    #ffffff
  );
  background-size: 500% 100%;
}
@keyframes animateBgReward {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.xcitation {
  position: relative;
  color: $primary;
  font-size: 1.5em;
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 0.2em;
  // opacity: 0.7;
  filter: grayscale(100%);
  transition: all 1s ease;
  background: white;
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
