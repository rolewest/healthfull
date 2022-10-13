<template>
  <div class="title-h4 q-pa-lg">
    <type-writer class="text-center row justify-center">
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
    </type-writer>

    <!--
    <div class="emoji-transition"></div>
    <h1 class="">😳</h1>
   -->
  </div>
  <div v-if="!isNewPlayer">
    <div class="text-center" v-html="percentToNextLevel"></div>
    <div class="text-center" v-html="thisWeeksMeal"></div>
  </div>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
  data() {
    return {
      levelProgress: LocalStorage.getItem("user.level.progress"),
    };
  },
  methods: {
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
  },
  computed: {
    isNewPlayer() {
      console.log("uage:", LocalStorage.getItem("userAge"));
      return LocalStorage.getItem("userAge") == "null";
    },
    percentToNextLevel() {
      return `Progress to Next Level: ${
        LocalStorage.getItem("user.level.progress")
          ? LocalStorage.getItem("user.level.progress") + "%"
          : "0%"
      }`;
    },
    thisWeeksMeal() {
      console.log("LocalStorage:", JSON.stringify(LocalStorage.getAll()));
      let mainoutput = `<h5>Your Level ${LocalStorage.getItem(
        "user.level.number"
      )} Simple Salads</h5>

      `;
      if (
        LocalStorage.getItem("user.level.number") == "1" &&
        LocalStorage.getItem("user.level.progress") <= 10
      )
        mainoutput += `
        <div class="row justify-center">
          <div class="width-auto">
          <details class="self-center text-left border-double-1 bg-white q-pa-md">
            <summary>Easy Caesar Salad</summary>
              <ul class="normal-ul">
                <li>lettuce (e.g: Redleaf, Romain, Arugula/Rocket)</li>
                <li>
              </ul>

          </details>

        <details class="self-center text-left border-double-1 q-pa-md">
            <summary>Greek Salad</summary>
              <ul class="normal-ul">
                <li>red lettuce</li>
              </ul>

          </details>
          <details class="self-center text-left border-double-1 q-pa-md">
            <summary>Thai Salad</summary>
              <ul class="normal-ul">
                <li>tomatoes (e.g. grape or cherry tomatoes)</li>
                <li>cucumbers (sliced)</li>

              </ul>
          </details>
          <details class="self-center text-left border-double-1 q-pa-md">
            <summary>Coleslaw</summary>
              <ul class="normal-ul">
                <li>Apple Cider Vinegar - 1 TBSP</li>
                  <ul class="sub-ul">
                  <li>Apple Cider Vinegar - 1 TBSP</li>

                  </ul>
              </ul>
              <ul class="normal-ul">
                <li>Apple Cider Vinegar - 1 TBSP</li>
                  <ul class="sub-ul">
                  <li>Apple Cider Vinegar - 1 TBSP</li>

                  </ul>
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
type-writer .text {
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
</style>
