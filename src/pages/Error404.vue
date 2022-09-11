<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 10vh" class="title-h4">404</div>

      <div class="title-h4" style="opacity: 0.7">
        Oops. Nothing here...
        <h1>😶‍🌫️</h1>
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Saira+Stencil+One&display=swap");
* {
  font-family: "Press Start 2P", cursive;
  font-size: 10px;
  box-sizing: border-box;
  cursor: url("data:image/x-icon;base64,AAACAAEAICACAAAAAAAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADAAAAAwAAAA8AAAAPAAAADAAAAAwAAAM8AAADPAAAA/wAAAP8AAAD/wAAA/8AAAP8AAAD/AAAA/AAAAPwAAADwAAAA8AAAAMAAAADAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////D////w////wD///8A////A////wP//zwD//88A///DA///wwP//8AD///AA///wAA//8AAP//AAP//wAD//8AD///AA///wA///8AP///AP///wD///8D////A////w////8P////P////z////8="),
    auto;
}

.title-h4 {
  font-size: 1.8em;
  text-align: center;
  text-decoration: double;

  display: block;
  text-shadow: 2px 2px 0 $negative, 2px -2px 0 $negative, -2px 2px 0 $negative,
    -2px -2px 0 $negative, 2px 0px 0 $negative, 0px 2px 0 $negative,
    -2px 0px 0 $negative, 0px -2px 0 $negative;
}
</style>
