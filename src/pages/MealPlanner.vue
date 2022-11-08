<template>
  <div class="title-h4 q-pa-lg">
    <div class="text-center row justify-center">
      <div class="wrapper margin-auto">
        <div class="text" style="width: 29ch" v-if="isNewPlayer">
          Welcome to your meal planner!
        </div>

        <div class="text" style="width: 19ch" v-if="!isNewPlayer">
          Meal Prescriptions
        </div>

        <p v-if="isNewPlayer">
          Enter in your
          <q-btn @click="this.$router.push({ name: 'measure' })" color="accent"
            >personal health goals</q-btn
          >
          to get started!
        </p>
      </div>
    </div>

    <!--
    <div class="emoji-transition"></div>
    <h1 class="">😳</h1>
   -->
  </div>
  <div v-if="!isNewPlayer">
    <div class="text-center" v-html="percentToNextLevel()"></div>

    <div class="text-center">
      <h5>Your Level {{ levelNumber }} Meal Plans</h5>
    </div>
    <span class="doc-talk">
      <div class="bit8-doc"></div>
      <div class="paperSheetFlat shadow">
        <div v-if="userBodyGoal <= 0">
          <span class="doctor-chat">Dr. Doctor</span>:Don't worry about eating
          too much, if you're still hungry then eat more
          <span
            class="mdi mdi-comment-quote-outline citation"
            @click="
              citation(
                6,
                'Whole Food Plant Based',
                'Eat More to Loose Weight & Boost Immunity',
                `Test have shown that eating more whole foods plant based meals actually sped up weight loss, and can stop and reverse Cardiovascular disease & type 2 diabetes [see below], even when subjects were told to eat <em>as much as they wanted</em>. Diets don't work really work (do you want to count calories or weight out portions when your 90, if you're so lucky?) or just eat healthy food until your full.`,
                `Many patients are interested in making dietary changes, and the WFPB (Whole Food Plant Based) diet can be offered as a safe and effective option for losing weight and obtaining some reduction in cholesterol, without necessarily increasing exercise. The main advantage is in eating to satiation without restricting the amount of food eaten. This small study also showed several improvements with chronic disease risk factors and quality of life, which were largely maintained to 12 months... [PMID: 28319109, 2017 C.E.]
                <hr/>
                <div class='title-h6 text-center'>Cardiovascular Disease</div>
                In summary, current palliative cardiovascular medicine consisting of drugs, stents, and bypass surgery cannot cure or halt the vascular disease epidemic and is financially unsustainable. WFPB can restore the ability of endothelial cells to produce nitric oxide, which can halt and reverse disease without morbidity, mortality, or added expense. As powerful as the data are, it is unconscionable not to inform the cardiovascular disease patient of this option for disease resolution. To begin to eliminate chronic illness, the public needs to be made aware that a pathway to this goal is through WFPBN [PMID: 28630609, 2017 C.E.].
                <hr/>
                <div class='title-h6 text-center'>Cardiovascular Disease, Type 2 Diabetes, and more</div>
                This paper demonstrates proof of concept by detailing four cases that utilized an intensive, therapeutic lifestyle intervention change to dramatically reverse disease and reduce healthcare costs. Type 2 diabetes remission, though now known to be possible for many patients, is a relatively unusual outcome for most individuals because they do not pursue lifestyle changes that would enable it. [PMID: 34769879, 2021 C.E.]<hr/>
                <div class='title-h6 text-center'>Reversal of Type 2 Diabetes</div>
                Clinical and pathophysiological studies have shown type 2 diabetes to be a condition mainly caused by excess, yet reversible, fat accumulation in the liver and pancreas. [PMID: 31097391, 2019]`,
                '',
                'theme-checked'
              )
            "
          ></span
          ><br />
          <span class="doctor-chat">Dr. Doctor</span>:These satiating soups &
          salads will help to curb your appetite before every meal<br />
          <span class="doctor-chat">Dr. Doctor</span>:Also remember to have your
          two cups of water before every meal!
        </div>
        <div v-if="userBodyGoal >= 1">
          <span class="doctor-chat">Dr. Doctor</span>:These satiating soups &
          salads will help to curb your appetite before every meal<br />
          <span class="doctor-chat">Dr. Doctor</span>:Don't worry about too many
          calories, worry about the type and exercise are an important part of a
          nutritional diet!<span
            class="mdi mdi-comment-quote-outline citation"
            @click="
              citation(
                6,
                'Alcohol & Cancer',
                'Moderate Alcohol Consumption Is NOT Associated with Reduced All-cause Mortality',
                `No level of regular alcohol consumption was associated with reduced all-cause mortality.  [PMID: 26524703, 2016 C.E.].
                        Alcohol use, including light to moderate drinking, continues to cause considerable cancer burden...`,
                `We found that high intake of total proteins was associated with a lower risk of mortality from all causes. Intake of plant protein was also associated with a lower risk of mortality from all causes and cardiovascular diseases, which is consistent with its beneficial effects on cardiometabolic risk factors, including blood lipid and lipoprotein profiles, blood pressure, and glycaemic regulation. These findings have important public health implications as intake of plant protein can be increased relatively easily by replacing animal protein and could have a large effect on longevity. Also, an additional 3% of energy from plant proteins a day was associated with a 5% lower risk of death from all causes. Our findings therefore strongly support the existing dietary recommendations to increase consumption of plant proteins in the general population.  [PMID: 33338220, 2020 C.E.]
                      `,
                '',
                'theme-checked'
              )
            "
          ></span>
        </div>
        <details>
          <summary>
            <span class="title-warning">Additional Tips</span>
          </summary>
          <ul v-if="userBodyGoal <= 0" class="text-left normal-ul">
            <!-- Loose or maintain weight -->

            <li>If you're rushed then have some fruit before each meal</li>
            <li>The salads are also quick!</li>
            <li>If you have time try a soup before your meal</li>
          </ul>
          <ul v-if="userBodyGoal >= 1" class="text-left normal-ul">
            <!-- gain weight -->
            <li>All Shakes and smoothies are quick & easy</li>
            <li>High carbs are great if you're exercising</li>
          </ul>
        </details>
      </div></span
    >
    <details class="q-ma-sm q-pb-sm">
      <summary class="text-center meal-details title-h6 q-mb-sm q-pb-sm">
        Simple Salads
      </summary>
      <div class="completed-button text-center">
        <q-btn color="accent" @click="updateProgress()"
          >I Ate One of the Salads!
        </q-btn>
      </div>
      <div class="text-center" v-html="thisWeeksSalad"></div>
    </details>
    <details class="q-ma-sm q-pb-sm">
      <summary class="text-center meal-details title-h6 q-mb-sm q-pb-sm">
        Fruit Appetizers
      </summary>
      <div class="completed-button text-center">
        <q-btn color="accent" @click="updateProgress()"
          >I Ate One of the Fruits!
        </q-btn>
      </div>
      <div class="text-center" v-html="thisWeeksFruit"></div>
    </details>
    <details class="q-ma-sm q-pb-sm">
      <summary class="text-center meal-details title-h6 q-mb-sm q-pb-sm">
        One Pot Soups
      </summary>
      <div class="completed-button text-center">
        <q-btn color="accent" @click="updateProgress()"
          >I Ate One of the Soups!
        </q-btn>
      </div>
      <div class="text-center" v-html="thisWeeksSoups"></div>
    </details>
  </div>
  <!-- <q-btn
    color="purple"
    @click="showLevelUp('center')"
    label="Show Notification"
  /> -->
  <div v-if="showCitationModal">
    <Modal @close="toggleCitationModal" :theme="citationTheme" cite="cite">
      <template></template>
      <template v-slot:cite>
        <h4 class="title-h4">{{ citationName }}</h4>
        <div class="title-h6 text-center title-warning">
          {{ citationCaption }}
        </div>
        <div class="paperSheetFlat">
          <div class="text-center">
            <a :href="baseURL + '/citations/' + citationID" target="_blank"
              >see full citations & sources here</a
            ><br />
            <div class="text-h5">Basic Overview</div>
            <span class="title-negative">
              {{
                citationTheme === "theme-red"
                  ? "WARNING: this method's use is questionable"
                  : ""
              }}</span
            >
            <span class="title-negative">
              {{
                citationTheme === "theme-notice"
                  ? "WARNING: your data could be inaccurate"
                  : ""
              }}</span
            >
            <span class="title-warning">
              {{
                citationTheme === "theme-invitro"
                  ? "WARNING: data is from tests done in vitro (in petri dishes or test tubes) this doesn't mean it's invalid, but be aware."
                  : ""
              }}</span
            >
            <span class="text-negative">
              {{
                citationTheme === "theme-animal"
                  ? "WARNING: data is from tests done on lab animals, this is one of the least reliable studies as humans are very different from mice or rats."
                  : ""
              }}</span
            >
            <br />
          </div>

          <div>
            <span v-html="citationShort"></span>
          </div>
          <br />
          <span class="title-positive text-center">
            {{
              citationTheme === "theme-checked"
                ? "FYI: data is from a verified meta analysis or random controlled trials with real human subjects."
                : ""
            }}</span
          >
          <span class="text-positive text-center">
            {{
              citationTheme === "theme-meta"
                ? "FYI: data is from verified meta analysis with real human subjects."
                : ""
            }}</span
          >
          `<span class="title-warning">
            {{
              citationTheme === "theme-quant"
                ? "FYI: data is from quantitative tests done by collecting and testing samples taken by scientists or medical professionals"
                : ""
            }}</span
          >`
          <span class="title-warning text-center">
            {{
              citationTheme === "theme-obs"
                ? "FYI: data is from observational studies, as it would be impractical or unethical to perform controlled tests to verify this data."
                : ""
            }}</span
          >
          <span class="text-positive text-center">
            {{
              citationTheme === "theme-rct"
                ? "FYI: data is from verified double blind randomized placebo controlled trial with real human subjects."
                : ""
            }}</span
          >

          <p>
            <span v-html="citationWhy"></span>
          </p>
        </div>
        <div class="paperSheetFlat" v-show="citationSummary">
          <!-- [<router-link to="/about">abooot</router-link>] {{ citationName }} |
            {{ citationID }} | {{ citationCaption }} | {{ citationShort }} -->
          <div class="text-center text-h5">Sources / Excerpts</div>
          <kbd class="cite-text">
            <span v-html="citationSummary"></span> <br />
            <a :href="baseURL + '/citations/' + citationID" target="_blank"
              >full citations are here</a
            >
          </kbd>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import { LocalStorage } from "quasar";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { useQuasar } from "quasar";
import Modal from "src/components/Modal.vue";
// // Create the observer
// const dtalk = document.querySelector(".doc-talk");
// dtalk.classList.remove("slide-in");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       dtalk.classList.add("slide-in");
//       return;
//     }

//     dtalk.classList.remove("slide-in");
//   });
// });

// observer.observe(document.querySelector(".doc-talk"));

export default {
  components: { Modal },
  data() {
    const $q = useQuasar();
    return {
      showCitationModal: false,
      levelProgress: LocalStorage.getItem("user.level.progress"),
      levelNumber: LocalStorage.getItem("user.level.number"),
      completedMeals: 0,
    };
  },
  methods: {
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
    showLevelUp(position) {
      this.$q.notify({
        message: `Congratulations! <em>You</em> are now on level ${this.levelNumber}!`,
        caption: `Keep at it, you're doing amazing!`,
        classes: "level-up",
        color: "positive",
        position,
        type: "positive",
        icon: "mdi-party-popper",
        html: true,
        timeout: 3500,
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
        actions: [
          {
            label: "x",
            color: "white",
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    },
    updateProgress() {
      let currentProgress = LocalStorage.getItem("user.level.progress") * 1;
      let currentLevel = LocalStorage.getItem("user.level.number") * 1;

      let newProgress;

      if (currentProgress >= 1) {
        newProgress = (
          currentProgress *
          ((currentLevel + 1 * 2) / (currentLevel + 1.1))
        ).toFixed(2);
        confetti({
          particleCount: 50,
          spread: 200,
          origin: { y: 0.5, x: 0.6 },
        });
      } else {
        newProgress = 3;
        if (currentLevel <= 1) newProgress = 20;
        if (currentLevel == 2) newProgress = 10;
        if (currentLevel == 3) newProgress = 5;
        confetti({
          particleCount: 50,
          scalar: 0.75,
          shapes: ["circle"],
          origin: { y: 0.5, x: 0.6 },
        });
      }
      if (newProgress >= 100) {
        confetti({
          particleCount: 500,
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
          this.showLevelUp("center");
        }, 1000);
        confetti({
          particleCount: 100,
          scalar: 0.75,
          shapes: ["circle"],
        });
        newProgress = 0;

        LocalStorage.set("user.level.number", currentLevel * 1 + 1);
        // this.levelNumber = LocalStorage.getItem("user.level.number") * 1;
      }
      LocalStorage.set("user.level.progress", newProgress);
      // LocalStorage.set("user.level.number", 0);
      // LocalStorage.set("user.level.progress", 0);
      this.levelProgress = newProgress;
      this.levelNumber = LocalStorage.getItem("user.level.number") * 1;
      // alert(LocalStorage.getItem("user.level.progress"));
    },
    checkGI(type = 0, food = "", gi = 0, carbs = 0) {
      if (type == 0) {
      }
      if (type == 1) {
        // Get Glycemic Load
        return (carbs * gi) / 100;
      }
      if (type == 2) {
        // Get grams of available carbs from GL and carbs
        return (gi * 100) / carbs; // gi is really GL
      }
    },
    randomWeightedItem(items) {
      let cumulative = 100;
      let random = Math.floor(Math.random() * 100);

      for (let i = 0; i < items.length; i++) {
        cumulative -= items[i].weight;
        if (random >= cumulative) {
          return items[i];
        }
      }
    },
    doit() {
      alert("!!!");
    },
    percentToNextLevel() {
      return `Progress to Next Level: ${
        this.levelProgress ? this.levelProgress + "%" : "0%"
      }`;
    },
  },
  computed: {
    isNewPlayer() {
      console.log("uage:", LocalStorage.getItem("userAge"));
      return LocalStorage.getItem("userAge") == "null";
    },

    userBodyGoal() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));

      return LocalStorage.getItem("user.body.goal");
    },
    thisWeeksSoups() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));
      let mainoutput = `

      `;

      if (LocalStorage.getItem("user.level.number") > 3) {
        mainoutput += `Keep up the great work!`;
      }
      mainoutput += `
        <div class="row justify-center">
          <div class="width-auto">
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Classic Noodle</summary>
            <ul class="normal-ul">
                <p class="title-h6">Ingredients:</p>
                <p>Use fresh or dried ground spices, double if fresh</p>
                <li>½ cup carrots (sliced)</li>
                <li>½ cup celery stocks (sliced)</li>
                <li>½ cup onion (diced)</li>

                <li>½ cup potato (diced/cubed)</li>
                <li>2 tbsp garlic (minced and/or powdered)</li>
                <li>½ cup noodles (suggested: brown rice spiral noodles)</li>
                <li>5 cups water</li>
                <li>1 tbsp (apple cider) vinegar</li>
                <li>1 tbsp sage</li>
                <li>1 tbsp thyme</li>
                <li>½ tsp onion powder</li>
                <li>¼ tsp black pepper</li>

                <li>Suggested: ¼ tsp marjoram</li>
                <li>Suggested: ¼ tsp celery seed</li>
                <li>Suggested: ⅛ tsp cayenne pepper</li>
                <li>Suggested: 2 tbsp nutritional yeast</li>
                <li>Suggested:¼ tsp turmeric</li>
                <li>Optional: 1 tbsp tomato paste</li>
                <li>Optional: any other veggies, also try with mushrooms, if you like</li>
              </ul>
              <ol>
              <p class="title-h6">Directions:</p>
                <li>Put all ingredients, except for noodles, in a pot and cook on medium until carrots and potatoes are just tender (usually once it starts to boil)</li>
                <li>Add in pasta and cook until tender/<em>el dente</em></li>
                <li>Goes well garnished with fresh parsley and lemon</li>
                </ol>

          </details>

        <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Cozy Chili</summary>
            <ul class="normal-ul">
                <p class="title-h6">Ingredients:</p>
                <p>Use fresh or dried ground spices, double if fresh</p>
                <li>½ cup (red) bell pepper (diced)</li>
                <li>½ cup carrots (diced)</li>
                <li>½ cup celery stocks (diced)</li>
                <li>½ cup (red) onion (diced)</li>

                <li>2 tbsp garlic (minced and/or powdered)</li>
                <li>2 cups water</li>
                <li>2 cups (or canned) diced tomatoes</li>
                <li>1 cup (or canned) cooked kidney beans (or other beans)</li>
                <li>1 tbsp (balsamic) vinegar</li>
                <li>2 tbsp chili powder</li>
                <li>2 tbsp oregano</li>
                <li>½ tsp onion powder</li>
                <li>¼ tsp black pepper</li>
                <li>4 tbsp tomato paste</li>
                <li>Suggested: ¼ tsp bayleaf</li>

                <li>Suggested: ⅛ tsp cayenne pepper</li>
                <li>Suggested:¼ tsp turmeric</li>



                <li>Optional: any other veggies, beans, lentils, also try with mushrooms, if you like</li>
              </ul>
              <ol>
              <p class="title-h6">Directions:</p>
                <li>Put all ingredients in a pot and cook on medium until carrots tender, reduce heat and simmer</li>

                <li>Goes well garnished with fresh cilantro, nutritional yeast, and ground sunflower seeds</li>
                </ol>

          </details>
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Creamy Mushroom</summary>
            <ul class="normal-ul">
                <p class="title-h6">Ingredients:</p>
                <p>Use fresh or dried ground spices, double if fresh</p>
                <li>½ cup celery stocks (sliced or minced)</li>
                <li>½ cup onion (diced)</li>

                <li>1 cup potato (cooked and mashed)</li>
                <li>2 tbsp garlic (minced and/or powdered)</li>
                <li>1 cups (button) mushrooms (sliced)</li>
                <li>½ cups (button) mushrooms (minced)</li>
                <li>4 cups water</li>
                <li>1 tbsp (balsamic) vinegar</li>
                <li>1 tbsp sage</li>
                <li>1 tbsp thyme</li>
                <li>½ tsp onion powder</li>
                <li>¼ tsp black pepper</li>

                <li>Suggested: 2 tbsp (or more) porcini mushrooms (minced or sliced)</li>
                <li>Suggested: ½ tsp marjoram</li>
                <li>Suggested: ¼ tsp celery seed</li>
                <li>Suggested: 2 tbsp nutritional yeast</li>
                <li>Optional: ½ tbsp tomato paste</li>
                <li>Optional: any other mushrooms or veggies you like</li>
              </ul>
              <ol>
              <p class="title-h6">Directions:</p>
                <li>Put all ingredients, in a pot and cook on medium until carrots, celery, and mushrooms are tender</li>
                <li>Goes well garnished with fresh parsley </li>
                </ol>
          </details>


        </div>
        </div>


          `;

      // mainoutput = `<div class="row justify-center">
      // <div class="width-auto">Soups coming soon!</div></div>`;
      return mainoutput;
    },
    thisWeeksSalad() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));
      let mainoutput = `

      `;

      if (LocalStorage.getItem("user.level.number") > 3) {
        mainoutput += `Keep up the great work!`;
      }
      mainoutput += `
        <div class="row justify-center">
          <div class="width-auto">
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Caesar Salad </summary>
              <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>Lettuce (e.g: Romain, Arugula/Rocket, Redleaf)</li>
                <li>Optional Nuts or Seeds (e.g Crushed Walnuts, Slivered Almonds, Pumpkin Seeds, etc.) for some crunch</li>
                <li>Optional any veggies you like: cucumbers, tomatoes, broccoli, sprouts, etc.</li>
              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>½ cup water</li>
                <li>1 avocado or small/baby boiled or baked potato</li>
                <li>½ lemon juiced or 1 tbsp lemon juice</li>
                <li>2 tsp vinegar (apple cider or red wine vinegar suggested)</li>
                <li>1 tsp dijon or yellow mustard, or ¼ tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or ½ tbsp garlic powder</li>
                <li>⅛ tsp black pepper</li>
                <li>Optional: 2 tsp nutritional yeast; 1 tsp parsley dried or fresh</li>

                <p class="title-h6">Directions:</p>
                <li>Put all dressing ingredients in blender, or use an immersion/stick blender, then drizzle over lettuce and add optional toppings</li>
                <p><br><b class="blink-this">OR...</b></p>
                <li>Finely mash avocado/potato and garlic and whisk (or put in sealed jar and shake) all ingredients together, then drizzle over lettuce and add add optional toppings</li>

              </ul>



          </details>

        <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Greek Salad</summary>
            <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>Lettuce (optional) (e.g: Baby Spinach, Kale, Endive, Watercress)</li>
                <li>½ Red Onion (diced or sliced)</li>
                <li>1 Bell Pepper (diced or sliced)</li>
                <li>¼ cup Tomatoes (e.g. grape or cherry halved) </li>
                <li>½ Cucumber or 2 baby cucumbers (diced or sliced)</li>
                <li>Optional: sun-dried tomatoes</li>
                <li>Optional: 2 Peperoncinis (sliced)</li>
              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>2 tbsp water</li>
                <li>2 tbsp vinegar (apple cider or red wine vinegar suggested)</li>
                <li>1 lemon juiced or 2 tbsp lemon juice</li>
                <li>1 tbsp dried oregano</li>
                <li>1-2 garlic cloves, peeled, or ½ tbsp garlic powder</li>
                <li>⅛ tsp black pepper</li>
                <li>Optional: 2 tsp nutritional yeast</li>
                <li>Optional: 1 tsp onion powder</li>

                <p class="title-h6">Directions:</p>
                <li>Put all dressing ingredients in blender or use an immersion/stick blender, then mix dressing with veggies</li>
                <p><br><b class="blink-this">OR...</b></p>
                <li>Finely mash garlic and whisk (or put in sealed jar and shake) all ingredients together, then mix well with veggies</li>

              </ul>

          </details>
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Thai Salad</summary>
            <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>1.5 cup Napa or Red Cabbage (shredded), or mixed red and green or Napa cabbage</li>
                <li>2 large carrots (shredded)</li>
                <li>Bell peppers, usually red, (shredded)</li>
                <li>Recommended: ½ cup cooked edamame</li>
                <li>Optional: Green/Spring Onions (sliced)</li>


                <li>Optional: other veggies like broccoli florets, shredded kale, or any sprouts</li>

              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>2 tbsp water</li>
                <li>2 tbsp vinegar (e.g. apple cider, white, or rice wine)</li>
                <li>1 lime juiced or 2 tbsp lime juice</li>
                <li>1 tsp dijon or yellow mustard, or ¼ tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or ½ tbsp garlic powder</li>
                <li>1 tsp ginger, or ½ tsp dried ginger</li>

                <li>⅛ tsp black pepper</li>
                <li>Suggested: 1 tbsp lemon grass (dried, fresh or paste)</li>
                <li>Suggested: 1 tbsp tahini or peanut butter (will make it creamier) can also use 4 tbsp sesame seeds or peanuts if using blender</li>
                <li>Optional: 1 tbsp cilantro</li>
                <li>Optional: 1 tsp onion powder</li>



                <p class="title-h6">Directions:</p>
                <li>Put all dressing ingredients in blender or use an immersion/stick blender, then mix dressing with veggies and let sit for 10 minutes</li>
                <p><br><b class="blink-this">OR...</b></p>
                <li>Finely mash garlic and whisk (or put in sealed jar and shake) all ingredients together, then mix well with veggies and let sit for 10 minutes</li>

              </ul>
          </details>
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Coleslaw</summary>
            <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>1.5 cup Red Cabbage (shredded), or mixed red and green cabbage</li>
                <li>2 large carrots (shredded)</li>
                <li>Optional: Green/Spring Onions (sliced)</li>


                <li>Optional: other veggies like bell peppers or any sprouts</li>

              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>2 tbsp water</li>
                <li>2 tbsp vinegar (e.g. apple cider, white, or rice wine)</li>
                <li>1 lemon juiced or 2 tbsp lemon juice</li>
                <li>1 tsp dijon or yellow mustard, or ¼ tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or ½ tbsp garlic powder</li>
                <li>⅛ tsp black pepper</li>
                <li>Optional: 1 tbsp tahini (will make it creamier) can also use 4 tbsp sesame seeds if using blender</li>
                <li>Optional: ½ teaspoon celery seed powder</li>
                <li>Optional: 1 tsp onion powder</li>



                <p class="title-h6">Directions:</p>
                <li>Put all dressing ingredients in blender or use an immersion/stick blender, then mix dressing with veggies and let sit for 10 minutes</li>
                <p><br><b class="blink-this">OR...</b></p>
                <li>Finely mash garlic and whisk (or put in sealed jar and shake) all ingredients together, then mix well with veggies and let sit for 10 minutes</li>

              </ul>
          </details>

        </div>
        </div>


          `;

      console.log(
        "!!!:",
        mainoutput,
        LocalStorage.getItem("user.level.number"),
        LocalStorage.getItem("user.level.progress")
      );
      return mainoutput;
    },
    thisWeeksFruit() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));
      let mainoutput = `

      `;

      if (LocalStorage.getItem("user.level.number") > 3) {
        mainoutput += `Keep up the great work!`;
      }
      mainoutput += `
        <div class="row justify-center">
          <div class="width-auto text-left bg-white">

              <ul class="normal-ul">
                <h6 class="">Feel Free to eat more than the suggested amount or to combine fruits</h6>
                <li>1-2 Apple</li>
                <li>1-2 Apricots</li>
                <li>2 Avocados</li>
                <li>1-2 Bananas</li>
                <li>½ Cantaloupe</li>
                <li>2 Kiwis (suggested: baby or golden kiwi)</li>
                <li>1-2 Mango</li>
                <li>1-2 Oranges</li>
                <li>1-2 Peaches</li>
                <li>1-2 Pears</li>
                <li>2-3 Plums (suggested: black plums)</li>
                <li>¼ Water mellon</li>


              </ul>







        </div>
        </div>


          `;

      console.log(
        "!!!:",
        mainoutput,
        LocalStorage.getItem("user.level.number"),
        LocalStorage.getItem("user.level.progress")
      );
      return mainoutput;
    },
  },
};
// window.localStorage.getItem;
</script>

<style lang="scss">
.q-page-container {
  margin: auto;
  /* max-width: 1000px; */
  /* background: hotpink; */
  max-width: 95%;
}
.type-writer .text {
  animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 5px solid $warning;
  text-align: left;
  /* margin: 1em auto; */
}
.width-auto {
  min-width: 75%;
  max-width: 99%;
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
@keyframes emoji {
  50% {
    border-color: transparent;
  }
}
.completed-button {
  position: relative;
  right: -10px;
}
.completed-button q-btn {
  color: $info;
}
.meal-details {
  background-image: linear-gradient(to right, $warning, $info);

  // animation: border_anim 5s linear infinite;
}
.level-up .q-notification__icon {
  color: $warning;
  text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
    -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
    0px -2px 0 $info;
}
.level-up .q-notification__actions--with-media {
  // position: relative;
  // top: -1.2em;
  // right: -1.2em;
}
.level-up {
  box-shadow: 0px -4px 0px 0px $dark, 0px 5px 0px 0px $dark,
    -4px 0px 0px 1px$dark, 4px 0px 0px 1px $dark;
  border-radius: 0%;
}
.doc-talk {
  animation: slide-in 1s ease-in-out;
  //, blink 0.5s step-end infinite alternate;
  position: relative;
}
@keyframes slide-in {
  0% {
    left: -100%;
  }
  // 85% {
  //   left: -10%;
  // }
  // 90% {
  //   left: 0%;
  // }
  // 99% {
  //   left: -5%;
  // }
  100% {
    left: 0%;
  }
}
</style>
