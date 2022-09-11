<template>
  <!-- Work & Play -->
  <div class="questItem shadow-sm p-3" id="statsInput">
    <div class="is-card-type">
      <span class="title-text">Work, Play & Rest</span>
    </div>
    <div class="row no-wrap justify-between is-retro-icon">
      <div class="mdi mdi-chair-school text-h2 pr-5 text-left"></div>

      <div class="mdi mdi-karate text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-desk text-h2 pr-5 text-left"></div>
      <div class="mdi mdi-bike-fast text-h2 pr-5 text-right"></div>

      <div class="mdi mdi-football-helmet text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-baseball-bat text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-train-car text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-gamepad-square text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-chair-rolling text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-face-agent text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-dog-service text-h2 pr-5 text-right"></div>
    </div>

    <fieldset class="with-title is-centered">
      <legend class="title">How I Work</legend>
      <p>How do you spend your days?</p>
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="-1"
          v-model="userBaseWork"
        />
        <span class="check-label">Mostly Sitting (desk job)</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="stand"
          v-model="userBaseWork"
        />
        <span class="check-label">Mostly Standing (sales person)</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="walk"
          v-model="userBaseWork"
        />
        <span class="check-label">Mostly Walking (food server)</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="move"
          v-model="userBaseWork"
        />
        <span class="check-label">Very Active (bike courier)</span>
      </label>
    </fieldset>
    <!-- play -->
    <fieldset class="with-title is-centered">
      <legend class="title">How I Play</legend>
      <p>Do You Get <b>Daily</b> Exercise?</p>

      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="none"
          v-model="userBaseExercise"
          @click="userBaseExercise = []"
        />
        <span class="check-label">Not Really</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="sports"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Play Active Sports</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="tv"
          v-model="userBaseExercise"
        />
        <span class="check-label">2+ Hours Watching TV/Phone/Computer</span>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="walk5"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Walk for 5+ Minutes</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="jog"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Jog/Bike for 5+ minutes</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="sweat"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Work Up a Sweat</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="gym"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Go To The Gym</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="yoga"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Do Yoga</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="mma"
          v-model="userBaseExercise"
        />
        <span class="check-label">I Do Martial Arts</span> </label
      ><br />
      <label>
        <input
          type="checkbox"
          class="nes-radio"
          value="arts"
          v-model="userBaseExercise"
        />
        <span class="check-label">Pottery, Painting, Chess</span>
      </label>
      {{ userBaseExercise }}
    </fieldset>
  </div>

  <!-- Diet & Lifestyle -->
  <div class="questItem shadow-sm p-3" id="statsInput">
    <div class="is-card-type">
      <span class="title-text">Diet & Lifestyle</span>
    </div>
    <div class="row no-wrap justify-between is-retro-icon">
      <div class="mdi mdi-knife text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-food text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-glass-wine text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-shaker-outline text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-food-drumstick text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-gas-burner text-h2 pr-5 text-right"></div>
      <div
        class="mdi mdi-food-takeout-box-outline text-h2 pr-5 text-right"
      ></div>

      <div class="mdi mdi-dumbbell text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-spoon-sugar text-h2 pr-5 text-right"></div>
      <div class="mdi mdi-sausage text-h2 pr-5 text-right"></div>
    </div>

    <fieldset class="">
      <legend class="">How I Eat Most Weeks</legend>
      <p>In general how do you prepare your food?</p>

      <label>
        <input
          type="radio"
          class="nes-checkbox"
          value="togo"
          v-model="userCooks"
        />
        <span class="check-label">Delivery/Restaurant</span> </label
      ><br />
      <label>
        <input
          type="radio"
          class="nes-checkbox"
          value="cook"
          v-model="userCooks"
        />
        <span class="check-label">Home Cooked</span> </label
      ><br />
      <label>
        <input
          type="radio"
          class="nes-checkbox"
          value="packaged"
          v-model="userCooks"
        />
        <span class="check-label">Frozen/Packaged</span>
      </label>
      <!--  -->
      <hr />
      <p>What kinds of foods do you usually eat?</p>
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="whole"
          v-model="userWholeFood"
        />
        <span class="check-label">Usually Whole Foods</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="processed"
          v-model="userWholeFood"
        />
        <span class="check-label">Usually Processed Foods</span> </label
      ><br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="half"
          v-model="userWholeFood"
        />
        <span class="check-label">About 50/50</span>
      </label>
      <br />
      <label>
        <input
          type="radio"
          class="nes-radio"
          value="notsure"
          v-model="userWholeFood"
        />
        <span class="check-label">I Have No Idea</span>
      </label>
      <hr />
    </fieldset>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
