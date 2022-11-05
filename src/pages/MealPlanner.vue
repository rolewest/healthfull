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
          <q-btn @click="this.$router.push({ name: 'measure' })"
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

    <div class="text-center" v-html="thisWeeksMealType"></div>
    <details class="q-ma-sm q-pb-sm">
      <summary class="text-center meal-details title-h6 q-mb-sm q-pb-sm">
        Simple Salads
      </summary>
      <div class="completed-button text-center">
        <q-btn color="accent" @click="updateProgress()"
          >I Ate One of the Salads!
        </q-btn>
      </div>
      <div class="text-center" v-html="thisWeeksMeal"></div>
    </details>
  </div>
</template>

<script>
import { LocalStorage } from "quasar";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
export default {
  data() {
    return {
      levelProgress: LocalStorage.getItem("user.level.progress"),
      levelNumber: LocalStorage.getItem("user.level.number"),
      completedMeals: 0,
    };
  },
  methods: {
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

    thisWeeksMealType() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));
      let mainoutput = `<h5>Your Level ${this.levelNumber} Meal Plans</h5>`;
      return mainoutput;
    },
    thisWeeksMeal() {
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
            <summary>Easy Caesar Salad </summary>
              <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>Lettuce (e.g: Romain, Arugula/Rocket, Redleaf)</li>
                <li>Optional Nuts or Seeds (e.g Crushed Walnuts, Slivered Almonds, Pumpkin Seeds, etc.) for some crunch</li>
                <li>Optional any veggies you like: cucumbers, tomatoes, broccoli, sprouts, etc.</li>
              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>1/2 cup water</li>
                <li>1 small/baby boiled or baked potato</li>
                <li>1/2 lemon juiced or 1 tbsp lemon juice</li>
                <li>2 tsp vinegar (apple cider or red wine vinegar suggested)</li>
                <li>1 tsp dijon or yellow mustard, or 1/4 tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or 1/2 tbsp garlic powder</li>
                <li>1/8 tsp black pepper</li>
                <li>Optional: 2 tsp nutritional yeast; 1 tsp parsley dried or fresh</li>

                <p class="title-h6">Directions:</p>
                <li>Put all dressing ingredients in blender, or use an immersion/stick blender, then drizzle over lettuce and add optional toppings</li>
                <p><br><b class="blink-this">OR...</b></p>
                <li>Finely mash potato and garlic and whisk (or put in sealed jar and shake) all ingredients together, then drizzle over lettuce and add add optional toppings</li>

              </ul>



          </details>

        <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Greek Salad</summary>
            <ul class="normal-ul">
                <p class="title-h6">Salad:</p>
                <li>Lettuce (optional) (e.g: Baby Spinach, Kale, Endive, Watercress)</li>
                <li>1/2 Red Onion (diced or sliced)</li>
                <li>1 Bell Pepper (diced or sliced)</li>
                <li>1/4 cup Tomatoes (e.g. grape or cherry halved) </li>
                <li>1/2 Cucumber or 2 baby cucumbers (diced or sliced)</li>
                <li>Optional: sun-dried tomatoes</li>
                <li>Optional: 2 Peperoncinis (sliced)</li>
              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>2 tbsp water</li>
                <li>2 tbsp vinegar (apple cider or red wine vinegar suggested)</li>
                <li>1 lemon juiced or 2 tbsp lemon juice</li>
                <li>1 tbsp dried oregano</li>
                <li>1-2 garlic cloves, peeled, or 1/2 tbsp garlic powder</li>
                <li>1/8 tsp black pepper</li>
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
                <li>Recommended: 1/2 cup cooked edamame</li>
                <li>Optional: Green/Spring Onions (sliced)</li>


                <li>Optional: other veggies like broccoli florets, shredded kale, or any sprouts</li>

              </ul>

              <ul class="normal-ul">
                <p class="title-h6">Dressing:</p>
                <li>2 tbsp water</li>
                <li>2 tbsp vinegar (e.g. apple cider, white, or rice wine)</li>
                <li>1 lime juiced or 2 tbsp lime juice</li>
                <li>1 tsp dijon or yellow mustard, or 1/4 tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or 1/2 tbsp garlic powder</li>
                <li>1 tsp ginger, or ½ tsp dried ginger</li>

                <li>1/8 tsp black pepper</li>
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
                <li>1 tsp dijon or yellow mustard, or 1/4 tsp dry mustard</li>
                <li>1-2 garlic cloves, peeled, or 1/2 tbsp garlic powder</li>
                <li>1/8 tsp black pepper</li>
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
  },
};
// window.localStorage.getItem;
</script>

<style lang="scss">
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
  max-width: 100%;
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
</style>
