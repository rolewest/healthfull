<template>
  <div>
    <!-- ref="bpmIcon" -->
    <button
      :class="{
        'btn-info btn-primary travelModeButton text-h2': true,
        'bg-info travelModeNegative': this.$route.name == 'prescription',
      }"
      @click="this.$router.push({ name: 'prescription' })"
    >
      <q-icon
        name="mdi-clipboard-pulse "
        :class="{ prescriptionIcon: this.$route.name != 'prescription' }"
      >
        <!-- <span class="pulseCountString" v-if="userLastBPM > 0">
          {{ userLastBPM.toFixed(0) }}
        </span>
        -->
        <br />
        <!-- <span class="bpmString">bpm</span> -->
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
  methods: {},
  computed: {},
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
.prescriptionIcon {
  position: relative;
}
.prescriptionIcon {
  // animation: colorCycle 2s ease infinite, glower 3s ease forwards infinite;
  // color: $info;
  text-shadow: $positive 1px 0px 0px, $positive 0.540302px 0.841471px 0px,
    $positive -0.416147px 0.909297px 0px, $positive -0.989992px 0.14112px 0px,
    $positive -0.653644px -0.756802px 0px, $positive 0.283662px -0.958924px 0px,
    $positive 0.96017px -0.279415px 0px;
  // background: #ff9900;
  animation: textOutlineCycle 2s ease infinite;
}
.prescriptionIcon:active {
  color: $info;
}
.prescriptionCountString {
  position: absolute;
  top: 0;
  font-size: 16px;
  color: $positive;
  text-shadow: $info 1px 0px 0px, $info 0.540302px 0.841471px 0px,
    $info -0.416147px 0.909297px 0px, $info -0.989992px 0.14112px 0px,
    $info -0.653644px -0.756802px 0px, $info 0.283662px -0.958924px 0px,
    $info 0.96017px -0.279415px 0px;
}
.prescriptionCountString div {
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
@keyframes textOutlineCycle {
  0% {
    text-shadow: $positive 1px 0px 0px, $positive 0.540302px 0.841471px 0px,
      $positive -0.416147px 0.909297px 0px, $positive -0.989992px 0.14112px 0px,
      $positive -0.653644px -0.756802px 0px,
      $positive 0.283662px -0.958924px 0px, $positive 0.96017px -0.279415px 0px;
  }
  50% {
    text-shadow: $warning 1px 0px 0px, $warning 0.540302px 0.841471px 0px,
      $warning -0.416147px 0.909297px 0px, $warning -0.989992px 0.14112px 0px,
      $warning -0.653644px -0.756802px 0px, $warning 0.283662px -0.958924px 0px,
      $warning 0.96017px -0.279415px 0px;
  }
  75% {
    text-shadow: $accent 1px 0px 0px, $accent 0.540302px 0.841471px 0px,
      $accent -0.416147px 0.909297px 0px, $accent -0.989992px 0.14112px 0px,
      $accent -0.653644px -0.756802px 0px, $accent 0.283662px -0.958924px 0px,
      $accent 0.96017px -0.279415px 0px;
  }
  100% {
    text-shadow: $info 1px 0px 0px, $info 0.540302px 0.841471px 0px,
      $info -0.416147px 0.909297px 0px, $info -0.989992px 0.14112px 0px,
      $info -0.653644px -0.756802px 0px, $info 0.283662px -0.958924px 0px,
      $info 0.96017px -0.279415px 0px;
  }
}
</style>
