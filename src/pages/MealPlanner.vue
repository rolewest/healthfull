<template>
  <div class="title-h4 q-pa-lg">
    <type-writer>
      <div class="wrapper">
        <div class="text" style="width: 46ch" v-if="isNewPlayer">
          Welcome to your meal planner!
        </div>
        <div class="text" style="width: 26ch" v-else>
          Umm... Nothing here yet...
        </div>
      </div>
    </type-writer>
    Select what you want:
    <ul>
      <li>Maintain weight</li>
      <li>Loose fat/weight</li>
      <li>Gain muscle</li>
      <li>Increase health</li>
    </ul>
    <p>
      To loose weight below are the foods you are recommended to only eat, if
      it's not on the list: don't eat or drink it:
    </p>
    <p>Food: Whole vegetables & fruit (frozen or fresh),</p>
    <p>Drink: Water, Green Tea, Hibiscus Tea, Black Tea, Black Coffee</p>
    <!-- Like measurements, we take in info here too, and give you things like: daily suggested sugar, salt, fruit, protein, carbs etc. intake,
    -->
    <div class="emoji-transition"></div>
    <h1 class="">😳</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isNewPlayer() {
      console.log("uage:", window.localStorage.getItem("userAge"));
      return window.localStorage.getItem("userAge") == "null";
    },
  },
};
// window.localStorage.getItem;
</script>

<style>
type-writer .text {
  animation: typing 3s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid $warning;
  text-align: left;
  /* margin: 1em auto; */
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
