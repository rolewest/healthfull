<template @citation="citation">
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <span class="text-h4 holdTitle">
            Health<JustHeart />Full
            <div class="powerBar powerBarGlow"></div>
          </span>
        </q-toolbar-title>

        <!-- <LogoSVG /> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <div class="text-center">
            <JustHeart /><JustHeart /><JustHeart />
            <div class="powerBar"></div>
            Gamify your health
          </div>
        </q-item-label>

        <!--  -->
        <q-item class="menu-option">
          <q-item-section
            clickable
            @click="
              this.$router.push({ name: 'root' });
              this.toggleLeftDrawer();
            "
            avatar
          >
            <q-icon
              name="ti-game"
            /><!-- should also have ability to add another character here -->
          </q-item-section>

          <q-item-section
            @click="
              // this.toggleModal();
              this.$router.push({ name: 'root' });
              this.toggleLeftDrawer();
            "
          >
            <q-item-label>Title Screen</q-item-label>

            <q-item-label caption>Start a new game</q-item-label>
          </q-item-section>
        </q-item>
        <!--  -->
        <!--  -->
        <q-item class="menu-option">
          <q-item-section
            clickable
            @click="
              this.$router.push({ name: 'home' });
              this.toggleLeftDrawer();
            "
            avatar
          >
            <q-icon
              name="mdi-home-heart"
            /><!-- should also have ability to add another character here -->
          </q-item-section>

          <q-item-section
            @click="
              // this.toggleModal();
              this.$router.push({ name: 'home' });
              this.toggleLeftDrawer();
            "
          >
            <q-item-label>Home Base</q-item-label>

            <q-item-label caption>{{ randomCaption("home") }}</q-item-label>
          </q-item-section>
        </q-item>
        <!--  -->

        <q-item class="menu-option">
          <q-item-section
            clickable
            @click="
              this.$router.push({ name: 'measure' });
              this.toggleLeftDrawer();
            "
            avatar
          >
            <q-icon name="ti-ruler-pencil" />
          </q-item-section>

          <q-item-section
            @click="
              // this.toggleModal();
              this.$router.push({ name: 'measure' });
              this.toggleLeftDrawer();
            "
          >
            <q-item-label
              >{{ isNewUser ? "Enter" : "Update" }} Measurements</q-item-label
            >
            <q-item-label caption>{{
              isNewUser ? "Let's see what you're made of!" : "Keep it current!"
            }}</q-item-label>
          </q-item-section>
        </q-item>

        <!--  -->
        <q-item class="menu-option">
          <q-item-section
            clickable
            @click="
              this.$router.push({ name: 'prescription' });
              this.toggleLeftDrawer();
            "
            avatar
          >
            <q-icon
              name="mdi-clipboard-pulse-outline"
            /><!-- should also have ability to add another character here -->
          </q-item-section>

          <q-item-section
            @click="
              // this.toggleModal();
              this.$router.push({ name: 'prescription' });
              this.toggleLeftDrawer();
            "
          >
            <q-item-label>Prescriptions</q-item-label>

            <q-item-label caption>{{
              randomCaption("prescription")
            }}</q-item-label>
          </q-item-section>
        </q-item>
        <!--  -->
        <!--  -->
        <q-item class="menu-option">
          <q-item-section
            clickable
            @click="
              this.$router.push({ name: 'planner' });
              this.toggleLeftDrawer();
            "
            avatar
          >
            <q-icon
              name="mdi-bag-personal-outline"
            /><!-- should also have ability to add another character here -->
          </q-item-section>

          <q-item-section
            @click="
              // this.toggleModal();
              this.$router.push({ name: 'planner' });
              this.toggleLeftDrawer();
            "
          >
            <q-item-label>Inventory</q-item-label>

            <q-item-label caption>{{
              randomCaption("inventory")
            }}</q-item-label>
          </q-item-section>
        </q-item>
        <!--  -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <div v-show="showModal">
      <Modal @close="toggleModal"><BaseMeasure @citation="citation" /> </Modal>
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
              {{ citationShort }}
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
    <!-- q-ma-sm and remove margin from HomeBase -->
    <q-page-container class="">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bottomBar text-white">
      <q-toolbar>
        <q-toolbar-title class="float-right">
          <div class="row justify-center">
            <!-- <button
              class="btn-info btn-primary travelModeButton text-h2"
              @click="$router.push({ name: 'measure' })"
            >
              <q-icon name="mdi-clipboard-pulse" class="text-h2 baseButtonIcon"
                ><div class="statsString"></div
              ></q-icon>
            </button> -->
            <NewPrescriptionButton />
            <button
              :class="{
                'btn-info btn-primary travelModeButton text-h2': true,
                'bg-info travelModeNegative': this.$route.name == 'home',
              }"
              @click="$router.push({ name: 'home' })"
            >
              <q-icon name="mdi-home-heart" class="text-h2"></q-icon>
            </button>

            <!--  -->
            <button
              :class="{
                'btn-info btn-primary travelModeButton text-h2': true,
                'bg-info travelModeNegative': this.$route.name == 'builder',
              }"
              @click="$router.push({ name: 'builder' })"
            >
              <q-icon name="mdi-hammer-wrench" class="text-h2"></q-icon>
            </button>

            <button
              :class="{
                'btn-info btn-primary travelModeButton text-h2': true,
                'bg-info travelModeNegative': this.$route.name == 'player',
              }"
              @click="$router.push({ name: 'player' })"
            >
              <q-icon name="mdi-fire-circle" class="text-h2"></q-icon>
            </button>
            <button
              :class="{
                'btn-info btn-primary travelModeButton text-h2': true,
                'bg-info travelModeNegative': this.$route.name == 'planner',
              }"
              @click="$router.push({ name: 'planner' })"
            >
              <q-icon name="restaurant_menu" class="text-h2"></q-icon>
            </button>
            <!--  -->
            <HeartPulse />
          </div>
          <!-- <button
            class="mdi mdi-weight-lifter btn-info btn-primary travelModeButton text-h1 text-center"
            @click="this.toggleModal"
          ></button> -->
          <!-- <button
            class="btn-info btn-primary travelModeButton text-h1"
            @click="this.toggleModal"
          >
            <q-icon name="ti-ruler-pencil"></q-icon>
          </button> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
// import LogoSVG from "src/components/LogoSVG.vue";
import Modal from "src/components/Modal.vue";

import { defineComponent, ref } from "vue";
import JustHeart from "../components/JustHeart.vue";
import BaseMeasure from "../components/BaseMeasure.vue";

import HeartPulse from "src/components/HeartPulse.vue";
import NewPrescriptionButton from "src/components/NewPrescriptionButton.vue";
// import LogoSVGSmall from "src/components/LogoSVGSmall.vue";

let linksList = [
  {
    title: "Size Me Up!",
    caption: "Let's get started!",
    icon: "mdi-clipboard-pulse-outline", //ti-id-badge ti-panel ico-logo-game-controller-b mdi-human-male-height las la-clipboard
    link: "https://forum.quasar.dev",
    outside: 1,
  },
  {
    title: "Start a Quest",
    caption: "Slay your dragon.",
    icon: "las la-dragon", //ti-game
    link: "https://facebook.quasar.dev",
    outside: 1,
  },
  {
    title: "Resistance Training",
    caption: "in progress...",
    icon: "mdi-weight-lifter",
    link: "#",
    outside: 0,
  },
  {
    title: "Cardio Training",
    caption: "in progress...",
    icon: "las la-heartbeat", //fa-solid fa-heart-circle-bolt
    link: "https://quasar.dev",
    outside: 0,
  },
  {
    title: "My Progress",
    caption: "in progress",
    icon: "fas fa-tasks", // fa-weight  fa-stethoscope fa-microscope ti-bar-chart las la-certificate la-chart-bar
    link: "https://github.com/quasarframework",
    outside: 0,
  },
  {
    title: "Test Eva icons",
    caption: "in progress",
    icon: "eva-heart-outline",
    link: "https://github.com/quasarframework",
    outside: 1,
  },
  {
    title: "Test line-awesome icons",
    caption: "...",
    icon: "las la-weight",
    link: "https://github.com/quasarframework",
    outside: 1,
  },
  {
    title: "Battle the bulge",
    caption: "...",
    icon: "restaurant_menu", // fa-weight  fa-stethoscope fa-microscope
    link: "https://github.com/quasarframework",
    outside: 1,
  },
  {
    title: "Cooking",
    caption: "...",
    icon: "mdi-stove", // fa-weight  fa-stethoscope fa-microscope
    link: "https://github.com/quasarframework",
    outside: 1,
  },
  {
    title: "Discord Chat Channel",
    caption: "in progress",
    icon: "directions_bike",
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Discord Chat Channel",
    caption: "in progress",
    icon: "auto_awesome",
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Change Difficulty",
    caption: "in progress...",
    icon: "speed",
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Journeys & Adventures",
    caption: "",
    icon: "fas la-route",
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Journeys & Adventures",
    caption: "",
    icon: "fas la-hiking",
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Play Game", //las la-file-medical-alt las la-hat-wizard
    caption: "",
    icon: "las la-dice-d6", //las la-dice
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Play Game", //las la-file-medical-alt las la-hat-wizard
    caption: "",
    icon: "restaurant_menu", //las la-dice
    link: "https://chat.quasar.dev",
    outside: 1,
  },
  {
    title: "Twitter",
    caption: "",
    icon: "fitness_center",
    link: "https://twitter.quasar.dev",
    outside: 1,
  },

  {
    title: "Quasar Awesome",
    caption: "Community projects",
    icon: "mdi-clipboard-list-outline",
    link: "https://awesome.quasar.dev",
    outside: 1,
  },
];
linksList = [];
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    // LogoSVG,
    Modal,
    JustHeart,
    BaseMeasure,
    HeartPulse,
    NewPrescriptionButton,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      baseURL: ref("https://rmatter.com/health-full"),
      showModal: ref(false),
      showCitationModal: ref(false),
      citationName: ref(""),
      citationID: ref(""),
      citationCaption: ref(""),
      citationShort: ref(""),
      citationSummary: ref(""),
      citationWhy: ref(""),
      citationTheme: ref(""),
      essentialLinks: linksList,
      isNewUser: localStorage.getItem("userAge") === "null",
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    random(min = 0, max = 1) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    randomCaption(route = "home") {
      const home = [
        "Where the magic happens",
        "Challenges & Quests",
        "See your stats",
      ];
      const prescription = ["The Doctor Recommends..."];
      const inventory = ["Nothing here yet..."];
      let index = this.random(0, eval(route).length - 1);

      return eval(route)[index];
    },
    citation(id, name, caption, short, summary, why, theme, show = true) {
      // this.showModal = false;
      // window.scroll({
      //   top: top,
      //   left: 0,
      //   behavior: "smooth",
      // });
      console.log("CITE:", name, id, this.showCitationModal);
      this.showCitationModal = show;
      this.citationName = name;
      this.citationID = id;
      this.citationCaption = caption;
      this.citationShort = short;
      this.citationSummary = summary;
      this.citationWhy = why;
      this.citationTheme = theme;
    },
    toggleModal() {
      console.log("togglin!");
      if (this.showModal) {
        setTimeout(() => {
          this.showModal = !this.showModal;
        }, 250);
      } else {
        this.showModal = !this.showModal;
      }

      console.log("toggleMod:", this.showModal, this.showModal);
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
  },
  computed: {
    citationSummaryFormat() {
      return this.citationSummary.replaceAll("''", '"');
    },
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Saira+Stencil+One&display=swap&family=Ms+Madi");
* {
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  box-sizing: border-box;
}

#health-bar {
  -webkit-box-shadow: 0px 0px 105px 0px rgba(45, 255, 196, 0.9);
  -moz-box-shadow: 0px 0px 105px 0px rgba(45, 255, 196, 0.9);
  box-shadow: 0px 0px 105px 0px rgba(45, 255, 196, 0.9);
  border: 10px solid #ff9900;
  fill: #00ff95;
  stroke-width: 1;
  stroke: rgb(0, 0, 0);
  rx: 0;
  /* -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7)); */
  filter: drop-shadow(0 0 0.1rem rgba(45, 255, 196, 0.9));
}
body {
  background: #cdcdcd;
}
#app {
  background: #beb6b3;
  box-sizing: border-box;
  /* blockCursor */
  cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADAAAAAwAAAA8AAAAPAAAADAAAAAwAAAM8AAADPAAAA/wAAAP8AAAD/wAAA/8AAAP8AAAD/AAAA/AAAAPwAAADwAAAA8AAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////D////w////wD///8A////A////wP//zwD//88A///DA///wwP//8AD///AA///wAA//8AAP//AAP//wAD//8AD///AA///wA///8AP///AP///wD///8D////A////w////8P////P////z////8="),
    auto;
}
.container {
  background-color: #c4bebb;
}
.isHidden {
  display: none;
}
.noBord {
  border-bottom: 2px solid #00000000 !important;
}
.header {
  margin: 2px;
}
.hasRPGStyle {
  font-family: "Press Start 2P", cursive;
}
.holdQuests {
  /* max-height:500px; */
  min-width: 150px;
  overflow: scroll;
  width: auto;
  margin-bottom: 100px;
}
.activityButtons {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 50px !important;
  padding: 5px;
  color: white;
  text-align: center;
  background: #beb6b3;
  min-height: 45px;
}
#mapDivId {
  width: 100%;
  max-height: 60vh;
  min-height: 60vh;
  margin-top: 5px;
}
.mapHud {
  height: 20vh;
}
.m-auto {
  margin: auto;
  border: 5px double #1c6ea4;
  border-radius: 9px 9px 9px 9px;
  padding: 5px;
}
.blueDoubleBorder {
  border: 5px double #1c6ea4;
  border-radius: 9px 9px 9px 9px;
  padding: 5px;
}
.graphPaper {
  background-color: #e5e5f7;
  opacity: 1;
  background-image: linear-gradient(#444cf7 2px, transparent 2px),
    linear-gradient(90deg, #444cf7 2px, transparent 2px),
    linear-gradient(#444cf7 1px, transparent 1px),
    linear-gradient(90deg, #444cf7 1px, #e5e5f7 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
.graphPaper-2 {
  background-color: #ffffff;
  opacity: 1;
  background-image: linear-gradient(#efefff 2px, transparent 2px),
    linear-gradient(90deg, #efefff 2px, transparent 2px),
    linear-gradient(#efefff 1px, transparent 1px),
    linear-gradient(90deg, #efefff 1px, #ffffff 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}
.paperSheet {
  background: #e8ebe6;
  border: 1px solid #999999 !important;
  padding: 5px;
  overflow: scroll;
}
.paperSheetFlat {
  background: #e8ebe6;
  border: 1px solid #777777 !important;
  padding: 1em;
  margin: 1em;
  // overflow-y: scroll;
}
table tr {
  border-bottom: 2px dotted #96ade9 !important;
}
thead th {
  border-bottom: 3px dotted #778ec9 !important;
}
.clipBoard {
  text-align: left;

  padding: 0.5em;
  border-radius: 5px;
  background-color: #ffffff;
  opacity: 1;
  background-image: repeating-linear-gradient(
      45deg,
      #e9e9ff 25%,
      transparent 25%,
      transparent 75%,
      #e9e9ff 75%,
      #e9e9ff
    ),
    repeating-linear-gradient(
      45deg,
      #e9e9ff 25%,
      #ffffff 25%,
      #ffffff 75%,
      #e9e9ff 75%,
      #e9e9ff
    );
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  border: 2px solid #af996e;
  background: #af996e;
  background-color: #af996e;
  padding-top: 5em;
  background-image: linear-gradient(135deg, #c7aa70 25%, transparent 25%),
    linear-gradient(225deg, #c7aa70 25%, transparent 25%),
    linear-gradient(45deg, #c7aa70 25%, transparent 25%),
    linear-gradient(315deg, #c7aa70 25%, #af996e 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
  border: 5px solid #93815e;
}

.clip {
  top: 60px;
  height: 45px;
  max-width: 150px;
  position: relative;
  margin: auto;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  z-index: 99;
  background: rgb(118, 119, 121);
  /* border:2px solid #0d4aff; */
  /* background: -moz-linear-gradient(top, rgba(118,119,121,1) 0%, rgba(153,154,158,1) 8%, rgba(233,233,225,1) 31%, rgba(175,176,180,1) 61%, rgba(145,153,156,1) 76%, rgba(87,94,88,1) 92%, rgba(145,153,156,1) 95%, rgba(175,176,180,1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(118,119,121,1)), color-stop(8%,rgba(153,154,158,1)), color-stop(31%,rgba(233,233,225,1)), color-stop(61%,rgba(175,176,180,1)), color-stop(76%,rgba(145,153,156,1)), color-stop(92%,rgba(87,94,88,1)), color-stop(95%,rgba(145,153,156,1)), color-stop(100%,rgba(175,176,180,1)));
    background: -webkit-linear-gradient(top, rgba(118,119,121,1) 0%,rgba(153,154,158,1) 8%,rgba(233,233,225,1) 31%,rgba(175,176,180,1) 61%,rgba(145,153,156,1) 76%,rgba(87,94,88,1) 92%,rgba(145,153,156,1) 95%,rgba(175,176,180,1) 100%); */
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}

.clip:before {
  content: "";
  position: absolute;
  height: 50%;
  width: 50%;
  top: -50%;
  left: 27%;
  z-index: 50;
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  background-color: rgba(118, 119, 121, 1);
  /* border:2px solid #33aa00; */
  border-bottom: none;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}

.clip:after {
  content: "";
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid rgba(65, 65, 67, 0.8);
  top: -10px;
  left: 46%;
  z-index: 75;
  background-color: #ffffff99;
  position: absolute;
}
.clipboard table {
}
.questItem {
  font-family: "Press Start 2P", cursive;
  padding: 10px;
  background: #e8dcb8;
  border: 1px solid #000;
  margin-bottom: 3px;
}

html {
  background: repeating-linear-gradient(
    0deg,
    #b160bc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
  cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADAAAAAwAAAA8AAAAPAAAADAAAAAwAAAM8AAADPAAAA/wAAAP8AAAD/wAAA/8AAAP8AAAD/AAAA/AAAAPwAAADwAAAA8AAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////D////w////wD///8A////A////wP//zwD//88A///DA///wwP//8AD///AA///wAA//8AAP//AAP//wAD//8AD///AA///wA///8AP///AP///wD///8D////A////w////8P////P////z////8="),
    auto;
}
.isOpen {
  background: #33aa00;
  border: 1px solid #000;
}
.isClosed {
  background-color: #aa3300;
  border: 1px solid #000;
}
.centerMapButton {
  filter: opacity(0.8);
  width: 100%;
  margin: 55px 0px 5px 0px;
}
.estiStats {
  font-size: 1.5em;
  background-color: #cdc3a6;
  padding: 5px;
  text-align: center;
}
.rpgClickCursor,
.rpgClickCursor:active,
.rpgClickCursor:hover,
.q-item {
  cursor: url("data:image/x-icon;base64,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"),
    auto;
}

.blockCursor,
label {
  cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADAAAAAwAAAA8AAAAPAAAADAAAAAwAAAM8AAADPAAAA/wAAAP8AAAD/wAAA/8AAAP8AAAD/AAAA/AAAAPwAAADwAAAA8AAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////D////w////wD///8A////A////wP//zwD//88A///DA///wwP//8AD///AA///wAA//8AAP//AAP//wAD//8AD///AA///wA///8AP///AP///wD///8D////A////w////8P////P////z////8="),
    auto;
}
a,
.blockCursor:hover,
input:hover,
button:hover,
select:hover,
.activityButtons:hover,
.centerMapButton:hover,
.btn:hover,
.travelModeButton:hover {
  cursor: url("data:image/x-icon;base64,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"),
    auto;
}
.travelModeButton {
  text-shadow: $info 1px 0px 0px, $info 0.540302px 0.841471px 0px,
    $info -0.416147px 0.909297px 0px, $info -0.989992px 0.14112px 0px,
    $info -0.653644px -0.756802px 0px, $info 0.283662px -0.958924px 0px,
    $info 0.96017px -0.279415px 0px;
}
.travelModeWarning {
  text-shadow: $warning 1px 0px 0px, $warning 0.540302px 0.841471px 0px,
    $warning -0.416147px 0.909297px 0px, $warning -0.989992px 0.14112px 0px,
    $warning -0.653644px -0.756802px 0px, $warning 0.283662px -0.958924px 0px,
    $warning 0.96017px -0.279415px 0px;
}
.travelModePositive {
  text-shadow: $positive 1px 0px 0px, $positive 0.540302px 0.841471px 0px,
    $positive -0.416147px 0.909297px 0px, $positive -0.989992px 0.14112px 0px,
    $positive -0.653644px -0.756802px 0px, $positive 0.283662px -0.958924px 0px,
    $positive 0.96017px -0.279415px 0px;
}
.travelModeNegative {
  text-shadow: $negative 1px 0px 0px, $negative 0.540302px 0.841471px 0px,
    $negative -0.416147px 0.909297px 0px, $negative -0.989992px 0.14112px 0px,
    $negative -0.653644px -0.756802px 0px, $negative 0.283662px -0.958924px 0px,
    $negative 0.96017px -0.279415px 0px;
}
.infowin {
  line-height: 2em;
  /* background-color: #943030; */
  border: 1px solid #000;
  display: block;
  cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADAAAAAwAAAA8AAAAPAAAADAAAAAwAAAM8AAADPAAAA/wAAAP8AAAD/wAAA/8AAAP8AAAD/AAAA/AAAAPwAAADwAAAA8AAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////D////w////wD///8A////A////wP//zwD//88A///DA///wwP//8AD///AA///wAA//8AAP//AAP//wAD//8AD///AA///wA///8AP///AP///wD///8D////A////w////8P////P////z////8="),
    auto;
}
.infowin p {
  /* padding:1em 1em 0em 1em; */
}

.rewardPointsFlex {
  position: relative;
  margin: 1em;
  padding: 1em;
  border: 5px double #1c6ea4;
  border-radius: 10px;
}

.infoWindowReward {
  padding: 4px;
  position: relative;
  font-size: 3em;
  border: 2px solid #ffaa00;
  border-radius: 10%;
  margin-right: 5px;
  padding-top: 0px;

  /* border-bottom:7px double #ddaa00;
    border-right:7px double #b07808; */
  background: #e5e5f7;
  display: inline-block;
  text-align: center;
}
.infoWindowReward span {
  color: #333333;
  display: inline-block;
  position: relative;
  display: block;
  white-space: nowrap;
}
.blueToYellow {
  animation: animateBgReward 3s linear infinite;
  background-image: linear-gradient(
    90deg,
    #1a5fb4,
    #f9f06b,
    #99c1f1,
    #1a5fb4,
    #f9f06b
  );
  background-size: 500% 100%;
}
.whiteToYellow {
  animation: animateBgReward 3s linear infinite;
  background-image: linear-gradient(
    90deg,
    #dcfaff,
    #f9f06b,
    #dcfaff,
    #ffffff,
    #f9f06b
  );
  background-size: 500% 100%;
}
.rainbowToRainbow {
  animation: animateBgReward 3s linear infinite;
  background-image: linear-gradient(
    90deg,
    #dcfaff,
    #f9f06b,
    $warning $primary,
    $info,
    $secondary,
    $accent,
    $negative,
    $positive,
    #dcfaff,
    #ffffff,
    #f9f06b
  );
  background-size: 500% 100%;
}
.infoWindowRewardLabel {
  font-size: 1em;
  font-color: #666666;
  position: absolute;
  float: left;
  display: none;
}
.infoWindowReward:hover,
.infoWindowReward:active {
  animation: animateBgReward 2s linear infinite;
  background-image: linear-gradient(
    90deg,
    #1a5fb4,
    #f9f06b,
    #99c1f1,
    #1a5fb4,
    #f9f06b
  );
  background-size: 500% 100%;
  transition: all 0.5s;
  -webkit-box-shadow: inset 5px 5px 15px 5px #000000;
  box-shadow: inset 5px 5px 15px 5px #000000;
  opacity: 0.8;
  text-shadow: 2px 2px 2px #3366ff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0d4aff,
    0 0 30px #2f18ff, 0 0 40px #18dcff, 0 0 55px #18ffe0, 0 0 75px #18f0ff,
    2px 2px 2px rgba(36, 107, 206, 0), 2px 2px 2px #000000, -1px -1px #444;
  /* border-bottom:1px solid #ddaa00;
    border-right:1px double #b07808; */
}

@keyframes animateBgReward {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}
.infoWindowText {
  margin: 5px;
}

.horizontal-list {
  display: block;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding: 5px;
  text-align: center;
}
.horizontal-list li {
  display: inline-block;
  /* background:#ff9900; */
  margin-right: 1em;
  justify-content: space-between;
  list-style-type: circle;
}
.horizontal-list li:before {
  content: "• ";
}
.nes {
  cursor: default !important;
}
.q-footer {
  padding: 5px;
}
.powerBar {
  display: block;
  border: solid 2px #66ff88;
  max-width: 100%;
  min-width: 100px;
  width: auto;
  height: 10px;
  background: #14c239;
  margin-bottom: 5px;
}
.powerBarGlow {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(45, 255, 196, 0.9);
  -moz-box-shadow: 0px 0px 15px 0px rgba(45, 255, 196, 0.9);
  box-shadow: 0px 0px 15px 0px rgba(45, 255, 196, 0.9);
}
.powerBar:before {
  /* content: "";
  display: inline-block;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  border-bottom: 15px solid #000000; */
}
.holdTitle {
  position: relative;
  bottom: 5px;
  display: inline-block;
  /* border: 1px solid #ff9900; */
}

button {
  cursor: pointer;
  outline: 0;
  color: #fff;
  background-color: $primary;
  border-color: $info;
  display: inline-block;

  text-align: center;
  border: 1px solid transparent;
  padding: 3px;

  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button:hover {
  color: #fff;
  background-color: $secondary;
  border-color: $accent;
}
.btn-group {
  margin-left: 1px;
}
.btn-group button:last-child {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  // border-left: 1px solid #00ff95;
  margin-left: 1px;
}
.btn-group button:first-child {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  // border-right: 1px solid $primary;
}
.pressStartArrow {
  font-size: 0.75em;
}
.pressStartArrow::before {
  content: "▶";
  // right: -2em;
  right: 0.25em;
  // top: -0.25em;
  position: relative;
  font-size: 2em;
  animation: blinker 2s steps(1, end) infinite;
  // color: $info;
}
.baseButtonIcon:active {
  color: $warning;
}
ul {
  list-style: none;
}

ul ol li:before {
  content: "";
  padding-right: 5px;
  font-size: 1.5em;
}
.normal-ul li:before {
  content: "i";
  padding-right: 5px;
  font-size: 1.5em;
  animation: none;
}

ul li:before {
  content: "▶";
  padding-right: 5px;
  font-size: 1.5em;
}
ul li:before {
}
ul li:nth-child(1):before {
  animation: blinker 2s steps(1, end) infinite;
}
ul li:nth-child(2):before {
  animation: blinker 2s steps(1, end) 0.25s infinite;
}
ul li:nth-child(3):before {
  animation: blinker 2s steps(1, end) 0.5s infinite;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
}
ul li:nth-child(4):before {
  animation: blinker 2s steps(1, end) 0.75s infinite;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
}
ul li:nth-child(5):before {
  animation: blinker 2s steps(1, end) 1s infinite;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
}
ul li:nth-child(6):before {
  animation: blinker 2s steps(1, end) 1.25s infinite;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
}
.normal-ul li:before {
  content: "•";
  list-style-type: circle;
  padding-right: 5px;
  font-size: 1.5em;
  animation: none !important;
}
.noblink-ul li:before {
  animation: none !important;
}
</style>
