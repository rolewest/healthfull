<template>
  <div class="q-pa-lg questItem">
    <div class="text-center text-h3">
      Your Home B<q-icon
        name="mdi-home-heart"
        size="1.5em"
        color="negative"
      ></q-icon
      >se
    </div>
    <div class="row justify-center">
      <type-writer>
        <div class="wrapper title-h4">
          <div class="text" style="width: 27ch" v-if="isNewPlayer">
            Welcome to your home base!
          </div>
          <!-- <div class="text" style="width: 19ch" v-else>Nothing here yet...</div> -->
        </div>
      </type-writer>
    </div>
    <div class="row justify-center bg-primary text-white">
      <div class="border-double-1 q-pa-lg" v-if="isNewPlayer">
        If you're new here it's best to enter in your measurements to get
        started
        <div class="q-mt-md">
          <q-btn
            color="positive"
            @click="this.$router.push({ name: 'measure' })"
            >Let's Do It!</q-btn
          >
        </div>
      </div>
    </div>
    <div class="border-double-3 q-pa-lg q-ma-md row justify-center">
      <div class="text-center" v-if="hasSetlist">
        <p>Build a SetList!</p>
        <q-btn class="q-pa-md border-double-1 q" color="info">
          <q-avatar
            class="-mr-sm q-pb-sm"
            color="negative"
            icon="mdi-hammer-wrench"
          >
          </q-avatar>
          <br />
          <div class="q-ma-sm">Setlist</div>
        </q-btn>
      </div>
      <div class="text-center" v-else-if="!hasSetlist">
        <p>Earn Daily eXercise Points<br />with your custom setlist!</p>
        <q-btn
          class="q-pa-md border-double-1 q"
          color="info"
          @click="this.$router.push({ name: 'player' })"
        >
          <q-avatar
            class="-mr-sm q-pb-sm"
            color="accent"
            icon="mdi-fire-circle"
          >
          </q-avatar>
          <br />
          <div class="q-ma-sm">Setlist</div>
        </q-btn>
      </div>
    </div>
    <!-- user data -->
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
            icon="mdi-star-shooting"
            color="warning"
            text-color="white"
            size="40px"
          >
          </q-avatar>
          {{ getUserSavedValue("user.points.xp") }} XP
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
    </fieldset>
  </div>

  <!--  -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getUserSavedValue(value = "") {
      console.log("sdfdf:::", window.localStorage);
      return window.localStorage.getItem(value);
    },
  },
  computed: {
    isNewPlayer() {
      console.log("uage:", window.localStorage.getItem("userAge"));
      return window.localStorage.getItem("userAge") == "null";
    },
    hasSetlist() {
      console.log("uagdde:", window.localStorage.getItem("userCurrentSetlist"));
      return window.localStorage.getItem("userCurrentSetlist") == "null";
    },
  },
};
</script>

<style lang="scss">
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
body {
  // background: #e8dcb8 !important;
  background-image: linear-gradient(135deg, $primary 25%, transparent 25%),
    linear-gradient(225deg, $primary 25%, transparent 25%),
    linear-gradient(45deg, $primary 25%, transparent 25%),
    linear-gradient(315deg, $primary 25%, #e5e5f7 25%) !important;
  background-position: 34px 0, 34px 0, 0 0, 0 0 !important;
  background-size: 34px 34px !important;
  background-repeat: repeat !important;
}
</style>
