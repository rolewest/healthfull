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
    <!--  Welcome to your home base, like all your data, it only belongs to you, not us. -->
    <h1>😳</h1>
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
</style>
