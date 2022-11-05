<template>
  <div ref="bpmIcon">
    <button
      class="btn-info btn-primary travelModeButton text-h2"
      @click="tapTempo()"
    >
      <q-icon name="mdi-heart-pulse pulseIcon"
        ><span class="pulseCountString" v-if="userLastBPM > 0">
          {{ userLastBPM.toFixed(0) }}
        </span>
        <br />
        <span class="bpmString">bpm</span>
      </q-icon>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLastBPM: 0,
      userLastBPMData: { startTime: 0, tapCount: 0 },
      deviceData: "...",
    };
  },
  methods: {
    getMotionPermission() {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
          .then((response) => {
            // (optional) Do something after API prompt dismissed.

            if (response == "granted") {
              window.addEventListener("devicemotion", (event) => {
                // do something for 'e' here.
                console.log("motion:", event);
                this.deviceData = event;
              });
            }
          })
          .catch(console.error);
      } else {
        alert("DeviceMotionEvent is not defined");
      }
    },
    handleMotionEvent(event) {
      console.log("motion:", event);
      this.deviceData = event;
    },
    tapTempo() {
      let startTime = this.userLastBPMData["startTime"];
      let tapCount = this.userLastBPMData["tapCount"];
      // console.log("lastBPM:", this.userLastBPM, "data:", this.userLastBPMData);
      this.userLastBPMData["tapCount"]++;
      console.log("whatthe", this.$refs.bpmIcon.classList);
      this.$refs.bpmIcon.classList.add("pulseBPMTap");
      if (startTime === 0) {
        this.userLastBPMData["startTime"] = Date.now();
      }
      if (Date.now() - startTime >= 1000) {
        let bpmx = ((60000 * tapCount) / (Date.now() - startTime)) * 2;
        // console.log("BPM!,bpmx", bpmx);
        this.userLastBPM = bpmx;
        // window.localStorage.set("userRHR", bpmx);
        if (bpmx > 0) {
          // window.navigator.vibrate(300);
          // console.log("whyzero", this.userLastBPM);
        }

        this.userLastBPMData["tapCount"] = 0;
        this.userLastBPMData["startTime"] = Date.now();
      }
      setTimeout(() => {
        this.$refs.bpmIcon.classList.remove("pulseBPMTap");
      }, 1000);
    },
  },
  mounted() {
    // this.$el.addEventListener("devicemotion", this.handleMotionEvent, true);
    // this.$el.addEventListener("click", this.onClick);
  },
  unmounted() {
    // this.$el.removeEventListener("devicemotion", this.handleMotionEvent, true);
    // this.$el.removeEventListener("click", this.onClick);
  },
};
</script>

<style lang="scss">
.pulseIcon {
  position: relative;
}
.pulseIcon:active {
  color: $negative;
}
.pulseCountString {
  position: absolute;
  top: 0;
  font-size: 16px;
  color: $positive;
  text-shadow: $info 1px 0px 0px, $info 0.540302px 0.841471px 0px,
    $info -0.416147px 0.909297px 0px, $info -0.989992px 0.14112px 0px,
    $info -0.653644px -0.756802px 0px, $info 0.283662px -0.958924px 0px,
    $info 0.96017px -0.279415px 0px;
}
.pulseCountString div {
  bottom: 2em;
  left: 0em;
}
.bpmString {
  position: absolute;
  bottom: 0;
}
.statsString {
  position: absolute;
  bottom: -2.5em;
  // color: #ff9900;
  font-size: 10px;
}
</style>
