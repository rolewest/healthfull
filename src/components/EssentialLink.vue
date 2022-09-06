<template>
  <q-item v-if="outside === 2" class="menu-option">
    <q-item-section clickable @click="this.toggleModal" v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section @click="this.toggleModal">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption> {{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-if="outside === 1" class="menu-option">
    <q-item-section
      clickable
      tag="a"
      target="_blank"
      :href="link"
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption> {{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item v-else-if="outside === 0" class="menu-option">
    <q-item-section
      clickable
      tag="a"
      target="_blank"
      :href="link"
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption> {{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
  <!-- <button
    class="mdi mdi-weight-lifter btn-info btn-primary travelModeButton text-h1"
    @click="this.toggleModal"
  ></button> -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",

  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    outside: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    toggleModal() {
      this.leftDrawerOpen = false;
      console.log("togglin!");
      console.log(this.$parent);
      this.showModal = !this.showModal;
      console.log("toggleMod:", this.showModal, this.showModal);
    },
  },
});
</script>
<style lang="scss">
.q-item,
.q-icon,
.q-item__label {
  /* display: inline-block; */
  /* border: 1px solid #ff9900; */
}
.menu-option {
  // border-bottom: 1px solid #cdcdcd;
}
.menu-option:active,
.menu-option:hover,
.menu-option:active,
.menu-option:hover {
  background: $info;
  color: $warning;
}

.menu-option:active .text-caption,
.menu-option:hover .text-caption {
  color: $secondary;
}
</style>
