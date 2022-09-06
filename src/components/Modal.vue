<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="basicModal">
      <slot>Error Loading...</slot>

      <slot name="links" class="rpgClickCursor linkHold"></slot>
      <div class="closeBox rpgClickCursor" @click="closeModal">X</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated!");
  },
};
</script>

<style lang="scss">
.backdrop {
  top: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: auto;
  min-height: 110%;
  z-index: 10000;
  transition: all 2s linear 1s;
}

.basicModal {
  position: relative;
  max-width: 700px;
  padding: 20px;
  min-height: 250px;
  margin: 100px auto;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #333;
  z-index: 110;
  border: 5px double #1c6ea4;
  border-radius: 9px 9px 9px 9px;
  padding: 5px;
}
.basicModal h1 {
  border: none;
  margin: 0em;
  color: #03cfb4;
  margin: 0.25em 0px 0.5em 0px;
  text-align: center;
  font-size: 3em;
}
.basicModal .closeBox {
  position: absolute;
  right: -5px;
  top: -5px;
  width: 32px;
  height: 32px;
  border: 1px solid #1c6ea4;
  padding: 2px;
  font-size: 2em;
  text-align: center;
  transition: all 0.5s ease-in-out;
  cursor: rpgClickCursor;
  z-index: 10000;
  background: #ffffff;
  color: #999999;
  -webkit-box-shadow: 0px 0px 5px 2px #000000;
  box-shadow: 0px 0px 5px 2px #000000;
}
.basicModal .closeBox:hover {
  -webkit-box-shadow: 0px 3px 4px -3px #444499;
  box-shadow: 0px 3px 4px -3px #444499;

  transform: rotate(360deg) scale(1.5);
  color: #000000;
}
.basicModal .closeBox:active {
  -webkit-box-shadow: inset 0px 0px 6px 2px #000000;
  box-shadow: inset 0px 0px 6px 2px #000000;
  color: #998800;
}
</style>
