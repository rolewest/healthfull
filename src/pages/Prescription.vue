<template>
  <Prescription />
  <div class="text-center">
    <q-btn @click="this.$router.push({ name: 'measure' })" color="info"
      >Update My Progress</q-btn
    ><q-btn @click="this.$router.push({ name: 'measure' })" color="primary"
      >Update My Measurements</q-btn
    >
  </div>
  <Clipboard />
  <div class="text-center">
    <q-btn @click="this.$router.push({ name: 'measure' })" color="primary"
      >Update My Measurements</q-btn
    >
  </div>
</template>

<script>
import Prescription from "src/components/PrescriptionComponent.vue";
import Clipboard from "src/components/Clipboard.vue";
export default {
  props: [],
  components: {
    Prescription,
    Clipboard,
  },
  data() {
    return {
      methods: {},
      mounted() {
        console.log("basemeasure mounted");
        if (this.userHeightImp != "null" && this.userHeightImp !== null)
          this.toggleCM(false);
        // this.toggleCM(this.userCM);
        // this.toggleKG(this.userKG);

        console.log("this.$store.", this.$store);
        console.log("currentGender:", this.userGender);

        // setTimeout(() => {
        //   console.log("filp!!?");
        //   this.flipGender(this.userGender - 1);
        // }, 3000);
        // console.log("gendered:", this.userGender);
        // this.flipGender(-1);
        // this.$emit("flipGender", -1);
        // if (this.$refs?.flipMale) {
        //   if (this.userGender == 0) this.$refs.flipMale.click();
        //   if (this.userGender == 1) this.$refs.flipFemale.click();
        // } else {
        //   console.log("noBUTTONS");
        // }
      },
    };
  },
};
</script>

<style lang="scss"></style>
