<template>
  <div :class="['backdrop', { [theme]: theme, cite }]" @click.self="closeModal">
    <div :class="{ basicModal: true }">
      <slot>Error Loading...</slot>

      <slot name="cite" class="rpgClickCursor linkHold">Loading...</slot>
      <slot name="links" class="rpgClickCursor linkHold"></slot
      ><span
        :class="[
          'iconBox',
          {
            'mdi mdi-alert': theme === 'theme-red',

            'text-warning': theme === 'theme-notice' || theme === 'theme-red',
            'mdi mdi-alert-octagon': theme === 'theme-notice',
            'mdi mdi-alert-circle-check': theme === 'theme-checked',
            'text-positive': theme === 'theme-checked',
          },
        ]"
      ></span>
      <div
        :class="['rpgClickCursor', { closeBox: !theme, closeBoxCite: theme }]"
        @click="closeModal"
      >
        X
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["links", "theme", "cite"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
  mounted() {
    console.log("mounted");
    // .scrollTop = objDiv.scrollHeight;
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
  z-index: 100000;
  background: #ffffff;
  color: #999999;
  -webkit-box-shadow: 0px 0px 5px 2px #000000;
  box-shadow: 0px 0px 5px 2px #000000;
}
.basicModal .iconBox {
  position: absolute;
  left: 5px;
  top: -5px;
  width: 32px;
  height: 32px;
  // border: 1px solid #1c6ea4;
  padding: 2px;
  font-size: 2.5em;
  text-align: center;
  transition: all 0.5s ease-in-out;
  cursor: rpgClickCursor;
  z-index: 10000;
  // background: #ffffff;
  color: #999999;
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
.basicModal .closeBoxCite {
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
  z-index: 100000;
  background: #ffffff99;
  color: #999999;
  -webkit-box-shadow: 0px 0px 5px 2px #000000;
  box-shadow: 0px 0px 5px 2px #000000;
}
.basicModal .closeBoxCite:hover {
  -webkit-box-shadow: 0px 3px 4px -3px #444499;
  box-shadow: 0px 3px 4px -3px #444499;
  right: 7px;
  top: 7px;
  transform: rotate(360deg) scale(1.5);
  color: #000000;
  background: #ffffffff;
  // animation: glower 2s ease infinite;
}
.cite {
  position: fixed;
  background: none;
  padding: 2em;
}
.cite .basicModal {
  overflow-y: auto;
  overflow-x: hidden;
  background: $warning;
  background-image: linear-gradient(135deg, $primary 25%, transparent 25%),
    linear-gradient(225deg, $primary 25%, transparent 25%),
    linear-gradient(45deg, $primary 25%, transparent 25%),
    linear-gradient(315deg, $primary 25%, $info 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
  border: 5px double #93815e;
  margin: 100px auto;
  left: -0.1em;
  max-height: 300px;
  height: 300px;
  max-width: 600px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000, inset 2px 2px 15px 2px #000000;
  transition: all 2s linear 1s;
}

.title-h4 {
  font-size: 1.8em;
  text-align: center;
  text-decoration: double;
  // border: 1px solid $primary;
  display: block;
  text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
    -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
    0px -2px 0 $info;
}
.title-h6 {
  font-size: 1.2em;

  text-decoration: double;
  // border: 1px solid $primary;
  display: block;
  text-shadow: 2px 2px 0 $info, 2px -2px 0 $info, -2px 2px 0 $info,
    -2px -2px 0 $info, 2px 0px 0 $info, 0px 2px 0 $info, -2px 0px 0 $info,
    0px -2px 0 $info;
}
.cite-text {
  font-family: "Courier New", Courier, monospace !important;
  // font-family: Lucida Sans Typewriter, Lucida Console, monaco,
  ////    Vera Sans Mono, monospace;
  // font-family: monospace;
  font-size: 1.5em;
  max-height: 150px;
}
.theme-red .basicModal {
  background: $warning;
  background-image: linear-gradient(135deg, $negative 25%, transparent 25%),
    linear-gradient(225deg, $negative 25%, transparent 25%),
    linear-gradient(45deg, $negative 25%, transparent 25%),
    linear-gradient(315deg, $negative 25%, $accent 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
  border: 5px double #93815e;
  margin: 100px auto;
  left: -0.1em;
  min-height: 200px;
  max-width: 600px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000, inset 2px 2px 15px 2px #000000;
  transition: all 2s linear 1s;
}
.theme-notice .basicModal {
  background: $warning;
  background-image: linear-gradient(135deg, $primary 25%, transparent 25%),
    linear-gradient(225deg, $primary 25%, transparent 25%),
    linear-gradient(45deg, $primary 25%, transparent 25%),
    linear-gradient(315deg, $primary 25%, $accent 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
  border: 5px double #93815e;
  margin: 100px auto;
  left: -0.1em;
  min-height: 200px;
  max-width: 600px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000, inset 2px 2px 15px 2px #000000;
  transition: all 2s linear 1s;
}
//css animation.
</style>
